// https://www.nczonline.net/blog/2014/03/04/accessing-google-spreadsheets-from-node-js/

var Spreadsheet = require('edit-google-spreadsheet');

Spreadsheet.load({
    debug: true,
    spreadsheetId: '<bunch_of_chars>',
    worksheetName: 'Sheet 1',

    oauth : {
        email: '<bunch_of_chars>@developer.gserviceaccount.com',
        keyFile: 'path/to/your_key.pem'
    }

}, function sheetReady(err, spreadsheet) {

    if (err) {
        throw err;
    }

    spreadsheet.receive(function(err, rows, info) {
        if (err) {
            throw err;
        }

        console.dir(rows);
        console.dir(info);
    });

});

// users
// -> hasMany inventoryItem

// notifications

// products
// -> hasOne set
// -> hasOne store

// sets
// -> hasMany products

// stores
// -> hasMany products
// -> 

// lists
// -> hasMany products

// inventory
// -> hasMany inventoryItems
// -> purchaseAmount = $100
// -> desiredProfit = 80%

// inventoryItem
// -> hasOne product
// -> hasOne set

