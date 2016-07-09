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
        getProductList(function(err, products) {
            if (err || !products || !products.length) { cb && cb('No items found'); return; }

            var foundProduct;

            products.forEach(function(product) {
                if (product.setNumber === set.get('setNumber')) {
                    foundProduct = product;
                }
            });

            if (!foundProduct) {
                cb && cb('Product not found'); return;
            }

            console.log(foundProduct);

            cb && cb(null, foundProduct);
        });
    }

    function getProduct(url, cb) {
        getProductList(function(err, product) {
            if (product.setNumber === set.get('setNumber')) {
                console.log(product);

                cb && cb(null, product);
            }
        });
    }

    function getProductList(cb) {
        var url = 'http://migatoy.ca/lego-price-list/';
        xray(url, 'body', {})
        (function(err, _, $) {
            if (err) { cb && cb(err); return; }

            var products = [];

            $('table tr').slice(1).each(function() {
                var $item = $(this);

                var product = {};
                product.title = $item.find('td:nth-child(2)').text().trim();
                product.url = url;
                product.setNumber = $item.find('td:first-child').text().replace('Lego ', '');
                product.currentPrice = parseFloat($item.find('td:nth-child(3)').text().trim().replace('$', ''));
                product.originalPrice = parseFloat($item.find('td:nth-child(4)').text().trim().replace('$', ''));
                product.inStockOnline = false;
                product.inStockNearby = $item.find('td:last-child').text() === 'Available';

                if (!product.originalPrice || isNaN(product.originalPrice)) {
                    product.originalPrice = product.currentPrice;
                }

                products.push(product);
            });

            cb && cb(null, products);
        });
    }

    return {
        title: 'MigaToy',
        region: 'CA',
        key: 'migatoy-ca',
        findProduct: findProduct,
        getProduct: getProduct,
        getProductList: getProductList
    };
});
