if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([
    'url',
    'async',
    'x-ray',
    'x-ray-phantom',
    '../models/Store'
], function(url, async, Xray, phantom, Store) {
    function findProduct(set, cb) {
        var xray = Xray();

        var keyword = set.get('setNumber');
        var url = 'http://search.rakuten.co.jp/search/mall/%E3%83%AC%E3%82%B4+' + keyword + '/?f=1'; 
        xray(url, 'body', {})
        (function(err, _, $) {
            if (err) { console.trace(err); cb && cb(err); return; }

            var $items = $('.rsrSResultSect');

            if (!$items || !$items.length) { cb && cb('No items found'); return; }

            // TODO: iterate the titles, check for set number, show cheapest
            var $item = $items.eq(0);

            try {
                var url = $item.find('h2 a').attr('href');
                var title = $item.find('h2 a').text();

                var product = {};
                product.url = url;
                product.title = title;
                product.inStockOnline = true;
                product.inStockNearby = false;

                if (!product.currentPrice)
                    product.currentPrice = parseFloat($item.find('.price a').text().replace('円', '').trim());

                product.originalPrice = product.currentPrice;

                cb(null, product);
            } catch(e) { console.trace(e); }
        });
    }

    function getProduct(url, setNumber, cb) {
        var xray = Xray();

        cb && cb('Rakuten has no getProduct');
    }

    function getProductList(cb) {
        var xray = Xray();

        cb && cb('Rakuten has no getProductList');
    }

    return {
        title: 'Rakuten',
        region: 'JP',
        key: 'rakuten-jp',
        getProductList: getProductList,
        getProduct: getProduct,
        findProduct: findProduct
    };
});