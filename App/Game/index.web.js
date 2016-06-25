const Framework = require('../Framework');
const {React, ReactDOM, ReactNative, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, Provider, syncHistoryWithStore, routerReducer, renderToString} = Framework;

const SiteRouter = require('./Router')(typeof window !== 'undefined' ? window.location.hostname : 'stokegames.com');


if (typeof document !== 'undefined') {
    let history = history = syncHistoryWithStore(browserHistory, SiteRouter.store);

    class App extends React.Component {
        toString() { '[App]' }

        render() {
            return (
                <AppWrapper config={AppConfig}>
                    <Provider store={SiteRouter.store}>
                        <div>
                            <Router history={history} routes={SiteRouter.routes} />
                        </div>
                    </Provider>
                </AppWrapper>
            );
        }
    }

    ReactDOM.render(<App />, document.getElementById('ui'));
}


export default (locals, callback) => {
    const ReactDOMServer = require('react-dom/server')
    const { createHistory, createMemoryHistory } = require('history')
    const { Router, RoutingContext, match } = require('react-router')

    const history = createMemoryHistory();
    const location = history.createLocation(locals.path);

    match({ routes: SiteRouter.routes, location: location }, function(error, redirectLocation, renderProps) {
        class App extends React.Component {
            toString() { '[App]' }

            render() {
                return (
                    <AppWrapper config={AppConfig}>
                        <Provider store={SiteRouter.store}>
                            <div>
                                <RoutingContext {...renderProps} />
                            </div>
                        </Provider>
                    </AppWrapper>
                );
            }
        }

        callback(null, '<!DOCTYPE html>' + ReactDOMServer.renderToString(
            <App />
        ))
    });
}
