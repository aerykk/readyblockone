process.stdin.resume();//so the program will not close instantly

function exitHandler(options, err) {
    console.trace(new Error().stack);
    if (options.cleanup) console.trace('clean');
    if (err) console.trace(err.stack);
    if (options.exit) process.exit();
}

//do something when app is closing
process.on('exit', exitHandler.bind(null,{cleanup:true}));

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {exit:true}));

process.on('uncaughtException', function (err) {
    console.log('Uncaught exception: ', err, err.stack);

    if (err.message && err.message.indexOf('the phantomjs process ended unexpectedly') !== -1) {
        return;
    }

    if (err.code && err.code === 'EADDRINUSE') {
        return;
    }

    process.exit();
});



var cluster = require('cluster');
var requirejs = require('requirejs');

requirejs.config({
    // Pass the top-level main.js/index.js require
    // function to requirejs so that node modules
    // are loaded relative to the top-level JS file.
    nodeRequire: require,
    waitSeconds: 0
});

requirejs(['falcon'], function(Falcon) {
    var falcon = new Falcon();

    var argv = require('minimist')(process.argv.slice(2));
    var command = argv._[0];

    falcon.cli.params = argv;

    if (command === 'identifyTypes') {
        requirejs(['tasks/identifyTypes'], function(identifyTypes) {
            identifyTypes(falcon);
        });
    } 
    else if (command === 'findProducts') {
        var shouldCluster = argv['cluster'];

        if (shouldCluster && cluster.isMaster) {
            for (var i = 0; i < 1; i++) {
                cluster.fork();
            }

            // If the worker dies, restart it.
            cluster.on('exit', function(worker) {
                falcon.log('Worker ' + worker.id + ' exited..');

                try {
                    cluster.fork();
                }
                catch (e) {
                    falcon.log('Working exception while working: ' + e.toString(), 'error');
                }
            });
        }
        else {
            requirejs(['tasks/findProducts'], function(findProducts) {
                findProducts(falcon);
            });
        }
    }
    else if (command === 'monitor-sets') {
        falcon.monitorSets();
    }
    else if (command === 'monitor-inventory') {
        falcon.monitorInventory();
    }
    else if (command === 'monitor-notifications') {
        falcon.monitorNotifications();
    }
    else if (command === 'import-sets') {
        falcon.importSets();
    }
    else if (command === 'scan-set') {
        var setId = argv._[1];
        falcon.scanSet(setId);
    }
    else if (command === 'scout-set') {
        var setId = argv._[1];
        falcon.scout(setId);
    }
    else if (command === 'scan-retailer') {
        var retailerKey = argv._[1];
        falcon.scanRetailer(retailerKey);
    }
    else if (command === 'update-sheet') {
        var sheetKey = argv._[1];
        falcon.updateSheet(sheetKey);
    }
    else if (command === 'update-sheets') {
        falcon.updateSheets();
    }
    else if (command === 'test') {
        requirejs(['tasks/test'], function(test) {
            test(falcon);
        });
    }
    else if (command === 'updateProducts') {
        requirejs(['tasks/updateProducts'], function(updateProducts) {
            updateProducts(falcon);
        });
    }
    else if (command === 'updateStores') {
        requirejs(['tasks/updateStores'], function(updateStores) {
            updateStores(falcon);
        });
    }
    else if (command === 'clear-logs') {
        falcon.clearLogs();
    }
    else if (command === 'update') {
        falcon.update(falcon);
    }
    else {
        console.log('Unknown Falcon command');
    }
});
