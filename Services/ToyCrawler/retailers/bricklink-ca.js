if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([
    'url',
    'async',
    'x-ray',
    'x-ray-phantom',
    '../models/Store'
], function(url, async, Xray, phantom, Store) {

    function findProduct(set, cb) {
        var xray = new Xray().driver(phantom(runner));

        function runner(ctx, nightmare) {
            nightmare.onExit = function(code, signal) {
                if (code !== 0) {
                    console.trace('Nightmare exited on error: ', code, signal);

                    cb('Nightmare exited on error: ' + code);
                }
            };

            return nightmare
                .useragent('Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X; en-us) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53')
                .goto(ctx.url)
                .wait();
        }

        var keyword = set.get('setNumber');
        var url = 'http://alpha.bricklink.com/pages/clone/catalogitem.page?S=' + keyword + '-1&cond=N#T=S&O={"ss":"CA","nosuperlot":1,"ii":0,"ic":0}'; //http://alpha.bricklink.com/pages/clone/catalogitem.page?id=' + keyword + '#T=S&O={"ss":"CA","cond":"N","ii":0,"ic":0}';
        xray(url, 'body', {})
        (function(err, _, $) {
            if (err) { console.trace(err); cb && cb(err); return; }

            var $items = $('.pciItemContents');

            if (!$items || !$items.length) { cb && cb('No items found'); return; }

            var $item = $items.eq(0);

            try {
                var url = $item.find('.pspStoreName').parent().attr('href');
                var title = $item.find('.pciItemNameLink').text();

                var product = {};
                product.url = url;
                product.title = title;
                product.inStockOnline = true;
                product.inStockNearby = false;

                product.currentPrice = parseFloat($item.find('.blButtonBlue').first().parent().contents().first().text().replace('CA $', '').trim().replace(',', ''));

                product.originalPrice = product.currentPrice;

                cb && cb(null, product);
            } catch(e) { console.trace(e); }
        });
    }

    function getProduct(url, setNumber, cb) {
        cb && cb('Bricklink has no getProduct');
    }

    function getProductList(cb) {
        cb && cb('Bricklink has no getProductList');
    }

    return {
        title: 'Bricklink',
        region: 'CA',
        key: 'bricklink-ca',
        getProductList: getProductList,
        getProduct: getProduct,
        findProduct: findProduct
    };
});