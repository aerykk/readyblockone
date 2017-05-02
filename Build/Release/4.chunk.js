webpackJsonp([4],{

/***/ 1177:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Layout=__webpack_require__(1178);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Layout).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1178:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof (typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Projects/Esgaroth/UI/Layouts/Stoke/Layout.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var 
	React=Framework.React;var ReactDOM=Framework.ReactDOM;var ReactNative=Framework.ReactNative;var PropTypes=Framework.PropTypes;var T=Framework.T;var connect=Framework.connect;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var Animated=Framework.Animated;var Dimensions=Framework.Dimensions;var Router=Framework.Router;var Route=Framework.Route;var Link=Framework.Link;var createStore=Framework.createStore;var browserHistory=Framework.browserHistory;var compose=Framework.compose;var applyMiddleware=Framework.applyMiddleware;var thunkMiddleware=Framework.thunkMiddleware;var Provider=Framework.Provider;var syncHistoryWithStore=Framework.syncHistoryWithStore;var routerReducer=Framework.routerReducer;var combineReducers=Framework.combineReducers;var createLogger=Framework.createLogger;var renderToString=Framework.renderToString;var 

	Layout=function(_Component){_inherits(Layout,_Component);












	function Layout(){_classCallCheck(this,Layout);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Layout).call(this));


	_this.state={
	showGames:false};return _this;}_createClass(Layout,[{key:'componentDidMount',value:function componentDidMount()



	{var _this2=this;
	if(typeof window!=='undefined'){
	document.body.style='background: #605F65 url(/Apps/Site/Projects/Esgaroth/Assets/Other/images/linen-lighter.png);';
	document.getElementById('ui').style='background: transparent url(/Apps/Site/Projects/Esgaroth/Assets/Other/images/logo-bg.png) no-repeat -200px 0; background-size: auto 550px;';}


	Framework.getStyles(Framework.Platform.Env.isServer?__webpack_require__(420).readFileSync(__dirname+'/Layout.css').toString():__webpack_require__(1179),'stokelayout-',function(styles){_this2.setState({styles:styles});});}},{key:'render',value:function render()


	{var _props=
	this.props;var children=_props.children;var breadcrumb=_props.breadcrumb;var games=_props.games;var site=_props.site;



	return Framework.wrapStyles(this.state.styles,
	React.createElement(View,{__source:{fileName:_jsxFileName,lineNumber:40}},
	React.createElement(View,{className:'container',__source:{fileName:_jsxFileName,lineNumber:41}},
	this.state.styles&&
	React.createElement(View,{styles:'c-header',__source:{fileName:_jsxFileName,lineNumber:43}},
	React.createElement(View,{styles:'c-header__left',__source:{fileName:_jsxFileName,lineNumber:44}},
	React.createElement('h1',{styles:'c-header__logo',__source:{fileName:_jsxFileName,lineNumber:45}},
	React.createElement(Link,{to:"/",styles:'c-header__title',__source:{fileName:_jsxFileName,lineNumber:46}},
	site.title))),



	React.createElement(View,{styles:'c-header__right',__source:{fileName:_jsxFileName,lineNumber:51}},
	React.createElement('ul',{styles:'c-nav',__source:{fileName:_jsxFileName,lineNumber:52}},
	React.createElement('li',{styles:'c-nav__item',__source:{fileName:_jsxFileName,lineNumber:53}},
	React.createElement(Link,{to:"/about",styles:'c-nav__link',__source:{fileName:_jsxFileName,lineNumber:54}},'OUR STORY'),
	React.createElement(Link,{to:"/careers",styles:'c-nav__link',__source:{fileName:_jsxFileName,lineNumber:55}},'CAREERS'),
	React.createElement(Link,{to:"/games",styles:'c-nav__link',__source:{fileName:_jsxFileName,lineNumber:56}},'GAMES'),
	React.createElement(Link,{to:"/news",styles:'c-nav__link',__source:{fileName:_jsxFileName,lineNumber:57}},'NEWS'),
	React.createElement(Link,{to:"/login",styles:'c-nav__link',__source:{fileName:_jsxFileName,lineNumber:58}},'LOGIN'))))),






	typeof breadcrumb==='string'&&React.createElement(View,{dangerouslySetInnerHTML:{__html:breadcrumb},__source:{fileName:_jsxFileName,lineNumber:65}}),
	(typeof breadcrumb==='undefined'?'undefined':_typeof(breadcrumb))==='object'&&breadcrumb,
	!breadcrumb&&
	React.createElement('ul',{className:'breadcrumb',__source:{fileName:_jsxFileName,lineNumber:68}},
	React.createElement('li',{className:'active',__source:{fileName:_jsxFileName,lineNumber:69}},
	React.createElement(Link,{to:"/",__source:{fileName:_jsxFileName,lineNumber:70}},React.createElement('i',{className:'icon-home',__source:{fileName:_jsxFileName,lineNumber:70}}),' ',site.title))),




	React.createElement('nav',{id:'secondary',className:'main-nav black-box tex',__source:{fileName:_jsxFileName,lineNumber:75}},
	React.createElement(View,{className:'nav-menu box',__source:{fileName:_jsxFileName,lineNumber:76}},
	React.createElement('ul',{className:'nav nav-list',__source:{fileName:_jsxFileName,lineNumber:77}},
	React.createElement('li',{className:'active',__source:{fileName:_jsxFileName,lineNumber:78}},
	React.createElement(Link,{to:"/",__source:{fileName:_jsxFileName,lineNumber:79}},
	React.createElement('i',{className:'icon-home',__source:{fileName:_jsxFileName,lineNumber:80}}),' Home')),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:83}},
	React.createElement(Link,{to:"/about",__source:{fileName:_jsxFileName,lineNumber:84}},'About')),



	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:88}},
	React.createElement(Link,{to:"/contact",__source:{fileName:_jsxFileName,lineNumber:89}},'Contact')),



	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:93}},
	React.createElement(Link,{to:"/games",__source:{fileName:_jsxFileName,lineNumber:94}},
	React.createElement('i',{className:'icon-book',__source:{fileName:_jsxFileName,lineNumber:95}}),' Games',
	React.createElement('span',{className:'pull-right badge',__source:{fileName:_jsxFileName,lineNumber:96}},games.list.length))),


	games.list.map(function(item){
	return (
	React.createElement('li',{key:item.code,__source:{fileName:_jsxFileName,lineNumber:101}},
	React.createElement(Link,{to:"/game/"+item.code,__source:{fileName:_jsxFileName,lineNumber:102}},item.title)));})))),







	React.createElement('section',{id:'main',__source:{fileName:_jsxFileName,lineNumber:110}},
	React.createElement(View,{className:'container-fluid',__source:{fileName:_jsxFileName,lineNumber:111}},
	React.createElement(View,{className:'row-fluid',__source:{fileName:_jsxFileName,lineNumber:112}},
	React.createElement(View,{className:'span12',__source:{fileName:_jsxFileName,lineNumber:113}},
	children))),



	React.createElement(View,{className:'row-fluid',__source:{fileName:_jsxFileName,lineNumber:118}},
	React.createElement(View,{className:'span12',__source:{fileName:_jsxFileName,lineNumber:119}},
	React.createElement(View,{className:'footer',__source:{fileName:_jsxFileName,lineNumber:120}},
	React.createElement(View,{__source:{fileName:_jsxFileName,lineNumber:121}},'Copyright ',site.copyright.date,' © ',React.createElement(Link,{to:"/",__source:{fileName:_jsxFileName,lineNumber:121}},site.copyright.company),'. All rights reserved.'))))))));}}]);return Layout;}(Component);Layout.propTypes={breadcrumb:T.element,games:T.object.isRequired,site:T.object.isRequired};Layout.defaultProps={breadcrumb:null,games:[],site:{}};










	function mapStateToProps(state){var 
	games=state.games;var site=state.site;

	return {
	games:games,
	site:site};}exports.default=



	connect(mapStateToProps)(Layout);
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },

