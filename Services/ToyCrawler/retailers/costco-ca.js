if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([
    'url',
    'async',
    'x-ray',
    'x-ray-phantom',
    'cheerio',
    '../models/Store'
], function(url, async, Xray, phantom, cheerio, Store) {
    var xray = new Xray();

    function findProduct(set, cb) {
        var keyword = set.get('title');
        var url = 'http://www.costco.ca/CatalogSearch?storeId=10302&catalogId=11201&langId=-24&refine=&keyword=' + keyword.replace(/ /gi, '+');
        xray(url, 'body', {})
        (function(err, _, $) {
            if (err) { console.trace(err); cb && cb(err); return; }

            var $items = $('.product-tile .product-tile-image-container a');

            if (!$items || !$items.length) { var msg = 'No items found'; cb && cb(msg); return; }

            var $item = $items.eq(0);

            getProduct($item.attr('href'), cb);
        });
    }

    function parseProductPage(url, product, $) {
        try {
            var title = $('.top_review_panel h1').text().trim();
            var setMatch = /Model: (\d{4,})/gi.exec($('#product-tab1').text());

            if (!setMatch) { console.trace('No set number found using title: ', title); return; }

            product.setNumber = setMatch[1];
            product.title = title;
            product.url = url;
            product.description = $('#product-tab1').html();
            product.inStockOnline = $('script:contains("$(\'#addToCartBtn\').removeAttr(\'disabled\');")').length ? true : false;
            product.inStockNearby = false;

            product.currentPrice = parseFloat($('.your-price .currency').text().replace(/^\s+|\s+$/g, '').replace('$', ''));
            product.originalPrice = product.currentPrice;
        } catch(e) { console.trace(e); }

        return product;
    }

    function getProduct(url, cb) {
        console.trace('Getting product from URL: ' + url);
        try {
            xray(url, 'body', {})
            (function(err, product, $) {
                if (err) { console.trace(err); cb && cb(err); return; }

                var product = parseProductPage(url, product, $);

                if (!product) {
                    cb && cb('No product found'); return;
                }

                cb && cb(null, product);
            });
        }
        catch(e) {
            console.trace(e);
            if (e.message.indexOf('PhantomJS has crashed') >= 0) {
                console.log('PhantomJS crashed, so we will try again...');
                // Lets try again!
                getProduct(url, cb);
            }
        }
    }

    var q = async.queue(function(item, next) {
        var parsedUrl = url.parse(item.url.replace(/\/ref=([a-z0-9_]+)\/([0-9]+)-([0-9]+)-([0-9]+)/gi, ''));
        delete parsedUrl.query;
        delete parsedUrl.search;
        var newUrl = url.format(parsedUrl);

        getProduct(newUrl, next);
    });

    function getProductList(cb) {
        var url = 'http://www.costco.ca/CatalogSearch?catalogId=11201&langId=-24&keyword=lego&storeId=10302&refine=12422';
        xray(url, '.product-tile-image-container', [{
            url: 'a@href',
            title: '.short-desc'
        }])
        //.paginate('.pagn-next a[href]')
        .limit(1) // Set back to 100
        (function(err, items, $) {
            if (err) { console.trace(err); cb && cb(err); return; }

            if (!items) { cb && cb('No items found'); return; }

            //currentPrice: '.currency span:first-child | trim | currency',
            items.forEach(function(item) {
                item.title = item.title.trim().replace(/\(([0-9]*)\)/gi, '');

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
        title: 'Costco',
        region: 'CA',
        key: 'costco-ca',
        findProduct: findProduct,
        getProduct: getProduct,
        getProductList: getProductList
    };
});
