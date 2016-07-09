if (typeof define !== 'function') { var define = require('amdefine')(module); }

var xray = require('x-ray');
var phantom = require('x-ray-phantom');

define([], function() {
    function runTRUUSA(cb) {
        xray('http://www.toysrus.com/family/index.jsp?categoryId=4022699')
          .prepare({
            paginationUrl: function(url) {
                return url.replace('index.jsp/?', 'index.jsp?');
            },
            trim: function(value) {
                return value.replace(/^\s+|\s+$/g, '');
            },
            currency: function(value) {
                return parseFloat(value.replace('$', ''));
            },
          })
          .select([{
            $root: '.parametric-results .TRU-product-summary-view',
            link: 'a[href]',
            thumb: 'img[src]',
            title: '.title | trim', // need to remove setNumber from title
            currentPrice: '.price-current | trim | currency',
            originalPrice: '.price dd.ours | trim | currency',
            inStockOnline: '.eligibility dt:nth-child(0)',
            inStockNearby: '.eligibility dt:nth-child(1)',
            //setNumber: '' // need to parse from title
          }])
          .paginate('.bottom .pagination .next a[href] | paginationUrl')
          .limit(100)
          .run(function(err, items) {
            if (!items) { return; }

            items.forEach(function(item) {
                var setMatch = item.title.match(/\(([0-9]*)\)/);

                if (setMatch) {
                    item.setNumber = setMatch[1]
                    item.title = item.title.replace(setMatch[0], '');
                }
            });

            cb && cb(items);
          });
    }

    return {
        title: 'TRU',
        region: 'US',
        run: runTRUUSA
    };
});