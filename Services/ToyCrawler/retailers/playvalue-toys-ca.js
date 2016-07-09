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
    var xray = new Xray().driver(phantom({onExit: function(code, signal) {
        if (code !== 0) {
            console.trace('Nightmare exited on error: ', code, signal);

            lastCallback('Nightmare exited on error: ' + code);
        }
    }}));

    function runner(ctx, nightmare) {
        nightmare.onExit = function(code, signal) {
            if (code !== 0) {
                console.trace('Nightmare exited on error: ', code, signal);

                lastCallback('Nightmare exited on error: ' + code);
            }
        };

        return nightmare
            .useragent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36')
            .goto(ctx.url)
            .wait();
    }

    function findProduct(set, cb) {
        lastCallback = cb;
        var keyword = 'lego ' + set.get('setNumber');
        var url = 'http://www.playvaluetoys.com/search.php?x=0&y=0&search_query=' + keyword.replace(/ /gi, '%20');
        xray(url, 'body', {})
        (function(err, _, $) {
            if (err) { cb && cb(err); return; }

            var $items = $('.ProductDetails a');

            if (!$items || !$items.length) { cb && cb('No items found'); return; }

            var $item = $items.eq(0);

            var setNumber = getSetNumberFromTitle($item.text().trim());

            if (!setNumber) { cb && cb('No set number found'); return; }
            if (setNumber != set.setNumber) { cb && cb('Found set but it doesnt match'); return; }

            getProduct($item.attr('href'), cb);
        });
    }

    function getSetNumberFromTitle(title) {
        var match = / ([0-9]+)$/gi.exec(title);
        if (match) return match[1];
    }

    function getProduct(url, cb) {
        console.trace('Getting product from URL: ' + url);

        xray(url, 'body', {})
        (function(err, product, $) {
            if (err) { cb && cb(err); return; }

            try {
                product.url = url;
                product.title = $('.VariationProductSKU').text().replace(/^\s+|\s+$/g, '');
                product.description = $('.ProductDescriptionContainer').html();
                product.inStockOnline = !$('.BulkDiscount input').attr('disabled'); // add-cart[readonly]

                if ($('.ProductPrice').length)
                    product.currentPrice = parseFloat($('.ProductPrice').text().replace(/^\s+|\s+$/g, '').replace('$', ''));

                if ($('not sure').length)
                    product.originalPrice = parseFloat($('not sure').text().replace(/^\s+|\s+$/g, '').replace('$', ''));
                else if (product.currentPrice)
                    product.originalPrice = product.currentPrice;
            } catch(e) { console.trace(e); }

            cb(null, product);
        });
    }

    function getProductList(cb) {
        lastCallback = cb;
        var url = 'http://www.playvaluetoys.com/categories/LEGO%C2%AE/';
        xray(url, '.ProductList > li', [{
            url: 'a@href',
            title: '.ProductPriceRating'
        }])
        //.paginate('.CategoryPagination .FloatRight a[href]')
        .limit(1) // Set back to 100
        (function(err, items, $) {
            if (err) { console.trace(err); cb && cb(err); return; }

            try {
                if (!items) { cb && cb('No items found'); return; }

                var q = async.queue(function(item, next) {
                    var parsedUrl = url.parse(item.url.replace(/\/ref=([a-z0-9_]+)\/([0-9]+)-([0-9]+)-([0-9]+)/gi, ''));
                    delete parsedUrl.query;
                    delete parsedUrl.search;
                    var newUrl = url.format(parsedUrl);

                    getProduct(newUrl, next);
                });

                items.forEach(function(item) {
                    var setNumber = getSetNumberFromTitle(item.title.trim());

                    if (!setNumber) { console.trace('No set number found using title'); return; }

                    item.setNumber = setNumber;

                    // item.link = 'http://click.linksynergy.com/fs-bin/click?id=jfOcdvfTNg4&subid=&offerid=283358.1&type=10&tmpid=10699&RD_PARM1=' + item.link;
                    q.push(item, function (item) {
                        console.log('finished processing ' + item.url);
                        cb && cb(null, item);
                    });
                });

                // assign a callback
                q.drain = function() {
                    console.log('all items have been processed');
                };
            } catch(e) { console.trace(e); }
        });
    }

    return {
        title: 'PlayValue Toys',
        region: 'CA',
        key: 'playvalue-toys-ca',
        findProduct: findProduct,
        getProduct: getProduct,
        getProductList: getProductList
    };
});
