if (typeof define !== 'function') { var define = require('amdefine')(module); }

var xray = require('x-ray');
var phantom = require('x-ray-phantom');
var requirejs = require('requirejs');

define([
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
], function() {
    var Store = requirejs('models/Store');
    var stores = [].slice.call(arguments);

    function run(falcon) {
        stores.forEach(function(store) {
            new Store({title: store.title, region: store.region})
            .fetch()
            .then(function(data) {
                if (!data) {
                    throw Error('Store not found');
                }
            })
            .catch(function(err) {
                delete store.run;

                new Store()
                .save(store)
                .then(function(data) {
                    falcon.log('Store created for ' + store.title);
                })
                .catch(function(err) {
                    falcon.log('Could not create store for ' + store.title, 'error');
                });
            });
        });
    }

    return run;
});

