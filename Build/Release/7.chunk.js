webpackJsonp([7],{

/***/ 1248:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Layout=__webpack_require__(1249);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Layout).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1249:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof (typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Projects/Moria/UI/Layouts/Default/Layout.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var 
	React=Framework.React;var ReactDOM=Framework.ReactDOM;var ReactNative=Framework.ReactNative;var PropTypes=Framework.PropTypes;var T=Framework.T;var connect=Framework.connect;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var Animated=Framework.Animated;var Dimensions=Framework.Dimensions;var Router=Framework.Router;var Route=Framework.Route;var Link=Framework.Link;var createStore=Framework.createStore;var browserHistory=Framework.browserHistory;var compose=Framework.compose;var applyMiddleware=Framework.applyMiddleware;var thunkMiddleware=Framework.thunkMiddleware;var Provider=Framework.Provider;var syncHistoryWithStore=Framework.syncHistoryWithStore;var routerReducer=Framework.routerReducer;var combineReducers=Framework.combineReducers;var createLogger=Framework.createLogger;var renderToString=Framework.renderToString;var 

	Layout=function(_Component){_inherits(Layout,_Component);










	function Layout(){_classCallCheck(this,Layout);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Layout).call(this));


	_this.state={};return _this;}_createClass(Layout,[{key:'componentDidMount',value:function componentDidMount()



	{var _this2=this;
	Framework.getStyles(Framework.Platform.Env.isServer?__webpack_require__(420).readFileSync(__dirname+'/Layout.css').toString():__webpack_require__(1250),'stokelayout-',function(styles){_this2.setState({styles:styles});});}},{key:'render',value:function render()


	{var _props=
	this.props;var children=_props.children;var breadcrumb=_props.breadcrumb;var games=_props.games;var site=_props.site;



	return Framework.wrapStyles(this.state.styles,
	React.createElement(View,{__source:{fileName:_jsxFileName,lineNumber:32}},
	React.createElement('div',{className:'container',__source:{fileName:_jsxFileName,lineNumber:33}},
	React.createElement('div',{styles:'c-header',__source:{fileName:_jsxFileName,lineNumber:34}},
	React.createElement('div',{styles:'c-header__left',__source:{fileName:_jsxFileName,lineNumber:35}},
	React.createElement('h1',{styles:'c-header__logo',__source:{fileName:_jsxFileName,lineNumber:36}},
	React.createElement(Link,{to:"/",styles:'c-header__title',__source:{fileName:_jsxFileName,lineNumber:37}},
	site.title))),



	React.createElement('div',{styles:'c-header__right',__source:{fileName:_jsxFileName,lineNumber:42}},
	React.createElement('ul',{styles:'c-nav',__source:{fileName:_jsxFileName,lineNumber:43}},
	React.createElement('li',{styles:'c-nav__item',__source:{fileName:_jsxFileName,lineNumber:44}},
	React.createElement(Link,{to:"/about",styles:'c-nav__link',__source:{fileName:_jsxFileName,lineNumber:45}},'OUR STORY'),
	React.createElement(Link,{to:"/sets",styles:'c-nav__link',__source:{fileName:_jsxFileName,lineNumber:46}},'SETS'),
	React.createElement(Link,{to:"/news",styles:'c-nav__link',__source:{fileName:_jsxFileName,lineNumber:47}},'NEWS'))))),





	typeof breadcrumb==='string'&&React.createElement('div',{dangerouslySetInnerHTML:{__html:breadcrumb},__source:{fileName:_jsxFileName,lineNumber:53}}),
	(typeof breadcrumb==='undefined'?'undefined':_typeof(breadcrumb))==='object'&&breadcrumb,
	!breadcrumb&&
	React.createElement('ul',{className:'breadcrumb',__source:{fileName:_jsxFileName,lineNumber:56}},
	React.createElement('li',{className:'active',__source:{fileName:_jsxFileName,lineNumber:57}},
	React.createElement(Link,{to:"/",__source:{fileName:_jsxFileName,lineNumber:58}},React.createElement('i',{className:'icon-home',__source:{fileName:_jsxFileName,lineNumber:58}}),' ',site.title))),




	React.createElement('nav',{id:'secondary',className:'main-nav black-box tex',__source:{fileName:_jsxFileName,lineNumber:63}},
	React.createElement('div',{className:'nav-menu box',__source:{fileName:_jsxFileName,lineNumber:64}},
	React.createElement('ul',{className:'nav nav-list',__source:{fileName:_jsxFileName,lineNumber:65}},
	React.createElement('li',{className:'active',__source:{fileName:_jsxFileName,lineNumber:66}},
	React.createElement(Link,{to:"/",__source:{fileName:_jsxFileName,lineNumber:67}},
	React.createElement('i',{className:'icon-home',__source:{fileName:_jsxFileName,lineNumber:68}}),' Home')),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:71}},
	React.createElement(Link,{to:"/about",__source:{fileName:_jsxFileName,lineNumber:72}},'About')),



	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:76}},
	React.createElement(Link,{to:"/contact",__source:{fileName:_jsxFileName,lineNumber:77}},'Contact'))))),







	React.createElement('section',{id:'main',__source:{fileName:_jsxFileName,lineNumber:85}},
	React.createElement('div',{className:'container-fluid',__source:{fileName:_jsxFileName,lineNumber:86}},
	React.createElement('div',{className:'row-fluid',__source:{fileName:_jsxFileName,lineNumber:87}},
	React.createElement('div',{className:'span12',__source:{fileName:_jsxFileName,lineNumber:88}},
	children))),



	React.createElement('div',{className:'row-fluid',__source:{fileName:_jsxFileName,lineNumber:93}},
	React.createElement('div',{className:'span12',__source:{fileName:_jsxFileName,lineNumber:94}},
	React.createElement('div',{className:'footer',__source:{fileName:_jsxFileName,lineNumber:95}},
	React.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:96}},'Copyright ',site.copyright.date,' © ',React.createElement(Link,{to:"/",__source:{fileName:_jsxFileName,lineNumber:96}},site.copyright.company),'. All rights reserved.'))))))));}}]);return Layout;}(Component);Layout.propTypes={breadcrumb:T.element,site:T.object.isRequired};Layout.defaultProps={breadcrumb:null,site:{}};










	function mapStateToProps(state){var 
	site=state.site;

	return {
	site:site};}exports.default=



	connect(mapStateToProps)(Layout);
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },

