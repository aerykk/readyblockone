
function runBennyCheck() {
    var url = 'http://www.walmart.ca/en/ip/lego-lego-movie-bennys-spaceship-spaceship-spaceship-70816/935983';

    xray(url)
      .use(phantom({timeout: 20000}))
      .prepare({
        trim: function(value) {
            return value.replace(/^\s+|\s+$/g, '');
        }
      })
      .select({
        $root: 'body',
        inStockOnline: '.shipping.status .msg | trim'
      })
      .run(function(err, product) {
        var old = 'Out of stock online';

        if (product.inStockOnline && product.inStockOnline != old) {
            var message = 'Benny stock change: ' + product.inStockOnline + ': ' + url;
            console.log(message);
            sendMail(message);
        }
      });
}
