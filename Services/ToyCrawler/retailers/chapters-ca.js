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

        // ajax: http://stackoverflow.com/questions/27109563/download-a-file-using-nightmare
        // nightmare
        // { options:
        //    { timeout: 5000,
        //      interval: 50,
        //      weak: true,
        //      loadImages: true,
        //      ignoreSslErrors: true,
        //      sslProtocol: 'any',
        //      proxy: null,
        //      proxyType: null,
        //      proxyAuth: null,
        //      cookiesFile: null,
        //      webSecurity: true },
        //   queue:
        //    [ [ [Function], [Object] ],
        //      [ [Function], [Object] ],
        //      [ [Function], [Object] ],
        //      [ [Function], [Object] ] ],
        //   onExit: [Function] }
        //nightmare.options.timeout = 30000;
        //nightmare.options.loadImages = true;

        return nightmare
            .useragent('Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X; en-us) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53')
            .goto(ctx.url)
            //.click('.Header-logo-item+ .Header-list-item a')
            .wait()
            //.screenshot('abc.png');
    }

    function findProduct(set, cb) {
        lastCallback = cb;

        var keyword = 'lego ' + set.get('title');
        var url = 'https://m.indigo.ca/search/product?keywords=' + keyword.replace(/ /gi, '%20');
        xray(url, 'body', {})
        (function(err, _, $) {
            if (err) { console.trace(err); cb && cb(err); return; }

            var $items = $('.sectionSearchResult .title');

            if (!$items || !$items.length) { cb && cb('No items found'); return; }

            var $item = $items.eq(0);
            var setNumber = getSetNumberFromUrl(url);

            if (!setNumber) { cb && cb('No set number found'); return; }
            if (setNumber != set.setNumber) { cb && cb('Found set number but it doesnt match'); return; }

            getProduct($item.attr('href'), cb);
        });
    }

    function getProduct(url, cb) {console.log(url);
        var xray = new Xray().driver(phantom(function runner(ctx, nightmare) {
            nightmare.onExit = function(code, signal) {
                if (code !== 0) {
                    console.trace('Nightmare exited on error: ', code, signal);
                }
            };

            //nightmare.options.timeout = 90000;

            return nightmare
                .useragent('Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X; en-us) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53')
                .goto(ctx.url)
                .wait();
        }));

        try {
            xray(url, 'body', {})
            (function(err, product, $) {
                if (err) { console.trace(err); cb && cb(err); return; }

                try {
                    product.url = url;
                    product.title = $('.sectionDetailSummary-container .title').text().replace(/^\s+|\s+$/g, '');
                    product.description = $('#productDescription .content').html();
                    product.inStockOnline = $('.stockAvailable-mesg').text().trim() === 'In stock online'; // add-cart[readonly]
                    product.inStockNearby = false;//$('#pqviewAvailabilityInStore .stockAvailable-mesg').text().trim() === 'Available in stores';

                    if ($('.onlinePriceColor, .sectionDetailSummary__mainprice').length)
                        product.currentPrice = parseFloat($('.onlinePriceColor, .sectionDetailSummary__mainprice').text().replace(/^\s+|\s+$/g, '').replace('Sale Price', '').replace('$', ''));

                    if ($('.sectionDetailSummary__lesserprice').length)
                        product.originalPrice = parseFloat($('.sectionDetailSummary__lesserprice').text().replace(/^\s+|\s+$/g, '').replace('$', ''));
                    else if (product.currentPrice)
                        product.originalPrice = product.currentPrice;
                } catch(e) { console.trace(e); }

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

    function getSetNumberFromUrl(url) {
        var match = /\/toys\/([0-9]+)\-[^\/]*\//gi.exec(url);
        if (match) return match[1];

        var match = /\/toys\/[^\/]*\-([0-9]+)\//gi.exec(url);
        if (match) return match[1];
    }

    function getProductList(cb) {
        lastCallback = cb;

        var url = 'http://www.chapters.indigo.ca/en-ca/kids/leapfrog/4294967147-cat.html?ref=toys%3abrands%3alego-shop%3atop-nav';
        xray(url, '.product', [{
            url: 'a@href',
            title: '.title'
        }])
        //.paginate('.moreResults')
        .limit(1) // Set back to 10
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
                    var setNumber = getSetNumberFromUrl(item.url);

                    if (!setNumber) { console.trace('No set number found using URL'); return; }

                    item.setNumber = setNumber;

                    // item.link = 'http://click.linksynergy.com/fs-bin/click?id=jfOcdvfTNg4&subid=&offerid=283358.1&type=10&tmpid=10699&RD_PARM1=' + item.link;
                    q.push(item, function (item) {
                        console.log('finished processing ' + item.url);
                        cb && cb(null, item);
                    });
                });
            } catch(e) { console.trace(e); }
        });
    }

    // Check these specifically:
    // http://www.walmart.ca/en/ip/lego-star-wars-millennium-falcon-7965/6000043826929?utm_source=Linkshare&utm_medium=Affiliate&utm_content=10&utm_campaign=jfOcdvfTNg4&siteID=jfOcdvfTNg4-gW__20IoU63o64naZahTJg&wmlspartner=jfOcdvfTNg4
    // http://www.walmart.ca/en/ip/lego-loftr-and-hobbit-witch-king-battle-79015/6000189233620
    // http://www.walmart.ca/en/ip/lego-loftr-and-hobbit-attack-on-lake-town-79016/6000189233623

    return {
        title: 'Chapters',
        region: 'CA',
        key: 'chapters-ca',
        findProduct: findProduct,
        getProduct: getProduct,
        getProductList: getProductList
    };
});
