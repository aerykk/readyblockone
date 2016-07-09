if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([], function() {
    var client = require('knex')({
        client: 'pg',
        debug: false,
        connection: {
            host     : '127.0.0.1',
            user     : 'brickson',
            password : 'swoosh',
            database : 'brickson',
            charset  : 'utf8'
        },
        pool: {
            min: 0,
            max: 7
        }
    });

    return require('bookshelf')(client);
});