webpackJsonp([7],{71:function(e,t,n){(function(e){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){var t=e.site;return{site:t}}Object.defineProperty(t,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"==typeof("function"==typeof Symbol?Symbol.iterator:"@@iterator")?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(5),u=s.React,d=(s.ReactDOM,s.ReactNative,s.PropTypes,s.T),p=s.connect,f=(s.AppWrapper,s.AppConfig,s.Platform,s.Component),m=(s.AppRegistry,s.Navigator,s.StyleSheet,s.Text,s.View),b=(s.TouchableHighlight,s.WebView,s.Animated,s.Dimensions,s.Router,s.Route,s.Link),y=(s.createStore,s.browserHistory,s.compose,s.applyMiddleware,s.thunkMiddleware,s.Provider,s.syncHistoryWithStore,s.routerReducer,s.combineReducers,s.createLogger,s.renderToString,function(t){function i(){r(this,i);var e=o(this,Object.getPrototypeOf(i).call(this));return e.state={},e}return a(i,t),c(i,[{key:"componentDidMount",value:function(){var t=this;s.getStyles(s.Platform.Env.isServer?n(22).readFileSync(e+"/Layout.css").toString():n(86),"stokelayout-",function(e){t.setState({styles:e})})}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.breadcrumb,r=(e.games,e.site);return s.wrapStyles(this.state.styles,u.createElement(m,null,u.createElement("div",{className:"container"},u.createElement("div",{styles:"c-header"},u.createElement("div",{styles:"c-header__left"},u.createElement("h1",{styles:"c-header__logo"},u.createElement(b,{to:"/",styles:"c-header__title"},r.title))),u.createElement("div",{styles:"c-header__right"},u.createElement("ul",{styles:"c-nav"},u.createElement("li",{styles:"c-nav__item"},u.createElement(b,{to:"/about",styles:"c-nav__link"},"OUR STORY"),u.createElement(b,{to:"/sets",styles:"c-nav__link"},"SETS"),u.createElement(b,{to:"/news",styles:"c-nav__link"},"NEWS"))))),"string"==typeof n&&u.createElement("div",{dangerouslySetInnerHTML:{__html:n}}),"object"===("undefined"==typeof n?"undefined":l(n))&&n,!n&&u.createElement("ul",{className:"breadcrumb"},u.createElement("li",{className:"active"},u.createElement(b,{to:"/"},u.createElement("i",{className:"icon-home"})," ",r.title))),u.createElement("nav",{id:"secondary",className:"main-nav black-box tex"},u.createElement("div",{className:"nav-menu box"},u.createElement("ul",{className:"nav nav-list"},u.createElement("li",{className:"active"},u.createElement(b,{to:"/"},u.createElement("i",{className:"icon-home"})," Home")),u.createElement("li",null,u.createElement(b,{to:"/about"},"About")),u.createElement("li",null,u.createElement(b,{to:"/contact"},"Contact"))))),u.createElement("section",{id:"main"},u.createElement("div",{className:"container-fluid"},u.createElement("div",{className:"row-fluid"},u.createElement("div",{className:"span12"},t))),u.createElement("div",{className:"row-fluid"},u.createElement("div",{className:"span12"},u.createElement("div",{className:"footer"},u.createElement("div",null,"Copyright ",r.copyright.date," © ",u.createElement(b,{to:"/"},r.copyright.company),". All rights reserved."))))))))}}]),i}(f));y.propTypes={breadcrumb:d.element,site:d.object.isRequired},y.defaultProps={breadcrumb:null,site:{}},t["default"]=p(i)(y)}).call(t,"/")},72:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(71);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o)["default"]}})},86:function(e,t){e.exports="$mobile-width: 320px;\n$tablet-width: 768px;\n$desktop-width: 1024px;\n\n@mixin mobile {\n  @media (min-width: #{$mobile-width}) {\n    @content;\n  }\n}\n\n@mixin tablet {\n  @media (min-width: #{$tablet-width}) {\n    @content;\n  }\n}\n\n@mixin desktop {\n  @media (min-width: #{$desktop-width}) {\n    @content;\n  }\n}\n\n.c-header {\n    position: fixed;\n    top: 0;\n    left: 0%;\n    width: 100%;\n    opacity: 0.95;\n    border-radius: 0 0 5px 5px;\n    background: #2a2a30;\n    background-size: 100%;\n    background-image: linear-gradient(top, #494852, #2a2a30);\n    border-bottom: 1px solid #1d1e21;\n    border-right: 1px solid #1d1e21;\n    border-left: 1px solid #1d1e21;\n    margin-bottom: 20px;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n    padding-right: 20px;\n    padding-left: 20px;\n    display: flex;\n    flex-wrap: wrap;\n\n    @include tablet {\n        left: 7%;\n        width: 86%;\n    }\n}\n\n.c-header__left {\n    flex: 1;\n    margin-left: 0;\n\n    @include tablet {\n    }\n}\n\n.c-header__right {\n    flex: 1;\n\n    @include tablet {\n    }\n}\n\n.c-header__logo {\n    margin: 0;\n    background: transparent url(/Apps/Site/Projects/Moria/Assets/Other/images/logo.png) no-repeat 0 7px;\n    background-size: auto 70%;\n    padding-left: 43px;\n}\n\n.c-header__title {\n    font-size: 22px;\n    color: #fff;\n}\n\n\n.c-nav {\n\n}\n\n.c-nav__item {\n    padding: 12px 0;\n    text-align: right;\n}\n\n.c-nav__link {\n    text-transform: uppercase;\n    padding: 10px 7px;\n    font-weight: bold;\n    color: #949494;\n    font-size: 14px;\n}\n\n.c-nav__link:hover {\n    color: #fff;\n}\n"},893:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(72),s=r(c),u=n(5),d=u.React,p=(u.ReactDOM,u.ReactNative,u.PropTypes,u.T,u.connect,u.AppWrapper,u.AppConfig,u.Platform,u.Component),f=(u.AppRegistry,u.Navigator,u.StyleSheet,u.Text,u.View,u.TouchableHighlight,u.WebView,u.Animated,u.Dimensions,u.Router,u.Route,u.Link,u.createStore,u.browserHistory,u.compose,u.applyMiddleware,u.thunkMiddleware,u.Provider,u.syncHistoryWithStore,u.routerReducer,u.combineReducers,u.createLogger,u.renderToString,function(e){function t(){o(this,t);var e=a(this,Object.getPrototypeOf(t).call(this));return e.state={},e}return i(t,e),l(t,[{key:"render",value:function(){return d.createElement(s["default"],null,"Test")}}]),t}(p));t["default"]=f},894:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(893);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o)["default"]}})}});