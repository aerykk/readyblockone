if (typeof define !== 'function') { var define = require('amdefine')(module); }

var xray = require('x-ray');
var phantom = require('x-ray-phantom');

define([], function() {
    function runLegoUSA(cb) {
        var url = 'http://shop.lego.com/en-US/catalog/productListing.jsp';

        xray(url)
          .ua('Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X; en-us) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53')
          .prepare({
            trim: function(value) {
                return value.replace(/^\s+|\s+$/g, '');
            },
            flag: function(value) {
                if (value.toLowerCase().indexOf('retiring') >= 0) return 'RETIRING';
                if (value.toLowerCase().indexOf('new') >= 0) return 'NEW';
                if (value.toLowerCase().indexOf('hard') >= 0) return 'HARD TO FIND';
            },
            salePrice: function(value) {
                return value.replace('Sale Price', '');
            },
            currency: function(value) {
                return parseFloat(value.replace('$', ''));
            }
          })
          .select([{
            $root: '.iconchevron-right-large',
            title: '.title',
            link: 'a[href]',
            image: 'img[src]',
            originalPrice: '.reg-price | trim | currency',
            salePrice: '.sale-price | trim | currency',
            available: '.availability | trim',
            setNumber: '.id-num',
            flags: ['.flag | flag']
          }])
          .delay(4000)
          .paginate('.pg-next a[href]')
          .limit(100)
          .run(function(err, items) {
                if (!items) { return; }

              cb && cb(items);
          });
    }

    return {
        title: 'LEGO SAH',
        region: 'US',
        run: runLegoUSA
    };
});