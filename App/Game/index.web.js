const Framework = require('../Framework')
const {React, ReactDOM, ReactNative, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, Provider, syncHistoryWithStore, routerReducer, renderToString} = Framework

const SiteRouter = require('./Router')(typeof window !== 'undefined' ? window.location.hostname : 'stokegames.com')
import DataClient from '../../WebService/DataClient'
import {ReduxAsyncConnect} from 'redux-connect'
import {routerMiddleware} from 'react-router-redux'
import clientMiddleware from '../../WebService/middleware/clientMiddleware'
import HTML from '../../WebService/HTML'

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

    const dest = document

    if (process.env.NODE_ENV !== 'production') {
        window.React = React // enable debugger

        if (!dest || !dest.firstChild || !dest.firstChild.attributes || !dest.firstChild.attributes['data-react-checksum']) {
            console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.')
        }
    }

    const dataClient = new DataClient()
    const reduxRouterMiddleware = routerMiddleware(browserHistory)
    const reducers = {...SiteRouter.reducers}
    const middleware = [clientMiddleware(dataClient), reduxRouterMiddleware, ...SiteRouter.middleware]
    const finalStore = SiteRouter.store.configure(reducers, middleware, window.__data)
    const history = syncHistoryWithStore(browserHistory, finalStore)

    class App extends React.Component {
        toString() {'[App]'}

        render() {
            return (
                <AppWrapper config={AppConfig}>
                    <Provider store={finalStore} key="provider">
                        <Router render={(props) =>
                            <ReduxAsyncConnect {...props} helpers={{client: dataClient}} filter={item => !item.deferred} />
                            } history={history} routes={SiteRouter.routes}>
                        </Router>
                    </Provider>
                </AppWrapper>
            )
        }
    }
    // React.createElement(HTML, {view: {<App />}, store: {finalStore}}).children
    ReactDOM.render(<HTML view={<App />} store={finalStore} />, dest)
}


export default (locals, callback) => {
    const ReactDOMServer = require('react-dom/server')
    const { createHistory, createMemoryHistory } = require('history')
    const { Router, RoutingContext, match } = require('react-router')

    const history = createMemoryHistory()
    const location = history.createLocation(locals.path)
    const dataClient = new DataClient()

    match({
        routes: SiteRouter.routes,
        location: location
    }, function(error, redirectLocation, renderProps) {
        class App extends React.Component {
            toString() {'[App]'}

            render() {
                return (
                    <AppWrapper config={AppConfig}>
                        <Provider store={SiteRouter.store}>
                            <div>
                                <RoutingContext {...renderProps} />
                            </div>
                        </Provider>
                    </AppWrapper>
                )
            }
        }

        callback(null, '<!DOCTYPE html>' + ReactDOMServer.renderToString(
            <App />
        ))
    })
}
