 
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
    function runner(ctx, nightmare) {
        nightmare.onExit = function(code, signal) {
            if (code !== 0) {
                console.trace('Nightmare exited on error: ', code, signal);

                lastCallback && lastCallback('Nightmare exited on error: ' + code);
            }
        };

        return nightmare
            .useragent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36')
            // .goto(ctx.url)
            // .wait();
    }

    function findProduct(set, cb) {
        lastCallback = cb;
        var xray = new Xray().driver(phantom(runner));

        var keyword = set.get('setNumber');
        var url = 'http://www.toysense.ca/index.php?keyword=' + keyword.replace(/ /gi, '%20') + '&option=com_virtuemart&page=shop.browse&Itemid=26';
        xray(url, 'body', {})
        (function(err, _, $) {
            if (err) { cb && cb(err); return; }
            var $items = $('.product_row_multiple a');

            if (!$items || !$items.length) { cb && cb('No items found'); return; }

            var $item = $items.eq(0);

            getProduct($item.attr('href'), cb);
        });
    }

    function getProduct(url, cb) {
        var xray = new Xray().driver(phantom(runner));

        console.trace('Getting product from URL: ' + url);
        try {
            xray(url, 'body', {})
            (function(err, product, $) {
                if (err) { cb && cb(err); return; }

                if ($('.title small').text().trim().indexOf('LEG') === -1) { cb && cb('Not a lego product'); return; }

                product.url = url;
                product.setNumber = $('.title small').text().trim().replace('# LEG', '');
                product.title = $('.title h1').text().replace(/^\s+|\s+$/g, '');
                product.description = $('.description .block').html().replace(/\t/gi, '');
                product.inStockOnline = $('.availability ul li:first-child').text() === 'Currently In Stock';

                if ($('.buy .price').length)
                    product.currentPrice = parseFloat($('.buy .price').text().replace(/^\s+|\s+$/g, '').replace('$', ''));

                if (product.currentPrice)
                    product.originalPrice = product.currentPrice;

                cb(null, product);
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

    function getProductList(cb) {
        lastCallback = cb;
        var xray = new Xray().driver(phantom(runner));

        var url = 'http://www.toysense.ca/index.php?option=com_virtuemart&page=shop.browse&Itemid=26&category_id=0&manufacturer_id=0&age_id=&keyword=lego&fundamental_id=0&price_id=0&orderby=product_relevance&filter_status=closed&keyword1=&keyword2=&limitstart=0&limit=32';
        xray(url, '.product_row_multiple', [{
            url: 'a@href',
            title: '.product-title'
        }])
        //.paginate('a.pagenav:last-child[href]')
        .limit(1) // Set back to 100
        .delay(2000)
        (function(err, items, $) {
            if (!items) { cb && cb('No items found'); return; }

            var products = [];

            var q = async.queue(function(item, next) {
                var parsedUrl = url.parse(item.url.replace(/\/ref=([a-z0-9_]+)\/([0-9]+)-([0-9]+)-([0-9]+)/gi, ''));
                delete parsedUrl.query;
                delete parsedUrl.search;
                var newUrl = url.format(parsedUrl);

                getProduct(newUrl, function(err, product) {
                    if (!product) { console.trace('Product not found'); next(); return; }

                    products.push(product);
                    next();
                });
            });

            items.forEach(function(item) {
                item.title = item.title.trim();

                if (item.title.indexOf('LEGO') === -1) { return; }

                item.setNumber = item.title.replace('LEGO ', '');

                if (!item.setNumber) { console.trace('No set number found using title'); return; }

                q.push(item);
            });

            // assign a callback
            q.drain = function() {
                console.trace('all items have been processed');
                cb && cb(null, products);
            };
        });
    }

    return {
        title: 'ToySense',
        region: 'CA',
        key: 'toySense-ca',
        findProduct: findProduct,
        getProduct: getProduct,
        getProductList: getProductList
    };
});
