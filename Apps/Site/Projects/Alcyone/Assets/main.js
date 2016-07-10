
(function(w, d, t, url) {
  var s = d.createElement(t);
  s.async = true;
  s.src = (document.location.port ? 'http://' + document.location.hostname + ':11010' : 'https://stokegames.com') + url;
  var ss = d.getElementsByTagName(t)[0];
  ss.parentNode.insertBefore(s, ss);
})(window, document, 'script', '/Build/Release/widget.web.bundle.js');

WebFontConfig = {
    google: { families: ['Orbitron:400,900:latin', 'Montserrat:400,700:latin', 'Press Start 2P:400:latin'] }
};
(function() {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();

window.fbAsyncInit = function() {
FB.init({
  appId      : '233102823719500',
  xfbml      : true,
  version    : 'v2.6'
});

// ADD ADDITIONAL FACEBOOK CODE HERE
};

(function(d, s, id){
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement(s); js.id = id;
 js.src = "//connect.facebook.net/en_US/sdk.js";
 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
