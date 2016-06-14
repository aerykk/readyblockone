import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

var SiteRoutes = {
    'stokegames.com': (
        require('./Sites/Esgaroth/Router').default
    ),
    'pokelingo.com': (
        require('./Sites/Edoras/Router').default
    )
};
// ,
// 'pokelingo.com': (
//     <Router history={browserHistory} routes={require('./Sites/Edoras/Routes').default} />
// )
// var DefaultRouter = (
//     <Router history={browserHistory} routes={require('./Sites/Default/Routes').default} />
// );

/* Sites

stokegames.com
    pages
        about
        contact
        privacy
        games
            games/:gameId


pokelingo.com
    pages
        about
        contact
        privacy

egic.ca
    pages
        about
        contact
        privacy
        courses

connecting.live
    pages
        about
        contact
        privacy
        locations


brickbrotherhood.com
    sets
        set
            id
            title
            pieces
    pages
        about
        contact
        privacy
        sets
            sets/:setId
            sets/:setId/buy
            sets/:
    user
        id
        watchedSets
        ownedSets



hackatron.com
    pages
        about
        contact
        privacy
        credits
    game
        players
            player
                character
                    worldPosition
                        x
                        y
                    sprite
                        x
                        y
        player -> players[i]
        powerups
            type
            sprite
                x
                y
        enemy
            character
                worldPosition
                    x
                    y
                sprite
                    x
                    y


*/

// Setup anchor routing

if (typeof window !== 'undefined' && window.document) {
  const dummyLink = document.createElement('a')

  const absolutify = function (url) {
      dummyLink.href = url
      return dummyLink
  }

  // http://stackoverflow.com/questions/30880757/javascript-equivalent-to-on
  function delegate(el, evt, sel, handler) {
      el.addEventListener(evt, function(event) {
          var t = event.target;
          while (t && t !== this) {
              if (t.matches(sel)) {
                  handler.call(t, event);
              }
              t = t.parentNode;
          }
      });
  }

  delegate(document, 'click', 'a', function(e) {
      const anchor = this
      var href = anchor.attributes.href.nodeValue

      if (!href) { return }

      // Don't process hash changes
      if (href[0] === '#') { return }

      const parsed = absolutify(href)
      href = parsed.href

      if (!href) { return }

      const siteUrl = window.location.origin

      if (href.substr(0, siteUrl.length) === siteUrl) {
          const path = parsed.pathname

          if (!path) { return }

          e.preventDefault()

          //ReactRouter.HistoryLocation.push(path)
          browserHistory.push(path)
      }
  });
}

// Setup sites

var defaultConfig = {};

var sites = {
    'orionui.com': {},
    'nextgenengine.com': {},
    'vayard.com': {},
    'muyser.com': {},
    'ericmuyser.com': {},
    'stokegames.com': {},
    'acejapanese.com': {},
    'acekorean.com': {},
    'aceitalian.com': {},
    'acefrench.com': {},
    'aceportuguese.com': {},
    'acerussian.com': {},
    'acelearners.com': {},
    'pokelingo.com': {},
    'brickbrotherhood.com': {},
    'amazebricks.com': {},
    'realmofdiablo.com': {},
    'sacredpoker.com': {},
    'secretoflumaria.com': {},
    'singlefacestudios.com': {},
    'tilearena.rocks': {},
    'tileworld-game.com': {},
    'tilr-game.com': {},
    'angelsofascension.com': {},
    'connecting.live': {},
    'manhood-game.com': {},
    'egic.ca': {},
    'kannyarou.com': {}
};

var getUrlParameters = function(search) {
    var a = search.substr(1).split('&');

    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
        var p=a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
};

//var queries = getUrlParameters(window.location.search);

module.exports = function getRouter(path) {
    // Sanitize the host
    var host = path.replace('www.', '').replace('.local', '').split(':')[0];

    var config = (host in sites) ? sites[host] : defaultConfig;

    console.log('Matched site: ' + host)

    if (host in SiteRoutes) {
        return SiteRoutes[host];
    } else {
        //return DefaultRouter;
    }
}

