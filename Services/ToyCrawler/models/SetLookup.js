if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(['../database'], function(database) {
    var SetLookup = database.Model.extend({
        tableName: 'setLookup'
    });

    return SetLookup;
});