if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([
    'url',
    'async',
    'x-ray',
    'x-ray-phantom',
    'cheerio',
    '../models/Store'
], function(urlHelper, async, Xray, phantom, cheerio, Store) {
    var lastCallback;
    function runner(ctx, nightmare) {
        nightmare.onExit = function(code, signal) {
            if (code !== 0) {
                console.trace('Nightmare exited on error: ', code, signal);

                lastCallback('Nightmare exited on error: ' + code);
            }
        };

        return nightmare
            //.goto(ctx.url)
            //.click('.Header-logo-item+ .Header-list-item a')
            //.wait()
    }

    function findProduct(set, cb) {
        var xray = new Xray().driver(phantom(runner));

        lastCallback = cb;
        var keyword = 'lego ' + set.get('setNumber');
        var url = 'http://www.walmart.ca/search/' + keyword.replace(/ /gi, '%20');
        xray(url, 'body')
        (function(err, items, $) {
            if (err) { cb && cb(err); return; }
            var $items = $('#shelf-thumbs .product h1 a');

            if (!$items || !$items.length) { cb && cb('No items found'); return; }

            var $item = $items.eq(0);
            var setNumber = getSetNumberFromUrl($item.attr('href'));
console.log(setNumber, set.get('setNumber'), $item.attr('href'))
            if (!setNumber) { console.trace('No set number found'); return; }
            if (setNumber != set.get('setNumber')) { cb && cb('Set number doesnt match'); return; }

            getProduct($item.attr('href'), cb);
        });
    }

    function getSetNumberFromUrl(url) {
        var match = /-([0-9]+)\//gi.exec(url);
        if (match) return match[1];
    }

    function getProduct(url, cb) {
        function runner(ctx, nightmare) {
            nightmare.onExit = function(code, signal) {
                if (code !== 0) {
                    console.trace('Nightmare exited on error: ', code, signal);

                    lastCallback('Nightmare exited on error: ' + code);
                }
            };

            return nightmare
                .useragent('Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X; en-us) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53')
            
                .goto(ctx.url)
                //.click('.Header-logo-item+ .Header-list-item a')
                .wait()
        }

        var xray = new Xray().driver(phantom(runner));

        console.trace('Getting product from URL: ' + url);

        xray(url, 'body', {title: '#product-desc h1'})
        (function(err, product, $) {
            if (err) { cb && cb(err); return; }

            try {
                product = {};
                product.url = url;
                product.title = $('#product-desc h1').text().replace(/^\s+|\s+$/g, '');

                var match = /\(([0-9]*)\)/gi.exec(product.title);

                if (!match) { cb && cb('No set number in title found'); return; }

                product.setNumber = match[1];

                product.description = $('.productDescription .description').html();
                product.inStockOnline = $('.statuses .shipping-alert .link-button span').text() === 'In stock online' || $('.statuses .shipping-alert .link-button span').text() === 'Only a few left online!'; // add-cart[readonly]
                product.inStockNearby = $('.statuses .store-price').length ? true : false;

                if ($('.price-current').length)
                    product.currentPrice = parseFloat($('.zone3 .price-current').text().replace(/^\s+|\s+$/g, '').replace('Sale Price', '').replace('$', ''));

                if ($('.price-was strike').length)
                    product.originalPrice = parseFloat($('.zone3 .price-was strike').text().replace(/^\s+|\s+$/g, '').replace('$', ''));
                else if (product.currentPrice)
                    product.originalPrice = product.currentPrice;

            } catch(e) { console.trace(e); }
            
            cb(null, product);
        });
    }

    function getProductList(cb) {
        function runner(ctx, nightmare) {
            nightmare.onExit = function(code, signal) {
                if (code !== 0) {
                    //console.trace('Nightmare exited on error: ', code, signal);

                    lastCallback('Nightmare exited on error: ' + code);
                }
            };

            return nightmare
                .goto(ctx.url)
                //.click('.Header-logo-item+ .Header-list-item a')
                .wait()
        }

        var xray = new Xray().driver(phantom(runner));

        lastCallback = cb;
        var url = 'http://www.walmart.ca/search/*lego';
        xray(url, '#shelf-thumbs .product', [{
            url: 'a@href'
        }])
        //.paginate('#loadmore[href]')
        .limit(100) // Set back to 100
        (function(err, items, $) {
            try {
                if (!items) { cb && cb('No items found'); return; }

                var q = async.queue(function(item, next) {
                    getProduct(item.url, next);
                });

                $('#shelf-thumbs .product').each(function() {
                    var $item = $(this);
                    var item = {};

                    item.url = $item.find('a[href]').attr('href');
                    item.title = $item.find('h1').text();

                    var match = /\(([0-9]*)\)/gi.exec(item.title);

                    if (!match) { console.trace('No set number in title found'); return; }

                    item.setNumber = match[1];

                    // item.link = 'http://click.linksynergy.com/fs-bin/click?id=jfOcdvfTNg4&subid=&offerid=283358.1&type=10&tmpid=10699&RD_PARM1=' + item.link;
                    q.push(item, function (err, item) {
                        cb && cb(err, item);
                    });
                });

                // assign a callback
                q.drain = function() {
                    console.log('all items have been processed');
                };
            } catch(e) { console.trace(e.lineNumber, e); cb && cb(e); }
        });
    }

    // Check these specifically:
    // http://www.walmart.ca/en/ip/lego-star-wars-millennium-falcon-7965/6000043826929?utm_source=Linkshare&utm_medium=Affiliate&utm_content=10&utm_campaign=jfOcdvfTNg4&siteID=jfOcdvfTNg4-gW__20IoU63o64naZahTJg&wmlspartner=jfOcdvfTNg4
    // http://www.walmart.ca/en/ip/lego-loftr-and-hobbit-witch-king-battle-79015/6000189233620
    // http://www.walmart.ca/en/ip/lego-loftr-and-hobbit-attack-on-lake-town-79016/6000189233623

    return {
        title: 'Walmart',
        region: 'CA',
        key: 'walmart-ca',
        findProduct: findProduct,
        getProduct: getProduct,
        getProductList: getProductList
    };
});


