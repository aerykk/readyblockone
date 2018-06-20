const Framework = require('../../../../Framework')
const {React, ReactDOM, ReactNative, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, Provider, syncHistoryWithStore, routerReducer, renderToString} = Framework
const path = require('path')

import Loadable from 'react-loadable'
import Auth from '../../Core/Utils/Auth'
import DevTools from '../../Shared/UI/Components/DevTools'
import store from './Store'
import getReducers from './Reducers'
import { report } from 'import-inspector'

// Polyfill for nodejs /w babel
if (typeof require.ensure !== "function") require.ensure = function(d, c) { c(require) }
if (typeof require.include !== "function") require.include = function() {}

let middleware = []

const Loading = () => <div>Loading</div>

const routes = [
    {
        path: '/',
        exact: true,
        component: Loadable({
            loader: function loader() {
                return report(
                    new Promise((resolve) => {
                        return require.ensure([], (require) => {
                            resolve(require('./UI/Screens/Home').default)
                        })
                    }), {
                        currentModuleFileName: path.join(__dirname, './Router.js'),
                        importedModulePath: './UI/Screens/Home',
                        serverSideRequirePath: path.join(__dirname, './UI/Screens/Home')
                    }
                )
            },
            loading: Loading
        })
    },
    {
        path: '/network',
        component: Loadable({
            loader: function loader() {
                return report(new Promise((resolve) => {
                    return require.ensure([], (require) => {
                        resolve(require('./UI/Screens/Home').default)
                    })
                }), {
                        currentModuleFileName: path.join(__dirname, './Router.js'),
                        importedModulePath: './UI/Screens/Home',
                        serverSideRequirePath: path.join(__dirname, './UI/Screens/Home')
                    });
            },
            loading: Loading
        })
    },
    {
        path: '/about',
        component: Loadable({
            loader: function loader() {
                return report(new Promise((resolve) => {
                    return require.ensure([], (require) => {
                        resolve(require('./UI/Screens/Home').default)
                    })
                }), {
                        currentModuleFileName: path.join(__dirname, './Router.js'),
                        importedModulePath: './UI/Screens/Home',
                        serverSideRequirePath: path.join(__dirname, './UI/Screens/Home')
                    });
            },
            loading: Loading
        })
    },
    // Exchanges
    { path: '/go/binance', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://www.binance.com/?ref=10031868'` }} /> },
    { path: '/go/bittrex', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://bittrex.com/Home/Markets'` }} /> },
    { path: '/go/bitfinex', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://www.bitfinex.com/'` }} /> },
    { path: '/go/bitstamp', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://www.bitstamp.net/'` }} /> },
    { path: '/go/gemini', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://gemini.com/'` }} /> },
    { path: '/go/coinbase', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://coinbase.com/'` }} /> },
    { path: '/go/kraken', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://www.kraken.com/'` }} /> },
    { path: '/go/bitflyer', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://bitflyer.com/en-us/'` }} /> },
    { path: '/go/bitthumb', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://www.bithumb.com/'` }} /> },
    { path: '/go/idex', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://idex.market/'` }} /> },
    { path: '/go/huobi', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://www.huobi.pro/'` }} /> },
    { path: '/go/kucoin', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'http://kucoin.com/'` }} /> },
    { path: '/go/etoro', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://www.etoro.com/'` }} /> },
    // Reviews
    { path: '/review/btc', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://bitcoin-btc.review'` }} /> },
    { path: '/review/bch', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://bitcoin-cash-bch.review'` }} /> },
    { path: '/review/iota', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://iota-token.review'` }} /> },
    // Wallets
    { path: '/go/trezor', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://trezor.io/'` }} /> },
    { path: '/go/ledger', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://www.ledgerwallet.com/'` }} /> },
    { path: '/go/jaxx', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://jaxx.io/'` }} /> },
    { path: '/go/metamask', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://metamask.io/'` }} /> },
    // Books
    { path: '/go/book/mb', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://www.amazon.com/Mastering-Bitcoin-Programming-Open-Blockchain/dp/1491954388/ref=sr_1_1_sspa?s=books&ie=UTF8&qid=1529271913&sr=1-1-spons&keywords=mastering+bitcoin&psc=1'` }} /> },
    { path: '/go/book/btfom', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://www.amazon.com/Bitcoin-The-Future-Of-Money/dp/B00OUQLMTI/ref=sr_1_3?ie=UTF8&qid=1529271695&sr=8-3&keywords=Bitcoin+The+Future+of+Money'` }} /> },
    { path: '/go/book/tbb', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://www.amazon.com/Bitcoin-Bible-Benjamin-Guttmann/dp/3732284328/ref=sr_1_3?s=books&ie=UTF8&qid=1529271949&sr=1-3&keywords=The+Bitcoin+Bible'` }} /> },
    { path: '/go/book/tsotb', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://www.amazon.com/Science-Blockchain-Roger-Wattenhofer/dp/1522751831/ref=sr_1_3?s=books&ie=UTF8&qid=1529271972&sr=1-3&keywords=The+Science+of+the+Blockchain'` }} /> },
    // Other
    { path: '/go/cmc', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://coinmarketcap.com/'` }} /> },
    { path: '/go/rcryptocurrency', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://www.reddit.com/r/CryptoCurrency/'` }} /> },
    { path: '/go/rbitcoinmarkets', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://www.reddit.com/r/BitcoinMarkets/'` }} /> },
    { path: '/go/cryptocurrencycalendar', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'http://coinmarketcal.com/'` }} /> },
    { path: '/go/cryptocompare', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://www.cryptocompare.com/'` }} /> },
    { path: '/go/bitcointalk', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://bitcointalk.org/index.php'` }} /> },
    { path: '/go/bitcoinity', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'http://bitcoinity.org/markets/list'` }} /> },
]

export default {
    routes: routes,
    store: store,
    middleware: middleware,
    getReducers: getReducers
}
