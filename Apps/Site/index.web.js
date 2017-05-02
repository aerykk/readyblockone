const Framework = require('../../Framework')
const {React, ReactDOM, ReactNative, AppWrapper, AppConfig, match, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, Provider, syncHistoryWithStore, routerReducer, renderToString} = Framework

const SiteRouter = require('./Router')(typeof window !== 'undefined' ? window.location.hostname : 'stokegames.com')
import DataClient from '../../Services/DataService/DataClient'
import {ReduxAsyncConnect} from 'redux-connect'
import {routerMiddleware} from 'react-router-redux'
import clientMiddleware from '../../Services/WebService/middleware/clientMiddleware'
import HTML from '../../Services/WebService/HTML'
import UI from '../../Apps/Site/UI'

if (typeof document !== 'undefined') {
    //
    // function initSocket() {
    //   const socket = io('', {path: '/ws'})
    //   socket.on('news', (data) => {
    //     console.log(data)
    //     socket.emit('my other event', { my: 'data from client' })
    //   })
    //   socket.on('msg', (data) => {
    //     console.log(data)
    //   })
    //
    //   return socket
    // }
    //
    // global.socket = initSocket()
    const container = document.getElementById('ui')

    if (process.env.NODE_ENV !== 'production') {
        window.React = React // enable debugger

        if (!container || !container.children.length || !container.children[0].attributes || !container.children[0].attributes['data-react-checksum']) {
            console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.')
        }
    }

    const routes = SiteRouter.routes
    const location = document.location.pathname
    const dataClient = new DataClient()
    const reduxRouterMiddleware = routerMiddleware(browserHistory)
    const reducers = {...SiteRouter.reducers}
    const middleware = [clientMiddleware(dataClient), reduxRouterMiddleware, ...SiteRouter.middleware]
    const store = SiteRouter.store.configure(reducers, middleware, window.__data)
    const history = syncHistoryWithStore(browserHistory, store)

    // Setup anchor routing

    function setupDynamicLinking() {
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

              history.push(path)
          }
      });
    }

    setupDynamicLinking()

    match({
        history: history,
        routes: routes,
        location: location
    }, (err, redirectLocation) => {
        let extraProps = {helpers: {client: dataClient}, filter: item => !item.deferred}

        ReactDOM.render(<UI AppConfig={AppConfig} store={store} history={history} routes={routes} extraProps={extraProps} />, container)
    });
}


export default (locals, callback) => {
    const ReactDOMServer = require('react-dom/server')
    const {createHistory, createMemoryHistory} = require('history')
    const {Router, RoutingContext, match} = require('react-router')

    const history = createMemoryHistory()
    const location = history.createLocation(locals.path)
    const dataClient = new DataClient()

    match({
        routes: SiteRouter.routes,
        location: location
    }, function(error, redirectLocation, renderProps) {
        callback(null, '<!DOCTYPE html>' + ReactDOMServer.renderToString(<UI AppConfig={AppConfig} store={store} history={history} routes={routes} renderProps={renderProps} />))
    })
}