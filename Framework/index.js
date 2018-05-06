import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {createStore, combineReducers, applyMiddleware, compose, bindActionCreators} from 'redux'
import { Router, Route, Link, browserHistory, matchPath} from 'react-router'
import {Provider, connect} from 'react-redux'
import {syncHistoryWithStore, routerReducer, routerMiddleware} from 'react-router-redux'
import { ReduxAsyncConnect, loadOnServer, asyncConnect } from 'redux-connect'
import PropTypes from 'prop-types'


if (typeof global !== 'undefined' && global.Framework) {
    module.exports = global.Framework
} else {
    const Framework = {}

    // ===============

    const React = require('react')

    Framework.React = React
    Framework.Component = React.Component
    Framework.PropTypes = PropTypes
    Framework.T = PropTypes

    // ===============

    if (typeof process.argv !== 'undefined') {
        const argv = require('minimist')(process.argv.slice(2))

        Framework.Platform = {
            OS: argv.platform ? argv.platform : 'web',
            Env: {
                isNative: false,
                isServer: typeof window === 'undefined' ? true : false,
                isMobile: false,
                isTablet: false,
                isDesktop: false,
                isRetina: false,
                isBrowser: typeof window !== 'undefined' ? true : false,
                isDevelopment: typeof process !== 'undefined' ? process.env.NODE_ENV === 'development' : true, // isDevelopment if process is defined and NODE_ENV is development, or if process is not defined
                isProduction: typeof process !== 'undefined' && process.env.NODE_ENV === 'production' ? true : false
            }
        }

        Framework.StyleSheet = {
            create: (styles) => {
                return styles
            }
        }

        Framework.View = class View extends React.Component {
            render() {
                return React.createElement(
                    'div',
                    this.props,
                    this.props.children
                )
            }
        }

        Framework.Text = class Text extends React.Component {
            render() {
                return React.createElement(
                    'div',
                    this.props,
                    this.props.children
                )
            }
        }

        Framework.Img = class Img extends React.Component {
            render() {
                return React.createElement(
                    'img',
                    this.props
                )
            }
        }

        Framework.ReactDOMServer = require('react-dom/server')
        Framework.renderToString = Framework.ReactDOMServer.renderToString
    } else {
        const ReactNative = require('react-native')

        Framework.ReactNative = ReactNative
        Framework.Platform = ReactNative.Platform
        Framework.ReactNative = ReactNative.ReactNative
        Framework.AppRegistry = ReactNative.AppRegistry
        Framework.Navigator = ReactNative.Navigator
        Framework.StyleSheet = ReactNative.StyleSheet
        Framework.Text = ReactNative.Text
        Framework.View = ReactNative.View
        Framework.TouchableHighlight = ReactNative.TouchableHighlight
        Framework.WebView = ReactNative.WebView
        Framework.Animated = ReactNative.Animated
        Framework.Dimensions = ReactNative.Dimensions

        Framework.Platform.Env = {
            isNative: true,
            isServer: false,
            isMobile: false,
            isTablet: false,
            isRetina: false,
            isBrowser: false,
            isDevelopment: false, // TODO: how do we get this?
            isProduction: false // TODO: how do we get this?
        }

        Framework.renderToString = function renderToString() { throw new Error('Wrong context for renderToString') }
    }

    // ===============

    console.log('On platform: ' + Framework.Platform.OS + ' (Server: ' + Framework.Platform.Env.isServer + ', Browser: ' + Framework.Platform.Env.isBrowser + ', Native: ' + Framework.Platform.Env.isNative + ')')

    if (Framework.Platform.Env.isBrowser) {
        Framework.ReactDOM = require('react-dom')

        const parseVersion = function parseVersion(version) {
            if (!version) return {}

            const parts = version.split('.')

            return {
                version: version,
                major: parseInt(parts[0] || 0),
                minor: parseInt(parts[1] || 0),
                patch: parseInt(parts[2] || 0)
            }
        }

        // This ratio is less than 1 because it accommodates when keyboards are activated.
        const compareRatio = 0.8

        const detect = function detect(ua) {
            let browserVersion
            let osVersion
            let os = {}
            let browser = {}
            const cssClasses = []

            const webkit = ua.match(/Web[kK]it[\/]{0,1}([\d.]+)/)
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/)
            const osx = !!ua.match(/\(Macintosh; Intel /)
            const ipad = ua.match(/(iPad).*OS\s([\d_]+)/)
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/)
            const iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/)
            const windowsphone = ua.match(/Windows Phone ([\d.]+)/)
            const kindle = ua.match(/Kindle\/([\d.]+)/)
            const silk = ua.match(/Silk\/([\d._]+)/)
            const blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/)
            const bb10 = ua.match(/(BB10).*Version\/([\d.]+)/)
            const rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/)
            const playbook = ua.match(/PlayBook/)
            const chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/)
            const firefox = ua.match(/Firefox\/([\d.]+)/)
            const ie = ua.match(/MSIE\s([\d.]+)/) || ua.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/)
            const webview = !chrome && ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/)
            const safari = webview || ua.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/)

            browser.webkit = !!webkit

            if (browser.webkit) {
                browserVersion = webkit[1]
                cssClasses.push('webkit')
            }

            if (android) {
                os.android = true
                osVersion = android[2]
                cssClasses.push('android')
            }
            if (iphone && !ipod) {
                os.ios = os.iphone = true
                osVersion = iphone[2].replace(/_/g, '.')
                cssClasses.push('ios', 'iphone')
            }
            if (ipad) {
                os.ios = os.ipad = true
                osVersion = ipad[2].replace(/_/g, '.')
                cssClasses.push('ios', 'ipad')
            }
            if (ipod) {
                os.ios = os.ipod = true
                osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null
                cssClasses.push('ios', 'ipod')
            }
            if (windowsphone) {
                os.windowsphone = true
                osVersion = windowsphone[1]
                cssClasses.push('windows')
            }
            if (blackberry) {
                os.blackberry = true
                osVersion = blackberry[2]
                cssClasses.push('blackberry')
            }
            if (bb10) {
                os.bb10 = true
                osVersion = bb10[2]
                cssClasses.push('blackberry', 'bb10')
            }
            if (rimtabletos) {
                os.rimtabletos = true
                osVersion = rimtabletos[2]
                cssClasses.push('blackberry')
            }
            if (playbook) {
                browser.playbook = true
                cssClasses.push('playbook')
            }
            if (kindle) {
                os.kindle = true
                osVersion = kindle[1]
                cssClasses.push('kindle')
            }
            if (silk) {
                browser.silk = true
                browserVersion = silk[1]
                cssClasses.push('silk')
            }
            if (!silk && os.android && ua.match(/Kindle Fire/)) {
                browser.silk = true
                cssClasses.push('silk')
            }
            if (chrome) {
                browser.chrome = true
                browserVersion = chrome[1]
                cssClasses.push('chrome')
            }
            if (firefox) {
                browser.firefox = true
                browserVersion = firefox[1]
                cssClasses.push('firefox')
            }
            if (ie) {
                browser.ie = true
                browserVersion = ie[1]
                cssClasses.push('ie')
            }
            if (safari && (osx || os.ios)) {
                browser.safari = true
                cssClasses.push('safari')
                if (osx) {
                    browserVersion = safari[1]
                }
            }

            if (webview) {
                browser.webview = true
                cssClasses.push('webview')
            }

            os = Object.assign({}, os, parseVersion(osVersion))
            browser = Object.assign({}, browser, parseVersion(browserVersion))

            if ('querySelector' in document &&
                'addEventListener' in window &&
                'localStorage' in window &&
                'sessionStorage' in window &&
                'bind' in Function) {
                browser.isModern = true
                cssClasses.push('is-modern-browser')
            }

            // Determines if this browser is the Android browser vs. chrome. It's always the
            // Android browser if it's webkit and the version is less than 537
            if (os.android && !browser.chrome && browser.webkit && browser.major < 537) {
                browser.androidBrowser = true
                cssClasses.push('android-browser')
            }

            os.isTablet = !!(ipad || playbook || kindle || (android && !ua.match(/Mobile/)) ||
            (firefox && ua.match(/Tablet/)) || (ie && !ua.match(/Phone/) && ua.match(/Touch/)))

            os.isMobile = !!(!os.isTablet && !os.ipod && (android || iphone || blackberry || bb10 ||
            (chrome && ua.match(/Android/)) || (chrome && ua.match(/CriOS\/([\d.]+)/)) ||
            (firefox && ua.match(/Mobile/)) || (ie && ua.match(/Touch/))))

            // http://stackoverflow.com/questions/19689715/what-is-the-best-way-to-detect-retina-support-on-a-device-using-javascript
            os.isRetina = ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 2)) && os.ios
            if (os.isRetina) {
                cssClasses.push('retina')
            }

            cssClasses.push(os.isTablet ? 'tablet' : (os.isMobile ? 'mobile' : 'desktop'))

            return os
        }

        // In browser
        if (Framework.Platform.Env.isBrowser) {
            const env = detect(window.navigator.userAgent)
            Framework.Platform.Env.isRetina = env.isRetina
            Framework.Platform.Env.isMobile = env.isMobile
            Framework.Platform.Env.isTablet = env.isTablet
        } else { // In node
            // Framework.Platform.Env = detect(window.navigator.userAgent)
        }
    } else {
        Framework.ReactDOM = null
    }

    // ===============

    if (Framework.Platform.Env.isBrowser) {
        Framework.getStyles = () => {
            return {}
        }
    } else if (Framework.Platform.Env.isNative) {
        Framework.getStyles = () => {
            return {}
        }
    } else if (Framework.Platform.Env.isServer) {
        Framework.getStyles = () => {
            return { }
        }
    }

    // On web, we want a React Look wrapper so we can inject the styles
    // On other platforms we will use inline styles, so it isn't necessary
    if (Framework.Platform.OS === 'web') {
        Framework.AppWrapper = <div></div>
        Framework.AppConfig = {}
    } else {
        Framework.AppWrapper = <div></div>
        Framework.AppConfig = {}
    }

    // ===============
    // Redux
    // ===============

    Framework.thunkMiddleware = thunkMiddleware
    Framework.createLogger = createLogger
    Framework.createStore = createStore
    Framework.compose = compose
    Framework.combineReducers = combineReducers
    Framework.applyMiddleware = applyMiddleware
    Framework.Router = Router
    Framework.Route = Route
    Framework.Link = Link
    Framework.browserHistory = browserHistory
    Framework.Provider = Provider
    Framework.connect = connect
    Framework.syncHistoryWithStore = syncHistoryWithStore
    Framework.routerReducer = routerReducer
    Framework.routerMiddleware = routerMiddleware
    Framework.ReduxAsyncConnect = ReduxAsyncConnect
    Framework.loadOnServer = loadOnServer
    Framework.match = matchPath
    Framework.bindActionCreators = bindActionCreators
    Framework.asyncConnect = asyncConnect

    // ===============

    if (Framework.Platform.Env.isServer) {
        Framework.fetch = require('isomorphic-fetch')
    } else {
        Framework.fetch = window.fetch
    }

    // ===============

    if (typeof global !== 'undefined') {
        global.Framework = Framework
    }

    module.exports = Framework
}
