
function runR2D2Check() {
    var url = 'http://www.toysrus.com/buy/lego-hard-to-find/lego-star-wars-r2-d2-10225-4657540-12710103';

    xray(url)
      .use(phantom({timeout: 20000}))
      .prepare({
        trim: function(value) {
            return value.replace(/^\s+|\s+$/g, '');
        }
      })
      .select({
        $root: 'body',
        addToCart: '.truAddToCart.disabled',
        cantAddToCart: '.truAddToCart.disabled'
      })
      .run(function(err, product) {
        if (product.addToCart && !product.cantAddToCart) {
            var message = 'R2 D2 popped on TRU: ' + url;
            console.log(message);
            sendMail(message);
        }
      });

    var url2 = 'http://www.ebay.ca/itm/371106264422';

    xray(url2)
      .use(phantom({timeout: 20000}))
      .prepare({
        trim: function(value) {
            return value.replace(/^\s+|\s+$/g, '');
        }
      })
      .select({
        $root: 'body',
        addToCart: '.btn-scnd'
      })
      .run(function(err, product) {
        if (product.addToCart) {
            var message = 'R2 D2 popped on TRU eBay: ' + url2;
            console.log(message);
            sendMail(message);
        }
      });
}