/***/ 1179:
/***/ function(module, exports) {

	module.exports = "$mobile-width: 320px;\n$tablet-width: 768px;\n$desktop-width: 1024px;\n\n@mixin mobile {\n  @media (min-width: #{$mobile-width}) {\n    @content;\n  }\n}\n\n@mixin tablet {\n  @media (min-width: #{$tablet-width}) {\n    @content;\n  }\n}\n\n@mixin desktop {\n  @media (min-width: #{$desktop-width}) {\n    @content;\n  }\n}\n\n.c-header {\n    position: fixed;\n    top: 0;\n    left: 0%;\n    width: 100%;\n    opacity: 0.95;\n    border-radius: 0 0 5px 5px;\n    background: #2a2a30;\n    background-size: 100%;\n    background-image: linear-gradient(top, #494852, #2a2a30);\n    border-bottom: 1px solid #1d1e21;\n    border-right: 1px solid #1d1e21;\n    border-left: 1px solid #1d1e21;\n    margin-bottom: 20px;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n    padding-right: 20px;\n    padding-left: 20px;\n    display: flex;\n    flex-wrap: wrap;\n\n    @include tablet {\n        left: 7%;\n        width: 86%;\n    }\n}\n\n.c-header__left {\n    flex: 1;\n    margin-left: 0;\n\n    @include tablet {\n    }\n}\n\n.c-header__right {\n    flex: 1;\n\n    @include tablet {\n    }\n}\n\n.c-header__logo {\n    margin: 0;\n    background: transparent url(/Apps/Site/Projects/Esgaroth/Assets/Other/images/logo.png) no-repeat 0 7px;\n    background-size: auto 70%;\n    padding-left: 43px;\n}\n\n.c-header__title {\n    font-size: 22px;\n    color: #fff;\n}\n\n\n.c-nav {\n  \n}\n\n.c-nav__item {\n    padding: 12px 0;\n    text-align: right;\n}\n\n.c-nav__link {\n    text-transform: uppercase;\n    padding: 10px 7px;\n    font-weight: bold;\n    color: #949494;\n    font-size: 14px;\n}\n\n.c-nav__link:hover {\n    color: #fff;\n}\n"

/***/ },

