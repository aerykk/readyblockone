webpackJsonp([5],{

/***/ 1226:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Screen=__webpack_require__(1227);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Screen).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1227:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Projects/Lorien/UI/Screens/Home/Screen.js',_box;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


	var _Default=__webpack_require__(1228);var _Default2=_interopRequireDefault(_Default);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else {obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var React=Framework.React;var ReactDOM=Framework.ReactDOM;var PropTypes=Framework.PropTypes;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var 

	Screen=function(_Component){_inherits(Screen,_Component);function Screen(){_classCallCheck(this,Screen);return _possibleConstructorReturn(this,Object.getPrototypeOf(Screen).apply(this,arguments));}_createClass(Screen,[{key:'render',value:function render()
	{var _this2=this;
	return (
	React.createElement(_Default2.default,{__source:{fileName:_jsxFileName,lineNumber:9}},
	React.createElement(View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:10}},
	React.createElement(View,{style:styles.eventChooser,__source:{fileName:_jsxFileName,lineNumber:11}},
	React.createElement(View,{style:_extends({},styles.box,{'background-image':'url(/App/Game/Assets/Other/Events/shoreline.jpg)'}),onClick:function onClick(){return _this2.selectEvent(1);},__source:{fileName:_jsxFileName,lineNumber:12}},'May 31st - Shoreline Cleanup'),
	React.createElement(View,{style:styles.box,onClick:function onClick(){return _this2.selectEvent(2);},__source:{fileName:_jsxFileName,lineNumber:13}},'June 5th - Children Run'),
	React.createElement(View,{style:styles.box,onClick:function onClick(){return _this2.selectEvent(3);},__source:{fileName:_jsxFileName,lineNumber:14}},'Sept 10th - Paws for a Cause Walk'),
	React.createElement(View,{style:styles.box,onClick:function onClick(){return _this2.selectEvent(4);},__source:{fileName:_jsxFileName,lineNumber:15}},'December TBD - Food bank & Christmas Baurea')),

	React.createElement(View,{style:styles.eventDetails,__source:{fileName:_jsxFileName,lineNumber:17}},
	details))));}}]);return Screen;}(Component);








	var styles={
	container:{
	'margin':'0 auto'},

	eventChooser:{
	'padding-top':'50px',
	'width':'2000px',
	'clear':'both',
	'overflow-x':'scroll',
	'background-color':'#eee'},

	eventDetails:{
	'background':'#eee',
	'border-radius':'5px',
	'padding':'100px'},

	box:(_box={
	'float':'left',
	'font-family':'"Press Start 2P"',
	'font-size':'17px',
	'text-align':'center',
	'color':'#fff',
	'width':'250px',
	'height':'180px',
	'margin':'30px',
	'padding':'18px 15px'},_defineProperty(_box,'color',
	'#000'),_defineProperty(_box,
	'background','#eee url(/Apps/Site/Projects/Lorien/Assets/Images/Events/default.png) no-repeat 0 50%'),_defineProperty(_box,
	'background-size','contain'),_defineProperty(_box,
	'border-radius','5px'),_box)};exports.default=



	Screen;

/***/ },

/***/ 1228:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Layout=__webpack_require__(1229);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Layout).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1229:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Projects/Lorien/UI/Layouts/Default/Layout.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


	var _reactRouter=__webpack_require__(22);
	var _reactRedux=__webpack_require__(239);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var React=Framework.React;var ReactDOM=Framework.ReactDOM;var PropTypes=Framework.PropTypes;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var 

	Layout=function(_Component){_inherits(Layout,_Component);









	function Layout(){_classCallCheck(this,Layout);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Layout).call(this));


	_this.state={};return _this;}_createClass(Layout,[{key:'componentDidMount',value:function componentDidMount()



	{var _this2=this;
	Framework.getStyles(Framework.Platform.Env.isServer?__webpack_require__(420).readFileSync(__dirname+'/Layout.css').toString():__webpack_require__(1230),'stokelayout-',function(styles){
	_this2.setState({
	styles:styles});});}},{key:'render',value:function render()




	{var 
	children=this.props.children;

	if(!this.state.styles){return React.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:35}});}

	return Framework.wrapStyles(this.state.styles,
	React.createElement(View,{__source:{fileName:_jsxFileName,lineNumber:38}},
	children));}}]);return Layout;}(Component);Layout.propTypes={site:PropTypes.object.isRequired};Layout.defaultProps={breadcrumb:null,site:{}};





	function mapStateToProps(state){var 
	site=state.site;

	return {
	site:site};}exports.default=



	(0,_reactRedux.connect)(mapStateToProps)(Layout);
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },

/***/ 1230:
/***/ function(module, exports) {

	module.exports = "$mobile-width: 320px;\n$tablet-width: 768px;\n$desktop-width: 1024px;\n\n@mixin mobile {\n  @media (min-width: #{$mobile-width}) {\n    @content;\n  }\n}\n\n@mixin tablet {\n  @media (min-width: #{$tablet-width}) {\n    @content;\n  }\n}\n\n@mixin desktop {\n  @media (min-width: #{$desktop-width}) {\n    @content;\n  }\n}\n"

/***/ }

});