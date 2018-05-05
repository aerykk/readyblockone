window.root_url = '/'
window.site_url = window.document.location.protocol + '//' + window.document.location.hostname + (window.document.location.port !== 80 ? ':' + window.document.location.port : '') + '/'
window.site_title = $('title').text()
