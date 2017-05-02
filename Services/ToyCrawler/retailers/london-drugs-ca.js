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

                lastCallback('Nightmare exited on error: ' + code);
            }
        };

        return nightmare;
    }

    // http://www.devsbytes.com/browser-automation-with-nightmarejs.html
    // https://azurelogic.com/posts/web-scraping-with-nightmare-js/
    function findProduct(set, cb) {
        var xray = new Xray().driver(phantom(runner));

        lastCallback = cb;
        var keyword = 'lego ' + set.get('title');
        var url = 'http://www.londondrugs.com/Search?q=' + keyword.replace(/ /gi, '%20');
        xray(url, 'body')
        (function(err, items, $) {
            if (err) { console.trace(err); }
            var $items = $('.producttile a');
            var items = [];

            for(var i = 0, l = $items.length; i < l; i++) {
                items.push({
                    url: $items[i].attribs.href
                });
            }

            if (!items || !items.length) { cb && cb('No items found'); return; }

            var product = items[0];

            getProduct(product.url, function(err, product) {
                if (err) { cb && cb(err); return; }
                cb && cb(null, product);
            });
        });
    }

    function getProduct(url, cb) {
        var xray = new Xray().driver(phantom(runner));

        try {
            xray(url, '#content', {
                imageData: 'img@src',
                title: '.productname',
                currentPrice: '.salesprice',
                originalPrice: '.standardprice'
            })
            (function(err, product, $) {
                if (err) { console.trace(err); cb && cb(err); return; }

                //console.log(product.body)
                //var $ = cheerio.load(product.body);

                try {
                    product.url = url;
                    product.title = product.title.replace(/^\s+|\s+$/g, '');
                    product.description = $('#productDescription').html();
                    product.inStockOnline = $('.availability').text().trim() === 'In Stock';

                    if (product.currentPrice)
                        product.currentPrice = parseFloat(product.currentPrice.replace(/^\s+|\s+$/g, '').replace('$', ''));

                    if (product.originalPrice)
                        product.originalPrice = parseFloat(product.originalPrice.replace(/^\s+|\s+$/g, '').replace('$', ''));
                    else
                        product.originalPrice = product.currentPrice;

                } catch(e) { console.trace(e); }

                cb(null, product);
            });
        }
        catch(e) {
            if (e.message.indexOf('PhantomJS has crashed') >= 0) {
                // Lets try again!
                getProduct(url, cb);
            }
        }
    }

    function getProductList(cb) {
        lastCallback = cb;

        var xray = new Xray().driver(phantom(runner));

        var url = 'http://www.londondrugs.com/on/demandware.store/Sites-LondonDrugs-Site/default/Search-Show?q=lego&prefn1=brandDescription&prefv1=LEGO&sz=124';
        xray(url, '.producttile', [{
            url: 'a@href'
        }])
        .paginate('.pagenext')
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

                // assign a callback
                q.drain = function() {
                    console.log('all items have been processed');
                };

                items.forEach(function(item) {
                    q.push(item, function (item) {
                        console.log('finished processing ' + item.url);
                        cb && cb(null, item);
                    });
                });
            } catch(e) { console.trace(e); }
        });
    }

    return {
        title: 'London Drugs',
        region: 'CA',
        key: 'london-drugs-ca',
        findProduct: findProduct,
        getProduct: getProduct,
        getProductList: getProductList
    };
});