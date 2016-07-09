if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(['../database', './Store'], function(database, Store) {
    var Product = database.Model.extend({
        tableName: 'products',
        hasTimestamps: ['createdAt', 'updatedAt'],

        store: function() {
            return this.belongsTo(Store, 'storeId');
        }
    });

    return Product;
});