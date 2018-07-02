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
                        resolve(require('./UI/Screens/Network').default)
                    })
                }), {
                        currentModuleFileName: path.join(__dirname, './Router.js'),
                        importedModulePath: './UI/Screens/Network',
                        serverSideRequirePath: path.join(__dirname, './UI/Screens/Network')
                    });
            },
            loading: Loading
        })
    },
    {
        path: '/services',
        component: Loadable({
            loader: function loader() {
                return report(new Promise((resolve) => {
                    return require.ensure([], (require) => {
                        resolve(require('./UI/Screens/Page').default)
                    })
                }), {
                        currentModuleFileName: path.join(__dirname, './Router.js'),
                        importedModulePath: './UI/Screens/Page',
                        serverSideRequirePath: path.join(__dirname, './UI/Screens/Page')
                    });
            },
            loading: Loading
        })
    },
    {
        path: '/blog',
        component: Loadable({
            loader: function loader() {
                return report(new Promise((resolve) => {
                    return require.ensure([], (require) => {
                        resolve(require('./UI/Screens/Page').default)
                    })
                }), {
                        currentModuleFileName: path.join(__dirname, './Router.js'),
                        importedModulePath: './UI/Screens/Page',
                        serverSideRequirePath: path.join(__dirname, './UI/Screens/Page')
                    });
            },
            loading: Loading
        })
    },
    {
        path: '/members',
        component: Loadable({
            loader: function loader() {
                return report(new Promise((resolve) => {
                    return require.ensure([], (require) => {
                        resolve(require('./UI/Screens/Page').default)
                    })
                }), {
                        currentModuleFileName: path.join(__dirname, './Router.js'),
                        importedModulePath: './UI/Screens/Page',
                        serverSideRequirePath: path.join(__dirname, './UI/Screens/Page')
                    });
            },
            loading: Loading
        })
    },
    {
        path: '/privacy',
        component: Loadable({
            loader: function loader() {
                return report(new Promise((resolve) => {
                    return require.ensure([], (require) => {
                        resolve(require('./UI/Screens/Page').default)
                    })
                }), {
                        currentModuleFileName: path.join(__dirname, './Router.js'),
                        importedModulePath: './UI/Screens/Page',
                        serverSideRequirePath: path.join(__dirname, './UI/Screens/Page')
                    });
            },
            loading: Loading
        })
    },
    {
        path: '/contact',
        component: Loadable({
            loader: function loader() {
                return report(new Promise((resolve) => {
                    return require.ensure([], (require) => {
                        resolve(require('./UI/Screens/Page').default)
                    })
                }), {
                        currentModuleFileName: path.join(__dirname, './Router.js'),
                        importedModulePath: './UI/Screens/Page',
                        serverSideRequirePath: path.join(__dirname, './UI/Screens/Page')
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
    // Internal
    { path: '/go/faucet', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://crypto.in5mins.com/faucet'` }} /> },
    { path: '/go/dictionary', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://crypto.in5mins.com/dictionary'` }} /> },
    { path: '/go/in5mins', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://crypto.in5mins.com/'` }} /> },
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
    // Wallets
    { path: '/go/trezor', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://trezor.io/'` }} /> },
    { path: '/go/ledger', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://www.ledgerwallet.com/'` }} /> },
    { path: '/go/jaxx', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://jaxx.io/'` }} /> },
    { path: '/go/metamask', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://metamask.io/'` }} /> },
    { path: '/go/exodus', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://www.exodus.io/'` }} /> },
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
    // Reviews
    { path: '/review/elf', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://aelf-elf.review'` }} /> },
    { path: '/review/aion', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://aion-token.review'` }} /> },
    { path: '/review/abt', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://arcblock-abt.review'` }} /> },
    { path: '/review/ardr', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://ardor-ardr.review'` }} /> },
    { path: '/review/ark', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://ark-token.review'` }} /> },
    { path: '/review/rep', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://augur-rep.review'` }} /> },
    { path: '/review/bnt', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://bancor-bnt.review'` }} /> },
    { path: '/review/bat', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://basic-attention-token-bat.review'` }} /> },
    { path: '/review/bee', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://bee-token.review'` }} /> },
    { path: '/review/bnb', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://binance-coin-bnb.review'` }} /> },
    { path: '/review/btc', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://bitcoin-btc.review'` }} /> },
    { path: '/review/bch', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://bitcoin-cash-bch.review'` }} /> },
    { path: '/review/bcd', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://bitcoin-diamond-bcd.review'` }} /> },
    { path: '/review/btg', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://bitcoin-gold-btg.review'` }} /> },
    { path: '/review/btcp', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://bitcoin-private-btcp.review'` }} /> },
    { path: '/review/bcn', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://bytecoin-bcn.review'` }} /> },
    { path: '/review/btm', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://bytom-btm.review'` }} /> },
    { path: '/review/ada', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://cardano-ada.review'` }} /> },
    { path: '/review/coss', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://coss-token.review'` }} /> },
    { path: '/review/cs', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://credits-cs.review'` }} /> },
    { path: '/review/dash', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://dash-token.review'` }} /> },
    { path: '/review/dgd', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://digixdao-dgd.review'` }} /> },
    { path: '/review/doge', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://dogecoin-doge.review'` }} /> },
    { path: '/review/drgn', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://dragonchain-drgn.review'` }} /> },
    { path: '/review/eng', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://enigma-eng.review'` }} /> },
    { path: '/review/eos', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://eos-token.review'` }} /> },
    { path: '/review/etc', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://ethereum-classic-etc.review'` }} /> },
    { path: '/review/eth', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://ethereum-eth.review'` }} /> },
    { path: '/review/ethos', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://ethos-token.review'` }} /> },
    { path: '/review/gnt', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://golem-gnt.review'` }} /> },
    { path: '/review/hsr', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://hshare-hsr.review'` }} /> },
    { path: '/review/icx', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://icon-icx.review'` }} /> },
    { path: '/review/iota', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://iota-token.review'` }} /> },
    { path: '/review/kin', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://kin-token.review'` }} /> },
    { path: '/review/kcs', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://kucoin-kcs.review'` }} /> },
    { path: '/review/knc', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://kyber-knc.review'` }} /> },
    { path: '/review/lsk', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://lisk-lsk.review'` }} /> },
    { path: '/review/ltc', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://litecoin-ltc.review'` }} /> },
    { path: '/review/lrc', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://loopring-lrc.review'` }} /> },
    { path: '/review/mkr', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://maker-mkr.review'` }} /> },
    { path: '/review/mith', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://mithril-mith.review'` }} /> },
    { path: '/review/mona', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://monacoin-mona.review'` }} /> },
    { path: '/review/xmr', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://monero-xmr.review'` }} /> },
    { path: '/review/nano', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://nano-token.review'` }} /> },
    { path: '/review/nas', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://nebulas-nas.review'` }} /> },
    { path: '/review/xem', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://nem-xem.review'` }} /> },
    { path: '/review/neo', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://neo-token.review'` }} /> },
    { path: '/review/ncash', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://nucleus-vision-ncash.review'` }} /> },
    { path: '/review/omg', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://omisego-omg.review'` }} /> },
    { path: '/review/ont', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://ontology-ont.review'` }} /> },
    { path: '/review/ppt', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://populous-ppt.review'` }} /> },
    { path: '/review/npxs', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://pundi-npxs.review'` }} /> },
    { path: '/review/qash', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://qash-token.review'` }} /> },
    { path: '/review/qtum', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://qtum-token.review'` }} /> },
    { path: '/review/rhoc', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://rchain-rhoc.review'` }} /> },
    { path: '/review/xrp', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://ripple-xrp.review'` }} /> },
    { path: '/review/salt', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://salt-token.review'` }} /> },
    { path: '/review/sc', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://siacoin-sc.review'` }} /> },
    { path: '/review/steem', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://steem-token.review'` }} /> },
    { path: '/review/xlm', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://stellar-xlm.review'` }} /> },
    { path: '/review/strat', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://stratis-strat.review'` }} /> },
    { path: '/review/usdt', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://tether-usdt.review'` }} /> },
    { path: '/review/trx', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://tron-trx.review'` }} /> },
    { path: '/review/ven', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://vechain-ven.review'` }} /> },
    { path: '/review/xvg', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://verge-xvg.review'` }} /> },
    { path: '/review/veri', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://veritaseum-veri.review'` }} /> },
    { path: '/review/wanchain', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://wanchain.review'` }} /> },
    { path: '/review/wan', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://wanchain-wan.review'` }} /> },
    { path: '/review/waves', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://waves-token.review'` }} /> },
    { path: '/review/wpr', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://wepower-wpr.review'` }} /> },
    { path: '/review/zec', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://zcash-zec.review'` }} /> },
    { path: '/review/iota', component: () => <script dangerouslySetInnerHTML={{ __html: `window.location = 'https://zilliqa-zil.review'` }} /> },
]

export default {
    routes: routes,
    store: store,
    middleware: middleware,
    getReducers: getReducers
}

