if (typeof define !== 'function') { var define = require('amdefine')(module); }

var usage = require('usage');
var requirejs = require('requirejs');

define(['usage'], function(usage) {
    var Utils = {};

    /**
    * This method returns an object of userprofiles (non PII information - PUID, username, avatar, date of birth, country and gender), and can be called with either a single PUID or an array (or JSON object) with multiple PUID's.
    * @function checkUsage
    * @memberof Utils
    * @param {(string[])} [PUIDS] Multiple PUIDS that should be used for looking up the profiles
    * @param {function} An optional callback to be called with the requested profiles as an argument
    * @returns {promise} A promise with the userprofiles requested as an argument and with the PUI as the key.
    * @version 2.0.10
    * @tutorial Utils.checkUsage
    * @url https://example/
    * @example
    * Utils.checkUsage()
    */
    Utils.checkUsage = function() {
        var pid = process.pid

        usage.lookup(pid, function(err, result) {
            console.log('Using ' + (result.memory / 1024 / 1024) + 'MB memory');

            if (result.memory > (500 * 1024 * 1024)) {
                console.log('Using more than 300MB. Closing..');

                process.exit(1);
            }

            if (result.cpu > 90) {
                console.log('Using more than 90% CPU. Closing..');

                //process.exit(1);
            }
        });

        setTimeout(Utils.checkUsage, 1 * 60 * 1000);
    };

    Utils.sendMail = function() {
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'eric.muyser@gmail.com',
                pass: 'svxghpdcsgrosfiw'
            }
        });

        transporter.sendMail({
            from: 'eric.muyser@gmail.com',
            to: 'eric.muyser@gmail.com',
            subject: 'Brickson Notification',
            text: message
        });
    };

    return Utils;
});