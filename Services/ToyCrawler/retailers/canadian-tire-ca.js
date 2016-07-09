if (typeof define !== 'function') { var define = require('amdefine')(module); }

// Broken
// Getting the error in nightmare issue
//   nightmare .goto() url: http://www.canadiantire.ca/en/search-results.html?searchByTerm=true&q=lego%20Millennium%20Falcon +6ms
//   x-ray:phantom got response from http://www.canadiantire.ca/en/search-results.html?searchByTerm=true&q=lego%20Millennium%20Falcon: 200 +1s
//   x-ray:phantom redirect: http://www.canadiantire.ca/en/search-results.html?searchByTerm=true&q=lego Millennium Falcon +0ms
//   x-ray:phantom got response from http://www.canadiantire.ca/en/search-results.html?searchByTerm=true&q=lego%20Millennium%20Falcon: 200 +3ms
//   x-ray:phantom got response from http://www.canadiantire.ca/en/search-results.html?searchByTerm=true&q=lego%20Millennium%20Falcon: 200 +3s
//   x-ray:phantom got response from http://www.canadiantire.ca/en/search-results.html?searchByTerm=true&q=lego%20Millennium%20Falcon: 200 +0ms
//   nightmare .goto() page loaded: fail +4s
//   x-ray:phantom redirect: http://www.canadiantire.ca/en/pdp/lego-creative-medium-brick-box-484-pcs-0501741p.html +685ms
//   x-ray:phantom got response from http://www.canadiantire.ca/en/pdp/lego-creative-medium-brick-box-484-pcs-0501741p.html: 200 +11ms
//   nightmare .wait() for the next page load +505ms
//   x-ray:phantom client-side javascript error TypeError: 'null' is not an object (evaluating 'g[0]') +635ms
//   nightmare .wait() detected page unload +319ms
//   x-ray:phantom got response from http://www.canadiantire.ca/en/pdp/lego-creative-medium-brick-box-484-pcs-0501741p.html: 200 +155ms
//   x-ray:phantom client-side javascript error TypeError: 'undefined' is not an object (evaluating 's7sdk.Class.inherits') +1ms
//   x-ray:phantom got response from http://www.canadiantire.ca/en/pdp/lego-creative-medium-brick-box-484-pcs-0501741p.html: 200 +11ms
//   x-ray:phantom client-side javascript error TypeError: 'undefined' is not an object (evaluating 's7sdk.Class.inherits') +74ms
//   x-ray:phantom client-side javascript error TypeError: 'undefined' is not an object (evaluating 's7sdk.Event.dispatch') +2s
//   x-ray:phantom got response from http://www.canadiantire.ca/en/pdp/lego-creative-medium-brick-box-484-pcs-0501741p.html: 200 +968ms
//   x-ray:phantom got response from http://www.canadiantire.ca/en/pdp/lego-creative-medium-brick-box-484-pcs-0501741p.html: 200 +1ms
//   nightmare .wait() detected page load +5s
//   nightmare .evaluate() fn on the page +1ms
//   nightmare .teardownInstance() tearing down +226ms
//   x-ray:phantom http://www.canadiantire.ca/en/pdp/lego-creative-medium-brick-box-484-pcs-0501741p.html - 200 +2s
//   x-ray got response for http://www.canadiantire.ca/en/search-results.html?searchByTerm=true&q=lego%20Millennium%20Falcon with status code: 200 +0ms
//   x-ray:phantom client-side javascript error TypeError: 'undefined' is not an object (evaluating 'c.indexOf') +217ms
// Error in nightmare:  0 null
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
    // var currentReq = {
    //     method: null,
    //     arguments: null
    // };

    function runner(ctx, nightmare) {
        nightmare.onExit = function(code, signal) {
            if (code !== 0) {
                console.trace('Nightmare exited on error: ', code, signal);

                lastCallback('Nightmare exited on error: ' + code);
            }
        };

        // nightmare.setup(function() {
        //     // page options
        //     // { set: [Function],
        //     //   get: [Function],
        //     //   open: [Function],
        //     //   close: [Function],
        //     //   includeJs: [Function],
        //     //   sendEvent: [Function],
        //     //   release: [Function],
        //     //   uploadFile: [Function],
        //     //   goBack: [Function],
        //     //   goForward: [Function],
        //     //   reload: [Function],
        //     //   switchToFrame: [Function],
        //     //   switchToMainFrame: [Function],
        //     //   switchToParentFrame: [Function],
        //     //   switchToFocusedFrame: [Function],
        //     //   onConsoleMessage: [Function],
        //     //   onError: [Function],
        //     //   onResourceRequested: [Function],
        //     //   injectJs: [Function],
        //     //   evaluate: [Function],
        //     //   render: [Function],
        //     //   getContent: [Function],
        //     //   getCookies: [Function],
        //     //   renderBase64: [Function],
        //     //   setHeaders: [Function],
        //     //   setContent: [Function],
        //     //   setViewportSize: [Function],
        //     //   setPaperSize: [Function],
        //     //   setZoomFactor: [Function],
        //     //   setFileOnPicker: [Function],
        //     //   _evaluate: [Function],
        //     //   _onResourceRequested: [Function] }
        //     nightmare.page.onError = function(msg, trace) {
        //         var msgStack = ['ERROR: ' + msg];
        //         if (trace && trace.length) {
        //             msgStack.push('TRACE:');
        //             trace.forEach(function(t) {
        //                 msgStack.push(' -> ' + t.file + ': ' + t.line + (t.function ? ' (in function "' + t.function + '")' : ''));
        //             });
        //         }
        //         // uncomment to log into the console 
        //         // console.error(msgStack.join('\n'));
        //     };

        //     nightmare.page.onInitialized = function() {
        //         this.evaluate(function(){
        //             var isFunction = function(o) {
        //               return typeof o == 'function';
        //             };

        //             var bind,
        //               slice = [].slice,
        //               proto = Function.prototype,
        //               featureMap;

        //             featureMap = {
        //               'function-bind': 'bind'
        //             };

        //             function has(feature) {
        //               var prop = featureMap[feature];
        //               return isFunction(proto[prop]);
        //             }

        //             // check for missing features
        //             if (!has('function-bind')) {
        //               // adapted from Mozilla Developer Network example at
        //               // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind
        //               bind = function bind(obj) {
        //                 var args = slice.call(arguments, 1),
        //                   self = this,
        //                   nop = function() {
        //                   },
        //                   bound = function() {
        //                     return self.apply(this instanceof nop ? this : (obj || {}), args.concat(slice.call(arguments)));
        //                   };
        //                 nop.prototype = this.prototype || {}; // Firefox cries sometimes if prototype is undefined
        //                 bound.prototype = new nop();
        //                 return bound;
        //               };
        //               proto.bind = bind;
        //             }
        //         });
        //     };
        // });

        return nightmare
            .goto(ctx.url)
            //.click('.Header-logo-item+ .Header-list-item a')
            .wait()
    }

    function findProduct(set, cb) {
        lastCallback = cb;

        console.trace('Finding set: ', set.get('title'));
        
        var keyword = 'lego ' + set.get('title');
        var url = 'http://www.canadiantire.ca/en/search-results.html?searchByTerm=true&q=' + keyword.replace(/ /gi, '%20');
        xray(url, 'body')
        (function(err, items, $) {
            if (err) { console.trace(err); cb && cb(err); return; }

            var $items = $('.producttile a');
            var items = [];

            for(var i = 0, l = $items.length; i < l; i++) {
                items.push({
                    url: $items[i].attribs.href
                });
            }

            if (!items || !items.length) { cb && cb('No items found'); return; }

            var product = items[0];

            getProduct(product.url, cb);
        });
    }

    function getProduct(url, cb) {
        console.trace('Requesting URL: ', url);

        try {
            xray(url, 'body', {
                originalPrice: '.price-container .price__old-value'
            })
            (function(err, product, $) {
                if (err) { console.trace(err); cb && cb(err); return; }

                //console.log(product.body)
                //var $ = cheerio.load(product.body);

                try {
                    product.url = url;
                    product.title = $('.pd-product__name').text().replace(/^\s+|\s+$/g, '');
                    product.inStockOnline = $('.select-and-add__add-button-inner').length ? true : false;

                    if ($('.price-container .price__value').length)
                        product.currentPrice = parseFloat($('.price-container .price__value').text().replace(/^\s+|\s+$/g, '').replace('$', ''));

                    if ($('.price-container .price__old-value').length)
                        product.originalPrice = parseFloat($('.price-container .price__old-value').text().replace(/^\s+|\s+$/g, '').replace('$', ''));
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

    function getProductList(cb) {
        lastCallback = cb;

        var url = 'http://www.canadiantire.ca/en/search-results.html?count=500;i=1;q=lego;rank=rank_sc;searchByTerm=true;page=1';
        xray(url, '.product_result', [{
            url: '.sri-name-cnt a@href'
        }])
        .paginate('.srp-page-toggle.next')
        .limit(1) // Set back to 100
        (function(err, items, $) {
            if (err) { cb && cb(err); return; }

            if (!items) { cb && cb('No items found'); return; }

            try {
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
        title: 'Canadian Tire',
        region: 'CA',
        key: 'canadian-tire-ca',
        findProduct: findProduct,
        getProduct: getProduct,
        getProductList: getProductList
    };
});