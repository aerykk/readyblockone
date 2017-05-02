if (typeof define !== 'function') { var define = require('amdefine')(module); }

var xray = require('x-ray');
var phantom = require('x-ray-phantom');

define([], function() {
    function runSearsCanada(cb) {
        var url = 'http://www.sears.ca/stores/shop/search?Ntx=mode%2bmatchall&Nty=1&Dx=mode%2bmatchall&catalogId=10001&D=lego&Ntk=level1&internalSearch=true&isRefinement=true&langId=1&storeId=10051&N=1846&Ntt=lego';

        xray(url)
          .prepare({
            trim: function(value) {
                return value.replace(/^\s+|\s+$/g, '');
            },
            currency: function(value) {
                return parseFloat(value.replace('$', ''));
            }
          })
          .select([{
            $root: '.product',
            link: 'a[href]',
            thumb: 'img[src]',
            title: '.prodName | trim',
            price: '.offerPrice | trim | currency',
            // setNumber: '' // need to scrape page or title search
          }])
          .paginate('.pagination a:last-child[href]')
          .limit(100)
          .run(function(err, items) {
            if (!items) { return; }

            items.map(function(item, i) {
            });

            cb && cb(items);
          });
    }

    return {
        title: 'Sears',
        region: 'CA',
        run: runSearsCanada
    };
});