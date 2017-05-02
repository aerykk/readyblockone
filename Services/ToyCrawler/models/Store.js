if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(['../database'], function(database) {
    var Store = database.Model.extend({
        tableName: 'stores',
        hasTimestamps: ['createdAt', 'updatedAt'],
        setEngine: function(engine) {
            this.findProduct = engine.findProduct;
            this.getProduct = engine.getProduct;
            this.getProductList = engine.getProductList;
        }
    });

    return Store;
});