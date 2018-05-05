window.root_url = '/'
window.site_url = window.document.location.protocol + '//' + window.document.location.hostname + (window.document.location.port !== 80 ? ':' + window.document.location.port : '') + '/'
window.site_title = $('title').text()


var disqus_shortname = 'ericmuyser';

(function() {
    var dsq = document.createElement('script');
    dsq.type = 'text/javascript';
    dsq.async = true;
    dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();
