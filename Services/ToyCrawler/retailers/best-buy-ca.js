if (typeof define !== 'function') { var define = require('amdefine')(module); }

var xray = require('x-ray');
var phantom = require('x-ray-phantom');

define([], function() {
    function runBestBuyCanada(cb) {
        xray('http://www.bestbuy.ca/Search/SearchResults.aspx?type=product&filter=brandName%253aLEGO&page=1&pageSize=96')
          .use(phantom({timeout: 10000}))
          .ua('curl/7.37.1')
          .prepare({
            trim: function(value) {
                return value.replace(/^\s+|\s+$/g, '');
            },
            currency: function(value) {
                return parseFloat(value.replace('$', ''));
            }
          })
          .select([{
            $root: '.listing-item',
            link: 'a[href]',
            thumb: 'img[src]',
            title: '.prod-title | trim',
            currentPrice: '.prodprice | trim | currency',
            originalPrice: '.prod-saving span:last-child | trim | currency', // actually the savings amount
            salePrice: '.prodprice | trim | currency',
            inStockOnline: '.availability-status | trim',
            //setNumber: '' // need to scrape page or get from slug: /en-CA/product/lego-lego-technic-bulldozer-615-pieces-42028/10291491.aspx?path=8b4f0421ab1bae19b544c371fc801475en02
          }])
          .paginate('.pagi-next a')
          .limit(100)
          .run(function(err, items) {
            if (err) { console.trace(err); cb && cb(err); return; }

            if (!items) { cb && cb('No items found'); return; }

            items.forEach(function(item) {
                item.originalPrice = item.originalPrice + item.currentPrice;

                var match = /\/product\/[^\/]*-([0-9]*)\//gi.exec(item.link);

                if (match) {
                    item.setNumber = match[1];
                }
            });

            cb && cb(items);
          });
    }

    return {
        title: 'Best Buy',
        region: 'CA',
        run: runBestBuyCanada
    };
});