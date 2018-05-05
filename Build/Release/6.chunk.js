webpackJsonp([6],{78:function(e,t,n){(function(e){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){var t=e.site;return{site:t}}Object.defineProperty(t,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"==typeof("function"==typeof Symbol?Symbol.iterator:"@@iterator")?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(5),u=s.React,d=(s.ReactDOM,s.ReactNative,s.PropTypes,s.T),p=s.connect,f=(s.AppWrapper,s.AppConfig,s.Platform,s.Component),m=(s.AppRegistry,s.Navigator,s.StyleSheet,s.Text,s.View),y=(s.TouchableHighlight,s.WebView,s.Animated,s.Dimensions,s.Router,s.Route,s.Link),b=(s.createStore,s.browserHistory,s.compose,s.applyMiddleware,s.thunkMiddleware,s.Provider,s.syncHistoryWithStore,s.routerReducer,s.combineReducers,s.createLogger,s.renderToString,function(t){function i(){r(this,i);var e=o(this,Object.getPrototypeOf(i).call(this));return e.state={},e}return a(i,t),c(i,[{key:"componentDidMount",value:function(){var t=this;s.getStyles(s.Platform.Env.isServer?n(23).readFileSync(e+"/Layout.css").toString():n(97),"stokelayout-",function(e){t.setState({styles:e})})}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.breadcrumb,r=(e.games,e.site);return s.wrapStyles(this.state.styles,u.createElement(m,null,u.createElement("div",{className:"container"},u.createElement("div",{styles:"c-header"},u.createElement("div",{styles:"c-header__left"},u.createElement("h1",{styles:"c-header__logo"},u.createElement(y,{to:"/",styles:"c-header__title"},r.title))),u.createElement("div",{styles:"c-header__right"},u.createElement("ul",{styles:"c-nav"},u.createElement("li",{styles:"c-nav__item"},u.createElement(y,{to:"/about",styles:"c-nav__link"},"OUR STORY"),u.createElement(y,{to:"/sets",styles:"c-nav__link"},"SETS"),u.createElement(y,{to:"/news",styles:"c-nav__link"},"NEWS"))))),"string"==typeof n&&u.createElement("div",{dangerouslySetInnerHTML:{__html:n}}),"object"===("undefined"==typeof n?"undefined":l(n))&&n,!n&&u.createElement("ul",{className:"breadcrumb"},u.createElement("li",{className:"active"},u.createElement(y,{to:"/"},u.createElement("i",{className:"icon-home"})," ",r.title))),u.createElement("nav",{id:"secondary",className:"main-nav black-box tex"},u.createElement("div",{className:"nav-menu box"},u.createElement("ul",{className:"nav nav-list"},u.createElement("li",{className:"active"},u.createElement(y,{to:"/"},u.createElement("i",{className:"icon-home"})," Home")),u.createElement("li",null,u.createElement(y,{to:"/about"},"About")),u.createElement("li",null,u.createElement(y,{to:"/contact"},"Contact"))))),u.createElement("section",{id:"main"},u.createElement("div",{className:"container-fluid"},u.createElement("div",{className:"row-fluid"},u.createElement("div",{className:"span12"},t))),u.createElement("div",{className:"row-fluid"},u.createElement("div",{className:"span12"},u.createElement("div",{className:"footer"},u.createElement("div",null,"Copyright ",r.copyright.date," © ",u.createElement(y,{to:"/"},r.copyright.company),". All rights reserved."))))))))}}]),i}(f));b.propTypes={breadcrumb:d.element,site:d.object.isRequired},b.defaultProps={breadcrumb:null,site:{}},t["default"]=p(i)(b)}).call(t,"/")},79:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(78);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o)["default"]}})},97:function(e,t){e.exports="$mobile-width: 320px;\n$tablet-width: 768px;\n$desktop-width: 1024px;\n\n@mixin mobile {\n  @media (min-width: #{$mobile-width}) {\n    @content;\n  }\n}\n\n@mixin tablet {\n  @media (min-width: #{$tablet-width}) {\n    @content;\n  }\n}\n\n@mixin desktop {\n  @media (min-width: #{$desktop-width}) {\n    @content;\n  }\n}\n\n.c-header {\n    position: fixed;\n    top: 0;\n    left: 0%;\n    width: 100%;\n    opacity: 0.95;\n    border-radius: 0 0 5px 5px;\n    background: #2a2a30;\n    background-size: 100%;\n    background-image: linear-gradient(top, #494852, #2a2a30);\n    border-bottom: 1px solid #1d1e21;\n    border-right: 1px solid #1d1e21;\n    border-left: 1px solid #1d1e21;\n    margin-bottom: 20px;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n    padding-right: 20px;\n    padding-left: 20px;\n    display: flex;\n    flex-wrap: wrap;\n\n    @include tablet {\n        left: 7%;\n        width: 86%;\n    }\n}\n\n.c-header__left {\n    flex: 1;\n    margin-left: 0;\n\n    @include tablet {\n    }\n}\n\n.c-header__right {\n    flex: 1;\n\n    @include tablet {\n    }\n}\n\n.c-header__logo {\n    margin: 0;\n    background: transparent url(/Apps/Site/Projects/in5mins/Assets/Other/images/logo.png) no-repeat 0 7px;\n    background-size: auto 70%;\n    padding-left: 43px;\n}\n\n.c-header__title {\n    font-size: 22px;\n    color: #fff;\n}\n\n\n.c-nav {\n\n}\n\n.c-nav__item {\n    padding: 12px 0;\n    text-align: right;\n}\n\n.c-nav__link {\n    text-transform: uppercase;\n    padding: 10px 7px;\n    font-weight: bold;\n    color: #949494;\n    font-size: 14px;\n}\n\n.c-nav__link:hover {\n    color: #fff;\n}\n"},893:function(e,t){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?s:arguments[0],t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];switch(t.type){case i:return a({},e,{loading:!0});case l:return a({},e,{loading:!1,loaded:!0,data:t.result});case c:return a({},e,{loading:!1,loaded:!1,error:t.error});default:return e}}function r(e){return e.news&&e.news.loaded}function o(){return{types:[i,l,c],promise:function(e){return e.get("/news")}}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.reducer=n,t.isLoaded=r,t.load=o;var i="app/news/LOAD",l="app/news/LOAD_SUCCESS",c="app/news/LOAD_FAIL",s={loaded:!1}},903:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){return{setData:e.set.data}}function s(e){return{actions:v(y,e)}}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof("function"==typeof Symbol?Symbol.iterator:"@@iterator")?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(79),f=o(p),m=n(266),y=r(m),b=n(5),h=b.React,v=(b.ReactDOM,b.ReactNative,b.bindActionCreators),g=b.asyncConnect,_=(b.PropTypes,b.T,b.connect,b.AppWrapper,b.AppConfig,b.Platform,b.Component),E=(b.AppRegistry,b.Navigator,b.StyleSheet,b.Text,b.View),w=(b.TouchableHighlight,b.WebView,b.Animated,b.Dimensions,b.Router,b.Route,b.Link),O=(b.createStore,b.browserHistory,b.compose,b.applyMiddleware,b.thunkMiddleware,b.Provider,b.syncHistoryWithStore,b.routerReducer,b.combineReducers,b.createLogger,b.renderToString,function(e){function t(){a(this,t);var e=i(this,Object.getPrototypeOf(t).call(this));return e.state={},e}return l(t,e),d(t,[{key:"render",value:function(){var e=this.props.setData,t=e.id,n=e.title,r=e.setNumber,o=e.setNumberVariant,a=e.data;return h.createElement(f["default"],null,h.createElement("h1",null,n," (",r,"-",o,")"),h.createElement(w,{href:"/sets/"+t+"/edit"},"Edit"),h.createElement(E,null,"ID: ",t,h.createElement("br",null),"Title: ",n,h.createElement("br",null),Object.keys(a).map(function(e){var t=a[e];return"object"===("undefined"==typeof t?"undefined":u(t))?Object.keys(t).map(function(e){var n=t[e];return"object"===("undefined"==typeof n?"undefined":u(n))?Object.keys(n).map(function(e){var t=n[e];return"link"===e?h.createElement(E,null,h.createElement("a",{href:t},"GO TO BUY PAGE")):h.createElement(E,null,e,": ",t)}):h.createElement(E,null,e,": ",n)}):h.createElement(E,null,e,": ",t)})))}}]),t}(_)),x=n(413),S=n(266),j=n(893),k=[{key:"page",promise:function(e){var t=e.store,n=t.dispatch,r=t.getState,o=(e.helpers.client,[]);return x.isLoaded(r())||o.push(n(x.load())),S.isLoaded(r())||o.push(n(S.load())),j.isLoaded(r())||o.push(n(j.load())),Promise.all(o)}}];t["default"]=g(k,c,s)(O)},904:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(903);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o)["default"]}})}});