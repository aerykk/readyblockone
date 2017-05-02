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
        var keyword = set.get('setNumber');
        var url = 'http://www.ebay.ca/sch/m.html?_odkw=76074&_ssn=toysruscanada&_armrs=1&_osacat=0&_from=R40&_trksid=p2046732.m570.l1313.TR1.TRC0.A0.H0.X75074.TRS0&_nkw=' + keyword.replace(/ /gi, '+') + '&_sacat=0';
        xray(url, 'body', {})
        (function(err, _, $) {
            if (err) { console.trace(err); cb && cb(err); return; }

            var $items = $('.lvresult .lvtitle a');

            if (!$items || !$items.length) { var msg = 'No items found'; cb && cb(msg); return; }

            var $item = $items.eq(0);

            getProduct($item.attr('href'), cb);
        });
    }

    function parseProductPage(url, product, $) {
        try {
            var title = $('#itemTitle').contents().last().text().trim();
            var setMatch = /(\d{4,})/gi.exec(title);

            if (!setMatch) { console.trace('No set number found using title: ', title); return; }

            product.setNumber = setMatch[1];
            product.title = $('#itemTitle').contents().last().text().trim().replace(setMatch[0], '');
            product.url = url;
            product.description = null;
            product.inStockOnline = !$('#binBtn_btn').attr('disabled');
            product.inStockNearby = false;

            if ($('#prcIsum').length)
                product.currentPrice = parseFloat($('#prcIsum').text().replace(/^\s+|\s+$/g, '').replace('C $', ''));

            if ($('#orgPrc').length)
                product.originalPrice = parseFloat($('#orgPrc').text().replace(/^\s+|\s+$/g, '').replace('C $', ''));
            else if (product.currentPrice)
                product.originalPrice = product.currentPrice;
        } catch(e) { console.trace(e); }

        return product;
    }

    function getProduct(url, cb) {
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
        var url = 'http://www.ebay.ca/sch/m.html?_odkw=&_ssn=toysruscanada&_armrs=1&_osacat=0&_from=R40&_trksid=p2046732.m570.l1313.TR0.TRC0.H0.Xlego.TRS0&_nkw=lego&_sacat=0';
        xray(url, '.lvresult', [{
            url: '.lvtitle a@href',
            title: '.lvtitle a'
        }])
        //.paginate('.pagn-next a[href]')
        .limit(1) // Set back to 100
        (function(err, items, $) {
            if (err) { console.trace(err); cb && cb(err); return; }

            if (!items) { cb && cb('No items found'); return; }

            items.forEach(function(item) {
                var setMatch = /(\d{4,})/gi.exec(item.title);

                if (!setMatch) { console.trace('No set number found using title'); return; }

                item.setNumber = setMatch[1];
                item.title = item.title.trim().replace(setMatch[0], '');
                //item.link = 'http://rover.ebay.ca/rover/1/706-53473-19255-0/1?toolid=10004&mpre=' + escape(item.link);

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
        title: 'Ebay TRU',
        region: 'CA',
        key: 'ebay-tru-ca',
        findProduct: findProduct,
        getProduct: getProduct,
        getProductList: getProductList
    };
});
