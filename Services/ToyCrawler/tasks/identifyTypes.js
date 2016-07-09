if (typeof define !== 'function') { var define = require('amdefine')(module); }

var xray = require('x-ray');
var phantom = require('x-ray-phantom');

define([
    'Utils'
], function(Utils) {
    function run(falcon) {
        setTimeout(Utils.checkUsage, 1 * 60 * 1000);

        falcon.identifyTypes();
    }

    return run;
});


// // Check for lego

//             var match = /(\d{4,})/gi.exec(data.title);

//             data.setNumber = match[1];

//             if (data.title.toLowerCase().indexOf('mini fig') > 0
//             || data.title.toLowerCase().indexOf('minifigure') > 0
//             || data.title.toLowerCase().indexOf('sticker') > 0
//             || data.title.toLowerCase().indexOf('building block') > 0
//             || data.title.toLowerCase().indexOf('kre-o') > 0
//             || data.title.toLowerCase().indexOf('instruction') > 0) {
//                 return;
//             }


//                 var match = /(\d{4,})/gi.exec(item.title);

//                 if (!match) {
//                     delete items[i];
//                     return;
//                 }
                
//                 item.setNumber = match[1];

//                 if (item.title.toLowerCase().indexOf('mini fig') > 0
//                 || item.title.toLowerCase().indexOf('minifigure') > 0
//                 || item.title.toLowerCase().indexOf('sticker') > 0
//                 || item.title.toLowerCase().indexOf('building block') > 0
//                 || item.title.toLowerCase().indexOf('kre-o') > 0
//                 || item.title.toLowerCase().indexOf('instruction') > 0) {
//                     delete items[i];
//                     return;
//                 }

//                 item.link += '?tag=brickpicker05-20';


//                     var sets = {};


//                         this.fetchSet({setNumber: item.setNumber}, retailer.region)
//                         .then(function(set) {

//                             if (!item.setNumber) {
//                                 var url = 'https://www.google.com/search?q=brickset+' + item.title + '&aqs=chrome..69i57.285j0j1&sourceid=chrome&es_sm=91&ie=UTF-8';

//                                 // Fetch data from Brickset
//                                 request.get(url, function(err, response, body) {
//                                     if (err || response.statusCode != 200) { return; }

//                                     var match = /sets\/([0-9]*)-1/gi.exec(body);

//                                     // If we find the set number, save that
//                                     // otherwise let it continue anyway
//                                     if (!match) {
//                                         return;
//                                     }
                                    
//                                     item.setNumber = match[1];

//                                     this.fetchSet({setNumber: item.setNumber}, retailer.region)
//                                     .then(function(set) {
//                                         if (!set[retailer.region + 'RetailPrice']) {
//                                             this.log('No ' + retailer.region + ' RRP on ' + item.setNumber, 'warn');

//                                             return;
//                                         }
//                                         var savings = parseFloat((set[retailer.region + 'RetailPrice'] - item.price).toFixed(2));
//                                         var percentageOff = Math.round(100 - item.price / set[retailer.region + 'RetailPrice'] * 100, 2);

//                                         // Lets see if this is a good deal currency exchange wise
//                                         var caCurrencyExchangeBonusOff = Math.round((1 - this.compareCurrencyExchange(item.price, set[retailer.region + 'RetailPrice'], set['CA' + 'RetailPrice'], retailer.region, 'CA')) * 100, 2);
//                                         var usCurrencyExchangeBonusOff = Math.round((1 - this.compareCurrencyExchange(item.price, set[retailer.region + 'RetailPrice'], set['US' + 'RetailPrice'], retailer.region, 'US')) * 100, 2);
//                                         var ukCurrencyExchangeBonusOff = Math.round((1 - this.compareCurrencyExchange(item.price, set[retailer.region + 'RetailPrice'], set['UK' + 'RetailPrice'], retailer.region, 'UK')) * 100, 2);

//                                         if (!set.data) {
//                                             set.data = {};
//                                         }

//                                         if (!set.data.retailers) { 
//                                             set.data.retailers = {};
//                                         }

//                                         set.data.retailers[retailer.title + ' ' + retailer.region] = {
//                                             title: item.title,
//                                             price: item.price,
//                                             savings: savings,
//                                             percentageOff: percentageOff,
//                                             region: retailer.region,
//                                             link: item.link,
//                                             caCurrencyExchangeBonusOff: caCurrencyExchangeBonusOff,
//                                             usCurrencyExchangeBonusOff: usCurrencyExchangeBonusOff,
//                                             ukCurrencyExchangeBonusOff: ukCurrencyExchangeBonusOff
//                                         };

//                                         this.saveSet(set);
//                                     }.bind(this));
//                                 }.bind(this));

//                                 return;
//                             }


//                             if (!set[retailer.region + 'RetailPrice']) {
//                                 this.log('No ' + retailer.region + ' RRP on ' + item.setNumber, 'warn');

//                                 return;
//                             }

//                             var savings = parseFloat((set[retailer.region + 'RetailPrice'] - item.price).toFixed(2));
//                             var percentageOff = Math.round(100 - item.price / set[retailer.region + 'RetailPrice'] * 100, 2);

//                             // Lets see if this is a good deal currency exchange wise
//                             var caCurrencyExchangeBonusOff = Math.round((1 - this.compareCurrencyExchange(item.price, set[retailer.region + 'RetailPrice'], set['CA' + 'RetailPrice'], retailer.region, 'CA')) * 100, 2);
//                             var usCurrencyExchangeBonusOff = Math.round((1 - this.compareCurrencyExchange(item.price, set[retailer.region + 'RetailPrice'], set['US' + 'RetailPrice'], retailer.region, 'US')) * 100, 2);
//                             var ukCurrencyExchangeBonusOff = Math.round((1 - this.compareCurrencyExchange(item.price, set[retailer.region + 'RetailPrice'], set['UK' + 'RetailPrice'], retailer.region, 'UK')) * 100, 2);

//                             if (!set.data) {
//                                 set.data = {};
//                             }

//                             if (!set.data.retailers) { 
//                                 set.data.retailers = {};
//                             }

//                             set.data.retailers[retailer.title + ' ' + retailer.region] = {
//                                 title: item.title,
//                                 price: item.price,
//                                 savings: savings,
//                                 percentageOff: percentageOff,
//                                 region: retailer.region,
//                                 link: item.link,
//                                 caCurrencyExchangeBonusOff: caCurrencyExchangeBonusOff,
//                                 usCurrencyExchangeBonusOff: usCurrencyExchangeBonusOff,
//                                 ukCurrencyExchangeBonusOff: ukCurrencyExchangeBonusOff
//                             };
//                             this.saveSet(set);
//                         }.bind(this))
//                         .done();