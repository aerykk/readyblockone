if (typeof define !== 'function') { var define = require('amdefine')(module); }

var xray = require('x-ray');
var phantom = require('x-ray-phantom');

define([
    'Utils',
    'retailers/migatoy-ca'
], function(Utils, migatoyCA) {
    function run(falcon) {
        setTimeout(Utils.checkUsage, 1 * 60 * 1000);

        falcon.addRetailer(migatoyCA);

        falcon.run();
    }

    return run;
});
