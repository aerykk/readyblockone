const Framework = require('../Framework');
const {React, ReactDOM, ReactNative, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, Provider, syncHistoryWithStore, routerReducer, renderToString} = Framework;

const SiteRouter = require('./Router')(window.location.hostname);
const history = syncHistoryWithStore(browserHistory, SiteRouter.store);


class App extends React.Component {
    toString() { '[App]' }

    constructor(props) {
        super(props)
    }

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
