// BUY 75049
// 

// Set the max sockets to unlimited
require('http').globalAgent.maxSockets = Infinity

// Set up define modules
if (typeof define !== 'function') { var define = require('amdefine')(module); }

// Include dependencies
var url = require('url');
var xray = require('x-ray');
var phantom = require('x-ray-phantom');
var fs = require('fs');
var request = require('request');
var nodemailer = require('nodemailer');
var Table = require('cli-table');
var Q = require('q');
var http = require('http');
var knex = require('knex');
var bookshelf = require('bookshelf');
var querystring = require('querystring');
var parseString = require('xml2js').parseString;
var csv = require('csv-parser')
var fs = require('fs');
var usage = require('usage');
var requirejs = require('requirejs');
var async = require('async');
var glob = require('glob');
var cheerio = require('cheerio');
var _ = require('underscore');
var dateformat = require('dateformat');

var GoogleSpreadsheet = require('google-spreadsheet');
 
var EditGoogleSpreadsheet = require('edit-google-spreadsheet');


requirejs.config({
    baseUrl: '.',
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});


Object.defineProperty(global, '__stack', {
    get: function() {
        var orig = Error.prepareStackTrace;
        Error.prepareStackTrace = function(_, stack) {
            return stack;
        };
        var err = new Error;
        Error.captureStackTrace(err, arguments.callee);
        var stack = err.stack;
        Error.prepareStackTrace = orig;
        return stack;
    }
});

Object.defineProperty(global, '__line', {
    get: function() {
        return __stack[1].getLineNumber();
    }
});

Object.defineProperty(global, '__function', {
    get: function() {
        return __stack[1].getFunctionName();
    }
});


Object.defineProperty(global, '__file', {
    get: function() {
        return __stack[1].fileName;
    }
});

Object.defineProperty(global, '__callee_line', {
    get: function() {
        return __stack[2].getLineNumber();
    }
});

Object.defineProperty(global, '__callee_function', {
    get: function() {
        return __stack[2].getFunctionName();
    }
});


Object.defineProperty(global, '__callee_file', {
    get: function() {
        return __stack[2].getFileName();
    }
});


