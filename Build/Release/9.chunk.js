webpackJsonp([9],{

/***/ 1330:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Launch=__webpack_require__(1331);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Launch).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1331:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


	var _Default=__webpack_require__(1332);var _Default2=_interopRequireDefault(_Default);
	var _Markdown=__webpack_require__(1207);var _Markdown2=_interopRequireDefault(_Markdown);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(4);var React=Framework.React;var ReactDOM=Framework.ReactDOM;var PropTypes=Framework.PropTypes;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var 

	Screen=function(_Component){_inherits(Screen,_Component);
	function Screen(){_classCallCheck(this,Screen);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Screen).call(this));

	_this.state={
	page:{
	title:'',
	body:'',
	items:[],
	options:{}}};return _this;}_createClass(Screen,[{key:'onPageChange',value:function onPageChange(



	state){
	if(JSON.stringify(this.state.page)===JSON.stringify(state)){
	return;}


	this.setState({page:state});}},{key:'render',value:function render()

	{var _this2=this;
	var page=this.props.location.pathname.replace('/','');

	if(!page){page='home';}

	var breadcrumb=null;

	this.state.page.items.forEach(function(item){
	if(item.title==='Breadcrumb'){
	breadcrumb=item.body;}});




	this.state.page.options.slim=page==='home';

	return (
	React.createElement(_Default2.default,{breadcrumb:breadcrumb},
	!this.state.page.options.slim&&
	React.createElement('div',{className:'box'},
	React.createElement('div',{className:'tab-header'},
	this.state.page.title),

	React.createElement('div',{className:'padded'},
	React.createElement(_Markdown2.default,{src:"/App/Game/Sites/Esgaroth/Pages/"+page+".md",onChange:function onChange(state){return _this2.onPageChange(state);}}))),



	this.state.page.options.slim&&
	React.createElement(_Markdown2.default,{src:"/App/Game/Sites/Esgaroth/Pages/"+page+".md",onChange:function onChange(state){return _this2.onPageChange(state);}})));}}]);return Screen;}(Component);exports.default=






	Screen;

/***/ },

/***/ 1332:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Default=__webpack_require__(1333);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Default).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1333:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


	var _reactRouter=__webpack_require__(21);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(4);var React=Framework.React;var ReactDOM=Framework.ReactDOM;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var 

	Layout=function(_Component){_inherits(Layout,_Component);
	function Layout(){_classCallCheck(this,Layout);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Layout).call(this));


	_this.state={};return _this;}_createClass(Layout,[{key:'render',value:function render()

	{
	return (
	React.createElement(View,{style:styles.container},
	React.createElement('div',{className:'container'},
	React.createElement('div',{className:'top-nav'},
	React.createElement('div',{className:'container-fluid'},
	React.createElement('div',{className:'row-fluid search-button-bar-container'},
	React.createElement('div',{className:'span12'},
	React.createElement('h1',{className:'pull-left logo'},
	React.createElement(_reactRouter.Link,{to:"/"},'Stoke Games')))))),








	this.props.breadcrumb?React.createElement('div',{dangerouslySetInnerHTML:{__html:this.props.breadcrumb}}):
	React.createElement('ul',{className:'breadcrumb'},
	React.createElement('li',{className:'active'},
	React.createElement(_reactRouter.Link,{to:"/"},React.createElement('i',{className:'icon-home'}),' Stoke Games'))),




	React.createElement('nav',{id:'secondary',className:'main-nav black-box tex'},
	React.createElement('div',{className:'nav-menu box'},
	React.createElement('ul',{className:'nav nav-list'},
	React.createElement('li',{className:'active'},
	React.createElement(_reactRouter.Link,{to:"/"},
	React.createElement('i',{className:'icon-home'}),' Home')),


	React.createElement('li',null,
	React.createElement(_reactRouter.Link,{to:"/games"},
	React.createElement('i',{className:'icon-book'}),' Games',
	React.createElement('span',{className:'pull-right badge'},gameList.length))),


	React.createElement('li',{className:'nav-header'},'Games'),
	gameList.map(function(gameItem){
	return (
	React.createElement('li',{key:gameItem.code},
	React.createElement(_reactRouter.Link,{to:"/games/"+gameItem.code},React.createElement('i',{className:'icon-folder-close'}),' ',gameItem.title)));})))),







	React.createElement('section',{id:'main'},
	React.createElement('div',{className:'container-fluid'},
	React.createElement('div',{className:'row-fluid'},
	React.createElement('div',{className:'span12'},
	this.props.children))),



	React.createElement('div',{className:'row-fluid'},
	React.createElement('div',{className:'span12'},
	React.createElement('div',{className:'footer'},
	React.createElement('div',null,'Copyright 2013-',new Date().getFullYear(),' © ',React.createElement(_reactRouter.Link,{to:"/"},'Stoke Games'),'. All rights reserved.'))))))));}}]);return Layout;}(Component);










	var styles={};exports.default=


	Layout;

/***/ }

});