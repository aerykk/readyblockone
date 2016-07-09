if (typeof define !== 'function') { var define = require('amdefine')(module); }

var xray = require('x-ray');
var phantom = require('x-ray-phantom');

define([], function() {
    function runAmazonUK(cb) {
        xray('http://www.amazon.co.uk/LEGO-Store-2-Stars-Up/s?ie=UTF8&page=1&rh=n%3A423583031%2Cp_72%3A184355031')
          .use(phantom({timeout: 30000}))
          .ua('curl/7.37.1')
          .prepare({
            trim: function(value) {
                return value.replace(/^\s+|\s+$/g, '');
            },
            currency: function(value) {
                return parseFloat(value.replace('£', ''));// parseFloat(( xxx * 1.82).toFixed(2)); // 1.82 is the currency exchange EUR -> CAD
            }
          })
          .select([{
            $root: '.s-item-container',
            link: 'a[href]',
            thumb: 'img[src]',
            title: '.s-access-title | trim',
            currentPrice: '.s-price | trim | currency',
            originalPrice: '.a-color-secondary.a-text-strike | trim | currency', // actually the savings amount
            salePrice: '.s-price | trim | currency',
            //inStockOnline: '',
            //setNumber: '' // need to scrape page or title search
          }])
          .paginate('#pagnNextLink[href]')
          .limit(100)
          .run(function(err, items) {
            if (!items) { return; }

            items.map(function(item, i) {
                var match = /(\d{4,})/gi.exec(item.title);

                if (!match) {
                    delete items[i];
                    return;
                }
                
                item.setNumber = match[1];

                if (item.title.toLowerCase().indexOf('mini fig') > 0
                || item.title.toLowerCase().indexOf('minifigure') > 0
                || item.title.toLowerCase().indexOf('sticker') > 0
                || item.title.toLowerCase().indexOf('building block') > 0
                || item.title.toLowerCase().indexOf('kre-o') > 0
                || item.title.toLowerCase().indexOf('instruction') > 0) {
                    delete items[i];
                    return;
                }

                item.link += '?tag=brickpicker-21';
            });

            cb && cb(items);
          });
    }

    return {
        title: 'Amazon',
        region: 'UK',
        run: runAmazonUK
    };
});