define([
    './models/Product',
    './models/Set',
    './models/SetLookup',
    './models/Store'
], function(Product, Set, SetLookup, Store) {
    var Falcon = function() {
        this.sentEmails = {};
        this.retailers = [];
        this.setNotifications = {};
        this.cli = {params: {}};

        this.deals = {
            CA: [],
            US: [],
            UK: [],
            EU: []
        };

        this.currencies = {
            CA: '$',
            US: '$',
            UK: '&pound;',
            EU: 'EUR '
        };

        this.currencyExchanges = {
            US: {
                CA: 1.41,
                UK: 0.66,
                EU: 0.92
            },
            CA: {
                US: 0.69,
                UK: 0.54,
                EU: 0.76
            },
            UK: {
                US: 1.52,
                CA: 1.84,
                EU: 1.40
            },
            EU: {
                US: 1.09,
                UK: 0.72,
                CA: 1.32
            },
            JP: {
                CA: 0.01
            }
        };
    };

    Falcon.prototype.sendMail = function(message, options) {
        // Check if we already sent the email, unless we send the 'force' option
        if (this.sentEmails[message] && !(options && options.force !== true)) { return; }

        Utils.sendMail(message, options);

        this.sentEmails[message] = true;
    };

    Falcon.prototype.monitorSets = function() {
        this.log('Starting: monitoring sets');

        var q = async.queue(this.scanSet.bind(this));

        q.drain = function() {
            this.log('Finished monitoring sets');

            this.monitorSets();
        }.bind(this);

        this.setupRetailers(function() {
            new Set()
            .query(function (knex) {
                var limit = 10;
                var skip = 0;
                var oneDayAgo = new Date();
                oneDayAgo.setDate(oneDayAgo.getDate()-1);

                knex.whereNot('priceThresholdNotification', null);
                knex.where('updatedAt', '<', oneDayAgo);
                //knex.where('type', null);

                knex.limit(limit).offset(skip);
            }.bind(this))
            .fetchAll()
            .then(function(sets) {
                if (!sets.length) {
                    this.log('Finished monitoring sets');
                    return;
                }

                sets.forEach(function(set) {
                    q.push(set.get('setNumber'));
                }.bind(this));
            }.bind(this));
        }.bind(this));
    };

    Falcon.prototype.monitorNotifications = function() {
        this.log('Starting: monitoring notifications');

        EditGoogleSpreadsheet.load({
            debug: true,
            spreadsheetId: "1JUOE-ms5JO08Tal_nHgeATa49w4opxdlY6-QPIpP1Ks",
            worksheetName: 'Sets',
            oauth2: {
                "client_id": "502221803141-cl9u12uirj4to5shbdq2d8kiuoag5p0l.apps.googleusercontent.com",
                "client_secret": "QXJhq_svtHyhhf7j1qOOSmtK",
                "refresh_token": "1/DXOUChTtKPVHE6kdkINwKFR6WouSIFA7p3i_yZmNSSnBactUREZofsF9C7PrpE-j"
            }
        }, function sheetReady(err, worksheet) {
            if (err) { this.log(err, 'error'); return; }

            this.log('Monitoring sheet: ' + worksheet.opts.worksheetName);

            worksheet.receive(function(err, originalRows, info) {
                if (err) { this.log(err, 'error'); return; }

                var columnHeadings = {};
                var hashedRows = {};

                Object.keys(originalRows['1']).forEach(function(columnNumber) {
                    columnHeadings[columnNumber] = originalRows['1'][columnNumber];
                }.bind(this));

                Object.keys(originalRows).slice(1).forEach(function(rowNumber) {
                    var row = originalRows[rowNumber];
                    var normalizedRow = {};

                    Object.keys(row).forEach(function(columnNumber) {
                        var key = columnHeadings[columnNumber];
                        normalizedRow[key] = row[columnNumber];
                    });

                    normalizedRow.originalRowNumber = rowNumber;

                    hashedRows[normalizedRow['setNumber']] = normalizedRow;
                }.bind(this));

                var q = async.queue(this.scanSet.bind(this));

                q.drain = function() {
                    this.log('Finished monitoring inventory sheet sets');
                }.bind(this);

                Object.keys(hashedRows).forEach(function(key) {
                    var row = hashedRows[key];

                    if (!row['priceThresholdNotification']) {
                        this.log('Skipping ' + row['setNumber']);
                        return;
                    }

                    this.log('Monitoring ' + row['setNumber']);

                    q.push(row['setNumber']);
                }.bind(this));
            }.bind(this));
        }.bind(this));
    };

    Falcon.prototype.run = function() {
        // this.parseSetList()
        // .then(function() {
         try {
    //         this.deals = {
    //             CA: [],
    //             US: [],
    //             UK: []
    //         };

            var googleSearchTimeout = 0;

            this.retailers.forEach(function(retailer, i) {
                new Store({key: retailer.key}).fetch().then(function(store) {
                    // TODO: Return if it's been less than the interval
                    retailer.getProductList(function(err, item) {
                        this.fetchProduct({url: item.url})
                        .then(function(product) {
                            item.storeId = store.get('id');

                            //product.attributes = _.extend(product.attributes, item);
                            product.save(item);

                            this.log('Product saved: ' + product.attributes.id);
                        }.bind(this))
                        .done();
                    }.bind(this));
                }.bind(this))
                .catch(function(err) {
                    this.log(err, 'error');
                }.bind(this));
            }.bind(this));
        }
        catch (err) {
            this.log(err, 'error');
        }
        // }.bind(this))
        // .done();
    };

    var PRODUCT_TYPES = {
        LEGO: 1
    };

    Falcon.prototype.identifyTypes = function() {
        new Product()
        .query(function (knex) {
            var limit = 10;
            var skip = 0;
            // var oneDayAgo = new Date();
            // oneDayAgo.setDate(oneDayAgo.getDate()-1);

            // knex.where('updatedAt', '<', oneDayAgo);
            knex.where('type', null);

            knex.limit(limit).offset(skip);
        })
        .fetchAll()
        .then(function(products) {
            products.forEach(function(product) {
                var retailer = product.get('store');
                var data = product.get('data');

                var saveSet = function(set) {
                    // if (!set.attributes[retailer.region + 'RetailPrice']) {
                    //     this.log('No ' + retailer.region + ' RRP on ' + set.attributes.setNumber + ' for ' + retailer.title, 'warn');

                    //     return;
                    // }

                    var savings = parseFloat((set.attributes[retailer.region + 'RetailPrice'] - product.attributes.currentPrice).toFixed(2));
                    var percentageOff = Math.round(100 - product.attributes.currentPrice / set.attributes[retailer.region + 'RetailPrice'] * 100, 2);

                    // Lets see if this is a good deal currency exchange wise
                    var caCurrencyExchangeBonusOff = Math.round((1 - this.compareCurrencyExchange(product.attributes.currentPrice, set.attributes[retailer.region + 'RetailPrice'], set.attributes['CA' + 'RetailPrice'], retailer.region, 'CA')) * 100, 2);
                    var usCurrencyExchangeBonusOff = Math.round((1 - this.compareCurrencyExchange(product.attributes.currentPrice, set.attributes[retailer.region + 'RetailPrice'], set.attributes['US' + 'RetailPrice'], retailer.region, 'US')) * 100, 2);
                    var ukCurrencyExchangeBonusOff = Math.round((1 - this.compareCurrencyExchange(product.attributes.currentPrice, set.attributes[retailer.region + 'RetailPrice'], set.attributes['UK' + 'RetailPrice'], retailer.region, 'UK')) * 100, 2);

                    if (!set.attributes.data) {
                        set.attributes.data = {};
                    }

                    if (!set.attributes.data.retailers) { 
                        set.attributes.data.retailers = {};
                    }

                    set.attributes.data.retailers[retailer.title + ' ' + retailer.region] = {
                        title: product.attributes.title,
                        price: product.attributes.currentPrice,
                        savings: savings,
                        percentageOff: percentageOff,
                        region: retailer.region,
                        link: product.attributes.url,
                        caCurrencyExchangeBonusOff: caCurrencyExchangeBonusOff,
                        usCurrencyExchangeBonusOff: usCurrencyExchangeBonusOff,
                        ukCurrencyExchangeBonusOff: ukCurrencyExchangeBonusOff
                    };

                    set.save();
                }.bind(this);

                if (data && data.setNumber) {
                    this.fetchSet({setNumber: data.setNumber}, retailer.region)
                    .then(saveSet)
                    .done();
                }
                else {
                    var url = 'https://www.google.com/search?q=brickset+' + product.title + '&aqs=chrome..69i57.285j0j1&sourceid=chrome&es_sm=91&ie=UTF-8';

                    // Fetch data from Brickset
                    request.get(url, function(err, response, body) {
                        if (err || response.statusCode != 200) { return; }

                        var match = /sets\/([0-9]*)-1/gi.exec(body);

                        // If we find the set number, save that
                        // otherwise let it continue anyway
                        if (!match) {
                            return;
                        }

                        var setNumber = match[1];

                        this.fetchSet({setNumber: setNumber}, retailer.region)
                        .then(saveSet);
                    }.bind(this));

                    return;
                }

                product.set('type', PRODUCT_TYPES.LEGO);
                product.save();
            }.bind(this));
        }.bind(this));
    };

    Falcon.prototype.calculateInvestmentRating = function(options) {
        // ratingFactor - brickset rating (weight this on 3.5 to 5, not 0 to 5)
        // hoardFactor - amazon CA seller count and US seller count + brickset has vs want
        // coolFactor - brickset has vs want
        // boxFactor - how cool is the box?
        // sizeFactor - how big is it per 
        // licenseFactor - is star wars or super heroes? other license?
        // immortalFactor - will this set live forever?
        // minifigFactor - has unique minifigs?
        // dealFactor - % off MSRP?
        // liquidFactor - FBA sales per month
        // regionFactor - amazon US vs CA price
        // ageFactor - days since release
        // conversionFactor - price compared to MSRP
        // 


        // ageFactor 
        // --> ratingFactor
        // ---->
        return (options.rating ? options.rating : 0) * 20;
    };

    Falcon.prototype.scout = function(setNumber) {
        this.log('Scouting ' + setNumber);

        new Set({setNumber: setNumber})
        .fetch()
        .then(function(model) {
            if (!model) {
                this.log('No data on ' + setNumber, 'warn', true);

                // Go through the retailers and try to find it

                return;
            }

            var set = model.attributes;

            var headers = ['Store', 'Price', 'In Stock', 'Link', 'Investment Rating'];
            var values = [];

            if (set['data'] && set['data']['retailers']) {
                for (retailerName in set['data']['retailers']) {
                    var retailerData = set['data']['retailers'][retailerName];
                    var investmentRating = this.calculateInvestmentRating({

                    });

                    values.push([retailerName, retailerData.price ? retailerData.price : '', ('inStockOnline' in retailerData) ? retailerData.inStockOnline : 'Unknown', retailerData.link ? retailerData.link : '', investmentRating])
                }
            }

            var table = new Table({ head: headers });

            table.push.apply(table, values);

            this.log(table.toString());
        }.bind(this))
        .catch(function(err) {
            this.log(err, 'error');
            d.reject(err);
        }.bind(this));
    };

    Falcon.prototype.log = function(message, priority, show) {show = true;
        if (priority === 'error' && typeof message === 'object') {
            message = message.stack;
        }
        else {
            message = __callee_file + ':' + __callee_function + ':' + __callee_line + ' ' + message;
        }

        message = '[' + dateformat(new Date(), 'HH:MM:ss.l') + '] ' + message;

        var filename = 'general.log';

        var log = fs.createWriteStream('logs/' + filename, {'flags': 'a'});
        log.end(message + '\n');

        if (priority) {
            filename = priority + '.log';

            log = fs.createWriteStream('logs/' + filename, {'flags': 'a'});
            log.end(message + '\n');

            if (priority === 'error' || priority === 'warn') {
                console.error(message);

                return;
            }
        }

        if (show) {
            console.log(message);
        }
    };

    Falcon.prototype.createSet = function(set) {
        var d = Q.defer();

        if (('id' in set) && !parseInt(set['id'])) {
            delete set['id'];
        }

        new Set()
        .save(set)
        .then(function(data) {
            d.resolve(data.attributes);

            this.log('Set created for #' + data.attributes.setNumber);
        }.bind(this))
        .catch(function(err) {
            new Set({setNumber: set.setNumber})
            .fetch()
            .then(function(model) {
                if (!model) {
                    this.log('Model not found in createSet', 'warn');
                    return;
                }

                new Set({id: model.attributes.id})
                .save(set)
                .then(function(data) {
                    d.resolve(data.attributes);

                    this.log('Set created for #' + data.attributes.setNumber);
                }.bind(this))
                .catch(function(err) {
                    this.log(err, 'error');
                }.bind(this));
            }.bind(this))
            .catch(function(err) {
                this.log(err, 'error');
            }.bind(this));
        }.bind(this));

        return d.promise;
    };

    Falcon.prototype.saveSet = function(set) {
        var d = Q.defer();

        new Set({id: parseInt(set.id)})
        .save(set)
        .then(function(model) {
            if (!model) {
                this.log('Model not found in saveSet', 'warn');
                this.createSet(model)
                .then(d.resolve)
                .done();
                return;
            }

            d.resolve(model);

            this.log('Set saved for #' + model.attributes.setNumber);
        }.bind(this))
        .catch(function(err) {
            this.log('Trying to fetch ' + set.setNumber);

            new Set({setNumber: set.setNumber})
            .fetch()
            .then(function(model) {
                if (!model) {
                    this.log('Model not found in saveSet catch. Running createSet.');
                    this.createSet(set)
                    .then(d.resolve)
                    .done();
                    return;
                }

                model.save(set);

                this.log('Set saved for #' + data.attributes.setNumber);

                d.resolve(model);
            }.bind(this))
            .catch(function(err) {
                this.log(err, 'error');
            }.bind(this));
        }.bind(this));

        return d.promise;
    };

    Falcon.prototype.saveSetLookup = function(search, target, result) {
        var d = Q.defer();

        new SetLookup()
        .save({search: search, target: target, result: result})
        .then(function(model) {
            d.resolve(model);
        })
        .catch(function(err) {
            this.log(err, 'error');
            d.reject(err);
        }.bind(this));

        return d.promise;
    };

    var getSetNumberFromTitle_lookupDelay = 0;

    Falcon.prototype.getSetNumberFromTitle = function(title) {
        var d = Q.defer();

        var target = 'getSetNumberFromTitle';

        new SetLookup({search: title, target: target})
        .fetch()
        .then(function(model) {
            if (model) {
                d.resolve(model.attributes.result.setNumber);
            }
            else {
                getSetNumberFromTitle_lookupDelay += 3000;

                setTimeout(function() {
                    var url = 'https://www.google.com/search?q=brickset+' + title + '&aqs=chrome..69i57.285j0j1&sourceid=chrome&es_sm=91&ie=UTF-8';

                    // Fetch data from Brickset
                    request.get(url, function(err, response, body) {
                        if (err || response.statusCode != 200) { return; }

                        var match = /sets\/([0-9]*)-1/gi.exec(body);

                        if (!match) { return d.reject('Could not find set number searching Google'); }

                        var data = {
                            setNumber: match[1]
                        };

                        this.saveSetLookup(title, target, data)
                        .then(function(model) {
                            d.resolve(model.attributes.result.setNumber);
                        })
                        .done();

                        getSetNumberFromTitle_lookupDelay -= 3000;
                    });
                }.bind(this), getSetNumberFromTitle_lookupDelay);
            }
        }.bind(this))
        .catch(function(err) {
            this.log(err, 'error');
            d.reject(err);
        }.bind(this));

        return d.promise;
    };

    var getAmazonPrice_lookupDelay = 0;

    Falcon.prototype.getAmazonData = function(setNumber) {
        var d = Q.defer();
        var target = 'getAmazonData';

        new SetLookup({search: setNumber, target: target})
        .fetch()
        .then(function(model) {
            if (model) {
                d.resolve(model.attributes.result);
            }
            else {
                getAmazonPrice_lookupDelay += 3000;

                setTimeout(function() {
                    var url = 'http://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=lego+' + setNumber;

                    xray(url)
                    .prepare({
                        trim: function(value) {
                            return value.replace(/^\s+|\s+$/g, '');
                        },
                        currency: function(value) {
                            return parseFloat(value.replace('$', ''));
                        }
                    })
                    .select({
                        $root: '.s-item-container:first-child',
                        currentPrice: '.s-price | trim | currency',
                        cheapestPrice: '.a-size-small .a-color-price | trim | currency'
                    })
                    .run(function(err, product) {
                        if (!product) { return; }

                        var data = {
                            price: product.cheapestPrice ? product.cheapestPrice : product.currentPrice,
                            currentPrice: product.currentPrice,
                            cheapestPrice: product.cheapestPrice
                        };

                        this.log('Got data for set ' + setNumber + ' from Amazon.com', data);

                        this.saveSetLookup(setNumber, target, data)
                        .then(function(model) {
                            d.resolve(model.attributes.result);
                        })
                        .done();

                        getAmazonPrice_lookupDelay -= 3000;
                    }.bind(this));
                }.bind(this), getAmazonPrice_lookupDelay);
            }
        }.bind(this))
        .catch(function(err) {
            this.log(err, 'error');
            d.reject(err);
        }.bind(this));

        return d.promise;
    };

    Falcon.prototype.fetchProduct = function(filter, region) {
        var d = Q.defer();

        this.log('Fetching product using this filter: ' + JSON.stringify(filter));

        new Product(filter)
        .fetch()
        .then(function(model) {
            if (!model) {
                this.log('Could not find product so returning a new one');
                return d.resolve(new Product());
            }

            this.log('Using product from database: ' + JSON.stringify(filter));

            d.resolve(model);
        }.bind(this))
        .catch(function(err) {
            this.log(err, 'error');
        }.bind(this));

        return d.promise;
    };

    var fetchSetTimeout = 1 * 1000;

    // Use it fetchSet({setNumber: '10179'})

    Falcon.prototype.fetchSet = function(filter, region) {
        var d = Q.defer();

        new Set(filter)
        .fetch()
        .then(function(model) {
            if (model) {
                this.log('Using set from database: ' + JSON.stringify(filter));

                if (!model.attributes.data.retailers) {
                    model.attributes.data.retailers = {};
                }

                d.resolve(model);
            }
            else {
                fetchSetTimeout += 3000;

                this.log('Brickset timeout is ' + fetchSetTimeout);

                setTimeout(function() {
                    var postData = querystring.stringify({
                        apiKey: 'UPBZ-ODTg-LL6p',
                        userHash: '',
                        query: '',
                        theme: '',
                        subtheme: '',
                        setNumber: filter.setNumber + '-1',
                        year: '',
                        owned: '',
                        wanted: '',
                        orderBy: '',
                        pageSize: '',
                        pageNumber: '',
                        userName: ''
                    });

                    var postOptions = {
                        host: 'brickset.com',
                        port: 80,
                        path: '/api/v2.asmx/getSets',
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/x-www-form-urlencoded',
                          'Content-Length': postData.length
                        }
                    };

                    if (!filter.setNumber) {
                        this.log('Attempt to send request to Brickset for undefined setNumber', 'error'); 
                        return;
                    }

                    this.log('Sending request to Brickset for #' + filter.setNumber);

                    var postReq = http.request(postOptions, function(res) {
                        res.setEncoding('utf8');

                        var xml = '';
                        res.on('data', function (chunk) {
                            xml += chunk;
                        });

                        res.on('end', function() {
                            parseString(xml, function (err, result) {
                                if (err) { console.trace(err); return d.reject(err); }
                                if (!result || !result['ArrayOfSets'] || !result['ArrayOfSets']['sets']) { return d.reject(new Error('Error parsing Brickset xml')); }

                                var set = {};
                                var setData = result['ArrayOfSets']['sets'][0];

                                set.title = setData.name[0] ? setData.name[0] : null;
                                set.setNumber = setData.number[0] ? setData.number[0] : null;
                                set.setNumberVariant = setData.numberVariant[0] ? setData.numberVariant[0] : null;
                                set.releasedAt = setData.year[0] ? new Date(setData.year[0]) : null;
                                set.theme = setData.theme[0] ? setData.theme[0] : null;
                                set.themeGroup = setData.themeGroup[0] ? setData.themeGroup[0] : null;
                                set.subtheme = setData.subtheme[0] ? setData.subtheme[0] : null;
                                set.pieces = setData.pieces[0] ? parseInt(setData.pieces[0]) : null;
                                set.minifigs = setData.minifigs[0] ? parseInt(setData.minifigs[0]) : null;
                                set.imageFilename = setData.imageFilename && setData.imageFilename[0] ? setData.imageFilename[0] : null;
                                set.thumbnailUrl = setData.thumbnailURL && setData.thumbnailURL[0] ? setData.thumbnailURL[0] : null;
                                set.imageUrl = setData.imageURL && setData.imageURL[0] ? setData.imageURL[0] : null;
                                set.largeThumbnailUrl = setData.largeThumbnailURL && setData.largeThumbnailURL[0] ? setData.largeThumbnailURL[0] : null;
                                set.ownedTotal = setData.ownedByTotal[0] ? setData.ownedByTotal[0] : null;
                                set.wantedTotal = setData.wantedByTotal[0] ? setData.wantedByTotal[0] : null;
                                set.rating = setData.rating[0] ? setData.rating[0] : null;
                                set.packagingType = setData.packagingType[0] ? setData.packagingType[0] : null;
                                set.availability = setData.availability[0] ? setData.availability[0] : null;
                                set.instructionsCount = setData.instructionsCount[0] ? setData.instructionsCount[0] : null;
                                set.EAN = setData.EAN[0] ? setData.EAN[0] : null;
                                set.UPC = setData.UPC[0] ? setData.UPC[0] : null;

                                set.CARetailPrice = setData.CARetailPrice[0] ? parseFloat(setData.CARetailPrice[0]) : null;
                                set.USRetailPrice = setData.USRetailPrice[0] ? parseFloat(setData.USRetailPrice[0]) : null;
                                set.UKRetailPrice = setData.UKRetailPrice[0] ? parseFloat(setData.UKRetailPrice[0]) : null;
                                set.EURetailPrice = setData.EURetailPrice[0] ? parseFloat(setData.EURetailPrice[0]) : null;

                                var twoYearsAgo = new Date();

                                twoYearsAgo.setYear(twoYearsAgo.getYear() - 2);

                                set.isRetired = (new Date(setData.lastUpdated)) < twoYearsAgo; // set last updated is older than 2 years ago from now

                                if (!set.data) {
                                    set.data = {};
                                }

                                if (!set.data.info) {
                                    set.data.info = {};
                                }

                                set.data.info.brickset = setData;

                                if (!set[region + 'RetailPrice']) { return; }

                                for(var key in this.setNotifications) {
                                    var match = new RegExp('^' + key.replace('*', '(.*)'), 'gi').exec(set.setNumber);

                                    if (match) {
                                        set.priceThresholdNotification = this.setNotifications[key].priceThresholdNotification;
                                    }
                                }

                                this.saveSet(set)
                                .then(function() {
                                    d.resolve(set);
                                })
                                .done();

                                // this.getAmazonData(set.setNumber)
                                // .then(function(amazonData) {
                                //     if (!set.data.retailers) {
                                //         set.data.retailers = {};
                                //     }

                                //     set.data.retailers['Amazon US'] = amazonData;

                                //     this.saveSet(set)
                                //     .then(function() {
                                //         d.resolve(set);
                                //     })
                                //     .done();
                                // }.bind(this))
                                // .done();
                            }.bind(this));

                            fetchSetTimeout -= 3000;
                        }.bind(this));
                    }.bind(this));

                    postReq.write(postData);
                    postReq.end();
                }.bind(this), fetchSetTimeout);
            }
        }.bind(this))
        .catch(function(err) {
            this.log(err, 'error');
            d.reject(err);
        }.bind(this));

        return d.promise;
    };

    Falcon.prototype.importSets = function() {
        this.log('Importing sets');

        fs.createReadStream('sets.csv')
        .pipe(csv())
        .on('data', function(setData) {
            var set = {};
            
            set.title = setData.name ? setData.name : null;
            set.setNumber = setData.number ? setData.number : null;
            //set.setNumberVariant = setData.numberVariant ? setData.numberVariant : null;
            set.releasedAt = setData.year ? new Date(setData.year) : null;
            set.theme = setData.theme ? setData.theme : null;
            //set.themeGroup = setData.themeGroup ? setData.themeGroup : null;
            set.subtheme = setData.subtheme ? setData.subtheme : null;
            set.pieces = setData.pieces ? parseInt(setData.pieces) : null;
            set.minifigs = setData.minifigs && setData.minifigs != 'NA' ? parseInt(setData.minifigs) : null;
            //set.imageFilename = setData.imageFilename && setData.imageFilename ? setData.imageFilename : null;
            //set.thumbnailUrl = setData.thumbnailURL && setData.thumbnailURL ? setData.thumbnailURL : null;
            set.imageUrl = setData.imageURL && setData.imageURL ? setData.imageURL : null;
            //set.largeThumbnailUrl = setData.largeThumbnailURL && setData.largeThumbnailURL ? setData.largeThumbnailURL : null;
            //set.ownedTotal = setData.ownedByTotal ? setData.ownedByTotal : null;
            //set.wantedTotal = setData.wantedByTotal ? setData.wantedByTotal : null;
            //set.rating = setData.rating ? setData.rating : null;
            set.packagingType = setData.packagingType ? setData.packagingType : null;
            set.availability = setData.availability ? setData.availability : null;
            //set.instructionsCount = setData.instructionsCount ? setData.instructionsCount : null;
            //set.EAN = setData.EAN ? setData.EAN : null;
            //set.UPC = setData.UPC ? setData.UPC : null;

            set.CARetailPrice = setData.CARetailPrice ? parseFloat(setData.CARetailPrice) : null;
            set.USRetailPrice = setData.USRetailPrice ? parseFloat(setData.USRetailPrice) : null;
            set.UKRetailPrice = setData.UKRetailPrice ? parseFloat(setData.UKRetailPrice) : null;
            set.EURetailPrice = setData.EURetailPrice ? parseFloat(setData.EURetailPrice) : null;

            var twoYearsAgo = new Date();

            twoYearsAgo.setYear(twoYearsAgo.getYear() - 2);

            //set.isRetired = (new Date(setData.lastUpdated)) < twoYearsAgo; // set last updated is older than 2 years ago from now

            if (!set.data) {
                set.data = {};
            }

            if (!set.data.info) {
                set.data.info = {};
            }

            set.data.info.brickset = setData;
console.log(set);
            new Set().save(set);
        }.bind(this))
        .on('end', function() {
            this.log('Done importing sets.')
        }.bind(this));
    };

    Falcon.prototype.parseSetList = function() {
        var d = Q.defer();

        fs.createReadStream('set-notifications.csv')
        .pipe(csv())
        .on('data', function(row) {
            if (!this.setNotifications[row.setNumber]) {
                this.setNotifications[row.setNumber] = {};
            }

            this.setNotifications[row.setNumber].priceThresholdNotification = parseFloat(row.priceThresholdNotification.replace('%'));
        }.bind(this))
        .on('end', function() {
            d.resolve(this.setNotifications);
        });

        return d.promise;
    };

    Falcon.prototype.setupRetailers = function(cb) {
        new Store().fetchAll().then(function(result) {
            result.models.forEach(function(retailer) {
                if (!retailer.get('key') || !retailer.get('isActive')) {
                    return;
                }

                retailer.setEngine(requirejs('retailers/' + retailer.get('key')));

                this.addRetailer(retailer);
            }.bind(this));

            cb && cb(null);
        }.bind(this))
        .catch(function(err) {
            this.log(err, 'error');
        }.bind(this));
    };

    Falcon.prototype.scanSet = function(setNumber, cb) {
        // glob('retailers/**/*.js', {}, function (er, files) {
        //     // files is an array of filenames.
        //     // If the `nonull` option is set, and nothing
        //     // was found, then files is ["**/*.js"]
        //     // er is an error object or null.
        //     files.forEach(function(filename) {
        //         requirejs([filename.replace('.js', '')], function(retailer) {
        //             //this.addRetailer(retailer);
        //         }.bind(this));
        //     }.bind(this))
        // }.bind(this));
        var saveSet = function(set, product, retailer, next) {
            console.log(product);
            var savings = parseFloat((set.attributes[retailer.get('region') + 'RetailPrice'] - product.currentPrice).toFixed(2));
            var percentageOff = Math.round(100 - product.currentPrice / set.attributes[retailer.region + 'RetailPrice'] * 100, 2);

            // Lets see if this is a good deal currency exchange wise
            var caCurrencyExchangeBonusOff = Math.round((1 - this.compareCurrencyExchange(product.currentPrice, set.attributes[retailer.get('region') + 'RetailPrice'], set.attributes['CA' + 'RetailPrice'], retailer.get('region'), 'CA')) * 100, 2);
            var usCurrencyExchangeBonusOff = Math.round((1 - this.compareCurrencyExchange(product.currentPrice, set.attributes[retailer.get('region') + 'RetailPrice'], set.attributes['US' + 'RetailPrice'], retailer.get('region'), 'US')) * 100, 2);
            var ukCurrencyExchangeBonusOff = Math.round((1 - this.compareCurrencyExchange(product.currentPrice, set.attributes[retailer.get('region') + 'RetailPrice'], set.attributes['UK' + 'RetailPrice'], retailer.get('region'), 'UK')) * 100, 2);

            if (!set.get('data')) {
                set.get('data') = {};
            }

            if (!set.get('data').retailers) { 
                set.get('data').retailers = {};
            }
            // TODO: Check it's more than 50% different, if so it's probably wrong,
            // And shouldn't be added

            set.get('data').retailers[retailer.get('title') + ' ' + retailer.get('region')] = {
                title: product.title,
                price: product.currentPrice,
                inStockOnline: product.inStockOnline,
                inStockNearby: product.inStockNearby,
                savings: savings,
                percentageOff: percentageOff,
                region: retailer.get('region'),
                link: product.url,
                caCurrencyExchangeBonusOff: caCurrencyExchangeBonusOff,
                usCurrencyExchangeBonusOff: usCurrencyExchangeBonusOff,
                ukCurrencyExchangeBonusOff: ukCurrencyExchangeBonusOff
            };

            set.save();

            this.log('Scanned and saved set #' + setNumber + ' for ' + retailer.get('title'));//JSON.stringify(set.attributes));
            
            next();
        }.bind(this);

        var q = async.queue(function(options, next) {
            var set = options.set;
            var retailer = options.retailer;

            // TODO: Just convert the currency that does exist
            if (!set.get(retailer.get('region') + 'RetailPrice')) {
                this.log('No ' + retailer.get('region') + ' RRP on ' + set.get('setNumber') + ' for ' + retailer.get('title'), 'warn');
                
                //next(); return;
            }

            var retailerData = set.get('data').retailers[retailer.get('title') + ' ' + retailer.get('region')];

            if (this.cli.params['clear-saved-data']) {
                retailerData = {};
            }

            if (this.cli.params['clear-saved-link'] && retailerData) {
                retailerData.link = null;
            }

            var timeout = setTimeout(function() {
                timeout = false;
                this.log('Timeout while scanning set. Continuing..');
                next();
            }.bind(this), 1 * 60 * 1000);
            
            if (!retailerData || !retailerData.link) {
                this.log('Scanned and didnt find retailer for #' + set.get('setNumber') + ' on ' + retailer.get('title'));
                
                retailer.findProduct(set, function(err, product) {
                    if (!timeout) { this.log('Timeout while scanning occurred before finding product.'); return; }

                    clearTimeout(timeout);

                    if (err) { this.log(err); next(); return; }

                    // If this region doesn't have a retail price, lets convert to CAD
                    if (!set.get(retailer.get('region') + 'RetailPrice')) {
                        product.currentPrice = this.convertCurrency(product.currentPrice, retailer.get('region'), 'CA');
                        product.originalPrice = this.convertCurrency(product.originalPrice, retailer.get('region'), 'CA');
                    }

                    saveSet(set, product, retailer, next);
                }.bind(this));

                return;
            }

            var url = retailerData.link;

            retailer.getProduct(url, function(err, product) {
                clearTimeout(timeout);

                saveSet(set, product, retailer, next);
            }.bind(this));
        }.bind(this));

        q.drain = function() {
            this.log('Finished scanning set ' + setNumber + ' on all retailers');

            cb && cb();
        }.bind(this);


        this.setupRetailers(function() {
            console.log('Fetching ' + setNumber);

            this.fetchSet({setNumber: setNumber}, 'CA')
            .then(function(set) {
                this.retailers.forEach(function(retailer) {
                    q.push({set: set, retailer: retailer});
                }.bind(this));
            }.bind(this))
            .fail(function(err) {
                this.log('Problem fetching set ', err);

                cb && cb();
            }.bind(this))
            .done();
        }.bind(this));
    };


    Falcon.prototype.scanRetailer = function(retailerKey, cb) {
        this.setupRetailers(function() {
            this.retailers.forEach(function(retailer, i) {
                if (retailer.get('key') !== retailerKey) { return; }

                this.log('Getting product list for retailer: ' + retailer.get('key'));

                // TODO: Return if it's been less than the interval
                retailer.getProductList(function(err, item) {
                    console.log('aaa', item);
                    if (err) { console.trace(err); return; }

                    if (!item.setNumber) {
                        this.log('Did not get set item number'); return;
                    }

                    this.fetchSet({setNumber: item.setNumber})
                    .then(function(set) {
                        item.storeId = retailer.get('id');


                        var savings = parseFloat((set.attributes[retailer.get('region') + 'RetailPrice'] - item.currentPrice).toFixed(2));
                        var percentageOff = Math.round(100 - item.currentPrice / set.attributes[retailer.get('region') + 'RetailPrice'] * 100, 2);

                        // Lets see if this is a good deal currency exchange wise
                        var caCurrencyExchangeBonusOff = Math.round((1 - this.compareCurrencyExchange(item.currentPrice, set.attributes[retailer.get('region') + 'RetailPrice'], set.attributes['CA' + 'RetailPrice'], retailer.get('region'), 'CA')) * 100, 2);
                        var usCurrencyExchangeBonusOff = Math.round((1 - this.compareCurrencyExchange(item.currentPrice, set.attributes[retailer.get('region') + 'RetailPrice'], set.attributes['US' + 'RetailPrice'], retailer.get('region'), 'US')) * 100, 2);
                        var ukCurrencyExchangeBonusOff = Math.round((1 - this.compareCurrencyExchange(item.currentPrice, set.attributes[retailer.get('region') + 'RetailPrice'], set.attributes['UK' + 'RetailPrice'], retailer.get('region'), 'UK')) * 100, 2);

                        if (!set.attributes.data) {
                            set.attributes.data = {};
                        }

                        if (!set.attributes.data.retailers) { 
                            set.attributes.data.retailers = {};
                        }

                        set.attributes.data.retailers[retailer.get('title') + ' ' + retailer.get('region')] = {
                            title: item.title,
                            price: item.currentPrice,
                            savings: savings,
                            percentageOff: percentageOff,
                            region: retailer.get('region'),
                            link: item.url,
                            caCurrencyExchangeBonusOff: caCurrencyExchangeBonusOff,
                            usCurrencyExchangeBonusOff: usCurrencyExchangeBonusOff,
                            ukCurrencyExchangeBonusOff: ukCurrencyExchangeBonusOff
                        };

                        set.save();


                        this.log('Set saved: ' + set.get('setNumber'));
                    }.bind(this))
                    .done();
                }.bind(this));
            }.bind(this));
        }.bind(this));
    };

    Falcon.prototype.addRetailer = function(retailer, interval) {
        var exists = false;
        var retailerId = retailer.get('title') + ' ' + retailer.get('region');

        this.retailers.forEach(function(retailer2) {
            var retailerId2 = retailer2.get('title') + ' ' + retailer2.get('region');
            if (retailerId2 === retailerId) {
                exists = true;
            }
        });

        if (exists) {
            this.log('Retailer already exists: ' + retailerId);
            return;
        }

        this.log('Adding retailer: ' + retailerId);

        retailer.interval = interval;

        this.retailers.push(retailer);
    };

    // price, set[region + 'RetailPrice'], set['CA' + 'RetailPrice'], region, 'CA'
    // 100, 100 USD, 120 CAD, US, CA
    Falcon.prototype.compareCurrencyExchange = function(price, targetRRP, desiredRRP, targetCurrency, desiredCurrency) {
        if (targetCurrency === desiredCurrency) { return 1; }

        return targetRRP * this.currencyExchanges[targetCurrency][desiredCurrency] / desiredRRP;
    };

    Falcon.prototype.convertCurrency = function(price, currentCurrency, targetCurrency) {
        var converter = this.currencyExchanges[currentCurrency][targetCurrency];

        if (!converter) {
            return price;
        }

        return price * converter;
    };

    Falcon.prototype.generateDealsPage = function(filename, stores, region) {
        var html = '<html><body><ul>';

        //console.log('Generating deals page ' + filename + ' with ' + stores.length + ' deals');

        for (storeName in stores) {
            var deals = stores[storeName];

            for (setNumber in deals) {
                var deal = deals[setNumber];

                html += '<li><a href="' + deal.link + '">';
                html += deal.store + ': ' + deal.setNumber + ' - ' + deal.title + ' = ' + this.currencies[region] + deal.price;

                if (deal.percentageOff) {
                    html += ' (' 
                        + deal.percentageOff + '% off/save ' + this.currencies[region] + deal.savings + ' / '
                        + deal.usCurrencyExchangeBonusOff + '% vs US MSRP / ' 
                        + deal.ukCurrencyExchangeBonusOff + '% vs UK MSRP / ' 
                        + deal.caCurrencyExchangeBonusOff + '% vs CAD MSRP'
                    + ') ';
                }
                
                html += (deal.passesAmazonThreshold ? '#' : '');
                html += '</a></li>';
            }
        }

        html += '</ul></body></html>';

        fs.writeFileSync(filename, html);
    };

    function formatPrice(n) {
        return '$' + parseFloat(n).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }

    Falcon.prototype.updateNotificationSheet = function() {
        // TODO: Check the preferences for region and such


        EditGoogleSpreadsheet.load({
            debug: true,
            spreadsheetId: "1JUOE-ms5JO08Tal_nHgeATa49w4opxdlY6-QPIpP1Ks",
            worksheetName: 'Notifications',
            oauth2: {
                "client_id": "502221803141-cl9u12uirj4to5shbdq2d8kiuoag5p0l.apps.googleusercontent.com",
                "client_secret": "QXJhq_svtHyhhf7j1qOOSmtK",
                "refresh_token": "1/DXOUChTtKPVHE6kdkINwKFR6WouSIFA7p3i_yZmNSSnBactUREZofsF9C7PrpE-j"
            }
        }, function sheetReady(err, worksheet) {
            if (err) { this.log(err, 'error'); return; }

            this.log('Updating sheet: ' + worksheet.opts.worksheetName);

            worksheet.receive(function(err, originalRows, info) {
                if (err) { this.log(err, 'error'); return; }

                var columnHeadings = {};

                Object.keys(originalRows['1']).forEach(function(columnNumber) {
                    columnHeadings[columnNumber] = originalRows['1'][columnNumber];
                });

                var updatedRows = {};
                var createdRows = {};
                var hashedRows = {};

                Object.keys(originalRows).slice(1).forEach(function(rowNumber) {
                    //console.log(rows[rowNumber]);
                    var row = originalRows[rowNumber];
                    var normalizedRow = {};

                    Object.keys(row).forEach(function(columnNumber) {
                        var key = columnHeadings[columnNumber];
                        normalizedRow[key] = row[columnNumber];
                    });

                    normalizedRow.originalRowNumber = rowNumber;

                    hashedRows[normalizedRow['Set Number']] = normalizedRow;
                });

                this.setupRetailers(function() {
                    new Set()
                    .query(function (knex) {
                        knex.whereNot('priceThresholdNotification', null);
                    }.bind(this))
                    .fetchAll()
                    .then(function(sets) {
                        var q = async.queue(function(set, next) {
                            setTimeout(function() {
                                var setData = set.attributes;
                                var data = {};

                                if (setData.data && setData.data && setData.data.retailers) {
                                    Object.keys(setData.data.retailers).forEach(function(key) {
                                        var retailer = setData.data.retailers[key];

                                        if (retailer.inStockOnline) {
                                            data[key + "\n" + 'Price'] = formatPrice(retailer.price);
                                        } else {
                                            data[key + "\n" + 'Price'] = 'Out of Stock';
                                        }
                                    });
                                }

                                data['Set Number'] = set.get('setNumber');
                                data['Title'] = set.get('title');
                                data['Threshold'] = set.get('priceThresholdNotification') + '.00%';
                                data['Retail Price'] = formatPrice(set.get('CARetailPrice') ? set.get('CARetailPrice') : (set.get('USRetailPrice') * this.currencyExchanges.US.CA));
                                data['sheetUpdatedAt'] = dateformat(new Date(), 'mm/dd/yyyy HH:MM:ss');

                                if (hashedRows[set.get('setNumber') + '']) {
                                    var row = hashedRows[set.get('setNumber') + ''];

                                    // Check if this row was updated within the last hour
                                    // If so, skip it
                                    if (row.sheetUpdatedAt) {
                                        var sheetUpdatedAt = new Date(row.sheetUpdatedAt);
                                        var limitAt = new Date();

                                        limitAt.setHours(limitAt.getHours() - 1);

                                        if (sheetUpdatedAt < limitAt) {
                                            //continue;
                                        }
                                        else {
                                            this.log('Skipping ' + set.get('setNumber'));
                                            // We updated within the last hour so lets get out of here
                                            //next(); return;
                                        }
                                    }

                                    // Remove data that hasn't changed
                                    // Save data to the row that has changed
                                    Object.keys(data).forEach(function(key) {
                                        if (!data[key] || row[key] == data[key]) {
                                            delete row[key];
                                        }
                                        else {
                                            row[key] = data[key];
                                        }
                                    });

                                    this.log('Updating ' + set.get('setNumber'));

                                    updatedRows[set.get('setNumber') + ''] = row;
                                }
                                else {
                                    //this.log('Creating ' + set.get('setNumber'));
                                    var row = {};

                                    // Remove data that hasn't changed
                                    // Save data to the row that has changed
                                    Object.keys(data).forEach(function(key) {
                                        if (!data[key]) {
                                            delete data[key];
                                        }
                                        else {
                                            row[key] = data[key];
                                        }
                                    });

                                    createdRows[set.get('setNumber') + ''] = row;
                                }

                                next();
                            }.bind(this));
                        }.bind(this));

                        q.drain = function() {
                            this.log('Finished updating sheet: ' + worksheet.opts.worksheetName);

                            var updateRows = {};
                            var createRows = {};
                            var lastRow = info.lastRow;

                            Object.keys(createdRows).forEach(function(setNumber) {
                                var row = createdRows[setNumber];

                                var reverseColumnHeadings = {};

                                Object.keys(columnHeadings).forEach(function(columnHeading) {
                                    var value = columnHeadings[columnHeading];
                                    reverseColumnHeadings[value] = columnHeading;
                                });

                                var convertedRow = {};

                                Object.keys(row).forEach(function(columnHeading) {
                                    var column = reverseColumnHeadings[columnHeading];

                                    if (!column) { return; }

                                    convertedRow[column] = row[columnHeading];
                                });

                                lastRow++;

                                createRows[lastRow] = convertedRow;
                            });

                            Object.keys(updatedRows).forEach(function(setNumber) {
                                var row = updatedRows[setNumber];

                                // If we have more than just originalRowNumber and originalColumnNumber
                                if (Object.keys(row).length > 2) {
                                    updateRows[row.originalRowNumber] = {};

                                    Object.keys(columnHeadings).forEach(function(columnNumber) {
                                        var columnHeading = columnHeadings[columnNumber];

                                        if (columnHeading in row) {
                                            updateRows[row.originalRowNumber][columnNumber] = row[columnHeading];
                                        }
                                    });
                                }
                            });

                            var sendBatch = function(convertedRows, options, cb) {
                                if (!Object.keys(convertedRows).length) {
                                    this.log("Nothing to be consumed. Continuing.");
                                    cb && cb();
                                    return;
                                }

                                var batchAmount = 20;
                                var lastIndex = 0;
                                var totalRows = Object.keys(originalRows).length;
                                var done = false;

                                var consumeBatch = function() {
                                    this.log("Consuming from " + lastIndex + " to " + (lastIndex + batchAmount) + " of " + totalRows);

                                    var sendRows = {};
                                    Object.keys(convertedRows).forEach(function(rowNumber) {
                                        var index = parseInt(rowNumber) + '';
                                        if (index >= lastIndex && index < (lastIndex + batchAmount)) {
                                            sendRows[index] = convertedRows[rowNumber];
                                        }
                                    });

                                    lastIndex = lastIndex + batchAmount;
console.log(sendRows);

                                    var afterSend = function() {
                                        // We're done here
                                        if (!done && lastIndex >= totalRows) { 
                                            this.log("Done saving. All batches have been consumed.");
                                            done = true;
                                            cb && cb();
                                            return;
                                        }

                                        consumeBatch();
                                    }.bind(this);

                                    if (Object.keys(sendRows).length) {
                                        worksheet.add(sendRows);

                                        worksheet.send(options, function(err) {
                                            if (err) { throw err; this.log(err, 'error'); return; }

                                            afterSend();
                                        }.bind(this));
                                    } else {
                                        afterSend();
                                    }
                                }.bind(this);

                                consumeBatch();
                            }.bind(this);

                            sendBatch(createRows, {autoSize: true}, function() {
                                sendBatch(updateRows, {});
                            });
                        }.bind(this);

                        sets.forEach(function(set) {
                            q.push(set);
                        }.bind(this));
                    }.bind(this));
                }.bind(this));
            }.bind(this));
        }.bind(this));
    };

    Falcon.prototype.updateSheet = function(sheetKey) {
        if (sheetKey === 'sets') {
            this.updateSetsSheet();
        }
        else if (sheetKey === 'notifications') {
            this.updateNotificationSheet();
        }
        else if (sheetKey === 'inventory') {
            this.updateInventorySheet();
        }
    };

    Falcon.prototype.updateSheets = function() {
        this.updateNotificationSheet();
        this.updateSetsSheet();
        this.updateInventorySheet();
    };

    Falcon.prototype.monitorInventory = function() {
        EditGoogleSpreadsheet.load({
            debug: true,
            spreadsheetId: "1JUOE-ms5JO08Tal_nHgeATa49w4opxdlY6-QPIpP1Ks",
            worksheetName: 'Inventory',
            oauth2: {
                "client_id": "502221803141-cl9u12uirj4to5shbdq2d8kiuoag5p0l.apps.googleusercontent.com",
                "client_secret": "QXJhq_svtHyhhf7j1qOOSmtK",
                "refresh_token": "1/DXOUChTtKPVHE6kdkINwKFR6WouSIFA7p3i_yZmNSSnBactUREZofsF9C7PrpE-j"
            }
        }, function sheetReady(err, worksheet) {
            if (err) { this.log(err, 'error'); return; }

            this.log('Monitoring sheet: ' + worksheet.opts.worksheetName);

            worksheet.receive(function(err, originalRows, info) {
                if (err) { this.log(err, 'error'); return; }

                var columnHeadings = {};
                var hashedRows = {};

                Object.keys(originalRows['2']).forEach(function(columnNumber) {
                    columnHeadings[columnNumber] = originalRows['2'][columnNumber];
                }.bind(this));

                Object.keys(originalRows).slice(2).forEach(function(rowNumber) {
                    var row = originalRows[rowNumber];
                    var normalizedRow = {};

                    Object.keys(row).forEach(function(columnNumber) {
                        var key = columnHeadings[columnNumber];
                        normalizedRow[key] = row[columnNumber];
                    });

                    normalizedRow.originalRowNumber = rowNumber;

                    hashedRows[normalizedRow['Set Number']] = normalizedRow;
                }.bind(this));

                var q = async.queue(this.scanSet.bind(this));

                q.drain = function() {
                    this.log('Finished monitoring inventory sheet sets');
                }.bind(this);

                Object.keys(hashedRows).forEach(function(key) {
                    var row = hashedRows[key];

                    this.log('Monitoring ' + row['Set Number']);

                    q.push(row['Set Number']);
                }.bind(this));
            }.bind(this));
        }.bind(this));
    };

    Falcon.prototype.updateInventorySheet = function() {
        // TODO: Check the preferences for region and such

        EditGoogleSpreadsheet.load({
            debug: true,
            spreadsheetId: "1JUOE-ms5JO08Tal_nHgeATa49w4opxdlY6-QPIpP1Ks",
            worksheetName: 'Inventory',
            oauth2: {
                "client_id": "502221803141-cl9u12uirj4to5shbdq2d8kiuoag5p0l.apps.googleusercontent.com",
                "client_secret": "QXJhq_svtHyhhf7j1qOOSmtK",
                "refresh_token": "1/DXOUChTtKPVHE6kdkINwKFR6WouSIFA7p3i_yZmNSSnBactUREZofsF9C7PrpE-j"
            }
        }, function sheetReady(err, worksheet) {
            if (err) { this.log(err, 'error'); return; }

            this.log('Updating sheet: ' + worksheet.opts.worksheetName);

            worksheet.receive(function(err, originalRows, info) {
                if (err) { this.log(err, 'error'); return; }

                var columnHeadings = {};

                Object.keys(originalRows['2']).forEach(function(columnNumber) {
                    columnHeadings[columnNumber] = originalRows['2'][columnNumber];
                });

                var updatedRows = {};
                var createdRows = {};
                var hashedRows = {};

                Object.keys(originalRows).slice(2).forEach(function(rowNumber) {
                    var row = originalRows[rowNumber];
                    var normalizedRow = {};

                    Object.keys(row).forEach(function(columnNumber) {
                        var key = columnHeadings[columnNumber];
                        normalizedRow[key] = row[columnNumber];
                    });

                    normalizedRow.originalRowNumber = rowNumber;

                    if (!hashedRows[normalizedRow['Set Number'] + '']) {
                        hashedRows[normalizedRow['Set Number'] + ''] = [];
                    }

                    hashedRows[normalizedRow['Set Number'] + ''].push(normalizedRow);
                });

                this.setupRetailers(function() {
                    new Set()
                    .fetchAll()
                    .then(function(sets) {
                        var q = async.queue(function(set, next) {
                            var setData = set.attributes;

                            //this.log('Updating ' + set.get('setNumber'));

                            setTimeout(function() {
                                hashedRows[set.get('setNumber') + ''].forEach(function(row) {
                                    var data = {};
                                    data['Title'] = setData.title || setData.name;
                                    data['Amazon Price'] = setData.data && setData.data.retailers && setData.data.retailers['Amazon CA'] ? setData.data.retailers['Amazon CA'].price : null;
                                    data['Retail Price'] = setData.CARetailPrice;
                                    data['Release Date'] = dateformat(new Date(setData.releasedAt), 'mm/dd/yyyy');
                                    data['sheetUpdatedAt'] = dateformat(new Date(), 'mm/dd/yyyy HH:MM:ss');


                                    //console.log(data.investmentScore); next(); return;

                                    //if (set.get('setNumber') != 2175) { next(); return; }

                                    if (row) {
                                        // Check if this row was updated within the last hour
                                        // If so, skip it
                                        if (row.sheetUpdatedAt) {
                                            var sheetUpdatedAt = new Date(row.sheetUpdatedAt);
                                            var limitAt = new Date();

                                            limitAt.setHours(limitAt.getHours() - 1);

                                            if (sheetUpdatedAt < limitAt) {
                                                // continue
                                            }
                                            else {
                                                //this.log('Skipping ' + set.get('setNumber'));
                                                // we updated within the last hour so lets get out of here
                                                //next(); return;
                                            }
                                        }
                                        // TODO: Check if any of the data is actually different beforehand

                                        // Remove data that hasn't changed
                                        // Save data to the row that has changed
                                        Object.keys(data).forEach(function(key) {
                                            if (!data[key] || row[key] == data[key]) {
                                                delete data[key];
                                            }
                                        });

                                        data.originalRowNumber = row.originalRowNumber;

                                        this.log('Updating ' + set.get('setNumber'));

                                        if (!updatedRows[set.get('setNumber') + '']) {
                                            updatedRows[set.get('setNumber') + ''] = [];
                                        }

                                        updatedRows[set.get('setNumber') + ''].push(data);
                                    }
                                    else {
                                        //this.log('Creating ' + set.get('setNumber'));
                                        var row = {};

                                        // Remove data that hasn't changed
                                        // Save data to the row that has changed
                                        Object.keys(data).forEach(function(key) {
                                            if (!data[key]) {
                                                delete data[key];
                                            }
                                        });

                                        if (!createdRows[set.get('setNumber') + '']) {
                                            createdRows[set.get('setNumber') + ''] = [];
                                        }

                                        createdRows[set.get('setNumber') + ''].push(data);
                                    }
                                }.bind(this));

                                next();
                            }.bind(this));
                        }.bind(this));

                        q.drain = function() {
                            this.log('Finished updating sheet: ' + worksheet.opts.worksheetName);

                            var updateRows = {};
                            var createRows = {};
                            var lastRow = info.lastRow;

                            Object.keys(createdRows).forEach(function(setNumber) {
                                createdRows[setNumber].forEach(function(row) {
                                    var reverseColumnHeadings = {};

                                    Object.keys(columnHeadings).forEach(function(columnHeading) {
                                        var value = columnHeadings[columnHeading];
                                        reverseColumnHeadings[value] = columnHeading;
                                    });

                                    var convertedRow = {};

                                    Object.keys(row).forEach(function(columnHeading) {
                                        var column = reverseColumnHeadings[columnHeading];

                                        if (!column) { return; }

                                        convertedRow[column] = row[columnHeading];
                                    });

                                    lastRow++;

                                    createRows[lastRow] = convertedRow;
                                }.bind(this));
                            });

                            Object.keys(updatedRows).forEach(function(setNumber) {
                                updatedRows[setNumber].forEach(function(row) {
                                    if (!row.originalRowNumber) {
                                        console.warn(row);
                                        throw new Error('No original row number set');
                                    }

                                    // If we have more than just originalRowNumber and originalColumnNumber
                                    if (Object.keys(row).length > 2) {
                                        updateRows[row.originalRowNumber] = {};

                                        Object.keys(columnHeadings).forEach(function(columnNumber) {
                                            var columnHeading = columnHeadings[columnNumber];

                                            if (columnHeading in row) {
                                                updateRows[row.originalRowNumber][columnNumber] = row[columnHeading];
                                            }
                                        });
                                    }
                                }.bind(this));
                            });

                            var sendBatch = function(convertedRows, options, cb) {
                                if (!Object.keys(convertedRows).length) {
                                    this.log("Nothing to be consumed. Continuing.");
                                    cb && cb();
                                    return;
                                }

                                var batchAmount = 20;
                                var lastIndex = 0;
                                var totalRows = Object.keys(originalRows).length;
                                var done = false;

                                var consumeBatch = function() {
                                    this.log("Consuming from " + lastIndex + " to " + (lastIndex + batchAmount) + " of " + totalRows);

                                    var sendRows = {};
                                    Object.keys(convertedRows).forEach(function(rowNumber) {
                                        var index = parseInt(rowNumber) + '';
                                        if (index >= lastIndex && index < (lastIndex + batchAmount)) {
                                            sendRows[index] = convertedRows[rowNumber];
                                        }
                                    });

                                    lastIndex = lastIndex + batchAmount;
console.log(sendRows);

                                    var afterSend = function() {
                                        // We're done here
                                        if (!done && lastIndex >= totalRows) { 
                                            this.log("Done saving. All batches have been consumed.");
                                            done = true;
                                            cb && cb();
                                            return;
                                        }

                                        consumeBatch();
                                    }.bind(this);

                                    if (Object.keys(sendRows).length) {
                                        worksheet.add(sendRows);

                                        worksheet.send(options, function(err) {
                                            if (err) { throw err; this.log(err, 'error'); return; }

                                            afterSend();
                                        }.bind(this));
                                    } else {
                                        afterSend();
                                    }
                                }.bind(this);

                                consumeBatch();
                            }.bind(this);

                            sendBatch(createRows, {autoSize: true}, function() {
                                sendBatch(updateRows, {});
                            });
                        }.bind(this);

                        sets.forEach(function(set) {
                            if (!hashedRows[set.get('setNumber') + '']) {
                                return;
                            }
                            
                            q.push(set);
                        }.bind(this));
                    }.bind(this));
                }.bind(this));
            }.bind(this));
        }.bind(this));
    };

    Falcon.prototype.updateSetsSheet = function() {
        // TODO: Check the preferences for region and such

        EditGoogleSpreadsheet.load({
            debug: true,
            spreadsheetId: "1JUOE-ms5JO08Tal_nHgeATa49w4opxdlY6-QPIpP1Ks",
            worksheetName: 'Sets',
            oauth2: {
                "client_id": "502221803141-cl9u12uirj4to5shbdq2d8kiuoag5p0l.apps.googleusercontent.com",
                "client_secret": "QXJhq_svtHyhhf7j1qOOSmtK",
                "refresh_token": "1/DXOUChTtKPVHE6kdkINwKFR6WouSIFA7p3i_yZmNSSnBactUREZofsF9C7PrpE-j"
            }
        }, function sheetReady(err, worksheet) {
            if (err) { this.log(err, 'error'); return; }

            this.log('Updating sheet: ' + worksheet.opts.worksheetName);

            worksheet.receive(function(err, originalRows, info) {
                if (err) { this.log(err, 'error'); return; }

                var columnHeadings = {};

                Object.keys(originalRows['1']).forEach(function(columnNumber) {
                    columnHeadings[columnNumber] = originalRows['1'][columnNumber];
                });

                var updatedRows = {};
                var createdRows = {};
                var hashedRows = {};

                Object.keys(originalRows).slice(1).forEach(function(rowNumber) {
                    var row = originalRows[rowNumber];
                    var normalizedRow = {};

                    Object.keys(row).forEach(function(columnNumber) {
                        var key = columnHeadings[columnNumber];
                        normalizedRow[key] = row[columnNumber];
                    });

                    normalizedRow.originalRowNumber = rowNumber;

                    hashedRows[normalizedRow.setNumber] = normalizedRow;
                });

                this.setupRetailers(function() {
                    new Set()
                    .fetchAll()
                    .then(function(sets) {
                        var q = async.queue(function(set, next) {
                            setTimeout(function() {
                                var data = set.attributes;

                                if (data.data && data.data.retailers) {
                                    var lowestAvailablePrice;
                                    var lowestAvailableRetailer;
                                    var lowestAvailableLink;

                                    Object.keys(data.data.retailers).forEach(function(key) {
                                        var retailer = data.data.retailers[key];

                                        if (retailer.inStockOnline) {
                                            // If there's no price set yet, or it's a lower price
                                            if (!lowestAvailablePrice || retailer.price < lowestAvailablePrice) {
                                                lowestAvailablePrice = retailer.price;
                                                lowestAvailableRetailer = key;
                                                lowestAvailableLink = retailer.link;
                                            }

                                            if (key === 'Amazon CA') {
                                                data.amazonPriceCA = retailer.price;
                                            }
                                            else if (key === 'Amazon US') {
                                                data.amazonPriceUS = retailer.price;
                                            }
                                        }
                                    });

                                    data.lowestAvailablePrice = lowestAvailablePrice;
                                    data.lowestAvailableRetailer = lowestAvailableRetailer;
                                    data.lowestAvailableLink = lowestAvailableLink;
                                }

                                data.data = '';//JSON.stringify(data.data);

                                data.id = data.id + '';
                                data.title = data.title || data.name;
                                data.releasedAt = dateformat(new Date(data.releasedAt), 'mm/dd/yyyy');
                                data.createdAt = dateformat(new Date(data.createdAt), 'mm/dd/yyyy');
                                data.updatedAt = dateformat(new Date(data.updatedAt), 'mm/dd/yyyy');
                                data.sheetUpdatedAt = dateformat(new Date(), 'mm/dd/yyyy HH:MM:ss');
                                data.description = data.description ? data.description.slice(0, 1000) : '';

                                data.investmentScore = this.calculateInvestmentRating({
                                    rating: data.rating,
                                    wantedTotal: data.wantedTotal,
                                    ownedTotal: data.ownedTotal,
                                    minifig: data.minifig,
                                    pieces: data.pieces,
                                    releasedAt: data.releasedAt,
                                    weight: data.weight,
                                    isExclusive: data.availability && data.availability === 'LEGO exclusive',
                                    isRetired: set.get('isRetired')
                                });

                                //console.log(data.investmentScore); next(); return;

                                //if (set.get('setNumber') != 2175) { next(); return; }

                                if (hashedRows[set.get('setNumber') + '']) {
                                    var row = hashedRows[set.get('setNumber') + ''];

                                    // Check if this row was updated within the last hour
                                    // If so, skip it
                                    if (row.sheetUpdatedAt) {
                                        var sheetUpdatedAt = new Date(row.sheetUpdatedAt);
                                        var limitAt = new Date();

                                        limitAt.setHours(limitAt.getHours() - 1);

                                        if (sheetUpdatedAt < limitAt) {
                                            // continue
                                        }
                                        else {
                                            //this.log('Skipping ' + set.get('setNumber'));
                                            // we updated within the last hour so lets get out of here
                                            //next(); return;
                                        }
                                    }
                                    // TODO: Check if any of the data is actually different beforehand

                                    // Remove data that hasn't changed
                                    // Save data to the row that has changed
                                    Object.keys(data).forEach(function(key) {
                                        if (!data[key] || row[key] == data[key]) {
                                            delete row[key];
                                        }
                                        else {
                                            row[key] = data[key];
                                            // this.log(key);
                                            // this.log(row[key]);
                                        }
                                    }.bind(this));

                                    this.log('Updating ' + set.get('setNumber'));

                                    updatedRows[set.get('setNumber') + ''] = row;

                                    // if (set.get('setNumber') == 9468) {
                                    //     this.log();
                                    //     process.exit();
                                    // }

                                    // Object.keys(data).forEach(function(key) {
                                    //     row[key.toLowerCase()] = data[key];
                                    // });

                                    //console.log(data);

                                    // row.save(function(err) {
                                    //     if (err) { this.log(err, 'error'); return; }
                                    // }.bind(this));
                                }
                                else {
                                    //this.log('Creating ' + set.get('setNumber'));
                                    var row = {};

                                    // Remove data that hasn't changed
                                    // Save data to the row that has changed
                                    Object.keys(data).forEach(function(key) {
                                        if (!data[key]) {
                                            delete data[key];
                                        }
                                        else {
                                            row[key] = data[key];
                                        }
                                    });

                                    // var sendData = {};

                                    // Object.keys(data).forEach(function(key) {
                                    //     sendData[key.toLowerCase()] = data[key];
                                    // });

                                    //console.log(sendData);
                                    createdRows[set.get('setNumber') + ''] = row;

                                    // worksheet.addRow(sendData, function(err) {
                                    //     if (err) { throw err; this.log(err, 'error'); return; }
                                    // }.bind(this));
                                }

                                next();
                            }.bind(this));
                        }.bind(this));

                        q.drain = function() {
                            this.log('Finished updating sheet: ' + worksheet.opts.worksheetName);

                            var updateRows = {};
                            var createRows = {};
                            var lastRow = info.lastRow;

                            Object.keys(createdRows).forEach(function(setNumber) {
                                var row = createdRows[setNumber];

                                var reverseColumnHeadings = {};

                                Object.keys(columnHeadings).forEach(function(columnHeading) {
                                    var value = columnHeadings[columnHeading];
                                    reverseColumnHeadings[value] = columnHeading;
                                });

                                var convertedRow = {};

                                Object.keys(row).forEach(function(columnHeading) {
                                    var column = reverseColumnHeadings[columnHeading];

                                    if (!column) { return; }

                                    convertedRow[column] = row[columnHeading];
                                });

                                lastRow++;

                                createRows[lastRow] = convertedRow;
                            });

                            Object.keys(updatedRows).forEach(function(setNumber) {
                                var row = updatedRows[setNumber];

                                // If we have more than just originalRowNumber and originalColumnNumber
                                if (Object.keys(row).length > 2) {
                                    updateRows[row.originalRowNumber] = {};
                                    Object.keys(row).forEach(function(columnHeading) {
                                        var columnNumber;
                                        for(num in columnHeadings) {
                                            if (columnHeadings[num] == columnHeading) {
                                                columnNumber = num;
                                            }
                                        }
                                        if (columnNumber) {
                                            updateRows[row.originalRowNumber][columnNumber] = row[columnHeading];
                                        }
                                    });
                                }
                            });

                            var sendBatch = function(convertedRows, options, cb) {
                                if (!Object.keys(convertedRows).length) {
                                    this.log("Nothing to be consumed. Continuing.");
                                    cb && cb();
                                    return;
                                }

                                var batchAmount = 20;
                                var lastIndex = parseInt(Object.keys(convertedRows)[0]);
                                var totalRows = lastIndex + Object.keys(convertedRows).length;
                                var done = false;

                                var consumeBatch = function() {
                                    this.log("Consuming from " + lastIndex + " to " + (lastIndex + batchAmount) + " of " + totalRows);

                                    var sendRows = {};
                                    Object.keys(convertedRows).forEach(function(rowNumber) {
                                        var index = parseInt(rowNumber) + '';
                                        if (index >= lastIndex && index < (lastIndex + batchAmount)) {
                                            sendRows[index] = convertedRows[rowNumber];
                                        }
                                    });

                                    lastIndex = lastIndex + batchAmount;
console.log(sendRows);
                                    worksheet.add(sendRows);

                                    worksheet.send(options, function(err) {
                                        if (err) { throw err; this.log(err, 'error'); return; }

                                        // We're done here
                                        if (!done && lastIndex >= totalRows) { 
                                            this.log("Done saving. All batches have been consumed.");
                                            done = true;
                                            cb && cb();
                                            return;
                                        }

                                        consumeBatch();
                                    }.bind(this));
                                }.bind(this);

                                consumeBatch();
                            }.bind(this);

                            sendBatch(createRows, {autoSize: true}, function() {
                                sendBatch(updateRows, {});
                            });
                            //this.monitorSets();
                        }.bind(this);

                        sets.forEach(function(set) {
                            q.push(set);
                        }.bind(this));
                    }.bind(this));
                }.bind(this));
            }.bind(this));
        }.bind(this));
     
        //   // column names are set by google and are based 
        // // on the header row (first row) of your sheet 
        //   my_sheet.addRow( 2, { colname: 'Number'} );

        //   my_sheet.getRows( 2, {
        //       start: 100,          // start index 
        //       num: 100,              // number of rows to pull 
        //       orderby: 'name'  // column to order results by 
        //   }, function(err, row_data){
        //       // do something... 
        //   });
    };

    Falcon.prototype.clearLogs = function() {
        ['general.log', 'warn.log', 'error.log'].forEach(function(filename) {
            var log = fs.createWriteStream('logs/' + filename, {'flags': 'w'});
            log.end('');
        });
    };

    return Falcon;
});