/***/ 1180:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Screen=__webpack_require__(1181);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Screen).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1181:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Projects/Esgaroth/UI/Screens/Games/Screen.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


	var _Stoke=__webpack_require__(1177);var _Stoke2=_interopRequireDefault(_Stoke);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var React=Framework.React;var ReactDOM=Framework.ReactDOM;var ReactNative=Framework.ReactNative;var PropTypes=Framework.PropTypes;var T=Framework.T;var connect=Framework.connect;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var Animated=Framework.Animated;var Dimensions=Framework.Dimensions;var Router=Framework.Router;var Route=Framework.Route;var Link=Framework.Link;var createStore=Framework.createStore;var browserHistory=Framework.browserHistory;var compose=Framework.compose;var applyMiddleware=Framework.applyMiddleware;var thunkMiddleware=Framework.thunkMiddleware;var Provider=Framework.Provider;var syncHistoryWithStore=Framework.syncHistoryWithStore;var routerReducer=Framework.routerReducer;var combineReducers=Framework.combineReducers;var createLogger=Framework.createLogger;var renderToString=Framework.renderToString;var 

	Screen=function(_Component){_inherits(Screen,_Component);function Screen(){_classCallCheck(this,Screen);return _possibleConstructorReturn(this,Object.getPrototypeOf(Screen).apply(this,arguments));}_createClass(Screen,[{key:'render',value:function render()




	{var _props=
	this.props;var site=_props.site;var games=_props.games;

	var breadcrumb=
	React.createElement('ul',{className:'breadcrumb',__source:{fileName:_jsxFileName,lineNumber:15}},
	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:16}},React.createElement('a',{href:'/',__source:{fileName:_jsxFileName,lineNumber:16}},React.createElement('i',{className:'icon-home',__source:{fileName:_jsxFileName,lineNumber:16}}),' ',site.title)),
	React.createElement('li',{className:'active',__source:{fileName:_jsxFileName,lineNumber:17}},React.createElement('a',{href:'/games',__source:{fileName:_jsxFileName,lineNumber:17}},'Games')));



	return (
	React.createElement(_Stoke2.default,{breadcrumb:breadcrumb,__source:{fileName:_jsxFileName,lineNumber:22}},
	React.createElement(View,{style:{padding:"20px"},__source:{fileName:_jsxFileName,lineNumber:23}},
	React.createElement('ul',{className:'games',__source:{fileName:_jsxFileName,lineNumber:24}},
	games.list.map(function(item,i){
	var posList=[
	'0% 40%',
	'100% 40%',
	'20% 40%',
	'0% 40%',
	'20% 40%'];

	var pos=posList[i];
	return (
	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:35}},
	React.createElement(Link,{to:"/game/"+item.code,className:'button large',style:{background:"url(http://wallpapercave.com/wp/oE14KTB.jpg) no-repeat "+pos,color:"#fff",boxShadow:"0 1px 32px rgba(0, 0, 0, 0.7), inset 0 1px 18px rgba(255, 255, 255, 0.5)",border:"1px solid #444"},__source:{fileName:_jsxFileName,lineNumber:36}},
	React.createElement('i',{className:"icon-"+item.icon,__source:{fileName:_jsxFileName,lineNumber:37}}),
	React.createElement('span',{__source:{fileName:_jsxFileName,lineNumber:38}},item.title))));})))));}}]);return Screen;}(Component);Screen.propTypes={games:T.object.isRequired};











	function mapStateToProps(state){var 
	site=state.site;var games=state.games;

	return {
	site:site,
	games:games};}exports.default=



	connect(mapStateToProps)(Screen);

/***/ },

/***/ 1192:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Dashboard=__webpack_require__(1193);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Dashboard).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1193:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Projects/Esgaroth/UI/Screens/Dashboard/Dashboard.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


	var _Stoke=__webpack_require__(1177);var _Stoke2=_interopRequireDefault(_Stoke);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var React=Framework.React;var ReactDOM=Framework.ReactDOM;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var connect=Framework.connect;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var 

	Screen=function(_Component){_inherits(Screen,_Component);function Screen(){_classCallCheck(this,Screen);return _possibleConstructorReturn(this,Object.getPrototypeOf(Screen).apply(this,arguments));}_createClass(Screen,[{key:'render',value:function render()
	{
	return (
	React.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:9}},'Dashboard'));}}]);return Screen;}(Component);




	function mapStateToProps(state){
	return {};}exports.default=



	connect(mapStateToProps)(Screen);

/***/ }

});