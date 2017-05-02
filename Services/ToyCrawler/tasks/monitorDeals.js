    // Go through each of the watched sets and look for them on sale
    function runSetScan() {

    }

Falcon.prototype.shouldNotifyAboutSet = function(store, title, setNumber, link, price, region) {
    this.fetchSet({setNumber: setNumber}, region, function(set) {
        if (!set[region + 'RetailPrice']) {
            this.log('No ' + region + ' RRP on ' + setNumber, 'warn');

            return;
        }

        // Always update the price threshold incase the list has been updated
        for(var key in setNotifications) {
            var match = new RegExp('^' + key.replace('*', '(.*)'), 'gi').exec(setNumber);

            if (match) {
                set.priceThresholdNotification = setNotifications[key].priceThresholdNotification;
            }
        }

        if (title.toLowerCase().indexOf('duplo') > 0) { return; } // NO DUPLO

        var passesNotificationThreshold = price < (set[region + 'RetailPrice'] * (set.priceThresholdNotification / 100 + 1));

        this.log('Running notification check on ' + setNumber + ' at ' + price + ' using ', set, link);

        // TODO: check shipsToCanada flag in combination with shipCost (eg. +20%)
        if (region === 'CA') {
            if (passesNotificationThreshold) {
                var message = 'There\'s a ' + Math.round(100 - price / set[region + 'RetailPrice'] * 100, 2) + '% deal on ' + title + ' (' + setNumber + ') at: ' + link;
                this.log(message);
                sendMail(message);
            }
        }

        var savings = parseFloat((set[region + 'RetailPrice'] - price).toFixed(2));
        var percentageOff = Math.round(100 - price / set[region + 'RetailPrice'] * 100, 2);

        // Too good to be true
        if (percentageOff > 50) {
            return;
        }

        // Lets see if this is a good deal currency exchange wise
        var caCurrencyExchangeBonusOff = Math.round((1 - compareCurrencyExchange(price, set[region + 'RetailPrice'], set['CA' + 'RetailPrice'], region, 'CA')) * 100, 2);
        var usCurrencyExchangeBonusOff = Math.round((1 - compareCurrencyExchange(price, set[region + 'RetailPrice'], set['US' + 'RetailPrice'], region, 'US')) * 100, 2);
        var ukCurrencyExchangeBonusOff = Math.round((1 - compareCurrencyExchange(price, set[region + 'RetailPrice'], set['UK' + 'RetailPrice'], region, 'UK')) * 100, 2);

        var passesAmazonThreshold = price < (set.data.retailers['Amazon US'].price * currencyExchanges['US'][region] * 0.6); // 40% off Amazon price (after currency conversion)

        // Price passes notification threshold or is 10% or more off RPP
        if (passesNotificationThreshold || passesAmazonThreshold || price <= (set[region + 'RetailPrice'] * 0.9)) {
            if (!deals[region][store + ' ' + region]) {
                deals[region][store + ' ' + region] = {};
            }

            deals[region][store + ' ' + region][setNumber] = {
                store: store,
                link: link,
                setNumber: setNumber,
                title: title,
                price: price,
                savings: savings,
                percentageOff: percentageOff,
                passesAmazonThreshold: passesAmazonThreshold,
                caCurrencyExchangeBonusOff: caCurrencyExchangeBonusOff,
                usCurrencyExchangeBonusOff: usCurrencyExchangeBonusOff,
                ukCurrencyExchangeBonusOff: ukCurrencyExchangeBonusOff
            };

            this.generateDealsPage('/Users/ericmuyser/sync/Public/deals/' + region + '.html', deals[region], region);
        }

        if (!set.data) {
            set.data = {};
        }

        if (!set.data.retailers) { 
            set.data.retailers = {};
        }

        set.data.retailers[store + ' ' + region] = {
            title: title,
            price: price,
            savings: savings,
            percentageOff: percentageOff,
            region: region,
            link: link,
            caCurrencyExchangeBonusOff: caCurrencyExchangeBonusOff,
            usCurrencyExchangeBonusOff: usCurrencyExchangeBonusOff,
            ukCurrencyExchangeBonusOff: ukCurrencyExchangeBonusOff
        };

        this.saveSet(set);
    }.bind(this));
};



settings = {
    origin: 'CA',
    currency: 'CA',
    types: ['xx'],
    priceMin: 0,
    priceMax: 0,
    
    priceThreshold: 
}