/***/ 1250:
/***/ function(module, exports) {

	module.exports = "$mobile-width: 320px;\n$tablet-width: 768px;\n$desktop-width: 1024px;\n\n@mixin mobile {\n  @media (min-width: #{$mobile-width}) {\n    @content;\n  }\n}\n\n@mixin tablet {\n  @media (min-width: #{$tablet-width}) {\n    @content;\n  }\n}\n\n@mixin desktop {\n  @media (min-width: #{$desktop-width}) {\n    @content;\n  }\n}\n\n.c-header {\n    position: fixed;\n    top: 0;\n    left: 0%;\n    width: 100%;\n    opacity: 0.95;\n    border-radius: 0 0 5px 5px;\n    background: #2a2a30;\n    background-size: 100%;\n    background-image: linear-gradient(top, #494852, #2a2a30);\n    border-bottom: 1px solid #1d1e21;\n    border-right: 1px solid #1d1e21;\n    border-left: 1px solid #1d1e21;\n    margin-bottom: 20px;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n    padding-right: 20px;\n    padding-left: 20px;\n    display: flex;\n    flex-wrap: wrap;\n\n    @include tablet {\n        left: 7%;\n        width: 86%;\n    }\n}\n\n.c-header__left {\n    flex: 1;\n    margin-left: 0;\n\n    @include tablet {\n    }\n}\n\n.c-header__right {\n    flex: 1;\n\n    @include tablet {\n    }\n}\n\n.c-header__logo {\n    margin: 0;\n    background: transparent url(/Apps/Site/Projects/Moria/Assets/Other/images/logo.png) no-repeat 0 7px;\n    background-size: auto 70%;\n    padding-left: 43px;\n}\n\n.c-header__title {\n    font-size: 22px;\n    color: #fff;\n}\n\n\n.c-nav {\n\n}\n\n.c-nav__item {\n    padding: 12px 0;\n    text-align: right;\n}\n\n.c-nav__link {\n    text-transform: uppercase;\n    padding: 10px 7px;\n    font-weight: bold;\n    color: #949494;\n    font-size: 14px;\n}\n\n.c-nav__link:hover {\n    color: #fff;\n}\n"

/***/ },

/***/ 1256:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Screen=__webpack_require__(1257);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Screen).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1257:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Projects/Moria/UI/Screens/Sets/Screen.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


	var _Default=__webpack_require__(1248);var _Default2=_interopRequireDefault(_Default);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var React=Framework.React;var ReactDOM=Framework.ReactDOM;var ReactNative=Framework.ReactNative;var PropTypes=Framework.PropTypes;var T=Framework.T;var connect=Framework.connect;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var Animated=Framework.Animated;var Dimensions=Framework.Dimensions;var Router=Framework.Router;var Route=Framework.Route;var Link=Framework.Link;var createStore=Framework.createStore;var browserHistory=Framework.browserHistory;var compose=Framework.compose;var applyMiddleware=Framework.applyMiddleware;var thunkMiddleware=Framework.thunkMiddleware;var Provider=Framework.Provider;var syncHistoryWithStore=Framework.syncHistoryWithStore;var routerReducer=Framework.routerReducer;var combineReducers=Framework.combineReducers;var createLogger=Framework.createLogger;var renderToString=Framework.renderToString;var 

	Screen=function(_Component){_inherits(Screen,_Component);
	function Screen(){_classCallCheck(this,Screen);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Screen).call(this));

	_this.state={};return _this;}_createClass(Screen,[{key:'render',value:function render()



	{
	return (
	React.createElement(_Default2.default,{__source:{fileName:_jsxFileName,lineNumber:15}},'Test'));}}]);return Screen;}(Component);exports.default=






	Screen;

/***/ }

});