if (typeof define !== 'function') { var define = require('amdefine')(module); }

var xray = require('x-ray');
var phantom = require('x-ray-phantom');

define([
    'Utils',
    'retailers/amazon-ca',
    'retailers/amazon-fr',
    'retailers/amazon-uk',
    'retailers/amazon-us',
    'retailers/best-buy-ca',
    'retailers/canadian-tire-ca',
    'retailers/chapters-ca',
    'retailers/costco-ca',
    'retailers/ebay-tru-ca',
    'retailers/lego-sah-ca',
    'retailers/lego-sah-us',
    'retailers/london-drugs-ca',
    'retailers/mastermind-toys-ca',
    'retailers/migatoy-ca',
    'retailers/playvalue-toys-ca',
    'retailers/rakuten-jp',
    'retailers/sears-ca',
    'retailers/toysense-ca',
    'retailers/tru-ca',
    'retailers/tru-us',
    'retailers/walmart-ca'
], function(Utils, amazonCA, amazonFR, amazonUK, amazonUS, bestBuyCA, canadianTireCA, 
            chaptersCA, costcoCA, ebayTruCA, legoSahCA, legoSahUS, londonDrugsCA, 
            mastermindToysCA, migatoyCA, playvalueToysCA, rakutenJP, searsCA, 
            toysenseCA, truCA, truUS, walmartCA) {
    function run(falcon) {
        setTimeout(Utils.checkUsage, 1 * 60 * 1000);

        falcon.addRetailer(amazonCA);
        // falcon.addRetailer(amazonFR);
        // falcon.addRetailer(amazonUK);
        // falcon.addRetailer(amazonUS);
        // falcon.addRetailer(bestBuyCA);
        // falcon.addRetailer(canadianTireCA);
        // falcon.addRetailer(chaptersCA);
        // falcon.addRetailer(costcoCA);
        // falcon.addRetailer(ebayTruCA, 5 * 60 * 1000);
        // falcon.addRetailer(legoSahCA);
        // falcon.addRetailer(legoSahUS);
        // falcon.addRetailer(londonDrugsCA);
        // falcon.addRetailer(mastermindToysCA);
        // falcon.addRetailer(migatoyCA);
        // falcon.addRetailer(playvalueToysCA);
        // falcon.addRetailer(rakutenJP);
        // falcon.addRetailer(searsCA);
        // falcon.addRetailer(toysenseCA);
        // falcon.addRetailer(truCA);
        // falcon.addRetailer(truUS);
        // falcon.addRetailer(walmartCA);

        falcon.run();
    }

    return run;
});
