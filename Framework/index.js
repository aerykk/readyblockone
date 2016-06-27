import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {Router, Route, Link, browserHistory} from 'react-router'
import {Provider, connect} from 'react-redux'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'

if (typeof global !== 'undefined' && global.Framework) {
    module.exports = global.Framework
} else {
    const Framework = {}

    // ===============

    const React = require('react')

    Framework.React = React
    Framework.Component = React.Component
    Framework.PropTypes = React.PropTypes
    Framework.T = React.PropTypes

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
            static propTypes = { children: React.PropTypes.node }
            render() {
                return React.createElement(
                    'div',
                    this.props,
                    this.props.children
                )
            }
        }

        Framework.Text = class Text extends React.Component {
            static propTypes = { children: React.PropTypes.node }
            render() {
                return React.createElement(
                    'div',
                    this.props,
                    this.props.children
                )
            }
        }

        Framework.Img = class Img extends React.Component {
            static propTypes = { children: React.PropTypes.node }
            render() {
                return React.createElement(
                    'img',
                    this.props
                )
            }
        }

        const {renderToString} = require('react-dom/server')

        Framework.renderToString = renderToString
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

    const postcss = require('postcss')
    const postcssJs = require('postcss-js')

    if (Framework.Platform.Env.isBrowser) {
        const Sass = require('sass.js')

        const reactlook = require('react-look')
        const _ = require('lodash')

        const renderer = require('../node_modules/react-look/lib/core/renderer')
        reactlook.StyleSheet.create = (styles, scope) => {
            // flat style object without selectors
            const firstKey = styles[Object.keys(styles)[0]]
            if (!_.isPlainObject(firstKey) && !_.isFunction(firstKey)) {
                return renderer.default(styles, scope)
            }

            return Object.keys(styles).reduce((classes, selector) => {
                classes[selector] = renderer.default(styles[selector], scope) // eslint-disable-line
                return classes // eslint-disable-line
            }, {})
        }

        /* sanitizeMediaQueries
        Replace this:
            @media (min-width: 768px) and (max-width: 1023px) {
                .c-header {
                  left: 7%;
                  width: 86%; } }
        With this:
            @media (min-width: 768px) and (max-width: 1023px) {
              left: 7%;
              width: 86%;
            }
        */
        const sanitizeMediaQueries = (rawStyles) => {
            return rawStyles.replace(/\}([^@]*)@media([^\{]*)\{([^\{]*)\{([^\}]*)\}/gi, '@media$2{$4}')
        }

        Framework.getStyles = (rawStyles1, scope, cb) => {
            Sass.compile(rawStyles1, (rawStyles2) => {
                rawStyles2 = sanitizeMediaQueries(rawStyles2.text) // eslint-disable-line

                const styles = reactlook.StyleSheet.create(
                    postcssJs.objectify(
                        postcss.parse(rawStyles2)
                    ),
                    scope
                )

                cb(styles)
            })
        }
    } else if (Framework.Platform.Env.isNative) {
        const rnes = require('react-native-extended-stylesheet')

        const convertStyles = (obj) => {
            if (typeof obj === 'object') {
                for (const key of Object.keys(obj)) {
                    obj[key] = convertStyles(obj[key]) // eslint-disable-line
                }
                return obj
            }

            if (parseInt(obj) == obj) { // eslint-disable-line eqeqeq
                return parseInt(obj)
            }
        }

        Framework.getStyles = (rawStyles, extendedStyles = {}) => {
            let styles = postcssJs.objectify(postcss.parse(rawStyles))
            styles = convertStyles(styles)
            styles = Object.assign(styles, extendedStyles)
            styles = rnes.default.create(styles)

            return styles
        }
    } else if (Framework.Platform.Env.isServer) {
        Framework.getStyles = () => {
            return { }
        }
    }

    // ===============

    Framework.wrapStyles = (declarations, item) => {
        if (!declarations) {
            return item
        }

        if (!item.props) {
            return item
        }

        const extension = {}

        if (item.props.children) {
            extension.children = []
            if (Array.isArray(item.props.children)) {
                item.props.children.forEach((child, i) => {
                    if (!child) { return }
                    extension.children[i] = Framework.wrapStyles(declarations, child)
                })
            } else {
                extension.children[0] = Framework.wrapStyles(declarations, item.props.children)
            }
        }

        if (item.props.styles) {
            for (const declaration of Object.keys(declarations)) {
                const styles = item.props.styles.split(' ')
                const declarationClasses = declaration.split('.').slice(1)

                // TODO: optimize this, make it recursive
                // declarationClasses = ["c-timeline__arrow", "c--completed"]
                // styles = ["c-timeline__arrow", "c--red", "c--completed"]
                const declaration1 = declarationClasses[0]
                if (styles.indexOf(declaration1) === -1) {
                    continue
                }

                // Check for a straight class match
                if (declarationClasses.length > 1) {
                    const declaration2 = declarationClasses[1]
                    if (styles.indexOf(declaration2) === -1) {
                        continue
                    }

                    // Check for a combined class match
                    if (declarationClasses.length > 2) {
                        const declaration3 = declarationClasses[2]
                        if (styles.indexOf(declaration3) === -1) {
                            continue
                        }

                        // We cant handle more than 3 yet
                        if (declarationClasses.length > 3) {
                            continue
                        }
                    }
                }

                const attr = Framework.Platform.OS === 'web' ? 'className' : 'style'
                if (extension[attr]) {
                    if (attr === 'className') {
                        extension[attr] = extension[attr] + ' ' + declarations[declaration]
                    } else if (attr === 'style') {
                        extension[attr] = Object.assign({}, extension[attr], declarations[declaration])
                    }
                } else {
                    extension[attr] = declarations[declaration]
                }
            }
        }

        return React.cloneElement(item, extension)
    }

    // On web, we want a React Look wrapper so we can inject the styles
    // On other platforms we will use inline styles, so it isn't necessary
    if (Framework.Platform.OS === 'web') {
        const reactlook = require('react-look')
        Framework.AppWrapper = reactlook.LookRoot
        Framework.AppConfig = reactlook.Presets['react-dom']
        Framework.AppConfig.styleElementId = '_nextgen-engine-stylesheet-' + 'horadric'
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

    // ===============

    if (typeof global === 'undefined') {
        Framework.fetch = require('isomorphic-fetch')
    } else {
        Framework.fetch = function fetch() {
            console.error('fetch() not implemented on server side')
        }
    }

    // ===============

    if (typeof global !== 'undefined') {
        global.Framework = Framework
    }

    module.exports = Framework
}
