if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([
    'url',
    'async',
    'x-ray',
    'x-ray-phantom',
    'cheerio',
    '../models/Store'
], function(url, async, Xray, phantom, cheerio, Store) {
    var lastCallback;
    var xray = new Xray().driver(phantom(runner));

    function runner(ctx, nightmare) {
        nightmare.onExit = function(code, signal) {
            if (code !== 0) {
                console.trace('Nightmare exited on error: ', code, signal);

                lastCallback('Nightmare exited on error: ' + code);
            }
        };

        return nightmare
            // .useragent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36')
            // .goto(ctx.url)
            // .wait();
    }

    function findProduct(set, cb) {
        lastCallback = cb;

        var keyword = 'lego ' + set.get('setNumber');
        var url = 'http://www.toysrus.ca/search/index.jsp?fv=2510384&f=Taxonomy&fd=&fg=&keywords=' + keyword.replace(/ /gi, '+') + '&x=0&y=0';
        xray(url, 'body', {})
        (function(err, _, $) {
            if (err) { cb && cb(err); return; }

            var isProductPage = $('#price-review-age').length ? true : false;

            // TRU will redirect directly to PDP sometimes
            if (isProductPage) {
                var url = $('meta[property="og:url"]').attr('content');
                var product = parseProductPage(url, {}, $);

                cb && cb(null, product);
            }
            else {
                var $items = $('.parametric-results .TRU-product-summary-view a');

                if (!$items || !$items.length) { cb && cb('No items found'); return; }

                var $item = $items.eq(0);

                getProduct($item.attr('href'), cb);
            }
        });
    }

    function parseProductPage(url, product, $) {
        try {
            var setMatch = $('#price-review-age h1').text().trim().match(/\(([0-9]*)\)/);

            if (!setMatch) { console.trace('No set number found using title'); return; }

            product.setNumber = setMatch[1];
            product.title = $('#price-review-age h1').text().trim().replace(setMatch[0], '');

            product.url = url;
            product.title = $('#price-review-age h1').text().replace(/^\s+|\s+$/g, '');
            product.description = $('#description-product-tab p').first().html();
            product.inStockOnline = !$('.eligibility dt').first().hasClass('unavail');
            product.inStockNearby = !$('.eligibility dt').last().hasClass('unavail');

            if ($('.price dd.ours').length)
                product.currentPrice = parseFloat($('.price dd.ours').text().replace(/^\s+|\s+$/g, '').replace('$', ''));

            if ($('.price dd.list').length)
                product.originalPrice = parseFloat($('.price dd.list').text().replace(/^\s+|\s+$/g, '').replace('$', ''));
            else if (product.currentPrice)
                product.originalPrice = product.currentPrice;
        } catch(e) { console.trace(e); }

        return product;
    }

    function getProduct(url, cb) {
        console.trace('Getting product from URL: ' + url);
        xray(url, 'body', {})
        (function(err, product, $) {
            if (err) { console.trace(err); cb && cb(err); return; }

            var product = parseProductPage(url, product, $);

            cb && cb(null, product);
        });
    }

    function getProductList(cb) {
        lastCallback = cb;
        var url = 'http://www.toysrus.ca/family/index.jsp?categoryId=4022699';
        xray(url, '.parametric-results .TRU-product-summary-view', [{
            url: 'a@href',
            title: '.title'
        }])
        //.paginate('.bottom .pagination .next a[href]')
            // paginationUrl: function(url) {
            //     return url.replace('index.jsp/?', 'index.jsp?');
            // },
        .limit(1) // Set back to 100
        (function(err, items, $) {
            if (!items) { console.trace('No items found'); cb && cb(err); return; }

            var q = async.queue(function(item, next) {
                var parsedUrl = url.parse(item.url.replace(/\/ref=([a-z0-9_]+)\/([0-9]+)-([0-9]+)-([0-9]+)/gi, ''));
                delete parsedUrl.query;
                delete parsedUrl.search;
                var newUrl = url.format(parsedUrl);

                getProduct(newUrl, next);
            });

            items.forEach(function(item) {
                var setMatch = item.title.trim().match(/\(([0-9]*)\)/);

                if (!setMatch) { console.trace('No set number found using title'); return; }

                item.setNumber = setMatch[1];
                item.title = item.title.trim().replace(setMatch[0], '');

                q.push(item, function (item) {
                    console.log('finished processing ' + item.url);
                    cb && cb(null, item);
                });
            });

            // assign a callback
            q.drain = function() {
                console.log('all items have been processed');
            };
        });
    }

    return {
        title: 'TRU',
        region: 'CA',
        key: 'tru-ca',
        findProduct: findProduct,
        getProduct: getProduct,
        getProductList: getProductList
    };
});
