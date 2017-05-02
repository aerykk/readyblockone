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

        var keyword = 'lego ' + set.get('setNumber');
        var url = 'http://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords='+ keyword.replace(/ /gi, '%20');
        xray(url, 'body', {})
        (function(err, _, $) {
            if (err) { console.trace(err); cb && cb(err); return; }

            var $items = $('#atfResults .s-item-container .s-access-detail-page');

            if (!$items || !$items.length) { cb && cb('No items found'); return; }

            var $item = $items.eq(0);

            getProduct($item.attr('href'), set.get('setNumber'), cb);
        });
    }

    function getProduct(url, setNumber, cb) {
        var xray = Xray();

        if (!url) {
            console.trace('URL not defined');
        }

        xray(url, 
        '.a-container', {
            imageData: '#imgTagWrapperId img[src]',
            title: '#productTitle',
            currentPrice: '#priceblock_ourprice',
            originalPrice: '.a-color-secondary.a-text-strike'
        })
        (function(err, product, $) {
            if (err) { console.trace(err); cb && cb(err); return; }

            try {
                var $details = $('#productTitle, #productDescription, #detail_bullets_id');
                //if (product.title.indexOf(setNumber) === -1) {
                    if (!$details.length || $details.html().indexOf(setNumber) === -1) {
                        cb && cb('Product set number not found: ' + setNumber); return;
                    }
                //}

                product.url = url;
                product.title = product.title.replace(/^\s+|\s+$/g, '');
                product.ASIN = $('b:contains(ASIN)').parent().contents().last().text();
                product.modelNumber = $('b:contains(Item model number)').parent().contents().last().text();
                product.weight = $('b:contains(Shipping Weight)').parent().contents().last().text();
                product.dimensions = $('b:contains(Product Dimensions)').parent().contents().last().text();
                product.releasedAt = new Date($('b:contains(Date first available)').parent().contents().last().text());
                product.description = $('#productDescription').html();
                product.inStockOnline = true;
                product.inStockNearby = false;

                if (!product.currentPrice)
                    product.currentPrice = $('#olp_feature_div .a-color-price').text();

                if (product.currentPrice)
                    product.currentPrice = parseFloat(product.currentPrice.replace(/,/gi, '').replace(/^\s+|\s+$/g, '').replace('$', ''));

                if (product.originalPrice)
                    product.originalPrice = parseFloat(product.originalPrice.replace(/,/gi, '').replace(/^\s+|\s+$/g, '').replace('$', ''));
                else
                    product.originalPrice = product.currentPrice;
            } catch(e) { console.trace(e); }

            cb(null, product);
        });
    }

    function getSetNumberFromTitle(title) {
        var match = /(\d{4,})/gi.exec(title);
        if (match) return match[1];
    }

    function getProductList(cb) {
        var xray = Xray();

        xray('http://www.amazon.ca/s/ref=sr_nr_p_n_feature_four_bro_0?fst=as%3Aoff&rh=n%3A6205517011%2Ck%3Alego%2Cp_n_feature_four_browse-bin%3A6898238011&keywords=lego&ie=UTF8&qid=1435540805&rnid=6898237011', 
        'body', {})
        .paginate('#pagnNextLink[href]')
        .limit(1) // Set back to 200
        (function(err, items, $) {
            if (err) { console.trace(err); cb && cb(err); return; }

            items = [];

            $('.s-item-container').each(function() {
                var title = $(this).find('a.a-link-normal').text();

                title = title.replace('Â®', '');

                if (title.toLowerCase().indexOf('mini fig') > 0
                || title.toLowerCase().indexOf('figure') > 0
                || title.toLowerCase().indexOf('sticker') > 0
                || title.toLowerCase().indexOf('building block') > 0
                || title.toLowerCase().indexOf('kre-o') > 0
                || title.toLowerCase().indexOf('instruction') > 0
                || title.toLowerCase().indexOf('loose') > 0
                || title.toLowerCase().indexOf('deal of the day') > 0) {
                    delete items[i];
                    return;
                }

                items.push({
                    url: $(this).find('a.a-link-normal').attr('href'),
                    title: title
                });
            });

            if (!items) { cb && cb('No items found'); return; }

            try {
                var q = async.queue(function(item, next) {
                    var parsedUrl = url.parse(item.url.replace(/\/ref=([a-z0-9_]+)\/([0-9]+)-([0-9]+)-([0-9]+)/gi, ''));
                    delete parsedUrl.query;
                    delete parsedUrl.search;
                    var newUrl = url.format(parsedUrl);

                    var setNumber = getSetNumberFromTitle(item.title);

                    getProduct(newUrl, setNumber, next);
                });

                // assign a callback
                q.drain = function() {
                    console.log('all items have been processed');
                };

                items.forEach(function(item) {
                    q.push(item, function (err, item) {
                        if (err) { console.trace(err); cb && cb(err); return; }

                        console.log('finished processing ' + item.url);
                        cb && cb(null, item);
                    });
                });
            } catch(e) { console.trace(e); }
        });
    }

    return {
        title: 'Amazon',
        region: 'US',
        key: 'amazon-us',
        getProductList: getProductList,
        getProduct: getProduct,
        findProduct: findProduct
    };
});
