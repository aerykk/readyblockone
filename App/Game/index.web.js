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

    const routes = {
        component: SiteRouter.routes.component,
        childRoutes: [
            {path: '/', component: require('./Sites/Esgaroth/UI/Screens/Launch').default },
            {path: '/games', component: require('./Sites/Esgaroth/UI/Screens/Games').default },
            {path: '/games/browser', component: require('./Sites/Esgaroth/UI/Screens/Games').default },
            {path: '/games/downloadable', component: require('./Sites/Esgaroth/UI/Screens/Games').default },
            {path: '/games/mobile', component: require('./Sites/Esgaroth/UI/Screens/Games').default },
            {path: '/games/:key', component: require('./Sites/Esgaroth/UI/Screens/Game').default },
            {path: '/blog/:key', component: require('./Sites/Esgaroth/UI/Screens/Default').default },
            {path: '/logout', component: require('./Sites/Esgaroth/UI/Screens/Logout').default },
            {path: '/about', component: require('./Sites/Esgaroth/UI/Screens/Default').default },
            {path: '/careers', component: require('./Sites/Esgaroth/UI/Screens/Default').default },
            {path: '/contact', component: require('./Sites/Esgaroth/UI/Screens/Default').default },
            {path: '/community', component: require('./Sites/Esgaroth/UI/Screens/Default').default },
            {path: '/support', component: require('./Sites/Esgaroth/UI/Screens/Default').default },
            {path: '/news', component: require('./Sites/Esgaroth/UI/Screens/Default').default }
        ]
    }

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
