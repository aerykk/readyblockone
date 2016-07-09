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
            .useragent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36')
            // .goto(ctx.url)
            // .wait();
    }

    function findProduct(set, cb) {
        lastCallback = cb;
        var keyword = 'lego ' + set.get('setNumber');
        var url = 'http://www.mastermindtoys.com/catalog/searchresults.aspx?search=' + keyword.replace(/ /gi, '%20');
        xray(url, 'body', {})
        (function(err, _, $) {
            if (err) { console.trace(err); cb && cb(err); return; }

            var $items = $('.mm_SearchProdDescription a');

            if (!$items || !$items.length) { cb && cb('No items found'); return; }

            var $item = $items.eq(0);

            getProduct($item.attr('href'), set.get('setNumber'), cb);
        });
    }

    function getProduct(url, setNumber, cb) {
        console.trace('Getting product from URL: ' + url);
        xray(url, 'body', {})
        (function(err, product, $) {
            if (err) { cb && cb(err); return; }

            try {
                product.url = url;
                product.setNumber = $('#ctl35_MainContentArea_ctl00_ctl00_ctl00_manCode').text().trim();
                product.title = $('.mm_ProductDesc').text().replace(/^\s+|\s+$/g, '');
                product.description = $('.mm_ProdInfoDesc').html();
                product.inStockOnline = $('.mm_BuyAreaButton a img').attr('src').indexOf('outofstock') === -1;

                if (product.setNumber != setNumber) { cb && cb('Set number doesnt match'); return; }

                if ($('.mm_ProdListPriceOnSale').length)
                    product.currentPrice = parseFloat($('.mm_ProdListPriceOnSale').text().replace(/^\s+|\s+$/g, '').replace('$', '')) - parseFloat($('.mm_ProdSavePrice').length ? $('.mm_ProdSavePrice').text().replace(/^\s+|\s+$/g, '').replace('$', '') :  0);

                if ($('.mm_ProdPricePage').length)
                    product.originalPrice = parseFloat($('.mm_ProdPricePage').text().replace(/^\s+|\s+$/g, '').replace('$', ''));
                else if (product.currentPrice)
                    product.originalPrice = product.currentPrice;

                if (!product.currentPrice)
                    product.currentPrice = product.originalPrice;
            } catch(e) { console.trace(e); }

            console.log(product);

            cb(null, product);
        });
    }

    function getProductList(cb) {
        lastCallback = cb;
        var url = 'http://www.mastermindtoys.com/catalog/searchresults.aspx?search=lego';
        xray(url, '.mm_SearchProduct', [{
            url: 'a@href',
            title: '.mm_SearchProdDescription'
        }])
        //.paginate('.mm_SearchPaging a:last-child[href]')
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

                    getProduct(newUrl, item.setNumber, next);
                });

                // assign a callback
                q.drain = function() {
                    console.log('all items have been processed');
                };

                items.forEach(function(item) {
                    var setNumber = item.title.trim().replace('LEGO ', '');

                    if (!setNumber) { console.trace('No set number found using title'); return; }

                    item.setNumber = setNumber;

                    q.push(item, function (item) {
                        console.log('finished processing ' + item.url);
                        cb && cb(null, item);
                    });
                });
            } catch(e) { console.trace(e); }
        });
    }

    return {
        title: 'Mastermind Toys',
        region: 'CA',
        key: 'mastermind-toys-ca',
        findProduct: findProduct,
        getProduct: getProduct,
        getProductList: getProductList
    };
});
