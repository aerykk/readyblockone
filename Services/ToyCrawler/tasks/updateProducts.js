if (typeof define !== 'function') { var define = require('amdefine')(module); }

var xray = require('x-ray');
var phantom = require('x-ray-phantom');

define([
    'Utils',
    'models/Set'
], function(Utils, Set) {
    function run(falcon) {
        setTimeout(Utils.checkUsage, 1 * 60 * 1000);

        new Set()
        .query(function (knex) {
            var limit = 10;
            var oneDayAgo = new Date();
            oneDayAgo.setDate(oneDayAgo.getDate()-1);

            knex.where('updatedAt', '<', oneDayAgo);
            knex.limit(limit);
        })
        .fetchAll({
            // withRelated: [{
            //     'set': function(knex) {}
            // }]
        })
        .then(function(models) {
            models.forEach(function(model) {
                var retailer = requirejs('retailers/' + model.attributes.retailer);

                retailer.getProductDetails(model.attributes.url, function(details) {
                    _.extend(model.attributes, details);

                    model.save();
                });
            });
        })
        .catch(function(err) {
            falcon.log(err, 'error');
        });
    }

    return run;
});