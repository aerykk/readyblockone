if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([
    'url',
    'async',
    'x-ray',
    'x-ray-phantom',
    '../models/Store'
], function(url, async, Xray, phantom, Store) {
    var xray = Xray();

    function runLegoCanada(cb) {
        var url = 'http://shop.lego.com/en-CA/catalog/productListing.jsp';

        xray(url)
        .ua('Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X; en-us) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53')
        
    }


    function getProduct(url, cb) {
        xray(url, 
        '.a-container', {
            title: '#product-title',
            currentPrice: '.product-price',
            originalPrice: '.product-price'
            // get badges
        })
        (function(err, product, $) {
            if (err) { console.trace(err); cb && cb(err); return; }

            try {
                product.url = url;
                product.title = product.title.replace(/^\s+|\s+$/g, '');
                product.description = $('#productDescription').html();

                // if (value.toLowerCase().indexOf('retiring') >= 0) return 'RETIRING';
                // if (value.toLowerCase().indexOf('new') >= 0) return 'NEW';
                // if (value.toLowerCase().indexOf('hard') >= 0) return 'HARD TO FIND';

                if (product.currentPrice)
                    product.currentPrice = parseFloat(product.currentPrice.replace(/^\s+|\s+$/g, '').replace('Sale Price', '').replace(' CAD', ''));

                if (product.originalPrice)
                    product.originalPrice = parseFloat(product.originalPrice.replace(/^\s+|\s+$/g, '').replace(' CAD', ''));
                else
                    product.originalPrice = product.currentPrice;

                cb(null, product);
            } catch(e) { console.trace(e); }
        });
    }

    var q = async.queue(function(item, next) {
        var parsedUrl = url.parse(item.url.replace(/\/ref=([a-z0-9_]+)\/([0-9]+)-([0-9]+)-([0-9]+)/gi, ''));
        delete parsedUrl.query;
        delete parsedUrl.search;
        var newUrl = url.format(parsedUrl);

        getProduct(newUrl, next);
    });

    function getProductList(cb) {
        xray('http://shop.lego.com/en-CA/catalog/productListing.jsp', 
        '.s-item-container', [{
            url: 'a@href'
        }])
        .prepare({
            paginationUrl: function(value) {
                process.stdout.write('.');

                return 'http://shop.lego.com/en-CA/catalog/productListing.jsp?catParamID=&mPageNo=' + value;
            }
        })
        .paginate('.test-page-next[rel] | paginationUrl')
        .limit(1) // Set back to 100
        .delay(4000)
        (function(err, items, $) {
            try {
                if (!items) { return; }

                items.forEach(function(item) {
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
        title: 'LEGO SAH',
        region: 'CA',
        getProductList: getProductList,
        getProduct: getProduct
    };
});
