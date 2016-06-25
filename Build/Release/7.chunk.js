webpackJsonp([7],{

/***/ 1316:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Dashboard=__webpack_require__(1317);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Dashboard).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1317:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


	var _Stoke=__webpack_require__(1297);var _Stoke2=_interopRequireDefault(_Stoke);
	var _Markdown=__webpack_require__(1207);var _Markdown2=_interopRequireDefault(_Markdown);

	var _reactRedux=__webpack_require__(234);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(4);var React=Framework.React;var ReactDOM=Framework.ReactDOM;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var 

	Screen=function(_Component){_inherits(Screen,_Component);function Screen(){_classCallCheck(this,Screen);return _possibleConstructorReturn(this,Object.getPrototypeOf(Screen).apply(this,arguments));}_createClass(Screen,[{key:'render',value:function render()
	{

	return (
	React.createElement('div',null,'Dashboard'));}}]);return Screen;}(Component);




	Screen.propTypes={};


	function mapStateToProps(state){
	return {};}exports.default=



	(0,_reactRedux.connect)(mapStateToProps)(Screen);

/***/ }

});