if (typeof define !== 'function') { var define = require('amdefine')(module); }

var xray = require('x-ray');
var phantom = require('x-ray-phantom');

define([], function() {
    function runAmazonFR(cb) {
        xray('http://www.amazon.fr/s/ref=sr_pg_1?fst=as%3Aoff&rh=n%3A322086011%2Cn%3A363514031%2Ck%3Alego%2Cp_72%3A184927031%2Cp_n_feature_eight_browse-bin%3A366072031&keywords=lego&ie=UTF8&qid=1431692685')
          .use(phantom({timeout: 30000}))
          .ua('curl/7.37.1')
          .prepare({
            trim: function(value) {
                return value.replace(/^\s+|\s+$/g, '');
            },
            currency: function(value) {
                return parseFloat(value.replace('EUR ', '').replace(',', '.'));// parseFloat(( xxx * 1.82).toFixed(2)); // 1.82 is the currency exchange EUR -> CAD
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
          .limit(1)
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
        region: 'FR',
        run: runAmazonFR
    };
});