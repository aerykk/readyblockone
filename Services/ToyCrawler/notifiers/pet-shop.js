

function runPetShopCheck() {
    var url = 'http://www.toysrus.ca/product/index.jsp?productId=11348888';

    xray(url)
      .select({
        $root: 'body',
        addToCart: '#addItemToCartOption'
      })
      .run(function(err, product) {
        if (product && product.addToCart) {
            var message = 'PS popped on TRU: ' + url;
            console.log(message);
            sendMail(message);
        }
      });

    var url2 = 'http://www.toysrus.ca/product/index.jsp?productId=12168095';

    xray(url2)
      .select({
        $root: 'body',
        addToCart: '#addItemToCartOption'
      })
      .run(function(err, product) {
        if (product && product && product.addToCart) {
            var message = 'PS popped on TRU: ' + url2;
            console.log(message);
            sendMail(message);
        }
      });
}
