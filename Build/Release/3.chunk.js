webpackJsonp([3],{

/***/ 1087:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Screen=__webpack_require__(1088);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Screen).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1088:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof (typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Projects/Erebor/UI/Screens/Home/Screen.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


	var _Default=__webpack_require__(1089);var _Default2=_interopRequireDefault(_Default);
	var _Markdown=__webpack_require__(1092);var _Markdown2=_interopRequireDefault(_Markdown);

	var _Actions=__webpack_require__(1042);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var React=Framework.React;var ReactDOM=Framework.ReactDOM;var ReactNative=Framework.ReactNative;var PropTypes=Framework.PropTypes;var T=Framework.T;var connect=Framework.connect;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var Animated=Framework.Animated;var Dimensions=Framework.Dimensions;var Router=Framework.Router;var Route=Framework.Route;var Link=Framework.Link;var createStore=Framework.createStore;var browserHistory=Framework.browserHistory;var compose=Framework.compose;var applyMiddleware=Framework.applyMiddleware;var thunkMiddleware=Framework.thunkMiddleware;var Provider=Framework.Provider;var syncHistoryWithStore=Framework.syncHistoryWithStore;var routerReducer=Framework.routerReducer;var combineReducers=Framework.combineReducers;var createLogger=Framework.createLogger;var renderToString=Framework.renderToString;var 

	Screen=function(_Component){_inherits(Screen,_Component);



	function Screen(){_classCallCheck(this,Screen);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Screen).call(this));


	_this.state={
	page:{
	title:''}};return _this;}_createClass(Screen,[{key:'onPageChange',value:function onPageChange(




	state){
	this.setState({
	page:state});}},{key:'render',value:function render()



	{var _this2=this;var _props=
	this.props;var site=_props.site;var location=_props.location;

	var content=
	React.createElement(_Markdown2.default,{src:"/Apps/Site/Projects/Erebor/Pages/"+(location||'home')+".md",onChange:function onChange(state){return _this2.onPageChange(state);},__source:{fileName:_jsxFileName,lineNumber:33}});


	var page=this.state.page;

	return (
	React.createElement(_Default2.default,{__source:{fileName:_jsxFileName,lineNumber:39}},
	content));}}]);return Screen;}(Component);Screen.propTypes={};





	function mapStateToProps(state){var 
	site=state.site;var routing=state.routing;


	var location=null;
	if(typeof routing.locationBeforeTransitions==='string'){
	location=routing.locationBeforeTransitions.replace('/','');}else 
	if(_typeof(routing.locationBeforeTransitions)==='object'&&routing.locationBeforeTransitions){
	location=routing.locationBeforeTransitions.pathname.replace(/^\//,'').replace(/\/$/,'');}else 
	if(typeof window!=='undefined'){
	location=window.location.pathname.replace('/','');}


	return {
	site:site,
	location:location};}exports.default=



	connect(mapStateToProps)(Screen);

/***/ },

/***/ 1089:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Layout=__webpack_require__(1090);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Layout).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1090:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Projects/Erebor/UI/Layouts/Default/Layout.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var 
	React=Framework.React;var ReactDOM=Framework.ReactDOM;var ReactNative=Framework.ReactNative;var PropTypes=Framework.PropTypes;var T=Framework.T;var connect=Framework.connect;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var Animated=Framework.Animated;var Dimensions=Framework.Dimensions;var Router=Framework.Router;var Route=Framework.Route;var Link=Framework.Link;var createStore=Framework.createStore;var browserHistory=Framework.browserHistory;var compose=Framework.compose;var applyMiddleware=Framework.applyMiddleware;var thunkMiddleware=Framework.thunkMiddleware;var Provider=Framework.Provider;var syncHistoryWithStore=Framework.syncHistoryWithStore;var routerReducer=Framework.routerReducer;var combineReducers=Framework.combineReducers;var createLogger=Framework.createLogger;var renderToString=Framework.renderToString;var 

	Layout=function(_Component){_inherits(Layout,_Component);










	function Layout(){_classCallCheck(this,Layout);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Layout).call(this));


	_this.state={
	slogan:_this.getRandomSlogan()};return _this;}_createClass(Layout,[{key:'getRandomSlogan',value:function getRandomSlogan()



	{
	var slogans=[
	'"Be the change that you wish to see in the world" - Mahatma Gandhi',
	'"Success is the progressive realization of a worthy ideal" - Napoleon Hill',
	'"Whatever you are, be a good one." - Abraham Lincoln',
	'"People buy into the leader before they buy into the vision." - John Maxwell',
	'"An eye for an eye would make the whole world blind" - Gandhi',
	'"What I did tell you is dont talk about it, be about it" - Eric Thomas',
	'"The last excuse I made was yesterday" - Eric Thomas',
	'"Thoughts are things, so why not choose great ones?" - Napoleon Hill',
	'"If you FAIL, never give up because FAIL means "First Attempt In Learning"',
	'"What I want for myself, I want for others" - Wallace D Wattles',
	'"We invented the word luck to express the known effects of unknown causes" - Voltaire',
	'"Poor People Spend First Then Invest What’s Left, Rich People Invest First Then Spend What’s Left“ - Jim Rohn',
	'"Money doesnt talk, but it sure as hell can hear. and if you call, it’ll come." - Ray Stanford',
	'"The law of attraction is a secondary law. The law of vibration is the primary law." - Bob Proctor',
	'"Our thoughts control our feeelings. and our feelings control our actions." - Napoleon Hill',
	'"Innovation is rewarded. Execution is worshipped." – Eric Thomas',
	'"We are what we repeatedly do. Excellence then, is not an act, but a habit." - Aristotle',
	'"The two most important days in your life are the day you are born... and the day you find out why." - Mark Twain',
	'"Those who can see the invisible, can do the impossible"',
	'"To do unreasonable things, you need to be unreasonable"',
	'"Everybody thats had a shower has had a great idea, its the ones that dry off that make a difference"'];


	return slogans[Math.floor(Math.random()*slogans.length)];}},{key:'setRandomSlogan',value:function setRandomSlogan()


	{var _this2=this;
	this.setState({slogan:this.getRandomSlogan()});

	setTimeout(function(){return _this2.setRandomSlogan();},5000);}},{key:'componentDidMount',value:function componentDidMount()


	{var _this3=this;
	Framework.getStyles(Framework.Platform.Env.isServer?__webpack_require__(420).readFileSync(__dirname+'/Layout.css').toString():__webpack_require__(1091),'stokelayout-',function(styles){
	_this3.setState({
	styles:styles});});



	this.setRandomSlogan();}},{key:'render',value:function render()


	{var _props=
	this.props;var children=_props.children;var site=_props.site;

	return Framework.wrapStyles(this.state.styles,
	React.createElement(View,{__source:{fileName:_jsxFileName,lineNumber:71}},
	React.createElement('nav',{id:'navigation-social',className:'box-2',__source:{fileName:_jsxFileName,lineNumber:72}},
	React.createElement('ul',{className:'style-2',__source:{fileName:_jsxFileName,lineNumber:73}},
	React.createElement('li',{className:'first',__source:{fileName:_jsxFileName,lineNumber:74}},
	React.createElement('a',{href:'javascript:;',__source:{fileName:_jsxFileName,lineNumber:75}},' ')),

	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:77}},
	React.createElement('a',{href:'http://ericmuyser.com',title:'Go home',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:78}},
	React.createElement('span',{className:'icon',__source:{fileName:_jsxFileName,lineNumber:79}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:80}},'Home'))),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:83}},
	React.createElement('a',{href:'http://github.com/ericmuyser/',title:'Go to GitHub',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:84}},
	React.createElement('span',{className:'icon green',__source:{fileName:_jsxFileName,lineNumber:85}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:86}},'GitHub'))),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:89}},
	React.createElement('a',{href:'http://stackoverflow.com/users/119301/eric-muyser/',title:'Go to Stack Overflow',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:90}},
	React.createElement('span',{className:'icon green',__source:{fileName:_jsxFileName,lineNumber:91}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:92}},'Stack Overflow'))),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:95}},
	React.createElement('a',{href:'http://superuser.com/users/20454/eric-muyser/',title:'Go to Super User',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:96}},
	React.createElement('span',{className:'icon green',__source:{fileName:_jsxFileName,lineNumber:97}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:98}},'Super User'))),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:101}},
	React.createElement('a',{href:'http://serverfault.com/users/11696/eric-muyser',title:'Go to Server Fault',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:102}},
	React.createElement('span',{className:'icon green',__source:{fileName:_jsxFileName,lineNumber:103}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:104}},'Server Fault'))),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:107}},
	React.createElement('a',{href:'http://snipplr.com/users/ericmuyser',title:'Go to Snipplr',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:108}},
	React.createElement('span',{className:'icon green',__source:{fileName:_jsxFileName,lineNumber:109}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:110}},'Snipplr'))),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:113}},
	React.createElement('a',{href:'https://gist.github.com/ericmuyser',title:'Go to Gist',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:114}},
	React.createElement('span',{className:'icon green',__source:{fileName:_jsxFileName,lineNumber:115}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:116}},'Gist'))),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:119}},
	React.createElement('a',{href:'http://www.html5gamedevs.com/profile/20039-eric-muyser/',title:'Go to HTML5 Gamedevs',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:120}},
	React.createElement('span',{className:'icon green',__source:{fileName:_jsxFileName,lineNumber:121}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:122}},'HTML5 Gamedevs'))),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:125}},
	React.createElement('a',{href:'http://cboard.cprogramming.com/member.php?u=12405',title:'Go to CBoard',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:126}},
	React.createElement('span',{className:'icon green',__source:{fileName:_jsxFileName,lineNumber:127}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:128}},'CBoard'))),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:131}},
	React.createElement('a',{href:'http://www.gamedev.net/community/forums/viewprofile.asp?mode=cp&ID=146656',title:'Go to GameDev',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:132}},
	React.createElement('span',{className:'icon green',__source:{fileName:_jsxFileName,lineNumber:133}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:134}},'GameDev'))),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:137}},
	React.createElement('a',{href:'http://www.facebook.com/ericmuyser',title:'Go to Facebook',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:138}},
	React.createElement('span',{className:'icon blue',__source:{fileName:_jsxFileName,lineNumber:139}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:140}},'Facebook'))),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:143}},
	React.createElement('a',{href:'http://twitter.com/ericmuyser/',title:'Go to Twitter',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:144}},
	React.createElement('span',{className:'icon blue',__source:{fileName:_jsxFileName,lineNumber:145}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:146}},'Twitter'))),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:149}},
	React.createElement('a',{href:'http://www.youtube.com/user/EricMuyser',title:'Go to YouTube',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:150}},
	React.createElement('span',{className:'icon blue',__source:{fileName:_jsxFileName,lineNumber:151}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:152}},'YouTube'))),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:155}},
	React.createElement('a',{href:'http://www.meetup.com/Rich-Vancouver/members/37119622/',title:'Go to Meetup',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:156}},
	React.createElement('span',{className:'icon blue',__source:{fileName:_jsxFileName,lineNumber:157}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:158}},'Meetup'))),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:161}},
	React.createElement('a',{href:'http://whatpulse.org/stats/users/327634/',title:'Go to WhatPulse',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:162}},
	React.createElement('span',{className:'icon blue',__source:{fileName:_jsxFileName,lineNumber:163}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:164}},'WhatPulse'))),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:167}},
	React.createElement('a',{href:'http://digg.com/users/ericmuyser',title:'Go to Digg',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:168}},
	React.createElement('span',{className:'icon blue',__source:{fileName:_jsxFileName,lineNumber:169}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:170}},'Digg'))),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:173}},
	React.createElement('a',{href:'http://myworld.ebay.ca/eric.muyser',title:'Go to eBay',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:174}},
	React.createElement('span',{className:'icon blue',__source:{fileName:_jsxFileName,lineNumber:175}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:176}},'eBay'))),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:179}},
	React.createElement('a',{href:'http://www.flickr.com/people/ericmuyser/',title:'Go to Flickr',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:180}},
	React.createElement('span',{className:'icon blue',__source:{fileName:_jsxFileName,lineNumber:181}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:182}},'Flickr'))),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:185}},
	React.createElement('a',{href:'http://ca.linkedin.com/in/ericmuyser/',title:'Go to LinkedIn',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:186}},
	React.createElement('span',{className:'icon blue',__source:{fileName:_jsxFileName,lineNumber:187}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:188}},'LinkedIn'))),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:191}},
	React.createElement('a',{href:'http://www.stumbleupon.com/stumbler/ericmuyser/',title:'Go to Stumble Upon',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:192}},
	React.createElement('span',{className:'icon blue',__source:{fileName:_jsxFileName,lineNumber:193}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:194}},'Stumble Upon'))),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:197}},
	React.createElement('a',{href:'http://www.imdb.com/user/ur10107022/boards/profile',title:'Go to IMDB',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:198}},
	React.createElement('span',{className:'icon blue',__source:{fileName:_jsxFileName,lineNumber:199}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:200}},'IMDB'))),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:203}},
	React.createElement('a',{href:'http://www.vimeo.com/user2849981/',title:'Go to Vimeo',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:204}},
	React.createElement('span',{className:'icon blue',__source:{fileName:_jsxFileName,lineNumber:205}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:206}},'Vimeo'))),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:209}},
	React.createElement('a',{href:'http://www.last.fm/user/ericmuyser/',title:'Go to Last FM',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:210}},
	React.createElement('span',{className:'icon blue',__source:{fileName:_jsxFileName,lineNumber:211}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:212}},'Last FM'))),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:215}},
	React.createElement('a',{href:'http://bit.ly/user/recent/ericmuyser',title:'Go to Bitly',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:216}},
	React.createElement('span',{className:'icon blue',__source:{fileName:_jsxFileName,lineNumber:217}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:218}},'Bitly'))),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:221}},
	React.createElement('a',{href:'http://delicious.com/ericmuyser',title:'Go to Delicious',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:222}},
	React.createElement('span',{className:'icon blue',__source:{fileName:_jsxFileName,lineNumber:223}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:224}},'Delicious'))),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:227}},
	React.createElement('a',{href:'http://steamcommunity.com/id/daemn/',title:'Go to Steam',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:228}},
	React.createElement('span',{className:'icon red',__source:{fileName:_jsxFileName,lineNumber:229}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:230}},'Steam'))),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:233}},
	React.createElement('a',{href:'http://raptr.com/daemn',title:'Go to Raptr',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:234}},
	React.createElement('span',{className:'icon red',__source:{fileName:_jsxFileName,lineNumber:235}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:236}},'Raptr'))),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:239}},
	React.createElement('a',{href:'http://www.desura.com/members/ericmuyser',title:'Go to Desura',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:240}},
	React.createElement('span',{className:'icon red',__source:{fileName:_jsxFileName,lineNumber:241}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:242}},'Desura'))),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:245}},
	React.createElement('a',{href:'http://live.xbox.com/en-US/profile/profile.aspx?GamerTag=EricMuyser',title:'Go to Xbox Live',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:246}},
	React.createElement('span',{className:'icon red',__source:{fileName:_jsxFileName,lineNumber:247}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:248}},'Xbox Live'))),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:251}},
	React.createElement('a',{href:'http://www.xfire.com/profile/daemn/',title:'Go to Xfire',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:252}},
	React.createElement('span',{className:'icon red',__source:{fileName:_jsxFileName,lineNumber:253}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:254}},'Xfire'))),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:257}},
	React.createElement('a',{href:'http://www.vworker.com/RentACoder/DotNet/SoftwareCoders/ShowBioInfo.aspx?lngAuthorId=6750277&intTabSelectedId=2',title:'Go to vWorker',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:258}},
	React.createElement('span',{className:'icon orange',__source:{fileName:_jsxFileName,lineNumber:259}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:260}},'vWorker'))),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:263}},
	React.createElement('a',{href:'http://www.freelancer.com/users/531446.html',title:'Go to Freelancer',target:'_blank',__source:{fileName:_jsxFileName,lineNumber:264}},
	React.createElement('span',{className:'icon orange',__source:{fileName:_jsxFileName,lineNumber:265}},' '),
	React.createElement('span',{className:'title',__source:{fileName:_jsxFileName,lineNumber:266}},'Freelancer'))),


	React.createElement('li',{className:'last',__source:{fileName:_jsxFileName,lineNumber:269}},React.createElement('a',{href:'javascript:;',__source:{fileName:_jsxFileName,lineNumber:269}},' ')))),



	React.createElement('div',{className:'subnav mobile',__source:{fileName:_jsxFileName,lineNumber:273}},
	React.createElement('select',{__source:{fileName:_jsxFileName,lineNumber:274}},
	React.createElement('option',{__source:{fileName:_jsxFileName,lineNumber:275}},'Home'),
	React.createElement('option',{__source:{fileName:_jsxFileName,lineNumber:276}},'About'))),



	React.createElement('div',{className:'subnav web',__source:{fileName:_jsxFileName,lineNumber:280}},
	React.createElement('nav',{className:'menu-main-header-container',__source:{fileName:_jsxFileName,lineNumber:281}},
	React.createElement('ul',{id:'menu-main-header',className:'nav nav-pills',__source:{fileName:_jsxFileName,lineNumber:282}},
	React.createElement('li',{className:'menu-item',__source:{fileName:_jsxFileName,lineNumber:283}},
	React.createElement('a',{href:'/',__source:{fileName:_jsxFileName,lineNumber:284}},'Home')),

	React.createElement('li',{className:'menu-item',__source:{fileName:_jsxFileName,lineNumber:286}},
	React.createElement('a',{href:'/about/',__source:{fileName:_jsxFileName,lineNumber:287}},'About')),

	React.createElement('li',{className:'menu-item',__source:{fileName:_jsxFileName,lineNumber:289}},
	React.createElement('a',{href:'/contact/',__source:{fileName:_jsxFileName,lineNumber:290}},'Contact')),

	React.createElement('li',{className:'menu-item',__source:{fileName:_jsxFileName,lineNumber:292}},
	React.createElement('a',{href:'/interests/',__source:{fileName:_jsxFileName,lineNumber:293}},'Interests')),

	React.createElement('li',{id:'menu-item-713',className:'menu-item dropdown',__source:{fileName:_jsxFileName,lineNumber:295}},
	React.createElement('a',{href:'/work/','data-target':'#dropdown-menu-572adb37bd73f',className:'dropdown-toggle','data-toggle':'dropdown',__source:{fileName:_jsxFileName,lineNumber:296}},'Work ',
	React.createElement('b',{className:'caret',__source:{fileName:_jsxFileName,lineNumber:297}})),

	React.createElement('ul',{id:'dropdown-menu-572adb37bd73f',className:'dropdown-menu',__source:{fileName:_jsxFileName,lineNumber:299}},
	React.createElement('li',{className:'menu-item',__source:{fileName:_jsxFileName,lineNumber:300}},
	React.createElement('a',{href:'/work/nodejs/',__source:{fileName:_jsxFileName,lineNumber:301}},'Node.js')),

	React.createElement('li',{className:'menu-item',__source:{fileName:_jsxFileName,lineNumber:303}},
	React.createElement('a',{href:'/work/php/',__source:{fileName:_jsxFileName,lineNumber:304}},'PHP')),

	React.createElement('li',{className:'menu-item',__source:{fileName:_jsxFileName,lineNumber:306}},
	React.createElement('a',{href:'/work/ruby-rails/',__source:{fileName:_jsxFileName,lineNumber:307}},'Ruby / Rails')),

	React.createElement('li',{className:'menu-item',__source:{fileName:_jsxFileName,lineNumber:309}},
	React.createElement('a',{href:'/work/python/',__source:{fileName:_jsxFileName,lineNumber:310}},'Python')),

	React.createElement('li',{className:'menu-item',__source:{fileName:_jsxFileName,lineNumber:312}},
	React.createElement('a',{href:'/work/jquery/',__source:{fileName:_jsxFileName,lineNumber:313}},'jQuery')),

	React.createElement('li',{className:'menu-item',__source:{fileName:_jsxFileName,lineNumber:315}},
	React.createElement('a',{href:'/work/flash/',__source:{fileName:_jsxFileName,lineNumber:316}},'Flash')),

	React.createElement('li',{className:'menu-item',__source:{fileName:_jsxFileName,lineNumber:318}},
	React.createElement('a',{href:'/work/cpp/',__source:{fileName:_jsxFileName,lineNumber:319}},'C++')),

	React.createElement('li',{className:'menu-item',__source:{fileName:_jsxFileName,lineNumber:321}},
	React.createElement('a',{href:'/work/titanium/',__source:{fileName:_jsxFileName,lineNumber:322}},'Titanium')),

	React.createElement('li',{className:'menu-item',__source:{fileName:_jsxFileName,lineNumber:324}},
	React.createElement('a',{href:'/work/lemonstand/',__source:{fileName:_jsxFileName,lineNumber:325}},'LemonStand')))),



	React.createElement('li',{className:'menu-item',__source:{fileName:_jsxFileName,lineNumber:329}},
	React.createElement('a',{href:'/resume/',__source:{fileName:_jsxFileName,lineNumber:330}},'Resume'))))),





	React.createElement('div',{id:'content',className:'pane',__source:{fileName:_jsxFileName,lineNumber:336}},
	React.createElement('ul',{className:'content-list',__source:{fileName:_jsxFileName,lineNumber:337}},
	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:338}},
	React.createElement('section',{id:'home',className:'active',__source:{fileName:_jsxFileName,lineNumber:339}},
	React.createElement('div',{className:'content-header',__source:{fileName:_jsxFileName,lineNumber:340}},
	React.createElement('h1',{__source:{fileName:_jsxFileName,lineNumber:341}},site.title),
	React.createElement('h2',{__source:{fileName:_jsxFileName,lineNumber:342}},this.state.slogan)),

	React.createElement('div',{className:'content-body-wrapper box-1',__source:{fileName:_jsxFileName,lineNumber:344}},
	React.createElement('div',{className:'content-body',__source:{fileName:_jsxFileName,lineNumber:345}},
	this.props.children)))))),







	React.createElement('div',{id:'loading',className:'top progress progress-info progress-striped active',style:{"right":"-350px","display":"block"},__source:{fileName:_jsxFileName,lineNumber:354}},
	React.createElement('div',{className:'bar',style:{"width":"100%"},__source:{fileName:_jsxFileName,lineNumber:355}})),


	React.createElement('div',{id:'commenting-system',__source:{fileName:_jsxFileName,lineNumber:358}},
	React.createElement('div',{id:'disqus_thread',__source:{fileName:_jsxFileName,lineNumber:359}},
	React.createElement('iframe',{id:'dsq-app11',name:'dsq-app11',allowtransparency:'true',frameborder:'0',scrolling:'no',tabindex:'0',title:'Disqus',width:'100%',src:'http://disqus.com/embed/comments/?base=default&version=3451144d0aa529e7c0f3cdd223d47134&f=ericmuyser&t_u=http%3A%2F%2Fericmuyser.com%2Fpage%2F2%2F&t_d=Eric%20Muyser%20-%20Eric%20Muyser&t_t=Eric%20Muyser%20-%20Eric%20Muyser&s_o=default',style:{"width":"1px","min-width":"100%","border":"none","overflow":"hidden","height":"321px"},horizontalscrolling:'no',verticalscrolling:'no',__source:{fileName:_jsxFileName,lineNumber:360}})))));}}]);return Layout;}(Component);Layout.propTypes={breadcrumb:T.element,site:T.object.isRequired};Layout.defaultProps={breadcrumb:null,site:{}};







	function mapStateToProps(state){var 
	site=state.site;

	return {
	site:site};}exports.default=



	connect(mapStateToProps)(Layout);
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },

/***/ 1091:
/***/ function(module, exports) {

	module.exports = "$mobile-width: 320px;\n$tablet-width: 768px;\n$desktop-width: 1024px;\n\n@mixin mobile {\n  @media (min-width: #{$mobile-width}) {\n    @content;\n  }\n}\n\n@mixin tablet {\n  @media (min-width: #{$tablet-width}) {\n    @content;\n  }\n}\n\n@mixin desktop {\n  @media (min-width: #{$desktop-width}) {\n    @content;\n  }\n}\n\n.c-header {\n    position: fixed;\n    top: 0;\n    left: 0%;\n    width: 100%;\n    opacity: 0.95;\n    border-radius: 0 0 5px 5px;\n    background: #2a2a30;\n    background-size: 100%;\n    background-image: linear-gradient(top, #494852, #2a2a30);\n    border-bottom: 1px solid #1d1e21;\n    border-right: 1px solid #1d1e21;\n    border-left: 1px solid #1d1e21;\n    margin-bottom: 20px;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n    padding-right: 20px;\n    padding-left: 20px;\n    display: flex;\n    flex-wrap: wrap;\n\n    @include tablet {\n        left: 7%;\n        width: 86%;\n    }\n}\n\n.c-header__left {\n    flex: 1;\n    margin-left: 0;\n\n    @include tablet {\n    }\n}\n\n.c-header__right {\n    flex: 1;\n\n    @include tablet {\n    }\n}\n\n.c-header__logo {\n    margin: 0;\n    background: transparent url(/Apps/Site/Projects/Esgaroth/Assets/Other/images/logo.png) no-repeat 0 7px;\n    background-size: auto 70%;\n    padding-left: 43px;\n}\n\n.c-header__title {\n    font-size: 22px;\n    color: #fff;\n}\n\n\n.c-nav {\n\n}\n\n.c-nav__item {\n    padding: 12px 0;\n    text-align: right;\n}\n\n.c-nav__link {\n    text-transform: uppercase;\n    padding: 10px 7px;\n    font-weight: bold;\n    color: #949494;\n    font-size: 14px;\n}\n\n.c-nav__link:hover {\n    color: #fff;\n}\n"

/***/ },

/***/ 1092:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Markdown=__webpack_require__(1093);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Markdown).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1093:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Shared/UI/Components/Markdown/Markdown.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



	__webpack_require__(689);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var React=Framework.React;var ReactDOM=Framework.ReactDOM;var ReactNative=Framework.ReactNative;var PropTypes=Framework.PropTypes;var T=Framework.T;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var Animated=Framework.Animated;var Dimensions=Framework.Dimensions;var Router=Framework.Router;var Route=Framework.Route;var Link=Framework.Link;var createStore=Framework.createStore;var browserHistory=Framework.browserHistory;var compose=Framework.compose;var applyMiddleware=Framework.applyMiddleware;var thunkMiddleware=Framework.thunkMiddleware;var Provider=Framework.Provider;var syncHistoryWithStore=Framework.syncHistoryWithStore;var routerReducer=Framework.routerReducer;var combineReducers=Framework.combineReducers;var createLogger=Framework.createLogger;var renderToString=Framework.renderToString;
	var marked=__webpack_require__(1094);
	var cheerio=__webpack_require__(1095);var 

	Markdown=function(_Component){_inherits(Markdown,_Component);








	function Markdown(){_classCallCheck(this,Markdown);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Markdown).call(this));


	_this.state={
	src:null,
	title:'',
	body:'',
	items:[],
	options:{}};return _this;}_createClass(Markdown,[{key:'setPage',value:function setPage(



	props,data){
	var title='';
	var body='';
	var items=[];
	var html=marked(data);
	var $=cheerio.load('<div id="top">'+html+'</div>');
	var $content=$('#top > #content');
	var $title=$('#top > h1');

	if($title.length){
	title=$title.remove().text();}


	if($content.length){
	body=$('<div>').append($content.nextAll()).html();

	$('#top > h2').each(function(){
	items.push({
	title:$(this).text(),
	body:$('<div>').append($(this).nextUntil('h2')).html()});});}else 


	{
	body=$('#top').html();}


	this.setState({
	title:title,
	body:body,
	items:items});


	props.onChange&&props.onChange(this.state);

	this.forceUpdate();}},{key:'fetchPage',value:function fetchPage(


	props){var _this2=this;
	if(props.src===this.state.src){return;}

	this.setState({src:props.src});

	if(Framework.Platform.Env.isServer){
	var fs=__webpack_require__(420);
	var data=fs.readFileSync(__dirname+'/../../../../../..'+props.src).toString();

	this.setPage(props,data);}else 
	{
	fetch(props.src).
	then(function(res){
	return res.text();}).

	then(function(data){
	_this2.setPage(props,data);}).
	catch(function(ex){
	_this2.setState({
	title:'Not found',
	body:'Could not find that page!',
	items:[]});


	props.onChange&&props.onChange(_this2.state);

	_this2.forceUpdate();});}}},{key:'componentWillMount',value:function componentWillMount()




	{
	this.fetchPage(this.props);}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(


	nextProps){
	this.fetchPage(nextProps);}},{key:'render',value:function render()


	{
	return (
	React.createElement('div',{
	ref:'md',
	dangerouslySetInnerHTML:{__html:this.state.body},__source:{fileName:_jsxFileName,lineNumber:108}}));}}]);return Markdown;}(Component);Markdown.propTypes={src:T.string};Markdown.defaultProps={src:null};exports.default=





	Markdown;
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },

/***/ 1094:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * marked - a markdown parser
	 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
	 * https://github.com/chjj/marked
	 */

	;(function() {

	/**
	 * Block-Level Grammar
	 */

	var block = {
	  newline: /^\n+/,
	  code: /^( {4}[^\n]+\n*)+/,
	  fences: noop,
	  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
	  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
	  nptable: noop,
	  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
	  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
	  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
	  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
	  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
	  table: noop,
	  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
	  text: /^[^\n]+/
	};

	block.bullet = /(?:[*+-]|\d+\.)/;
	block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
	block.item = replace(block.item, 'gm')
	  (/bull/g, block.bullet)
	  ();

	block.list = replace(block.list)
	  (/bull/g, block.bullet)
	  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
	  ('def', '\\n+(?=' + block.def.source + ')')
	  ();

	block.blockquote = replace(block.blockquote)
	  ('def', block.def)
	  ();

	block._tag = '(?!(?:'
	  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
	  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
	  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

	block.html = replace(block.html)
	  ('comment', /<!--[\s\S]*?-->/)
	  ('closed', /<(tag)[\s\S]+?<\/\1>/)
	  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
	  (/tag/g, block._tag)
	  ();

	block.paragraph = replace(block.paragraph)
	  ('hr', block.hr)
	  ('heading', block.heading)
	  ('lheading', block.lheading)
	  ('blockquote', block.blockquote)
	  ('tag', '<' + block._tag)
	  ('def', block.def)
	  ();

	/**
	 * Normal Block Grammar
	 */

	block.normal = merge({}, block);

	/**
	 * GFM Block Grammar
	 */

	block.gfm = merge({}, block.normal, {
	  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
	  paragraph: /^/,
	  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
	});

	block.gfm.paragraph = replace(block.paragraph)
	  ('(?!', '(?!'
	    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
	    + block.list.source.replace('\\1', '\\3') + '|')
	  ();

	/**
	 * GFM + Tables Block Grammar
	 */

	block.tables = merge({}, block.gfm, {
	  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
	  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
	});

	/**
	 * Block Lexer
	 */

	function Lexer(options) {
	  this.tokens = [];
	  this.tokens.links = {};
	  this.options = options || marked.defaults;
	  this.rules = block.normal;

	  if (this.options.gfm) {
	    if (this.options.tables) {
	      this.rules = block.tables;
	    } else {
	      this.rules = block.gfm;
	    }
	  }
	}

	/**
	 * Expose Block Rules
	 */

	Lexer.rules = block;

	/**
	 * Static Lex Method
	 */

	Lexer.lex = function(src, options) {
	  var lexer = new Lexer(options);
	  return lexer.lex(src);
	};

	/**
	 * Preprocessing
	 */

	Lexer.prototype.lex = function(src) {
	  src = src
	    .replace(/\r\n|\r/g, '\n')
	    .replace(/\t/g, '    ')
	    .replace(/\u00a0/g, ' ')
	    .replace(/\u2424/g, '\n');

	  return this.token(src, true);
	};

	/**
	 * Lexing
	 */

	Lexer.prototype.token = function(src, top, bq) {
	  var src = src.replace(/^ +$/gm, '')
	    , next
	    , loose
	    , cap
	    , bull
	    , b
	    , item
	    , space
	    , i
	    , l;

	  while (src) {
	    // newline
	    if (cap = this.rules.newline.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[0].length > 1) {
	        this.tokens.push({
	          type: 'space'
	        });
	      }
	    }

	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      cap = cap[0].replace(/^ {4}/gm, '');
	      this.tokens.push({
	        type: 'code',
	        text: !this.options.pedantic
	          ? cap.replace(/\n+$/, '')
	          : cap
	      });
	      continue;
	    }

	    // fences (gfm)
	    if (cap = this.rules.fences.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'code',
	        lang: cap[2],
	        text: cap[3] || ''
	      });
	      continue;
	    }

	    // heading
	    if (cap = this.rules.heading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[1].length,
	        text: cap[2]
	      });
	      continue;
	    }

	    // table no leading pipe (gfm)
	    if (top && (cap = this.rules.nptable.exec(src))) {
	      src = src.substring(cap[0].length);

	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/\n$/, '').split('\n')
	      };

	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }

	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i].split(/ *\| */);
	      }

	      this.tokens.push(item);

	      continue;
	    }

	    // lheading
	    if (cap = this.rules.lheading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[2] === '=' ? 1 : 2,
	        text: cap[1]
	      });
	      continue;
	    }

	    // hr
	    if (cap = this.rules.hr.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'hr'
	      });
	      continue;
	    }

	    // blockquote
	    if (cap = this.rules.blockquote.exec(src)) {
	      src = src.substring(cap[0].length);

	      this.tokens.push({
	        type: 'blockquote_start'
	      });

	      cap = cap[0].replace(/^ *> ?/gm, '');

	      // Pass `top` to keep the current
	      // "toplevel" state. This is exactly
	      // how markdown.pl works.
	      this.token(cap, top, true);

	      this.tokens.push({
	        type: 'blockquote_end'
	      });

	      continue;
	    }

	    // list
	    if (cap = this.rules.list.exec(src)) {
	      src = src.substring(cap[0].length);
	      bull = cap[2];

	      this.tokens.push({
	        type: 'list_start',
	        ordered: bull.length > 1
	      });

	      // Get each top-level item.
	      cap = cap[0].match(this.rules.item);

	      next = false;
	      l = cap.length;
	      i = 0;

	      for (; i < l; i++) {
	        item = cap[i];

	        // Remove the list item's bullet
	        // so it is seen as the next token.
	        space = item.length;
	        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

	        // Outdent whatever the
	        // list item contains. Hacky.
	        if (~item.indexOf('\n ')) {
	          space -= item.length;
	          item = !this.options.pedantic
	            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
	            : item.replace(/^ {1,4}/gm, '');
	        }

	        // Determine whether the next list item belongs here.
	        // Backpedal if it does not belong in this list.
	        if (this.options.smartLists && i !== l - 1) {
	          b = block.bullet.exec(cap[i + 1])[0];
	          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
	            src = cap.slice(i + 1).join('\n') + src;
	            i = l - 1;
	          }
	        }

	        // Determine whether item is loose or not.
	        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
	        // for discount behavior.
	        loose = next || /\n\n(?!\s*$)/.test(item);
	        if (i !== l - 1) {
	          next = item.charAt(item.length - 1) === '\n';
	          if (!loose) loose = next;
	        }

	        this.tokens.push({
	          type: loose
	            ? 'loose_item_start'
	            : 'list_item_start'
	        });

	        // Recurse.
	        this.token(item, false, bq);

	        this.tokens.push({
	          type: 'list_item_end'
	        });
	      }

	      this.tokens.push({
	        type: 'list_end'
	      });

	      continue;
	    }

	    // html
	    if (cap = this.rules.html.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: this.options.sanitize
	          ? 'paragraph'
	          : 'html',
	        pre: !this.options.sanitizer
	          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
	        text: cap[0]
	      });
	      continue;
	    }

	    // def
	    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.links[cap[1].toLowerCase()] = {
	        href: cap[2],
	        title: cap[3]
	      };
	      continue;
	    }

	    // table (gfm)
	    if (top && (cap = this.rules.table.exec(src))) {
	      src = src.substring(cap[0].length);

	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
	      };

	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }

	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i]
	          .replace(/^ *\| *| *\| *$/g, '')
	          .split(/ *\| */);
	      }

	      this.tokens.push(item);

	      continue;
	    }

	    // top-level paragraph
	    if (top && (cap = this.rules.paragraph.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'paragraph',
	        text: cap[1].charAt(cap[1].length - 1) === '\n'
	          ? cap[1].slice(0, -1)
	          : cap[1]
	      });
	      continue;
	    }

	    // text
	    if (cap = this.rules.text.exec(src)) {
	      // Top-level should never reach here.
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'text',
	        text: cap[0]
	      });
	      continue;
	    }

	    if (src) {
	      throw new
	        Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }

	  return this.tokens;
	};

	/**
	 * Inline-Level Grammar
	 */

	var inline = {
	  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
	  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
	  url: noop,
	  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
	  link: /^!?\[(inside)\]\(href\)/,
	  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
	  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
	  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
	  em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
	  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
	  br: /^ {2,}\n(?!\s*$)/,
	  del: noop,
	  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
	};

	inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
	inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

	inline.link = replace(inline.link)
	  ('inside', inline._inside)
	  ('href', inline._href)
	  ();

	inline.reflink = replace(inline.reflink)
	  ('inside', inline._inside)
	  ();

	/**
	 * Normal Inline Grammar
	 */

	inline.normal = merge({}, inline);

	/**
	 * Pedantic Inline Grammar
	 */

	inline.pedantic = merge({}, inline.normal, {
	  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
	  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
	});

	/**
	 * GFM Inline Grammar
	 */

	inline.gfm = merge({}, inline.normal, {
	  escape: replace(inline.escape)('])', '~|])')(),
	  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
	  del: /^~~(?=\S)([\s\S]*?\S)~~/,
	  text: replace(inline.text)
	    (']|', '~]|')
	    ('|', '|https?://|')
	    ()
	});

	/**
	 * GFM + Line Breaks Inline Grammar
	 */

	inline.breaks = merge({}, inline.gfm, {
	  br: replace(inline.br)('{2,}', '*')(),
	  text: replace(inline.gfm.text)('{2,}', '*')()
	});

	/**
	 * Inline Lexer & Compiler
	 */

	function InlineLexer(links, options) {
	  this.options = options || marked.defaults;
	  this.links = links;
	  this.rules = inline.normal;
	  this.renderer = this.options.renderer || new Renderer;
	  this.renderer.options = this.options;

	  if (!this.links) {
	    throw new
	      Error('Tokens array requires a `links` property.');
	  }

	  if (this.options.gfm) {
	    if (this.options.breaks) {
	      this.rules = inline.breaks;
	    } else {
	      this.rules = inline.gfm;
	    }
	  } else if (this.options.pedantic) {
	    this.rules = inline.pedantic;
	  }
	}

	/**
	 * Expose Inline Rules
	 */

	InlineLexer.rules = inline;

	/**
	 * Static Lexing/Compiling Method
	 */

	InlineLexer.output = function(src, links, options) {
	  var inline = new InlineLexer(links, options);
	  return inline.output(src);
	};

	/**
	 * Lexing/Compiling
	 */

	InlineLexer.prototype.output = function(src) {
	  var out = ''
	    , link
	    , text
	    , href
	    , cap;

	  while (src) {
	    // escape
	    if (cap = this.rules.escape.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += cap[1];
	      continue;
	    }

	    // autolink
	    if (cap = this.rules.autolink.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[2] === '@') {
	        text = cap[1].charAt(6) === ':'
	          ? this.mangle(cap[1].substring(7))
	          : this.mangle(cap[1]);
	        href = this.mangle('mailto:') + text;
	      } else {
	        text = escape(cap[1]);
	        href = text;
	      }
	      out += this.renderer.link(href, null, text);
	      continue;
	    }

	    // url (gfm)
	    if (!this.inLink && (cap = this.rules.url.exec(src))) {
	      src = src.substring(cap[0].length);
	      text = escape(cap[1]);
	      href = text;
	      out += this.renderer.link(href, null, text);
	      continue;
	    }

	    // tag
	    if (cap = this.rules.tag.exec(src)) {
	      if (!this.inLink && /^<a /i.test(cap[0])) {
	        this.inLink = true;
	      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
	        this.inLink = false;
	      }
	      src = src.substring(cap[0].length);
	      out += this.options.sanitize
	        ? this.options.sanitizer
	          ? this.options.sanitizer(cap[0])
	          : escape(cap[0])
	        : cap[0]
	      continue;
	    }

	    // link
	    if (cap = this.rules.link.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.inLink = true;
	      out += this.outputLink(cap, {
	        href: cap[2],
	        title: cap[3]
	      });
	      this.inLink = false;
	      continue;
	    }

	    // reflink, nolink
	    if ((cap = this.rules.reflink.exec(src))
	        || (cap = this.rules.nolink.exec(src))) {
	      src = src.substring(cap[0].length);
	      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
	      link = this.links[link.toLowerCase()];
	      if (!link || !link.href) {
	        out += cap[0].charAt(0);
	        src = cap[0].substring(1) + src;
	        continue;
	      }
	      this.inLink = true;
	      out += this.outputLink(cap, link);
	      this.inLink = false;
	      continue;
	    }

	    // strong
	    if (cap = this.rules.strong.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.strong(this.output(cap[2] || cap[1]));
	      continue;
	    }

	    // em
	    if (cap = this.rules.em.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.em(this.output(cap[2] || cap[1]));
	      continue;
	    }

	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.codespan(escape(cap[2], true));
	      continue;
	    }

	    // br
	    if (cap = this.rules.br.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.br();
	      continue;
	    }

	    // del (gfm)
	    if (cap = this.rules.del.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.del(this.output(cap[1]));
	      continue;
	    }

	    // text
	    if (cap = this.rules.text.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.text(escape(this.smartypants(cap[0])));
	      continue;
	    }

	    if (src) {
	      throw new
	        Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }

	  return out;
	};

	/**
	 * Compile Link
	 */

	InlineLexer.prototype.outputLink = function(cap, link) {
	  var href = escape(link.href)
	    , title = link.title ? escape(link.title) : null;

	  return cap[0].charAt(0) !== '!'
	    ? this.renderer.link(href, title, this.output(cap[1]))
	    : this.renderer.image(href, title, escape(cap[1]));
	};

	/**
	 * Smartypants Transformations
	 */

	InlineLexer.prototype.smartypants = function(text) {
	  if (!this.options.smartypants) return text;
	  return text
	    // em-dashes
	    .replace(/---/g, '\u2014')
	    // en-dashes
	    .replace(/--/g, '\u2013')
	    // opening singles
	    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
	    // closing singles & apostrophes
	    .replace(/'/g, '\u2019')
	    // opening doubles
	    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
	    // closing doubles
	    .replace(/"/g, '\u201d')
	    // ellipses
	    .replace(/\.{3}/g, '\u2026');
	};

	/**
	 * Mangle Links
	 */

	InlineLexer.prototype.mangle = function(text) {
	  if (!this.options.mangle) return text;
	  var out = ''
	    , l = text.length
	    , i = 0
	    , ch;

	  for (; i < l; i++) {
	    ch = text.charCodeAt(i);
	    if (Math.random() > 0.5) {
	      ch = 'x' + ch.toString(16);
	    }
	    out += '&#' + ch + ';';
	  }

	  return out;
	};

	/**
	 * Renderer
	 */

	function Renderer(options) {
	  this.options = options || {};
	}

	Renderer.prototype.code = function(code, lang, escaped) {
	  if (this.options.highlight) {
	    var out = this.options.highlight(code, lang);
	    if (out != null && out !== code) {
	      escaped = true;
	      code = out;
	    }
	  }

	  if (!lang) {
	    return '<pre><code>'
	      + (escaped ? code : escape(code, true))
	      + '\n</code></pre>';
	  }

	  return '<pre><code class="'
	    + this.options.langPrefix
	    + escape(lang, true)
	    + '">'
	    + (escaped ? code : escape(code, true))
	    + '\n</code></pre>\n';
	};

	Renderer.prototype.blockquote = function(quote) {
	  return '<blockquote>\n' + quote + '</blockquote>\n';
	};

	Renderer.prototype.html = function(html) {
	  return html;
	};

	Renderer.prototype.heading = function(text, level, raw) {
	  return '<h'
	    + level
	    + ' id="'
	    + this.options.headerPrefix
	    + raw.toLowerCase().replace(/[^\w]+/g, '-')
	    + '">'
	    + text
	    + '</h'
	    + level
	    + '>\n';
	};

	Renderer.prototype.hr = function() {
	  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
	};

	Renderer.prototype.list = function(body, ordered) {
	  var type = ordered ? 'ol' : 'ul';
	  return '<' + type + '>\n' + body + '</' + type + '>\n';
	};

	Renderer.prototype.listitem = function(text) {
	  return '<li>' + text + '</li>\n';
	};

	Renderer.prototype.paragraph = function(text) {
	  return '<p>' + text + '</p>\n';
	};

	Renderer.prototype.table = function(header, body) {
	  return '<table>\n'
	    + '<thead>\n'
	    + header
	    + '</thead>\n'
	    + '<tbody>\n'
	    + body
	    + '</tbody>\n'
	    + '</table>\n';
	};

	Renderer.prototype.tablerow = function(content) {
	  return '<tr>\n' + content + '</tr>\n';
	};

	Renderer.prototype.tablecell = function(content, flags) {
	  var type = flags.header ? 'th' : 'td';
	  var tag = flags.align
	    ? '<' + type + ' style="text-align:' + flags.align + '">'
	    : '<' + type + '>';
	  return tag + content + '</' + type + '>\n';
	};

	// span level renderer
	Renderer.prototype.strong = function(text) {
	  return '<strong>' + text + '</strong>';
	};

	Renderer.prototype.em = function(text) {
	  return '<em>' + text + '</em>';
	};

	Renderer.prototype.codespan = function(text) {
	  return '<code>' + text + '</code>';
	};

	Renderer.prototype.br = function() {
	  return this.options.xhtml ? '<br/>' : '<br>';
	};

	Renderer.prototype.del = function(text) {
	  return '<del>' + text + '</del>';
	};

	Renderer.prototype.link = function(href, title, text) {
	  if (this.options.sanitize) {
	    try {
	      var prot = decodeURIComponent(unescape(href))
	        .replace(/[^\w:]/g, '')
	        .toLowerCase();
	    } catch (e) {
	      return '';
	    }
	    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
	      return '';
	    }
	  }
	  var out = '<a href="' + href + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += '>' + text + '</a>';
	  return out;
	};

	Renderer.prototype.image = function(href, title, text) {
	  var out = '<img src="' + href + '" alt="' + text + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += this.options.xhtml ? '/>' : '>';
	  return out;
	};

	Renderer.prototype.text = function(text) {
	  return text;
	};

	/**
	 * Parsing & Compiling
	 */

	function Parser(options) {
	  this.tokens = [];
	  this.token = null;
	  this.options = options || marked.defaults;
	  this.options.renderer = this.options.renderer || new Renderer;
	  this.renderer = this.options.renderer;
	  this.renderer.options = this.options;
	}

	/**
	 * Static Parse Method
	 */

	Parser.parse = function(src, options, renderer) {
	  var parser = new Parser(options, renderer);
	  return parser.parse(src);
	};

	/**
	 * Parse Loop
	 */

	Parser.prototype.parse = function(src) {
	  this.inline = new InlineLexer(src.links, this.options, this.renderer);
	  this.tokens = src.reverse();

	  var out = '';
	  while (this.next()) {
	    out += this.tok();
	  }

	  return out;
	};

	/**
	 * Next Token
	 */

	Parser.prototype.next = function() {
	  return this.token = this.tokens.pop();
	};

	/**
	 * Preview Next Token
	 */

	Parser.prototype.peek = function() {
	  return this.tokens[this.tokens.length - 1] || 0;
	};

	/**
	 * Parse Text Tokens
	 */

	Parser.prototype.parseText = function() {
	  var body = this.token.text;

	  while (this.peek().type === 'text') {
	    body += '\n' + this.next().text;
	  }

	  return this.inline.output(body);
	};

	/**
	 * Parse Current Token
	 */

	Parser.prototype.tok = function() {
	  switch (this.token.type) {
	    case 'space': {
	      return '';
	    }
	    case 'hr': {
	      return this.renderer.hr();
	    }
	    case 'heading': {
	      return this.renderer.heading(
	        this.inline.output(this.token.text),
	        this.token.depth,
	        this.token.text);
	    }
	    case 'code': {
	      return this.renderer.code(this.token.text,
	        this.token.lang,
	        this.token.escaped);
	    }
	    case 'table': {
	      var header = ''
	        , body = ''
	        , i
	        , row
	        , cell
	        , flags
	        , j;

	      // header
	      cell = '';
	      for (i = 0; i < this.token.header.length; i++) {
	        flags = { header: true, align: this.token.align[i] };
	        cell += this.renderer.tablecell(
	          this.inline.output(this.token.header[i]),
	          { header: true, align: this.token.align[i] }
	        );
	      }
	      header += this.renderer.tablerow(cell);

	      for (i = 0; i < this.token.cells.length; i++) {
	        row = this.token.cells[i];

	        cell = '';
	        for (j = 0; j < row.length; j++) {
	          cell += this.renderer.tablecell(
	            this.inline.output(row[j]),
	            { header: false, align: this.token.align[j] }
	          );
	        }

	        body += this.renderer.tablerow(cell);
	      }
	      return this.renderer.table(header, body);
	    }
	    case 'blockquote_start': {
	      var body = '';

	      while (this.next().type !== 'blockquote_end') {
	        body += this.tok();
	      }

	      return this.renderer.blockquote(body);
	    }
	    case 'list_start': {
	      var body = ''
	        , ordered = this.token.ordered;

	      while (this.next().type !== 'list_end') {
	        body += this.tok();
	      }

	      return this.renderer.list(body, ordered);
	    }
	    case 'list_item_start': {
	      var body = '';

	      while (this.next().type !== 'list_item_end') {
	        body += this.token.type === 'text'
	          ? this.parseText()
	          : this.tok();
	      }

	      return this.renderer.listitem(body);
	    }
	    case 'loose_item_start': {
	      var body = '';

	      while (this.next().type !== 'list_item_end') {
	        body += this.tok();
	      }

	      return this.renderer.listitem(body);
	    }
	    case 'html': {
	      var html = !this.token.pre && !this.options.pedantic
	        ? this.inline.output(this.token.text)
	        : this.token.text;
	      return this.renderer.html(html);
	    }
	    case 'paragraph': {
	      return this.renderer.paragraph(this.inline.output(this.token.text));
	    }
	    case 'text': {
	      return this.renderer.paragraph(this.parseText());
	    }
	  }
	};

	/**
	 * Helpers
	 */

	function escape(html, encode) {
	  return html
	    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
	    .replace(/</g, '&lt;')
	    .replace(/>/g, '&gt;')
	    .replace(/"/g, '&quot;')
	    .replace(/'/g, '&#39;');
	}

	function unescape(html) {
	  return html.replace(/&([#\w]+);/g, function(_, n) {
	    n = n.toLowerCase();
	    if (n === 'colon') return ':';
	    if (n.charAt(0) === '#') {
	      return n.charAt(1) === 'x'
	        ? String.fromCharCode(parseInt(n.substring(2), 16))
	        : String.fromCharCode(+n.substring(1));
	    }
	    return '';
	  });
	}

	function replace(regex, opt) {
	  regex = regex.source;
	  opt = opt || '';
	  return function self(name, val) {
	    if (!name) return new RegExp(regex, opt);
	    val = val.source || val;
	    val = val.replace(/(^|[^\[])\^/g, '$1');
	    regex = regex.replace(name, val);
	    return self;
	  };
	}

	function noop() {}
	noop.exec = noop;

	function merge(obj) {
	  var i = 1
	    , target
	    , key;

	  for (; i < arguments.length; i++) {
	    target = arguments[i];
	    for (key in target) {
	      if (Object.prototype.hasOwnProperty.call(target, key)) {
	        obj[key] = target[key];
	      }
	    }
	  }

	  return obj;
	}


	/**
	 * Marked
	 */

	function marked(src, opt, callback) {
	  if (callback || typeof opt === 'function') {
	    if (!callback) {
	      callback = opt;
	      opt = null;
	    }

	    opt = merge({}, marked.defaults, opt || {});

	    var highlight = opt.highlight
	      , tokens
	      , pending
	      , i = 0;

	    try {
	      tokens = Lexer.lex(src, opt)
	    } catch (e) {
	      return callback(e);
	    }

	    pending = tokens.length;

	    var done = function(err) {
	      if (err) {
	        opt.highlight = highlight;
	        return callback(err);
	      }

	      var out;

	      try {
	        out = Parser.parse(tokens, opt);
	      } catch (e) {
	        err = e;
	      }

	      opt.highlight = highlight;

	      return err
	        ? callback(err)
	        : callback(null, out);
	    };

	    if (!highlight || highlight.length < 3) {
	      return done();
	    }

	    delete opt.highlight;

	    if (!pending) return done();

	    for (; i < tokens.length; i++) {
	      (function(token) {
	        if (token.type !== 'code') {
	          return --pending || done();
	        }
	        return highlight(token.text, token.lang, function(err, code) {
	          if (err) return done(err);
	          if (code == null || code === token.text) {
	            return --pending || done();
	          }
	          token.text = code;
	          token.escaped = true;
	          --pending || done();
	        });
	      })(tokens[i]);
	    }

	    return;
	  }
	  try {
	    if (opt) opt = merge({}, marked.defaults, opt);
	    return Parser.parse(Lexer.lex(src, opt), opt);
	  } catch (e) {
	    e.message += '\nPlease report this to https://github.com/chjj/marked.';
	    if ((opt || marked.defaults).silent) {
	      return '<p>An error occured:</p><pre>'
	        + escape(e.message + '', true)
	        + '</pre>';
	    }
	    throw e;
	  }
	}

	/**
	 * Options
	 */

	marked.options =
	marked.setOptions = function(opt) {
	  merge(marked.defaults, opt);
	  return marked;
	};

	marked.defaults = {
	  gfm: true,
	  tables: true,
	  breaks: false,
	  pedantic: false,
	  sanitize: false,
	  sanitizer: null,
	  mangle: true,
	  smartLists: false,
	  silent: false,
	  highlight: null,
	  langPrefix: 'lang-',
	  smartypants: false,
	  headerPrefix: '',
	  renderer: new Renderer,
	  xhtml: false
	};

	/**
	 * Expose
	 */

	marked.Parser = Parser;
	marked.parser = Parser.parse;

	marked.Renderer = Renderer;

	marked.Lexer = Lexer;
	marked.lexer = Lexer.lex;

	marked.InlineLexer = InlineLexer;
	marked.inlineLexer = InlineLexer.output;

	marked.parse = marked;

	if (true) {
	  module.exports = marked;
	} else if (typeof define === 'function' && define.amd) {
	  define(function() { return marked; });
	} else {
	  this.marked = marked;
	}

	}).call(function() {
	  return this || (typeof window !== 'undefined' ? window : global);
	}());

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 1095:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Export cheerio (with )
	 */

	exports = module.exports = __webpack_require__(1096);

	/*
	  Export the version
	*/

	exports.version = __webpack_require__(1168).version;


/***/ },

/***/ 1096:
/***/ function(module, exports, __webpack_require__) {

	/*
	  Module dependencies
	*/

	var parse = __webpack_require__(1097),
	    isHtml = __webpack_require__(1149).isHtml,
	    _ = __webpack_require__(669);

	/*
	 * The API
	 */

	var api = [
	  __webpack_require__(1150),
	  __webpack_require__(1164),
	  __webpack_require__(1165),
	  __webpack_require__(1166),
	  __webpack_require__(1167)
	];

	/*
	 * Instance of cheerio
	 */

	var Cheerio = module.exports = function(selector, context, root, options) {
	  if (!(this instanceof Cheerio)) return new Cheerio(selector, context, root, options);

	  this.options = _.defaults(options || {}, this.options);

	  // $(), $(null), $(undefined), $(false)
	  if (!selector) return this;

	  if (root) {
	    if (typeof root === 'string') root = parse(root, this.options);
	    this._root = Cheerio.call(this, root);
	  }

	  // $($)
	  if (selector.cheerio) return selector;

	  // $(dom)
	  if (isNode(selector))
	    selector = [selector];

	  // $([dom])
	  if (Array.isArray(selector)) {
	    _.forEach(selector, _.bind(function(elem, idx) {
	      this[idx] = elem;
	    }, this));
	    this.length = selector.length;
	    return this;
	  }

	  // $(<html>)
	  if (typeof selector === 'string' && isHtml(selector)) {
	    return Cheerio.call(this, parse(selector, this.options).children);
	  }

	  // If we don't have a context, maybe we have a root, from loading
	  if (!context) {
	    context = this._root;
	  } else if (typeof context === 'string') {
	    if (isHtml(context)) {
	      // $('li', '<ul>...</ul>')
	      context = parse(context, this.options);
	      context = Cheerio.call(this, context);
	    } else {
	      // $('li', 'ul')
	      selector = [context, selector].join(' ');
	      context = this._root;
	    }
	  // $('li', node), $('li', [nodes])
	  } else if (!context.cheerio) {
	    context = Cheerio.call(this, context);
	  }

	  // If we still don't have a context, return
	  if (!context) return this;

	  // #id, .class, tag
	  return context.find(selector);
	};

	/**
	 * Mix in `static`
	 */

	_.extend(Cheerio, __webpack_require__(1151));

	/*
	 * Set a signature of the object
	 */

	Cheerio.prototype.cheerio = '[cheerio object]';

	/*
	 * Cheerio default options
	 */

	Cheerio.prototype.options = {
	  withDomLvl1: true,
	  normalizeWhitespace: false,
	  xmlMode: false,
	  decodeEntities: true
	};

	/*
	 * Make cheerio an array-like object
	 */

	Cheerio.prototype.length = 0;
	Cheerio.prototype.splice = Array.prototype.splice;

	/*
	 * Make a cheerio object
	 *
	 * @api private
	 */

	Cheerio.prototype._make = function(dom, context) {
	  var cheerio = new this.constructor(dom, context, this._root, this.options);
	  cheerio.prevObject = this;
	  return cheerio;
	};

	/**
	 * Turn a cheerio object into an array
	 */

	Cheerio.prototype.toArray = function() {
	  return this.get();
	};

	/**
	 * Plug in the API
	 */
	api.forEach(function(mod) {
	  _.extend(Cheerio.prototype, mod);
	});

	var isNode = function(obj) {
	  return obj.name || obj.type === 'text' || obj.type === 'comment';
	};


/***/ },

/***/ 1097:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {/*
	  Module Dependencies
	*/
	var htmlparser = __webpack_require__(1098);

	/*
	  Parser
	*/
	exports = module.exports = function(content, options) {
	  var dom = exports.evaluate(content, options),
	      // Generic root element
	      root = exports.evaluate('<root></root>', options)[0];

	  root.type = 'root';

	  // Update the dom using the root
	  exports.update(dom, root);

	  return root;
	};

	exports.evaluate = function(content, options) {
	  // options = options || $.fn.options;

	  var dom;

	  if (typeof content === 'string' || Buffer.isBuffer(content)) {
	    dom = htmlparser.parseDOM(content, options);
	  } else {
	    dom = content;
	  }

	  return dom;
	};

	/*
	  Update the dom structure, for one changed layer
	*/
	exports.update = function(arr, parent) {
	  // normalize
	  if (!Array.isArray(arr)) arr = [arr];

	  // Update parent
	  if (parent) {
	    parent.children = arr;
	  } else {
	    parent = null;
	  }

	  // Update neighbors
	  for (var i = 0; i < arr.length; i++) {
	    var node = arr[i];

	    // Cleanly remove existing nodes from their previous structures.
	    var oldParent = node.parent || node.root,
	        oldSiblings = oldParent && oldParent.children;
	    if (oldSiblings && oldSiblings !== arr) {
	      oldSiblings.splice(oldSiblings.indexOf(node), 1);
	      if (node.prev) {
	        node.prev.next = node.next;
	      }
	      if (node.next) {
	        node.next.prev = node.prev;
	      }
	    }

	    if (parent) {
	      node.prev = arr[i - 1] || null;
	      node.next = arr[i + 1] || null;
	    } else {
	      node.prev = node.next = null;
	    }

	    if (parent && parent.type === 'root') {
	      node.root = parent;
	      node.parent = null;
	    } else {
	      node.root = null;
	      node.parent = parent;
	    }
	  }

	  return parent;
	};

	// module.exports = $.extend(exports);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(388).Buffer))

/***/ },

/***/ 1098:
/***/ function(module, exports, __webpack_require__) {

	var Parser = __webpack_require__(1099),
	    DomHandler = __webpack_require__(1107);

	function defineProp(name, value){
		delete module.exports[name];
		module.exports[name] = value;
		return value;
	}

	module.exports = {
		Parser: Parser,
		Tokenizer: __webpack_require__(1100),
		ElementType: __webpack_require__(1108),
		DomHandler: DomHandler,
		get FeedHandler(){
			return defineProp("FeedHandler", __webpack_require__(1111));
		},
		get Stream(){
			return defineProp("Stream", __webpack_require__(1112));
		},
		get WritableStream(){
			return defineProp("WritableStream", __webpack_require__(1113));
		},
		get ProxyHandler(){
			return defineProp("ProxyHandler", __webpack_require__(1130));
		},
		get DomUtils(){
			return defineProp("DomUtils", __webpack_require__(1131));
		},
		get CollectingHandler(){
			return defineProp("CollectingHandler", __webpack_require__(1148));
		},
		// For legacy support
		DefaultHandler: DomHandler,
		get RssHandler(){
			return defineProp("RssHandler", this.FeedHandler);
		},
		//helper methods
		parseDOM: function(data, options){
			var handler = new DomHandler(options);
			new Parser(handler, options).end(data);
			return handler.dom;
		},
		parseFeed: function(feed, options){
			var handler = new module.exports.FeedHandler(options);
			new Parser(handler, options).end(feed);
			return handler.dom;
		},
		createDomStream: function(cb, options, elementCb){
			var handler = new DomHandler(cb, options, elementCb);
			return new Parser(handler, options);
		},
		// List of all events that the parser emits
		EVENTS: { /* Format: eventname: number of arguments */
			attribute: 2,
			cdatastart: 0,
			cdataend: 0,
			text: 1,
			processinginstruction: 2,
			comment: 1,
			commentend: 0,
			closetag: 1,
			opentag: 2,
			opentagname: 1,
			error: 1,
			end: 0
		}
	};


/***/ },

/***/ 1099:
/***/ function(module, exports, __webpack_require__) {

	var Tokenizer = __webpack_require__(1100);

	/*
		Options:

		xmlMode: Disables the special behavior for script/style tags (false by default)
		lowerCaseAttributeNames: call .toLowerCase for each attribute name (true if xmlMode is `false`)
		lowerCaseTags: call .toLowerCase for each tag name (true if xmlMode is `false`)
	*/

	/*
		Callbacks:

		oncdataend,
		oncdatastart,
		onclosetag,
		oncomment,
		oncommentend,
		onerror,
		onopentag,
		onprocessinginstruction,
		onreset,
		ontext
	*/

	var formTags = {
		input: true,
		option: true,
		optgroup: true,
		select: true,
		button: true,
		datalist: true,
		textarea: true
	};

	var openImpliesClose = {
		tr      : { tr:true, th:true, td:true },
		th      : { th:true },
		td      : { thead:true, th:true, td:true },
		body    : { head:true, link:true, script:true },
		li      : { li:true },
		p       : { p:true },
		h1      : { p:true },
		h2      : { p:true },
		h3      : { p:true },
		h4      : { p:true },
		h5      : { p:true },
		h6      : { p:true },
		select  : formTags,
		input   : formTags,
		output  : formTags,
		button  : formTags,
		datalist: formTags,
		textarea: formTags,
		option  : { option:true },
		optgroup: { optgroup:true }
	};

	var voidElements = {
		__proto__: null,
		area: true,
		base: true,
		basefont: true,
		br: true,
		col: true,
		command: true,
		embed: true,
		frame: true,
		hr: true,
		img: true,
		input: true,
		isindex: true,
		keygen: true,
		link: true,
		meta: true,
		param: true,
		source: true,
		track: true,
		wbr: true,

		//common self closing svg elements
		path: true,
		circle: true,
		ellipse: true,
		line: true,
		rect: true,
		use: true,
		stop: true,
		polyline: true,
		polygon: true
	};

	var re_nameEnd = /\s|\//;

	function Parser(cbs, options){
		this._options = options || {};
		this._cbs = cbs || {};

		this._tagname = "";
		this._attribname = "";
		this._attribvalue = "";
		this._attribs = null;
		this._stack = [];

		this.startIndex = 0;
		this.endIndex = null;

		this._lowerCaseTagNames = "lowerCaseTags" in this._options ?
										!!this._options.lowerCaseTags :
										!this._options.xmlMode;
		this._lowerCaseAttributeNames = "lowerCaseAttributeNames" in this._options ?
										!!this._options.lowerCaseAttributeNames :
										!this._options.xmlMode;

		this._tokenizer = new Tokenizer(this._options, this);

		if(this._cbs.onparserinit) this._cbs.onparserinit(this);
	}

	__webpack_require__(404).inherits(Parser, __webpack_require__(1106).EventEmitter);

	Parser.prototype._updatePosition = function(initialOffset){
		if(this.endIndex === null){
			if(this._tokenizer._sectionStart <= initialOffset){
				this.startIndex = 0;
			} else {
				this.startIndex = this._tokenizer._sectionStart - initialOffset;
			}
		}
		else this.startIndex = this.endIndex + 1;
		this.endIndex = this._tokenizer.getAbsoluteIndex();
	};

	//Tokenizer event handlers
	Parser.prototype.ontext = function(data){
		this._updatePosition(1);
		this.endIndex--;

		if(this._cbs.ontext) this._cbs.ontext(data);
	};

	Parser.prototype.onopentagname = function(name){
		if(this._lowerCaseTagNames){
			name = name.toLowerCase();
		}

		this._tagname = name;

		if(!this._options.xmlMode && name in openImpliesClose) {
			for(
				var el;
				(el = this._stack[this._stack.length - 1]) in openImpliesClose[name];
				this.onclosetag(el)
			);
		}

		if(this._options.xmlMode || !(name in voidElements)){
			this._stack.push(name);
		}

		if(this._cbs.onopentagname) this._cbs.onopentagname(name);
		if(this._cbs.onopentag) this._attribs = {};
	};

	Parser.prototype.onopentagend = function(){
		this._updatePosition(1);

		if(this._attribs){
			if(this._cbs.onopentag) this._cbs.onopentag(this._tagname, this._attribs);
			this._attribs = null;
		}

		if(!this._options.xmlMode && this._cbs.onclosetag && this._tagname in voidElements){
			this._cbs.onclosetag(this._tagname);
		}

		this._tagname = "";
	};

	Parser.prototype.onclosetag = function(name){
		this._updatePosition(1);

		if(this._lowerCaseTagNames){
			name = name.toLowerCase();
		}

		if(this._stack.length && (!(name in voidElements) || this._options.xmlMode)){
			var pos = this._stack.lastIndexOf(name);
			if(pos !== -1){
				if(this._cbs.onclosetag){
					pos = this._stack.length - pos;
					while(pos--) this._cbs.onclosetag(this._stack.pop());
				}
				else this._stack.length = pos;
			} else if(name === "p" && !this._options.xmlMode){
				this.onopentagname(name);
				this._closeCurrentTag();
			}
		} else if(!this._options.xmlMode && (name === "br" || name === "p")){
			this.onopentagname(name);
			this._closeCurrentTag();
		}
	};

	Parser.prototype.onselfclosingtag = function(){
		if(this._options.xmlMode || this._options.recognizeSelfClosing){
			this._closeCurrentTag();
		} else {
			this.onopentagend();
		}
	};

	Parser.prototype._closeCurrentTag = function(){
		var name = this._tagname;

		this.onopentagend();

		//self-closing tags will be on the top of the stack
		//(cheaper check than in onclosetag)
		if(this._stack[this._stack.length - 1] === name){
			if(this._cbs.onclosetag){
				this._cbs.onclosetag(name);
			}
			this._stack.pop();
		}
	};

	Parser.prototype.onattribname = function(name){
		if(this._lowerCaseAttributeNames){
			name = name.toLowerCase();
		}
		this._attribname = name;
	};

	Parser.prototype.onattribdata = function(value){
		this._attribvalue += value;
	};

	Parser.prototype.onattribend = function(){
		if(this._cbs.onattribute) this._cbs.onattribute(this._attribname, this._attribvalue);
		if(
			this._attribs &&
			!Object.prototype.hasOwnProperty.call(this._attribs, this._attribname)
		){
			this._attribs[this._attribname] = this._attribvalue;
		}
		this._attribname = "";
		this._attribvalue = "";
	};

	Parser.prototype._getInstructionName = function(value){
		var idx = value.search(re_nameEnd),
		    name = idx < 0 ? value : value.substr(0, idx);

		if(this._lowerCaseTagNames){
			name = name.toLowerCase();
		}

		return name;
	};

	Parser.prototype.ondeclaration = function(value){
		if(this._cbs.onprocessinginstruction){
			var name = this._getInstructionName(value);
			this._cbs.onprocessinginstruction("!" + name, "!" + value);
		}
	};

	Parser.prototype.onprocessinginstruction = function(value){
		if(this._cbs.onprocessinginstruction){
			var name = this._getInstructionName(value);
			this._cbs.onprocessinginstruction("?" + name, "?" + value);
		}
	};

	Parser.prototype.oncomment = function(value){
		this._updatePosition(4);

		if(this._cbs.oncomment) this._cbs.oncomment(value);
		if(this._cbs.oncommentend) this._cbs.oncommentend();
	};

	Parser.prototype.oncdata = function(value){
		this._updatePosition(1);

		if(this._options.xmlMode || this._options.recognizeCDATA){
			if(this._cbs.oncdatastart) this._cbs.oncdatastart();
			if(this._cbs.ontext) this._cbs.ontext(value);
			if(this._cbs.oncdataend) this._cbs.oncdataend();
		} else {
			this.oncomment("[CDATA[" + value + "]]");
		}
	};

	Parser.prototype.onerror = function(err){
		if(this._cbs.onerror) this._cbs.onerror(err);
	};

	Parser.prototype.onend = function(){
		if(this._cbs.onclosetag){
			for(
				var i = this._stack.length;
				i > 0;
				this._cbs.onclosetag(this._stack[--i])
			);
		}
		if(this._cbs.onend) this._cbs.onend();
	};


	//Resets the parser to a blank state, ready to parse a new HTML document
	Parser.prototype.reset = function(){
		if(this._cbs.onreset) this._cbs.onreset();
		this._tokenizer.reset();

		this._tagname = "";
		this._attribname = "";
		this._attribs = null;
		this._stack = [];

		if(this._cbs.onparserinit) this._cbs.onparserinit(this);
	};

	//Parses a complete HTML document and pushes it to the handler
	Parser.prototype.parseComplete = function(data){
		this.reset();
		this.end(data);
	};

	Parser.prototype.write = function(chunk){
		this._tokenizer.write(chunk);
	};

	Parser.prototype.end = function(chunk){
		this._tokenizer.end(chunk);
	};

	Parser.prototype.pause = function(){
		this._tokenizer.pause();
	};

	Parser.prototype.resume = function(){
		this._tokenizer.resume();
	};

	//alias for backwards compat
	Parser.prototype.parseChunk = Parser.prototype.write;
	Parser.prototype.done = Parser.prototype.end;

	module.exports = Parser;


/***/ },

/***/ 1100:
/***/ function(module, exports, __webpack_require__) {

	module.exports = Tokenizer;

	var decodeCodePoint = __webpack_require__(1101),
	    entityMap = __webpack_require__(1103),
	    legacyMap = __webpack_require__(1104),
	    xmlMap    = __webpack_require__(1105),

	    i = 0,

	    TEXT                      = i++,
	    BEFORE_TAG_NAME           = i++, //after <
	    IN_TAG_NAME               = i++,
	    IN_SELF_CLOSING_TAG       = i++,
	    BEFORE_CLOSING_TAG_NAME   = i++,
	    IN_CLOSING_TAG_NAME       = i++,
	    AFTER_CLOSING_TAG_NAME    = i++,

	    //attributes
	    BEFORE_ATTRIBUTE_NAME     = i++,
	    IN_ATTRIBUTE_NAME         = i++,
	    AFTER_ATTRIBUTE_NAME      = i++,
	    BEFORE_ATTRIBUTE_VALUE    = i++,
	    IN_ATTRIBUTE_VALUE_DQ     = i++, // "
	    IN_ATTRIBUTE_VALUE_SQ     = i++, // '
	    IN_ATTRIBUTE_VALUE_NQ     = i++,

	    //declarations
	    BEFORE_DECLARATION        = i++, // !
	    IN_DECLARATION            = i++,

	    //processing instructions
	    IN_PROCESSING_INSTRUCTION = i++, // ?

	    //comments
	    BEFORE_COMMENT            = i++,
	    IN_COMMENT                = i++,
	    AFTER_COMMENT_1           = i++,
	    AFTER_COMMENT_2           = i++,

	    //cdata
	    BEFORE_CDATA_1            = i++, // [
	    BEFORE_CDATA_2            = i++, // C
	    BEFORE_CDATA_3            = i++, // D
	    BEFORE_CDATA_4            = i++, // A
	    BEFORE_CDATA_5            = i++, // T
	    BEFORE_CDATA_6            = i++, // A
	    IN_CDATA                  = i++, // [
	    AFTER_CDATA_1             = i++, // ]
	    AFTER_CDATA_2             = i++, // ]

	    //special tags
	    BEFORE_SPECIAL            = i++, //S
	    BEFORE_SPECIAL_END        = i++,   //S

	    BEFORE_SCRIPT_1           = i++, //C
	    BEFORE_SCRIPT_2           = i++, //R
	    BEFORE_SCRIPT_3           = i++, //I
	    BEFORE_SCRIPT_4           = i++, //P
	    BEFORE_SCRIPT_5           = i++, //T
	    AFTER_SCRIPT_1            = i++, //C
	    AFTER_SCRIPT_2            = i++, //R
	    AFTER_SCRIPT_3            = i++, //I
	    AFTER_SCRIPT_4            = i++, //P
	    AFTER_SCRIPT_5            = i++, //T

	    BEFORE_STYLE_1            = i++, //T
	    BEFORE_STYLE_2            = i++, //Y
	    BEFORE_STYLE_3            = i++, //L
	    BEFORE_STYLE_4            = i++, //E
	    AFTER_STYLE_1             = i++, //T
	    AFTER_STYLE_2             = i++, //Y
	    AFTER_STYLE_3             = i++, //L
	    AFTER_STYLE_4             = i++, //E

	    BEFORE_ENTITY             = i++, //&
	    BEFORE_NUMERIC_ENTITY     = i++, //#
	    IN_NAMED_ENTITY           = i++,
	    IN_NUMERIC_ENTITY         = i++,
	    IN_HEX_ENTITY             = i++, //X

	    j = 0,

	    SPECIAL_NONE              = j++,
	    SPECIAL_SCRIPT            = j++,
	    SPECIAL_STYLE             = j++;

	function whitespace(c){
		return c === " " || c === "\n" || c === "\t" || c === "\f" || c === "\r";
	}

	function characterState(char, SUCCESS){
		return function(c){
			if(c === char) this._state = SUCCESS;
		};
	}

	function ifElseState(upper, SUCCESS, FAILURE){
		var lower = upper.toLowerCase();

		if(upper === lower){
			return function(c){
				if(c === lower){
					this._state = SUCCESS;
				} else {
					this._state = FAILURE;
					this._index--;
				}
			};
		} else {
			return function(c){
				if(c === lower || c === upper){
					this._state = SUCCESS;
				} else {
					this._state = FAILURE;
					this._index--;
				}
			};
		}
	}

	function consumeSpecialNameChar(upper, NEXT_STATE){
		var lower = upper.toLowerCase();

		return function(c){
			if(c === lower || c === upper){
				this._state = NEXT_STATE;
			} else {
				this._state = IN_TAG_NAME;
				this._index--; //consume the token again
			}
		};
	}

	function Tokenizer(options, cbs){
		this._state = TEXT;
		this._buffer = "";
		this._sectionStart = 0;
		this._index = 0;
		this._bufferOffset = 0; //chars removed from _buffer
		this._baseState = TEXT;
		this._special = SPECIAL_NONE;
		this._cbs = cbs;
		this._running = true;
		this._ended = false;
		this._xmlMode = !!(options && options.xmlMode);
		this._decodeEntities = !!(options && options.decodeEntities);
	}

	Tokenizer.prototype._stateText = function(c){
		if(c === "<"){
			if(this._index > this._sectionStart){
				this._cbs.ontext(this._getSection());
			}
			this._state = BEFORE_TAG_NAME;
			this._sectionStart = this._index;
		} else if(this._decodeEntities && this._special === SPECIAL_NONE && c === "&"){
			if(this._index > this._sectionStart){
				this._cbs.ontext(this._getSection());
			}
			this._baseState = TEXT;
			this._state = BEFORE_ENTITY;
			this._sectionStart = this._index;
		}
	};

	Tokenizer.prototype._stateBeforeTagName = function(c){
		if(c === "/"){
			this._state = BEFORE_CLOSING_TAG_NAME;
		} else if(c === ">" || this._special !== SPECIAL_NONE || whitespace(c)) {
			this._state = TEXT;
		} else if(c === "!"){
			this._state = BEFORE_DECLARATION;
			this._sectionStart = this._index + 1;
		} else if(c === "?"){
			this._state = IN_PROCESSING_INSTRUCTION;
			this._sectionStart = this._index + 1;
		} else if(c === "<"){
			this._cbs.ontext(this._getSection());
			this._sectionStart = this._index;
		} else {
			this._state = (!this._xmlMode && (c === "s" || c === "S")) ?
							BEFORE_SPECIAL : IN_TAG_NAME;
			this._sectionStart = this._index;
		}
	};

	Tokenizer.prototype._stateInTagName = function(c){
		if(c === "/" || c === ">" || whitespace(c)){
			this._emitToken("onopentagname");
			this._state = BEFORE_ATTRIBUTE_NAME;
			this._index--;
		}
	};

	Tokenizer.prototype._stateBeforeCloseingTagName = function(c){
		if(whitespace(c));
		else if(c === ">"){
			this._state = TEXT;
		} else if(this._special !== SPECIAL_NONE){
			if(c === "s" || c === "S"){
				this._state = BEFORE_SPECIAL_END;
			} else {
				this._state = TEXT;
				this._index--;
			}
		} else {
			this._state = IN_CLOSING_TAG_NAME;
			this._sectionStart = this._index;
		}
	};

	Tokenizer.prototype._stateInCloseingTagName = function(c){
		if(c === ">" || whitespace(c)){
			this._emitToken("onclosetag");
			this._state = AFTER_CLOSING_TAG_NAME;
			this._index--;
		}
	};

	Tokenizer.prototype._stateAfterCloseingTagName = function(c){
		//skip everything until ">"
		if(c === ">"){
			this._state = TEXT;
			this._sectionStart = this._index + 1;
		}
	};

	Tokenizer.prototype._stateBeforeAttributeName = function(c){
		if(c === ">"){
			this._cbs.onopentagend();
			this._state = TEXT;
			this._sectionStart = this._index + 1;
		} else if(c === "/"){
			this._state = IN_SELF_CLOSING_TAG;
		} else if(!whitespace(c)){
			this._state = IN_ATTRIBUTE_NAME;
			this._sectionStart = this._index;
		}
	};

	Tokenizer.prototype._stateInSelfClosingTag = function(c){
		if(c === ">"){
			this._cbs.onselfclosingtag();
			this._state = TEXT;
			this._sectionStart = this._index + 1;
		} else if(!whitespace(c)){
			this._state = BEFORE_ATTRIBUTE_NAME;
			this._index--;
		}
	};

	Tokenizer.prototype._stateInAttributeName = function(c){
		if(c === "=" || c === "/" || c === ">" || whitespace(c)){
			this._cbs.onattribname(this._getSection());
			this._sectionStart = -1;
			this._state = AFTER_ATTRIBUTE_NAME;
			this._index--;
		}
	};

	Tokenizer.prototype._stateAfterAttributeName = function(c){
		if(c === "="){
			this._state = BEFORE_ATTRIBUTE_VALUE;
		} else if(c === "/" || c === ">"){
			this._cbs.onattribend();
			this._state = BEFORE_ATTRIBUTE_NAME;
			this._index--;
		} else if(!whitespace(c)){
			this._cbs.onattribend();
			this._state = IN_ATTRIBUTE_NAME;
			this._sectionStart = this._index;
		}
	};

	Tokenizer.prototype._stateBeforeAttributeValue = function(c){
		if(c === "\""){
			this._state = IN_ATTRIBUTE_VALUE_DQ;
			this._sectionStart = this._index + 1;
		} else if(c === "'"){
			this._state = IN_ATTRIBUTE_VALUE_SQ;
			this._sectionStart = this._index + 1;
		} else if(!whitespace(c)){
			this._state = IN_ATTRIBUTE_VALUE_NQ;
			this._sectionStart = this._index;
			this._index--; //reconsume token
		}
	};

	Tokenizer.prototype._stateInAttributeValueDoubleQuotes = function(c){
		if(c === "\""){
			this._emitToken("onattribdata");
			this._cbs.onattribend();
			this._state = BEFORE_ATTRIBUTE_NAME;
		} else if(this._decodeEntities && c === "&"){
			this._emitToken("onattribdata");
			this._baseState = this._state;
			this._state = BEFORE_ENTITY;
			this._sectionStart = this._index;
		}
	};

	Tokenizer.prototype._stateInAttributeValueSingleQuotes = function(c){
		if(c === "'"){
			this._emitToken("onattribdata");
			this._cbs.onattribend();
			this._state = BEFORE_ATTRIBUTE_NAME;
		} else if(this._decodeEntities && c === "&"){
			this._emitToken("onattribdata");
			this._baseState = this._state;
			this._state = BEFORE_ENTITY;
			this._sectionStart = this._index;
		}
	};

	Tokenizer.prototype._stateInAttributeValueNoQuotes = function(c){
		if(whitespace(c) || c === ">"){
			this._emitToken("onattribdata");
			this._cbs.onattribend();
			this._state = BEFORE_ATTRIBUTE_NAME;
			this._index--;
		} else if(this._decodeEntities && c === "&"){
			this._emitToken("onattribdata");
			this._baseState = this._state;
			this._state = BEFORE_ENTITY;
			this._sectionStart = this._index;
		}
	};

	Tokenizer.prototype._stateBeforeDeclaration = function(c){
		this._state = c === "[" ? BEFORE_CDATA_1 :
						c === "-" ? BEFORE_COMMENT :
							IN_DECLARATION;
	};

	Tokenizer.prototype._stateInDeclaration = function(c){
		if(c === ">"){
			this._cbs.ondeclaration(this._getSection());
			this._state = TEXT;
			this._sectionStart = this._index + 1;
		}
	};

	Tokenizer.prototype._stateInProcessingInstruction = function(c){
		if(c === ">"){
			this._cbs.onprocessinginstruction(this._getSection());
			this._state = TEXT;
			this._sectionStart = this._index + 1;
		}
	};

	Tokenizer.prototype._stateBeforeComment = function(c){
		if(c === "-"){
			this._state = IN_COMMENT;
			this._sectionStart = this._index + 1;
		} else {
			this._state = IN_DECLARATION;
		}
	};

	Tokenizer.prototype._stateInComment = function(c){
		if(c === "-") this._state = AFTER_COMMENT_1;
	};

	Tokenizer.prototype._stateAfterComment1 = function(c){
		if(c === "-"){
			this._state = AFTER_COMMENT_2;
		} else {
			this._state = IN_COMMENT;
		}
	};

	Tokenizer.prototype._stateAfterComment2 = function(c){
		if(c === ">"){
			//remove 2 trailing chars
			this._cbs.oncomment(this._buffer.substring(this._sectionStart, this._index - 2));
			this._state = TEXT;
			this._sectionStart = this._index + 1;
		} else if(c !== "-"){
			this._state = IN_COMMENT;
		}
		// else: stay in AFTER_COMMENT_2 (`--->`)
	};

	Tokenizer.prototype._stateBeforeCdata1 = ifElseState("C", BEFORE_CDATA_2, IN_DECLARATION);
	Tokenizer.prototype._stateBeforeCdata2 = ifElseState("D", BEFORE_CDATA_3, IN_DECLARATION);
	Tokenizer.prototype._stateBeforeCdata3 = ifElseState("A", BEFORE_CDATA_4, IN_DECLARATION);
	Tokenizer.prototype._stateBeforeCdata4 = ifElseState("T", BEFORE_CDATA_5, IN_DECLARATION);
	Tokenizer.prototype._stateBeforeCdata5 = ifElseState("A", BEFORE_CDATA_6, IN_DECLARATION);

	Tokenizer.prototype._stateBeforeCdata6 = function(c){
		if(c === "["){
			this._state = IN_CDATA;
			this._sectionStart = this._index + 1;
		} else {
			this._state = IN_DECLARATION;
			this._index--;
		}
	};

	Tokenizer.prototype._stateInCdata = function(c){
		if(c === "]") this._state = AFTER_CDATA_1;
	};

	Tokenizer.prototype._stateAfterCdata1 = characterState("]", AFTER_CDATA_2);

	Tokenizer.prototype._stateAfterCdata2 = function(c){
		if(c === ">"){
			//remove 2 trailing chars
			this._cbs.oncdata(this._buffer.substring(this._sectionStart, this._index - 2));
			this._state = TEXT;
			this._sectionStart = this._index + 1;
		} else if(c !== "]") {
			this._state = IN_CDATA;
		}
		//else: stay in AFTER_CDATA_2 (`]]]>`)
	};

	Tokenizer.prototype._stateBeforeSpecial = function(c){
		if(c === "c" || c === "C"){
			this._state = BEFORE_SCRIPT_1;
		} else if(c === "t" || c === "T"){
			this._state = BEFORE_STYLE_1;
		} else {
			this._state = IN_TAG_NAME;
			this._index--; //consume the token again
		}
	};

	Tokenizer.prototype._stateBeforeSpecialEnd = function(c){
		if(this._special === SPECIAL_SCRIPT && (c === "c" || c === "C")){
			this._state = AFTER_SCRIPT_1;
		} else if(this._special === SPECIAL_STYLE && (c === "t" || c === "T")){
			this._state = AFTER_STYLE_1;
		}
		else this._state = TEXT;
	};

	Tokenizer.prototype._stateBeforeScript1 = consumeSpecialNameChar("R", BEFORE_SCRIPT_2);
	Tokenizer.prototype._stateBeforeScript2 = consumeSpecialNameChar("I", BEFORE_SCRIPT_3);
	Tokenizer.prototype._stateBeforeScript3 = consumeSpecialNameChar("P", BEFORE_SCRIPT_4);
	Tokenizer.prototype._stateBeforeScript4 = consumeSpecialNameChar("T", BEFORE_SCRIPT_5);

	Tokenizer.prototype._stateBeforeScript5 = function(c){
		if(c === "/" || c === ">" || whitespace(c)){
			this._special = SPECIAL_SCRIPT;
		}
		this._state = IN_TAG_NAME;
		this._index--; //consume the token again
	};

	Tokenizer.prototype._stateAfterScript1 = ifElseState("R", AFTER_SCRIPT_2, TEXT);
	Tokenizer.prototype._stateAfterScript2 = ifElseState("I", AFTER_SCRIPT_3, TEXT);
	Tokenizer.prototype._stateAfterScript3 = ifElseState("P", AFTER_SCRIPT_4, TEXT);
	Tokenizer.prototype._stateAfterScript4 = ifElseState("T", AFTER_SCRIPT_5, TEXT);

	Tokenizer.prototype._stateAfterScript5 = function(c){
		if(c === ">" || whitespace(c)){
			this._special = SPECIAL_NONE;
			this._state = IN_CLOSING_TAG_NAME;
			this._sectionStart = this._index - 6;
			this._index--; //reconsume the token
		}
		else this._state = TEXT;
	};

	Tokenizer.prototype._stateBeforeStyle1 = consumeSpecialNameChar("Y", BEFORE_STYLE_2);
	Tokenizer.prototype._stateBeforeStyle2 = consumeSpecialNameChar("L", BEFORE_STYLE_3);
	Tokenizer.prototype._stateBeforeStyle3 = consumeSpecialNameChar("E", BEFORE_STYLE_4);

	Tokenizer.prototype._stateBeforeStyle4 = function(c){
		if(c === "/" || c === ">" || whitespace(c)){
			this._special = SPECIAL_STYLE;
		}
		this._state = IN_TAG_NAME;
		this._index--; //consume the token again
	};

	Tokenizer.prototype._stateAfterStyle1 = ifElseState("Y", AFTER_STYLE_2, TEXT);
	Tokenizer.prototype._stateAfterStyle2 = ifElseState("L", AFTER_STYLE_3, TEXT);
	Tokenizer.prototype._stateAfterStyle3 = ifElseState("E", AFTER_STYLE_4, TEXT);

	Tokenizer.prototype._stateAfterStyle4 = function(c){
		if(c === ">" || whitespace(c)){
			this._special = SPECIAL_NONE;
			this._state = IN_CLOSING_TAG_NAME;
			this._sectionStart = this._index - 5;
			this._index--; //reconsume the token
		}
		else this._state = TEXT;
	};

	Tokenizer.prototype._stateBeforeEntity = ifElseState("#", BEFORE_NUMERIC_ENTITY, IN_NAMED_ENTITY);
	Tokenizer.prototype._stateBeforeNumericEntity = ifElseState("X", IN_HEX_ENTITY, IN_NUMERIC_ENTITY);

	//for entities terminated with a semicolon
	Tokenizer.prototype._parseNamedEntityStrict = function(){
		//offset = 1
		if(this._sectionStart + 1 < this._index){
			var entity = this._buffer.substring(this._sectionStart + 1, this._index),
			    map = this._xmlMode ? xmlMap : entityMap;

			if(map.hasOwnProperty(entity)){
				this._emitPartial(map[entity]);
				this._sectionStart = this._index + 1;
			}
		}
	};


	//parses legacy entities (without trailing semicolon)
	Tokenizer.prototype._parseLegacyEntity = function(){
		var start = this._sectionStart + 1,
		    limit = this._index - start;

		if(limit > 6) limit = 6; //the max length of legacy entities is 6

		while(limit >= 2){ //the min length of legacy entities is 2
			var entity = this._buffer.substr(start, limit);

			if(legacyMap.hasOwnProperty(entity)){
				this._emitPartial(legacyMap[entity]);
				this._sectionStart += limit + 1;
				return;
			} else {
				limit--;
			}
		}
	};

	Tokenizer.prototype._stateInNamedEntity = function(c){
		if(c === ";"){
			this._parseNamedEntityStrict();
			if(this._sectionStart + 1 < this._index && !this._xmlMode){
				this._parseLegacyEntity();
			}
			this._state = this._baseState;
		} else if((c < "a" || c > "z") && (c < "A" || c > "Z") && (c < "0" || c > "9")){
			if(this._xmlMode);
			else if(this._sectionStart + 1 === this._index);
			else if(this._baseState !== TEXT){
				if(c !== "="){
					this._parseNamedEntityStrict();
				}
			} else {
				this._parseLegacyEntity();
			}

			this._state = this._baseState;
			this._index--;
		}
	};

	Tokenizer.prototype._decodeNumericEntity = function(offset, base){
		var sectionStart = this._sectionStart + offset;

		if(sectionStart !== this._index){
			//parse entity
			var entity = this._buffer.substring(sectionStart, this._index);
			var parsed = parseInt(entity, base);

			this._emitPartial(decodeCodePoint(parsed));
			this._sectionStart = this._index;
		} else {
			this._sectionStart--;
		}

		this._state = this._baseState;
	};

	Tokenizer.prototype._stateInNumericEntity = function(c){
		if(c === ";"){
			this._decodeNumericEntity(2, 10);
			this._sectionStart++;
		} else if(c < "0" || c > "9"){
			if(!this._xmlMode){
				this._decodeNumericEntity(2, 10);
			} else {
				this._state = this._baseState;
			}
			this._index--;
		}
	};

	Tokenizer.prototype._stateInHexEntity = function(c){
		if(c === ";"){
			this._decodeNumericEntity(3, 16);
			this._sectionStart++;
		} else if((c < "a" || c > "f") && (c < "A" || c > "F") && (c < "0" || c > "9")){
			if(!this._xmlMode){
				this._decodeNumericEntity(3, 16);
			} else {
				this._state = this._baseState;
			}
			this._index--;
		}
	};

	Tokenizer.prototype._cleanup = function (){
		if(this._sectionStart < 0){
			this._buffer = "";
			this._index = 0;
			this._bufferOffset += this._index;
		} else if(this._running){
			if(this._state === TEXT){
				if(this._sectionStart !== this._index){
					this._cbs.ontext(this._buffer.substr(this._sectionStart));
				}
				this._buffer = "";
				this._index = 0;
				this._bufferOffset += this._index;
			} else if(this._sectionStart === this._index){
				//the section just started
				this._buffer = "";
				this._index = 0;
				this._bufferOffset += this._index;
			} else {
				//remove everything unnecessary
				this._buffer = this._buffer.substr(this._sectionStart);
				this._index -= this._sectionStart;
				this._bufferOffset += this._sectionStart;
			}

			this._sectionStart = 0;
		}
	};

	//TODO make events conditional
	Tokenizer.prototype.write = function(chunk){
		if(this._ended) this._cbs.onerror(Error(".write() after done!"));

		this._buffer += chunk;
		this._parse();
	};

	Tokenizer.prototype._parse = function(){
		while(this._index < this._buffer.length && this._running){
			var c = this._buffer.charAt(this._index);
			if(this._state === TEXT) {
				this._stateText(c);
			} else if(this._state === BEFORE_TAG_NAME){
				this._stateBeforeTagName(c);
			} else if(this._state === IN_TAG_NAME) {
				this._stateInTagName(c);
			} else if(this._state === BEFORE_CLOSING_TAG_NAME){
				this._stateBeforeCloseingTagName(c);
			} else if(this._state === IN_CLOSING_TAG_NAME){
				this._stateInCloseingTagName(c);
			} else if(this._state === AFTER_CLOSING_TAG_NAME){
				this._stateAfterCloseingTagName(c);
			} else if(this._state === IN_SELF_CLOSING_TAG){
				this._stateInSelfClosingTag(c);
			}

			/*
			*	attributes
			*/
			else if(this._state === BEFORE_ATTRIBUTE_NAME){
				this._stateBeforeAttributeName(c);
			} else if(this._state === IN_ATTRIBUTE_NAME){
				this._stateInAttributeName(c);
			} else if(this._state === AFTER_ATTRIBUTE_NAME){
				this._stateAfterAttributeName(c);
			} else if(this._state === BEFORE_ATTRIBUTE_VALUE){
				this._stateBeforeAttributeValue(c);
			} else if(this._state === IN_ATTRIBUTE_VALUE_DQ){
				this._stateInAttributeValueDoubleQuotes(c);
			} else if(this._state === IN_ATTRIBUTE_VALUE_SQ){
				this._stateInAttributeValueSingleQuotes(c);
			} else if(this._state === IN_ATTRIBUTE_VALUE_NQ){
				this._stateInAttributeValueNoQuotes(c);
			}

			/*
			*	declarations
			*/
			else if(this._state === BEFORE_DECLARATION){
				this._stateBeforeDeclaration(c);
			} else if(this._state === IN_DECLARATION){
				this._stateInDeclaration(c);
			}

			/*
			*	processing instructions
			*/
			else if(this._state === IN_PROCESSING_INSTRUCTION){
				this._stateInProcessingInstruction(c);
			}

			/*
			*	comments
			*/
			else if(this._state === BEFORE_COMMENT){
				this._stateBeforeComment(c);
			} else if(this._state === IN_COMMENT){
				this._stateInComment(c);
			} else if(this._state === AFTER_COMMENT_1){
				this._stateAfterComment1(c);
			} else if(this._state === AFTER_COMMENT_2){
				this._stateAfterComment2(c);
			}

			/*
			*	cdata
			*/
			else if(this._state === BEFORE_CDATA_1){
				this._stateBeforeCdata1(c);
			} else if(this._state === BEFORE_CDATA_2){
				this._stateBeforeCdata2(c);
			} else if(this._state === BEFORE_CDATA_3){
				this._stateBeforeCdata3(c);
			} else if(this._state === BEFORE_CDATA_4){
				this._stateBeforeCdata4(c);
			} else if(this._state === BEFORE_CDATA_5){
				this._stateBeforeCdata5(c);
			} else if(this._state === BEFORE_CDATA_6){
				this._stateBeforeCdata6(c);
			} else if(this._state === IN_CDATA){
				this._stateInCdata(c);
			} else if(this._state === AFTER_CDATA_1){
				this._stateAfterCdata1(c);
			} else if(this._state === AFTER_CDATA_2){
				this._stateAfterCdata2(c);
			}

			/*
			* special tags
			*/
			else if(this._state === BEFORE_SPECIAL){
				this._stateBeforeSpecial(c);
			} else if(this._state === BEFORE_SPECIAL_END){
				this._stateBeforeSpecialEnd(c);
			}

			/*
			* script
			*/
			else if(this._state === BEFORE_SCRIPT_1){
				this._stateBeforeScript1(c);
			} else if(this._state === BEFORE_SCRIPT_2){
				this._stateBeforeScript2(c);
			} else if(this._state === BEFORE_SCRIPT_3){
				this._stateBeforeScript3(c);
			} else if(this._state === BEFORE_SCRIPT_4){
				this._stateBeforeScript4(c);
			} else if(this._state === BEFORE_SCRIPT_5){
				this._stateBeforeScript5(c);
			}

			else if(this._state === AFTER_SCRIPT_1){
				this._stateAfterScript1(c);
			} else if(this._state === AFTER_SCRIPT_2){
				this._stateAfterScript2(c);
			} else if(this._state === AFTER_SCRIPT_3){
				this._stateAfterScript3(c);
			} else if(this._state === AFTER_SCRIPT_4){
				this._stateAfterScript4(c);
			} else if(this._state === AFTER_SCRIPT_5){
				this._stateAfterScript5(c);
			}

			/*
			* style
			*/
			else if(this._state === BEFORE_STYLE_1){
				this._stateBeforeStyle1(c);
			} else if(this._state === BEFORE_STYLE_2){
				this._stateBeforeStyle2(c);
			} else if(this._state === BEFORE_STYLE_3){
				this._stateBeforeStyle3(c);
			} else if(this._state === BEFORE_STYLE_4){
				this._stateBeforeStyle4(c);
			}

			else if(this._state === AFTER_STYLE_1){
				this._stateAfterStyle1(c);
			} else if(this._state === AFTER_STYLE_2){
				this._stateAfterStyle2(c);
			} else if(this._state === AFTER_STYLE_3){
				this._stateAfterStyle3(c);
			} else if(this._state === AFTER_STYLE_4){
				this._stateAfterStyle4(c);
			}

			/*
			* entities
			*/
			else if(this._state === BEFORE_ENTITY){
				this._stateBeforeEntity(c);
			} else if(this._state === BEFORE_NUMERIC_ENTITY){
				this._stateBeforeNumericEntity(c);
			} else if(this._state === IN_NAMED_ENTITY){
				this._stateInNamedEntity(c);
			} else if(this._state === IN_NUMERIC_ENTITY){
				this._stateInNumericEntity(c);
			} else if(this._state === IN_HEX_ENTITY){
				this._stateInHexEntity(c);
			}

			else {
				this._cbs.onerror(Error("unknown _state"), this._state);
			}

			this._index++;
		}

		this._cleanup();
	};

	Tokenizer.prototype.pause = function(){
		this._running = false;
	};
	Tokenizer.prototype.resume = function(){
		this._running = true;

		if(this._index < this._buffer.length){
			this._parse();
		}
		if(this._ended){
			this._finish();
		}
	};

	Tokenizer.prototype.end = function(chunk){
		if(this._ended) this._cbs.onerror(Error(".end() after done!"));
		if(chunk) this.write(chunk);

		this._ended = true;

		if(this._running) this._finish();
	};

	Tokenizer.prototype._finish = function(){
		//if there is remaining data, emit it in a reasonable way
		if(this._sectionStart < this._index){
			this._handleTrailingData();
		}

		this._cbs.onend();
	};

	Tokenizer.prototype._handleTrailingData = function(){
		var data = this._buffer.substr(this._sectionStart);

		if(this._state === IN_CDATA || this._state === AFTER_CDATA_1 || this._state === AFTER_CDATA_2){
			this._cbs.oncdata(data);
		} else if(this._state === IN_COMMENT || this._state === AFTER_COMMENT_1 || this._state === AFTER_COMMENT_2){
			this._cbs.oncomment(data);
		} else if(this._state === IN_NAMED_ENTITY && !this._xmlMode){
			this._parseLegacyEntity();
			if(this._sectionStart < this._index){
				this._state = this._baseState;
				this._handleTrailingData();
			}
		} else if(this._state === IN_NUMERIC_ENTITY && !this._xmlMode){
			this._decodeNumericEntity(2, 10);
			if(this._sectionStart < this._index){
				this._state = this._baseState;
				this._handleTrailingData();
			}
		} else if(this._state === IN_HEX_ENTITY && !this._xmlMode){
			this._decodeNumericEntity(3, 16);
			if(this._sectionStart < this._index){
				this._state = this._baseState;
				this._handleTrailingData();
			}
		} else if(
			this._state !== IN_TAG_NAME &&
			this._state !== BEFORE_ATTRIBUTE_NAME &&
			this._state !== BEFORE_ATTRIBUTE_VALUE &&
			this._state !== AFTER_ATTRIBUTE_NAME &&
			this._state !== IN_ATTRIBUTE_NAME &&
			this._state !== IN_ATTRIBUTE_VALUE_SQ &&
			this._state !== IN_ATTRIBUTE_VALUE_DQ &&
			this._state !== IN_ATTRIBUTE_VALUE_NQ &&
			this._state !== IN_CLOSING_TAG_NAME
		){
			this._cbs.ontext(data);
		}
		//else, ignore remaining data
		//TODO add a way to remove current tag
	};

	Tokenizer.prototype.reset = function(){
		Tokenizer.call(this, {xmlMode: this._xmlMode, decodeEntities: this._decodeEntities}, this._cbs);
	};

	Tokenizer.prototype.getAbsoluteIndex = function(){
		return this._bufferOffset + this._index;
	};

	Tokenizer.prototype._getSection = function(){
		return this._buffer.substring(this._sectionStart, this._index);
	};

	Tokenizer.prototype._emitToken = function(name){
		this._cbs[name](this._getSection());
		this._sectionStart = -1;
	};

	Tokenizer.prototype._emitPartial = function(value){
		if(this._baseState !== TEXT){
			this._cbs.onattribdata(value); //TODO implement the new event
		} else {
			this._cbs.ontext(value);
		}
	};


/***/ },

/***/ 1101:
/***/ function(module, exports, __webpack_require__) {

	var decodeMap = __webpack_require__(1102);

	module.exports = decodeCodePoint;

	// modified version of https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
	function decodeCodePoint(codePoint){

		if((codePoint >= 0xD800 && codePoint <= 0xDFFF) || codePoint > 0x10FFFF){
			return "\uFFFD";
		}

		if(codePoint in decodeMap){
			codePoint = decodeMap[codePoint];
		}

		var output = "";

		if(codePoint > 0xFFFF){
			codePoint -= 0x10000;
			output += String.fromCharCode(codePoint >>> 10 & 0x3FF | 0xD800);
			codePoint = 0xDC00 | codePoint & 0x3FF;
		}

		output += String.fromCharCode(codePoint);
		return output;
	}


/***/ },

/***/ 1102:
/***/ function(module, exports) {

	module.exports = {
		"0": 65533,
		"128": 8364,
		"130": 8218,
		"131": 402,
		"132": 8222,
		"133": 8230,
		"134": 8224,
		"135": 8225,
		"136": 710,
		"137": 8240,
		"138": 352,
		"139": 8249,
		"140": 338,
		"142": 381,
		"145": 8216,
		"146": 8217,
		"147": 8220,
		"148": 8221,
		"149": 8226,
		"150": 8211,
		"151": 8212,
		"152": 732,
		"153": 8482,
		"154": 353,
		"155": 8250,
		"156": 339,
		"158": 382,
		"159": 376
	};

/***/ },

/***/ 1103:
/***/ function(module, exports) {

	module.exports = {
		"Aacute": "Á",
		"aacute": "á",
		"Abreve": "Ă",
		"abreve": "ă",
		"ac": "∾",
		"acd": "∿",
		"acE": "∾̳",
		"Acirc": "Â",
		"acirc": "â",
		"acute": "´",
		"Acy": "А",
		"acy": "а",
		"AElig": "Æ",
		"aelig": "æ",
		"af": "⁡",
		"Afr": "𝔄",
		"afr": "𝔞",
		"Agrave": "À",
		"agrave": "à",
		"alefsym": "ℵ",
		"aleph": "ℵ",
		"Alpha": "Α",
		"alpha": "α",
		"Amacr": "Ā",
		"amacr": "ā",
		"amalg": "⨿",
		"amp": "&",
		"AMP": "&",
		"andand": "⩕",
		"And": "⩓",
		"and": "∧",
		"andd": "⩜",
		"andslope": "⩘",
		"andv": "⩚",
		"ang": "∠",
		"ange": "⦤",
		"angle": "∠",
		"angmsdaa": "⦨",
		"angmsdab": "⦩",
		"angmsdac": "⦪",
		"angmsdad": "⦫",
		"angmsdae": "⦬",
		"angmsdaf": "⦭",
		"angmsdag": "⦮",
		"angmsdah": "⦯",
		"angmsd": "∡",
		"angrt": "∟",
		"angrtvb": "⊾",
		"angrtvbd": "⦝",
		"angsph": "∢",
		"angst": "Å",
		"angzarr": "⍼",
		"Aogon": "Ą",
		"aogon": "ą",
		"Aopf": "𝔸",
		"aopf": "𝕒",
		"apacir": "⩯",
		"ap": "≈",
		"apE": "⩰",
		"ape": "≊",
		"apid": "≋",
		"apos": "'",
		"ApplyFunction": "⁡",
		"approx": "≈",
		"approxeq": "≊",
		"Aring": "Å",
		"aring": "å",
		"Ascr": "𝒜",
		"ascr": "𝒶",
		"Assign": "≔",
		"ast": "*",
		"asymp": "≈",
		"asympeq": "≍",
		"Atilde": "Ã",
		"atilde": "ã",
		"Auml": "Ä",
		"auml": "ä",
		"awconint": "∳",
		"awint": "⨑",
		"backcong": "≌",
		"backepsilon": "϶",
		"backprime": "‵",
		"backsim": "∽",
		"backsimeq": "⋍",
		"Backslash": "∖",
		"Barv": "⫧",
		"barvee": "⊽",
		"barwed": "⌅",
		"Barwed": "⌆",
		"barwedge": "⌅",
		"bbrk": "⎵",
		"bbrktbrk": "⎶",
		"bcong": "≌",
		"Bcy": "Б",
		"bcy": "б",
		"bdquo": "„",
		"becaus": "∵",
		"because": "∵",
		"Because": "∵",
		"bemptyv": "⦰",
		"bepsi": "϶",
		"bernou": "ℬ",
		"Bernoullis": "ℬ",
		"Beta": "Β",
		"beta": "β",
		"beth": "ℶ",
		"between": "≬",
		"Bfr": "𝔅",
		"bfr": "𝔟",
		"bigcap": "⋂",
		"bigcirc": "◯",
		"bigcup": "⋃",
		"bigodot": "⨀",
		"bigoplus": "⨁",
		"bigotimes": "⨂",
		"bigsqcup": "⨆",
		"bigstar": "★",
		"bigtriangledown": "▽",
		"bigtriangleup": "△",
		"biguplus": "⨄",
		"bigvee": "⋁",
		"bigwedge": "⋀",
		"bkarow": "⤍",
		"blacklozenge": "⧫",
		"blacksquare": "▪",
		"blacktriangle": "▴",
		"blacktriangledown": "▾",
		"blacktriangleleft": "◂",
		"blacktriangleright": "▸",
		"blank": "␣",
		"blk12": "▒",
		"blk14": "░",
		"blk34": "▓",
		"block": "█",
		"bne": "=⃥",
		"bnequiv": "≡⃥",
		"bNot": "⫭",
		"bnot": "⌐",
		"Bopf": "𝔹",
		"bopf": "𝕓",
		"bot": "⊥",
		"bottom": "⊥",
		"bowtie": "⋈",
		"boxbox": "⧉",
		"boxdl": "┐",
		"boxdL": "╕",
		"boxDl": "╖",
		"boxDL": "╗",
		"boxdr": "┌",
		"boxdR": "╒",
		"boxDr": "╓",
		"boxDR": "╔",
		"boxh": "─",
		"boxH": "═",
		"boxhd": "┬",
		"boxHd": "╤",
		"boxhD": "╥",
		"boxHD": "╦",
		"boxhu": "┴",
		"boxHu": "╧",
		"boxhU": "╨",
		"boxHU": "╩",
		"boxminus": "⊟",
		"boxplus": "⊞",
		"boxtimes": "⊠",
		"boxul": "┘",
		"boxuL": "╛",
		"boxUl": "╜",
		"boxUL": "╝",
		"boxur": "└",
		"boxuR": "╘",
		"boxUr": "╙",
		"boxUR": "╚",
		"boxv": "│",
		"boxV": "║",
		"boxvh": "┼",
		"boxvH": "╪",
		"boxVh": "╫",
		"boxVH": "╬",
		"boxvl": "┤",
		"boxvL": "╡",
		"boxVl": "╢",
		"boxVL": "╣",
		"boxvr": "├",
		"boxvR": "╞",
		"boxVr": "╟",
		"boxVR": "╠",
		"bprime": "‵",
		"breve": "˘",
		"Breve": "˘",
		"brvbar": "¦",
		"bscr": "𝒷",
		"Bscr": "ℬ",
		"bsemi": "⁏",
		"bsim": "∽",
		"bsime": "⋍",
		"bsolb": "⧅",
		"bsol": "\\",
		"bsolhsub": "⟈",
		"bull": "•",
		"bullet": "•",
		"bump": "≎",
		"bumpE": "⪮",
		"bumpe": "≏",
		"Bumpeq": "≎",
		"bumpeq": "≏",
		"Cacute": "Ć",
		"cacute": "ć",
		"capand": "⩄",
		"capbrcup": "⩉",
		"capcap": "⩋",
		"cap": "∩",
		"Cap": "⋒",
		"capcup": "⩇",
		"capdot": "⩀",
		"CapitalDifferentialD": "ⅅ",
		"caps": "∩︀",
		"caret": "⁁",
		"caron": "ˇ",
		"Cayleys": "ℭ",
		"ccaps": "⩍",
		"Ccaron": "Č",
		"ccaron": "č",
		"Ccedil": "Ç",
		"ccedil": "ç",
		"Ccirc": "Ĉ",
		"ccirc": "ĉ",
		"Cconint": "∰",
		"ccups": "⩌",
		"ccupssm": "⩐",
		"Cdot": "Ċ",
		"cdot": "ċ",
		"cedil": "¸",
		"Cedilla": "¸",
		"cemptyv": "⦲",
		"cent": "¢",
		"centerdot": "·",
		"CenterDot": "·",
		"cfr": "𝔠",
		"Cfr": "ℭ",
		"CHcy": "Ч",
		"chcy": "ч",
		"check": "✓",
		"checkmark": "✓",
		"Chi": "Χ",
		"chi": "χ",
		"circ": "ˆ",
		"circeq": "≗",
		"circlearrowleft": "↺",
		"circlearrowright": "↻",
		"circledast": "⊛",
		"circledcirc": "⊚",
		"circleddash": "⊝",
		"CircleDot": "⊙",
		"circledR": "®",
		"circledS": "Ⓢ",
		"CircleMinus": "⊖",
		"CirclePlus": "⊕",
		"CircleTimes": "⊗",
		"cir": "○",
		"cirE": "⧃",
		"cire": "≗",
		"cirfnint": "⨐",
		"cirmid": "⫯",
		"cirscir": "⧂",
		"ClockwiseContourIntegral": "∲",
		"CloseCurlyDoubleQuote": "”",
		"CloseCurlyQuote": "’",
		"clubs": "♣",
		"clubsuit": "♣",
		"colon": ":",
		"Colon": "∷",
		"Colone": "⩴",
		"colone": "≔",
		"coloneq": "≔",
		"comma": ",",
		"commat": "@",
		"comp": "∁",
		"compfn": "∘",
		"complement": "∁",
		"complexes": "ℂ",
		"cong": "≅",
		"congdot": "⩭",
		"Congruent": "≡",
		"conint": "∮",
		"Conint": "∯",
		"ContourIntegral": "∮",
		"copf": "𝕔",
		"Copf": "ℂ",
		"coprod": "∐",
		"Coproduct": "∐",
		"copy": "©",
		"COPY": "©",
		"copysr": "℗",
		"CounterClockwiseContourIntegral": "∳",
		"crarr": "↵",
		"cross": "✗",
		"Cross": "⨯",
		"Cscr": "𝒞",
		"cscr": "𝒸",
		"csub": "⫏",
		"csube": "⫑",
		"csup": "⫐",
		"csupe": "⫒",
		"ctdot": "⋯",
		"cudarrl": "⤸",
		"cudarrr": "⤵",
		"cuepr": "⋞",
		"cuesc": "⋟",
		"cularr": "↶",
		"cularrp": "⤽",
		"cupbrcap": "⩈",
		"cupcap": "⩆",
		"CupCap": "≍",
		"cup": "∪",
		"Cup": "⋓",
		"cupcup": "⩊",
		"cupdot": "⊍",
		"cupor": "⩅",
		"cups": "∪︀",
		"curarr": "↷",
		"curarrm": "⤼",
		"curlyeqprec": "⋞",
		"curlyeqsucc": "⋟",
		"curlyvee": "⋎",
		"curlywedge": "⋏",
		"curren": "¤",
		"curvearrowleft": "↶",
		"curvearrowright": "↷",
		"cuvee": "⋎",
		"cuwed": "⋏",
		"cwconint": "∲",
		"cwint": "∱",
		"cylcty": "⌭",
		"dagger": "†",
		"Dagger": "‡",
		"daleth": "ℸ",
		"darr": "↓",
		"Darr": "↡",
		"dArr": "⇓",
		"dash": "‐",
		"Dashv": "⫤",
		"dashv": "⊣",
		"dbkarow": "⤏",
		"dblac": "˝",
		"Dcaron": "Ď",
		"dcaron": "ď",
		"Dcy": "Д",
		"dcy": "д",
		"ddagger": "‡",
		"ddarr": "⇊",
		"DD": "ⅅ",
		"dd": "ⅆ",
		"DDotrahd": "⤑",
		"ddotseq": "⩷",
		"deg": "°",
		"Del": "∇",
		"Delta": "Δ",
		"delta": "δ",
		"demptyv": "⦱",
		"dfisht": "⥿",
		"Dfr": "𝔇",
		"dfr": "𝔡",
		"dHar": "⥥",
		"dharl": "⇃",
		"dharr": "⇂",
		"DiacriticalAcute": "´",
		"DiacriticalDot": "˙",
		"DiacriticalDoubleAcute": "˝",
		"DiacriticalGrave": "`",
		"DiacriticalTilde": "˜",
		"diam": "⋄",
		"diamond": "⋄",
		"Diamond": "⋄",
		"diamondsuit": "♦",
		"diams": "♦",
		"die": "¨",
		"DifferentialD": "ⅆ",
		"digamma": "ϝ",
		"disin": "⋲",
		"div": "÷",
		"divide": "÷",
		"divideontimes": "⋇",
		"divonx": "⋇",
		"DJcy": "Ђ",
		"djcy": "ђ",
		"dlcorn": "⌞",
		"dlcrop": "⌍",
		"dollar": "$",
		"Dopf": "𝔻",
		"dopf": "𝕕",
		"Dot": "¨",
		"dot": "˙",
		"DotDot": "⃜",
		"doteq": "≐",
		"doteqdot": "≑",
		"DotEqual": "≐",
		"dotminus": "∸",
		"dotplus": "∔",
		"dotsquare": "⊡",
		"doublebarwedge": "⌆",
		"DoubleContourIntegral": "∯",
		"DoubleDot": "¨",
		"DoubleDownArrow": "⇓",
		"DoubleLeftArrow": "⇐",
		"DoubleLeftRightArrow": "⇔",
		"DoubleLeftTee": "⫤",
		"DoubleLongLeftArrow": "⟸",
		"DoubleLongLeftRightArrow": "⟺",
		"DoubleLongRightArrow": "⟹",
		"DoubleRightArrow": "⇒",
		"DoubleRightTee": "⊨",
		"DoubleUpArrow": "⇑",
		"DoubleUpDownArrow": "⇕",
		"DoubleVerticalBar": "∥",
		"DownArrowBar": "⤓",
		"downarrow": "↓",
		"DownArrow": "↓",
		"Downarrow": "⇓",
		"DownArrowUpArrow": "⇵",
		"DownBreve": "̑",
		"downdownarrows": "⇊",
		"downharpoonleft": "⇃",
		"downharpoonright": "⇂",
		"DownLeftRightVector": "⥐",
		"DownLeftTeeVector": "⥞",
		"DownLeftVectorBar": "⥖",
		"DownLeftVector": "↽",
		"DownRightTeeVector": "⥟",
		"DownRightVectorBar": "⥗",
		"DownRightVector": "⇁",
		"DownTeeArrow": "↧",
		"DownTee": "⊤",
		"drbkarow": "⤐",
		"drcorn": "⌟",
		"drcrop": "⌌",
		"Dscr": "𝒟",
		"dscr": "𝒹",
		"DScy": "Ѕ",
		"dscy": "ѕ",
		"dsol": "⧶",
		"Dstrok": "Đ",
		"dstrok": "đ",
		"dtdot": "⋱",
		"dtri": "▿",
		"dtrif": "▾",
		"duarr": "⇵",
		"duhar": "⥯",
		"dwangle": "⦦",
		"DZcy": "Џ",
		"dzcy": "џ",
		"dzigrarr": "⟿",
		"Eacute": "É",
		"eacute": "é",
		"easter": "⩮",
		"Ecaron": "Ě",
		"ecaron": "ě",
		"Ecirc": "Ê",
		"ecirc": "ê",
		"ecir": "≖",
		"ecolon": "≕",
		"Ecy": "Э",
		"ecy": "э",
		"eDDot": "⩷",
		"Edot": "Ė",
		"edot": "ė",
		"eDot": "≑",
		"ee": "ⅇ",
		"efDot": "≒",
		"Efr": "𝔈",
		"efr": "𝔢",
		"eg": "⪚",
		"Egrave": "È",
		"egrave": "è",
		"egs": "⪖",
		"egsdot": "⪘",
		"el": "⪙",
		"Element": "∈",
		"elinters": "⏧",
		"ell": "ℓ",
		"els": "⪕",
		"elsdot": "⪗",
		"Emacr": "Ē",
		"emacr": "ē",
		"empty": "∅",
		"emptyset": "∅",
		"EmptySmallSquare": "◻",
		"emptyv": "∅",
		"EmptyVerySmallSquare": "▫",
		"emsp13": " ",
		"emsp14": " ",
		"emsp": " ",
		"ENG": "Ŋ",
		"eng": "ŋ",
		"ensp": " ",
		"Eogon": "Ę",
		"eogon": "ę",
		"Eopf": "𝔼",
		"eopf": "𝕖",
		"epar": "⋕",
		"eparsl": "⧣",
		"eplus": "⩱",
		"epsi": "ε",
		"Epsilon": "Ε",
		"epsilon": "ε",
		"epsiv": "ϵ",
		"eqcirc": "≖",
		"eqcolon": "≕",
		"eqsim": "≂",
		"eqslantgtr": "⪖",
		"eqslantless": "⪕",
		"Equal": "⩵",
		"equals": "=",
		"EqualTilde": "≂",
		"equest": "≟",
		"Equilibrium": "⇌",
		"equiv": "≡",
		"equivDD": "⩸",
		"eqvparsl": "⧥",
		"erarr": "⥱",
		"erDot": "≓",
		"escr": "ℯ",
		"Escr": "ℰ",
		"esdot": "≐",
		"Esim": "⩳",
		"esim": "≂",
		"Eta": "Η",
		"eta": "η",
		"ETH": "Ð",
		"eth": "ð",
		"Euml": "Ë",
		"euml": "ë",
		"euro": "€",
		"excl": "!",
		"exist": "∃",
		"Exists": "∃",
		"expectation": "ℰ",
		"exponentiale": "ⅇ",
		"ExponentialE": "ⅇ",
		"fallingdotseq": "≒",
		"Fcy": "Ф",
		"fcy": "ф",
		"female": "♀",
		"ffilig": "ﬃ",
		"fflig": "ﬀ",
		"ffllig": "ﬄ",
		"Ffr": "𝔉",
		"ffr": "𝔣",
		"filig": "ﬁ",
		"FilledSmallSquare": "◼",
		"FilledVerySmallSquare": "▪",
		"fjlig": "fj",
		"flat": "♭",
		"fllig": "ﬂ",
		"fltns": "▱",
		"fnof": "ƒ",
		"Fopf": "𝔽",
		"fopf": "𝕗",
		"forall": "∀",
		"ForAll": "∀",
		"fork": "⋔",
		"forkv": "⫙",
		"Fouriertrf": "ℱ",
		"fpartint": "⨍",
		"frac12": "½",
		"frac13": "⅓",
		"frac14": "¼",
		"frac15": "⅕",
		"frac16": "⅙",
		"frac18": "⅛",
		"frac23": "⅔",
		"frac25": "⅖",
		"frac34": "¾",
		"frac35": "⅗",
		"frac38": "⅜",
		"frac45": "⅘",
		"frac56": "⅚",
		"frac58": "⅝",
		"frac78": "⅞",
		"frasl": "⁄",
		"frown": "⌢",
		"fscr": "𝒻",
		"Fscr": "ℱ",
		"gacute": "ǵ",
		"Gamma": "Γ",
		"gamma": "γ",
		"Gammad": "Ϝ",
		"gammad": "ϝ",
		"gap": "⪆",
		"Gbreve": "Ğ",
		"gbreve": "ğ",
		"Gcedil": "Ģ",
		"Gcirc": "Ĝ",
		"gcirc": "ĝ",
		"Gcy": "Г",
		"gcy": "г",
		"Gdot": "Ġ",
		"gdot": "ġ",
		"ge": "≥",
		"gE": "≧",
		"gEl": "⪌",
		"gel": "⋛",
		"geq": "≥",
		"geqq": "≧",
		"geqslant": "⩾",
		"gescc": "⪩",
		"ges": "⩾",
		"gesdot": "⪀",
		"gesdoto": "⪂",
		"gesdotol": "⪄",
		"gesl": "⋛︀",
		"gesles": "⪔",
		"Gfr": "𝔊",
		"gfr": "𝔤",
		"gg": "≫",
		"Gg": "⋙",
		"ggg": "⋙",
		"gimel": "ℷ",
		"GJcy": "Ѓ",
		"gjcy": "ѓ",
		"gla": "⪥",
		"gl": "≷",
		"glE": "⪒",
		"glj": "⪤",
		"gnap": "⪊",
		"gnapprox": "⪊",
		"gne": "⪈",
		"gnE": "≩",
		"gneq": "⪈",
		"gneqq": "≩",
		"gnsim": "⋧",
		"Gopf": "𝔾",
		"gopf": "𝕘",
		"grave": "`",
		"GreaterEqual": "≥",
		"GreaterEqualLess": "⋛",
		"GreaterFullEqual": "≧",
		"GreaterGreater": "⪢",
		"GreaterLess": "≷",
		"GreaterSlantEqual": "⩾",
		"GreaterTilde": "≳",
		"Gscr": "𝒢",
		"gscr": "ℊ",
		"gsim": "≳",
		"gsime": "⪎",
		"gsiml": "⪐",
		"gtcc": "⪧",
		"gtcir": "⩺",
		"gt": ">",
		"GT": ">",
		"Gt": "≫",
		"gtdot": "⋗",
		"gtlPar": "⦕",
		"gtquest": "⩼",
		"gtrapprox": "⪆",
		"gtrarr": "⥸",
		"gtrdot": "⋗",
		"gtreqless": "⋛",
		"gtreqqless": "⪌",
		"gtrless": "≷",
		"gtrsim": "≳",
		"gvertneqq": "≩︀",
		"gvnE": "≩︀",
		"Hacek": "ˇ",
		"hairsp": " ",
		"half": "½",
		"hamilt": "ℋ",
		"HARDcy": "Ъ",
		"hardcy": "ъ",
		"harrcir": "⥈",
		"harr": "↔",
		"hArr": "⇔",
		"harrw": "↭",
		"Hat": "^",
		"hbar": "ℏ",
		"Hcirc": "Ĥ",
		"hcirc": "ĥ",
		"hearts": "♥",
		"heartsuit": "♥",
		"hellip": "…",
		"hercon": "⊹",
		"hfr": "𝔥",
		"Hfr": "ℌ",
		"HilbertSpace": "ℋ",
		"hksearow": "⤥",
		"hkswarow": "⤦",
		"hoarr": "⇿",
		"homtht": "∻",
		"hookleftarrow": "↩",
		"hookrightarrow": "↪",
		"hopf": "𝕙",
		"Hopf": "ℍ",
		"horbar": "―",
		"HorizontalLine": "─",
		"hscr": "𝒽",
		"Hscr": "ℋ",
		"hslash": "ℏ",
		"Hstrok": "Ħ",
		"hstrok": "ħ",
		"HumpDownHump": "≎",
		"HumpEqual": "≏",
		"hybull": "⁃",
		"hyphen": "‐",
		"Iacute": "Í",
		"iacute": "í",
		"ic": "⁣",
		"Icirc": "Î",
		"icirc": "î",
		"Icy": "И",
		"icy": "и",
		"Idot": "İ",
		"IEcy": "Е",
		"iecy": "е",
		"iexcl": "¡",
		"iff": "⇔",
		"ifr": "𝔦",
		"Ifr": "ℑ",
		"Igrave": "Ì",
		"igrave": "ì",
		"ii": "ⅈ",
		"iiiint": "⨌",
		"iiint": "∭",
		"iinfin": "⧜",
		"iiota": "℩",
		"IJlig": "Ĳ",
		"ijlig": "ĳ",
		"Imacr": "Ī",
		"imacr": "ī",
		"image": "ℑ",
		"ImaginaryI": "ⅈ",
		"imagline": "ℐ",
		"imagpart": "ℑ",
		"imath": "ı",
		"Im": "ℑ",
		"imof": "⊷",
		"imped": "Ƶ",
		"Implies": "⇒",
		"incare": "℅",
		"in": "∈",
		"infin": "∞",
		"infintie": "⧝",
		"inodot": "ı",
		"intcal": "⊺",
		"int": "∫",
		"Int": "∬",
		"integers": "ℤ",
		"Integral": "∫",
		"intercal": "⊺",
		"Intersection": "⋂",
		"intlarhk": "⨗",
		"intprod": "⨼",
		"InvisibleComma": "⁣",
		"InvisibleTimes": "⁢",
		"IOcy": "Ё",
		"iocy": "ё",
		"Iogon": "Į",
		"iogon": "į",
		"Iopf": "𝕀",
		"iopf": "𝕚",
		"Iota": "Ι",
		"iota": "ι",
		"iprod": "⨼",
		"iquest": "¿",
		"iscr": "𝒾",
		"Iscr": "ℐ",
		"isin": "∈",
		"isindot": "⋵",
		"isinE": "⋹",
		"isins": "⋴",
		"isinsv": "⋳",
		"isinv": "∈",
		"it": "⁢",
		"Itilde": "Ĩ",
		"itilde": "ĩ",
		"Iukcy": "І",
		"iukcy": "і",
		"Iuml": "Ï",
		"iuml": "ï",
		"Jcirc": "Ĵ",
		"jcirc": "ĵ",
		"Jcy": "Й",
		"jcy": "й",
		"Jfr": "𝔍",
		"jfr": "𝔧",
		"jmath": "ȷ",
		"Jopf": "𝕁",
		"jopf": "𝕛",
		"Jscr": "𝒥",
		"jscr": "𝒿",
		"Jsercy": "Ј",
		"jsercy": "ј",
		"Jukcy": "Є",
		"jukcy": "є",
		"Kappa": "Κ",
		"kappa": "κ",
		"kappav": "ϰ",
		"Kcedil": "Ķ",
		"kcedil": "ķ",
		"Kcy": "К",
		"kcy": "к",
		"Kfr": "𝔎",
		"kfr": "𝔨",
		"kgreen": "ĸ",
		"KHcy": "Х",
		"khcy": "х",
		"KJcy": "Ќ",
		"kjcy": "ќ",
		"Kopf": "𝕂",
		"kopf": "𝕜",
		"Kscr": "𝒦",
		"kscr": "𝓀",
		"lAarr": "⇚",
		"Lacute": "Ĺ",
		"lacute": "ĺ",
		"laemptyv": "⦴",
		"lagran": "ℒ",
		"Lambda": "Λ",
		"lambda": "λ",
		"lang": "⟨",
		"Lang": "⟪",
		"langd": "⦑",
		"langle": "⟨",
		"lap": "⪅",
		"Laplacetrf": "ℒ",
		"laquo": "«",
		"larrb": "⇤",
		"larrbfs": "⤟",
		"larr": "←",
		"Larr": "↞",
		"lArr": "⇐",
		"larrfs": "⤝",
		"larrhk": "↩",
		"larrlp": "↫",
		"larrpl": "⤹",
		"larrsim": "⥳",
		"larrtl": "↢",
		"latail": "⤙",
		"lAtail": "⤛",
		"lat": "⪫",
		"late": "⪭",
		"lates": "⪭︀",
		"lbarr": "⤌",
		"lBarr": "⤎",
		"lbbrk": "❲",
		"lbrace": "{",
		"lbrack": "[",
		"lbrke": "⦋",
		"lbrksld": "⦏",
		"lbrkslu": "⦍",
		"Lcaron": "Ľ",
		"lcaron": "ľ",
		"Lcedil": "Ļ",
		"lcedil": "ļ",
		"lceil": "⌈",
		"lcub": "{",
		"Lcy": "Л",
		"lcy": "л",
		"ldca": "⤶",
		"ldquo": "“",
		"ldquor": "„",
		"ldrdhar": "⥧",
		"ldrushar": "⥋",
		"ldsh": "↲",
		"le": "≤",
		"lE": "≦",
		"LeftAngleBracket": "⟨",
		"LeftArrowBar": "⇤",
		"leftarrow": "←",
		"LeftArrow": "←",
		"Leftarrow": "⇐",
		"LeftArrowRightArrow": "⇆",
		"leftarrowtail": "↢",
		"LeftCeiling": "⌈",
		"LeftDoubleBracket": "⟦",
		"LeftDownTeeVector": "⥡",
		"LeftDownVectorBar": "⥙",
		"LeftDownVector": "⇃",
		"LeftFloor": "⌊",
		"leftharpoondown": "↽",
		"leftharpoonup": "↼",
		"leftleftarrows": "⇇",
		"leftrightarrow": "↔",
		"LeftRightArrow": "↔",
		"Leftrightarrow": "⇔",
		"leftrightarrows": "⇆",
		"leftrightharpoons": "⇋",
		"leftrightsquigarrow": "↭",
		"LeftRightVector": "⥎",
		"LeftTeeArrow": "↤",
		"LeftTee": "⊣",
		"LeftTeeVector": "⥚",
		"leftthreetimes": "⋋",
		"LeftTriangleBar": "⧏",
		"LeftTriangle": "⊲",
		"LeftTriangleEqual": "⊴",
		"LeftUpDownVector": "⥑",
		"LeftUpTeeVector": "⥠",
		"LeftUpVectorBar": "⥘",
		"LeftUpVector": "↿",
		"LeftVectorBar": "⥒",
		"LeftVector": "↼",
		"lEg": "⪋",
		"leg": "⋚",
		"leq": "≤",
		"leqq": "≦",
		"leqslant": "⩽",
		"lescc": "⪨",
		"les": "⩽",
		"lesdot": "⩿",
		"lesdoto": "⪁",
		"lesdotor": "⪃",
		"lesg": "⋚︀",
		"lesges": "⪓",
		"lessapprox": "⪅",
		"lessdot": "⋖",
		"lesseqgtr": "⋚",
		"lesseqqgtr": "⪋",
		"LessEqualGreater": "⋚",
		"LessFullEqual": "≦",
		"LessGreater": "≶",
		"lessgtr": "≶",
		"LessLess": "⪡",
		"lesssim": "≲",
		"LessSlantEqual": "⩽",
		"LessTilde": "≲",
		"lfisht": "⥼",
		"lfloor": "⌊",
		"Lfr": "𝔏",
		"lfr": "𝔩",
		"lg": "≶",
		"lgE": "⪑",
		"lHar": "⥢",
		"lhard": "↽",
		"lharu": "↼",
		"lharul": "⥪",
		"lhblk": "▄",
		"LJcy": "Љ",
		"ljcy": "љ",
		"llarr": "⇇",
		"ll": "≪",
		"Ll": "⋘",
		"llcorner": "⌞",
		"Lleftarrow": "⇚",
		"llhard": "⥫",
		"lltri": "◺",
		"Lmidot": "Ŀ",
		"lmidot": "ŀ",
		"lmoustache": "⎰",
		"lmoust": "⎰",
		"lnap": "⪉",
		"lnapprox": "⪉",
		"lne": "⪇",
		"lnE": "≨",
		"lneq": "⪇",
		"lneqq": "≨",
		"lnsim": "⋦",
		"loang": "⟬",
		"loarr": "⇽",
		"lobrk": "⟦",
		"longleftarrow": "⟵",
		"LongLeftArrow": "⟵",
		"Longleftarrow": "⟸",
		"longleftrightarrow": "⟷",
		"LongLeftRightArrow": "⟷",
		"Longleftrightarrow": "⟺",
		"longmapsto": "⟼",
		"longrightarrow": "⟶",
		"LongRightArrow": "⟶",
		"Longrightarrow": "⟹",
		"looparrowleft": "↫",
		"looparrowright": "↬",
		"lopar": "⦅",
		"Lopf": "𝕃",
		"lopf": "𝕝",
		"loplus": "⨭",
		"lotimes": "⨴",
		"lowast": "∗",
		"lowbar": "_",
		"LowerLeftArrow": "↙",
		"LowerRightArrow": "↘",
		"loz": "◊",
		"lozenge": "◊",
		"lozf": "⧫",
		"lpar": "(",
		"lparlt": "⦓",
		"lrarr": "⇆",
		"lrcorner": "⌟",
		"lrhar": "⇋",
		"lrhard": "⥭",
		"lrm": "‎",
		"lrtri": "⊿",
		"lsaquo": "‹",
		"lscr": "𝓁",
		"Lscr": "ℒ",
		"lsh": "↰",
		"Lsh": "↰",
		"lsim": "≲",
		"lsime": "⪍",
		"lsimg": "⪏",
		"lsqb": "[",
		"lsquo": "‘",
		"lsquor": "‚",
		"Lstrok": "Ł",
		"lstrok": "ł",
		"ltcc": "⪦",
		"ltcir": "⩹",
		"lt": "<",
		"LT": "<",
		"Lt": "≪",
		"ltdot": "⋖",
		"lthree": "⋋",
		"ltimes": "⋉",
		"ltlarr": "⥶",
		"ltquest": "⩻",
		"ltri": "◃",
		"ltrie": "⊴",
		"ltrif": "◂",
		"ltrPar": "⦖",
		"lurdshar": "⥊",
		"luruhar": "⥦",
		"lvertneqq": "≨︀",
		"lvnE": "≨︀",
		"macr": "¯",
		"male": "♂",
		"malt": "✠",
		"maltese": "✠",
		"Map": "⤅",
		"map": "↦",
		"mapsto": "↦",
		"mapstodown": "↧",
		"mapstoleft": "↤",
		"mapstoup": "↥",
		"marker": "▮",
		"mcomma": "⨩",
		"Mcy": "М",
		"mcy": "м",
		"mdash": "—",
		"mDDot": "∺",
		"measuredangle": "∡",
		"MediumSpace": " ",
		"Mellintrf": "ℳ",
		"Mfr": "𝔐",
		"mfr": "𝔪",
		"mho": "℧",
		"micro": "µ",
		"midast": "*",
		"midcir": "⫰",
		"mid": "∣",
		"middot": "·",
		"minusb": "⊟",
		"minus": "−",
		"minusd": "∸",
		"minusdu": "⨪",
		"MinusPlus": "∓",
		"mlcp": "⫛",
		"mldr": "…",
		"mnplus": "∓",
		"models": "⊧",
		"Mopf": "𝕄",
		"mopf": "𝕞",
		"mp": "∓",
		"mscr": "𝓂",
		"Mscr": "ℳ",
		"mstpos": "∾",
		"Mu": "Μ",
		"mu": "μ",
		"multimap": "⊸",
		"mumap": "⊸",
		"nabla": "∇",
		"Nacute": "Ń",
		"nacute": "ń",
		"nang": "∠⃒",
		"nap": "≉",
		"napE": "⩰̸",
		"napid": "≋̸",
		"napos": "ŉ",
		"napprox": "≉",
		"natural": "♮",
		"naturals": "ℕ",
		"natur": "♮",
		"nbsp": " ",
		"nbump": "≎̸",
		"nbumpe": "≏̸",
		"ncap": "⩃",
		"Ncaron": "Ň",
		"ncaron": "ň",
		"Ncedil": "Ņ",
		"ncedil": "ņ",
		"ncong": "≇",
		"ncongdot": "⩭̸",
		"ncup": "⩂",
		"Ncy": "Н",
		"ncy": "н",
		"ndash": "–",
		"nearhk": "⤤",
		"nearr": "↗",
		"neArr": "⇗",
		"nearrow": "↗",
		"ne": "≠",
		"nedot": "≐̸",
		"NegativeMediumSpace": "​",
		"NegativeThickSpace": "​",
		"NegativeThinSpace": "​",
		"NegativeVeryThinSpace": "​",
		"nequiv": "≢",
		"nesear": "⤨",
		"nesim": "≂̸",
		"NestedGreaterGreater": "≫",
		"NestedLessLess": "≪",
		"NewLine": "\n",
		"nexist": "∄",
		"nexists": "∄",
		"Nfr": "𝔑",
		"nfr": "𝔫",
		"ngE": "≧̸",
		"nge": "≱",
		"ngeq": "≱",
		"ngeqq": "≧̸",
		"ngeqslant": "⩾̸",
		"nges": "⩾̸",
		"nGg": "⋙̸",
		"ngsim": "≵",
		"nGt": "≫⃒",
		"ngt": "≯",
		"ngtr": "≯",
		"nGtv": "≫̸",
		"nharr": "↮",
		"nhArr": "⇎",
		"nhpar": "⫲",
		"ni": "∋",
		"nis": "⋼",
		"nisd": "⋺",
		"niv": "∋",
		"NJcy": "Њ",
		"njcy": "њ",
		"nlarr": "↚",
		"nlArr": "⇍",
		"nldr": "‥",
		"nlE": "≦̸",
		"nle": "≰",
		"nleftarrow": "↚",
		"nLeftarrow": "⇍",
		"nleftrightarrow": "↮",
		"nLeftrightarrow": "⇎",
		"nleq": "≰",
		"nleqq": "≦̸",
		"nleqslant": "⩽̸",
		"nles": "⩽̸",
		"nless": "≮",
		"nLl": "⋘̸",
		"nlsim": "≴",
		"nLt": "≪⃒",
		"nlt": "≮",
		"nltri": "⋪",
		"nltrie": "⋬",
		"nLtv": "≪̸",
		"nmid": "∤",
		"NoBreak": "⁠",
		"NonBreakingSpace": " ",
		"nopf": "𝕟",
		"Nopf": "ℕ",
		"Not": "⫬",
		"not": "¬",
		"NotCongruent": "≢",
		"NotCupCap": "≭",
		"NotDoubleVerticalBar": "∦",
		"NotElement": "∉",
		"NotEqual": "≠",
		"NotEqualTilde": "≂̸",
		"NotExists": "∄",
		"NotGreater": "≯",
		"NotGreaterEqual": "≱",
		"NotGreaterFullEqual": "≧̸",
		"NotGreaterGreater": "≫̸",
		"NotGreaterLess": "≹",
		"NotGreaterSlantEqual": "⩾̸",
		"NotGreaterTilde": "≵",
		"NotHumpDownHump": "≎̸",
		"NotHumpEqual": "≏̸",
		"notin": "∉",
		"notindot": "⋵̸",
		"notinE": "⋹̸",
		"notinva": "∉",
		"notinvb": "⋷",
		"notinvc": "⋶",
		"NotLeftTriangleBar": "⧏̸",
		"NotLeftTriangle": "⋪",
		"NotLeftTriangleEqual": "⋬",
		"NotLess": "≮",
		"NotLessEqual": "≰",
		"NotLessGreater": "≸",
		"NotLessLess": "≪̸",
		"NotLessSlantEqual": "⩽̸",
		"NotLessTilde": "≴",
		"NotNestedGreaterGreater": "⪢̸",
		"NotNestedLessLess": "⪡̸",
		"notni": "∌",
		"notniva": "∌",
		"notnivb": "⋾",
		"notnivc": "⋽",
		"NotPrecedes": "⊀",
		"NotPrecedesEqual": "⪯̸",
		"NotPrecedesSlantEqual": "⋠",
		"NotReverseElement": "∌",
		"NotRightTriangleBar": "⧐̸",
		"NotRightTriangle": "⋫",
		"NotRightTriangleEqual": "⋭",
		"NotSquareSubset": "⊏̸",
		"NotSquareSubsetEqual": "⋢",
		"NotSquareSuperset": "⊐̸",
		"NotSquareSupersetEqual": "⋣",
		"NotSubset": "⊂⃒",
		"NotSubsetEqual": "⊈",
		"NotSucceeds": "⊁",
		"NotSucceedsEqual": "⪰̸",
		"NotSucceedsSlantEqual": "⋡",
		"NotSucceedsTilde": "≿̸",
		"NotSuperset": "⊃⃒",
		"NotSupersetEqual": "⊉",
		"NotTilde": "≁",
		"NotTildeEqual": "≄",
		"NotTildeFullEqual": "≇",
		"NotTildeTilde": "≉",
		"NotVerticalBar": "∤",
		"nparallel": "∦",
		"npar": "∦",
		"nparsl": "⫽⃥",
		"npart": "∂̸",
		"npolint": "⨔",
		"npr": "⊀",
		"nprcue": "⋠",
		"nprec": "⊀",
		"npreceq": "⪯̸",
		"npre": "⪯̸",
		"nrarrc": "⤳̸",
		"nrarr": "↛",
		"nrArr": "⇏",
		"nrarrw": "↝̸",
		"nrightarrow": "↛",
		"nRightarrow": "⇏",
		"nrtri": "⋫",
		"nrtrie": "⋭",
		"nsc": "⊁",
		"nsccue": "⋡",
		"nsce": "⪰̸",
		"Nscr": "𝒩",
		"nscr": "𝓃",
		"nshortmid": "∤",
		"nshortparallel": "∦",
		"nsim": "≁",
		"nsime": "≄",
		"nsimeq": "≄",
		"nsmid": "∤",
		"nspar": "∦",
		"nsqsube": "⋢",
		"nsqsupe": "⋣",
		"nsub": "⊄",
		"nsubE": "⫅̸",
		"nsube": "⊈",
		"nsubset": "⊂⃒",
		"nsubseteq": "⊈",
		"nsubseteqq": "⫅̸",
		"nsucc": "⊁",
		"nsucceq": "⪰̸",
		"nsup": "⊅",
		"nsupE": "⫆̸",
		"nsupe": "⊉",
		"nsupset": "⊃⃒",
		"nsupseteq": "⊉",
		"nsupseteqq": "⫆̸",
		"ntgl": "≹",
		"Ntilde": "Ñ",
		"ntilde": "ñ",
		"ntlg": "≸",
		"ntriangleleft": "⋪",
		"ntrianglelefteq": "⋬",
		"ntriangleright": "⋫",
		"ntrianglerighteq": "⋭",
		"Nu": "Ν",
		"nu": "ν",
		"num": "#",
		"numero": "№",
		"numsp": " ",
		"nvap": "≍⃒",
		"nvdash": "⊬",
		"nvDash": "⊭",
		"nVdash": "⊮",
		"nVDash": "⊯",
		"nvge": "≥⃒",
		"nvgt": ">⃒",
		"nvHarr": "⤄",
		"nvinfin": "⧞",
		"nvlArr": "⤂",
		"nvle": "≤⃒",
		"nvlt": "<⃒",
		"nvltrie": "⊴⃒",
		"nvrArr": "⤃",
		"nvrtrie": "⊵⃒",
		"nvsim": "∼⃒",
		"nwarhk": "⤣",
		"nwarr": "↖",
		"nwArr": "⇖",
		"nwarrow": "↖",
		"nwnear": "⤧",
		"Oacute": "Ó",
		"oacute": "ó",
		"oast": "⊛",
		"Ocirc": "Ô",
		"ocirc": "ô",
		"ocir": "⊚",
		"Ocy": "О",
		"ocy": "о",
		"odash": "⊝",
		"Odblac": "Ő",
		"odblac": "ő",
		"odiv": "⨸",
		"odot": "⊙",
		"odsold": "⦼",
		"OElig": "Œ",
		"oelig": "œ",
		"ofcir": "⦿",
		"Ofr": "𝔒",
		"ofr": "𝔬",
		"ogon": "˛",
		"Ograve": "Ò",
		"ograve": "ò",
		"ogt": "⧁",
		"ohbar": "⦵",
		"ohm": "Ω",
		"oint": "∮",
		"olarr": "↺",
		"olcir": "⦾",
		"olcross": "⦻",
		"oline": "‾",
		"olt": "⧀",
		"Omacr": "Ō",
		"omacr": "ō",
		"Omega": "Ω",
		"omega": "ω",
		"Omicron": "Ο",
		"omicron": "ο",
		"omid": "⦶",
		"ominus": "⊖",
		"Oopf": "𝕆",
		"oopf": "𝕠",
		"opar": "⦷",
		"OpenCurlyDoubleQuote": "“",
		"OpenCurlyQuote": "‘",
		"operp": "⦹",
		"oplus": "⊕",
		"orarr": "↻",
		"Or": "⩔",
		"or": "∨",
		"ord": "⩝",
		"order": "ℴ",
		"orderof": "ℴ",
		"ordf": "ª",
		"ordm": "º",
		"origof": "⊶",
		"oror": "⩖",
		"orslope": "⩗",
		"orv": "⩛",
		"oS": "Ⓢ",
		"Oscr": "𝒪",
		"oscr": "ℴ",
		"Oslash": "Ø",
		"oslash": "ø",
		"osol": "⊘",
		"Otilde": "Õ",
		"otilde": "õ",
		"otimesas": "⨶",
		"Otimes": "⨷",
		"otimes": "⊗",
		"Ouml": "Ö",
		"ouml": "ö",
		"ovbar": "⌽",
		"OverBar": "‾",
		"OverBrace": "⏞",
		"OverBracket": "⎴",
		"OverParenthesis": "⏜",
		"para": "¶",
		"parallel": "∥",
		"par": "∥",
		"parsim": "⫳",
		"parsl": "⫽",
		"part": "∂",
		"PartialD": "∂",
		"Pcy": "П",
		"pcy": "п",
		"percnt": "%",
		"period": ".",
		"permil": "‰",
		"perp": "⊥",
		"pertenk": "‱",
		"Pfr": "𝔓",
		"pfr": "𝔭",
		"Phi": "Φ",
		"phi": "φ",
		"phiv": "ϕ",
		"phmmat": "ℳ",
		"phone": "☎",
		"Pi": "Π",
		"pi": "π",
		"pitchfork": "⋔",
		"piv": "ϖ",
		"planck": "ℏ",
		"planckh": "ℎ",
		"plankv": "ℏ",
		"plusacir": "⨣",
		"plusb": "⊞",
		"pluscir": "⨢",
		"plus": "+",
		"plusdo": "∔",
		"plusdu": "⨥",
		"pluse": "⩲",
		"PlusMinus": "±",
		"plusmn": "±",
		"plussim": "⨦",
		"plustwo": "⨧",
		"pm": "±",
		"Poincareplane": "ℌ",
		"pointint": "⨕",
		"popf": "𝕡",
		"Popf": "ℙ",
		"pound": "£",
		"prap": "⪷",
		"Pr": "⪻",
		"pr": "≺",
		"prcue": "≼",
		"precapprox": "⪷",
		"prec": "≺",
		"preccurlyeq": "≼",
		"Precedes": "≺",
		"PrecedesEqual": "⪯",
		"PrecedesSlantEqual": "≼",
		"PrecedesTilde": "≾",
		"preceq": "⪯",
		"precnapprox": "⪹",
		"precneqq": "⪵",
		"precnsim": "⋨",
		"pre": "⪯",
		"prE": "⪳",
		"precsim": "≾",
		"prime": "′",
		"Prime": "″",
		"primes": "ℙ",
		"prnap": "⪹",
		"prnE": "⪵",
		"prnsim": "⋨",
		"prod": "∏",
		"Product": "∏",
		"profalar": "⌮",
		"profline": "⌒",
		"profsurf": "⌓",
		"prop": "∝",
		"Proportional": "∝",
		"Proportion": "∷",
		"propto": "∝",
		"prsim": "≾",
		"prurel": "⊰",
		"Pscr": "𝒫",
		"pscr": "𝓅",
		"Psi": "Ψ",
		"psi": "ψ",
		"puncsp": " ",
		"Qfr": "𝔔",
		"qfr": "𝔮",
		"qint": "⨌",
		"qopf": "𝕢",
		"Qopf": "ℚ",
		"qprime": "⁗",
		"Qscr": "𝒬",
		"qscr": "𝓆",
		"quaternions": "ℍ",
		"quatint": "⨖",
		"quest": "?",
		"questeq": "≟",
		"quot": "\"",
		"QUOT": "\"",
		"rAarr": "⇛",
		"race": "∽̱",
		"Racute": "Ŕ",
		"racute": "ŕ",
		"radic": "√",
		"raemptyv": "⦳",
		"rang": "⟩",
		"Rang": "⟫",
		"rangd": "⦒",
		"range": "⦥",
		"rangle": "⟩",
		"raquo": "»",
		"rarrap": "⥵",
		"rarrb": "⇥",
		"rarrbfs": "⤠",
		"rarrc": "⤳",
		"rarr": "→",
		"Rarr": "↠",
		"rArr": "⇒",
		"rarrfs": "⤞",
		"rarrhk": "↪",
		"rarrlp": "↬",
		"rarrpl": "⥅",
		"rarrsim": "⥴",
		"Rarrtl": "⤖",
		"rarrtl": "↣",
		"rarrw": "↝",
		"ratail": "⤚",
		"rAtail": "⤜",
		"ratio": "∶",
		"rationals": "ℚ",
		"rbarr": "⤍",
		"rBarr": "⤏",
		"RBarr": "⤐",
		"rbbrk": "❳",
		"rbrace": "}",
		"rbrack": "]",
		"rbrke": "⦌",
		"rbrksld": "⦎",
		"rbrkslu": "⦐",
		"Rcaron": "Ř",
		"rcaron": "ř",
		"Rcedil": "Ŗ",
		"rcedil": "ŗ",
		"rceil": "⌉",
		"rcub": "}",
		"Rcy": "Р",
		"rcy": "р",
		"rdca": "⤷",
		"rdldhar": "⥩",
		"rdquo": "”",
		"rdquor": "”",
		"rdsh": "↳",
		"real": "ℜ",
		"realine": "ℛ",
		"realpart": "ℜ",
		"reals": "ℝ",
		"Re": "ℜ",
		"rect": "▭",
		"reg": "®",
		"REG": "®",
		"ReverseElement": "∋",
		"ReverseEquilibrium": "⇋",
		"ReverseUpEquilibrium": "⥯",
		"rfisht": "⥽",
		"rfloor": "⌋",
		"rfr": "𝔯",
		"Rfr": "ℜ",
		"rHar": "⥤",
		"rhard": "⇁",
		"rharu": "⇀",
		"rharul": "⥬",
		"Rho": "Ρ",
		"rho": "ρ",
		"rhov": "ϱ",
		"RightAngleBracket": "⟩",
		"RightArrowBar": "⇥",
		"rightarrow": "→",
		"RightArrow": "→",
		"Rightarrow": "⇒",
		"RightArrowLeftArrow": "⇄",
		"rightarrowtail": "↣",
		"RightCeiling": "⌉",
		"RightDoubleBracket": "⟧",
		"RightDownTeeVector": "⥝",
		"RightDownVectorBar": "⥕",
		"RightDownVector": "⇂",
		"RightFloor": "⌋",
		"rightharpoondown": "⇁",
		"rightharpoonup": "⇀",
		"rightleftarrows": "⇄",
		"rightleftharpoons": "⇌",
		"rightrightarrows": "⇉",
		"rightsquigarrow": "↝",
		"RightTeeArrow": "↦",
		"RightTee": "⊢",
		"RightTeeVector": "⥛",
		"rightthreetimes": "⋌",
		"RightTriangleBar": "⧐",
		"RightTriangle": "⊳",
		"RightTriangleEqual": "⊵",
		"RightUpDownVector": "⥏",
		"RightUpTeeVector": "⥜",
		"RightUpVectorBar": "⥔",
		"RightUpVector": "↾",
		"RightVectorBar": "⥓",
		"RightVector": "⇀",
		"ring": "˚",
		"risingdotseq": "≓",
		"rlarr": "⇄",
		"rlhar": "⇌",
		"rlm": "‏",
		"rmoustache": "⎱",
		"rmoust": "⎱",
		"rnmid": "⫮",
		"roang": "⟭",
		"roarr": "⇾",
		"robrk": "⟧",
		"ropar": "⦆",
		"ropf": "𝕣",
		"Ropf": "ℝ",
		"roplus": "⨮",
		"rotimes": "⨵",
		"RoundImplies": "⥰",
		"rpar": ")",
		"rpargt": "⦔",
		"rppolint": "⨒",
		"rrarr": "⇉",
		"Rrightarrow": "⇛",
		"rsaquo": "›",
		"rscr": "𝓇",
		"Rscr": "ℛ",
		"rsh": "↱",
		"Rsh": "↱",
		"rsqb": "]",
		"rsquo": "’",
		"rsquor": "’",
		"rthree": "⋌",
		"rtimes": "⋊",
		"rtri": "▹",
		"rtrie": "⊵",
		"rtrif": "▸",
		"rtriltri": "⧎",
		"RuleDelayed": "⧴",
		"ruluhar": "⥨",
		"rx": "℞",
		"Sacute": "Ś",
		"sacute": "ś",
		"sbquo": "‚",
		"scap": "⪸",
		"Scaron": "Š",
		"scaron": "š",
		"Sc": "⪼",
		"sc": "≻",
		"sccue": "≽",
		"sce": "⪰",
		"scE": "⪴",
		"Scedil": "Ş",
		"scedil": "ş",
		"Scirc": "Ŝ",
		"scirc": "ŝ",
		"scnap": "⪺",
		"scnE": "⪶",
		"scnsim": "⋩",
		"scpolint": "⨓",
		"scsim": "≿",
		"Scy": "С",
		"scy": "с",
		"sdotb": "⊡",
		"sdot": "⋅",
		"sdote": "⩦",
		"searhk": "⤥",
		"searr": "↘",
		"seArr": "⇘",
		"searrow": "↘",
		"sect": "§",
		"semi": ";",
		"seswar": "⤩",
		"setminus": "∖",
		"setmn": "∖",
		"sext": "✶",
		"Sfr": "𝔖",
		"sfr": "𝔰",
		"sfrown": "⌢",
		"sharp": "♯",
		"SHCHcy": "Щ",
		"shchcy": "щ",
		"SHcy": "Ш",
		"shcy": "ш",
		"ShortDownArrow": "↓",
		"ShortLeftArrow": "←",
		"shortmid": "∣",
		"shortparallel": "∥",
		"ShortRightArrow": "→",
		"ShortUpArrow": "↑",
		"shy": "­",
		"Sigma": "Σ",
		"sigma": "σ",
		"sigmaf": "ς",
		"sigmav": "ς",
		"sim": "∼",
		"simdot": "⩪",
		"sime": "≃",
		"simeq": "≃",
		"simg": "⪞",
		"simgE": "⪠",
		"siml": "⪝",
		"simlE": "⪟",
		"simne": "≆",
		"simplus": "⨤",
		"simrarr": "⥲",
		"slarr": "←",
		"SmallCircle": "∘",
		"smallsetminus": "∖",
		"smashp": "⨳",
		"smeparsl": "⧤",
		"smid": "∣",
		"smile": "⌣",
		"smt": "⪪",
		"smte": "⪬",
		"smtes": "⪬︀",
		"SOFTcy": "Ь",
		"softcy": "ь",
		"solbar": "⌿",
		"solb": "⧄",
		"sol": "/",
		"Sopf": "𝕊",
		"sopf": "𝕤",
		"spades": "♠",
		"spadesuit": "♠",
		"spar": "∥",
		"sqcap": "⊓",
		"sqcaps": "⊓︀",
		"sqcup": "⊔",
		"sqcups": "⊔︀",
		"Sqrt": "√",
		"sqsub": "⊏",
		"sqsube": "⊑",
		"sqsubset": "⊏",
		"sqsubseteq": "⊑",
		"sqsup": "⊐",
		"sqsupe": "⊒",
		"sqsupset": "⊐",
		"sqsupseteq": "⊒",
		"square": "□",
		"Square": "□",
		"SquareIntersection": "⊓",
		"SquareSubset": "⊏",
		"SquareSubsetEqual": "⊑",
		"SquareSuperset": "⊐",
		"SquareSupersetEqual": "⊒",
		"SquareUnion": "⊔",
		"squarf": "▪",
		"squ": "□",
		"squf": "▪",
		"srarr": "→",
		"Sscr": "𝒮",
		"sscr": "𝓈",
		"ssetmn": "∖",
		"ssmile": "⌣",
		"sstarf": "⋆",
		"Star": "⋆",
		"star": "☆",
		"starf": "★",
		"straightepsilon": "ϵ",
		"straightphi": "ϕ",
		"strns": "¯",
		"sub": "⊂",
		"Sub": "⋐",
		"subdot": "⪽",
		"subE": "⫅",
		"sube": "⊆",
		"subedot": "⫃",
		"submult": "⫁",
		"subnE": "⫋",
		"subne": "⊊",
		"subplus": "⪿",
		"subrarr": "⥹",
		"subset": "⊂",
		"Subset": "⋐",
		"subseteq": "⊆",
		"subseteqq": "⫅",
		"SubsetEqual": "⊆",
		"subsetneq": "⊊",
		"subsetneqq": "⫋",
		"subsim": "⫇",
		"subsub": "⫕",
		"subsup": "⫓",
		"succapprox": "⪸",
		"succ": "≻",
		"succcurlyeq": "≽",
		"Succeeds": "≻",
		"SucceedsEqual": "⪰",
		"SucceedsSlantEqual": "≽",
		"SucceedsTilde": "≿",
		"succeq": "⪰",
		"succnapprox": "⪺",
		"succneqq": "⪶",
		"succnsim": "⋩",
		"succsim": "≿",
		"SuchThat": "∋",
		"sum": "∑",
		"Sum": "∑",
		"sung": "♪",
		"sup1": "¹",
		"sup2": "²",
		"sup3": "³",
		"sup": "⊃",
		"Sup": "⋑",
		"supdot": "⪾",
		"supdsub": "⫘",
		"supE": "⫆",
		"supe": "⊇",
		"supedot": "⫄",
		"Superset": "⊃",
		"SupersetEqual": "⊇",
		"suphsol": "⟉",
		"suphsub": "⫗",
		"suplarr": "⥻",
		"supmult": "⫂",
		"supnE": "⫌",
		"supne": "⊋",
		"supplus": "⫀",
		"supset": "⊃",
		"Supset": "⋑",
		"supseteq": "⊇",
		"supseteqq": "⫆",
		"supsetneq": "⊋",
		"supsetneqq": "⫌",
		"supsim": "⫈",
		"supsub": "⫔",
		"supsup": "⫖",
		"swarhk": "⤦",
		"swarr": "↙",
		"swArr": "⇙",
		"swarrow": "↙",
		"swnwar": "⤪",
		"szlig": "ß",
		"Tab": "\t",
		"target": "⌖",
		"Tau": "Τ",
		"tau": "τ",
		"tbrk": "⎴",
		"Tcaron": "Ť",
		"tcaron": "ť",
		"Tcedil": "Ţ",
		"tcedil": "ţ",
		"Tcy": "Т",
		"tcy": "т",
		"tdot": "⃛",
		"telrec": "⌕",
		"Tfr": "𝔗",
		"tfr": "𝔱",
		"there4": "∴",
		"therefore": "∴",
		"Therefore": "∴",
		"Theta": "Θ",
		"theta": "θ",
		"thetasym": "ϑ",
		"thetav": "ϑ",
		"thickapprox": "≈",
		"thicksim": "∼",
		"ThickSpace": "  ",
		"ThinSpace": " ",
		"thinsp": " ",
		"thkap": "≈",
		"thksim": "∼",
		"THORN": "Þ",
		"thorn": "þ",
		"tilde": "˜",
		"Tilde": "∼",
		"TildeEqual": "≃",
		"TildeFullEqual": "≅",
		"TildeTilde": "≈",
		"timesbar": "⨱",
		"timesb": "⊠",
		"times": "×",
		"timesd": "⨰",
		"tint": "∭",
		"toea": "⤨",
		"topbot": "⌶",
		"topcir": "⫱",
		"top": "⊤",
		"Topf": "𝕋",
		"topf": "𝕥",
		"topfork": "⫚",
		"tosa": "⤩",
		"tprime": "‴",
		"trade": "™",
		"TRADE": "™",
		"triangle": "▵",
		"triangledown": "▿",
		"triangleleft": "◃",
		"trianglelefteq": "⊴",
		"triangleq": "≜",
		"triangleright": "▹",
		"trianglerighteq": "⊵",
		"tridot": "◬",
		"trie": "≜",
		"triminus": "⨺",
		"TripleDot": "⃛",
		"triplus": "⨹",
		"trisb": "⧍",
		"tritime": "⨻",
		"trpezium": "⏢",
		"Tscr": "𝒯",
		"tscr": "𝓉",
		"TScy": "Ц",
		"tscy": "ц",
		"TSHcy": "Ћ",
		"tshcy": "ћ",
		"Tstrok": "Ŧ",
		"tstrok": "ŧ",
		"twixt": "≬",
		"twoheadleftarrow": "↞",
		"twoheadrightarrow": "↠",
		"Uacute": "Ú",
		"uacute": "ú",
		"uarr": "↑",
		"Uarr": "↟",
		"uArr": "⇑",
		"Uarrocir": "⥉",
		"Ubrcy": "Ў",
		"ubrcy": "ў",
		"Ubreve": "Ŭ",
		"ubreve": "ŭ",
		"Ucirc": "Û",
		"ucirc": "û",
		"Ucy": "У",
		"ucy": "у",
		"udarr": "⇅",
		"Udblac": "Ű",
		"udblac": "ű",
		"udhar": "⥮",
		"ufisht": "⥾",
		"Ufr": "𝔘",
		"ufr": "𝔲",
		"Ugrave": "Ù",
		"ugrave": "ù",
		"uHar": "⥣",
		"uharl": "↿",
		"uharr": "↾",
		"uhblk": "▀",
		"ulcorn": "⌜",
		"ulcorner": "⌜",
		"ulcrop": "⌏",
		"ultri": "◸",
		"Umacr": "Ū",
		"umacr": "ū",
		"uml": "¨",
		"UnderBar": "_",
		"UnderBrace": "⏟",
		"UnderBracket": "⎵",
		"UnderParenthesis": "⏝",
		"Union": "⋃",
		"UnionPlus": "⊎",
		"Uogon": "Ų",
		"uogon": "ų",
		"Uopf": "𝕌",
		"uopf": "𝕦",
		"UpArrowBar": "⤒",
		"uparrow": "↑",
		"UpArrow": "↑",
		"Uparrow": "⇑",
		"UpArrowDownArrow": "⇅",
		"updownarrow": "↕",
		"UpDownArrow": "↕",
		"Updownarrow": "⇕",
		"UpEquilibrium": "⥮",
		"upharpoonleft": "↿",
		"upharpoonright": "↾",
		"uplus": "⊎",
		"UpperLeftArrow": "↖",
		"UpperRightArrow": "↗",
		"upsi": "υ",
		"Upsi": "ϒ",
		"upsih": "ϒ",
		"Upsilon": "Υ",
		"upsilon": "υ",
		"UpTeeArrow": "↥",
		"UpTee": "⊥",
		"upuparrows": "⇈",
		"urcorn": "⌝",
		"urcorner": "⌝",
		"urcrop": "⌎",
		"Uring": "Ů",
		"uring": "ů",
		"urtri": "◹",
		"Uscr": "𝒰",
		"uscr": "𝓊",
		"utdot": "⋰",
		"Utilde": "Ũ",
		"utilde": "ũ",
		"utri": "▵",
		"utrif": "▴",
		"uuarr": "⇈",
		"Uuml": "Ü",
		"uuml": "ü",
		"uwangle": "⦧",
		"vangrt": "⦜",
		"varepsilon": "ϵ",
		"varkappa": "ϰ",
		"varnothing": "∅",
		"varphi": "ϕ",
		"varpi": "ϖ",
		"varpropto": "∝",
		"varr": "↕",
		"vArr": "⇕",
		"varrho": "ϱ",
		"varsigma": "ς",
		"varsubsetneq": "⊊︀",
		"varsubsetneqq": "⫋︀",
		"varsupsetneq": "⊋︀",
		"varsupsetneqq": "⫌︀",
		"vartheta": "ϑ",
		"vartriangleleft": "⊲",
		"vartriangleright": "⊳",
		"vBar": "⫨",
		"Vbar": "⫫",
		"vBarv": "⫩",
		"Vcy": "В",
		"vcy": "в",
		"vdash": "⊢",
		"vDash": "⊨",
		"Vdash": "⊩",
		"VDash": "⊫",
		"Vdashl": "⫦",
		"veebar": "⊻",
		"vee": "∨",
		"Vee": "⋁",
		"veeeq": "≚",
		"vellip": "⋮",
		"verbar": "|",
		"Verbar": "‖",
		"vert": "|",
		"Vert": "‖",
		"VerticalBar": "∣",
		"VerticalLine": "|",
		"VerticalSeparator": "❘",
		"VerticalTilde": "≀",
		"VeryThinSpace": " ",
		"Vfr": "𝔙",
		"vfr": "𝔳",
		"vltri": "⊲",
		"vnsub": "⊂⃒",
		"vnsup": "⊃⃒",
		"Vopf": "𝕍",
		"vopf": "𝕧",
		"vprop": "∝",
		"vrtri": "⊳",
		"Vscr": "𝒱",
		"vscr": "𝓋",
		"vsubnE": "⫋︀",
		"vsubne": "⊊︀",
		"vsupnE": "⫌︀",
		"vsupne": "⊋︀",
		"Vvdash": "⊪",
		"vzigzag": "⦚",
		"Wcirc": "Ŵ",
		"wcirc": "ŵ",
		"wedbar": "⩟",
		"wedge": "∧",
		"Wedge": "⋀",
		"wedgeq": "≙",
		"weierp": "℘",
		"Wfr": "𝔚",
		"wfr": "𝔴",
		"Wopf": "𝕎",
		"wopf": "𝕨",
		"wp": "℘",
		"wr": "≀",
		"wreath": "≀",
		"Wscr": "𝒲",
		"wscr": "𝓌",
		"xcap": "⋂",
		"xcirc": "◯",
		"xcup": "⋃",
		"xdtri": "▽",
		"Xfr": "𝔛",
		"xfr": "𝔵",
		"xharr": "⟷",
		"xhArr": "⟺",
		"Xi": "Ξ",
		"xi": "ξ",
		"xlarr": "⟵",
		"xlArr": "⟸",
		"xmap": "⟼",
		"xnis": "⋻",
		"xodot": "⨀",
		"Xopf": "𝕏",
		"xopf": "𝕩",
		"xoplus": "⨁",
		"xotime": "⨂",
		"xrarr": "⟶",
		"xrArr": "⟹",
		"Xscr": "𝒳",
		"xscr": "𝓍",
		"xsqcup": "⨆",
		"xuplus": "⨄",
		"xutri": "△",
		"xvee": "⋁",
		"xwedge": "⋀",
		"Yacute": "Ý",
		"yacute": "ý",
		"YAcy": "Я",
		"yacy": "я",
		"Ycirc": "Ŷ",
		"ycirc": "ŷ",
		"Ycy": "Ы",
		"ycy": "ы",
		"yen": "¥",
		"Yfr": "𝔜",
		"yfr": "𝔶",
		"YIcy": "Ї",
		"yicy": "ї",
		"Yopf": "𝕐",
		"yopf": "𝕪",
		"Yscr": "𝒴",
		"yscr": "𝓎",
		"YUcy": "Ю",
		"yucy": "ю",
		"yuml": "ÿ",
		"Yuml": "Ÿ",
		"Zacute": "Ź",
		"zacute": "ź",
		"Zcaron": "Ž",
		"zcaron": "ž",
		"Zcy": "З",
		"zcy": "з",
		"Zdot": "Ż",
		"zdot": "ż",
		"zeetrf": "ℨ",
		"ZeroWidthSpace": "​",
		"Zeta": "Ζ",
		"zeta": "ζ",
		"zfr": "𝔷",
		"Zfr": "ℨ",
		"ZHcy": "Ж",
		"zhcy": "ж",
		"zigrarr": "⇝",
		"zopf": "𝕫",
		"Zopf": "ℤ",
		"Zscr": "𝒵",
		"zscr": "𝓏",
		"zwj": "‍",
		"zwnj": "‌"
	};

/***/ },

/***/ 1104:
/***/ function(module, exports) {

	module.exports = {
		"Aacute": "Á",
		"aacute": "á",
		"Acirc": "Â",
		"acirc": "â",
		"acute": "´",
		"AElig": "Æ",
		"aelig": "æ",
		"Agrave": "À",
		"agrave": "à",
		"amp": "&",
		"AMP": "&",
		"Aring": "Å",
		"aring": "å",
		"Atilde": "Ã",
		"atilde": "ã",
		"Auml": "Ä",
		"auml": "ä",
		"brvbar": "¦",
		"Ccedil": "Ç",
		"ccedil": "ç",
		"cedil": "¸",
		"cent": "¢",
		"copy": "©",
		"COPY": "©",
		"curren": "¤",
		"deg": "°",
		"divide": "÷",
		"Eacute": "É",
		"eacute": "é",
		"Ecirc": "Ê",
		"ecirc": "ê",
		"Egrave": "È",
		"egrave": "è",
		"ETH": "Ð",
		"eth": "ð",
		"Euml": "Ë",
		"euml": "ë",
		"frac12": "½",
		"frac14": "¼",
		"frac34": "¾",
		"gt": ">",
		"GT": ">",
		"Iacute": "Í",
		"iacute": "í",
		"Icirc": "Î",
		"icirc": "î",
		"iexcl": "¡",
		"Igrave": "Ì",
		"igrave": "ì",
		"iquest": "¿",
		"Iuml": "Ï",
		"iuml": "ï",
		"laquo": "«",
		"lt": "<",
		"LT": "<",
		"macr": "¯",
		"micro": "µ",
		"middot": "·",
		"nbsp": " ",
		"not": "¬",
		"Ntilde": "Ñ",
		"ntilde": "ñ",
		"Oacute": "Ó",
		"oacute": "ó",
		"Ocirc": "Ô",
		"ocirc": "ô",
		"Ograve": "Ò",
		"ograve": "ò",
		"ordf": "ª",
		"ordm": "º",
		"Oslash": "Ø",
		"oslash": "ø",
		"Otilde": "Õ",
		"otilde": "õ",
		"Ouml": "Ö",
		"ouml": "ö",
		"para": "¶",
		"plusmn": "±",
		"pound": "£",
		"quot": "\"",
		"QUOT": "\"",
		"raquo": "»",
		"reg": "®",
		"REG": "®",
		"sect": "§",
		"shy": "­",
		"sup1": "¹",
		"sup2": "²",
		"sup3": "³",
		"szlig": "ß",
		"THORN": "Þ",
		"thorn": "þ",
		"times": "×",
		"Uacute": "Ú",
		"uacute": "ú",
		"Ucirc": "Û",
		"ucirc": "û",
		"Ugrave": "Ù",
		"ugrave": "ù",
		"uml": "¨",
		"Uuml": "Ü",
		"uuml": "ü",
		"Yacute": "Ý",
		"yacute": "ý",
		"yen": "¥",
		"yuml": "ÿ"
	};

/***/ },

/***/ 1105:
/***/ function(module, exports) {

	module.exports = {
		"amp": "&",
		"apos": "'",
		"gt": ">",
		"lt": "<",
		"quot": "\""
	};

/***/ },

/***/ 1106:
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },

/***/ 1107:
/***/ function(module, exports, __webpack_require__) {

	var ElementType = __webpack_require__(1108);

	var re_whitespace = /\s+/g;
	var NodePrototype = __webpack_require__(1109);
	var ElementPrototype = __webpack_require__(1110);

	function DomHandler(callback, options, elementCB){
		if(typeof callback === "object"){
			elementCB = options;
			options = callback;
			callback = null;
		} else if(typeof options === "function"){
			elementCB = options;
			options = defaultOpts;
		}
		this._callback = callback;
		this._options = options || defaultOpts;
		this._elementCB = elementCB;
		this.dom = [];
		this._done = false;
		this._tagStack = [];
		this._parser = this._parser || null;
	}

	//default options
	var defaultOpts = {
		normalizeWhitespace: false, //Replace all whitespace with single spaces
		withStartIndices: false, //Add startIndex properties to nodes
	};

	DomHandler.prototype.onparserinit = function(parser){
		this._parser = parser;
	};

	//Resets the handler back to starting state
	DomHandler.prototype.onreset = function(){
		DomHandler.call(this, this._callback, this._options, this._elementCB);
	};

	//Signals the handler that parsing is done
	DomHandler.prototype.onend = function(){
		if(this._done) return;
		this._done = true;
		this._parser = null;
		this._handleCallback(null);
	};

	DomHandler.prototype._handleCallback =
	DomHandler.prototype.onerror = function(error){
		if(typeof this._callback === "function"){
			this._callback(error, this.dom);
		} else {
			if(error) throw error;
		}
	};

	DomHandler.prototype.onclosetag = function(){
		//if(this._tagStack.pop().name !== name) this._handleCallback(Error("Tagname didn't match!"));
		var elem = this._tagStack.pop();
		if(this._elementCB) this._elementCB(elem);
	};

	DomHandler.prototype._addDomElement = function(element){
		var parent = this._tagStack[this._tagStack.length - 1];
		var siblings = parent ? parent.children : this.dom;
		var previousSibling = siblings[siblings.length - 1];

		element.next = null;

		if(this._options.withStartIndices){
			element.startIndex = this._parser.startIndex;
		}

		if (this._options.withDomLvl1) {
			element.__proto__ = element.type === "tag" ? ElementPrototype : NodePrototype;
		}

		if(previousSibling){
			element.prev = previousSibling;
			previousSibling.next = element;
		} else {
			element.prev = null;
		}

		siblings.push(element);
		element.parent = parent || null;
	};

	DomHandler.prototype.onopentag = function(name, attribs){
		var element = {
			type: name === "script" ? ElementType.Script : name === "style" ? ElementType.Style : ElementType.Tag,
			name: name,
			attribs: attribs,
			children: []
		};

		this._addDomElement(element);

		this._tagStack.push(element);
	};

	DomHandler.prototype.ontext = function(data){
		//the ignoreWhitespace is officially dropped, but for now,
		//it's an alias for normalizeWhitespace
		var normalize = this._options.normalizeWhitespace || this._options.ignoreWhitespace;

		var lastTag;

		if(!this._tagStack.length && this.dom.length && (lastTag = this.dom[this.dom.length-1]).type === ElementType.Text){
			if(normalize){
				lastTag.data = (lastTag.data + data).replace(re_whitespace, " ");
			} else {
				lastTag.data += data;
			}
		} else {
			if(
				this._tagStack.length &&
				(lastTag = this._tagStack[this._tagStack.length - 1]) &&
				(lastTag = lastTag.children[lastTag.children.length - 1]) &&
				lastTag.type === ElementType.Text
			){
				if(normalize){
					lastTag.data = (lastTag.data + data).replace(re_whitespace, " ");
				} else {
					lastTag.data += data;
				}
			} else {
				if(normalize){
					data = data.replace(re_whitespace, " ");
				}

				this._addDomElement({
					data: data,
					type: ElementType.Text
				});
			}
		}
	};

	DomHandler.prototype.oncomment = function(data){
		var lastTag = this._tagStack[this._tagStack.length - 1];

		if(lastTag && lastTag.type === ElementType.Comment){
			lastTag.data += data;
			return;
		}

		var element = {
			data: data,
			type: ElementType.Comment
		};

		this._addDomElement(element);
		this._tagStack.push(element);
	};

	DomHandler.prototype.oncdatastart = function(){
		var element = {
			children: [{
				data: "",
				type: ElementType.Text
			}],
			type: ElementType.CDATA
		};

		this._addDomElement(element);
		this._tagStack.push(element);
	};

	DomHandler.prototype.oncommentend = DomHandler.prototype.oncdataend = function(){
		this._tagStack.pop();
	};

	DomHandler.prototype.onprocessinginstruction = function(name, data){
		this._addDomElement({
			name: name,
			data: data,
			type: ElementType.Directive
		});
	};

	module.exports = DomHandler;


/***/ },

/***/ 1108:
/***/ function(module, exports) {

	//Types of elements found in the DOM
	module.exports = {
		Text: "text", //Text
		Directive: "directive", //<? ... ?>
		Comment: "comment", //<!-- ... -->
		Script: "script", //<script> tags
		Style: "style", //<style> tags
		Tag: "tag", //Any tag
		CDATA: "cdata", //<![CDATA[ ... ]]>
		Doctype: "doctype",

		isTag: function(elem){
			return elem.type === "tag" || elem.type === "script" || elem.type === "style";
		}
	};


/***/ },

/***/ 1109:
/***/ function(module, exports) {

	// This object will be used as the prototype for Nodes when creating a
	// DOM-Level-1-compliant structure.
	var NodePrototype = module.exports = {
		get firstChild() {
			var children = this.children;
			return children && children[0] || null;
		},
		get lastChild() {
			var children = this.children;
			return children && children[children.length - 1] || null;
		},
		get nodeType() {
			return nodeTypes[this.type] || nodeTypes.element;
		}
	};

	var domLvl1 = {
		tagName: "name",
		childNodes: "children",
		parentNode: "parent",
		previousSibling: "prev",
		nextSibling: "next",
		nodeValue: "data"
	};

	var nodeTypes = {
		element: 1,
		text: 3,
		cdata: 4,
		comment: 8
	};

	Object.keys(domLvl1).forEach(function(key) {
		var shorthand = domLvl1[key];
		Object.defineProperty(NodePrototype, key, {
			get: function() {
				return this[shorthand] || null;
			},
			set: function(val) {
				this[shorthand] = val;
				return val;
			}
		});
	});


/***/ },

/***/ 1110:
/***/ function(module, exports, __webpack_require__) {

	// DOM-Level-1-compliant structure
	var NodePrototype = __webpack_require__(1109);
	var ElementPrototype = module.exports = Object.create(NodePrototype);

	var domLvl1 = {
		tagName: "name"
	};

	Object.keys(domLvl1).forEach(function(key) {
		var shorthand = domLvl1[key];
		Object.defineProperty(ElementPrototype, key, {
			get: function() {
				return this[shorthand] || null;
			},
			set: function(val) {
				this[shorthand] = val;
				return val;
			}
		});
	});


/***/ },

/***/ 1111:
/***/ function(module, exports, __webpack_require__) {

	var index = __webpack_require__(1098),
	    DomHandler = index.DomHandler,
		DomUtils = index.DomUtils;

	//TODO: make this a streamable handler
	function FeedHandler(callback, options){
		this.init(callback, options);
	}

	__webpack_require__(404).inherits(FeedHandler, DomHandler);

	FeedHandler.prototype.init = DomHandler;

	function getElements(what, where){
		return DomUtils.getElementsByTagName(what, where, true);
	}
	function getOneElement(what, where){
		return DomUtils.getElementsByTagName(what, where, true, 1)[0];
	}
	function fetch(what, where, recurse){
		return DomUtils.getText(
			DomUtils.getElementsByTagName(what, where, recurse, 1)
		).trim();
	}

	function addConditionally(obj, prop, what, where, recurse){
		var tmp = fetch(what, where, recurse);
		if(tmp) obj[prop] = tmp;
	}

	var isValidFeed = function(value){
		return value === "rss" || value === "feed" || value === "rdf:RDF";
	};

	FeedHandler.prototype.onend = function(){
		var feed = {},
			feedRoot = getOneElement(isValidFeed, this.dom),
			tmp, childs;

		if(feedRoot){
			if(feedRoot.name === "feed"){
				childs = feedRoot.children;

				feed.type = "atom";
				addConditionally(feed, "id", "id", childs);
				addConditionally(feed, "title", "title", childs);
				if((tmp = getOneElement("link", childs)) && (tmp = tmp.attribs) && (tmp = tmp.href)) feed.link = tmp;
				addConditionally(feed, "description", "subtitle", childs);
				if((tmp = fetch("updated", childs))) feed.updated = new Date(tmp);
				addConditionally(feed, "author", "email", childs, true);

				feed.items = getElements("entry", childs).map(function(item){
					var entry = {}, tmp;

					item = item.children;

					addConditionally(entry, "id", "id", item);
					addConditionally(entry, "title", "title", item);
					if((tmp = getOneElement("link", item)) && (tmp = tmp.attribs) && (tmp = tmp.href)) entry.link = tmp;
					if((tmp = fetch("summary", item) || fetch("content", item))) entry.description = tmp;
					if((tmp = fetch("updated", item))) entry.pubDate = new Date(tmp);
					return entry;
				});
			} else {
				childs = getOneElement("channel", feedRoot.children).children;

				feed.type = feedRoot.name.substr(0, 3);
				feed.id = "";
				addConditionally(feed, "title", "title", childs);
				addConditionally(feed, "link", "link", childs);
				addConditionally(feed, "description", "description", childs);
				if((tmp = fetch("lastBuildDate", childs))) feed.updated = new Date(tmp);
				addConditionally(feed, "author", "managingEditor", childs, true);

				feed.items = getElements("item", feedRoot.children).map(function(item){
					var entry = {}, tmp;

					item = item.children;

					addConditionally(entry, "id", "guid", item);
					addConditionally(entry, "title", "title", item);
					addConditionally(entry, "link", "link", item);
					addConditionally(entry, "description", "description", item);
					if((tmp = fetch("pubDate", item))) entry.pubDate = new Date(tmp);
					return entry;
				});
			}
		}
		this.dom = feed;
		DomHandler.prototype._handleCallback.call(
			this, feedRoot ? null : Error("couldn't find root of feed")
		);
	};

	module.exports = FeedHandler;


/***/ },

/***/ 1112:
/***/ function(module, exports, __webpack_require__) {

	module.exports = Stream;

	var Parser = __webpack_require__(1113);

	function Stream(options){
		Parser.call(this, new Cbs(this), options);
	}

	__webpack_require__(404).inherits(Stream, Parser);

	Stream.prototype.readable = true;

	function Cbs(scope){
		this.scope = scope;
	}

	var EVENTS = __webpack_require__(1098).EVENTS;

	Object.keys(EVENTS).forEach(function(name){
		if(EVENTS[name] === 0){
			Cbs.prototype["on" + name] = function(){
				this.scope.emit(name);
			};
		} else if(EVENTS[name] === 1){
			Cbs.prototype["on" + name] = function(a){
				this.scope.emit(name, a);
			};
		} else if(EVENTS[name] === 2){
			Cbs.prototype["on" + name] = function(a, b){
				this.scope.emit(name, a, b);
			};
		} else {
			throw Error("wrong number of arguments!");
		}
	});

/***/ },

/***/ 1113:
/***/ function(module, exports, __webpack_require__) {

	module.exports = Stream;

	var Parser = __webpack_require__(1099),
	    WritableStream = __webpack_require__(1114).Writable || __webpack_require__(1129).Writable;

	function Stream(cbs, options){
		var parser = this._parser = new Parser(cbs, options);

		WritableStream.call(this, {decodeStrings: false});

		this.once("finish", function(){
			parser.end();
		});
	}

	__webpack_require__(404).inherits(Stream, WritableStream);

	WritableStream.prototype._write = function(chunk, encoding, cb){
		this._parser.write(chunk);
		cb();
	};

/***/ },

/***/ 1114:
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	module.exports = Stream;

	var EE = __webpack_require__(1106).EventEmitter;
	var inherits = __webpack_require__(406);

	inherits(Stream, EE);
	Stream.Readable = __webpack_require__(1115);
	Stream.Writable = __webpack_require__(1125);
	Stream.Duplex = __webpack_require__(1126);
	Stream.Transform = __webpack_require__(1127);
	Stream.PassThrough = __webpack_require__(1128);

	// Backwards-compat with node 0.4.x
	Stream.Stream = Stream;



	// old-style streams.  Note that the pipe method (the only relevant
	// part of this class) is overridden in the Readable class.

	function Stream() {
	  EE.call(this);
	}

	Stream.prototype.pipe = function(dest, options) {
	  var source = this;

	  function ondata(chunk) {
	    if (dest.writable) {
	      if (false === dest.write(chunk) && source.pause) {
	        source.pause();
	      }
	    }
	  }

	  source.on('data', ondata);

	  function ondrain() {
	    if (source.readable && source.resume) {
	      source.resume();
	    }
	  }

	  dest.on('drain', ondrain);

	  // If the 'end' option is not supplied, dest.end() will be called when
	  // source gets the 'end' or 'close' events.  Only dest.end() once.
	  if (!dest._isStdio && (!options || options.end !== false)) {
	    source.on('end', onend);
	    source.on('close', onclose);
	  }

	  var didOnEnd = false;
	  function onend() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    dest.end();
	  }


	  function onclose() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    if (typeof dest.destroy === 'function') dest.destroy();
	  }

	  // don't leave dangling pipes when there are errors.
	  function onerror(er) {
	    cleanup();
	    if (EE.listenerCount(this, 'error') === 0) {
	      throw er; // Unhandled stream error in pipe.
	    }
	  }

	  source.on('error', onerror);
	  dest.on('error', onerror);

	  // remove all the event listeners that were added.
	  function cleanup() {
	    source.removeListener('data', ondata);
	    dest.removeListener('drain', ondrain);

	    source.removeListener('end', onend);
	    source.removeListener('close', onclose);

	    source.removeListener('error', onerror);
	    dest.removeListener('error', onerror);

	    source.removeListener('end', cleanup);
	    source.removeListener('close', cleanup);

	    dest.removeListener('close', cleanup);
	  }

	  source.on('end', cleanup);
	  source.on('close', cleanup);

	  dest.on('close', cleanup);

	  dest.emit('pipe', source);

	  // Allow for unix-like usage: A.pipe(B).pipe(C)
	  return dest;
	};


/***/ },

/***/ 1115:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {exports = module.exports = __webpack_require__(1116);
	exports.Stream = __webpack_require__(1114);
	exports.Readable = exports;
	exports.Writable = __webpack_require__(1121);
	exports.Duplex = __webpack_require__(1120);
	exports.Transform = __webpack_require__(1123);
	exports.PassThrough = __webpack_require__(1124);
	if (!process.browser && ({"NODE_ENV":"development"}).READABLE_STREAM === 'disable') {
	  module.exports = __webpack_require__(1114);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },

/***/ 1116:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	module.exports = Readable;

	/*<replacement>*/
	var isArray = __webpack_require__(1117);
	/*</replacement>*/


	/*<replacement>*/
	var Buffer = __webpack_require__(388).Buffer;
	/*</replacement>*/

	Readable.ReadableState = ReadableState;

	var EE = __webpack_require__(1106).EventEmitter;

	/*<replacement>*/
	if (!EE.listenerCount) EE.listenerCount = function(emitter, type) {
	  return emitter.listeners(type).length;
	};
	/*</replacement>*/

	var Stream = __webpack_require__(1114);

	/*<replacement>*/
	var util = __webpack_require__(1118);
	util.inherits = __webpack_require__(406);
	/*</replacement>*/

	var StringDecoder;


	/*<replacement>*/
	var debug = __webpack_require__(1119);
	if (debug && debug.debuglog) {
	  debug = debug.debuglog('stream');
	} else {
	  debug = function () {};
	}
	/*</replacement>*/


	util.inherits(Readable, Stream);

	function ReadableState(options, stream) {
	  var Duplex = __webpack_require__(1120);

	  options = options || {};

	  // the point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  var hwm = options.highWaterMark;
	  var defaultHwm = options.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;

	  // cast to ints.
	  this.highWaterMark = ~~this.highWaterMark;

	  this.buffer = [];
	  this.length = 0;
	  this.pipes = null;
	  this.pipesCount = 0;
	  this.flowing = null;
	  this.ended = false;
	  this.endEmitted = false;
	  this.reading = false;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  this.needReadable = false;
	  this.emittedReadable = false;
	  this.readableListening = false;


	  // object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex)
	    this.objectMode = this.objectMode || !!options.readableObjectMode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // when piping, we only care about 'readable' events that happen
	  // after read()ing all the bytes and not getting any pushback.
	  this.ranOut = false;

	  // the number of writers that are awaiting a drain event in .pipe()s
	  this.awaitDrain = 0;

	  // if true, a maybeReadMore has been scheduled
	  this.readingMore = false;

	  this.decoder = null;
	  this.encoding = null;
	  if (options.encoding) {
	    if (!StringDecoder)
	      StringDecoder = __webpack_require__(1122).StringDecoder;
	    this.decoder = new StringDecoder(options.encoding);
	    this.encoding = options.encoding;
	  }
	}

	function Readable(options) {
	  var Duplex = __webpack_require__(1120);

	  if (!(this instanceof Readable))
	    return new Readable(options);

	  this._readableState = new ReadableState(options, this);

	  // legacy
	  this.readable = true;

	  Stream.call(this);
	}

	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable.prototype.push = function(chunk, encoding) {
	  var state = this._readableState;

	  if (util.isString(chunk) && !state.objectMode) {
	    encoding = encoding || state.defaultEncoding;
	    if (encoding !== state.encoding) {
	      chunk = new Buffer(chunk, encoding);
	      encoding = '';
	    }
	  }

	  return readableAddChunk(this, state, chunk, encoding, false);
	};

	// Unshift should *always* be something directly out of read()
	Readable.prototype.unshift = function(chunk) {
	  var state = this._readableState;
	  return readableAddChunk(this, state, chunk, '', true);
	};

	function readableAddChunk(stream, state, chunk, encoding, addToFront) {
	  var er = chunkInvalid(state, chunk);
	  if (er) {
	    stream.emit('error', er);
	  } else if (util.isNullOrUndefined(chunk)) {
	    state.reading = false;
	    if (!state.ended)
	      onEofChunk(stream, state);
	  } else if (state.objectMode || chunk && chunk.length > 0) {
	    if (state.ended && !addToFront) {
	      var e = new Error('stream.push() after EOF');
	      stream.emit('error', e);
	    } else if (state.endEmitted && addToFront) {
	      var e = new Error('stream.unshift() after end event');
	      stream.emit('error', e);
	    } else {
	      if (state.decoder && !addToFront && !encoding)
	        chunk = state.decoder.write(chunk);

	      if (!addToFront)
	        state.reading = false;

	      // if we want the data now, just emit it.
	      if (state.flowing && state.length === 0 && !state.sync) {
	        stream.emit('data', chunk);
	        stream.read(0);
	      } else {
	        // update the buffer info.
	        state.length += state.objectMode ? 1 : chunk.length;
	        if (addToFront)
	          state.buffer.unshift(chunk);
	        else
	          state.buffer.push(chunk);

	        if (state.needReadable)
	          emitReadable(stream);
	      }

	      maybeReadMore(stream, state);
	    }
	  } else if (!addToFront) {
	    state.reading = false;
	  }

	  return needMoreData(state);
	}



	// if it's past the high water mark, we can push in some more.
	// Also, if we have no data yet, we can stand some
	// more bytes.  This is to work around cases where hwm=0,
	// such as the repl.  Also, if the push() triggered a
	// readable event, and the user called read(largeNumber) such that
	// needReadable was set, then we ought to push more, so that another
	// 'readable' event will be triggered.
	function needMoreData(state) {
	  return !state.ended &&
	         (state.needReadable ||
	          state.length < state.highWaterMark ||
	          state.length === 0);
	}

	// backwards compatibility.
	Readable.prototype.setEncoding = function(enc) {
	  if (!StringDecoder)
	    StringDecoder = __webpack_require__(1122).StringDecoder;
	  this._readableState.decoder = new StringDecoder(enc);
	  this._readableState.encoding = enc;
	  return this;
	};

	// Don't raise the hwm > 128MB
	var MAX_HWM = 0x800000;
	function roundUpToNextPowerOf2(n) {
	  if (n >= MAX_HWM) {
	    n = MAX_HWM;
	  } else {
	    // Get the next highest power of 2
	    n--;
	    for (var p = 1; p < 32; p <<= 1) n |= n >> p;
	    n++;
	  }
	  return n;
	}

	function howMuchToRead(n, state) {
	  if (state.length === 0 && state.ended)
	    return 0;

	  if (state.objectMode)
	    return n === 0 ? 0 : 1;

	  if (isNaN(n) || util.isNull(n)) {
	    // only flow one buffer at a time
	    if (state.flowing && state.buffer.length)
	      return state.buffer[0].length;
	    else
	      return state.length;
	  }

	  if (n <= 0)
	    return 0;

	  // If we're asking for more than the target buffer level,
	  // then raise the water mark.  Bump up to the next highest
	  // power of 2, to prevent increasing it excessively in tiny
	  // amounts.
	  if (n > state.highWaterMark)
	    state.highWaterMark = roundUpToNextPowerOf2(n);

	  // don't have that much.  return null, unless we've ended.
	  if (n > state.length) {
	    if (!state.ended) {
	      state.needReadable = true;
	      return 0;
	    } else
	      return state.length;
	  }

	  return n;
	}

	// you can override either this method, or the async _read(n) below.
	Readable.prototype.read = function(n) {
	  debug('read', n);
	  var state = this._readableState;
	  var nOrig = n;

	  if (!util.isNumber(n) || n > 0)
	    state.emittedReadable = false;

	  // if we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (n === 0 &&
	      state.needReadable &&
	      (state.length >= state.highWaterMark || state.ended)) {
	    debug('read: emitReadable', state.length, state.ended);
	    if (state.length === 0 && state.ended)
	      endReadable(this);
	    else
	      emitReadable(this);
	    return null;
	  }

	  n = howMuchToRead(n, state);

	  // if we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    if (state.length === 0)
	      endReadable(this);
	    return null;
	  }

	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.

	  // if we need a readable event, then we need to do some reading.
	  var doRead = state.needReadable;
	  debug('need readable', doRead);

	  // if we currently have less than the highWaterMark, then also read some
	  if (state.length === 0 || state.length - n < state.highWaterMark) {
	    doRead = true;
	    debug('length less than watermark', doRead);
	  }

	  // however, if we've ended, then there's no point, and if we're already
	  // reading, then it's unnecessary.
	  if (state.ended || state.reading) {
	    doRead = false;
	    debug('reading or ended', doRead);
	  }

	  if (doRead) {
	    debug('do read');
	    state.reading = true;
	    state.sync = true;
	    // if the length is currently zero, then we *need* a readable event.
	    if (state.length === 0)
	      state.needReadable = true;
	    // call internal read method
	    this._read(state.highWaterMark);
	    state.sync = false;
	  }

	  // If _read pushed data synchronously, then `reading` will be false,
	  // and we need to re-evaluate how much data we can return to the user.
	  if (doRead && !state.reading)
	    n = howMuchToRead(nOrig, state);

	  var ret;
	  if (n > 0)
	    ret = fromList(n, state);
	  else
	    ret = null;

	  if (util.isNull(ret)) {
	    state.needReadable = true;
	    n = 0;
	  }

	  state.length -= n;

	  // If we have nothing in the buffer, then we want to know
	  // as soon as we *do* get something into the buffer.
	  if (state.length === 0 && !state.ended)
	    state.needReadable = true;

	  // If we tried to read() past the EOF, then emit end on the next tick.
	  if (nOrig !== n && state.ended && state.length === 0)
	    endReadable(this);

	  if (!util.isNull(ret))
	    this.emit('data', ret);

	  return ret;
	};

	function chunkInvalid(state, chunk) {
	  var er = null;
	  if (!util.isBuffer(chunk) &&
	      !util.isString(chunk) &&
	      !util.isNullOrUndefined(chunk) &&
	      !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  return er;
	}


	function onEofChunk(stream, state) {
	  if (state.decoder && !state.ended) {
	    var chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;

	  // emit 'readable' now to make sure it gets picked up.
	  emitReadable(stream);
	}

	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable(stream) {
	  var state = stream._readableState;
	  state.needReadable = false;
	  if (!state.emittedReadable) {
	    debug('emitReadable', state.flowing);
	    state.emittedReadable = true;
	    if (state.sync)
	      process.nextTick(function() {
	        emitReadable_(stream);
	      });
	    else
	      emitReadable_(stream);
	  }
	}

	function emitReadable_(stream) {
	  debug('emit readable');
	  stream.emit('readable');
	  flow(stream);
	}


	// at this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore(stream, state) {
	  if (!state.readingMore) {
	    state.readingMore = true;
	    process.nextTick(function() {
	      maybeReadMore_(stream, state);
	    });
	  }
	}

	function maybeReadMore_(stream, state) {
	  var len = state.length;
	  while (!state.reading && !state.flowing && !state.ended &&
	         state.length < state.highWaterMark) {
	    debug('maybeReadMore read 0');
	    stream.read(0);
	    if (len === state.length)
	      // didn't get any data, stop spinning.
	      break;
	    else
	      len = state.length;
	  }
	  state.readingMore = false;
	}

	// abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable.prototype._read = function(n) {
	  this.emit('error', new Error('not implemented'));
	};

	Readable.prototype.pipe = function(dest, pipeOpts) {
	  var src = this;
	  var state = this._readableState;

	  switch (state.pipesCount) {
	    case 0:
	      state.pipes = dest;
	      break;
	    case 1:
	      state.pipes = [state.pipes, dest];
	      break;
	    default:
	      state.pipes.push(dest);
	      break;
	  }
	  state.pipesCount += 1;
	  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

	  var doEnd = (!pipeOpts || pipeOpts.end !== false) &&
	              dest !== process.stdout &&
	              dest !== process.stderr;

	  var endFn = doEnd ? onend : cleanup;
	  if (state.endEmitted)
	    process.nextTick(endFn);
	  else
	    src.once('end', endFn);

	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable) {
	    debug('onunpipe');
	    if (readable === src) {
	      cleanup();
	    }
	  }

	  function onend() {
	    debug('onend');
	    dest.end();
	  }

	  // when the dest drains, it reduces the awaitDrain counter
	  // on the source.  This would be more elegant with a .once()
	  // handler in flow(), but adding and removing repeatedly is
	  // too slow.
	  var ondrain = pipeOnDrain(src);
	  dest.on('drain', ondrain);

	  function cleanup() {
	    debug('cleanup');
	    // cleanup event handlers once the pipe is broken
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    dest.removeListener('drain', ondrain);
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', cleanup);
	    src.removeListener('data', ondata);

	    // if the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (state.awaitDrain &&
	        (!dest._writableState || dest._writableState.needDrain))
	      ondrain();
	  }

	  src.on('data', ondata);
	  function ondata(chunk) {
	    debug('ondata');
	    var ret = dest.write(chunk);
	    if (false === ret) {
	      debug('false write response, pause',
	            src._readableState.awaitDrain);
	      src._readableState.awaitDrain++;
	      src.pause();
	    }
	  }

	  // if the dest has an error, then stop piping into it.
	  // however, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    debug('onerror', er);
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (EE.listenerCount(dest, 'error') === 0)
	      dest.emit('error', er);
	  }
	  // This is a brutally ugly hack to make sure that our error handler
	  // is attached before any userland ones.  NEVER DO THIS.
	  if (!dest._events || !dest._events.error)
	    dest.on('error', onerror);
	  else if (isArray(dest._events.error))
	    dest._events.error.unshift(onerror);
	  else
	    dest._events.error = [onerror, dest._events.error];



	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    debug('onfinish');
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);

	  function unpipe() {
	    debug('unpipe');
	    src.unpipe(dest);
	  }

	  // tell the dest that it's being piped to
	  dest.emit('pipe', src);

	  // start the flow if it hasn't been started already.
	  if (!state.flowing) {
	    debug('pipe resume');
	    src.resume();
	  }

	  return dest;
	};

	function pipeOnDrain(src) {
	  return function() {
	    var state = src._readableState;
	    debug('pipeOnDrain', state.awaitDrain);
	    if (state.awaitDrain)
	      state.awaitDrain--;
	    if (state.awaitDrain === 0 && EE.listenerCount(src, 'data')) {
	      state.flowing = true;
	      flow(src);
	    }
	  };
	}


	Readable.prototype.unpipe = function(dest) {
	  var state = this._readableState;

	  // if we're not piping anywhere, then do nothing.
	  if (state.pipesCount === 0)
	    return this;

	  // just one destination.  most common case.
	  if (state.pipesCount === 1) {
	    // passed in one, but it's not the right one.
	    if (dest && dest !== state.pipes)
	      return this;

	    if (!dest)
	      dest = state.pipes;

	    // got a match.
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	    if (dest)
	      dest.emit('unpipe', this);
	    return this;
	  }

	  // slow case. multiple pipe destinations.

	  if (!dest) {
	    // remove all.
	    var dests = state.pipes;
	    var len = state.pipesCount;
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;

	    for (var i = 0; i < len; i++)
	      dests[i].emit('unpipe', this);
	    return this;
	  }

	  // try to find the right one.
	  var i = indexOf(state.pipes, dest);
	  if (i === -1)
	    return this;

	  state.pipes.splice(i, 1);
	  state.pipesCount -= 1;
	  if (state.pipesCount === 1)
	    state.pipes = state.pipes[0];

	  dest.emit('unpipe', this);

	  return this;
	};

	// set up data events if they are asked for
	// Ensure readable listeners eventually get something
	Readable.prototype.on = function(ev, fn) {
	  var res = Stream.prototype.on.call(this, ev, fn);

	  // If listening to data, and it has not explicitly been paused,
	  // then call resume to start the flow of data on the next tick.
	  if (ev === 'data' && false !== this._readableState.flowing) {
	    this.resume();
	  }

	  if (ev === 'readable' && this.readable) {
	    var state = this._readableState;
	    if (!state.readableListening) {
	      state.readableListening = true;
	      state.emittedReadable = false;
	      state.needReadable = true;
	      if (!state.reading) {
	        var self = this;
	        process.nextTick(function() {
	          debug('readable nexttick read 0');
	          self.read(0);
	        });
	      } else if (state.length) {
	        emitReadable(this, state);
	      }
	    }
	  }

	  return res;
	};
	Readable.prototype.addListener = Readable.prototype.on;

	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable.prototype.resume = function() {
	  var state = this._readableState;
	  if (!state.flowing) {
	    debug('resume');
	    state.flowing = true;
	    if (!state.reading) {
	      debug('resume read 0');
	      this.read(0);
	    }
	    resume(this, state);
	  }
	  return this;
	};

	function resume(stream, state) {
	  if (!state.resumeScheduled) {
	    state.resumeScheduled = true;
	    process.nextTick(function() {
	      resume_(stream, state);
	    });
	  }
	}

	function resume_(stream, state) {
	  state.resumeScheduled = false;
	  stream.emit('resume');
	  flow(stream);
	  if (state.flowing && !state.reading)
	    stream.read(0);
	}

	Readable.prototype.pause = function() {
	  debug('call pause flowing=%j', this._readableState.flowing);
	  if (false !== this._readableState.flowing) {
	    debug('pause');
	    this._readableState.flowing = false;
	    this.emit('pause');
	  }
	  return this;
	};

	function flow(stream) {
	  var state = stream._readableState;
	  debug('flow', state.flowing);
	  if (state.flowing) {
	    do {
	      var chunk = stream.read();
	    } while (null !== chunk && state.flowing);
	  }
	}

	// wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable.prototype.wrap = function(stream) {
	  var state = this._readableState;
	  var paused = false;

	  var self = this;
	  stream.on('end', function() {
	    debug('wrapped end');
	    if (state.decoder && !state.ended) {
	      var chunk = state.decoder.end();
	      if (chunk && chunk.length)
	        self.push(chunk);
	    }

	    self.push(null);
	  });

	  stream.on('data', function(chunk) {
	    debug('wrapped data');
	    if (state.decoder)
	      chunk = state.decoder.write(chunk);
	    if (!chunk || !state.objectMode && !chunk.length)
	      return;

	    var ret = self.push(chunk);
	    if (!ret) {
	      paused = true;
	      stream.pause();
	    }
	  });

	  // proxy all the other methods.
	  // important when wrapping filters and duplexes.
	  for (var i in stream) {
	    if (util.isFunction(stream[i]) && util.isUndefined(this[i])) {
	      this[i] = function(method) { return function() {
	        return stream[method].apply(stream, arguments);
	      }}(i);
	    }
	  }

	  // proxy certain important events.
	  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
	  forEach(events, function(ev) {
	    stream.on(ev, self.emit.bind(self, ev));
	  });

	  // when we try to consume some more bytes, simply unpause the
	  // underlying stream.
	  self._read = function(n) {
	    debug('wrapped _read', n);
	    if (paused) {
	      paused = false;
	      stream.resume();
	    }
	  };

	  return self;
	};



	// exposed for testing purposes only.
	Readable._fromList = fromList;

	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	function fromList(n, state) {
	  var list = state.buffer;
	  var length = state.length;
	  var stringMode = !!state.decoder;
	  var objectMode = !!state.objectMode;
	  var ret;

	  // nothing in the list, definitely empty.
	  if (list.length === 0)
	    return null;

	  if (length === 0)
	    ret = null;
	  else if (objectMode)
	    ret = list.shift();
	  else if (!n || n >= length) {
	    // read it all, truncate the array.
	    if (stringMode)
	      ret = list.join('');
	    else
	      ret = Buffer.concat(list, length);
	    list.length = 0;
	  } else {
	    // read just some of it.
	    if (n < list[0].length) {
	      // just take a part of the first list item.
	      // slice is the same for buffers and strings.
	      var buf = list[0];
	      ret = buf.slice(0, n);
	      list[0] = buf.slice(n);
	    } else if (n === list[0].length) {
	      // first list is a perfect match
	      ret = list.shift();
	    } else {
	      // complex case.
	      // we have enough to cover it, but it spans past the first buffer.
	      if (stringMode)
	        ret = '';
	      else
	        ret = new Buffer(n);

	      var c = 0;
	      for (var i = 0, l = list.length; i < l && c < n; i++) {
	        var buf = list[0];
	        var cpy = Math.min(n - c, buf.length);

	        if (stringMode)
	          ret += buf.slice(0, cpy);
	        else
	          buf.copy(ret, c, 0, cpy);

	        if (cpy < buf.length)
	          list[0] = buf.slice(cpy);
	        else
	          list.shift();

	        c += cpy;
	      }
	    }
	  }

	  return ret;
	}

	function endReadable(stream) {
	  var state = stream._readableState;

	  // If we get here before consuming all the bytes, then that is a
	  // bug in node.  Should never happen.
	  if (state.length > 0)
	    throw new Error('endReadable called on non-empty stream');

	  if (!state.endEmitted) {
	    state.ended = true;
	    process.nextTick(function() {
	      // Check that we didn't get one last unshift.
	      if (!state.endEmitted && state.length === 0) {
	        state.endEmitted = true;
	        stream.readable = false;
	        stream.emit('end');
	      }
	    });
	  }
	}

	function forEach (xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	function indexOf (xs, x) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    if (xs[i] === x) return i;
	  }
	  return -1;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },

/***/ 1117:
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },

/***/ 1118:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.

	function isArray(arg) {
	  if (Array.isArray) {
	    return Array.isArray(arg);
	  }
	  return objectToString(arg) === '[object Array]';
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = Buffer.isBuffer;

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(388).Buffer))

/***/ },

/***/ 1119:
/***/ function(module, exports) {

	/* (ignored) */

/***/ },

/***/ 1120:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// a duplex stream is just a stream that is both readable and writable.
	// Since JS doesn't have multiple prototypal inheritance, this class
	// prototypally inherits from Readable, and then parasitically from
	// Writable.

	module.exports = Duplex;

	/*<replacement>*/
	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}
	/*</replacement>*/


	/*<replacement>*/
	var util = __webpack_require__(1118);
	util.inherits = __webpack_require__(406);
	/*</replacement>*/

	var Readable = __webpack_require__(1116);
	var Writable = __webpack_require__(1121);

	util.inherits(Duplex, Readable);

	forEach(objectKeys(Writable.prototype), function(method) {
	  if (!Duplex.prototype[method])
	    Duplex.prototype[method] = Writable.prototype[method];
	});

	function Duplex(options) {
	  if (!(this instanceof Duplex))
	    return new Duplex(options);

	  Readable.call(this, options);
	  Writable.call(this, options);

	  if (options && options.readable === false)
	    this.readable = false;

	  if (options && options.writable === false)
	    this.writable = false;

	  this.allowHalfOpen = true;
	  if (options && options.allowHalfOpen === false)
	    this.allowHalfOpen = false;

	  this.once('end', onend);
	}

	// the no-half-open enforcer
	function onend() {
	  // if we allow half-open state, or if the writable side ended,
	  // then we're ok.
	  if (this.allowHalfOpen || this._writableState.ended)
	    return;

	  // no more data can be written.
	  // But allow more writes to happen in this tick.
	  process.nextTick(this.end.bind(this));
	}

	function forEach (xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },

/***/ 1121:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// A bit simpler than readable streams.
	// Implement an async ._write(chunk, cb), and it'll handle all
	// the drain event emission and buffering.

	module.exports = Writable;

	/*<replacement>*/
	var Buffer = __webpack_require__(388).Buffer;
	/*</replacement>*/

	Writable.WritableState = WritableState;


	/*<replacement>*/
	var util = __webpack_require__(1118);
	util.inherits = __webpack_require__(406);
	/*</replacement>*/

	var Stream = __webpack_require__(1114);

	util.inherits(Writable, Stream);

	function WriteReq(chunk, encoding, cb) {
	  this.chunk = chunk;
	  this.encoding = encoding;
	  this.callback = cb;
	}

	function WritableState(options, stream) {
	  var Duplex = __webpack_require__(1120);

	  options = options || {};

	  // the point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write()
	  var hwm = options.highWaterMark;
	  var defaultHwm = options.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;

	  // object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex)
	    this.objectMode = this.objectMode || !!options.writableObjectMode;

	  // cast to ints.
	  this.highWaterMark = ~~this.highWaterMark;

	  this.needDrain = false;
	  // at the start of calling end()
	  this.ending = false;
	  // when end() has been called, and returned
	  this.ended = false;
	  // when 'finish' is emitted
	  this.finished = false;

	  // should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  var noDecode = options.decodeStrings === false;
	  this.decodeStrings = !noDecode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;

	  // a flag to see when we're in the middle of a write.
	  this.writing = false;

	  // when true all writes will be buffered until .uncork() call
	  this.corked = 0;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // a flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;

	  // the callback that's passed to _write(chunk,cb)
	  this.onwrite = function(er) {
	    onwrite(stream, er);
	  };

	  // the callback that the user supplies to write(chunk,encoding,cb)
	  this.writecb = null;

	  // the amount that is being written when _write is called.
	  this.writelen = 0;

	  this.buffer = [];

	  // number of pending user-supplied write callbacks
	  // this must be 0 before 'finish' can be emitted
	  this.pendingcb = 0;

	  // emit prefinish if the only thing we're waiting for is _write cbs
	  // This is relevant for synchronous Transform streams
	  this.prefinished = false;

	  // True if the error was already emitted and should not be thrown again
	  this.errorEmitted = false;
	}

	function Writable(options) {
	  var Duplex = __webpack_require__(1120);

	  // Writable ctor is applied to Duplexes, though they're not
	  // instanceof Writable, they're instanceof Readable.
	  if (!(this instanceof Writable) && !(this instanceof Duplex))
	    return new Writable(options);

	  this._writableState = new WritableState(options, this);

	  // legacy.
	  this.writable = true;

	  Stream.call(this);
	}

	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable.prototype.pipe = function() {
	  this.emit('error', new Error('Cannot pipe. Not readable.'));
	};


	function writeAfterEnd(stream, state, cb) {
	  var er = new Error('write after end');
	  // TODO: defer error events consistently everywhere, not just the cb
	  stream.emit('error', er);
	  process.nextTick(function() {
	    cb(er);
	  });
	}

	// If we get something that is not a buffer, string, null, or undefined,
	// and we're not in objectMode, then that's an error.
	// Otherwise stream chunks are all considered to be of length=1, and the
	// watermarks determine how many objects to keep in the buffer, rather than
	// how many bytes or characters.
	function validChunk(stream, state, chunk, cb) {
	  var valid = true;
	  if (!util.isBuffer(chunk) &&
	      !util.isString(chunk) &&
	      !util.isNullOrUndefined(chunk) &&
	      !state.objectMode) {
	    var er = new TypeError('Invalid non-string/buffer chunk');
	    stream.emit('error', er);
	    process.nextTick(function() {
	      cb(er);
	    });
	    valid = false;
	  }
	  return valid;
	}

	Writable.prototype.write = function(chunk, encoding, cb) {
	  var state = this._writableState;
	  var ret = false;

	  if (util.isFunction(encoding)) {
	    cb = encoding;
	    encoding = null;
	  }

	  if (util.isBuffer(chunk))
	    encoding = 'buffer';
	  else if (!encoding)
	    encoding = state.defaultEncoding;

	  if (!util.isFunction(cb))
	    cb = function() {};

	  if (state.ended)
	    writeAfterEnd(this, state, cb);
	  else if (validChunk(this, state, chunk, cb)) {
	    state.pendingcb++;
	    ret = writeOrBuffer(this, state, chunk, encoding, cb);
	  }

	  return ret;
	};

	Writable.prototype.cork = function() {
	  var state = this._writableState;

	  state.corked++;
	};

	Writable.prototype.uncork = function() {
	  var state = this._writableState;

	  if (state.corked) {
	    state.corked--;

	    if (!state.writing &&
	        !state.corked &&
	        !state.finished &&
	        !state.bufferProcessing &&
	        state.buffer.length)
	      clearBuffer(this, state);
	  }
	};

	function decodeChunk(state, chunk, encoding) {
	  if (!state.objectMode &&
	      state.decodeStrings !== false &&
	      util.isString(chunk)) {
	    chunk = new Buffer(chunk, encoding);
	  }
	  return chunk;
	}

	// if we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer(stream, state, chunk, encoding, cb) {
	  chunk = decodeChunk(state, chunk, encoding);
	  if (util.isBuffer(chunk))
	    encoding = 'buffer';
	  var len = state.objectMode ? 1 : chunk.length;

	  state.length += len;

	  var ret = state.length < state.highWaterMark;
	  // we must ensure that previous needDrain will not be reset to false.
	  if (!ret)
	    state.needDrain = true;

	  if (state.writing || state.corked)
	    state.buffer.push(new WriteReq(chunk, encoding, cb));
	  else
	    doWrite(stream, state, false, len, chunk, encoding, cb);

	  return ret;
	}

	function doWrite(stream, state, writev, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  if (writev)
	    stream._writev(chunk, state.onwrite);
	  else
	    stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}

	function onwriteError(stream, state, sync, er, cb) {
	  if (sync)
	    process.nextTick(function() {
	      state.pendingcb--;
	      cb(er);
	    });
	  else {
	    state.pendingcb--;
	    cb(er);
	  }

	  stream._writableState.errorEmitted = true;
	  stream.emit('error', er);
	}

	function onwriteStateUpdate(state) {
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	}

	function onwrite(stream, er) {
	  var state = stream._writableState;
	  var sync = state.sync;
	  var cb = state.writecb;

	  onwriteStateUpdate(state);

	  if (er)
	    onwriteError(stream, state, sync, er, cb);
	  else {
	    // Check if we're actually ready to finish, but don't emit yet
	    var finished = needFinish(stream, state);

	    if (!finished &&
	        !state.corked &&
	        !state.bufferProcessing &&
	        state.buffer.length) {
	      clearBuffer(stream, state);
	    }

	    if (sync) {
	      process.nextTick(function() {
	        afterWrite(stream, state, finished, cb);
	      });
	    } else {
	      afterWrite(stream, state, finished, cb);
	    }
	  }
	}

	function afterWrite(stream, state, finished, cb) {
	  if (!finished)
	    onwriteDrain(stream, state);
	  state.pendingcb--;
	  cb();
	  finishMaybe(stream, state);
	}

	// Must force callback to be called on nextTick, so that we don't
	// emit 'drain' before the write() consumer gets the 'false' return
	// value, and has a chance to attach a 'drain' listener.
	function onwriteDrain(stream, state) {
	  if (state.length === 0 && state.needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	}


	// if there's something in the buffer waiting, then process it
	function clearBuffer(stream, state) {
	  state.bufferProcessing = true;

	  if (stream._writev && state.buffer.length > 1) {
	    // Fast case, write everything using _writev()
	    var cbs = [];
	    for (var c = 0; c < state.buffer.length; c++)
	      cbs.push(state.buffer[c].callback);

	    // count the one we are adding, as well.
	    // TODO(isaacs) clean this up
	    state.pendingcb++;
	    doWrite(stream, state, true, state.length, state.buffer, '', function(err) {
	      for (var i = 0; i < cbs.length; i++) {
	        state.pendingcb--;
	        cbs[i](err);
	      }
	    });

	    // Clear buffer
	    state.buffer = [];
	  } else {
	    // Slow case, write chunks one-by-one
	    for (var c = 0; c < state.buffer.length; c++) {
	      var entry = state.buffer[c];
	      var chunk = entry.chunk;
	      var encoding = entry.encoding;
	      var cb = entry.callback;
	      var len = state.objectMode ? 1 : chunk.length;

	      doWrite(stream, state, false, len, chunk, encoding, cb);

	      // if we didn't call the onwrite immediately, then
	      // it means that we need to wait until it does.
	      // also, that means that the chunk and cb are currently
	      // being processed, so move the buffer counter past them.
	      if (state.writing) {
	        c++;
	        break;
	      }
	    }

	    if (c < state.buffer.length)
	      state.buffer = state.buffer.slice(c);
	    else
	      state.buffer.length = 0;
	  }

	  state.bufferProcessing = false;
	}

	Writable.prototype._write = function(chunk, encoding, cb) {
	  cb(new Error('not implemented'));

	};

	Writable.prototype._writev = null;

	Writable.prototype.end = function(chunk, encoding, cb) {
	  var state = this._writableState;

	  if (util.isFunction(chunk)) {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (util.isFunction(encoding)) {
	    cb = encoding;
	    encoding = null;
	  }

	  if (!util.isNullOrUndefined(chunk))
	    this.write(chunk, encoding);

	  // .end() fully uncorks
	  if (state.corked) {
	    state.corked = 1;
	    this.uncork();
	  }

	  // ignore unnecessary end() calls.
	  if (!state.ending && !state.finished)
	    endWritable(this, state, cb);
	};


	function needFinish(stream, state) {
	  return (state.ending &&
	          state.length === 0 &&
	          !state.finished &&
	          !state.writing);
	}

	function prefinish(stream, state) {
	  if (!state.prefinished) {
	    state.prefinished = true;
	    stream.emit('prefinish');
	  }
	}

	function finishMaybe(stream, state) {
	  var need = needFinish(stream, state);
	  if (need) {
	    if (state.pendingcb === 0) {
	      prefinish(stream, state);
	      state.finished = true;
	      stream.emit('finish');
	    } else
	      prefinish(stream, state);
	  }
	  return need;
	}

	function endWritable(stream, state, cb) {
	  state.ending = true;
	  finishMaybe(stream, state);
	  if (cb) {
	    if (state.finished)
	      process.nextTick(cb);
	    else
	      stream.once('finish', cb);
	  }
	  state.ended = true;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },

/***/ 1122:
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var Buffer = __webpack_require__(388).Buffer;

	var isBufferEncoding = Buffer.isEncoding
	  || function(encoding) {
	       switch (encoding && encoding.toLowerCase()) {
	         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
	         default: return false;
	       }
	     }


	function assertEncoding(encoding) {
	  if (encoding && !isBufferEncoding(encoding)) {
	    throw new Error('Unknown encoding: ' + encoding);
	  }
	}

	// StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters. CESU-8 is handled as part of the UTF-8 encoding.
	//
	// @TODO Handling all encodings inside a single object makes it very difficult
	// to reason about this code, so it should be split up in the future.
	// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
	// points as used by CESU-8.
	var StringDecoder = exports.StringDecoder = function(encoding) {
	  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
	  assertEncoding(encoding);
	  switch (this.encoding) {
	    case 'utf8':
	      // CESU-8 represents each of Surrogate Pair by 3-bytes
	      this.surrogateSize = 3;
	      break;
	    case 'ucs2':
	    case 'utf16le':
	      // UTF-16 represents each of Surrogate Pair by 2-bytes
	      this.surrogateSize = 2;
	      this.detectIncompleteChar = utf16DetectIncompleteChar;
	      break;
	    case 'base64':
	      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
	      this.surrogateSize = 3;
	      this.detectIncompleteChar = base64DetectIncompleteChar;
	      break;
	    default:
	      this.write = passThroughWrite;
	      return;
	  }

	  // Enough space to store all bytes of a single character. UTF-8 needs 4
	  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
	  this.charBuffer = new Buffer(6);
	  // Number of bytes received for the current incomplete multi-byte character.
	  this.charReceived = 0;
	  // Number of bytes expected for the current incomplete multi-byte character.
	  this.charLength = 0;
	};


	// write decodes the given buffer and returns it as JS string that is
	// guaranteed to not contain any partial multi-byte characters. Any partial
	// character found at the end of the buffer is buffered up, and will be
	// returned when calling write again with the remaining bytes.
	//
	// Note: Converting a Buffer containing an orphan surrogate to a String
	// currently works, but converting a String to a Buffer (via `new Buffer`, or
	// Buffer#write) will replace incomplete surrogates with the unicode
	// replacement character. See https://codereview.chromium.org/121173009/ .
	StringDecoder.prototype.write = function(buffer) {
	  var charStr = '';
	  // if our last write ended with an incomplete multibyte character
	  while (this.charLength) {
	    // determine how many remaining bytes this buffer has to offer for this char
	    var available = (buffer.length >= this.charLength - this.charReceived) ?
	        this.charLength - this.charReceived :
	        buffer.length;

	    // add the new bytes to the char buffer
	    buffer.copy(this.charBuffer, this.charReceived, 0, available);
	    this.charReceived += available;

	    if (this.charReceived < this.charLength) {
	      // still not enough chars in this buffer? wait for more ...
	      return '';
	    }

	    // remove bytes belonging to the current character from the buffer
	    buffer = buffer.slice(available, buffer.length);

	    // get the character that was split
	    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

	    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	    var charCode = charStr.charCodeAt(charStr.length - 1);
	    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	      this.charLength += this.surrogateSize;
	      charStr = '';
	      continue;
	    }
	    this.charReceived = this.charLength = 0;

	    // if there are no more bytes in this buffer, just emit our char
	    if (buffer.length === 0) {
	      return charStr;
	    }
	    break;
	  }

	  // determine and set charLength / charReceived
	  this.detectIncompleteChar(buffer);

	  var end = buffer.length;
	  if (this.charLength) {
	    // buffer the incomplete character bytes we got
	    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
	    end -= this.charReceived;
	  }

	  charStr += buffer.toString(this.encoding, 0, end);

	  var end = charStr.length - 1;
	  var charCode = charStr.charCodeAt(end);
	  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	    var size = this.surrogateSize;
	    this.charLength += size;
	    this.charReceived += size;
	    this.charBuffer.copy(this.charBuffer, size, 0, size);
	    buffer.copy(this.charBuffer, 0, 0, size);
	    return charStr.substring(0, end);
	  }

	  // or just emit the charStr
	  return charStr;
	};

	// detectIncompleteChar determines if there is an incomplete UTF-8 character at
	// the end of the given buffer. If so, it sets this.charLength to the byte
	// length that character, and sets this.charReceived to the number of bytes
	// that are available for this character.
	StringDecoder.prototype.detectIncompleteChar = function(buffer) {
	  // determine how many bytes we have to check at the end of this buffer
	  var i = (buffer.length >= 3) ? 3 : buffer.length;

	  // Figure out if one of the last i bytes of our buffer announces an
	  // incomplete char.
	  for (; i > 0; i--) {
	    var c = buffer[buffer.length - i];

	    // See http://en.wikipedia.org/wiki/UTF-8#Description

	    // 110XXXXX
	    if (i == 1 && c >> 5 == 0x06) {
	      this.charLength = 2;
	      break;
	    }

	    // 1110XXXX
	    if (i <= 2 && c >> 4 == 0x0E) {
	      this.charLength = 3;
	      break;
	    }

	    // 11110XXX
	    if (i <= 3 && c >> 3 == 0x1E) {
	      this.charLength = 4;
	      break;
	    }
	  }
	  this.charReceived = i;
	};

	StringDecoder.prototype.end = function(buffer) {
	  var res = '';
	  if (buffer && buffer.length)
	    res = this.write(buffer);

	  if (this.charReceived) {
	    var cr = this.charReceived;
	    var buf = this.charBuffer;
	    var enc = this.encoding;
	    res += buf.slice(0, cr).toString(enc);
	  }

	  return res;
	};

	function passThroughWrite(buffer) {
	  return buffer.toString(this.encoding);
	}

	function utf16DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 2;
	  this.charLength = this.charReceived ? 2 : 0;
	}

	function base64DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 3;
	  this.charLength = this.charReceived ? 3 : 0;
	}


/***/ },

/***/ 1123:
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.


	// a transform stream is a readable/writable stream where you do
	// something with the data.  Sometimes it's called a "filter",
	// but that's not a great name for it, since that implies a thing where
	// some bits pass through, and others are simply ignored.  (That would
	// be a valid example of a transform, of course.)
	//
	// While the output is causally related to the input, it's not a
	// necessarily symmetric or synchronous transformation.  For example,
	// a zlib stream might take multiple plain-text writes(), and then
	// emit a single compressed chunk some time in the future.
	//
	// Here's how this works:
	//
	// The Transform stream has all the aspects of the readable and writable
	// stream classes.  When you write(chunk), that calls _write(chunk,cb)
	// internally, and returns false if there's a lot of pending writes
	// buffered up.  When you call read(), that calls _read(n) until
	// there's enough pending readable data buffered up.
	//
	// In a transform stream, the written data is placed in a buffer.  When
	// _read(n) is called, it transforms the queued up data, calling the
	// buffered _write cb's as it consumes chunks.  If consuming a single
	// written chunk would result in multiple output chunks, then the first
	// outputted bit calls the readcb, and subsequent chunks just go into
	// the read buffer, and will cause it to emit 'readable' if necessary.
	//
	// This way, back-pressure is actually determined by the reading side,
	// since _read has to be called to start processing a new chunk.  However,
	// a pathological inflate type of transform can cause excessive buffering
	// here.  For example, imagine a stream where every byte of input is
	// interpreted as an integer from 0-255, and then results in that many
	// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
	// 1kb of data being output.  In this case, you could write a very small
	// amount of input, and end up with a very large amount of output.  In
	// such a pathological inflating mechanism, there'd be no way to tell
	// the system to stop doing the transform.  A single 4MB write could
	// cause the system to run out of memory.
	//
	// However, even in such a pathological case, only a single written chunk
	// would be consumed, and then the rest would wait (un-transformed) until
	// the results of the previous transformed chunk were consumed.

	module.exports = Transform;

	var Duplex = __webpack_require__(1120);

	/*<replacement>*/
	var util = __webpack_require__(1118);
	util.inherits = __webpack_require__(406);
	/*</replacement>*/

	util.inherits(Transform, Duplex);


	function TransformState(options, stream) {
	  this.afterTransform = function(er, data) {
	    return afterTransform(stream, er, data);
	  };

	  this.needTransform = false;
	  this.transforming = false;
	  this.writecb = null;
	  this.writechunk = null;
	}

	function afterTransform(stream, er, data) {
	  var ts = stream._transformState;
	  ts.transforming = false;

	  var cb = ts.writecb;

	  if (!cb)
	    return stream.emit('error', new Error('no writecb in Transform class'));

	  ts.writechunk = null;
	  ts.writecb = null;

	  if (!util.isNullOrUndefined(data))
	    stream.push(data);

	  if (cb)
	    cb(er);

	  var rs = stream._readableState;
	  rs.reading = false;
	  if (rs.needReadable || rs.length < rs.highWaterMark) {
	    stream._read(rs.highWaterMark);
	  }
	}


	function Transform(options) {
	  if (!(this instanceof Transform))
	    return new Transform(options);

	  Duplex.call(this, options);

	  this._transformState = new TransformState(options, this);

	  // when the writable side finishes, then flush out anything remaining.
	  var stream = this;

	  // start out asking for a readable event once data is transformed.
	  this._readableState.needReadable = true;

	  // we have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;

	  this.once('prefinish', function() {
	    if (util.isFunction(this._flush))
	      this._flush(function(er) {
	        done(stream, er);
	      });
	    else
	      done(stream);
	  });
	}

	Transform.prototype.push = function(chunk, encoding) {
	  this._transformState.needTransform = false;
	  return Duplex.prototype.push.call(this, chunk, encoding);
	};

	// This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform.prototype._transform = function(chunk, encoding, cb) {
	  throw new Error('not implemented');
	};

	Transform.prototype._write = function(chunk, encoding, cb) {
	  var ts = this._transformState;
	  ts.writecb = cb;
	  ts.writechunk = chunk;
	  ts.writeencoding = encoding;
	  if (!ts.transforming) {
	    var rs = this._readableState;
	    if (ts.needTransform ||
	        rs.needReadable ||
	        rs.length < rs.highWaterMark)
	      this._read(rs.highWaterMark);
	  }
	};

	// Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform.prototype._read = function(n) {
	  var ts = this._transformState;

	  if (!util.isNull(ts.writechunk) && ts.writecb && !ts.transforming) {
	    ts.transforming = true;
	    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
	  } else {
	    // mark that we need a transform, so that any data that comes in
	    // will get processed, now that we've asked for it.
	    ts.needTransform = true;
	  }
	};


	function done(stream, er) {
	  if (er)
	    return stream.emit('error', er);

	  // if there's nothing in the write buffer, then that means
	  // that nothing more will ever be provided
	  var ws = stream._writableState;
	  var ts = stream._transformState;

	  if (ws.length)
	    throw new Error('calling transform done when ws.length != 0');

	  if (ts.transforming)
	    throw new Error('calling transform done when still transforming');

	  return stream.push(null);
	}


/***/ },

/***/ 1124:
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// a passthrough stream.
	// basically just the most minimal sort of Transform stream.
	// Every written chunk gets output as-is.

	module.exports = PassThrough;

	var Transform = __webpack_require__(1123);

	/*<replacement>*/
	var util = __webpack_require__(1118);
	util.inherits = __webpack_require__(406);
	/*</replacement>*/

	util.inherits(PassThrough, Transform);

	function PassThrough(options) {
	  if (!(this instanceof PassThrough))
	    return new PassThrough(options);

	  Transform.call(this, options);
	}

	PassThrough.prototype._transform = function(chunk, encoding, cb) {
	  cb(null, chunk);
	};


/***/ },

/***/ 1125:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1121)


/***/ },

/***/ 1126:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1120)


/***/ },

/***/ 1127:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1123)


/***/ },

/***/ 1128:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1124)


/***/ },

/***/ 1129:
/***/ function(module, exports) {

	/* (ignored) */

/***/ },

/***/ 1130:
/***/ function(module, exports, __webpack_require__) {

	module.exports = ProxyHandler;

	function ProxyHandler(cbs){
		this._cbs = cbs || {};
	}

	var EVENTS = __webpack_require__(1098).EVENTS;
	Object.keys(EVENTS).forEach(function(name){
		if(EVENTS[name] === 0){
			name = "on" + name;
			ProxyHandler.prototype[name] = function(){
				if(this._cbs[name]) this._cbs[name]();
			};
		} else if(EVENTS[name] === 1){
			name = "on" + name;
			ProxyHandler.prototype[name] = function(a){
				if(this._cbs[name]) this._cbs[name](a);
			};
		} else if(EVENTS[name] === 2){
			name = "on" + name;
			ProxyHandler.prototype[name] = function(a, b){
				if(this._cbs[name]) this._cbs[name](a, b);
			};
		} else {
			throw Error("wrong number of arguments");
		}
	});

/***/ },

/***/ 1131:
/***/ function(module, exports, __webpack_require__) {

	var DomUtils = module.exports;

	[
		__webpack_require__(1132),
		__webpack_require__(1143),
		__webpack_require__(1144),
		__webpack_require__(1145),
		__webpack_require__(1146),
		__webpack_require__(1147)
	].forEach(function(ext){
		Object.keys(ext).forEach(function(key){
			DomUtils[key] = ext[key].bind(DomUtils);
		});
	});


/***/ },

/***/ 1132:
/***/ function(module, exports, __webpack_require__) {

	var ElementType = __webpack_require__(1108),
	    getOuterHTML = __webpack_require__(1133),
	    isTag = ElementType.isTag;

	module.exports = {
		getInnerHTML: getInnerHTML,
		getOuterHTML: getOuterHTML,
		getText: getText
	};

	function getInnerHTML(elem, opts){
		return elem.children ? elem.children.map(function(elem){
			return getOuterHTML(elem, opts);
		}).join("") : "";
	}

	function getText(elem){
		if(Array.isArray(elem)) return elem.map(getText).join("");
		if(isTag(elem) || elem.type === ElementType.CDATA) return getText(elem.children);
		if(elem.type === ElementType.Text) return elem.data;
		return "";
	}


/***/ },

/***/ 1133:
/***/ function(module, exports, __webpack_require__) {

	/*
	  Module dependencies
	*/
	var ElementType = __webpack_require__(1134);
	var entities = __webpack_require__(1135);

	/*
	  Boolean Attributes
	*/
	var booleanAttributes = {
	  __proto__: null,
	  allowfullscreen: true,
	  async: true,
	  autofocus: true,
	  autoplay: true,
	  checked: true,
	  controls: true,
	  default: true,
	  defer: true,
	  disabled: true,
	  hidden: true,
	  ismap: true,
	  loop: true,
	  multiple: true,
	  muted: true,
	  open: true,
	  readonly: true,
	  required: true,
	  reversed: true,
	  scoped: true,
	  seamless: true,
	  selected: true,
	  typemustmatch: true
	};

	var unencodedElements = {
	  __proto__: null,
	  style: true,
	  script: true,
	  xmp: true,
	  iframe: true,
	  noembed: true,
	  noframes: true,
	  plaintext: true,
	  noscript: true
	};

	/*
	  Format attributes
	*/
	function formatAttrs(attributes, opts) {
	  if (!attributes) return;

	  var output = '',
	      value;

	  // Loop through the attributes
	  for (var key in attributes) {
	    value = attributes[key];
	    if (output) {
	      output += ' ';
	    }

	    if (!value && booleanAttributes[key]) {
	      output += key;
	    } else {
	      output += key + '="' + (opts.decodeEntities ? entities.encodeXML(value) : value) + '"';
	    }
	  }

	  return output;
	}

	/*
	  Self-enclosing tags (stolen from node-htmlparser)
	*/
	var singleTag = {
	  __proto__: null,
	  area: true,
	  base: true,
	  basefont: true,
	  br: true,
	  col: true,
	  command: true,
	  embed: true,
	  frame: true,
	  hr: true,
	  img: true,
	  input: true,
	  isindex: true,
	  keygen: true,
	  link: true,
	  meta: true,
	  param: true,
	  source: true,
	  track: true,
	  wbr: true,
	};


	var render = module.exports = function(dom, opts) {
	  if (!Array.isArray(dom) && !dom.cheerio) dom = [dom];
	  opts = opts || {};

	  var output = '';

	  for(var i = 0; i < dom.length; i++){
	    var elem = dom[i];

	    if (elem.type === 'root')
	      output += render(elem.children, opts);
	    else if (ElementType.isTag(elem))
	      output += renderTag(elem, opts);
	    else if (elem.type === ElementType.Directive)
	      output += renderDirective(elem);
	    else if (elem.type === ElementType.Comment)
	      output += renderComment(elem);
	    else if (elem.type === ElementType.CDATA)
	      output += renderCdata(elem);
	    else
	      output += renderText(elem, opts);
	  }

	  return output;
	};

	function renderTag(elem, opts) {
	  // Handle SVG
	  if (elem.name === "svg") opts = {decodeEntities: opts.decodeEntities, xmlMode: true};

	  var tag = '<' + elem.name,
	      attribs = formatAttrs(elem.attribs, opts);

	  if (attribs) {
	    tag += ' ' + attribs;
	  }

	  if (
	    opts.xmlMode
	    && (!elem.children || elem.children.length === 0)
	  ) {
	    tag += '/>';
	  } else {
	    tag += '>';
	    if (elem.children) {
	      tag += render(elem.children, opts);
	    }

	    if (!singleTag[elem.name] || opts.xmlMode) {
	      tag += '</' + elem.name + '>';
	    }
	  }

	  return tag;
	}

	function renderDirective(elem) {
	  return '<' + elem.data + '>';
	}

	function renderText(elem, opts) {
	  var data = elem.data || '';

	  // if entities weren't decoded, no need to encode them back
	  if (opts.decodeEntities && !(elem.parent && elem.parent.name in unencodedElements)) {
	    data = entities.encodeXML(data);
	  }

	  return data;
	}

	function renderCdata(elem) {
	  return '<![CDATA[' + elem.children[0].data + ']]>';
	}

	function renderComment(elem) {
	  return '<!--' + elem.data + '-->';
	}


/***/ },

/***/ 1134:
/***/ function(module, exports) {

	//Types of elements found in the DOM
	module.exports = {
		Text: "text", //Text
		Directive: "directive", //<? ... ?>
		Comment: "comment", //<!-- ... -->
		Script: "script", //<script> tags
		Style: "style", //<style> tags
		Tag: "tag", //Any tag
		CDATA: "cdata", //<![CDATA[ ... ]]>

		isTag: function(elem){
			return elem.type === "tag" || elem.type === "script" || elem.type === "style";
		}
	};

/***/ },

/***/ 1135:
/***/ function(module, exports, __webpack_require__) {

	var encode = __webpack_require__(1136),
	    decode = __webpack_require__(1139);

	exports.decode = function(data, level){
		return (!level || level <= 0 ? decode.XML : decode.HTML)(data);
	};

	exports.decodeStrict = function(data, level){
		return (!level || level <= 0 ? decode.XML : decode.HTMLStrict)(data);
	};

	exports.encode = function(data, level){
		return (!level || level <= 0 ? encode.XML : encode.HTML)(data);
	};

	exports.encodeXML = encode.XML;

	exports.encodeHTML4 =
	exports.encodeHTML5 =
	exports.encodeHTML  = encode.HTML;

	exports.decodeXML =
	exports.decodeXMLStrict = decode.XML;

	exports.decodeHTML4 =
	exports.decodeHTML5 =
	exports.decodeHTML = decode.HTML;

	exports.decodeHTML4Strict =
	exports.decodeHTML5Strict =
	exports.decodeHTMLStrict = decode.HTMLStrict;

	exports.escape = encode.escape;


/***/ },

/***/ 1136:
/***/ function(module, exports, __webpack_require__) {

	var inverseXML = getInverseObj(__webpack_require__(1137)),
	    xmlReplacer = getInverseReplacer(inverseXML);

	exports.XML = getInverse(inverseXML, xmlReplacer);

	var inverseHTML = getInverseObj(__webpack_require__(1138)),
	    htmlReplacer = getInverseReplacer(inverseHTML);

	exports.HTML = getInverse(inverseHTML, htmlReplacer);

	function getInverseObj(obj){
		return Object.keys(obj).sort().reduce(function(inverse, name){
			inverse[obj[name]] = "&" + name + ";";
			return inverse;
		}, {});
	}

	function getInverseReplacer(inverse){
		var single = [],
		    multiple = [];

		Object.keys(inverse).forEach(function(k){
			if(k.length === 1){
				single.push("\\" + k);
			} else {
				multiple.push(k);
			}
		});

		//TODO add ranges
		multiple.unshift("[" + single.join("") + "]");

		return new RegExp(multiple.join("|"), "g");
	}

	var re_nonASCII = /[^\0-\x7F]/g,
	    re_astralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;

	function singleCharReplacer(c){
		return "&#x" + c.charCodeAt(0).toString(16).toUpperCase() + ";";
	}

	function astralReplacer(c){
		// http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
		var high = c.charCodeAt(0);
		var low  = c.charCodeAt(1);
		var codePoint = (high - 0xD800) * 0x400 + low - 0xDC00 + 0x10000;
		return "&#x" + codePoint.toString(16).toUpperCase() + ";";
	}

	function getInverse(inverse, re){
		function func(name){
			return inverse[name];
		}

		return function(data){
			return data
					.replace(re, func)
					.replace(re_astralSymbols, astralReplacer)
					.replace(re_nonASCII, singleCharReplacer);
		};
	}

	var re_xmlChars = getInverseReplacer(inverseXML);

	function escapeXML(data){
		return data
				.replace(re_xmlChars, singleCharReplacer)
				.replace(re_astralSymbols, astralReplacer)
				.replace(re_nonASCII, singleCharReplacer);
	}

	exports.escape = escapeXML;


/***/ },

/***/ 1137:
/***/ function(module, exports) {

	module.exports = {
		"amp": "&",
		"apos": "'",
		"gt": ">",
		"lt": "<",
		"quot": "\""
	};

/***/ },

/***/ 1138:
/***/ function(module, exports) {

	module.exports = {
		"Aacute": "Á",
		"aacute": "á",
		"Abreve": "Ă",
		"abreve": "ă",
		"ac": "∾",
		"acd": "∿",
		"acE": "∾̳",
		"Acirc": "Â",
		"acirc": "â",
		"acute": "´",
		"Acy": "А",
		"acy": "а",
		"AElig": "Æ",
		"aelig": "æ",
		"af": "⁡",
		"Afr": "𝔄",
		"afr": "𝔞",
		"Agrave": "À",
		"agrave": "à",
		"alefsym": "ℵ",
		"aleph": "ℵ",
		"Alpha": "Α",
		"alpha": "α",
		"Amacr": "Ā",
		"amacr": "ā",
		"amalg": "⨿",
		"amp": "&",
		"AMP": "&",
		"andand": "⩕",
		"And": "⩓",
		"and": "∧",
		"andd": "⩜",
		"andslope": "⩘",
		"andv": "⩚",
		"ang": "∠",
		"ange": "⦤",
		"angle": "∠",
		"angmsdaa": "⦨",
		"angmsdab": "⦩",
		"angmsdac": "⦪",
		"angmsdad": "⦫",
		"angmsdae": "⦬",
		"angmsdaf": "⦭",
		"angmsdag": "⦮",
		"angmsdah": "⦯",
		"angmsd": "∡",
		"angrt": "∟",
		"angrtvb": "⊾",
		"angrtvbd": "⦝",
		"angsph": "∢",
		"angst": "Å",
		"angzarr": "⍼",
		"Aogon": "Ą",
		"aogon": "ą",
		"Aopf": "𝔸",
		"aopf": "𝕒",
		"apacir": "⩯",
		"ap": "≈",
		"apE": "⩰",
		"ape": "≊",
		"apid": "≋",
		"apos": "'",
		"ApplyFunction": "⁡",
		"approx": "≈",
		"approxeq": "≊",
		"Aring": "Å",
		"aring": "å",
		"Ascr": "𝒜",
		"ascr": "𝒶",
		"Assign": "≔",
		"ast": "*",
		"asymp": "≈",
		"asympeq": "≍",
		"Atilde": "Ã",
		"atilde": "ã",
		"Auml": "Ä",
		"auml": "ä",
		"awconint": "∳",
		"awint": "⨑",
		"backcong": "≌",
		"backepsilon": "϶",
		"backprime": "‵",
		"backsim": "∽",
		"backsimeq": "⋍",
		"Backslash": "∖",
		"Barv": "⫧",
		"barvee": "⊽",
		"barwed": "⌅",
		"Barwed": "⌆",
		"barwedge": "⌅",
		"bbrk": "⎵",
		"bbrktbrk": "⎶",
		"bcong": "≌",
		"Bcy": "Б",
		"bcy": "б",
		"bdquo": "„",
		"becaus": "∵",
		"because": "∵",
		"Because": "∵",
		"bemptyv": "⦰",
		"bepsi": "϶",
		"bernou": "ℬ",
		"Bernoullis": "ℬ",
		"Beta": "Β",
		"beta": "β",
		"beth": "ℶ",
		"between": "≬",
		"Bfr": "𝔅",
		"bfr": "𝔟",
		"bigcap": "⋂",
		"bigcirc": "◯",
		"bigcup": "⋃",
		"bigodot": "⨀",
		"bigoplus": "⨁",
		"bigotimes": "⨂",
		"bigsqcup": "⨆",
		"bigstar": "★",
		"bigtriangledown": "▽",
		"bigtriangleup": "△",
		"biguplus": "⨄",
		"bigvee": "⋁",
		"bigwedge": "⋀",
		"bkarow": "⤍",
		"blacklozenge": "⧫",
		"blacksquare": "▪",
		"blacktriangle": "▴",
		"blacktriangledown": "▾",
		"blacktriangleleft": "◂",
		"blacktriangleright": "▸",
		"blank": "␣",
		"blk12": "▒",
		"blk14": "░",
		"blk34": "▓",
		"block": "█",
		"bne": "=⃥",
		"bnequiv": "≡⃥",
		"bNot": "⫭",
		"bnot": "⌐",
		"Bopf": "𝔹",
		"bopf": "𝕓",
		"bot": "⊥",
		"bottom": "⊥",
		"bowtie": "⋈",
		"boxbox": "⧉",
		"boxdl": "┐",
		"boxdL": "╕",
		"boxDl": "╖",
		"boxDL": "╗",
		"boxdr": "┌",
		"boxdR": "╒",
		"boxDr": "╓",
		"boxDR": "╔",
		"boxh": "─",
		"boxH": "═",
		"boxhd": "┬",
		"boxHd": "╤",
		"boxhD": "╥",
		"boxHD": "╦",
		"boxhu": "┴",
		"boxHu": "╧",
		"boxhU": "╨",
		"boxHU": "╩",
		"boxminus": "⊟",
		"boxplus": "⊞",
		"boxtimes": "⊠",
		"boxul": "┘",
		"boxuL": "╛",
		"boxUl": "╜",
		"boxUL": "╝",
		"boxur": "└",
		"boxuR": "╘",
		"boxUr": "╙",
		"boxUR": "╚",
		"boxv": "│",
		"boxV": "║",
		"boxvh": "┼",
		"boxvH": "╪",
		"boxVh": "╫",
		"boxVH": "╬",
		"boxvl": "┤",
		"boxvL": "╡",
		"boxVl": "╢",
		"boxVL": "╣",
		"boxvr": "├",
		"boxvR": "╞",
		"boxVr": "╟",
		"boxVR": "╠",
		"bprime": "‵",
		"breve": "˘",
		"Breve": "˘",
		"brvbar": "¦",
		"bscr": "𝒷",
		"Bscr": "ℬ",
		"bsemi": "⁏",
		"bsim": "∽",
		"bsime": "⋍",
		"bsolb": "⧅",
		"bsol": "\\",
		"bsolhsub": "⟈",
		"bull": "•",
		"bullet": "•",
		"bump": "≎",
		"bumpE": "⪮",
		"bumpe": "≏",
		"Bumpeq": "≎",
		"bumpeq": "≏",
		"Cacute": "Ć",
		"cacute": "ć",
		"capand": "⩄",
		"capbrcup": "⩉",
		"capcap": "⩋",
		"cap": "∩",
		"Cap": "⋒",
		"capcup": "⩇",
		"capdot": "⩀",
		"CapitalDifferentialD": "ⅅ",
		"caps": "∩︀",
		"caret": "⁁",
		"caron": "ˇ",
		"Cayleys": "ℭ",
		"ccaps": "⩍",
		"Ccaron": "Č",
		"ccaron": "č",
		"Ccedil": "Ç",
		"ccedil": "ç",
		"Ccirc": "Ĉ",
		"ccirc": "ĉ",
		"Cconint": "∰",
		"ccups": "⩌",
		"ccupssm": "⩐",
		"Cdot": "Ċ",
		"cdot": "ċ",
		"cedil": "¸",
		"Cedilla": "¸",
		"cemptyv": "⦲",
		"cent": "¢",
		"centerdot": "·",
		"CenterDot": "·",
		"cfr": "𝔠",
		"Cfr": "ℭ",
		"CHcy": "Ч",
		"chcy": "ч",
		"check": "✓",
		"checkmark": "✓",
		"Chi": "Χ",
		"chi": "χ",
		"circ": "ˆ",
		"circeq": "≗",
		"circlearrowleft": "↺",
		"circlearrowright": "↻",
		"circledast": "⊛",
		"circledcirc": "⊚",
		"circleddash": "⊝",
		"CircleDot": "⊙",
		"circledR": "®",
		"circledS": "Ⓢ",
		"CircleMinus": "⊖",
		"CirclePlus": "⊕",
		"CircleTimes": "⊗",
		"cir": "○",
		"cirE": "⧃",
		"cire": "≗",
		"cirfnint": "⨐",
		"cirmid": "⫯",
		"cirscir": "⧂",
		"ClockwiseContourIntegral": "∲",
		"CloseCurlyDoubleQuote": "”",
		"CloseCurlyQuote": "’",
		"clubs": "♣",
		"clubsuit": "♣",
		"colon": ":",
		"Colon": "∷",
		"Colone": "⩴",
		"colone": "≔",
		"coloneq": "≔",
		"comma": ",",
		"commat": "@",
		"comp": "∁",
		"compfn": "∘",
		"complement": "∁",
		"complexes": "ℂ",
		"cong": "≅",
		"congdot": "⩭",
		"Congruent": "≡",
		"conint": "∮",
		"Conint": "∯",
		"ContourIntegral": "∮",
		"copf": "𝕔",
		"Copf": "ℂ",
		"coprod": "∐",
		"Coproduct": "∐",
		"copy": "©",
		"COPY": "©",
		"copysr": "℗",
		"CounterClockwiseContourIntegral": "∳",
		"crarr": "↵",
		"cross": "✗",
		"Cross": "⨯",
		"Cscr": "𝒞",
		"cscr": "𝒸",
		"csub": "⫏",
		"csube": "⫑",
		"csup": "⫐",
		"csupe": "⫒",
		"ctdot": "⋯",
		"cudarrl": "⤸",
		"cudarrr": "⤵",
		"cuepr": "⋞",
		"cuesc": "⋟",
		"cularr": "↶",
		"cularrp": "⤽",
		"cupbrcap": "⩈",
		"cupcap": "⩆",
		"CupCap": "≍",
		"cup": "∪",
		"Cup": "⋓",
		"cupcup": "⩊",
		"cupdot": "⊍",
		"cupor": "⩅",
		"cups": "∪︀",
		"curarr": "↷",
		"curarrm": "⤼",
		"curlyeqprec": "⋞",
		"curlyeqsucc": "⋟",
		"curlyvee": "⋎",
		"curlywedge": "⋏",
		"curren": "¤",
		"curvearrowleft": "↶",
		"curvearrowright": "↷",
		"cuvee": "⋎",
		"cuwed": "⋏",
		"cwconint": "∲",
		"cwint": "∱",
		"cylcty": "⌭",
		"dagger": "†",
		"Dagger": "‡",
		"daleth": "ℸ",
		"darr": "↓",
		"Darr": "↡",
		"dArr": "⇓",
		"dash": "‐",
		"Dashv": "⫤",
		"dashv": "⊣",
		"dbkarow": "⤏",
		"dblac": "˝",
		"Dcaron": "Ď",
		"dcaron": "ď",
		"Dcy": "Д",
		"dcy": "д",
		"ddagger": "‡",
		"ddarr": "⇊",
		"DD": "ⅅ",
		"dd": "ⅆ",
		"DDotrahd": "⤑",
		"ddotseq": "⩷",
		"deg": "°",
		"Del": "∇",
		"Delta": "Δ",
		"delta": "δ",
		"demptyv": "⦱",
		"dfisht": "⥿",
		"Dfr": "𝔇",
		"dfr": "𝔡",
		"dHar": "⥥",
		"dharl": "⇃",
		"dharr": "⇂",
		"DiacriticalAcute": "´",
		"DiacriticalDot": "˙",
		"DiacriticalDoubleAcute": "˝",
		"DiacriticalGrave": "`",
		"DiacriticalTilde": "˜",
		"diam": "⋄",
		"diamond": "⋄",
		"Diamond": "⋄",
		"diamondsuit": "♦",
		"diams": "♦",
		"die": "¨",
		"DifferentialD": "ⅆ",
		"digamma": "ϝ",
		"disin": "⋲",
		"div": "÷",
		"divide": "÷",
		"divideontimes": "⋇",
		"divonx": "⋇",
		"DJcy": "Ђ",
		"djcy": "ђ",
		"dlcorn": "⌞",
		"dlcrop": "⌍",
		"dollar": "$",
		"Dopf": "𝔻",
		"dopf": "𝕕",
		"Dot": "¨",
		"dot": "˙",
		"DotDot": "⃜",
		"doteq": "≐",
		"doteqdot": "≑",
		"DotEqual": "≐",
		"dotminus": "∸",
		"dotplus": "∔",
		"dotsquare": "⊡",
		"doublebarwedge": "⌆",
		"DoubleContourIntegral": "∯",
		"DoubleDot": "¨",
		"DoubleDownArrow": "⇓",
		"DoubleLeftArrow": "⇐",
		"DoubleLeftRightArrow": "⇔",
		"DoubleLeftTee": "⫤",
		"DoubleLongLeftArrow": "⟸",
		"DoubleLongLeftRightArrow": "⟺",
		"DoubleLongRightArrow": "⟹",
		"DoubleRightArrow": "⇒",
		"DoubleRightTee": "⊨",
		"DoubleUpArrow": "⇑",
		"DoubleUpDownArrow": "⇕",
		"DoubleVerticalBar": "∥",
		"DownArrowBar": "⤓",
		"downarrow": "↓",
		"DownArrow": "↓",
		"Downarrow": "⇓",
		"DownArrowUpArrow": "⇵",
		"DownBreve": "̑",
		"downdownarrows": "⇊",
		"downharpoonleft": "⇃",
		"downharpoonright": "⇂",
		"DownLeftRightVector": "⥐",
		"DownLeftTeeVector": "⥞",
		"DownLeftVectorBar": "⥖",
		"DownLeftVector": "↽",
		"DownRightTeeVector": "⥟",
		"DownRightVectorBar": "⥗",
		"DownRightVector": "⇁",
		"DownTeeArrow": "↧",
		"DownTee": "⊤",
		"drbkarow": "⤐",
		"drcorn": "⌟",
		"drcrop": "⌌",
		"Dscr": "𝒟",
		"dscr": "𝒹",
		"DScy": "Ѕ",
		"dscy": "ѕ",
		"dsol": "⧶",
		"Dstrok": "Đ",
		"dstrok": "đ",
		"dtdot": "⋱",
		"dtri": "▿",
		"dtrif": "▾",
		"duarr": "⇵",
		"duhar": "⥯",
		"dwangle": "⦦",
		"DZcy": "Џ",
		"dzcy": "џ",
		"dzigrarr": "⟿",
		"Eacute": "É",
		"eacute": "é",
		"easter": "⩮",
		"Ecaron": "Ě",
		"ecaron": "ě",
		"Ecirc": "Ê",
		"ecirc": "ê",
		"ecir": "≖",
		"ecolon": "≕",
		"Ecy": "Э",
		"ecy": "э",
		"eDDot": "⩷",
		"Edot": "Ė",
		"edot": "ė",
		"eDot": "≑",
		"ee": "ⅇ",
		"efDot": "≒",
		"Efr": "𝔈",
		"efr": "𝔢",
		"eg": "⪚",
		"Egrave": "È",
		"egrave": "è",
		"egs": "⪖",
		"egsdot": "⪘",
		"el": "⪙",
		"Element": "∈",
		"elinters": "⏧",
		"ell": "ℓ",
		"els": "⪕",
		"elsdot": "⪗",
		"Emacr": "Ē",
		"emacr": "ē",
		"empty": "∅",
		"emptyset": "∅",
		"EmptySmallSquare": "◻",
		"emptyv": "∅",
		"EmptyVerySmallSquare": "▫",
		"emsp13": " ",
		"emsp14": " ",
		"emsp": " ",
		"ENG": "Ŋ",
		"eng": "ŋ",
		"ensp": " ",
		"Eogon": "Ę",
		"eogon": "ę",
		"Eopf": "𝔼",
		"eopf": "𝕖",
		"epar": "⋕",
		"eparsl": "⧣",
		"eplus": "⩱",
		"epsi": "ε",
		"Epsilon": "Ε",
		"epsilon": "ε",
		"epsiv": "ϵ",
		"eqcirc": "≖",
		"eqcolon": "≕",
		"eqsim": "≂",
		"eqslantgtr": "⪖",
		"eqslantless": "⪕",
		"Equal": "⩵",
		"equals": "=",
		"EqualTilde": "≂",
		"equest": "≟",
		"Equilibrium": "⇌",
		"equiv": "≡",
		"equivDD": "⩸",
		"eqvparsl": "⧥",
		"erarr": "⥱",
		"erDot": "≓",
		"escr": "ℯ",
		"Escr": "ℰ",
		"esdot": "≐",
		"Esim": "⩳",
		"esim": "≂",
		"Eta": "Η",
		"eta": "η",
		"ETH": "Ð",
		"eth": "ð",
		"Euml": "Ë",
		"euml": "ë",
		"euro": "€",
		"excl": "!",
		"exist": "∃",
		"Exists": "∃",
		"expectation": "ℰ",
		"exponentiale": "ⅇ",
		"ExponentialE": "ⅇ",
		"fallingdotseq": "≒",
		"Fcy": "Ф",
		"fcy": "ф",
		"female": "♀",
		"ffilig": "ﬃ",
		"fflig": "ﬀ",
		"ffllig": "ﬄ",
		"Ffr": "𝔉",
		"ffr": "𝔣",
		"filig": "ﬁ",
		"FilledSmallSquare": "◼",
		"FilledVerySmallSquare": "▪",
		"fjlig": "fj",
		"flat": "♭",
		"fllig": "ﬂ",
		"fltns": "▱",
		"fnof": "ƒ",
		"Fopf": "𝔽",
		"fopf": "𝕗",
		"forall": "∀",
		"ForAll": "∀",
		"fork": "⋔",
		"forkv": "⫙",
		"Fouriertrf": "ℱ",
		"fpartint": "⨍",
		"frac12": "½",
		"frac13": "⅓",
		"frac14": "¼",
		"frac15": "⅕",
		"frac16": "⅙",
		"frac18": "⅛",
		"frac23": "⅔",
		"frac25": "⅖",
		"frac34": "¾",
		"frac35": "⅗",
		"frac38": "⅜",
		"frac45": "⅘",
		"frac56": "⅚",
		"frac58": "⅝",
		"frac78": "⅞",
		"frasl": "⁄",
		"frown": "⌢",
		"fscr": "𝒻",
		"Fscr": "ℱ",
		"gacute": "ǵ",
		"Gamma": "Γ",
		"gamma": "γ",
		"Gammad": "Ϝ",
		"gammad": "ϝ",
		"gap": "⪆",
		"Gbreve": "Ğ",
		"gbreve": "ğ",
		"Gcedil": "Ģ",
		"Gcirc": "Ĝ",
		"gcirc": "ĝ",
		"Gcy": "Г",
		"gcy": "г",
		"Gdot": "Ġ",
		"gdot": "ġ",
		"ge": "≥",
		"gE": "≧",
		"gEl": "⪌",
		"gel": "⋛",
		"geq": "≥",
		"geqq": "≧",
		"geqslant": "⩾",
		"gescc": "⪩",
		"ges": "⩾",
		"gesdot": "⪀",
		"gesdoto": "⪂",
		"gesdotol": "⪄",
		"gesl": "⋛︀",
		"gesles": "⪔",
		"Gfr": "𝔊",
		"gfr": "𝔤",
		"gg": "≫",
		"Gg": "⋙",
		"ggg": "⋙",
		"gimel": "ℷ",
		"GJcy": "Ѓ",
		"gjcy": "ѓ",
		"gla": "⪥",
		"gl": "≷",
		"glE": "⪒",
		"glj": "⪤",
		"gnap": "⪊",
		"gnapprox": "⪊",
		"gne": "⪈",
		"gnE": "≩",
		"gneq": "⪈",
		"gneqq": "≩",
		"gnsim": "⋧",
		"Gopf": "𝔾",
		"gopf": "𝕘",
		"grave": "`",
		"GreaterEqual": "≥",
		"GreaterEqualLess": "⋛",
		"GreaterFullEqual": "≧",
		"GreaterGreater": "⪢",
		"GreaterLess": "≷",
		"GreaterSlantEqual": "⩾",
		"GreaterTilde": "≳",
		"Gscr": "𝒢",
		"gscr": "ℊ",
		"gsim": "≳",
		"gsime": "⪎",
		"gsiml": "⪐",
		"gtcc": "⪧",
		"gtcir": "⩺",
		"gt": ">",
		"GT": ">",
		"Gt": "≫",
		"gtdot": "⋗",
		"gtlPar": "⦕",
		"gtquest": "⩼",
		"gtrapprox": "⪆",
		"gtrarr": "⥸",
		"gtrdot": "⋗",
		"gtreqless": "⋛",
		"gtreqqless": "⪌",
		"gtrless": "≷",
		"gtrsim": "≳",
		"gvertneqq": "≩︀",
		"gvnE": "≩︀",
		"Hacek": "ˇ",
		"hairsp": " ",
		"half": "½",
		"hamilt": "ℋ",
		"HARDcy": "Ъ",
		"hardcy": "ъ",
		"harrcir": "⥈",
		"harr": "↔",
		"hArr": "⇔",
		"harrw": "↭",
		"Hat": "^",
		"hbar": "ℏ",
		"Hcirc": "Ĥ",
		"hcirc": "ĥ",
		"hearts": "♥",
		"heartsuit": "♥",
		"hellip": "…",
		"hercon": "⊹",
		"hfr": "𝔥",
		"Hfr": "ℌ",
		"HilbertSpace": "ℋ",
		"hksearow": "⤥",
		"hkswarow": "⤦",
		"hoarr": "⇿",
		"homtht": "∻",
		"hookleftarrow": "↩",
		"hookrightarrow": "↪",
		"hopf": "𝕙",
		"Hopf": "ℍ",
		"horbar": "―",
		"HorizontalLine": "─",
		"hscr": "𝒽",
		"Hscr": "ℋ",
		"hslash": "ℏ",
		"Hstrok": "Ħ",
		"hstrok": "ħ",
		"HumpDownHump": "≎",
		"HumpEqual": "≏",
		"hybull": "⁃",
		"hyphen": "‐",
		"Iacute": "Í",
		"iacute": "í",
		"ic": "⁣",
		"Icirc": "Î",
		"icirc": "î",
		"Icy": "И",
		"icy": "и",
		"Idot": "İ",
		"IEcy": "Е",
		"iecy": "е",
		"iexcl": "¡",
		"iff": "⇔",
		"ifr": "𝔦",
		"Ifr": "ℑ",
		"Igrave": "Ì",
		"igrave": "ì",
		"ii": "ⅈ",
		"iiiint": "⨌",
		"iiint": "∭",
		"iinfin": "⧜",
		"iiota": "℩",
		"IJlig": "Ĳ",
		"ijlig": "ĳ",
		"Imacr": "Ī",
		"imacr": "ī",
		"image": "ℑ",
		"ImaginaryI": "ⅈ",
		"imagline": "ℐ",
		"imagpart": "ℑ",
		"imath": "ı",
		"Im": "ℑ",
		"imof": "⊷",
		"imped": "Ƶ",
		"Implies": "⇒",
		"incare": "℅",
		"in": "∈",
		"infin": "∞",
		"infintie": "⧝",
		"inodot": "ı",
		"intcal": "⊺",
		"int": "∫",
		"Int": "∬",
		"integers": "ℤ",
		"Integral": "∫",
		"intercal": "⊺",
		"Intersection": "⋂",
		"intlarhk": "⨗",
		"intprod": "⨼",
		"InvisibleComma": "⁣",
		"InvisibleTimes": "⁢",
		"IOcy": "Ё",
		"iocy": "ё",
		"Iogon": "Į",
		"iogon": "į",
		"Iopf": "𝕀",
		"iopf": "𝕚",
		"Iota": "Ι",
		"iota": "ι",
		"iprod": "⨼",
		"iquest": "¿",
		"iscr": "𝒾",
		"Iscr": "ℐ",
		"isin": "∈",
		"isindot": "⋵",
		"isinE": "⋹",
		"isins": "⋴",
		"isinsv": "⋳",
		"isinv": "∈",
		"it": "⁢",
		"Itilde": "Ĩ",
		"itilde": "ĩ",
		"Iukcy": "І",
		"iukcy": "і",
		"Iuml": "Ï",
		"iuml": "ï",
		"Jcirc": "Ĵ",
		"jcirc": "ĵ",
		"Jcy": "Й",
		"jcy": "й",
		"Jfr": "𝔍",
		"jfr": "𝔧",
		"jmath": "ȷ",
		"Jopf": "𝕁",
		"jopf": "𝕛",
		"Jscr": "𝒥",
		"jscr": "𝒿",
		"Jsercy": "Ј",
		"jsercy": "ј",
		"Jukcy": "Є",
		"jukcy": "є",
		"Kappa": "Κ",
		"kappa": "κ",
		"kappav": "ϰ",
		"Kcedil": "Ķ",
		"kcedil": "ķ",
		"Kcy": "К",
		"kcy": "к",
		"Kfr": "𝔎",
		"kfr": "𝔨",
		"kgreen": "ĸ",
		"KHcy": "Х",
		"khcy": "х",
		"KJcy": "Ќ",
		"kjcy": "ќ",
		"Kopf": "𝕂",
		"kopf": "𝕜",
		"Kscr": "𝒦",
		"kscr": "𝓀",
		"lAarr": "⇚",
		"Lacute": "Ĺ",
		"lacute": "ĺ",
		"laemptyv": "⦴",
		"lagran": "ℒ",
		"Lambda": "Λ",
		"lambda": "λ",
		"lang": "⟨",
		"Lang": "⟪",
		"langd": "⦑",
		"langle": "⟨",
		"lap": "⪅",
		"Laplacetrf": "ℒ",
		"laquo": "«",
		"larrb": "⇤",
		"larrbfs": "⤟",
		"larr": "←",
		"Larr": "↞",
		"lArr": "⇐",
		"larrfs": "⤝",
		"larrhk": "↩",
		"larrlp": "↫",
		"larrpl": "⤹",
		"larrsim": "⥳",
		"larrtl": "↢",
		"latail": "⤙",
		"lAtail": "⤛",
		"lat": "⪫",
		"late": "⪭",
		"lates": "⪭︀",
		"lbarr": "⤌",
		"lBarr": "⤎",
		"lbbrk": "❲",
		"lbrace": "{",
		"lbrack": "[",
		"lbrke": "⦋",
		"lbrksld": "⦏",
		"lbrkslu": "⦍",
		"Lcaron": "Ľ",
		"lcaron": "ľ",
		"Lcedil": "Ļ",
		"lcedil": "ļ",
		"lceil": "⌈",
		"lcub": "{",
		"Lcy": "Л",
		"lcy": "л",
		"ldca": "⤶",
		"ldquo": "“",
		"ldquor": "„",
		"ldrdhar": "⥧",
		"ldrushar": "⥋",
		"ldsh": "↲",
		"le": "≤",
		"lE": "≦",
		"LeftAngleBracket": "⟨",
		"LeftArrowBar": "⇤",
		"leftarrow": "←",
		"LeftArrow": "←",
		"Leftarrow": "⇐",
		"LeftArrowRightArrow": "⇆",
		"leftarrowtail": "↢",
		"LeftCeiling": "⌈",
		"LeftDoubleBracket": "⟦",
		"LeftDownTeeVector": "⥡",
		"LeftDownVectorBar": "⥙",
		"LeftDownVector": "⇃",
		"LeftFloor": "⌊",
		"leftharpoondown": "↽",
		"leftharpoonup": "↼",
		"leftleftarrows": "⇇",
		"leftrightarrow": "↔",
		"LeftRightArrow": "↔",
		"Leftrightarrow": "⇔",
		"leftrightarrows": "⇆",
		"leftrightharpoons": "⇋",
		"leftrightsquigarrow": "↭",
		"LeftRightVector": "⥎",
		"LeftTeeArrow": "↤",
		"LeftTee": "⊣",
		"LeftTeeVector": "⥚",
		"leftthreetimes": "⋋",
		"LeftTriangleBar": "⧏",
		"LeftTriangle": "⊲",
		"LeftTriangleEqual": "⊴",
		"LeftUpDownVector": "⥑",
		"LeftUpTeeVector": "⥠",
		"LeftUpVectorBar": "⥘",
		"LeftUpVector": "↿",
		"LeftVectorBar": "⥒",
		"LeftVector": "↼",
		"lEg": "⪋",
		"leg": "⋚",
		"leq": "≤",
		"leqq": "≦",
		"leqslant": "⩽",
		"lescc": "⪨",
		"les": "⩽",
		"lesdot": "⩿",
		"lesdoto": "⪁",
		"lesdotor": "⪃",
		"lesg": "⋚︀",
		"lesges": "⪓",
		"lessapprox": "⪅",
		"lessdot": "⋖",
		"lesseqgtr": "⋚",
		"lesseqqgtr": "⪋",
		"LessEqualGreater": "⋚",
		"LessFullEqual": "≦",
		"LessGreater": "≶",
		"lessgtr": "≶",
		"LessLess": "⪡",
		"lesssim": "≲",
		"LessSlantEqual": "⩽",
		"LessTilde": "≲",
		"lfisht": "⥼",
		"lfloor": "⌊",
		"Lfr": "𝔏",
		"lfr": "𝔩",
		"lg": "≶",
		"lgE": "⪑",
		"lHar": "⥢",
		"lhard": "↽",
		"lharu": "↼",
		"lharul": "⥪",
		"lhblk": "▄",
		"LJcy": "Љ",
		"ljcy": "љ",
		"llarr": "⇇",
		"ll": "≪",
		"Ll": "⋘",
		"llcorner": "⌞",
		"Lleftarrow": "⇚",
		"llhard": "⥫",
		"lltri": "◺",
		"Lmidot": "Ŀ",
		"lmidot": "ŀ",
		"lmoustache": "⎰",
		"lmoust": "⎰",
		"lnap": "⪉",
		"lnapprox": "⪉",
		"lne": "⪇",
		"lnE": "≨",
		"lneq": "⪇",
		"lneqq": "≨",
		"lnsim": "⋦",
		"loang": "⟬",
		"loarr": "⇽",
		"lobrk": "⟦",
		"longleftarrow": "⟵",
		"LongLeftArrow": "⟵",
		"Longleftarrow": "⟸",
		"longleftrightarrow": "⟷",
		"LongLeftRightArrow": "⟷",
		"Longleftrightarrow": "⟺",
		"longmapsto": "⟼",
		"longrightarrow": "⟶",
		"LongRightArrow": "⟶",
		"Longrightarrow": "⟹",
		"looparrowleft": "↫",
		"looparrowright": "↬",
		"lopar": "⦅",
		"Lopf": "𝕃",
		"lopf": "𝕝",
		"loplus": "⨭",
		"lotimes": "⨴",
		"lowast": "∗",
		"lowbar": "_",
		"LowerLeftArrow": "↙",
		"LowerRightArrow": "↘",
		"loz": "◊",
		"lozenge": "◊",
		"lozf": "⧫",
		"lpar": "(",
		"lparlt": "⦓",
		"lrarr": "⇆",
		"lrcorner": "⌟",
		"lrhar": "⇋",
		"lrhard": "⥭",
		"lrm": "‎",
		"lrtri": "⊿",
		"lsaquo": "‹",
		"lscr": "𝓁",
		"Lscr": "ℒ",
		"lsh": "↰",
		"Lsh": "↰",
		"lsim": "≲",
		"lsime": "⪍",
		"lsimg": "⪏",
		"lsqb": "[",
		"lsquo": "‘",
		"lsquor": "‚",
		"Lstrok": "Ł",
		"lstrok": "ł",
		"ltcc": "⪦",
		"ltcir": "⩹",
		"lt": "<",
		"LT": "<",
		"Lt": "≪",
		"ltdot": "⋖",
		"lthree": "⋋",
		"ltimes": "⋉",
		"ltlarr": "⥶",
		"ltquest": "⩻",
		"ltri": "◃",
		"ltrie": "⊴",
		"ltrif": "◂",
		"ltrPar": "⦖",
		"lurdshar": "⥊",
		"luruhar": "⥦",
		"lvertneqq": "≨︀",
		"lvnE": "≨︀",
		"macr": "¯",
		"male": "♂",
		"malt": "✠",
		"maltese": "✠",
		"Map": "⤅",
		"map": "↦",
		"mapsto": "↦",
		"mapstodown": "↧",
		"mapstoleft": "↤",
		"mapstoup": "↥",
		"marker": "▮",
		"mcomma": "⨩",
		"Mcy": "М",
		"mcy": "м",
		"mdash": "—",
		"mDDot": "∺",
		"measuredangle": "∡",
		"MediumSpace": " ",
		"Mellintrf": "ℳ",
		"Mfr": "𝔐",
		"mfr": "𝔪",
		"mho": "℧",
		"micro": "µ",
		"midast": "*",
		"midcir": "⫰",
		"mid": "∣",
		"middot": "·",
		"minusb": "⊟",
		"minus": "−",
		"minusd": "∸",
		"minusdu": "⨪",
		"MinusPlus": "∓",
		"mlcp": "⫛",
		"mldr": "…",
		"mnplus": "∓",
		"models": "⊧",
		"Mopf": "𝕄",
		"mopf": "𝕞",
		"mp": "∓",
		"mscr": "𝓂",
		"Mscr": "ℳ",
		"mstpos": "∾",
		"Mu": "Μ",
		"mu": "μ",
		"multimap": "⊸",
		"mumap": "⊸",
		"nabla": "∇",
		"Nacute": "Ń",
		"nacute": "ń",
		"nang": "∠⃒",
		"nap": "≉",
		"napE": "⩰̸",
		"napid": "≋̸",
		"napos": "ŉ",
		"napprox": "≉",
		"natural": "♮",
		"naturals": "ℕ",
		"natur": "♮",
		"nbsp": " ",
		"nbump": "≎̸",
		"nbumpe": "≏̸",
		"ncap": "⩃",
		"Ncaron": "Ň",
		"ncaron": "ň",
		"Ncedil": "Ņ",
		"ncedil": "ņ",
		"ncong": "≇",
		"ncongdot": "⩭̸",
		"ncup": "⩂",
		"Ncy": "Н",
		"ncy": "н",
		"ndash": "–",
		"nearhk": "⤤",
		"nearr": "↗",
		"neArr": "⇗",
		"nearrow": "↗",
		"ne": "≠",
		"nedot": "≐̸",
		"NegativeMediumSpace": "​",
		"NegativeThickSpace": "​",
		"NegativeThinSpace": "​",
		"NegativeVeryThinSpace": "​",
		"nequiv": "≢",
		"nesear": "⤨",
		"nesim": "≂̸",
		"NestedGreaterGreater": "≫",
		"NestedLessLess": "≪",
		"NewLine": "\n",
		"nexist": "∄",
		"nexists": "∄",
		"Nfr": "𝔑",
		"nfr": "𝔫",
		"ngE": "≧̸",
		"nge": "≱",
		"ngeq": "≱",
		"ngeqq": "≧̸",
		"ngeqslant": "⩾̸",
		"nges": "⩾̸",
		"nGg": "⋙̸",
		"ngsim": "≵",
		"nGt": "≫⃒",
		"ngt": "≯",
		"ngtr": "≯",
		"nGtv": "≫̸",
		"nharr": "↮",
		"nhArr": "⇎",
		"nhpar": "⫲",
		"ni": "∋",
		"nis": "⋼",
		"nisd": "⋺",
		"niv": "∋",
		"NJcy": "Њ",
		"njcy": "њ",
		"nlarr": "↚",
		"nlArr": "⇍",
		"nldr": "‥",
		"nlE": "≦̸",
		"nle": "≰",
		"nleftarrow": "↚",
		"nLeftarrow": "⇍",
		"nleftrightarrow": "↮",
		"nLeftrightarrow": "⇎",
		"nleq": "≰",
		"nleqq": "≦̸",
		"nleqslant": "⩽̸",
		"nles": "⩽̸",
		"nless": "≮",
		"nLl": "⋘̸",
		"nlsim": "≴",
		"nLt": "≪⃒",
		"nlt": "≮",
		"nltri": "⋪",
		"nltrie": "⋬",
		"nLtv": "≪̸",
		"nmid": "∤",
		"NoBreak": "⁠",
		"NonBreakingSpace": " ",
		"nopf": "𝕟",
		"Nopf": "ℕ",
		"Not": "⫬",
		"not": "¬",
		"NotCongruent": "≢",
		"NotCupCap": "≭",
		"NotDoubleVerticalBar": "∦",
		"NotElement": "∉",
		"NotEqual": "≠",
		"NotEqualTilde": "≂̸",
		"NotExists": "∄",
		"NotGreater": "≯",
		"NotGreaterEqual": "≱",
		"NotGreaterFullEqual": "≧̸",
		"NotGreaterGreater": "≫̸",
		"NotGreaterLess": "≹",
		"NotGreaterSlantEqual": "⩾̸",
		"NotGreaterTilde": "≵",
		"NotHumpDownHump": "≎̸",
		"NotHumpEqual": "≏̸",
		"notin": "∉",
		"notindot": "⋵̸",
		"notinE": "⋹̸",
		"notinva": "∉",
		"notinvb": "⋷",
		"notinvc": "⋶",
		"NotLeftTriangleBar": "⧏̸",
		"NotLeftTriangle": "⋪",
		"NotLeftTriangleEqual": "⋬",
		"NotLess": "≮",
		"NotLessEqual": "≰",
		"NotLessGreater": "≸",
		"NotLessLess": "≪̸",
		"NotLessSlantEqual": "⩽̸",
		"NotLessTilde": "≴",
		"NotNestedGreaterGreater": "⪢̸",
		"NotNestedLessLess": "⪡̸",
		"notni": "∌",
		"notniva": "∌",
		"notnivb": "⋾",
		"notnivc": "⋽",
		"NotPrecedes": "⊀",
		"NotPrecedesEqual": "⪯̸",
		"NotPrecedesSlantEqual": "⋠",
		"NotReverseElement": "∌",
		"NotRightTriangleBar": "⧐̸",
		"NotRightTriangle": "⋫",
		"NotRightTriangleEqual": "⋭",
		"NotSquareSubset": "⊏̸",
		"NotSquareSubsetEqual": "⋢",
		"NotSquareSuperset": "⊐̸",
		"NotSquareSupersetEqual": "⋣",
		"NotSubset": "⊂⃒",
		"NotSubsetEqual": "⊈",
		"NotSucceeds": "⊁",
		"NotSucceedsEqual": "⪰̸",
		"NotSucceedsSlantEqual": "⋡",
		"NotSucceedsTilde": "≿̸",
		"NotSuperset": "⊃⃒",
		"NotSupersetEqual": "⊉",
		"NotTilde": "≁",
		"NotTildeEqual": "≄",
		"NotTildeFullEqual": "≇",
		"NotTildeTilde": "≉",
		"NotVerticalBar": "∤",
		"nparallel": "∦",
		"npar": "∦",
		"nparsl": "⫽⃥",
		"npart": "∂̸",
		"npolint": "⨔",
		"npr": "⊀",
		"nprcue": "⋠",
		"nprec": "⊀",
		"npreceq": "⪯̸",
		"npre": "⪯̸",
		"nrarrc": "⤳̸",
		"nrarr": "↛",
		"nrArr": "⇏",
		"nrarrw": "↝̸",
		"nrightarrow": "↛",
		"nRightarrow": "⇏",
		"nrtri": "⋫",
		"nrtrie": "⋭",
		"nsc": "⊁",
		"nsccue": "⋡",
		"nsce": "⪰̸",
		"Nscr": "𝒩",
		"nscr": "𝓃",
		"nshortmid": "∤",
		"nshortparallel": "∦",
		"nsim": "≁",
		"nsime": "≄",
		"nsimeq": "≄",
		"nsmid": "∤",
		"nspar": "∦",
		"nsqsube": "⋢",
		"nsqsupe": "⋣",
		"nsub": "⊄",
		"nsubE": "⫅̸",
		"nsube": "⊈",
		"nsubset": "⊂⃒",
		"nsubseteq": "⊈",
		"nsubseteqq": "⫅̸",
		"nsucc": "⊁",
		"nsucceq": "⪰̸",
		"nsup": "⊅",
		"nsupE": "⫆̸",
		"nsupe": "⊉",
		"nsupset": "⊃⃒",
		"nsupseteq": "⊉",
		"nsupseteqq": "⫆̸",
		"ntgl": "≹",
		"Ntilde": "Ñ",
		"ntilde": "ñ",
		"ntlg": "≸",
		"ntriangleleft": "⋪",
		"ntrianglelefteq": "⋬",
		"ntriangleright": "⋫",
		"ntrianglerighteq": "⋭",
		"Nu": "Ν",
		"nu": "ν",
		"num": "#",
		"numero": "№",
		"numsp": " ",
		"nvap": "≍⃒",
		"nvdash": "⊬",
		"nvDash": "⊭",
		"nVdash": "⊮",
		"nVDash": "⊯",
		"nvge": "≥⃒",
		"nvgt": ">⃒",
		"nvHarr": "⤄",
		"nvinfin": "⧞",
		"nvlArr": "⤂",
		"nvle": "≤⃒",
		"nvlt": "<⃒",
		"nvltrie": "⊴⃒",
		"nvrArr": "⤃",
		"nvrtrie": "⊵⃒",
		"nvsim": "∼⃒",
		"nwarhk": "⤣",
		"nwarr": "↖",
		"nwArr": "⇖",
		"nwarrow": "↖",
		"nwnear": "⤧",
		"Oacute": "Ó",
		"oacute": "ó",
		"oast": "⊛",
		"Ocirc": "Ô",
		"ocirc": "ô",
		"ocir": "⊚",
		"Ocy": "О",
		"ocy": "о",
		"odash": "⊝",
		"Odblac": "Ő",
		"odblac": "ő",
		"odiv": "⨸",
		"odot": "⊙",
		"odsold": "⦼",
		"OElig": "Œ",
		"oelig": "œ",
		"ofcir": "⦿",
		"Ofr": "𝔒",
		"ofr": "𝔬",
		"ogon": "˛",
		"Ograve": "Ò",
		"ograve": "ò",
		"ogt": "⧁",
		"ohbar": "⦵",
		"ohm": "Ω",
		"oint": "∮",
		"olarr": "↺",
		"olcir": "⦾",
		"olcross": "⦻",
		"oline": "‾",
		"olt": "⧀",
		"Omacr": "Ō",
		"omacr": "ō",
		"Omega": "Ω",
		"omega": "ω",
		"Omicron": "Ο",
		"omicron": "ο",
		"omid": "⦶",
		"ominus": "⊖",
		"Oopf": "𝕆",
		"oopf": "𝕠",
		"opar": "⦷",
		"OpenCurlyDoubleQuote": "“",
		"OpenCurlyQuote": "‘",
		"operp": "⦹",
		"oplus": "⊕",
		"orarr": "↻",
		"Or": "⩔",
		"or": "∨",
		"ord": "⩝",
		"order": "ℴ",
		"orderof": "ℴ",
		"ordf": "ª",
		"ordm": "º",
		"origof": "⊶",
		"oror": "⩖",
		"orslope": "⩗",
		"orv": "⩛",
		"oS": "Ⓢ",
		"Oscr": "𝒪",
		"oscr": "ℴ",
		"Oslash": "Ø",
		"oslash": "ø",
		"osol": "⊘",
		"Otilde": "Õ",
		"otilde": "õ",
		"otimesas": "⨶",
		"Otimes": "⨷",
		"otimes": "⊗",
		"Ouml": "Ö",
		"ouml": "ö",
		"ovbar": "⌽",
		"OverBar": "‾",
		"OverBrace": "⏞",
		"OverBracket": "⎴",
		"OverParenthesis": "⏜",
		"para": "¶",
		"parallel": "∥",
		"par": "∥",
		"parsim": "⫳",
		"parsl": "⫽",
		"part": "∂",
		"PartialD": "∂",
		"Pcy": "П",
		"pcy": "п",
		"percnt": "%",
		"period": ".",
		"permil": "‰",
		"perp": "⊥",
		"pertenk": "‱",
		"Pfr": "𝔓",
		"pfr": "𝔭",
		"Phi": "Φ",
		"phi": "φ",
		"phiv": "ϕ",
		"phmmat": "ℳ",
		"phone": "☎",
		"Pi": "Π",
		"pi": "π",
		"pitchfork": "⋔",
		"piv": "ϖ",
		"planck": "ℏ",
		"planckh": "ℎ",
		"plankv": "ℏ",
		"plusacir": "⨣",
		"plusb": "⊞",
		"pluscir": "⨢",
		"plus": "+",
		"plusdo": "∔",
		"plusdu": "⨥",
		"pluse": "⩲",
		"PlusMinus": "±",
		"plusmn": "±",
		"plussim": "⨦",
		"plustwo": "⨧",
		"pm": "±",
		"Poincareplane": "ℌ",
		"pointint": "⨕",
		"popf": "𝕡",
		"Popf": "ℙ",
		"pound": "£",
		"prap": "⪷",
		"Pr": "⪻",
		"pr": "≺",
		"prcue": "≼",
		"precapprox": "⪷",
		"prec": "≺",
		"preccurlyeq": "≼",
		"Precedes": "≺",
		"PrecedesEqual": "⪯",
		"PrecedesSlantEqual": "≼",
		"PrecedesTilde": "≾",
		"preceq": "⪯",
		"precnapprox": "⪹",
		"precneqq": "⪵",
		"precnsim": "⋨",
		"pre": "⪯",
		"prE": "⪳",
		"precsim": "≾",
		"prime": "′",
		"Prime": "″",
		"primes": "ℙ",
		"prnap": "⪹",
		"prnE": "⪵",
		"prnsim": "⋨",
		"prod": "∏",
		"Product": "∏",
		"profalar": "⌮",
		"profline": "⌒",
		"profsurf": "⌓",
		"prop": "∝",
		"Proportional": "∝",
		"Proportion": "∷",
		"propto": "∝",
		"prsim": "≾",
		"prurel": "⊰",
		"Pscr": "𝒫",
		"pscr": "𝓅",
		"Psi": "Ψ",
		"psi": "ψ",
		"puncsp": " ",
		"Qfr": "𝔔",
		"qfr": "𝔮",
		"qint": "⨌",
		"qopf": "𝕢",
		"Qopf": "ℚ",
		"qprime": "⁗",
		"Qscr": "𝒬",
		"qscr": "𝓆",
		"quaternions": "ℍ",
		"quatint": "⨖",
		"quest": "?",
		"questeq": "≟",
		"quot": "\"",
		"QUOT": "\"",
		"rAarr": "⇛",
		"race": "∽̱",
		"Racute": "Ŕ",
		"racute": "ŕ",
		"radic": "√",
		"raemptyv": "⦳",
		"rang": "⟩",
		"Rang": "⟫",
		"rangd": "⦒",
		"range": "⦥",
		"rangle": "⟩",
		"raquo": "»",
		"rarrap": "⥵",
		"rarrb": "⇥",
		"rarrbfs": "⤠",
		"rarrc": "⤳",
		"rarr": "→",
		"Rarr": "↠",
		"rArr": "⇒",
		"rarrfs": "⤞",
		"rarrhk": "↪",
		"rarrlp": "↬",
		"rarrpl": "⥅",
		"rarrsim": "⥴",
		"Rarrtl": "⤖",
		"rarrtl": "↣",
		"rarrw": "↝",
		"ratail": "⤚",
		"rAtail": "⤜",
		"ratio": "∶",
		"rationals": "ℚ",
		"rbarr": "⤍",
		"rBarr": "⤏",
		"RBarr": "⤐",
		"rbbrk": "❳",
		"rbrace": "}",
		"rbrack": "]",
		"rbrke": "⦌",
		"rbrksld": "⦎",
		"rbrkslu": "⦐",
		"Rcaron": "Ř",
		"rcaron": "ř",
		"Rcedil": "Ŗ",
		"rcedil": "ŗ",
		"rceil": "⌉",
		"rcub": "}",
		"Rcy": "Р",
		"rcy": "р",
		"rdca": "⤷",
		"rdldhar": "⥩",
		"rdquo": "”",
		"rdquor": "”",
		"rdsh": "↳",
		"real": "ℜ",
		"realine": "ℛ",
		"realpart": "ℜ",
		"reals": "ℝ",
		"Re": "ℜ",
		"rect": "▭",
		"reg": "®",
		"REG": "®",
		"ReverseElement": "∋",
		"ReverseEquilibrium": "⇋",
		"ReverseUpEquilibrium": "⥯",
		"rfisht": "⥽",
		"rfloor": "⌋",
		"rfr": "𝔯",
		"Rfr": "ℜ",
		"rHar": "⥤",
		"rhard": "⇁",
		"rharu": "⇀",
		"rharul": "⥬",
		"Rho": "Ρ",
		"rho": "ρ",
		"rhov": "ϱ",
		"RightAngleBracket": "⟩",
		"RightArrowBar": "⇥",
		"rightarrow": "→",
		"RightArrow": "→",
		"Rightarrow": "⇒",
		"RightArrowLeftArrow": "⇄",
		"rightarrowtail": "↣",
		"RightCeiling": "⌉",
		"RightDoubleBracket": "⟧",
		"RightDownTeeVector": "⥝",
		"RightDownVectorBar": "⥕",
		"RightDownVector": "⇂",
		"RightFloor": "⌋",
		"rightharpoondown": "⇁",
		"rightharpoonup": "⇀",
		"rightleftarrows": "⇄",
		"rightleftharpoons": "⇌",
		"rightrightarrows": "⇉",
		"rightsquigarrow": "↝",
		"RightTeeArrow": "↦",
		"RightTee": "⊢",
		"RightTeeVector": "⥛",
		"rightthreetimes": "⋌",
		"RightTriangleBar": "⧐",
		"RightTriangle": "⊳",
		"RightTriangleEqual": "⊵",
		"RightUpDownVector": "⥏",
		"RightUpTeeVector": "⥜",
		"RightUpVectorBar": "⥔",
		"RightUpVector": "↾",
		"RightVectorBar": "⥓",
		"RightVector": "⇀",
		"ring": "˚",
		"risingdotseq": "≓",
		"rlarr": "⇄",
		"rlhar": "⇌",
		"rlm": "‏",
		"rmoustache": "⎱",
		"rmoust": "⎱",
		"rnmid": "⫮",
		"roang": "⟭",
		"roarr": "⇾",
		"robrk": "⟧",
		"ropar": "⦆",
		"ropf": "𝕣",
		"Ropf": "ℝ",
		"roplus": "⨮",
		"rotimes": "⨵",
		"RoundImplies": "⥰",
		"rpar": ")",
		"rpargt": "⦔",
		"rppolint": "⨒",
		"rrarr": "⇉",
		"Rrightarrow": "⇛",
		"rsaquo": "›",
		"rscr": "𝓇",
		"Rscr": "ℛ",
		"rsh": "↱",
		"Rsh": "↱",
		"rsqb": "]",
		"rsquo": "’",
		"rsquor": "’",
		"rthree": "⋌",
		"rtimes": "⋊",
		"rtri": "▹",
		"rtrie": "⊵",
		"rtrif": "▸",
		"rtriltri": "⧎",
		"RuleDelayed": "⧴",
		"ruluhar": "⥨",
		"rx": "℞",
		"Sacute": "Ś",
		"sacute": "ś",
		"sbquo": "‚",
		"scap": "⪸",
		"Scaron": "Š",
		"scaron": "š",
		"Sc": "⪼",
		"sc": "≻",
		"sccue": "≽",
		"sce": "⪰",
		"scE": "⪴",
		"Scedil": "Ş",
		"scedil": "ş",
		"Scirc": "Ŝ",
		"scirc": "ŝ",
		"scnap": "⪺",
		"scnE": "⪶",
		"scnsim": "⋩",
		"scpolint": "⨓",
		"scsim": "≿",
		"Scy": "С",
		"scy": "с",
		"sdotb": "⊡",
		"sdot": "⋅",
		"sdote": "⩦",
		"searhk": "⤥",
		"searr": "↘",
		"seArr": "⇘",
		"searrow": "↘",
		"sect": "§",
		"semi": ";",
		"seswar": "⤩",
		"setminus": "∖",
		"setmn": "∖",
		"sext": "✶",
		"Sfr": "𝔖",
		"sfr": "𝔰",
		"sfrown": "⌢",
		"sharp": "♯",
		"SHCHcy": "Щ",
		"shchcy": "щ",
		"SHcy": "Ш",
		"shcy": "ш",
		"ShortDownArrow": "↓",
		"ShortLeftArrow": "←",
		"shortmid": "∣",
		"shortparallel": "∥",
		"ShortRightArrow": "→",
		"ShortUpArrow": "↑",
		"shy": "­",
		"Sigma": "Σ",
		"sigma": "σ",
		"sigmaf": "ς",
		"sigmav": "ς",
		"sim": "∼",
		"simdot": "⩪",
		"sime": "≃",
		"simeq": "≃",
		"simg": "⪞",
		"simgE": "⪠",
		"siml": "⪝",
		"simlE": "⪟",
		"simne": "≆",
		"simplus": "⨤",
		"simrarr": "⥲",
		"slarr": "←",
		"SmallCircle": "∘",
		"smallsetminus": "∖",
		"smashp": "⨳",
		"smeparsl": "⧤",
		"smid": "∣",
		"smile": "⌣",
		"smt": "⪪",
		"smte": "⪬",
		"smtes": "⪬︀",
		"SOFTcy": "Ь",
		"softcy": "ь",
		"solbar": "⌿",
		"solb": "⧄",
		"sol": "/",
		"Sopf": "𝕊",
		"sopf": "𝕤",
		"spades": "♠",
		"spadesuit": "♠",
		"spar": "∥",
		"sqcap": "⊓",
		"sqcaps": "⊓︀",
		"sqcup": "⊔",
		"sqcups": "⊔︀",
		"Sqrt": "√",
		"sqsub": "⊏",
		"sqsube": "⊑",
		"sqsubset": "⊏",
		"sqsubseteq": "⊑",
		"sqsup": "⊐",
		"sqsupe": "⊒",
		"sqsupset": "⊐",
		"sqsupseteq": "⊒",
		"square": "□",
		"Square": "□",
		"SquareIntersection": "⊓",
		"SquareSubset": "⊏",
		"SquareSubsetEqual": "⊑",
		"SquareSuperset": "⊐",
		"SquareSupersetEqual": "⊒",
		"SquareUnion": "⊔",
		"squarf": "▪",
		"squ": "□",
		"squf": "▪",
		"srarr": "→",
		"Sscr": "𝒮",
		"sscr": "𝓈",
		"ssetmn": "∖",
		"ssmile": "⌣",
		"sstarf": "⋆",
		"Star": "⋆",
		"star": "☆",
		"starf": "★",
		"straightepsilon": "ϵ",
		"straightphi": "ϕ",
		"strns": "¯",
		"sub": "⊂",
		"Sub": "⋐",
		"subdot": "⪽",
		"subE": "⫅",
		"sube": "⊆",
		"subedot": "⫃",
		"submult": "⫁",
		"subnE": "⫋",
		"subne": "⊊",
		"subplus": "⪿",
		"subrarr": "⥹",
		"subset": "⊂",
		"Subset": "⋐",
		"subseteq": "⊆",
		"subseteqq": "⫅",
		"SubsetEqual": "⊆",
		"subsetneq": "⊊",
		"subsetneqq": "⫋",
		"subsim": "⫇",
		"subsub": "⫕",
		"subsup": "⫓",
		"succapprox": "⪸",
		"succ": "≻",
		"succcurlyeq": "≽",
		"Succeeds": "≻",
		"SucceedsEqual": "⪰",
		"SucceedsSlantEqual": "≽",
		"SucceedsTilde": "≿",
		"succeq": "⪰",
		"succnapprox": "⪺",
		"succneqq": "⪶",
		"succnsim": "⋩",
		"succsim": "≿",
		"SuchThat": "∋",
		"sum": "∑",
		"Sum": "∑",
		"sung": "♪",
		"sup1": "¹",
		"sup2": "²",
		"sup3": "³",
		"sup": "⊃",
		"Sup": "⋑",
		"supdot": "⪾",
		"supdsub": "⫘",
		"supE": "⫆",
		"supe": "⊇",
		"supedot": "⫄",
		"Superset": "⊃",
		"SupersetEqual": "⊇",
		"suphsol": "⟉",
		"suphsub": "⫗",
		"suplarr": "⥻",
		"supmult": "⫂",
		"supnE": "⫌",
		"supne": "⊋",
		"supplus": "⫀",
		"supset": "⊃",
		"Supset": "⋑",
		"supseteq": "⊇",
		"supseteqq": "⫆",
		"supsetneq": "⊋",
		"supsetneqq": "⫌",
		"supsim": "⫈",
		"supsub": "⫔",
		"supsup": "⫖",
		"swarhk": "⤦",
		"swarr": "↙",
		"swArr": "⇙",
		"swarrow": "↙",
		"swnwar": "⤪",
		"szlig": "ß",
		"Tab": "\t",
		"target": "⌖",
		"Tau": "Τ",
		"tau": "τ",
		"tbrk": "⎴",
		"Tcaron": "Ť",
		"tcaron": "ť",
		"Tcedil": "Ţ",
		"tcedil": "ţ",
		"Tcy": "Т",
		"tcy": "т",
		"tdot": "⃛",
		"telrec": "⌕",
		"Tfr": "𝔗",
		"tfr": "𝔱",
		"there4": "∴",
		"therefore": "∴",
		"Therefore": "∴",
		"Theta": "Θ",
		"theta": "θ",
		"thetasym": "ϑ",
		"thetav": "ϑ",
		"thickapprox": "≈",
		"thicksim": "∼",
		"ThickSpace": "  ",
		"ThinSpace": " ",
		"thinsp": " ",
		"thkap": "≈",
		"thksim": "∼",
		"THORN": "Þ",
		"thorn": "þ",
		"tilde": "˜",
		"Tilde": "∼",
		"TildeEqual": "≃",
		"TildeFullEqual": "≅",
		"TildeTilde": "≈",
		"timesbar": "⨱",
		"timesb": "⊠",
		"times": "×",
		"timesd": "⨰",
		"tint": "∭",
		"toea": "⤨",
		"topbot": "⌶",
		"topcir": "⫱",
		"top": "⊤",
		"Topf": "𝕋",
		"topf": "𝕥",
		"topfork": "⫚",
		"tosa": "⤩",
		"tprime": "‴",
		"trade": "™",
		"TRADE": "™",
		"triangle": "▵",
		"triangledown": "▿",
		"triangleleft": "◃",
		"trianglelefteq": "⊴",
		"triangleq": "≜",
		"triangleright": "▹",
		"trianglerighteq": "⊵",
		"tridot": "◬",
		"trie": "≜",
		"triminus": "⨺",
		"TripleDot": "⃛",
		"triplus": "⨹",
		"trisb": "⧍",
		"tritime": "⨻",
		"trpezium": "⏢",
		"Tscr": "𝒯",
		"tscr": "𝓉",
		"TScy": "Ц",
		"tscy": "ц",
		"TSHcy": "Ћ",
		"tshcy": "ћ",
		"Tstrok": "Ŧ",
		"tstrok": "ŧ",
		"twixt": "≬",
		"twoheadleftarrow": "↞",
		"twoheadrightarrow": "↠",
		"Uacute": "Ú",
		"uacute": "ú",
		"uarr": "↑",
		"Uarr": "↟",
		"uArr": "⇑",
		"Uarrocir": "⥉",
		"Ubrcy": "Ў",
		"ubrcy": "ў",
		"Ubreve": "Ŭ",
		"ubreve": "ŭ",
		"Ucirc": "Û",
		"ucirc": "û",
		"Ucy": "У",
		"ucy": "у",
		"udarr": "⇅",
		"Udblac": "Ű",
		"udblac": "ű",
		"udhar": "⥮",
		"ufisht": "⥾",
		"Ufr": "𝔘",
		"ufr": "𝔲",
		"Ugrave": "Ù",
		"ugrave": "ù",
		"uHar": "⥣",
		"uharl": "↿",
		"uharr": "↾",
		"uhblk": "▀",
		"ulcorn": "⌜",
		"ulcorner": "⌜",
		"ulcrop": "⌏",
		"ultri": "◸",
		"Umacr": "Ū",
		"umacr": "ū",
		"uml": "¨",
		"UnderBar": "_",
		"UnderBrace": "⏟",
		"UnderBracket": "⎵",
		"UnderParenthesis": "⏝",
		"Union": "⋃",
		"UnionPlus": "⊎",
		"Uogon": "Ų",
		"uogon": "ų",
		"Uopf": "𝕌",
		"uopf": "𝕦",
		"UpArrowBar": "⤒",
		"uparrow": "↑",
		"UpArrow": "↑",
		"Uparrow": "⇑",
		"UpArrowDownArrow": "⇅",
		"updownarrow": "↕",
		"UpDownArrow": "↕",
		"Updownarrow": "⇕",
		"UpEquilibrium": "⥮",
		"upharpoonleft": "↿",
		"upharpoonright": "↾",
		"uplus": "⊎",
		"UpperLeftArrow": "↖",
		"UpperRightArrow": "↗",
		"upsi": "υ",
		"Upsi": "ϒ",
		"upsih": "ϒ",
		"Upsilon": "Υ",
		"upsilon": "υ",
		"UpTeeArrow": "↥",
		"UpTee": "⊥",
		"upuparrows": "⇈",
		"urcorn": "⌝",
		"urcorner": "⌝",
		"urcrop": "⌎",
		"Uring": "Ů",
		"uring": "ů",
		"urtri": "◹",
		"Uscr": "𝒰",
		"uscr": "𝓊",
		"utdot": "⋰",
		"Utilde": "Ũ",
		"utilde": "ũ",
		"utri": "▵",
		"utrif": "▴",
		"uuarr": "⇈",
		"Uuml": "Ü",
		"uuml": "ü",
		"uwangle": "⦧",
		"vangrt": "⦜",
		"varepsilon": "ϵ",
		"varkappa": "ϰ",
		"varnothing": "∅",
		"varphi": "ϕ",
		"varpi": "ϖ",
		"varpropto": "∝",
		"varr": "↕",
		"vArr": "⇕",
		"varrho": "ϱ",
		"varsigma": "ς",
		"varsubsetneq": "⊊︀",
		"varsubsetneqq": "⫋︀",
		"varsupsetneq": "⊋︀",
		"varsupsetneqq": "⫌︀",
		"vartheta": "ϑ",
		"vartriangleleft": "⊲",
		"vartriangleright": "⊳",
		"vBar": "⫨",
		"Vbar": "⫫",
		"vBarv": "⫩",
		"Vcy": "В",
		"vcy": "в",
		"vdash": "⊢",
		"vDash": "⊨",
		"Vdash": "⊩",
		"VDash": "⊫",
		"Vdashl": "⫦",
		"veebar": "⊻",
		"vee": "∨",
		"Vee": "⋁",
		"veeeq": "≚",
		"vellip": "⋮",
		"verbar": "|",
		"Verbar": "‖",
		"vert": "|",
		"Vert": "‖",
		"VerticalBar": "∣",
		"VerticalLine": "|",
		"VerticalSeparator": "❘",
		"VerticalTilde": "≀",
		"VeryThinSpace": " ",
		"Vfr": "𝔙",
		"vfr": "𝔳",
		"vltri": "⊲",
		"vnsub": "⊂⃒",
		"vnsup": "⊃⃒",
		"Vopf": "𝕍",
		"vopf": "𝕧",
		"vprop": "∝",
		"vrtri": "⊳",
		"Vscr": "𝒱",
		"vscr": "𝓋",
		"vsubnE": "⫋︀",
		"vsubne": "⊊︀",
		"vsupnE": "⫌︀",
		"vsupne": "⊋︀",
		"Vvdash": "⊪",
		"vzigzag": "⦚",
		"Wcirc": "Ŵ",
		"wcirc": "ŵ",
		"wedbar": "⩟",
		"wedge": "∧",
		"Wedge": "⋀",
		"wedgeq": "≙",
		"weierp": "℘",
		"Wfr": "𝔚",
		"wfr": "𝔴",
		"Wopf": "𝕎",
		"wopf": "𝕨",
		"wp": "℘",
		"wr": "≀",
		"wreath": "≀",
		"Wscr": "𝒲",
		"wscr": "𝓌",
		"xcap": "⋂",
		"xcirc": "◯",
		"xcup": "⋃",
		"xdtri": "▽",
		"Xfr": "𝔛",
		"xfr": "𝔵",
		"xharr": "⟷",
		"xhArr": "⟺",
		"Xi": "Ξ",
		"xi": "ξ",
		"xlarr": "⟵",
		"xlArr": "⟸",
		"xmap": "⟼",
		"xnis": "⋻",
		"xodot": "⨀",
		"Xopf": "𝕏",
		"xopf": "𝕩",
		"xoplus": "⨁",
		"xotime": "⨂",
		"xrarr": "⟶",
		"xrArr": "⟹",
		"Xscr": "𝒳",
		"xscr": "𝓍",
		"xsqcup": "⨆",
		"xuplus": "⨄",
		"xutri": "△",
		"xvee": "⋁",
		"xwedge": "⋀",
		"Yacute": "Ý",
		"yacute": "ý",
		"YAcy": "Я",
		"yacy": "я",
		"Ycirc": "Ŷ",
		"ycirc": "ŷ",
		"Ycy": "Ы",
		"ycy": "ы",
		"yen": "¥",
		"Yfr": "𝔜",
		"yfr": "𝔶",
		"YIcy": "Ї",
		"yicy": "ї",
		"Yopf": "𝕐",
		"yopf": "𝕪",
		"Yscr": "𝒴",
		"yscr": "𝓎",
		"YUcy": "Ю",
		"yucy": "ю",
		"yuml": "ÿ",
		"Yuml": "Ÿ",
		"Zacute": "Ź",
		"zacute": "ź",
		"Zcaron": "Ž",
		"zcaron": "ž",
		"Zcy": "З",
		"zcy": "з",
		"Zdot": "Ż",
		"zdot": "ż",
		"zeetrf": "ℨ",
		"ZeroWidthSpace": "​",
		"Zeta": "Ζ",
		"zeta": "ζ",
		"zfr": "𝔷",
		"Zfr": "ℨ",
		"ZHcy": "Ж",
		"zhcy": "ж",
		"zigrarr": "⇝",
		"zopf": "𝕫",
		"Zopf": "ℤ",
		"Zscr": "𝒵",
		"zscr": "𝓏",
		"zwj": "‍",
		"zwnj": "‌"
	};

/***/ },

/***/ 1139:
/***/ function(module, exports, __webpack_require__) {

	var entityMap = __webpack_require__(1138),
	    legacyMap = __webpack_require__(1140),
	    xmlMap    = __webpack_require__(1137),
	    decodeCodePoint = __webpack_require__(1141);

	var decodeXMLStrict  = getStrictDecoder(xmlMap),
	    decodeHTMLStrict = getStrictDecoder(entityMap);

	function getStrictDecoder(map){
		var keys = Object.keys(map).join("|"),
		    replace = getReplacer(map);

		keys += "|#[xX][\\da-fA-F]+|#\\d+";

		var re = new RegExp("&(?:" + keys + ");", "g");

		return function(str){
			return String(str).replace(re, replace);
		};
	}

	var decodeHTML = (function(){
		var legacy = Object.keys(legacyMap)
			.sort(sorter);

		var keys = Object.keys(entityMap)
			.sort(sorter);

		for(var i = 0, j = 0; i < keys.length; i++){
			if(legacy[j] === keys[i]){
				keys[i] += ";?";
				j++;
			} else {
				keys[i] += ";";
			}
		}

		var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"),
		    replace = getReplacer(entityMap);

		function replacer(str){
			if(str.substr(-1) !== ";") str += ";";
			return replace(str);
		}

		//TODO consider creating a merged map
		return function(str){
			return String(str).replace(re, replacer);
		};
	}());

	function sorter(a, b){
		return a < b ? 1 : -1;
	}

	function getReplacer(map){
		return function replace(str){
			if(str.charAt(1) === "#"){
				if(str.charAt(2) === "X" || str.charAt(2) === "x"){
					return decodeCodePoint(parseInt(str.substr(3), 16));
				}
				return decodeCodePoint(parseInt(str.substr(2), 10));
			}
			return map[str.slice(1, -1)];
		};
	}

	module.exports = {
		XML: decodeXMLStrict,
		HTML: decodeHTML,
		HTMLStrict: decodeHTMLStrict
	};

/***/ },

/***/ 1140:
/***/ function(module, exports) {

	module.exports = {
		"Aacute": "Á",
		"aacute": "á",
		"Acirc": "Â",
		"acirc": "â",
		"acute": "´",
		"AElig": "Æ",
		"aelig": "æ",
		"Agrave": "À",
		"agrave": "à",
		"amp": "&",
		"AMP": "&",
		"Aring": "Å",
		"aring": "å",
		"Atilde": "Ã",
		"atilde": "ã",
		"Auml": "Ä",
		"auml": "ä",
		"brvbar": "¦",
		"Ccedil": "Ç",
		"ccedil": "ç",
		"cedil": "¸",
		"cent": "¢",
		"copy": "©",
		"COPY": "©",
		"curren": "¤",
		"deg": "°",
		"divide": "÷",
		"Eacute": "É",
		"eacute": "é",
		"Ecirc": "Ê",
		"ecirc": "ê",
		"Egrave": "È",
		"egrave": "è",
		"ETH": "Ð",
		"eth": "ð",
		"Euml": "Ë",
		"euml": "ë",
		"frac12": "½",
		"frac14": "¼",
		"frac34": "¾",
		"gt": ">",
		"GT": ">",
		"Iacute": "Í",
		"iacute": "í",
		"Icirc": "Î",
		"icirc": "î",
		"iexcl": "¡",
		"Igrave": "Ì",
		"igrave": "ì",
		"iquest": "¿",
		"Iuml": "Ï",
		"iuml": "ï",
		"laquo": "«",
		"lt": "<",
		"LT": "<",
		"macr": "¯",
		"micro": "µ",
		"middot": "·",
		"nbsp": " ",
		"not": "¬",
		"Ntilde": "Ñ",
		"ntilde": "ñ",
		"Oacute": "Ó",
		"oacute": "ó",
		"Ocirc": "Ô",
		"ocirc": "ô",
		"Ograve": "Ò",
		"ograve": "ò",
		"ordf": "ª",
		"ordm": "º",
		"Oslash": "Ø",
		"oslash": "ø",
		"Otilde": "Õ",
		"otilde": "õ",
		"Ouml": "Ö",
		"ouml": "ö",
		"para": "¶",
		"plusmn": "±",
		"pound": "£",
		"quot": "\"",
		"QUOT": "\"",
		"raquo": "»",
		"reg": "®",
		"REG": "®",
		"sect": "§",
		"shy": "­",
		"sup1": "¹",
		"sup2": "²",
		"sup3": "³",
		"szlig": "ß",
		"THORN": "Þ",
		"thorn": "þ",
		"times": "×",
		"Uacute": "Ú",
		"uacute": "ú",
		"Ucirc": "Û",
		"ucirc": "û",
		"Ugrave": "Ù",
		"ugrave": "ù",
		"uml": "¨",
		"Uuml": "Ü",
		"uuml": "ü",
		"Yacute": "Ý",
		"yacute": "ý",
		"yen": "¥",
		"yuml": "ÿ"
	};

/***/ },

/***/ 1141:
/***/ function(module, exports, __webpack_require__) {

	var decodeMap = __webpack_require__(1142);

	module.exports = decodeCodePoint;

	// modified version of https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
	function decodeCodePoint(codePoint){

		if((codePoint >= 0xD800 && codePoint <= 0xDFFF) || codePoint > 0x10FFFF){
			return "\uFFFD";
		}

		if(codePoint in decodeMap){
			codePoint = decodeMap[codePoint];
		}

		var output = "";

		if(codePoint > 0xFFFF){
			codePoint -= 0x10000;
			output += String.fromCharCode(codePoint >>> 10 & 0x3FF | 0xD800);
			codePoint = 0xDC00 | codePoint & 0x3FF;
		}

		output += String.fromCharCode(codePoint);
		return output;
	}


/***/ },

/***/ 1142:
/***/ function(module, exports) {

	module.exports = {
		"0": 65533,
		"128": 8364,
		"130": 8218,
		"131": 402,
		"132": 8222,
		"133": 8230,
		"134": 8224,
		"135": 8225,
		"136": 710,
		"137": 8240,
		"138": 352,
		"139": 8249,
		"140": 338,
		"142": 381,
		"145": 8216,
		"146": 8217,
		"147": 8220,
		"148": 8221,
		"149": 8226,
		"150": 8211,
		"151": 8212,
		"152": 732,
		"153": 8482,
		"154": 353,
		"155": 8250,
		"156": 339,
		"158": 382,
		"159": 376
	};

/***/ },

/***/ 1143:
/***/ function(module, exports) {

	var getChildren = exports.getChildren = function(elem){
		return elem.children;
	};

	var getParent = exports.getParent = function(elem){
		return elem.parent;
	};

	exports.getSiblings = function(elem){
		var parent = getParent(elem);
		return parent ? getChildren(parent) : [elem];
	};

	exports.getAttributeValue = function(elem, name){
		return elem.attribs && elem.attribs[name];
	};

	exports.hasAttrib = function(elem, name){
		return !!elem.attribs && hasOwnProperty.call(elem.attribs, name);
	};

	exports.getName = function(elem){
		return elem.name;
	};


/***/ },

/***/ 1144:
/***/ function(module, exports) {

	exports.removeElement = function(elem){
		if(elem.prev) elem.prev.next = elem.next;
		if(elem.next) elem.next.prev = elem.prev;

		if(elem.parent){
			var childs = elem.parent.children;
			childs.splice(childs.lastIndexOf(elem), 1);
		}
	};

	exports.replaceElement = function(elem, replacement){
		var prev = replacement.prev = elem.prev;
		if(prev){
			prev.next = replacement;
		}

		var next = replacement.next = elem.next;
		if(next){
			next.prev = replacement;
		}

		var parent = replacement.parent = elem.parent;
		if(parent){
			var childs = parent.children;
			childs[childs.lastIndexOf(elem)] = replacement;
		}
	};

	exports.appendChild = function(elem, child){
		child.parent = elem;

		if(elem.children.push(child) !== 1){
			var sibling = elem.children[elem.children.length - 2];
			sibling.next = child;
			child.prev = sibling;
			child.next = null;
		}
	};

	exports.append = function(elem, next){
		var parent = elem.parent,
			currNext = elem.next;

		next.next = currNext;
		next.prev = elem;
		elem.next = next;
		next.parent = parent;

		if(currNext){
			currNext.prev = next;
			if(parent){
				var childs = parent.children;
				childs.splice(childs.lastIndexOf(currNext), 0, next);
			}
		} else if(parent){
			parent.children.push(next);
		}
	};

	exports.prepend = function(elem, prev){
		var parent = elem.parent;
		if(parent){
			var childs = parent.children;
			childs.splice(childs.lastIndexOf(elem), 0, prev);
		}

		if(elem.prev){
			elem.prev.next = prev;
		}
		
		prev.parent = parent;
		prev.prev = elem.prev;
		prev.next = elem;
		elem.prev = prev;
	};




/***/ },

/***/ 1145:
/***/ function(module, exports, __webpack_require__) {

	var isTag = __webpack_require__(1108).isTag;

	module.exports = {
		filter: filter,
		find: find,
		findOneChild: findOneChild,
		findOne: findOne,
		existsOne: existsOne,
		findAll: findAll
	};

	function filter(test, element, recurse, limit){
		if(!Array.isArray(element)) element = [element];

		if(typeof limit !== "number" || !isFinite(limit)){
			limit = Infinity;
		}
		return find(test, element, recurse !== false, limit);
	}

	function find(test, elems, recurse, limit){
		var result = [], childs;

		for(var i = 0, j = elems.length; i < j; i++){
			if(test(elems[i])){
				result.push(elems[i]);
				if(--limit <= 0) break;
			}

			childs = elems[i].children;
			if(recurse && childs && childs.length > 0){
				childs = find(test, childs, recurse, limit);
				result = result.concat(childs);
				limit -= childs.length;
				if(limit <= 0) break;
			}
		}

		return result;
	}

	function findOneChild(test, elems){
		for(var i = 0, l = elems.length; i < l; i++){
			if(test(elems[i])) return elems[i];
		}

		return null;
	}

	function findOne(test, elems){
		var elem = null;

		for(var i = 0, l = elems.length; i < l && !elem; i++){
			if(!isTag(elems[i])){
				continue;
			} else if(test(elems[i])){
				elem = elems[i];
			} else if(elems[i].children.length > 0){
				elem = findOne(test, elems[i].children);
			}
		}

		return elem;
	}

	function existsOne(test, elems){
		for(var i = 0, l = elems.length; i < l; i++){
			if(
				isTag(elems[i]) && (
					test(elems[i]) || (
						elems[i].children.length > 0 &&
						existsOne(test, elems[i].children)
					)
				)
			){
				return true;
			}
		}

		return false;
	}

	function findAll(test, elems){
		var result = [];
		for(var i = 0, j = elems.length; i < j; i++){
			if(!isTag(elems[i])) continue;
			if(test(elems[i])) result.push(elems[i]);

			if(elems[i].children.length > 0){
				result = result.concat(findAll(test, elems[i].children));
			}
		}
		return result;
	}


/***/ },

/***/ 1146:
/***/ function(module, exports, __webpack_require__) {

	var ElementType = __webpack_require__(1108);
	var isTag = exports.isTag = ElementType.isTag;

	exports.testElement = function(options, element){
		for(var key in options){
			if(!options.hasOwnProperty(key));
			else if(key === "tag_name"){
				if(!isTag(element) || !options.tag_name(element.name)){
					return false;
				}
			} else if(key === "tag_type"){
				if(!options.tag_type(element.type)) return false;
			} else if(key === "tag_contains"){
				if(isTag(element) || !options.tag_contains(element.data)){
					return false;
				}
			} else if(!element.attribs || !options[key](element.attribs[key])){
				return false;
			}
		}
		return true;
	};

	var Checks = {
		tag_name: function(name){
			if(typeof name === "function"){
				return function(elem){ return isTag(elem) && name(elem.name); };
			} else if(name === "*"){
				return isTag;
			} else {
				return function(elem){ return isTag(elem) && elem.name === name; };
			}
		},
		tag_type: function(type){
			if(typeof type === "function"){
				return function(elem){ return type(elem.type); };
			} else {
				return function(elem){ return elem.type === type; };
			}
		},
		tag_contains: function(data){
			if(typeof data === "function"){
				return function(elem){ return !isTag(elem) && data(elem.data); };
			} else {
				return function(elem){ return !isTag(elem) && elem.data === data; };
			}
		}
	};

	function getAttribCheck(attrib, value){
		if(typeof value === "function"){
			return function(elem){ return elem.attribs && value(elem.attribs[attrib]); };
		} else {
			return function(elem){ return elem.attribs && elem.attribs[attrib] === value; };
		}
	}

	function combineFuncs(a, b){
		return function(elem){
			return a(elem) || b(elem);
		};
	}

	exports.getElements = function(options, element, recurse, limit){
		var funcs = Object.keys(options).map(function(key){
			var value = options[key];
			return key in Checks ? Checks[key](value) : getAttribCheck(key, value);
		});

		return funcs.length === 0 ? [] : this.filter(
			funcs.reduce(combineFuncs),
			element, recurse, limit
		);
	};

	exports.getElementById = function(id, element, recurse){
		if(!Array.isArray(element)) element = [element];
		return this.findOne(getAttribCheck("id", id), element, recurse !== false);
	};

	exports.getElementsByTagName = function(name, element, recurse, limit){
		return this.filter(Checks.tag_name(name), element, recurse, limit);
	};

	exports.getElementsByTagType = function(type, element, recurse, limit){
		return this.filter(Checks.tag_type(type), element, recurse, limit);
	};


/***/ },

/***/ 1147:
/***/ function(module, exports) {

	// removeSubsets
	// Given an array of nodes, remove any member that is contained by another.
	exports.removeSubsets = function(nodes) {
		var idx = nodes.length, node, ancestor, replace;

		// Check if each node (or one of its ancestors) is already contained in the
		// array.
		while (--idx > -1) {
			node = ancestor = nodes[idx];

			// Temporarily remove the node under consideration
			nodes[idx] = null;
			replace = true;

			while (ancestor) {
				if (nodes.indexOf(ancestor) > -1) {
					replace = false;
					nodes.splice(idx, 1);
					break;
				}
				ancestor = ancestor.parent;
			}

			// If the node has been found to be unique, re-insert it.
			if (replace) {
				nodes[idx] = node;
			}
		}

		return nodes;
	};

	// Source: http://dom.spec.whatwg.org/#dom-node-comparedocumentposition
	var POSITION = {
		DISCONNECTED: 1,
		PRECEDING: 2,
		FOLLOWING: 4,
		CONTAINS: 8,
		CONTAINED_BY: 16
	};

	// Compare the position of one node against another node in any other document.
	// The return value is a bitmask with the following values:
	//
	// document order:
	// > There is an ordering, document order, defined on all the nodes in the
	// > document corresponding to the order in which the first character of the
	// > XML representation of each node occurs in the XML representation of the
	// > document after expansion of general entities. Thus, the document element
	// > node will be the first node. Element nodes occur before their children.
	// > Thus, document order orders element nodes in order of the occurrence of
	// > their start-tag in the XML (after expansion of entities). The attribute
	// > nodes of an element occur after the element and before its children. The
	// > relative order of attribute nodes is implementation-dependent./
	// Source:
	// http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
	//
	// @argument {Node} nodaA The first node to use in the comparison
	// @argument {Node} nodeB The second node to use in the comparison
	//
	// @return {Number} A bitmask describing the input nodes' relative position.
	//         See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
	//         a description of these values.
	var comparePos = exports.compareDocumentPosition = function(nodeA, nodeB) {
		var aParents = [];
		var bParents = [];
		var current, sharedParent, siblings, aSibling, bSibling, idx;

		if (nodeA === nodeB) {
			return 0;
		}

		current = nodeA;
		while (current) {
			aParents.unshift(current);
			current = current.parent;
		}
		current = nodeB;
		while (current) {
			bParents.unshift(current);
			current = current.parent;
		}

		idx = 0;
		while (aParents[idx] === bParents[idx]) {
			idx++;
		}

		if (idx === 0) {
			return POSITION.DISCONNECTED;
		}

		sharedParent = aParents[idx - 1];
		siblings = sharedParent.children;
		aSibling = aParents[idx];
		bSibling = bParents[idx];

		if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
			if (sharedParent === nodeB) {
				return POSITION.FOLLOWING | POSITION.CONTAINED_BY;
			}
			return POSITION.FOLLOWING;
		} else {
			if (sharedParent === nodeA) {
				return POSITION.PRECEDING | POSITION.CONTAINS;
			}
			return POSITION.PRECEDING;
		}
	};

	// Sort an array of nodes based on their relative position in the document and
	// remove any duplicate nodes. If the array contains nodes that do not belong
	// to the same document, sort order is unspecified.
	//
	// @argument {Array} nodes Array of DOM nodes
	//
	// @returns {Array} collection of unique nodes, sorted in document order
	exports.uniqueSort = function(nodes) {
		var idx = nodes.length, node, position;

		nodes = nodes.slice();

		while (--idx > -1) {
			node = nodes[idx];
			position = nodes.indexOf(node);
			if (position > -1 && position < idx) {
				nodes.splice(idx, 1);
			}
		}
		nodes.sort(function(a, b) {
			var relative = comparePos(a, b);
			if (relative & POSITION.PRECEDING) {
				return -1;
			} else if (relative & POSITION.FOLLOWING) {
				return 1;
			}
			return 0;
		});

		return nodes;
	};


/***/ },

/***/ 1148:
/***/ function(module, exports, __webpack_require__) {

	module.exports = CollectingHandler;

	function CollectingHandler(cbs){
		this._cbs = cbs || {};
		this.events = [];
	}

	var EVENTS = __webpack_require__(1098).EVENTS;
	Object.keys(EVENTS).forEach(function(name){
		if(EVENTS[name] === 0){
			name = "on" + name;
			CollectingHandler.prototype[name] = function(){
				this.events.push([name]);
				if(this._cbs[name]) this._cbs[name]();
			};
		} else if(EVENTS[name] === 1){
			name = "on" + name;
			CollectingHandler.prototype[name] = function(a){
				this.events.push([name, a]);
				if(this._cbs[name]) this._cbs[name](a);
			};
		} else if(EVENTS[name] === 2){
			name = "on" + name;
			CollectingHandler.prototype[name] = function(a, b){
				this.events.push([name, a, b]);
				if(this._cbs[name]) this._cbs[name](a, b);
			};
		} else {
			throw Error("wrong number of arguments");
		}
	});

	CollectingHandler.prototype.onreset = function(){
		this.events = [];
		if(this._cbs.onreset) this._cbs.onreset();
	};

	CollectingHandler.prototype.restart = function(){
		if(this._cbs.onreset) this._cbs.onreset();

		for(var i = 0, len = this.events.length; i < len; i++){
			if(this._cbs[this.events[i][0]]){

				var num = this.events[i].length;

				if(num === 1){
					this._cbs[this.events[i][0]]();
				} else if(num === 2){
					this._cbs[this.events[i][0]](this.events[i][1]);
				} else {
					this._cbs[this.events[i][0]](this.events[i][1], this.events[i][2]);
				}
			}
		}
	};


/***/ },

/***/ 1149:
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(1097),
	    render = __webpack_require__(1133);

	/**
	 * HTML Tags
	 */

	var tags = { tag: true, script: true, style: true };

	/**
	 * Check if the DOM element is a tag
	 *
	 * isTag(type) includes <script> and <style> tags
	 */

	exports.isTag = function(type) {
	  if (type.type) type = type.type;
	  return tags[type] || false;
	};

	/**
	 * Convert a string to camel case notation.
	 * @param  {String} str String to be converted.
	 * @return {String}     String in camel case notation.
	 */

	exports.camelCase = function(str) {
	  return str.replace(/[_.-](\w|$)/g, function(_, x) {
	    return x.toUpperCase();
	  });
	};

	/**
	 * Convert a string from camel case to "CSS case", where word boundaries are
	 * described by hyphens ("-") and all characters are lower-case.
	 * @param  {String} str String to be converted.
	 * @return {string}     String in "CSS case".
	 */
	exports.cssCase = function(str) {
	  return str.replace(/[A-Z]/g, '-$&').toLowerCase();
	};

	/**
	 * Iterate over each DOM element without creating intermediary Cheerio instances.
	 *
	 * This is indented for use internally to avoid otherwise unnecessary memory pressure introduced
	 * by _make.
	 */

	exports.domEach = function(cheerio, fn) {
	  var i = 0, len = cheerio.length;
	  while (i < len && fn.call(cheerio, i, cheerio[i]) !== false) ++i;
	  return cheerio;
	};

	/**
	 * Create a deep copy of the given DOM structure by first rendering it to a
	 * string and then parsing the resultant markup.
	 *
	 * @argument {Object} dom - The htmlparser2-compliant DOM structure
	 * @argument {Object} options - The parsing/rendering options
	 */
	exports.cloneDom = function(dom, options) {
	  return parse(render(dom, options), options).children;
	};

	/*
	 * A simple way to check for HTML strings or ID strings
	 */

	var quickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/;

	/*
	 * Check if string is HTML
	 */
	exports.isHtml = function(str) {
	  // Faster than running regex, if str starts with `<` and ends with `>`, assume it's HTML
	  if (str.charAt(0) === '<' && str.charAt(str.length - 1) === '>' && str.length >= 3) return true;

	  // Run the regex
	  var match = quickExpr.exec(str);
	  return !!(match && match[1]);
	};


/***/ },

/***/ 1150:
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(669),
	  $ = __webpack_require__(1151),
	  utils = __webpack_require__(1149),
	  isTag = utils.isTag,
	  domEach = utils.domEach,
	  hasOwn = Object.prototype.hasOwnProperty,
	  camelCase = utils.camelCase,
	  cssCase = utils.cssCase,
	  rspace = /\s+/,
	  dataAttrPrefix = 'data-',

	  // Lookup table for coercing string data-* attributes to their corresponding
	  // JavaScript primitives
	  primitives = {
	    null: null,
	    true: true,
	    false: false
	  },

	  // Attributes that are booleans
	  rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
	  // Matches strings that look like JSON objects or arrays
	  rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;


	var getAttr = function(elem, name) {
	  if (!elem || !isTag(elem)) return;

	  if (!elem.attribs) {
	    elem.attribs = {};
	  }

	  // Return the entire attribs object if no attribute specified
	  if (!name) {
	    return elem.attribs;
	  }

	  if (hasOwn.call(elem.attribs, name)) {
	    // Get the (decoded) attribute
	    return rboolean.test(name) ? name : elem.attribs[name];
	  }

	  // Mimic the DOM and return text content as value for `option's`
	  if (elem.name === 'option' && name === 'value') {
	    return $.text(elem.children);
	  }
	};

	var setAttr = function(el, name, value) {

	  if (value === null) {
	    removeAttribute(el, name);
	  } else {
	    el.attribs[name] = value+'';
	  }
	};

	exports.attr = function(name, value) {
	  // Set the value (with attr map support)
	  if (typeof name === 'object' || value !== undefined) {
	    if (typeof value === 'function') {
	      return domEach(this, function(i, el) {
	        setAttr(el, name, value.call(el, i, el.attribs[name]));
	      });
	    }
	    return domEach(this, function(i, el) {
	      if (!isTag(el)) return;

	      if (typeof name === 'object') {
	        _.each(name, function(value, name) {
	          setAttr(el, name, value);
	        });
	      } else {
	        setAttr(el, name, value);
	      }
	    });
	  }

	  return getAttr(this[0], name);
	};

	var getProp = function (el, name) {
	  return el.hasOwnProperty(name)
	      ? el[name]
	      : rboolean.test(name)
	          ? getAttr(el, name) !== undefined
	          : getAttr(el, name);
	};

	var setProp = function (el, name, value) {
	  el[name] = rboolean.test(name) ? !!value : value;
	};

	exports.prop = function (name, value) {
	  var i = 0,
	      property;

	  if (typeof name === 'string' && value === undefined) {

	    switch (name) {
	      case 'style':
	        property = this.css();

	        _.each(property, function (v, p) {
	          property[i++] = p;
	        });

	        property.length = i;

	        break;
	      case 'tagName':
	      case 'nodeName':
	        property = this[0].name.toUpperCase();
	        break;
	      default:
	        property = getProp(this[0], name);
	    }

	    return property;
	  }

	  if (typeof name === 'object' || value !== undefined) {

	    if (typeof value === 'function') {
	      return domEach(this, function(i, el) {
	        setProp(el, name, value.call(el, i, getProp(el, name)));
	      });
	    }

	    return domEach(this, function(i, el) {
	      if (!isTag(el)) return;

	      if (typeof name === 'object') {

	        _.each(name, function(val, name) {
	          setProp(el, name, val);
	        });

	      } else {
	        setProp(el, name, value);
	      }
	    });

	  }
	};

	var setData = function(el, name, value) {
	  if (!el.data) {
	    el.data = {};
	  }

	  if (typeof name === 'object') return _.extend(el.data, name);
	  if (typeof name === 'string' && value !== undefined) {
	    el.data[name] = value;
	  } else if (typeof name === 'object') {
	    _.exend(el.data, name);
	  }
	};

	// Read the specified attribute from the equivalent HTML5 `data-*` attribute,
	// and (if present) cache the value in the node's internal data store. If no
	// attribute name is specified, read *all* HTML5 `data-*` attributes in this
	// manner.
	var readData = function(el, name) {
	  var readAll = arguments.length === 1;
	  var domNames, domName, jsNames, jsName, value, idx, length;

	  if (readAll) {
	    domNames = Object.keys(el.attribs).filter(function(attrName) {
	      return attrName.slice(0, dataAttrPrefix.length) === dataAttrPrefix;
	    });
	    jsNames = domNames.map(function(domName) {
	      return camelCase(domName.slice(dataAttrPrefix.length));
	    });
	  } else {
	    domNames = [dataAttrPrefix + cssCase(name)];
	    jsNames = [name];
	  }

	  for (idx = 0, length = domNames.length; idx < length; ++idx) {
	    domName = domNames[idx];
	    jsName = jsNames[idx];
	    if (hasOwn.call(el.attribs, domName)) {
	      value = el.attribs[domName];

	      if (hasOwn.call(primitives, value)) {
	        value = primitives[value];
	      } else if (value === String(Number(value))) {
	        value = Number(value);
	      } else if (rbrace.test(value)) {
	        try {
	          value = JSON.parse(value);
	        } catch(e){ }
	      }

	      el.data[jsName] = value;
	    }
	  }

	  return readAll ? el.data : value;
	};

	exports.data = function(name, value) {
	  var elem = this[0];

	  if (!elem || !isTag(elem)) return;

	  if (!elem.data) {
	    elem.data = {};
	  }

	  // Return the entire data object if no data specified
	  if (!name) {
	    return readData(elem);
	  }

	  // Set the value (with attr map support)
	  if (typeof name === 'object' || value !== undefined) {
	    domEach(this, function(i, el) {
	      setData(el, name, value);
	    });
	    return this;
	  } else if (hasOwn.call(elem.data, name)) {
	    return elem.data[name];
	  }

	  return readData(elem, name);
	};

	/**
	 * Get the value of an element
	 */

	exports.val = function(value) {
	  var querying = arguments.length === 0,
	      element = this[0];

	  if(!element) return;

	  switch (element.name) {
	    case 'textarea':
	      return this.text(value);
	    case 'input':
	      switch (this.attr('type')) {
	        case 'radio':
	          if (querying) {
	            return this.attr('value');
	          } else {
	            this.attr('value', value);
	            return this;
	          }
	          break;
	        default:
	          return this.attr('value', value);
	      }
	      return;
	    case 'select':
	      var option = this.find('option:selected'),
	          returnValue;
	      if (option === undefined) return undefined;
	      if (!querying) {
	        if (!this.attr().hasOwnProperty('multiple') && typeof value == 'object') {
	          return this;
	        }
	        if (typeof value != 'object') {
	          value = [value];
	        }
	        this.find('option').removeAttr('selected');
	        for (var i = 0; i < value.length; i++) {
	          this.find('option[value="' + value[i] + '"]').attr('selected', '');
	        }
	        return this;
	      }
	      returnValue = option.attr('value');
	      if (this.attr().hasOwnProperty('multiple')) {
	        returnValue = [];
	        domEach(option, function(i, el) {
	          returnValue.push(getAttr(el, 'value'));
	        });
	      }
	      return returnValue;
	    case 'option':
	      if (!querying) {
	        this.attr('value', value);
	        return this;
	      }
	      return this.attr('value');
	  }
	};

	/**
	 * Remove an attribute
	 */

	var removeAttribute = function(elem, name) {
	  if (!elem.attribs || !hasOwn.call(elem.attribs, name))
	    return;

	  delete elem.attribs[name];
	};


	exports.removeAttr = function(name) {
	  domEach(this, function(i, elem) {
	    removeAttribute(elem, name);
	  });

	  return this;
	};

	exports.hasClass = function(className) {
	  return _.some(this, function(elem) {
	    var attrs = elem.attribs,
	        clazz = attrs && attrs['class'],
	        idx = -1,
	        end;

	    if (clazz) {
	      while ((idx = clazz.indexOf(className, idx+1)) > -1) {
	        end = idx + className.length;

	        if ((idx === 0 || rspace.test(clazz[idx-1]))
	            && (end === clazz.length || rspace.test(clazz[end]))) {
	          return true;
	        }
	      }
	    }
	  });
	};

	exports.addClass = function(value) {
	  // Support functions
	  if (typeof value === 'function') {
	    return domEach(this, function(i, el) {
	      var className = el.attribs['class'] || '';
	      exports.addClass.call([el], value.call(el, i, className));
	    });
	  }

	  // Return if no value or not a string or function
	  if (!value || typeof value !== 'string') return this;

	  var classNames = value.split(rspace),
	      numElements = this.length;


	  for (var i = 0; i < numElements; i++) {
	    // If selected element isn't a tag, move on
	    if (!isTag(this[i])) continue;

	    // If we don't already have classes
	    var className = getAttr(this[i], 'class'),
	        numClasses,
	        setClass;

	    if (!className) {
	      setAttr(this[i], 'class', classNames.join(' ').trim());
	    } else {
	      setClass = ' ' + className + ' ';
	      numClasses = classNames.length;

	      // Check if class already exists
	      for (var j = 0; j < numClasses; j++) {
	        var appendClass = classNames[j] + ' ';
	        if (setClass.indexOf(' ' + appendClass) < 0)
	          setClass += appendClass;
	      }

	      setAttr(this[i], 'class', setClass.trim());
	    }
	  }

	  return this;
	};

	var splitClass = function(className) {
	  return className ? className.trim().split(rspace) : [];
	};

	exports.removeClass = function(value) {
	  var classes,
	      numClasses,
	      removeAll;

	  // Handle if value is a function
	  if (typeof value === 'function') {
	    return domEach(this, function(i, el) {
	      exports.removeClass.call(
	        [el], value.call(el, i, el.attribs['class'] || '')
	      );
	    });
	  }

	  classes = splitClass(value);
	  numClasses = classes.length;
	  removeAll = arguments.length === 0;

	  return domEach(this, function(i, el) {
	    if (!isTag(el)) return;

	    if (removeAll) {
	      // Short circuit the remove all case as this is the nice one
	      el.attribs.class = '';
	    } else {
	      var elClasses = splitClass(el.attribs.class),
	          index,
	          changed;

	      for (var j = 0; j < numClasses; j++) {
	        index = elClasses.indexOf(classes[j]);

	        if (index >= 0) {
	          elClasses.splice(index, 1);
	          changed = true;

	          // We have to do another pass to ensure that there are not duplicate
	          // classes listed
	          j--;
	        }
	      }
	      if (changed) {
	        el.attribs.class = elClasses.join(' ');
	      }
	    }
	  });
	};

	exports.toggleClass = function(value, stateVal) {
	  // Support functions
	  if (typeof value === 'function') {
	    return domEach(this, function(i, el) {
	      exports.toggleClass.call(
	        [el],
	        value.call(el, i, el.attribs['class'] || '', stateVal),
	        stateVal
	      );
	    });
	  }

	  // Return if no value or not a string or function
	  if (!value || typeof value !== 'string') return this;

	  var classNames = value.split(rspace),
	    numClasses = classNames.length,
	    state = typeof stateVal === 'boolean' ? stateVal ? 1 : -1 : 0,
	    numElements = this.length,
	    elementClasses,
	    index;

	  for (var i = 0; i < numElements; i++) {
	    // If selected element isn't a tag, move on
	    if (!isTag(this[i])) continue;

	    elementClasses = splitClass(this[i].attribs.class);

	    // Check if class already exists
	    for (var j = 0; j < numClasses; j++) {
	      // Check if the class name is currently defined
	      index = elementClasses.indexOf(classNames[j]);

	      // Add if stateValue === true or we are toggling and there is no value
	      if (state >= 0 && index < 0) {
	        elementClasses.push(classNames[j]);
	      } else if (state <= 0 && index >= 0) {
	        // Otherwise remove but only if the item exists
	        elementClasses.splice(index, 1);
	      }
	    }

	    this[i].attribs.class = elementClasses.join(' ');
	  }

	  return this;
	};

	exports.is = function (selector) {
	  if (selector) {
	    return this.filter(selector).length > 0;
	  }
	  return false;
	};



/***/ },

/***/ 1151:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies
	 */

	var select = __webpack_require__(1152),
	    parse = __webpack_require__(1097),
	    serialize = __webpack_require__(1133),
	    _ = __webpack_require__(669);

	/**
	 * $.load(str)
	 */

	exports.load = function(content, options) {
	  var Cheerio = __webpack_require__(1096);

	  options = _.defaults(options || {}, Cheerio.prototype.options);

	  var root = parse(content, options);

	  var initialize = function(selector, context, r, opts) {
	    if (!(this instanceof initialize)) {
	      return new initialize(selector, context, r, opts);
	    }
	    opts = _.defaults(opts || {}, options);
	    return Cheerio.call(this, selector, context, r || root, opts);
	  };

	  // Ensure that selections created by the "loaded" `initialize` function are
	  // true Cheerio instances.
	  initialize.prototype = Object.create(Cheerio.prototype);
	  initialize.prototype.constructor = initialize;

	  // Mimic jQuery's prototype alias for plugin authors.
	  initialize.fn = initialize.prototype;

	  // Keep a reference to the top-level scope so we can chain methods that implicitly 
	  // resolve selectors; e.g. $("<span>").(".bar"), which otherwise loses ._root
	  initialize.prototype._originalRoot = root;

	  // Add in the static methods
	  _.merge(initialize, exports);

	  // Add in the root
	  initialize._root = root;
	  // store options
	  initialize._options = options;

	  return initialize;
	};

	/*
	* Helper function
	*/

	function render(that, dom, options) {
	  if (!dom) {
	    if (that._root && that._root.children) {
	      dom = that._root.children;
	    } else {
	      return '';
	    }
	  } else if (typeof dom === 'string') {
	    dom = select(dom, that._root, options);
	  }

	  return serialize(dom, options);
	}

	/**
	 * $.html([selector | dom], [options])
	 */

	exports.html = function(dom, options) {
	  var Cheerio = __webpack_require__(1096);

	  // be flexible about parameters, sometimes we call html(),
	  // with options as only parameter
	  // check dom argument for dom element specific properties
	  // assume there is no 'length' or 'type' properties in the options object
	  if (Object.prototype.toString.call(dom) === '[object Object]' && !options && !('length' in dom) && !('type' in dom))
	  {
	    options = dom;
	    dom = undefined;
	  }

	  // sometimes $.html() used without preloading html
	  // so fallback non existing options to the default ones
	  options = _.defaults(options || {}, this._options, Cheerio.prototype.options);

	  return render(this, dom, options);
	};

	/**
	 * $.xml([selector | dom])
	 */

	exports.xml = function(dom) {
	  var options = _.defaults({xmlMode: true}, this._options);

	  return render(this, dom, options);
	};

	/**
	 * $.text(dom)
	 */

	exports.text = function(elems) {
	  if (!elems) return '';

	  var ret = '',
	      len = elems.length,
	      elem;

	  for (var i = 0; i < len; i++) {
	    elem = elems[i];
	    if (elem.type === 'text') ret += elem.data;
	    else if (elem.children && elem.type !== 'comment') {
	      ret += exports.text(elem.children);
	    }
	  }

	  return ret;
	};

	/**
	 * $.parseHTML(data [, context ] [, keepScripts ])
	 * Parses a string into an array of DOM nodes. The `context` argument has no
	 * meaning for Cheerio, but it is maintained for API compatibility with jQuery.
	 */
	exports.parseHTML = function(data, context, keepScripts) {
	  var parsed;

	  if (!data || typeof data !== 'string') {
	    return null;
	  }

	  if (typeof context === 'boolean') {
	    keepScripts = context;
	  }

	  parsed = this.load(data);
	  if (!keepScripts) {
	    parsed('script').remove();
	  }

	  // The `children` array is used by Cheerio internally to group elements that
	  // share the same parents. When nodes created through `parseHTML` are
	  // inserted into previously-existing DOM structures, they will be removed
	  // from the `children` array. The results of `parseHTML` should remain
	  // constant across these operations, so a shallow copy should be returned.
	  return parsed.root()[0].children.slice();
	};

	/**
	 * $.root()
	 */
	exports.root = function() {
	  return this(this._root);
	};

	/**
	 * $.contains()
	 */
	exports.contains = function(container, contained) {

	  // According to the jQuery API, an element does not "contain" itself
	  if (contained === container) {
	    return false;
	  }

	  // Step up the descendants, stopping when the root element is reached
	  // (signaled by `.parent` returning a reference to the same object)
	  while (contained && contained !== contained.parent) {
	    contained = contained.parent;
	    if (contained === container) {
	      return true;
	    }
	  }

	  return false;
	};


/***/ },

/***/ 1152:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = CSSselect;

	var Pseudos       = __webpack_require__(1153),
	    DomUtils      = __webpack_require__(1131),
	    findOne       = DomUtils.findOne,
	    findAll       = DomUtils.findAll,
	    getChildren   = DomUtils.getChildren,
	    removeSubsets = DomUtils.removeSubsets,
	    falseFunc     = __webpack_require__(1157).falseFunc,
	    compile       = __webpack_require__(1159),
	    compileUnsafe = compile.compileUnsafe,
	    compileToken  = compile.compileToken;

	function getSelectorFunc(searchFunc){
		return function select(query, elems, options){
	        if(typeof query !== "function") query = compileUnsafe(query, options, elems);
	        if(!Array.isArray(elems)) elems = getChildren(elems);
			else elems = removeSubsets(elems);
			return searchFunc(query, elems);
		};
	}

	var selectAll = getSelectorFunc(function selectAll(query, elems){
		return (query === falseFunc || !elems || elems.length === 0) ? [] : findAll(query, elems);
	});

	var selectOne = getSelectorFunc(function selectOne(query, elems){
		return (query === falseFunc || !elems || elems.length === 0) ? null : findOne(query, elems);
	});

	function is(elem, query, options){
		return (typeof query === "function" ? query : compile(query, options))(elem);
	}

	/*
		the exported interface
	*/
	function CSSselect(query, elems, options){
		return selectAll(query, elems, options);
	}

	CSSselect.compile = compile;
	CSSselect.filters = Pseudos.filters;
	CSSselect.pseudos = Pseudos.pseudos;

	CSSselect.selectAll = selectAll;
	CSSselect.selectOne = selectOne;

	CSSselect.is = is;

	//legacy methods (might be removed)
	CSSselect.parse = compile;
	CSSselect.iterate = selectAll;

	//hooks
	CSSselect._compileUnsafe = compileUnsafe;
	CSSselect._compileToken = compileToken;


/***/ },

/***/ 1153:
/***/ function(module, exports, __webpack_require__) {

	/*
		pseudo selectors

		---

		they are available in two forms:
		* filters called when the selector
		  is compiled and return a function
		  that needs to return next()
		* pseudos get called on execution
		  they need to return a boolean
	*/

	var DomUtils    = __webpack_require__(1131),
	    isTag       = DomUtils.isTag,
	    getText     = DomUtils.getText,
	    getParent   = DomUtils.getParent,
	    getChildren = DomUtils.getChildren,
	    getSiblings = DomUtils.getSiblings,
	    hasAttrib   = DomUtils.hasAttrib,
	    getName     = DomUtils.getName,
	    getAttribute= DomUtils.getAttributeValue,
	    getNCheck   = __webpack_require__(1154),
	    checkAttrib = __webpack_require__(1158).rules.equals,
	    BaseFuncs   = __webpack_require__(1157),
	    trueFunc    = BaseFuncs.trueFunc,
	    falseFunc   = BaseFuncs.falseFunc;

	//helper methods
	function getFirstElement(elems){
		for(var i = 0; elems && i < elems.length; i++){
			if(isTag(elems[i])) return elems[i];
		}
	}

	function getAttribFunc(name, value){
		var data = {name: name, value: value};
		return function attribFunc(next){
			return checkAttrib(next, data);
		};
	}

	function getChildFunc(next){
		return function(elem){
			return !!getParent(elem) && next(elem);
		};
	}

	var filters = {
		contains: function(next, text){
			return function contains(elem){
				return next(elem) && getText(elem).indexOf(text) >= 0;
			};
		},
		icontains: function(next, text){
			var itext = text.toLowerCase();
			return function icontains(elem){
				return next(elem) &&
					getText(elem).toLowerCase().indexOf(itext) >= 0;
			};
		},

		//location specific methods
		"nth-child": function(next, rule){
			var func = getNCheck(rule);

			if(func === falseFunc) return func;
			if(func === trueFunc)  return getChildFunc(next);

			return function nthChild(elem){
				var siblings = getSiblings(elem);

				for(var i = 0, pos = 0; i < siblings.length; i++){
					if(isTag(siblings[i])){
						if(siblings[i] === elem) break;
						else pos++;
					}
				}

				return func(pos) && next(elem);
			};
		},
		"nth-last-child": function(next, rule){
			var func = getNCheck(rule);

			if(func === falseFunc) return func;
			if(func === trueFunc)  return getChildFunc(next);

			return function nthLastChild(elem){
				var siblings = getSiblings(elem);

				for(var pos = 0, i = siblings.length - 1; i >= 0; i--){
					if(isTag(siblings[i])){
						if(siblings[i] === elem) break;
						else pos++;
					}
				}

				return func(pos) && next(elem);
			};
		},
		"nth-of-type": function(next, rule){
			var func = getNCheck(rule);

			if(func === falseFunc) return func;
			if(func === trueFunc)  return getChildFunc(next);

			return function nthOfType(elem){
				var siblings = getSiblings(elem);

				for(var pos = 0, i = 0; i < siblings.length; i++){
					if(isTag(siblings[i])){
						if(siblings[i] === elem) break;
						if(getName(siblings[i]) === getName(elem)) pos++;
					}
				}

				return func(pos) && next(elem);
			};
		},
		"nth-last-of-type": function(next, rule){
			var func = getNCheck(rule);

			if(func === falseFunc) return func;
			if(func === trueFunc)  return getChildFunc(next);

			return function nthLastOfType(elem){
				var siblings = getSiblings(elem);

				for(var pos = 0, i = siblings.length - 1; i >= 0; i--){
					if(isTag(siblings[i])){
						if(siblings[i] === elem) break;
						if(getName(siblings[i]) === getName(elem)) pos++;
					}
				}

				return func(pos) && next(elem);
			};
		},

	    //TODO determine the actual root element
	    root: function(next){
	        return function(elem){
	            return !getParent(elem) && next(elem);
	        };
	    },

	    scope: function(next, rule, options, context){
	        if(!context || context.length === 0){
	            //equivalent to :root
	            return filters.root(next);
	        }

	        if(context.length === 1){
	            //NOTE: can't be unpacked, as :has uses this for side-effects
	            return function(elem){
	                return context[0] === elem && next(elem);
	            };
	        }

	        return function(elem){
	            return context.indexOf(elem) >= 0 && next(elem);
	        };
	    },

		//jQuery extensions (others follow as pseudos)
		checkbox: getAttribFunc("type", "checkbox"),
		file: getAttribFunc("type", "file"),
		password: getAttribFunc("type", "password"),
		radio: getAttribFunc("type", "radio"),
		reset: getAttribFunc("type", "reset"),
		image: getAttribFunc("type", "image"),
		submit: getAttribFunc("type", "submit")
	};

	//while filters are precompiled, pseudos get called when they are needed
	var pseudos = {
		empty: function(elem){
			return !getChildren(elem).some(function(elem){
				return isTag(elem) || elem.type === "text";
			});
		},

		"first-child": function(elem){
			return getFirstElement(getSiblings(elem)) === elem;
		},
		"last-child": function(elem){
			var siblings = getSiblings(elem);

			for(var i = siblings.length - 1; i >= 0; i--){
				if(siblings[i] === elem) return true;
				if(isTag(siblings[i])) break;
			}

			return false;
		},
		"first-of-type": function(elem){
			var siblings = getSiblings(elem);

			for(var i = 0; i < siblings.length; i++){
				if(isTag(siblings[i])){
					if(siblings[i] === elem) return true;
					if(getName(siblings[i]) === getName(elem)) break;
				}
			}

			return false;
		},
		"last-of-type": function(elem){
			var siblings = getSiblings(elem);

			for(var i = siblings.length-1; i >= 0; i--){
				if(isTag(siblings[i])){
					if(siblings[i] === elem) return true;
					if(getName(siblings[i]) === getName(elem)) break;
				}
			}

			return false;
		},
		"only-of-type": function(elem){
			var siblings = getSiblings(elem);

			for(var i = 0, j = siblings.length; i < j; i++){
				if(isTag(siblings[i])){
					if(siblings[i] === elem) continue;
					if(getName(siblings[i]) === getName(elem)) return false;
				}
			}

			return true;
		},
		"only-child": function(elem){
			var siblings = getSiblings(elem);

			for(var i = 0; i < siblings.length; i++){
				if(isTag(siblings[i]) && siblings[i] !== elem) return false;
			}

			return true;
		},

		//:matches(a, area, link)[href]
		link: function(elem){
			return hasAttrib(elem, "href");
		},
		visited: falseFunc, //seems to be a valid implementation
		//TODO: :any-link once the name is finalized (as an alias of :link)

		//forms
		//to consider: :target

		//:matches([selected], select:not([multiple]):not(> option[selected]) > option:first-of-type)
		selected: function(elem){
			if(hasAttrib(elem, "selected")) return true;
			else if(getName(elem) !== "option") return false;

			//the first <option> in a <select> is also selected
			var parent = getParent(elem);

			if(
				!parent ||
				getName(parent) !== "select" ||
				hasAttrib(parent, "multiple")
			) return false;

			var siblings = getChildren(parent),
				sawElem  = false;

			for(var i = 0; i < siblings.length; i++){
				if(isTag(siblings[i])){
					if(siblings[i] === elem){
						sawElem = true;
					} else if(!sawElem){
						return false;
					} else if(hasAttrib(siblings[i], "selected")){
						return false;
					}
				}
			}

			return sawElem;
		},
		//https://html.spec.whatwg.org/multipage/scripting.html#disabled-elements
		//:matches(
		//  :matches(button, input, select, textarea, menuitem, optgroup, option)[disabled],
		//  optgroup[disabled] > option),
		// fieldset[disabled] * //TODO not child of first <legend>
		//)
		disabled: function(elem){
			return hasAttrib(elem, "disabled");
		},
		enabled: function(elem){
			return !hasAttrib(elem, "disabled");
		},
		//:matches(:matches(:radio, :checkbox)[checked], :selected) (TODO menuitem)
		checked: function(elem){
			return hasAttrib(elem, "checked") || pseudos.selected(elem);
		},
		//:matches(input, select, textarea)[required]
		required: function(elem){
			return hasAttrib(elem, "required");
		},
		//:matches(input, select, textarea):not([required])
		optional: function(elem){
			return !hasAttrib(elem, "required");
		},

		//jQuery extensions

		//:not(:empty)
		parent: function(elem){
			return !pseudos.empty(elem);
		},
		//:matches(h1, h2, h3, h4, h5, h6)
		header: function(elem){
			var name = getName(elem);
			return name === "h1" ||
			       name === "h2" ||
			       name === "h3" ||
			       name === "h4" ||
			       name === "h5" ||
			       name === "h6";
		},

		//:matches(button, input[type=button])
		button: function(elem){
			var name = getName(elem);
			return name === "button" ||
			       name === "input" &&
			       getAttribute(elem, "type") === "button";
		},
		//:matches(input, textarea, select, button)
		input: function(elem){
			var name = getName(elem);
			return name === "input" ||
			       name === "textarea" ||
			       name === "select" ||
			       name === "button";
		},
		//input:matches(:not([type!='']), [type='text' i])
		text: function(elem){
			var attr;
			return getName(elem) === "input" && (
				!(attr = getAttribute(elem, "type")) ||
				attr.toLowerCase() === "text"
			);
		}
	};

	function verifyArgs(func, name, subselect){
		if(subselect === null){
			if(func.length > 1 && name !== "scope"){
				throw new SyntaxError("pseudo-selector :" + name + " requires an argument");
			}
		} else {
			if(func.length === 1){
				throw new SyntaxError("pseudo-selector :" + name + " doesn't have any arguments");
			}
		}
	}

	//FIXME this feels hacky
	var re_CSS3 = /^(?:(?:nth|last|first|only)-(?:child|of-type)|root|empty|(?:en|dis)abled|checked|not)$/;

	module.exports = {
		compile: function(next, data, options, context){
			var name = data.name,
				subselect = data.data;

			if(options && options.strict && !re_CSS3.test(name)){
				throw SyntaxError(":" + name + " isn't part of CSS3");
			}

			if(typeof filters[name] === "function"){
				verifyArgs(filters[name], name,  subselect);
				return filters[name](next, subselect, options, context);
			} else if(typeof pseudos[name] === "function"){
				var func = pseudos[name];
				verifyArgs(func, name, subselect);

				if(next === trueFunc) return func;

				return function pseudoArgs(elem){
					return func(elem, subselect) && next(elem);
				};
			} else {
				throw new SyntaxError("unmatched pseudo-class :" + name);
			}
		},
		filters: filters,
		pseudos: pseudos
	};


/***/ },

/***/ 1154:
/***/ function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(1155),
	    compile = __webpack_require__(1156);

	module.exports = function nthCheck(formula){
		return compile(parse(formula));
	};

	module.exports.parse = parse;
	module.exports.compile = compile;

/***/ },

/***/ 1155:
/***/ function(module, exports) {

	module.exports = parse;

	//following http://www.w3.org/TR/css3-selectors/#nth-child-pseudo

	//[ ['-'|'+']? INTEGER? {N} [ S* ['-'|'+'] S* INTEGER ]?
	var re_nthElement = /^([+\-]?\d*n)?\s*(?:([+\-]?)\s*(\d+))?$/;

	/*
		parses a nth-check formula, returns an array of two numbers
	*/
	function parse(formula){
		formula = formula.trim().toLowerCase();

		if(formula === "even"){
			return [2, 0];
		} else if(formula === "odd"){
			return [2, 1];
		} else {
			var parsed = formula.match(re_nthElement);

			if(!parsed){
				throw new SyntaxError("n-th rule couldn't be parsed ('" + formula + "')");
			}

			var a;

			if(parsed[1]){
				a = parseInt(parsed[1], 10);
				if(isNaN(a)){
					if(parsed[1].charAt(0) === "-") a = -1;
					else a = 1;
				}
			} else a = 0;

			return [
				a,
				parsed[3] ? parseInt((parsed[2] || "") + parsed[3], 10) : 0
			];
		}
	}


/***/ },

/***/ 1156:
/***/ function(module, exports, __webpack_require__) {

	module.exports = compile;

	var BaseFuncs = __webpack_require__(1157),
	    trueFunc  = BaseFuncs.trueFunc,
	    falseFunc = BaseFuncs.falseFunc;

	/*
		returns a function that checks if an elements index matches the given rule
		highly optimized to return the fastest solution
	*/
	function compile(parsed){
		var a = parsed[0],
		    b = parsed[1] - 1;

		//when b <= 0, a*n won't be possible for any matches when a < 0
		//besides, the specification says that no element is matched when a and b are 0
		if(b < 0 && a <= 0) return falseFunc;

		//when a is in the range -1..1, it matches any element (so only b is checked)
		if(a ===-1) return function(pos){ return pos <= b; };
		if(a === 0) return function(pos){ return pos === b; };
		//when b <= 0 and a === 1, they match any element
		if(a === 1) return b < 0 ? trueFunc : function(pos){ return pos >= b; };

		//when a > 0, modulo can be used to check if there is a match
		var bMod = b % a;
		if(bMod < 0) bMod += a;

		if(a > 1){
			return function(pos){
				return pos >= b && pos % a === bMod;
			};
		}

		a *= -1; //make `a` positive

		return function(pos){
			return pos <= b && pos % a === bMod;
		};
	}

/***/ },

/***/ 1157:
/***/ function(module, exports) {

	module.exports = {
		trueFunc: function trueFunc(){
			return true;
		},
		falseFunc: function falseFunc(){
			return false;
		}
	};

/***/ },

/***/ 1158:
/***/ function(module, exports, __webpack_require__) {

	var DomUtils  = __webpack_require__(1131),
	    hasAttrib = DomUtils.hasAttrib,
	    getAttributeValue = DomUtils.getAttributeValue,
	    falseFunc = __webpack_require__(1157).falseFunc;

	//https://github.com/slevithan/XRegExp/blob/master/src/xregexp.js#L469
	var reChars = /[-[\]{}()*+?.,\\^$|#\s]/g;

	/*
		attribute selectors
	*/

	var attributeRules = {
		__proto__: null,
		equals: function(next, data){
			var name  = data.name,
			    value = data.value;

			if(data.ignoreCase){
				value = value.toLowerCase();

				return function equalsIC(elem){
					var attr = getAttributeValue(elem, name);
					return attr != null && attr.toLowerCase() === value && next(elem);
				};
			}

			return function equals(elem){
				return getAttributeValue(elem, name) === value && next(elem);
			};
		},
		hyphen: function(next, data){
			var name  = data.name,
			    value = data.value,
			    len = value.length;

			if(data.ignoreCase){
				value = value.toLowerCase();

				return function hyphenIC(elem){
					var attr = getAttributeValue(elem, name);
					return attr != null &&
							(attr.length === len || attr.charAt(len) === "-") &&
							attr.substr(0, len).toLowerCase() === value &&
							next(elem);
				};
			}

			return function hyphen(elem){
				var attr = getAttributeValue(elem, name);
				return attr != null &&
						attr.substr(0, len) === value &&
						(attr.length === len || attr.charAt(len) === "-") &&
						next(elem);
			};
		},
		element: function(next, data){
			var name = data.name,
			    value = data.value;

			if(/\s/.test(value)){
				return falseFunc;
			}

			value = value.replace(reChars, "\\$&");

			var pattern = "(?:^|\\s)" + value + "(?:$|\\s)",
			    flags = data.ignoreCase ? "i" : "",
			    regex = new RegExp(pattern, flags);

			return function element(elem){
				var attr = getAttributeValue(elem, name);
				return attr != null && regex.test(attr) && next(elem);
			};
		},
		exists: function(next, data){
			var name = data.name;
			return function exists(elem){
				return hasAttrib(elem, name) && next(elem);
			};
		},
		start: function(next, data){
			var name  = data.name,
			    value = data.value,
			    len = value.length;

			if(len === 0){
				return falseFunc;
			}
			
			if(data.ignoreCase){
				value = value.toLowerCase();

				return function startIC(elem){
					var attr = getAttributeValue(elem, name);
					return attr != null && attr.substr(0, len).toLowerCase() === value && next(elem);
				};
			}

			return function start(elem){
				var attr = getAttributeValue(elem, name);
				return attr != null && attr.substr(0, len) === value && next(elem);
			};
		},
		end: function(next, data){
			var name  = data.name,
			    value = data.value,
			    len   = -value.length;

			if(len === 0){
				return falseFunc;
			}

			if(data.ignoreCase){
				value = value.toLowerCase();

				return function endIC(elem){
					var attr = getAttributeValue(elem, name);
					return attr != null && attr.substr(len).toLowerCase() === value && next(elem);
				};
			}

			return function end(elem){
				var attr = getAttributeValue(elem, name);
				return attr != null && attr.substr(len) === value && next(elem);
			};
		},
		any: function(next, data){
			var name  = data.name,
			    value = data.value;

			if(value === ""){
				return falseFunc;
			}

			if(data.ignoreCase){
				var regex = new RegExp(value.replace(reChars, "\\$&"), "i");

				return function anyIC(elem){
					var attr = getAttributeValue(elem, name);
					return attr != null && regex.test(attr) && next(elem);
				};
			}

			return function any(elem){
				var attr = getAttributeValue(elem, name);
				return attr != null && attr.indexOf(value) >= 0 && next(elem);
			};
		},
		not: function(next, data){
			var name  = data.name,
			    value = data.value;

			if(value === ""){
				return function notEmpty(elem){
					return !!getAttributeValue(elem, name) && next(elem);
				};
			} else if(data.ignoreCase){
				value = value.toLowerCase();

				return function notIC(elem){
					var attr = getAttributeValue(elem, name);
					return attr != null && attr.toLowerCase() !== value && next(elem);
				};
			}

			return function not(elem){
				return getAttributeValue(elem, name) !== value && next(elem);
			};
		}
	};

	module.exports = {
		compile: function(next, data, options){
			if(options && options.strict && (
				data.ignoreCase || data.action === "not"
			)) throw SyntaxError("Unsupported attribute selector");
			return attributeRules[data.action](next, data);
		},
		rules: attributeRules
	};


/***/ },

/***/ 1159:
/***/ function(module, exports, __webpack_require__) {

	/*
		compiles a selector to an executable function
	*/

	module.exports = compile;
	module.exports.compileUnsafe = compileUnsafe;
	module.exports.compileToken = compileToken;

	var parse       = __webpack_require__(1160),
	    DomUtils    = __webpack_require__(1131),
	    isTag       = DomUtils.isTag,
	    Rules       = __webpack_require__(1161),
	    sortRules   = __webpack_require__(1162),
	    BaseFuncs   = __webpack_require__(1157),
	    trueFunc    = BaseFuncs.trueFunc,
	    falseFunc   = BaseFuncs.falseFunc,
	    procedure   = __webpack_require__(1163);

	function compile(selector, options, context){
		var next = compileUnsafe(selector, options, context);
		return wrap(next);
	}

	function wrap(next){
		return function base(elem){
			return isTag(elem) && next(elem);
		};
	}

	function compileUnsafe(selector, options, context){
		var token = parse(selector, options);
		return compileToken(token, options, context);
	}

	function includesScopePseudo(t){
	    return t.type === "pseudo" && (
	        t.name === "scope" || (
	            Array.isArray(t.data) &&
	            t.data.some(function(data){
	                return data.some(includesScopePseudo);
	            })
	        )
	    );
	}

	var DESCENDANT_TOKEN = {type: "descendant"},
	    SCOPE_TOKEN = {type: "pseudo", name: "scope"},
	    PLACEHOLDER_ELEMENT = {},
	    getParent = DomUtils.getParent;

	//CSS 4 Spec (Draft): 3.3.1. Absolutizing a Scope-relative Selector
	//http://www.w3.org/TR/selectors4/#absolutizing
	function absolutize(token, context){
	    //TODO better check if context is document
	    var hasContext = !!context && !!context.length && context.every(function(e){
	        return e === PLACEHOLDER_ELEMENT || !!getParent(e);
	    });


	    token.forEach(function(t){
	        if(t.length > 0 && isTraversal(t[0]) && t[0].type !== "descendant"){
	            //don't return in else branch
	        } else if(hasContext && !includesScopePseudo(t)){
	            t.unshift(DESCENDANT_TOKEN);
	        } else {
	            return;
	        }

	        t.unshift(SCOPE_TOKEN);
	    });
	}

	function compileToken(token, options, context){
	    token = token.filter(function(t){ return t.length > 0; });

		token.forEach(sortRules);

		var isArrayContext = Array.isArray(context);

	    context = (options && options.context) || context;

	    if(context && !isArrayContext) context = [context];

	    absolutize(token, context);

		return token
			.map(function(rules){ return compileRules(rules, options, context, isArrayContext); })
			.reduce(reduceRules, falseFunc);
	}

	function isTraversal(t){
		return procedure[t.type] < 0;
	}

	function compileRules(rules, options, context, isArrayContext){
		var acceptSelf = (isArrayContext && rules[0].name === "scope" && rules[1].type === "descendant");
		return rules.reduce(function(func, rule, index){
			if(func === falseFunc) return func;
			return Rules[rule.type](func, rule, options, context, acceptSelf && index === 1);
		}, options && options.rootFunc || trueFunc);
	}

	function reduceRules(a, b){
		if(b === falseFunc || a === trueFunc){
			return a;
		}
		if(a === falseFunc || b === trueFunc){
			return b;
		}

		return function combine(elem){
			return a(elem) || b(elem);
		};
	}

	//:not, :has and :matches have to compile selectors
	//doing this in lib/pseudos.js would lead to circular dependencies,
	//so we add them here

	var Pseudos     = __webpack_require__(1153),
	    filters     = Pseudos.filters,
	    existsOne   = DomUtils.existsOne,
	    isTag       = DomUtils.isTag,
	    getChildren = DomUtils.getChildren;


	function containsTraversal(t){
		return t.some(isTraversal);
	}

	filters.not = function(next, token, options, context){
		var opts = {
		    	xmlMode: !!(options && options.xmlMode),
		    	strict: !!(options && options.strict)
		    };

		if(opts.strict){
			if(token.length > 1 || token.some(containsTraversal)){
				throw new SyntaxError("complex selectors in :not aren't allowed in strict mode");
			}
		}

	    var func = compileToken(token, opts, context);

		if(func === falseFunc) return next;
		if(func === trueFunc)  return falseFunc;

		return function(elem){
			return !func(elem) && next(elem);
		};
	};

	filters.has = function(next, token, options){
		var opts = {
			xmlMode: !!(options && options.xmlMode),
			strict: !!(options && options.strict)
		};

	    //FIXME: Uses an array as a pointer to the current element (side effects)
	    var context = token.some(containsTraversal) ? [PLACEHOLDER_ELEMENT] : null;

		var func = compileToken(token, opts, context);

		if(func === falseFunc) return falseFunc;
		if(func === trueFunc)  return function(elem){
				return getChildren(elem).some(isTag) && next(elem);
			};

		func = wrap(func);

	    if(context){
	        return function has(elem){
			return next(elem) && (
	                (context[0] = elem), existsOne(func, getChildren(elem))
	            );
		};
	    }

	    return function has(elem){
			return next(elem) && existsOne(func, getChildren(elem));
		};
	};

	filters.matches = function(next, token, options, context){
		var opts = {
			xmlMode: !!(options && options.xmlMode),
			strict: !!(options && options.strict),
			rootFunc: next
		};

		return compileToken(token, opts, context);
	};


/***/ },

/***/ 1160:
/***/ function(module, exports) {

	"use strict";

	module.exports = parse;

	var re_name = /^(?:\\.|[\w\-\u00c0-\uFFFF])+/,
	    re_escape = /\\([\da-f]{1,6}\s?|(\s)|.)/ig,
	    //modified version of https://github.com/jquery/sizzle/blob/master/src/sizzle.js#L87
	    re_attr = /^\s*((?:\\.|[\w\u00c0-\uFFFF\-])+)\s*(?:(\S?)=\s*(?:(['"])(.*?)\3|(#?(?:\\.|[\w\u00c0-\uFFFF\-])*)|)|)\s*(i)?\]/;

	var actionTypes = {
		__proto__: null,
		"undefined": "exists",
		"":  "equals",
		"~": "element",
		"^": "start",
		"$": "end",
		"*": "any",
		"!": "not",
		"|": "hyphen"
	};

	var simpleSelectors = {
		__proto__: null,
		">": "child",
		"<": "parent",
		"~": "sibling",
		"+": "adjacent"
	};

	var attribSelectors = {
		__proto__: null,
		"#": ["id", "equals"],
		".": ["class", "element"]
	};

	//pseudos, whose data-property is parsed as well
	var unpackPseudos = {
		__proto__: null,
		"has": true,
		"not": true,
		"matches": true
	};

	var stripQuotesFromPseudos = {
		__proto__: null,
		"contains": true,
		"icontains": true
	};

	var quotes = {
		__proto__: null,
		"\"": true,
		"'": true
	};

	//unescape function taken from https://github.com/jquery/sizzle/blob/master/src/sizzle.js#L139
	function funescape( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			// BMP codepoint
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	}

	function unescapeCSS(str){
		return str.replace(re_escape, funescape);
	}

	function isWhitespace(c){
		return c === " " || c === "\n" || c === "\t" || c === "\f" || c === "\r";
	}

	function parse(selector, options){
		var subselects = [];

		selector = parseSelector(subselects, selector + "", options);

		if(selector !== ""){
			throw new SyntaxError("Unmatched selector: " + selector);
		}

		return subselects;
	}

	function parseSelector(subselects, selector, options){
		var tokens = [],
			sawWS = false,
			data, firstChar, name, quot;

		function getName(){
			var sub = selector.match(re_name)[0];
			selector = selector.substr(sub.length);
			return unescapeCSS(sub);
		}

		function stripWhitespace(start){
			while(isWhitespace(selector.charAt(start))) start++;
			selector = selector.substr(start);
		}

		stripWhitespace(0);

		while(selector !== ""){
			firstChar = selector.charAt(0);

			if(isWhitespace(firstChar)){
				sawWS = true;
				stripWhitespace(1);
			} else if(firstChar in simpleSelectors){
				tokens.push({type: simpleSelectors[firstChar]});
				sawWS = false;

				stripWhitespace(1);
			} else if(firstChar === ","){
				if(tokens.length === 0){
					throw new SyntaxError("empty sub-selector");
				}
				subselects.push(tokens);
				tokens = [];
				sawWS = false;
				stripWhitespace(1);
			} else {
				if(sawWS){
					if(tokens.length > 0){
						tokens.push({type: "descendant"});
					}
					sawWS = false;
				}

				if(firstChar === "*"){
					selector = selector.substr(1);
					tokens.push({type: "universal"});
				} else if(firstChar in attribSelectors){
					selector = selector.substr(1);
					tokens.push({
						type: "attribute",
						name: attribSelectors[firstChar][0],
						action: attribSelectors[firstChar][1],
						value: getName(),
						ignoreCase: false
					});
				} else if(firstChar === "["){
					selector = selector.substr(1);
					data = selector.match(re_attr);
					if(!data){
						throw new SyntaxError("Malformed attribute selector: " + selector);
					}
					selector = selector.substr(data[0].length);
					name = unescapeCSS(data[1]);

					if(
						!options || (
							"lowerCaseAttributeNames" in options ?
								options.lowerCaseAttributeNames :
								!options.xmlMode
						)
					){
						name = name.toLowerCase();
					}

					tokens.push({
						type: "attribute",
						name: name,
						action: actionTypes[data[2]],
						value: unescapeCSS(data[4] || data[5] || ""),
						ignoreCase: !!data[6]
					});

				} else if(firstChar === ":"){
					if(selector.charAt(1) === ":"){
						selector = selector.substr(2);
						tokens.push({type: "pseudo-element", name: getName().toLowerCase()});
						continue;
					}

					selector = selector.substr(1);

					name = getName().toLowerCase();
					data = null;

					if(selector.charAt(0) === "("){
						if(name in unpackPseudos){
							quot = selector.charAt(1);
							var quoted = quot in quotes;

							selector = selector.substr(quoted + 1);

							data = [];
							selector = parseSelector(data, selector, options);

							if(quoted){
								if(selector.charAt(0) !== quot){
									throw new SyntaxError("unmatched quotes in :" + name);
								} else {
									selector = selector.substr(1);
								}
							}

							if(selector.charAt(0) !== ")"){
								throw new SyntaxError("missing closing parenthesis in :" + name + " " + selector);
							}

							selector = selector.substr(1);
						} else {
							var pos = 1, counter = 1;

							for(; counter > 0 && pos < selector.length; pos++){
								if(selector.charAt(pos) === "(") counter++;
								else if(selector.charAt(pos) === ")") counter--;
							}

							if(counter){
								throw new SyntaxError("parenthesis not matched");
							}

							data = selector.substr(1, pos - 2);
							selector = selector.substr(pos);

							if(name in stripQuotesFromPseudos){
								quot = data.charAt(0);

								if(quot === data.slice(-1) && quot in quotes){
									data = data.slice(1, -1);
								}

								data = unescapeCSS(data);
							}
						}
					}

					tokens.push({type: "pseudo", name: name, data: data});
				} else if(re_name.test(selector)){
					name = getName();

					if(!options || ("lowerCaseTags" in options ? options.lowerCaseTags : !options.xmlMode)){
						name = name.toLowerCase();
					}

					tokens.push({type: "tag", name: name});
				} else {
					if(tokens.length && tokens[tokens.length - 1].type === "descendant"){
						tokens.pop();
					}
					addToken(subselects, tokens);
					return selector;
				}
			}
		}

		addToken(subselects, tokens);

		return selector;
	}

	function addToken(subselects, tokens){
		if(subselects.length > 0 && tokens.length === 0){
			throw new SyntaxError("empty sub-selector");
		}

		subselects.push(tokens);
	}


/***/ },

/***/ 1161:
/***/ function(module, exports, __webpack_require__) {

	var DomUtils    = __webpack_require__(1131),
	    isTag       = DomUtils.isTag,
	    getParent   = DomUtils.getParent,
	    getChildren = DomUtils.getChildren,
	    getSiblings = DomUtils.getSiblings,
	    getName     = DomUtils.getName;

	/*
		all available rules
	*/
	module.exports = {
		__proto__: null,

		attribute: __webpack_require__(1158).compile,
		pseudo: __webpack_require__(1153).compile,

		//tags
		tag: function(next, data){
			var name = data.name;
			return function tag(elem){
				return getName(elem) === name && next(elem);
			};
		},

		//traversal
		descendant: function(next, rule, options, context, acceptSelf){
			return function descendant(elem){

				if (acceptSelf && next(elem)) return true;

				var found = false;

				while(!found && (elem = getParent(elem))){
					found = next(elem);
				}

				return found;
			};
		},
		parent: function(next, data, options){
			if(options && options.strict) throw SyntaxError("Parent selector isn't part of CSS3");

			return function parent(elem){
				return getChildren(elem).some(test);
			};

			function test(elem){
				return isTag(elem) && next(elem);
			}
		},
		child: function(next){
			return function child(elem){
				var parent = getParent(elem);
				return !!parent && next(parent);
			};
		},
		sibling: function(next){
			return function sibling(elem){
				var siblings = getSiblings(elem);

				for(var i = 0; i < siblings.length; i++){
					if(isTag(siblings[i])){
						if(siblings[i] === elem) break;
						if(next(siblings[i])) return true;
					}
				}

				return false;
			};
		},
		adjacent: function(next){
			return function adjacent(elem){
				var siblings = getSiblings(elem),
				    lastElement;

				for(var i = 0; i < siblings.length; i++){
					if(isTag(siblings[i])){
						if(siblings[i] === elem) break;
						lastElement = siblings[i];
					}
				}

				return !!lastElement && next(lastElement);
			};
		},
		universal: function(next){
			return next;
		}
	};

/***/ },

/***/ 1162:
/***/ function(module, exports, __webpack_require__) {

	module.exports = sortByProcedure;

	/*
		sort the parts of the passed selector,
		as there is potential for optimization
		(some types of selectors are faster than others)
	*/

	var procedure = __webpack_require__(1163);

	var attributes = {
		__proto__: null,
		exists: 10,
		equals: 8,
		not: 7,
		start: 6,
		end: 6,
		any: 5,
		hyphen: 4,
		element: 4
	};

	function sortByProcedure(arr){
		var procs = arr.map(getProcedure);
		for(var i = 1; i < arr.length; i++){
			var procNew = procs[i];

			if(procNew < 0) continue;

			for(var j = i - 1; j >= 0 && procNew < procs[j]; j--){
				var token = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = token;
				procs[j + 1] = procs[j];
				procs[j] = procNew;
			}
		}
	}

	function getProcedure(token){
		var proc = procedure[token.type];

		if(proc === procedure.attribute){
			proc = attributes[token.action];

			if(proc === attributes.equals && token.name === "id"){
				//prefer ID selectors (eg. #ID)
				proc = 9;
			}

			if(token.ignoreCase){
				//ignoreCase adds some overhead, prefer "normal" token
				//this is a binary operation, to ensure it's still an int
				proc >>= 1;
			}
		} else if(proc === procedure.pseudo){
			if(!token.data){
				proc = 3;
			} else if(token.name === "has" || token.name === "contains"){
				proc = 0; //expensive in any case
			} else if(token.name === "matches" || token.name === "not"){
				proc = 0;
				for(var i = 0; i < token.data.length; i++){
					//TODO better handling of complex selectors
					if(token.data[i].length !== 1) continue;
					var cur = getProcedure(token.data[i][0]);
					//avoid executing :has or :contains
					if(cur === 0){
						proc = 0;
						break;
					}
					if(cur > proc) proc = cur;
				}
				if(token.data.length > 1 && proc > 0) proc -= 1;
			} else {
				proc = 1;
			}
		}
		return proc;
	}


/***/ },

/***/ 1163:
/***/ function(module, exports) {

	module.exports = {
		"universal": 50,
		"tag": 30,
		"attribute": 1,
		"pseudo": 0,
		"descendant": -1,
		"child": -1,
		"parent": -1,
		"sibling": -1,
		"adjacent": -1
	};

/***/ },

/***/ 1164:
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(669),
	    select = __webpack_require__(1152),
	    utils = __webpack_require__(1149),
	    domEach = utils.domEach,
	    uniqueSort = __webpack_require__(1098).DomUtils.uniqueSort,
	    isTag = utils.isTag;

	exports.find = function(selectorOrHaystack) {
	  var elems = _.reduce(this, function(memo, elem) {
	    return memo.concat(_.filter(elem.children, isTag));
	  }, []);
	  var contains = this.constructor.contains;
	  var haystack;

	  if (selectorOrHaystack && typeof selectorOrHaystack !== 'string') {
	    if (selectorOrHaystack.cheerio) {
	      haystack = selectorOrHaystack.get();
	    } else {
	      haystack = [selectorOrHaystack];
	    }

	    return this._make(haystack.filter(function(elem) {
	      var idx, len;
	      for (idx = 0, len = this.length; idx < len; ++idx) {
	        if (contains(this[idx], elem)) {
	          return true;
	        }
	      }
	    }, this));
	  }

	  var options = {__proto__: this.options, context: this.toArray()};

	  return this._make(select(selectorOrHaystack, elems, options));
	};

	// Get the parent of each element in the current set of matched elements,
	// optionally filtered by a selector.
	exports.parent = function(selector) {
	  var set = [];

	  domEach(this, function(idx, elem) {
	    var parentElem = elem.parent;
	    if (parentElem && set.indexOf(parentElem) < 0) {
	      set.push(parentElem);
	    }
	  });

	  if (arguments.length) {
	    set = exports.filter.call(set, selector, this);
	  }

	  return this._make(set);
	};

	exports.parents = function(selector) {
	  var parentNodes = [];

	  // When multiple DOM elements are in the original set, the resulting set will
	  // be in *reverse* order of the original elements as well, with duplicates
	  // removed.
	  this.get().reverse().forEach(function(elem) {
	    traverseParents(this, elem.parent, selector, Infinity)
	      .forEach(function(node) {
	        if (parentNodes.indexOf(node) === -1) {
	          parentNodes.push(node);
	        }
	      }
	    );
	  }, this);

	  return this._make(parentNodes);
	};

	exports.parentsUntil = function(selector, filter) {
	  var parentNodes = [], untilNode, untilNodes;

	  if (typeof selector === 'string') {
	    untilNode = select(selector, this.parents().toArray(), this.options)[0];
	  } else if (selector && selector.cheerio) {
	    untilNodes = selector.toArray();
	  } else if (selector) {
	    untilNode = selector;
	  }

	  // When multiple DOM elements are in the original set, the resulting set will
	  // be in *reverse* order of the original elements as well, with duplicates
	  // removed.

	  this.toArray().reverse().forEach(function(elem) {
	    while ((elem = elem.parent)) {
	      if ((untilNode && elem !== untilNode) ||
	        (untilNodes && untilNodes.indexOf(elem) === -1) ||
	        (!untilNode && !untilNodes)) {
	        if (isTag(elem) && parentNodes.indexOf(elem) === -1) { parentNodes.push(elem); }
	      } else {
	        break;
	      }
	    }
	  }, this);

	  return this._make(filter ? select(filter, parentNodes, this.options) : parentNodes);
	};

	// For each element in the set, get the first element that matches the selector
	// by testing the element itself and traversing up through its ancestors in the
	// DOM tree.
	exports.closest = function(selector) {
	  var set = [];

	  if (!selector) {
	    return this._make(set);
	  }

	  domEach(this, function(idx, elem) {
	    var closestElem = traverseParents(this, elem, selector, 1)[0];

	    // Do not add duplicate elements to the set
	    if (closestElem && set.indexOf(closestElem) < 0) {
	      set.push(closestElem);
	    }
	  }.bind(this));

	  return this._make(set);
	};

	exports.next = function(selector) {
	  if (!this[0]) { return this; }
	  var elems = [];

	  _.forEach(this, function(elem) {
	    while ((elem = elem.next)) {
	      if (isTag(elem)) {
	        elems.push(elem);
	        return;
	      }
	    }
	  });

	  return selector ?
	    exports.filter.call(elems, selector, this) :
	    this._make(elems);
	};

	exports.nextAll = function(selector) {
	  if (!this[0]) { return this; }
	  var elems = [];

	  _.forEach(this, function(elem) {
	    while ((elem = elem.next)) {
	      if (isTag(elem) && elems.indexOf(elem) === -1) {
	        elems.push(elem);
	      }
	    }
	  });

	  return selector ?
	    exports.filter.call(elems, selector, this) :
	    this._make(elems);
	};

	exports.nextUntil = function(selector, filterSelector) {
	  if (!this[0]) { return this; }
	  var elems = [], untilNode, untilNodes;

	  if (typeof selector === 'string') {
	    untilNode = select(selector, this.nextAll().get(), this.options)[0];
	  } else if (selector && selector.cheerio) {
	    untilNodes = selector.get();
	  } else if (selector) {
	    untilNode = selector;
	  }

	  _.forEach(this, function(elem) {
	    while ((elem = elem.next)) {
	      if ((untilNode && elem !== untilNode) ||
	        (untilNodes && untilNodes.indexOf(elem) === -1) ||
	        (!untilNode && !untilNodes)) {
	        if (isTag(elem) && elems.indexOf(elem) === -1) {
	          elems.push(elem);
	        }
	      } else {
	        break;
	      }
	    }
	  });

	  return filterSelector ?
	    exports.filter.call(elems, filterSelector, this) :
	    this._make(elems);
	};

	exports.prev = function(selector) {
	  if (!this[0]) { return this; }
	  var elems = [];

	  _.forEach(this, function(elem) {
	    while ((elem = elem.prev)) {
	      if (isTag(elem)) {
	        elems.push(elem);
	        return;
	      }
	    }
	  });

	  return selector ?
	    exports.filter.call(elems, selector, this) :
	    this._make(elems);
	};

	exports.prevAll = function(selector) {
	  if (!this[0]) { return this; }
	  var elems = [];

	  _.forEach(this, function(elem) {
	    while ((elem = elem.prev)) {
	      if (isTag(elem) && elems.indexOf(elem) === -1) {
	        elems.push(elem);
	      }
	    }
	  });

	  return selector ?
	    exports.filter.call(elems, selector, this) :
	    this._make(elems);
	};

	exports.prevUntil = function(selector, filterSelector) {
	  if (!this[0]) { return this; }
	  var elems = [], untilNode, untilNodes;

	  if (typeof selector === 'string') {
	    untilNode = select(selector, this.prevAll().get(), this.options)[0];
	  } else if (selector && selector.cheerio) {
	    untilNodes = selector.get();
	  } else if (selector) {
	    untilNode = selector;
	  }

	  _.forEach(this, function(elem) {
	    while ((elem = elem.prev)) {
	      if ((untilNode && elem !== untilNode) ||
	        (untilNodes && untilNodes.indexOf(elem) === -1) ||
	        (!untilNode && !untilNodes)) {
	        if (isTag(elem) && elems.indexOf(elem) === -1) {
	          elems.push(elem);
	        }
	      } else {
	        break;
	      }
	    }
	  });

	  return filterSelector ?
	    exports.filter.call(elems, filterSelector, this) :
	    this._make(elems);
	};

	exports.siblings = function(selector) {
	  var parent = this.parent();

	  var elems = _.filter(
	    parent ? parent.children() : this.siblingsAndMe(),
	    _.bind(function(elem) { return isTag(elem) && !this.is(elem); }, this)
	  );

	  if (selector !== undefined) {
	    return exports.filter.call(elems, selector, this);
	  } else {
	    return this._make(elems);
	  }
	};

	exports.children = function(selector) {

	  var elems = _.reduce(this, function(memo, elem) {
	    return memo.concat(_.filter(elem.children, isTag));
	  }, []);

	  if (selector === undefined) return this._make(elems);

	  return exports.filter.call(elems, selector, this);
	};

	exports.contents = function() {
	  return this._make(_.reduce(this, function(all, elem) {
	    all.push.apply(all, elem.children);
	    return all;
	  }, []));
	};

	exports.each = function(fn) {
	  var i = 0, len = this.length;
	  while (i < len && fn.call(this[i], i, this[i]) !== false) ++i;
	  return this;
	};

	exports.map = function(fn) {
	  return this._make(_.reduce(this, function(memo, el, i) {
	    var val = fn.call(el, i, el);
	    return val == null ? memo : memo.concat(val);
	  }, []));
	};

	var makeFilterMethod = function(filterFn) {
	  return function(match, container) {
	    var testFn;
	    container = container || this;

	    if (typeof match === 'string') {
	      testFn = select.compile(match, container.options);
	    } else if (typeof match === 'function') {
	      testFn = function(el, i) {
	        return match.call(el, i, el);
	      };
	    } else if (match.cheerio) {
	      testFn = match.is.bind(match);
	    } else {
	      testFn = function(el) {
	        return match === el;
	      };
	    }

	    return container._make(filterFn(this, testFn));
	  };
	};

	exports.filter = makeFilterMethod(_.filter);
	exports.not = makeFilterMethod(_.reject);

	exports.has = function(selectorOrHaystack) {
	  var that = this;
	  return exports.filter.call(this, function() {
	    return that._make(this).find(selectorOrHaystack).length > 0;
	  });
	};

	exports.first = function() {
	  return this.length > 1 ? this._make(this[0]) : this;
	};

	exports.last = function() {
	  return this.length > 1 ? this._make(this[this.length - 1]) : this;
	};

	// Reduce the set of matched elements to the one at the specified index.
	exports.eq = function(i) {
	  i = +i;

	  // Use the first identity optimization if possible
	  if (i === 0 && this.length <= 1) return this;

	  if (i < 0) i = this.length + i;
	  return this[i] ? this._make(this[i]) : this._make([]);
	};

	// Retrieve the DOM elements matched by the jQuery object.
	exports.get = function(i) {
	  if (i == null) {
	    return Array.prototype.slice.call(this);
	  } else {
	    return this[i < 0 ? (this.length + i) : i];
	  }
	};

	// Search for a given element from among the matched elements.
	exports.index = function(selectorOrNeedle) {
	  var $haystack, needle;

	  if (arguments.length === 0) {
	    $haystack = this.parent().children();
	    needle = this[0];
	  } else if (typeof selectorOrNeedle === 'string') {
	    $haystack = this._make(selectorOrNeedle);
	    needle = this[0];
	  } else {
	    $haystack = this;
	    needle = selectorOrNeedle.cheerio ? selectorOrNeedle[0] : selectorOrNeedle;
	  }

	  return $haystack.get().indexOf(needle);
	};

	exports.slice = function() {
	  return this._make([].slice.apply(this, arguments));
	};

	function traverseParents(self, elem, selector, limit) {
	  var elems = [];
	  while (elem && elems.length < limit) {
	    if (!selector || exports.filter.call([elem], selector, self).length) {
	      elems.push(elem);
	    }
	    elem = elem.parent;
	  }
	  return elems;
	}

	// End the most recent filtering operation in the current chain and return the
	// set of matched elements to its previous state.
	exports.end = function() {
	  return this.prevObject || this._make([]);
	};

	exports.add = function(other, context) {
	  var selection = this._make(other, context);
	  var contents = uniqueSort(selection.get().concat(this.get()));

	  for (var i = 0; i < contents.length; ++i) {
	    selection[i] = contents[i];
	  }
	  selection.length = contents.length;

	  return selection;
	};

	// Add the previous set of elements on the stack to the current set, optionally
	// filtered by a selector.
	exports.addBack = function(selector) {
	  return this.add(
	    arguments.length ? this.prevObject.filter(selector) : this.prevObject
	  );
	};


/***/ },

/***/ 1165:
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(669),
	    parse = __webpack_require__(1097),
	    $ = __webpack_require__(1151),
	    updateDOM = parse.update,
	    evaluate = parse.evaluate,
	    utils = __webpack_require__(1149),
	    domEach = utils.domEach,
	    cloneDom = utils.cloneDom,
	    isHtml = utils.isHtml,
	    slice = Array.prototype.slice;

	// Create an array of nodes, recursing into arrays and parsing strings if
	// necessary
	exports._makeDomArray = function makeDomArray(elem, clone) {
	  if (elem == null) {
	    return [];
	  } else if (elem.cheerio) {
	    return clone ? cloneDom(elem.get(), elem.options) : elem.get();
	  } else if (Array.isArray(elem)) {
	    return _.flatten(elem.map(function(el) {
	      return this._makeDomArray(el, clone);
	    }, this));
	  } else if (typeof elem === 'string') {
	    return evaluate(elem, this.options);
	  } else {
	    return clone ? cloneDom([elem]) : [elem];
	  }
	};

	var _insert = function(concatenator) {
	  return function() {
	    var elems = slice.call(arguments),
	        lastIdx = this.length - 1;

	    return domEach(this, function(i, el) {
	      var dom, domSrc;

	      if (typeof elems[0] === 'function') {
	        domSrc = elems[0].call(el, i, $.html(el.children));
	      } else {
	        domSrc = elems;
	      }

	      dom = this._makeDomArray(domSrc, i < lastIdx);
	      concatenator(dom, el.children, el);
	    });
	  };
	};

	/*
	 * Modify an array in-place, removing some number of elements and adding new
	 * elements directly following them.
	 *
	 * @param {Array} array Target array to splice.
	 * @param {Number} spliceIdx Index at which to begin changing the array.
	 * @param {Number} spliceCount Number of elements to remove from the array.
	 * @param {Array} newElems Elements to insert into the array.
	 *
	 * @api private
	 */
	var uniqueSplice = function(array, spliceIdx, spliceCount, newElems, parent) {
	  var spliceArgs = [spliceIdx, spliceCount].concat(newElems),
	      prev = array[spliceIdx - 1] || null,
	      next = array[spliceIdx] || null;
	  var idx, len, prevIdx, node, oldParent;

	  // Before splicing in new elements, ensure they do not already appear in the
	  // current array.
	  for (idx = 0, len = newElems.length; idx < len; ++idx) {
	    node = newElems[idx];
	    oldParent = node.parent || node.root;
	    prevIdx = oldParent && oldParent.children.indexOf(newElems[idx]);

	    if (oldParent && prevIdx > -1) {
	      oldParent.children.splice(prevIdx, 1);
	      if (parent === oldParent && spliceIdx > prevIdx) {
	        spliceArgs[0]--;
	      }
	    }

	    node.root = null;
	    node.parent = parent;

	    if (node.prev) {
	      node.prev.next = node.next || null;
	    }

	    if (node.next) {
	      node.next.prev = node.prev || null;
	    }

	    node.prev = newElems[idx - 1] || prev;
	    node.next = newElems[idx + 1] || next;
	  }

	  if (prev) {
	    prev.next = newElems[0];
	  }
	  if (next) {
	    next.prev = newElems[newElems.length - 1];
	  }
	  return array.splice.apply(array, spliceArgs);
	};

	exports.appendTo = function(target) {
	  if (!target.cheerio) {
	    target = this.constructor.call(this.constructor, target, null, this._originalRoot);
	  }

	  target.append(this);

	  return this;
	};

	exports.prependTo = function(target) {
	  if (!target.cheerio) {
	    target = this.constructor.call(this.constructor, target, null, this._originalRoot);
	  }

	  target.prepend(this);

	  return this;
	};

	exports.append = _insert(function(dom, children, parent) {
	  uniqueSplice(children, children.length, 0, dom, parent);
	});

	exports.prepend = _insert(function(dom, children, parent) {
	  uniqueSplice(children, 0, 0, dom, parent);
	});

	exports.wrap = function(wrapper) {
	  var wrapperFn = typeof wrapper === 'function' && wrapper,
	      lastIdx = this.length - 1;

	  _.forEach(this, _.bind(function(el, i) {
	    var parent = el.parent || el.root,
	        siblings = parent.children,
	        dom, index;

	    if (!parent) {
	      return;
	    }

	    if (wrapperFn) {
	      wrapper = wrapperFn.call(el, i);
	    }

	    if (typeof wrapper === 'string' && !isHtml(wrapper)) {
	      wrapper = this.parents().last().find(wrapper).clone();
	    }

	    dom = this._makeDomArray(wrapper, i < lastIdx).slice(0, 1);
	    index = siblings.indexOf(el);

	    updateDOM([el], dom[0]);
	    // The previous operation removed the current element from the `siblings`
	    // array, so the `dom` array can be inserted without removing any
	    // additional elements.
	    uniqueSplice(siblings, index, 0, dom, parent);
	  }, this));

	  return this;
	};

	exports.after = function() {
	  var elems = slice.call(arguments),
	      lastIdx = this.length - 1;

	  domEach(this, function(i, el) {
	    var parent = el.parent || el.root;
	    if (!parent) {
	      return;
	    }

	    var siblings = parent.children,
	        index = siblings.indexOf(el),
	        domSrc, dom;

	    // If not found, move on
	    if (index < 0) return;

	    if (typeof elems[0] === 'function') {
	      domSrc = elems[0].call(el, i, $.html(el.children));
	    } else {
	      domSrc = elems;
	    }
	    dom = this._makeDomArray(domSrc, i < lastIdx);

	    // Add element after `this` element
	    uniqueSplice(siblings, index + 1, 0, dom, parent);
	  });

	  return this;
	};

	exports.insertAfter = function(target) {
	  var clones = [],
	      self = this;
	  if (typeof target === 'string') {
	    target = this.constructor.call(this.constructor, target, null, this._originalRoot);
	  }
	  target = this._makeDomArray(target);
	  self.remove();
	  domEach(target, function(i, el) {
	    var clonedSelf = self._makeDomArray(self.clone());
	    var parent = el.parent || el.root;
	    if (!parent) {
	      return;
	    }

	    var siblings = parent.children,
	        index = siblings.indexOf(el);

	    // If not found, move on
	    if (index < 0) return;

	    // Add cloned `this` element(s) after target element
	    uniqueSplice(siblings, index + 1, 0, clonedSelf, parent);
	    clones.push(clonedSelf);
	  });
	  return this.constructor.call(this.constructor, this._makeDomArray(clones));
	};

	exports.before = function() {
	  var elems = slice.call(arguments),
	      lastIdx = this.length - 1;

	  domEach(this, function(i, el) {
	    var parent = el.parent || el.root;
	    if (!parent) {
	      return;
	    }

	    var siblings = parent.children,
	        index = siblings.indexOf(el),
	        domSrc, dom;

	    // If not found, move on
	    if (index < 0) return;

	    if (typeof elems[0] === 'function') {
	      domSrc = elems[0].call(el, i, $.html(el.children));
	    } else {
	      domSrc = elems;
	    }

	    dom = this._makeDomArray(domSrc, i < lastIdx);

	    // Add element before `el` element
	    uniqueSplice(siblings, index, 0, dom, parent);
	  });

	  return this;
	};

	exports.insertBefore = function(target) {
	  var clones = [],
	      self = this;
	  if (typeof target === 'string') {
	    target = this.constructor.call(this.constructor, target, null, this._originalRoot);
	  }
	  target = this._makeDomArray(target);
	  self.remove();
	  domEach(target, function(i, el) {
	    var clonedSelf = self._makeDomArray(self.clone());
	    var parent = el.parent || el.root;
	    if (!parent) {
	      return;
	    }

	    var siblings = parent.children,
	        index = siblings.indexOf(el);

	    // If not found, move on
	    if (index < 0) return;

	    // Add cloned `this` element(s) after target element
	    uniqueSplice(siblings, index, 0, clonedSelf, parent);
	    clones.push(clonedSelf);
	  });
	  return this.constructor.call(this.constructor, this._makeDomArray(clones));
	};

	/*
	  remove([selector])
	*/
	exports.remove = function(selector) {
	  var elems = this;

	  // Filter if we have selector
	  if (selector)
	    elems = elems.filter(selector);

	  domEach(elems, function(i, el) {
	    var parent = el.parent || el.root;
	    if (!parent) {
	      return;
	    }

	    var siblings = parent.children,
	        index = siblings.indexOf(el);

	    if (index < 0) return;

	    siblings.splice(index, 1);
	    if (el.prev) {
	      el.prev.next = el.next;
	    }
	    if (el.next) {
	      el.next.prev = el.prev;
	    }
	    el.prev = el.next = el.parent = el.root = null;
	  });

	  return this;
	};

	exports.replaceWith = function(content) {
	  var self = this;

	  domEach(this, function(i, el) {
	    var parent = el.parent || el.root;
	    if (!parent) {
	      return;
	    }

	    var siblings = parent.children,
	        dom = self._makeDomArray(typeof content === 'function' ? content.call(el, i, el) : content),
	        index;

	    // In the case that `dom` contains nodes that already exist in other
	    // structures, ensure those nodes are properly removed.
	    updateDOM(dom, null);

	    index = siblings.indexOf(el);

	    // Completely remove old element
	    uniqueSplice(siblings, index, 1, dom, parent);
	    el.parent = el.prev = el.next = el.root = null;
	  });

	  return this;
	};

	exports.empty = function() {
	  domEach(this, function(i, el) {
	    _.each(el.children, function(el) {
	      el.next = el.prev = el.parent = null;
	    });

	    el.children.length = 0;
	  });
	  return this;
	};

	/**
	 * Set/Get the HTML
	 */
	exports.html = function(str) {
	  if (str === undefined) {
	    if (!this[0] || !this[0].children) return null;
	    return $.html(this[0].children, this.options);
	  }

	  var opts = this.options;

	  domEach(this, function(i, el) {
	    _.each(el.children, function(el) {
	      el.next = el.prev = el.parent = null;
	    });

	    var content = str.cheerio ? str.clone().get() : evaluate('' + str, opts);

	    updateDOM(content, el);
	  });

	  return this;
	};

	exports.toString = function() {
	  return $.html(this, this.options);
	};

	exports.text = function(str) {
	  // If `str` is undefined, act as a "getter"
	  if (str === undefined) {
	    return $.text(this);
	  } else if (typeof str === 'function') {
	    // Function support
	    return domEach(this, function(i, el) {
	      var $el = [el];
	      return exports.text.call($el, str.call(el, i, $.text($el)));
	    });
	  }

	  // Append text node to each selected elements
	  domEach(this, function(i, el) {
	    _.each(el.children, function(el) {
	      el.next = el.prev = el.parent = null;
	    });

	    var elem = {
	      data: '' + str,
	      type: 'text',
	      parent: el,
	      prev: null,
	      next: null,
	      children: []
	    };

	    updateDOM(elem, el);
	  });

	  return this;
	};

	exports.clone = function() {
	  return this._make(cloneDom(this.get(), this.options));
	};


/***/ },

/***/ 1166:
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(669),
	    domEach = __webpack_require__(1149).domEach;
	var toString = Object.prototype.toString;

	/**
	 * Set / Get css.
	 *
	 * @param {String|Object} prop
	 * @param {String} val
	 * @return {self}
	 * @api public
	 */

	exports.css = function(prop, val) {
	  if (arguments.length === 2 ||
	    // When `prop` is a "plain" object
	    (toString.call(prop) === '[object Object]')) {
	    return domEach(this, function(idx, el) {
	      setCss(el, prop, val, idx);
	    });
	  } else {
	    return getCss(this[0], prop);
	  }
	};

	/**
	 * Set styles of all elements.
	 *
	 * @param {String|Object} prop
	 * @param {String} val
	 * @param {Number} idx - optional index within the selection
	 * @return {self}
	 * @api private
	 */

	function setCss(el, prop, val, idx) {
	  if ('string' == typeof prop) {
	    var styles = getCss(el);
	    if (typeof val === 'function') {
	      val = val.call(el, idx, styles[prop]);
	    }

	    if (val === '') {
	      delete styles[prop];
	    } else if (val != null) {
	      styles[prop] = val;
	    }

	    el.attribs.style = stringify(styles);
	  } else if ('object' == typeof prop) {
	    Object.keys(prop).forEach(function(k){
	      setCss(el, k, prop[k]);
	    });
	  }
	}

	/**
	 * Get parsed styles of the first element.
	 *
	 * @param {String} prop
	 * @return {Object}
	 * @api private
	 */

	function getCss(el, prop) {
	  var styles = parse(el.attribs.style);
	  if (typeof prop === 'string') {
	    return styles[prop];
	  } else if (Array.isArray(prop)) {
	    return _.pick(styles, prop);
	  } else {
	    return styles;
	  }
	}

	/**
	 * Stringify `obj` to styles.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function stringify(obj) {
	  return Object.keys(obj || {})
	    .reduce(function(str, prop){
	      return str += ''
	        + (str ? ' ' : '')
	        + prop
	        + ': '
	        + obj[prop]
	        + ';';
	    }, '');
	}

	/**
	 * Parse `styles`.
	 *
	 * @param {String} styles
	 * @return {Object}
	 * @api private
	 */

	function parse(styles) {
	  styles = (styles || '').trim();

	  if (!styles) return {};

	  return styles
	    .split(';')
	    .reduce(function(obj, str){
	      var n = str.indexOf(':');
	      // skip if there is no :, or if it is the first/last character
	      if (n < 1 || n === str.length-1) return obj;
	      obj[str.slice(0,n).trim()] = str.slice(n+1).trim();
	      return obj;
	    }, {});
	}


/***/ },

/***/ 1167:
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/jquery/jquery/blob/2.1.3/src/manipulation/var/rcheckableType.js
	// https://github.com/jquery/jquery/blob/2.1.3/src/serialize.js
	var _ = __webpack_require__(669),
	    submittableSelector = 'input,select,textarea,keygen',
	    rCRLF = /\r?\n/g;

	exports.serializeArray = function() {
	  // Resolve all form elements from either forms or collections of form elements
	  var Cheerio = this.constructor;
	  return this.map(function() {
	      var elem = this;
	      var $elem = Cheerio(elem);
	      if (elem.name === 'form') {
	        return $elem.find(submittableSelector).toArray();
	      } else {
	        return $elem.filter(submittableSelector).toArray();
	      }
	    }).filter(
	        // Verify elements have a name (`attr.name`) and are not disabled (`:disabled`)
	        '[name!=""]:not(:disabled)'
	        // and cannot be clicked (`[type=submit]`) or are used in `x-www-form-urlencoded` (`[type=file]`)
	        + ':not(:submit, :button, :image, :reset, :file)'
	        // and are either checked/don't have a checkable state
	        + ':matches([checked], :not(:checkbox, :radio))'
	    // Convert each of the elements to its value(s)
	    ).map(function(i, elem) {
	      var $elem = Cheerio(elem);
	      var name = $elem.attr('name');
	      var val = $elem.val();

	      // If there is no value set (e.g. `undefined`, `null`), then return nothing
	      if (val == null) {
	        return null;
	      } else {
	        // If we have an array of values (e.g. `<select multiple>`), return an array of key/value pairs
	        if (Array.isArray(val)) {
	          return _.map(val, function(val) {
	            // We trim replace any line endings (e.g. `\r` or `\r\n` with `\r\n`) to guarantee consistency across platforms
	            //   These can occur inside of `<textarea>'s`
	            return {name: name, value: val.replace( rCRLF, '\r\n' )};
	          });
	        // Otherwise (e.g. `<input type="text">`, return only one key/value pair
	        } else {
	          return {name: name, value: val.replace( rCRLF, '\r\n' )};
	        }
	      }
	    // Convert our result to an array
	    }).get();
	};


/***/ },

/***/ 1168:
/***/ function(module, exports) {

	module.exports = {
		"_args": [
			[
				"cheerio@https://registry.npmjs.org/cheerio/-/cheerio-0.20.0.tgz",
				"/ude/pc/projects/horadric"
			]
		],
		"_from": "cheerio@latest",
		"_id": "cheerio@0.20.0",
		"_inCache": true,
		"_location": "/cheerio",
		"_phantomChildren": {
			"core-util-is": "1.0.2",
			"domelementtype": "1.3.0",
			"domutils": "1.5.1",
			"inherits": "2.0.1",
			"string_decoder": "0.10.31"
		},
		"_requested": {
			"name": "cheerio",
			"raw": "cheerio@https://registry.npmjs.org/cheerio/-/cheerio-0.20.0.tgz",
			"rawSpec": "https://registry.npmjs.org/cheerio/-/cheerio-0.20.0.tgz",
			"scope": null,
			"spec": "https://registry.npmjs.org/cheerio/-/cheerio-0.20.0.tgz",
			"type": "remote"
		},
		"_requiredBy": [
			"/"
		],
		"_resolved": "https://registry.npmjs.org/cheerio/-/cheerio-0.20.0.tgz",
		"_shasum": "5c710f2bab95653272842ba01c6ea61b3545ec35",
		"_shrinkwrap": null,
		"_spec": "cheerio@https://registry.npmjs.org/cheerio/-/cheerio-0.20.0.tgz",
		"_where": "/ude/pc/projects/horadric",
		"author": {
			"email": "mattmuelle@gmail.com",
			"name": "Matt Mueller",
			"url": "mat.io"
		},
		"bugs": {
			"url": "https://github.com/cheeriojs/cheerio/issues"
		},
		"dependencies": {
			"css-select": "~1.2.0",
			"dom-serializer": "~0.1.0",
			"entities": "~1.1.1",
			"htmlparser2": "~3.8.1",
			"jsdom": "^7.0.2",
			"lodash": "^4.1.0"
		},
		"description": "Tiny, fast, and elegant implementation of core jQuery designed specifically for the server",
		"devDependencies": {
			"benchmark": "~1.0.0",
			"coveralls": "~2.10",
			"expect.js": "~0.3.1",
			"istanbul": "~0.2",
			"jshint": "~2.5.1",
			"mocha": "*",
			"xyz": "~0.5.0"
		},
		"engines": {
			"node": ">= 0.6"
		},
		"files": [
			"index.js",
			"lib"
		],
		"homepage": "https://github.com/cheeriojs/cheerio#readme",
		"keywords": [
			"html",
			"htmlparser",
			"jquery",
			"parser",
			"scraper",
			"selector"
		],
		"license": "MIT",
		"main": "./index.js",
		"name": "cheerio",
		"optionalDependencies": {
			"jsdom": "^7.0.2"
		},
		"readme": "# cheerio [![Build Status](https://secure.travis-ci.org/cheeriojs/cheerio.svg?branch=master)](http://travis-ci.org/cheeriojs/cheerio) [![Gittask](https://gittask.com/cheeriojs/cheerio.svg)](https://gittask.com/cheeriojs/cheerio) [![Coverage](http://img.shields.io/coveralls/cheeriojs/cheerio.svg?branch=master&style=flat)](https://coveralls.io/r/cheeriojs/cheerio) [![Join the chat at https://gitter.im/cheeriojs/cheerio](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/cheeriojs/cheerio?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)\n\nFast, flexible, and lean implementation of core jQuery designed specifically for the server.\n\n## Introduction\nTeach your server HTML.\n\n```js\nvar cheerio = require('cheerio'),\n    $ = cheerio.load('<h2 class=\"title\">Hello world</h2>');\n\n$('h2.title').text('Hello there!');\n$('h2').addClass('welcome');\n\n$.html();\n//=> <h2 class=\"title welcome\">Hello there!</h2>\n```\n\n## Installation\n`npm install cheerio`\n\n## Features\n__&#10084; Familiar syntax:__\nCheerio implements a subset of core jQuery. Cheerio removes all the DOM inconsistencies and browser cruft from the jQuery library, revealing its truly gorgeous API.\n\n__&#991; Blazingly fast:__\nCheerio works with a very simple, consistent DOM model. As a result parsing, manipulating, and rendering are incredibly efficient. Preliminary end-to-end benchmarks suggest that cheerio is about __8x__ faster than JSDOM.\n\n__&#10049; Incredibly flexible:__\nCheerio wraps around @FB55's forgiving [htmlparser2](https://github.com/fb55/htmlparser2/). Cheerio can parse nearly any HTML or XML document.\n\n## What about JSDOM?\nI wrote cheerio because I found myself increasingly frustrated with JSDOM. For me, there were three main sticking points that I kept running into again and again:\n\n__&#8226; JSDOM's built-in parser is too strict:__\n  JSDOM's bundled HTML parser cannot handle many popular sites out there today.\n\n__&#8226; JSDOM is too slow:__\nParsing big websites with JSDOM has a noticeable delay.\n\n__&#8226; JSDOM feels too heavy:__\nThe goal of JSDOM is to provide an identical DOM environment as what we see in the browser. I never really needed all this, I just wanted a simple, familiar way to do HTML manipulation.\n\n## When I would use JSDOM\n\nCheerio will not solve all your problems. I would still use JSDOM if I needed to work in a browser-like environment on the server, particularly if I wanted to automate functional tests.\n\n## API\n\n### Markup example we'll be using:\n\n```html\n<ul id=\"fruits\">\n  <li class=\"apple\">Apple</li>\n  <li class=\"orange\">Orange</li>\n  <li class=\"pear\">Pear</li>\n</ul>\n```\n\nThis is the HTML markup we will be using in all of the API examples.\n\n### Loading\nFirst you need to load in the HTML. This step in jQuery is implicit, since jQuery operates on the one, baked-in DOM. With Cheerio, we need to pass in the HTML document.\n\nThis is the _preferred_ method:\n\n```js\nvar cheerio = require('cheerio'),\n    $ = cheerio.load('<ul id=\"fruits\">...</ul>');\n```\n\nOptionally, you can also load in the HTML by passing the string as the context:\n\n```js\n$ = require('cheerio');\n$('ul', '<ul id=\"fruits\">...</ul>');\n```\n\nOr as the root:\n\n```js\n$ = require('cheerio');\n$('li', 'ul', '<ul id=\"fruits\">...</ul>');\n```\n\nYou can also pass an extra object to `.load()` if you need to modify any\nof the default parsing options:\n\n```js\n$ = cheerio.load('<ul id=\"fruits\">...</ul>', {\n    normalizeWhitespace: true,\n    xmlMode: true\n});\n```\n\nThese parsing options are taken directly from [htmlparser2](https://github.com/fb55/htmlparser2/wiki/Parser-options), therefore any options that can be used in `htmlparser2` are valid in cheerio as well. The default options are:\n\n```js\n{\n    normalizeWhitespace: false,\n    xmlMode: false,\n    decodeEntities: true\n}\n\n```\n\nFor a full list of options and their effects, see [this](https://github.com/fb55/DomHandler) and\n[htmlparser2's options](https://github.com/fb55/htmlparser2/wiki/Parser-options).\n\n### Selectors\n\nCheerio's selector implementation is nearly identical to jQuery's, so the API is very similar.\n\n#### $( selector, [context], [root] )\n`selector` searches within the `context` scope which searches within the `root` scope. `selector` and `context` can be a string expression, DOM Element, array of DOM elements, or cheerio object. `root` is typically the HTML document string.\n\nThis selector method is the starting point for traversing and manipulating the document. Like jQuery, it's the primary method for selecting elements in the document, but unlike jQuery it's built on top of the CSSSelect library, which implements most of the Sizzle selectors.\n\n```js\n$('.apple', '#fruits').text()\n//=> Apple\n\n$('ul .pear').attr('class')\n//=> pear\n\n$('li[class=orange]').html()\n//=> Orange\n```\n\n### Attributes\nMethods for getting and modifying attributes.\n\n#### .attr( name, value )\nMethod for getting and setting attributes. Gets the attribute value for only the first element in the matched set. If you set an attribute's value to `null`, you remove that attribute. You may also pass a `map` and `function` like jQuery.\n\n```js\n$('ul').attr('id')\n//=> fruits\n\n$('.apple').attr('id', 'favorite').html()\n//=> <li class=\"apple\" id=\"favorite\">Apple</li>\n```\n\n> See http://api.jquery.com/attr/ for more information\n\n#### .prop( name, value )\nMethod for getting and setting properties. Gets the property value for only the first element in the matched set.\n\n```js\n$('input[type=\"checkbox\"]').prop('checked')\n//=> false\n\n$('input[type=\"checkbox\"]').prop('checked', true).val()\n//=> ok\n```\n\n> See http://api.jquery.com/prop/ for more information\n\n#### .data( name, value )\nMethod for getting and setting data attributes. Gets or sets the data attribute value for only the first element in the matched set.\n\n```js\n$('<div data-apple-color=\"red\"></div>').data()\n//=> { appleColor: 'red' }\n\n$('<div data-apple-color=\"red\"></div>').data('apple-color')\n//=> 'red'\n\nvar apple = $('.apple').data('kind', 'mac')\napple.data('kind')\n//=> 'mac'\n```\n\n> See http://api.jquery.com/data/ for more information\n\n#### .val( [value] )\nMethod for getting and setting the value of input, select, and textarea. Note: Support for `map`, and `function` has not been added yet.\n\n```js\n$('input[type=\"text\"]').val()\n//=> input_text\n\n$('input[type=\"text\"]').val('test').html()\n//=> <input type=\"text\" value=\"test\"/>\n```\n\n#### .removeAttr( name )\nMethod for removing attributes by `name`.\n\n```js\n$('.pear').removeAttr('class').html()\n//=> <li>Pear</li>\n```\n\n#### .hasClass( className )\nCheck to see if *any* of the matched elements have the given `className`.\n\n```js\n$('.pear').hasClass('pear')\n//=> true\n\n$('apple').hasClass('fruit')\n//=> false\n\n$('li').hasClass('pear')\n//=> true\n```\n\n#### .addClass( className )\nAdds class(es) to all of the matched elements. Also accepts a `function` like jQuery.\n\n```js\n$('.pear').addClass('fruit').html()\n//=> <li class=\"pear fruit\">Pear</li>\n\n$('.apple').addClass('fruit red').html()\n//=> <li class=\"apple fruit red\">Apple</li>\n```\n\n> See http://api.jquery.com/addClass/ for more information.\n\n#### .removeClass( [className] )\nRemoves one or more space-separated classes from the selected elements. If no `className` is defined, all classes will be removed. Also accepts a `function` like jQuery.\n\n```js\n$('.pear').removeClass('pear').html()\n//=> <li class=\"\">Pear</li>\n\n$('.apple').addClass('red').removeClass().html()\n//=> <li class=\"\">Apple</li>\n```\n\n> See http://api.jquery.com/removeClass/ for more information.\n\n#### .toggleClass( className, [switch] )\nAdd or remove class(es) from the matched elements, depending on either the class's presence or the value of the switch argument. Also accepts a `function` like jQuery.\n\n```js\n$('.apple.green').toggleClass('fruit green red').html()\n//=> <li class=\"apple fruit red\">Apple</li>\n\n$('.apple.green').toggleClass('fruit green red', true).html()\n//=> <li class=\"apple green fruit red\">Apple</li>\n```\n\n> See http://api.jquery.com/toggleClass/ for more information.\n\n#### .is( selector )\n#### .is( element )\n#### .is( selection )\n#### .is( function(index) )\nChecks the current list of elements and returns `true` if _any_ of the elements match the selector. If using an element or Cheerio selection, returns `true` if _any_ of the elements match. If using a predicate function, the function is executed in the context of the selected element, so `this` refers to the current element.\n\n### Forms\n\n#### .serializeArray()\n\nEncode a set of form elements as an array of names and values.\n\n```js\n$('<form><input name=\"foo\" value=\"bar\" /></form>').serializeArray()\n//=> [ { name: 'foo', value: 'bar' } ]\n```\n\n### Traversing\n\n#### .find(selector)\n#### .find(selection)\n#### .find(node)\nGet the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.\n\n```js\n$('#fruits').find('li').length\n//=> 3\n$('#fruits').find($('.apple')).length\n//=> 1\n```\n\n#### .parent([selector])\nGet the parent of each element in the current set of matched elements, optionally filtered by a selector.\n\n```js\n$('.pear').parent().attr('id')\n//=> fruits\n```\n\n#### .parents([selector])\nGet a set of parents filtered by `selector` of each element in the current set of match elements.\n```js\n$('.orange').parents().length\n// => 2\n$('.orange').parents('#fruits').length\n// => 1\n```\n\n#### .parentsUntil([selector][,filter])\nGet the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector, DOM node, or cheerio object.\n```js\n$('.orange').parentsUntil('#food').length\n// => 1\n```\n\n#### .closest(selector)\nFor each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.\n\n```js\n$('.orange').closest()\n// => []\n$('.orange').closest('.apple')\n// => []\n$('.orange').closest('li')\n// => [<li class=\"orange\">Orange</li>]\n$('.orange').closest('#fruits')\n// => [<ul id=\"fruits\"> ... </ul>]\n```\n\n#### .next([selector])\nGets the next sibling of the first selected element, optionally filtered by a selector.\n\n```js\n$('.apple').next().hasClass('orange')\n//=> true\n```\n\n#### .nextAll([selector])\nGets all the following siblings of the first selected element, optionally filtered by a selector.\n\n```js\n$('.apple').nextAll()\n//=> [<li class=\"orange\">Orange</li>, <li class=\"pear\">Pear</li>]\n$('.apple').nextAll('.orange')\n//=> [<li class=\"orange\">Orange</li>]\n```\n\n#### .nextUntil([selector], [filter])\nGets all the following siblings up to but not including the element matched by the selector, optionally filtered by another selector.\n\n```js\n$('.apple').nextUntil('.pear')\n//=> [<li class=\"orange\">Orange</li>]\n```\n\n#### .prev([selector])\nGets the previous sibling of the first selected element optionally filtered by a selector.\n\n```js\n$('.orange').prev().hasClass('apple')\n//=> true\n```\n\n#### .prevAll([selector])\nGets all the preceding siblings of the first selected element, optionally filtered by a selector.\n\n```js\n$('.pear').prevAll()\n//=> [<li class=\"orange\">Orange</li>, <li class=\"apple\">Apple</li>]\n$('.pear').prevAll('.orange')\n//=> [<li class=\"orange\">Orange</li>]\n```\n\n#### .prevUntil([selector], [filter])\nGets all the preceding siblings up to but not including the element matched by the selector, optionally filtered by another selector.\n\n```js\n$('.pear').prevUntil('.apple')\n//=> [<li class=\"orange\">Orange</li>]\n```\n\n#### .slice( start, [end] )\nGets the elements matching the specified range\n\n```js\n$('li').slice(1).eq(0).text()\n//=> 'Orange'\n\n$('li').slice(1, 2).length\n//=> 1\n```\n\n#### .siblings([selector])\nGets the first selected element's siblings, excluding itself.\n\n```js\n$('.pear').siblings().length\n//=> 2\n\n$('.pear').siblings('.orange').length\n//=> 1\n\n```\n\n#### .children([selector])\nGets the children of the first selected element.\n\n```js\n$('#fruits').children().length\n//=> 3\n\n$('#fruits').children('.pear').text()\n//=> Pear\n```\n\n#### .contents()\nGets the children of each element in the set of matched elements, including text and comment nodes.\n\n```js\n$('#fruits').contents().length\n//=> 3\n```\n\n#### .each( function(index, element) )\nIterates over a cheerio object, executing a function for each matched element. When the callback is fired, the function is fired in the context of the DOM element, so `this` refers to the current element, which is equivalent to the function parameter `element`. To break out of the `each` loop early, return with `false`.\n\n```js\nvar fruits = [];\n\n$('li').each(function(i, elem) {\n  fruits[i] = $(this).text();\n});\n\nfruits.join(', ');\n//=> Apple, Orange, Pear\n```\n\n#### .map( function(index, element) )\nPass each element in the current matched set through a function, producing a new Cheerio object containing the return values. The function can return an individual data item or an array of data items to be inserted into the resulting set. If an array is returned, the elements inside the array are inserted into the set. If the function returns null or undefined, no element will be inserted.\n\n```js\n$('li').map(function(i, el) {\n  // this === el\n  return $(this).text();\n}).get().join(' ');\n//=> \"apple orange pear\"\n```\n\n#### .filter( selector ) <br /> .filter( selection ) <br /> .filter( element ) <br /> .filter( function(index) )\n\nIterates over a cheerio object, reducing the set of selector elements to those that match the selector or pass the function's test. When a Cheerio selection is specified, return only the elements contained in that selection. When an element is specified, return only that element (if it is contained in the original selection). If using the function method, the function is executed in the context of the selected element, so `this` refers to the current element.\n\nSelector:\n\n```js\n$('li').filter('.orange').attr('class');\n//=> orange\n```\n\nFunction:\n\n```js\n$('li').filter(function(i, el) {\n  // this === el\n  return $(this).attr('class') === 'orange';\n}).attr('class')\n//=> orange\n```\n\n#### .not( selector ) <br /> .not( selection ) <br /> .not( element ) <br /> .not( function(index, elem) )\n\nRemove elements from the set of matched elements. Given a jQuery object that represents a set of DOM elements, the `.not()` method constructs a new jQuery object from a subset of the matching elements. The supplied selector is tested against each element; the elements that don't match the selector will be included in the result. The `.not()` method can take a function as its argument in the same way that `.filter()` does. Elements for which the function returns true are excluded from the filtered set; all other elements are included.\n\nSelector:\n\n```js\n$('li').not('.apple').length;\n//=> 2\n```\n\nFunction:\n\n```js\n$('li').not(function(i, el) {\n  // this === el\n  return $(this).attr('class') === 'orange';\n}).length;\n//=> 2\n```\n\n#### .has( selector ) <br /> .has( element )\n\nFilters the set of matched elements to only those which have the given DOM element as a descendant or which have a descendant that matches the given selector. Equivalent to `.filter(':has(selector)')`.\n\nSelector:\n\n```js\n$('ul').has('.pear').attr('id');\n//=> fruits\n```\n\nElement:\n\n```js\n$('ul').has($('.pear')[0]).attr('id');\n//=> fruits\n```\n\n#### .first()\nWill select the first element of a cheerio object\n\n```js\n$('#fruits').children().first().text()\n//=> Apple\n```\n\n#### .last()\nWill select the last element of a cheerio object\n\n```js\n$('#fruits').children().last().text()\n//=> Pear\n```\n\n#### .eq( i )\nReduce the set of matched elements to the one at the specified index. Use `.eq(-i)` to count backwards from the last selected element.\n\n```js\n$('li').eq(0).text()\n//=> Apple\n\n$('li').eq(-1).text()\n//=> Pear\n```\n\n#### .get( [i] )\n\nRetrieve the DOM elements matched by the Cheerio object. If an index is specified, retrieve one of the elements matched by the Cheerio object:\n\n```js\n$('li').get(0).tagName\n//=> li\n```\n\nIf no index is specified, retrieve all elements matched by the Cheerio object:\n\n```js\n$('li').get().length\n//=> 3\n```\n\n#### .index()\n#### .index( selector )\n#### .index( nodeOrSelection )\n\nSearch for a given element from among the matched elements.\n\n```js\n$('.pear').index()\n//=> 2\n$('.orange').index('li')\n//=> 1\n$('.apple').index($('#fruit, li'))\n//=> 1\n```\n\n#### .end()\nEnd the most recent filtering operation in the current chain and return the set of matched elements to its previous state.\n\n```js\n$('li').eq(0).end().length\n//=> 3\n```\n\n#### .add( selector [, context] )\n#### .add( element )\n#### .add( elements )\n#### .add( html )\n#### .add( selection )\nAdd elements to the set of matched elements.\n\n```js\n$('.apple').add('.orange').length\n//=> 2\n```\n\n#### .addBack( [filter] )\n\nAdd the previous set of elements on the stack to the current set, optionally filtered by a selector.\n\n```js\n$('li').eq(0).addBack('.orange').length\n//=> 2\n```\n\n### Manipulation\nMethods for modifying the DOM structure.\n\n#### .append( content, [content, ...] )\nInserts content as the *last* child of each of the selected elements.\n\n```js\n$('ul').append('<li class=\"plum\">Plum</li>')\n$.html()\n//=>  <ul id=\"fruits\">\n//      <li class=\"apple\">Apple</li>\n//      <li class=\"orange\">Orange</li>\n//      <li class=\"pear\">Pear</li>\n//      <li class=\"plum\">Plum</li>\n//    </ul>\n```\n\n#### .appendTo( target )\nInsert every element in the set of matched elements to the end of the target.\n\n```js\n$('<li class=\"plum\">Plum</li>').appendTo('#fruits')\n$.html()\n//=>  <ul id=\"fruits\">\n//      <li class=\"apple\">Apple</li>\n//      <li class=\"orange\">Orange</li>\n//      <li class=\"pear\">Pear</li>\n//      <li class=\"plum\">Plum</li>\n//    </ul>\n```\n\n#### .prepend( content, [content, ...] )\nInserts content as the *first* child of each of the selected elements.\n\n```js\n$('ul').prepend('<li class=\"plum\">Plum</li>')\n$.html()\n//=>  <ul id=\"fruits\">\n//      <li class=\"plum\">Plum</li>\n//      <li class=\"apple\">Apple</li>\n//      <li class=\"orange\">Orange</li>\n//      <li class=\"pear\">Pear</li>\n//    </ul>\n```\n\n#### .prependTo( target )\nInsert every element in the set of matched elements to the beginning of the target.\n\n```js\n$('<li class=\"plum\">Plum</li>').prependTo('#fruits')\n$.html()\n//=>  <ul id=\"fruits\">\n//      <li class=\"plum\">Plum</li>\n//      <li class=\"apple\">Apple</li>\n//      <li class=\"orange\">Orange</li>\n//      <li class=\"pear\">Pear</li>\n//    </ul>\n```\n\n#### .after( content, [content, ...] )\nInsert content next to each element in the set of matched elements.\n\n```js\n$('.apple').after('<li class=\"plum\">Plum</li>')\n$.html()\n//=>  <ul id=\"fruits\">\n//      <li class=\"apple\">Apple</li>\n//      <li class=\"plum\">Plum</li>\n//      <li class=\"orange\">Orange</li>\n//      <li class=\"pear\">Pear</li>\n//    </ul>\n```\n\n#### .insertAfter( target )\nInsert every element in the set of matched elements after the target.\n\n```js\n$('<li class=\"plum\">Plum</li>').insertAfter('.apple')\n$.html()\n//=>  <ul id=\"fruits\">\n//      <li class=\"apple\">Apple</li>\n//      <li class=\"plum\">Plum</li>\n//      <li class=\"orange\">Orange</li>\n//      <li class=\"pear\">Pear</li>\n//    </ul>\n```\n\n#### .before( content, [content, ...] )\nInsert content previous to each element in the set of matched elements.\n\n```js\n$('.apple').before('<li class=\"plum\">Plum</li>')\n$.html()\n//=>  <ul id=\"fruits\">\n//      <li class=\"plum\">Plum</li>\n//      <li class=\"apple\">Apple</li>\n//      <li class=\"orange\">Orange</li>\n//      <li class=\"pear\">Pear</li>\n//    </ul>\n```\n\n#### .insertBefore( target )\nInsert every element in the set of matched elements before the target.\n\n```js\n$('<li class=\"plum\">Plum</li>').insertBefore('.apple')\n$.html()\n//=>  <ul id=\"fruits\">\n//      <li class=\"plum\">Plum</li>\n//      <li class=\"apple\">Apple</li>\n//      <li class=\"orange\">Orange</li>\n//      <li class=\"pear\">Pear</li>\n//    </ul>\n```\n\n#### .remove( [selector] )\nRemoves the set of matched elements from the DOM and all their children. `selector` filters the set of matched elements to be removed.\n\n```js\n$('.pear').remove()\n$.html()\n//=>  <ul id=\"fruits\">\n//      <li class=\"apple\">Apple</li>\n//      <li class=\"orange\">Orange</li>\n//    </ul>\n```\n\n#### .replaceWith( content )\nReplaces matched elements with `content`.\n\n```js\nvar plum = $('<li class=\"plum\">Plum</li>')\n$('.pear').replaceWith(plum)\n$.html()\n//=> <ul id=\"fruits\">\n//     <li class=\"apple\">Apple</li>\n//     <li class=\"orange\">Orange</li>\n//     <li class=\"plum\">Plum</li>\n//   </ul>\n```\n\n#### .empty()\nEmpties an element, removing all its children.\n\n```js\n$('ul').empty()\n$.html()\n//=>  <ul id=\"fruits\"></ul>\n```\n\n#### .html( [htmlString] )\nGets an html content string from the first selected element. If `htmlString` is specified, each selected element's content is replaced by the new content.\n\n```js\n$('.orange').html()\n//=> Orange\n\n$('#fruits').html('<li class=\"mango\">Mango</li>').html()\n//=> <li class=\"mango\">Mango</li>\n```\n\n#### .text( [textString] )\nGet the combined text contents of each element in the set of matched elements, including their descendants.. If `textString` is specified, each selected element's content is replaced by the new text content.\n\n```js\n$('.orange').text()\n//=> Orange\n\n$('ul').text()\n//=>  Apple\n//    Orange\n//    Pear\n```\n\n#### .wrap( content )\nThe .wrap() function can take any string or object that could be passed to the $() factory function to specify a DOM structure. This structure may be nested several levels deep, but should contain only one inmost element. A copy of this structure will be wrapped around each of the elements in the set of matched elements. This method returns the original set of elements for chaining purposes.\n\n```js\nvar redFruit = $('<div class=\"red-fruit\"></div>')\n$('.apple').wrap(redFruit)\n\n//=> <ul id=\"fruits\">\n//     <div class=\"red-fruit\">\n//      <li class=\"apple\">Apple</li>\n//     </div>\n//     <li class=\"orange\">Orange</li>\n//     <li class=\"plum\">Plum</li>\n//   </ul>\n\nvar healthy = $('<div class=\"healthy\"></div>')\n$('li').wrap(healthy)\n\n//=> <ul id=\"fruits\">\n//     <div class=\"healthy\">\n//       <li class=\"apple\">Apple</li>\n//     </div>\n//     <div class=\"healthy\">\n//       <li class=\"orange\">Orange</li>\n//     </div>\n//     <div class=\"healthy\">\n//        <li class=\"plum\">Plum</li>\n//     </div>\n//   </ul>\n```\n\n#### .css( [propertName] ) <br /> .css( [ propertyNames] ) <br /> .css( [propertyName], [value] ) <br /> .css( [propertName], [function] ) <br /> .css( [properties] )\n\nGet the value of a style property for the first element in the set of matched elements or set one or more CSS properties for every matched element.\n\n### Rendering\nWhen you're ready to render the document, you can use the `html` utility function:\n\n```js\n$.html()\n//=>  <ul id=\"fruits\">\n//      <li class=\"apple\">Apple</li>\n//      <li class=\"orange\">Orange</li>\n//      <li class=\"pear\">Pear</li>\n//    </ul>\n```\n\nIf you want to return the outerHTML you can use `$.html(selector)`:\n\n```js\n$.html('.pear')\n//=> <li class=\"pear\">Pear</li>\n```\n\nBy default, `html` will leave some tags open. Sometimes you may instead want to render a valid XML document. For example, you might parse the following XML snippet:\n\n```xml\n$ = cheerio.load('<media:thumbnail url=\"http://www.foo.com/keyframe.jpg\" width=\"75\" height=\"50\" time=\"12:05:01.123\"/>');\n```\n\n... and later want to render to XML. To do this, you can use the 'xml' utility function:\n\n```js\n$.xml()\n//=>  <media:thumbnail url=\"http://www.foo.com/keyframe.jpg\" width=\"75\" height=\"50\" time=\"12:05:01.123\"/>\n```\n\n\n### Miscellaneous\nDOM element methods that don't fit anywhere else\n\n#### .toArray()\nRetrieve all the DOM elements contained in the jQuery set as an array.\n\n```js\n$('li').toArray()\n//=> [ {...}, {...}, {...} ]\n```\n\n#### .clone() ####\nClone the cheerio object.\n\n```js\nvar moreFruit = $('#fruits').clone()\n```\n\n### Utilities\n\n#### $.root\n\nSometimes you need to work with the top-level root element. To query it, you can use `$.root()`.\n\n```js\n$.root().append('<ul id=\"vegetables\"></ul>').html();\n//=> <ul id=\"fruits\">...</ul><ul id=\"vegetables\"></ul>\n```\n\n#### $.contains( container, contained )\nChecks to see if the `contained` DOM element is a descendant of the `container` DOM element.\n\n#### $.parseHTML( data [, context ] [, keepScripts ] )\nParses a string into an array of DOM nodes. The `context` argument has no meaning for Cheerio, but it is maintained for API compatability.\n\n#### $.load( html[, options ] )\nLoad in the HTML. (See the previous section titled \"Loading\" for more information.)\n\n### Plugins\n\nOnce you have loaded a document, you may extend the prototype or the equivalent `fn` property with custom plugin methods:\n\n```js\nvar $ = cheerio.load('<html><body>Hello, <b>world</b>!</body></html>');\n$.prototype.logHtml = function() {\n  console.log(this.html());\n};\n\n$('body').logHtml(); // logs \"Hello, <b>world</b>!\" to the console\n```\n\n### The \"DOM Node\" object\n\nCheerio collections are made up of objects that bear some resemblence to [browser-based DOM nodes](https://developer.mozilla.org/en-US/docs/Web/API/Node). You can expect them to define the following properties:\n\n- `tagName`\n- `parentNode`\n- `previousSibling`\n- `nextSibling`\n- `nodeValue`\n- `firstChild`\n- `childNodes`\n- `lastChild`\n\n## Screencasts\n\nhttp://vimeo.com/31950192\n\n> This video tutorial is a follow-up to Nettut's \"How to Scrape Web Pages with Node.js and jQuery\", using cheerio instead of JSDOM + jQuery. This video shows how easy it is to use cheerio and how much faster cheerio is than JSDOM + jQuery.\n\n## Testing\n\nTo run the test suite, download the repository, then within the cheerio directory, run:\n\n```shell\nmake setup\nmake test\n```\n\nThis will download the development packages and run the test suite.\n\n## Contributors\n\nThese are some of the contributors that have made cheerio possible:\n\n```\nproject  : cheerio\n repo age : 2 years, 6 months\n active   : 285 days\n commits  : 762\n files    : 36\n authors  :\n   293  Matt Mueller            38.5%\n   133  Matthew Mueller         17.5%\n    92  Mike Pennisi            12.1%\n    54  David Chambers          7.1%\n    30  kpdecker                3.9%\n    19  Felix Böhm             2.5%\n    17  fb55                    2.2%\n    15  Siddharth Mahendraker   2.0%\n    11  Adam Bretz              1.4%\n     8  Nazar Leush             1.0%\n     7  ironchefpython          0.9%\n     6  Jarno Leppänen         0.8%\n     5  Ben Sheldon             0.7%\n     5  Jos Shepherd            0.7%\n     5  Ryan Schmukler          0.7%\n     5  Steven Vachon           0.7%\n     4  Maciej Adwent           0.5%\n     4  Amir Abu Shareb         0.5%\n     3  jeremy.dentel@brandingbrand.com 0.4%\n     3  Andi Neck               0.4%\n     2  steve                   0.3%\n     2  alexbardas              0.3%\n     2  finspin                 0.3%\n     2  Ali Farhadi             0.3%\n     2  Chris Khoo              0.3%\n     2  Rob Ashton              0.3%\n     2  Thomas Heymann          0.3%\n     2  Jaro Spisak             0.3%\n     2  Dan Dascalescu          0.3%\n     2  Torstein Thune          0.3%\n     2  Wayne Larsen            0.3%\n     1  Timm Preetz             0.1%\n     1  Xavi                    0.1%\n     1  Alex Shaindlin          0.1%\n     1  mattym                  0.1%\n     1  Felix Böhm            0.1%\n     1  Farid Neshat            0.1%\n     1  Dmitry Mazuro           0.1%\n     1  Jeremy Hubble           0.1%\n     1  nevermind               0.1%\n     1  Manuel Alabor           0.1%\n     1  Matt Liegey             0.1%\n     1  Chris O'Hara            0.1%\n     1  Michael Holroyd         0.1%\n     1  Michiel De Mey          0.1%\n     1  Ben Atkin               0.1%\n     1  Rich Trott              0.1%\n     1  Rob \"Hurricane\" Ashton  0.1%\n     1  Robin Gloster           0.1%\n     1  Simon Boudrias          0.1%\n     1  Sindre Sorhus           0.1%\n     1  xiaohwan                0.1%\n```\n\n## Cheerio in the real world\n\nAre you using cheerio in production? Add it to the [wiki](https://github.com/cheeriojs/cheerio/wiki/Cheerio-in-Production)!\n\n## Special Thanks\n\nThis library stands on the shoulders of some incredible developers. A special thanks to:\n\n__&#8226; @FB55 for node-htmlparser2 & CSSSelect:__\nFelix has a knack for writing speedy parsing engines. He completely re-wrote both @tautologistic's `node-htmlparser` and @harry's `node-soupselect` from the ground up, making both of them much faster and more flexible. Cheerio would not be possible without his foundational work\n\n__&#8226; @jQuery team for jQuery:__\nThe core API is the best of its class and despite dealing with all the browser inconsistencies the code base is extremely clean and easy to follow. Much of cheerio's implementation and documentation is from jQuery. Thanks guys.\n\n__&#8226; @visionmedia:__\nThe style, the structure, the open-source\"-ness\" of this library comes from studying TJ's style and using many of his libraries. This dude consistently pumps out high-quality libraries and has always been more than willing to help or answer questions. You rock TJ.\n\n## License\n\n(The MIT License)\n\nCopyright (c) 2012 Matt Mueller &lt;mattmuelle@gmail.com&gt;\n\nPermission is hereby granted, free of charge, to any person obtaining\na copy of this software and associated documentation files (the\n'Software'), to deal in the Software without restriction, including\nwithout limitation the rights to use, copy, modify, merge, publish,\ndistribute, sublicense, and/or sell copies of the Software, and to\npermit persons to whom the Software is furnished to do so, subject to\nthe following conditions:\n\nThe above copyright notice and this permission notice shall be\nincluded in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,\nEXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.\nIN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY\nCLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,\nTORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE\nSOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
		"readmeFilename": "Readme.md",
		"repository": {
			"type": "git",
			"url": "git://github.com/cheeriojs/cheerio.git"
		},
		"scripts": {
			"test": "make test"
		},
		"version": "0.20.0"
	};

/***/ },

/***/ 1175:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Screen=__webpack_require__(1176);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Screen).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1176:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof (typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Projects/Esgaroth/UI/Screens/Home/Screen.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


	var _Stoke=__webpack_require__(1177);var _Stoke2=_interopRequireDefault(_Stoke);
	var _Markdown=__webpack_require__(1092);var _Markdown2=_interopRequireDefault(_Markdown);

	var _Actions=__webpack_require__(1172);
























































































































	var _auth=__webpack_require__(1173);var authActions=_interopRequireWildcard(_auth);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else {var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var React=Framework.React;var ReactDOM=Framework.ReactDOM;var ReactNative=Framework.ReactNative;var dispatch=Framework.dispatch;var asyncConnect=Framework.asyncConnect;var bindActionCreators=Framework.bindActionCreators;var PropTypes=Framework.PropTypes;var T=Framework.T;var connect=Framework.connect;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var Animated=Framework.Animated;var Dimensions=Framework.Dimensions;var Router=Framework.Router;var Route=Framework.Route;var Link=Framework.Link;var createStore=Framework.createStore;var browserHistory=Framework.browserHistory;var compose=Framework.compose;var applyMiddleware=Framework.applyMiddleware;var thunkMiddleware=Framework.thunkMiddleware;var Provider=Framework.Provider;var syncHistoryWithStore=Framework.syncHistoryWithStore;var routerReducer=Framework.routerReducer;var combineReducers=Framework.combineReducers;var createLogger=Framework.createLogger;var renderToString=Framework.renderToString;var Screen=function(_Component){_inherits(Screen,_Component);function Screen(){_classCallCheck(this,Screen);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Screen).call(this));_this.state={page:{title:'',body:'',items:[],options:{}}};_this.handleChange=_this.handleChange.bind(_this);_this.handleRefreshClick=_this.handleRefreshClick.bind(_this);return _this;}_createClass(Screen,[{key:'componentDidMount',value:function componentDidMount(){var _props=this.props;var dispatch=_props.dispatch;var selectedSubreddit=_props.selectedSubreddit;dispatch((0,_Actions.fetchPostsIfNeeded)(selectedSubreddit));}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){if(nextProps.selectedSubreddit!==this.props.selectedSubreddit){var _dispatch=nextProps.dispatch;var selectedSubreddit=nextProps.selectedSubreddit;_dispatch((0,_Actions.fetchPostsIfNeeded)(selectedSubreddit));}}},{key:'handleChange',value:function handleChange(nextSubreddit){this.props.dispatch((0,_Actions.selectSubreddit)(nextSubreddit));}},{key:'handleRefreshClick',value:function handleRefreshClick(e){e.preventDefault();var _props2=this.props;var dispatch=_props2.dispatch;var selectedSubreddit=_props2.selectedSubreddit;dispatch((0,_Actions.invalidateSubreddit)(selectedSubreddit));dispatch((0,_Actions.fetchPostsIfNeeded)(selectedSubreddit));}},{key:'onPageChange',value:function onPageChange(state){if(JSON.stringify(this.state.page)===JSON.stringify(state)){return;}this.setState({page:state});}},{key:'render',value:function render(){var _this2=this;var page=this.props.location;if(!page){page='home';}var breadcrumb=null;this.state.page.items.forEach(function(item){if(item.title==='Breadcrumb'){breadcrumb=item.body;}});this.state.page.options.slim=page==='home';var _props3=this.props;var selectedSubreddit=_props3.selectedSubreddit;var posts=_props3.posts;var isFetching=_props3.isFetching;var lastUpdated=_props3.lastUpdated;return React.createElement(_Stoke2.default,{breadcrumb:breadcrumb,__source:{fileName:_jsxFileName,lineNumber:82}},!this.state.page.options.slim&&React.createElement(View,{className:'box',__source:{fileName:_jsxFileName,lineNumber:84}},React.createElement(View,{className:'tab-header',__source:{fileName:_jsxFileName,lineNumber:85}},this.state.page.title),React.createElement(View,{className:'padded',__source:{fileName:_jsxFileName,lineNumber:88}},React.createElement(_Markdown2.default,{src:"/Apps/Site/Projects/Esgaroth/Pages/"+page+".md",onChange:function onChange(state){return _this2.onPageChange(state);},__source:{fileName:_jsxFileName,lineNumber:89}}))),this.state.page.options.slim&&React.createElement(_Markdown2.default,{src:"/Apps/Site/Projects/Esgaroth/Pages/"+page+".md",onChange:function onChange(state){return _this2.onPageChange(state);},__source:{fileName:_jsxFileName,lineNumber:94}}),React.createElement(View,{__source:{fileName:_jsxFileName,lineNumber:96}},React.createElement('p',{__source:{fileName:_jsxFileName,lineNumber:97}},lastUpdated&&React.createElement('span',{__source:{fileName:_jsxFileName,lineNumber:99}},'Last updated at ',new Date(lastUpdated).toLocaleTimeString(),'.',' '),!isFetching&&React.createElement('a',{href:'#',onClick:this.handleRefreshClick,__source:{fileName:_jsxFileName,lineNumber:105}},'Refresh')),isFetching&&posts.length===0&&React.createElement('p',{__source:{fileName:_jsxFileName,lineNumber:112}},'Loading...'),!isFetching&&posts.length===0&&React.createElement('p',{__source:{fileName:_jsxFileName,lineNumber:115}},'Empty.'),posts.length>0&&React.createElement(View,{style:{opacity:isFetching?0.5:1},hidden:true,__source:{fileName:_jsxFileName,lineNumber:118}},posts.length)));}}]);return Screen;}(Component);Screen.propTypes={selectedSubreddit:T.string.isRequired,posts:T.array.isRequired,isFetching:T.bool.isRequired,lastUpdated:T.number,dispatch:T.func.isRequired};

	function mapStateToProps(state){var 
	selectedSubreddit=state.selectedSubreddit;var postsBySubreddit=state.postsBySubreddit;var routing=state.routing;var _ref=




	postsBySubreddit[selectedSubreddit]||{
	isFetching:true,
	items:[]};var isFetching=_ref.isFetching;var lastUpdated=_ref.lastUpdated;var posts=_ref.items;



	var location=null;
	if(typeof routing.locationBeforeTransitions==='string'){
	location=routing.locationBeforeTransitions.replace('/','');}else 
	if(_typeof(routing.locationBeforeTransitions)==='object'&&routing.locationBeforeTransitions){
	location=routing.locationBeforeTransitions.pathname.replace(/^\//,'').replace(/\/$/,'');}else 
	if(typeof window!=='undefined'){
	location=window.location.pathname.replace('/','');}


	return {
	user:state.auth.user,
	selectedSubreddit:selectedSubreddit,
	posts:posts,
	isFetching:isFetching,
	lastUpdated:lastUpdated,
	location:location};}



	function mapDispatchToProps(dispatch){
	return {
	dispatch:dispatch,
	actions:bindActionCreators(authActions,dispatch)};}



	var info=__webpack_require__(1174);
	var auth=__webpack_require__(1173);

	var asyncItems=[{
	key:'page',
	promise:function promise(_ref2){var _ref2$store=_ref2.store;var dispatch=_ref2$store.dispatch;var getState=_ref2$store.getState;var client=_ref2.helpers.client;
	var promises=[];

	if(!info.isLoaded(getState())){
	promises.push(dispatch(info.load()));}

	if(!auth.isLoaded(getState())){
	promises.push(dispatch(auth.load()));}


	return Promise.all(promises);}}];exports.default=



	asyncConnect(asyncItems,mapStateToProps,mapDispatchToProps)(Screen);

/***/ },

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

/***/ 1182:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Screen=__webpack_require__(1183);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Screen).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1183:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof (typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Projects/Esgaroth/UI/Screens/GameDetails/Screen.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


	var _Stoke=__webpack_require__(1177);var _Stoke2=_interopRequireDefault(_Stoke);
	var _Markdown=__webpack_require__(1092);var _Markdown2=_interopRequireDefault(_Markdown);
	var _Timeline=__webpack_require__(1184);var _Timeline2=_interopRequireDefault(_Timeline);

	var _Actions=__webpack_require__(1172);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var React=Framework.React;var ReactDOM=Framework.ReactDOM;var ReactNative=Framework.ReactNative;var PropTypes=Framework.PropTypes;var T=Framework.T;var connect=Framework.connect;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var Animated=Framework.Animated;var Dimensions=Framework.Dimensions;var Router=Framework.Router;var Route=Framework.Route;var Link=Framework.Link;var createStore=Framework.createStore;var browserHistory=Framework.browserHistory;var compose=Framework.compose;var applyMiddleware=Framework.applyMiddleware;var thunkMiddleware=Framework.thunkMiddleware;var Provider=Framework.Provider;var syncHistoryWithStore=Framework.syncHistoryWithStore;var routerReducer=Framework.routerReducer;var combineReducers=Framework.combineReducers;var createLogger=Framework.createLogger;var renderToString=Framework.renderToString;var 

	Screen=function(_Component){_inherits(Screen,_Component);



	function Screen(){_classCallCheck(this,Screen);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Screen).call(this));


	_this.state={
	page:{
	title:'',
	slim:false}};return _this;}_createClass(Screen,[{key:'componentWillMount',value:function componentWillMount()




	{var _this2=this;
	Framework.getStyles(Framework.Platform.Env.isServer?__webpack_require__(420).readFileSync(__dirname+'/Screen.css').toString():__webpack_require__(1187),'stokelayout-',function(styles){_this2.setState({styles:styles});});}},{key:'onPageChange',value:function onPageChange(


	state){
	this.setState({
	page:state});}},{key:'render',value:function render()



	{var _this3=this;var _props=
	this.props;var site=_props.site;var location=_props.location;var game=_props.game;



	var content=
	React.createElement(_Markdown2.default,{src:"/Apps/Site/Projects/Esgaroth/Pages/"+(location||'home')+".md",onChange:function onChange(state){return _this3.onPageChange(state);},__source:{fileName:_jsxFileName,lineNumber:41}});


	var page=this.state.page;

	var breadcrumb=
	React.createElement('ul',{className:'breadcrumb',__source:{fileName:_jsxFileName,lineNumber:47}},
	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:48}},React.createElement('a',{href:'/',__source:{fileName:_jsxFileName,lineNumber:48}},React.createElement('i',{className:'icon-home',__source:{fileName:_jsxFileName,lineNumber:48}}),' ',site.title)),
	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:49}},React.createElement('a',{href:'/games',__source:{fileName:_jsxFileName,lineNumber:49}},'Games')),
	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:50}},React.createElement('a',{href:location,__source:{fileName:_jsxFileName,lineNumber:50}},page.title)));



	return Framework.wrapStyles(this.state.styles,
	React.createElement(_Stoke2.default,{breadcrumb:breadcrumb,__source:{fileName:_jsxFileName,lineNumber:55}},
	!page.slim&&
	React.createElement(View,{className:'box',__source:{fileName:_jsxFileName,lineNumber:57}},
	React.createElement(View,{className:'tab-header',__source:{fileName:_jsxFileName,lineNumber:58}},
	page.title),

	React.createElement(View,{className:'padded',__source:{fileName:_jsxFileName,lineNumber:61}},
	game.timeline&&React.createElement(_Timeline2.default,{stages:game.timeline,__source:{fileName:_jsxFileName,lineNumber:62}}),
	content)),



	page.slim&&
	content));}}]);return Screen;}(Component);Screen.propTypes={};






	function mapStateToProps(state){var 
	site=state.site;var games=state.games;var routing=state.routing;


	var location=null;
	if(typeof routing.locationBeforeTransitions==='string'){
	location=routing.locationBeforeTransitions.replace('/','');}else 
	if(_typeof(routing.locationBeforeTransitions)==='object'&&routing.locationBeforeTransitions){
	location=routing.locationBeforeTransitions.pathname.replace(/^\//,'').replace(/\/$/,'');}else 
	if(typeof window!=='undefined'){
	location=window.location.pathname.replace('/','');}


	var code=location.replace('/games/','');
	var game=games.list.reduce(function(prev,current){return prev.code===code&&prev||current.code===code&&current;});

	return {
	site:site,
	game:game,
	location:location};}exports.default=



	connect(mapStateToProps)(Screen);
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },

/***/ 1184:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Timeline=__webpack_require__(1185);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Timeline).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1185:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Shared/UI/Components/Timeline/Timeline.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


	var _reactRedux=__webpack_require__(239);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var React=Framework.React;var PropTypes=Framework.PropTypes;var ReactDOM=Framework.ReactDOM;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var 

	Timeline=function(_Component){_inherits(Timeline,_Component);



	function Timeline(){_classCallCheck(this,Timeline);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Timeline).call(this));


	_this.state={};return _this;}_createClass(Timeline,[{key:'componentWillMount',value:function componentWillMount()


	{var _this2=this;
	Framework.getStyles(Framework.Platform.Env.isServer?__webpack_require__(420).readFileSync(__dirname+'/Timeline.css').toString():__webpack_require__(1186),'stokelayout-',function(styles){
	_this2.setState({
	styles:styles});});}},{key:'render',value:function render()




	{var 
	stages=this.props.stages;

	if(!this.state.styles){return React.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:27}});}

	return Framework.wrapStyles(this.state.styles,
	React.createElement('ul',{styles:'c-timeline',__source:{fileName:_jsxFileName,lineNumber:30}},
	stages.map(function(stage,i){var 
	title=stage.title;var state=stage.state;var color=stage.color;
	var mapStateToClassName={
	'incompleted':'c--incompleted',
	'completed':'c--completed',
	'inprogress':'c--inprogress'};

	var className=mapStateToClassName[state];
	return (
	React.createElement('li',{styles:"c-timeline__item c--"+color+" "+className,__source:{fileName:_jsxFileName,lineNumber:40}},
	i!==stages.length-1&&React.createElement('div',{styles:"c-timeline__arrow c--"+color+" "+className,__source:{fileName:_jsxFileName,lineNumber:41}}),
	stage.title));})));}}]);return Timeline;}(Component);Timeline.propTypes={};








	function mapStateToProps(state){
	return {};}exports.default=



	Timeline;
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },

/***/ 1186:
/***/ function(module, exports) {

	module.exports = ".c-timeline {\n    display: flex;\n    list-style: none;\n    margin: -21px -21px 20px -20px;\n    opacity: 0.8;\n}\n\n.c-timeline__item {\n    flex: 1;\n    color: #fff;\n    padding: 30px 0;\n    background: grey;\n    text-transform: uppercase;\n    font-size: 16px;\n    font-weight: bold;\n    text-align: right;\n    padding-right: 17px;\n    position: relative;\n    background: grey url(/Apps/Site/Projects/Default/UI/Components/Timeline/Images/incompleted.png) no-repeat 80% 50%;\n    background-size: contain;\n    text-shadow: 1px 1px 1px #000;\n    \n    &.c--completed {\n        background-image: url(/Apps/Site/Projects/Default/UI/Components/Timeline/Images/completed.png);\n    }\n\n    &.c--inprogress {\n        background-image: url(/Apps/Site/Projects/Default/UI/Components/Timeline/Images/inprogress.png);\n    }\n\n    &.c--red {\n        background-color: #D12313;\n    }\n\n    &.c--orange {\n        background-color: #E66924;\n    }\n\n    &.c--yellow {\n        background-color: #DEBD3D;\n    }\n\n    &.c--yellow {\n        background-color: #DEBD3D;\n    }\n\n    &.c--green {\n        background-color: #008835;\n    }\n\n    &.c--blue {\n        background-color: #0066BC;\n    }\n}\n\n\n.c-timeline__arrow {\n    content: '';\n    position: absolute;\n    top: 0; \n    right: -40px;\n    /*same dimension as the line-height of .breadcrumb a */\n    width: 80px; \n    height: 80px;\n    /*as you see the rotated square takes a larger height. which makes it tough to position it properly. So we are going to scale it down so that the diagonals become equal to the line-height of the link. We scale it to 70.7% because if square's: \n    length = 1; diagonal = (1^2 + 1^2)^0.5 = 1.414 (pythagoras theorem)\n    if diagonal required = 1; length = 1/1.414 = 0.707*/\n    transform: scale(0.707) rotate(45deg);\n    /*we need to prevent the arrows from getting buried under the next link*/\n    z-index: 1;\n    border-radius: 0 5px 0 80px;\n    background: grey;\n\n    &.c--completed {\n        display: block; /* TODO: remove hack to make react-look treat it as a different declaration */\n    }\n\n    &.c--red {\n        background-color: #D12313;\n        display: block; /* TODO: remove hack to make react-look treat it as a different declaration */\n    }\n\n    &.c--orange {\n        background-color: #E66924;\n        display: block; /* TODO: remove hack to make react-look treat it as a different declaration */\n    }\n\n    &.c--yellow {\n        background-color: #DEBD3D;\n        display: block; /* TODO: remove hack to make react-look treat it as a different declaration */\n    }\n\n    &.c--green {\n        background-color: #008835;\n        display: block; /* TODO: remove hack to make react-look treat it as a different declaration */\n    }\n\n    &.c--blue {\n        background-color: #0066BC;\n        display: block; /* TODO: remove hack to make react-look treat it as a different declaration */\n    }\n}\n\n.c-timeline__arrow-last {\n    content: none;\n}"

/***/ },

/***/ 1187:
/***/ function(module, exports) {

	module.exports = ".t-game {\n    display: block;\n}"

/***/ },

/***/ 1188:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Screen=__webpack_require__(1189);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Screen).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1189:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof (typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Projects/Esgaroth/UI/Screens/Document/Screen.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


	var _Stoke=__webpack_require__(1177);var _Stoke2=_interopRequireDefault(_Stoke);
	var _Markdown=__webpack_require__(1092);var _Markdown2=_interopRequireDefault(_Markdown);

	var _Actions=__webpack_require__(1172);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var React=Framework.React;var ReactDOM=Framework.ReactDOM;var ReactNative=Framework.ReactNative;var PropTypes=Framework.PropTypes;var T=Framework.T;var connect=Framework.connect;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var Animated=Framework.Animated;var Dimensions=Framework.Dimensions;var Router=Framework.Router;var Route=Framework.Route;var Link=Framework.Link;var createStore=Framework.createStore;var browserHistory=Framework.browserHistory;var compose=Framework.compose;var applyMiddleware=Framework.applyMiddleware;var thunkMiddleware=Framework.thunkMiddleware;var Provider=Framework.Provider;var syncHistoryWithStore=Framework.syncHistoryWithStore;var routerReducer=Framework.routerReducer;var combineReducers=Framework.combineReducers;var createLogger=Framework.createLogger;var renderToString=Framework.renderToString;var 

	Screen=function(_Component){_inherits(Screen,_Component);



	function Screen(){_classCallCheck(this,Screen);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Screen).call(this));


	_this.state={
	page:{
	title:'',
	slim:false}};return _this;}_createClass(Screen,[{key:'onPageChange',value:function onPageChange(




	state){
	this.setState({
	page:state});}},{key:'render',value:function render()



	{var _this2=this;var _props=
	this.props;var site=_props.site;var location=_props.location;

	var content=
	React.createElement(_Markdown2.default,{src:"/Apps/Site/Projects/Esgaroth/Pages/"+(location||'home')+".md",onChange:function onChange(state){return _this2.onPageChange(state);},__source:{fileName:_jsxFileName,lineNumber:34}});


	var page=this.state.page;

	var breadcrumb=
	React.createElement('ul',{className:'breadcrumb',__source:{fileName:_jsxFileName,lineNumber:40}},
	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:41}},React.createElement('a',{href:'/',__source:{fileName:_jsxFileName,lineNumber:41}},React.createElement('i',{className:'icon-home',__source:{fileName:_jsxFileName,lineNumber:41}}),' ',site.title)),
	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:42}},React.createElement('a',{href:location,__source:{fileName:_jsxFileName,lineNumber:42}},page.title)));



	return (
	React.createElement(_Stoke2.default,{breadcrumb:breadcrumb,__source:{fileName:_jsxFileName,lineNumber:47}},
	!page.slim&&
	React.createElement(View,{className:'box',__source:{fileName:_jsxFileName,lineNumber:49}},
	React.createElement(View,{className:'tab-header',__source:{fileName:_jsxFileName,lineNumber:50}},
	page.title),

	React.createElement(View,{className:'padded',__source:{fileName:_jsxFileName,lineNumber:53}},
	content)),



	page.slim&&
	content));}}]);return Screen;}(Component);Screen.propTypes={};






	function mapStateToProps(state){var 
	site=state.site;var routing=state.routing;


	var location=null;
	if(typeof routing.locationBeforeTransitions==='string'){
	location=routing.locationBeforeTransitions.replace('/','');}else 
	if(_typeof(routing.locationBeforeTransitions)==='object'&&routing.locationBeforeTransitions){
	location=routing.locationBeforeTransitions.pathname.replace(/^\//,'').replace(/\/$/,'');}else 
	if(typeof window!=='undefined'){
	location=window.location.pathname.replace('/','');}


	return {
	site:site,
	location:location};}exports.default=



	connect(mapStateToProps)(Screen);

/***/ },

/***/ 1190:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Logout=__webpack_require__(1191);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Logout).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1191:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Projects/Esgaroth/UI/Screens/Logout/Logout.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


	var _Stoke=__webpack_require__(1177);var _Stoke2=_interopRequireDefault(_Stoke);
	var _Markdown=__webpack_require__(1092);var _Markdown2=_interopRequireDefault(_Markdown);

	var _reactRedux=__webpack_require__(239);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var React=Framework.React;var ReactDOM=Framework.ReactDOM;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var 

	Screen=function(_Component){_inherits(Screen,_Component);function Screen(){_classCallCheck(this,Screen);return _possibleConstructorReturn(this,Object.getPrototypeOf(Screen).apply(this,arguments));}_createClass(Screen,[{key:'render',value:function render()

	{

	return (
	React.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:14}},'Logout'));}}]);return Screen;}(Component);




	Screen.propTypes={};


	function mapStateToProps(state){
	return {};}exports.default=



	(0,_reactRedux.connect)(mapStateToProps)(Screen);

/***/ },

/***/ 1194:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Login=__webpack_require__(1195);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Login).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1195:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Projects/Esgaroth/UI/Screens/Login/Login.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


	var _Stoke=__webpack_require__(1177);var _Stoke2=_interopRequireDefault(_Stoke);

















	var _auth=__webpack_require__(1173);var authActions=_interopRequireWildcard(_auth);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else {var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var React=Framework.React;var ReactDOM=Framework.ReactDOM;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var bindActionCreators=Framework.bindActionCreators;var asyncConnect=Framework.asyncConnect;var Platform=Framework.Platform;var T=Framework.T;var connect=Framework.connect;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var Screen=function(_Component){_inherits(Screen,_Component);function Screen(){_classCallCheck(this,Screen);return _possibleConstructorReturn(this,Object.getPrototypeOf(Screen).apply(this,arguments));}_createClass(Screen,[{key:'render',value:function render(){return React.createElement(_Stoke2.default,{__source:{fileName:_jsxFileName,lineNumber:15}},'Logged in as: ',this.props.user);}}]);return Screen;}(Component);Screen.propTypes={user:T.object,login:T.func,logout:T.func};

	function mapStateToProps(state){
	return {
	user:state.auth.user};}



	function mapDispatchToProps(dispatch){
	return {
	actions:bindActionCreators(authActions,dispatch)};}



	var info=__webpack_require__(1174);
	var auth=__webpack_require__(1173);

	var asyncItems=[{
	key:'login',
	promise:function promise(_ref){var _ref$store=_ref.store;var dispatch=_ref$store.dispatch;var getState=_ref$store.getState;var client=_ref.helpers.client;
	var promises=[];

	if(!info.isLoaded(getState())){
	promises.push(dispatch(info.load()));}

	if(!auth.isLoaded(getState())){
	promises.push(dispatch(auth.load()));}


	return Promise.all(promises);}}];exports.default=



	asyncConnect(asyncItems,mapStateToProps,mapDispatchToProps)(Screen);

/***/ },

/***/ 1196:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _User=__webpack_require__(1197);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_User).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1197:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Projects/Esgaroth/UI/Screens/User/User.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


	var _Stoke=__webpack_require__(1177);var _Stoke2=_interopRequireDefault(_Stoke);
	var _auth=__webpack_require__(1173);var authActions=_interopRequireWildcard(_auth);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else {var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var React=Framework.React;var ReactDOM=Framework.ReactDOM;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var connect=Framework.connect;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var 

	Screen=function(_Component){_inherits(Screen,_Component);function Screen(){_classCallCheck(this,Screen);return _possibleConstructorReturn(this,Object.getPrototypeOf(Screen).apply(this,arguments));}_createClass(Screen,[{key:'render',value:function render()
	{
	return (
	React.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:10}},'Logged in as: ',this.props.user));}}]);return Screen;}(Component);




	function mapStateToProps(state){
	return {
	user:state.auth.user};}exports.default=



	connect(mapStateToProps,authActions)(Screen);

/***/ },

/***/ 1202:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Screen=__webpack_require__(1203);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Screen).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1203:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof (typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Projects/Erech/UI/Screens/Home/Screen.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


	var _Stoke=__webpack_require__(1204);var _Stoke2=_interopRequireDefault(_Stoke);
	var _Markdown=__webpack_require__(1092);var _Markdown2=_interopRequireDefault(_Markdown);

	var _reactRedux=__webpack_require__(239);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var React=Framework.React;var PropTypes=Framework.PropTypes;var ReactDOM=Framework.ReactDOM;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var 

	Screen=function(_Component){_inherits(Screen,_Component);
	function Screen(){_classCallCheck(this,Screen);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Screen).call(this));

	_this.state={
	page:{
	title:'',
	body:'',
	items:[],
	options:{}}};


	_this.handleChange=_this.handleChange.bind(_this);
	_this.handleRefreshClick=_this.handleRefreshClick.bind(_this);return _this;}_createClass(Screen,[{key:'onPageChange',value:function onPageChange(

	state){
	if(JSON.stringify(this.state.page)===JSON.stringify(state)){
	return;}


	this.setState({page:state});}},{key:'render',value:function render()

	{var _this2=this;
	var page=this.props.location;

	if(!page){page='home';}

	var breadcrumb=null;

	this.state.page.items.forEach(function(item){
	if(item.title==='Breadcrumb'){
	breadcrumb=item.body;}});




	this.state.page.options.slim=page==='home';var _props=

	this.props;var selectedSubreddit=_props.selectedSubreddit;var posts=_props.posts;var isFetching=_props.isFetching;var lastUpdated=_props.lastUpdated;

	return (
	React.createElement(_Stoke2.default,{breadcrumb:breadcrumb,__source:{fileName:_jsxFileName,lineNumber:49}},
	!this.state.page.options.slim&&
	React.createElement('div',{className:'box',__source:{fileName:_jsxFileName,lineNumber:51}},
	React.createElement('div',{className:'tab-header',__source:{fileName:_jsxFileName,lineNumber:52}},
	this.state.page.title),

	React.createElement('div',{className:'padded',__source:{fileName:_jsxFileName,lineNumber:55}},
	React.createElement(_Markdown2.default,{src:"/Apps/Site/Projects/Erech/Pages/"+page+".md",onChange:function onChange(state){return _this2.onPageChange(state);},__source:{fileName:_jsxFileName,lineNumber:56}}))),



	this.state.page.options.slim&&
	React.createElement(_Markdown2.default,{src:"/Apps/Site/Projects/Erech/Pages/"+page+".md",onChange:function onChange(state){return _this2.onPageChange(state);},__source:{fileName:_jsxFileName,lineNumber:61}})));}}]);return Screen;}(Component);






	function mapStateToProps(state){var 
	routing=state.routing;


	var location=null;
	if(typeof routing.locationBeforeTransitions==='string'){
	location=routing.locationBeforeTransitions.replace('/','');}else 
	if(_typeof(routing.locationBeforeTransitions)==='object'&&routing.locationBeforeTransitions){
	location=routing.locationBeforeTransitions.pathname.replace('/','');}else 
	if(typeof window!=='undefined'){
	location=window.location.pathname.replace('/','');}


	return {
	location:location};}exports.default=



	(0,_reactRedux.connect)(mapStateToProps)(Screen);

/***/ },

/***/ 1204:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Layout=__webpack_require__(1205);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Layout).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1205:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof (typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Projects/Erech/UI/Layouts/Stoke/Layout.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


	var _reactRouter=__webpack_require__(22);
	var _reactRedux=__webpack_require__(239);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var React=Framework.React;var ReactDOM=Framework.ReactDOM;var PropTypes=Framework.PropTypes;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var 

	Layout=function(_Component){_inherits(Layout,_Component);












	function Layout(){_classCallCheck(this,Layout);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Layout).call(this));


	_this.state={
	showGames:false};return _this;}_createClass(Layout,[{key:'componentDidMount',value:function componentDidMount()



	{var _this2=this;
	if(typeof window!=='undefined'){
	document.body.style='background: #605F65 url(/Apps/Site/Projects/Esgaroth/Assets/Other/images/linen-lighter.png);';
	document.getElementById('ui').style='background: transparent url(/Apps/Site/Projects/Esgaroth/Assets/Other/images/logo-bg.png) no-repeat -200px 0; background-size: auto 550px;';}


	Framework.getStyles(Framework.Platform.Env.isServer?__webpack_require__(420).readFileSync(__dirname+'/Layout.css').toString():__webpack_require__(1206),'stokelayout-',function(styles){
	_this2.setState({
	styles:styles});});}},{key:'render',value:function render()




	{var _props=
	this.props;var children=_props.children;var breadcrumb=_props.breadcrumb;var games=_props.games;var site=_props.site;

	if(!this.state.styles){return React.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:44}});}

	return Framework.wrapStyles(this.state.styles,
	React.createElement(View,{__source:{fileName:_jsxFileName,lineNumber:47}},
	React.createElement('div',{className:'container',__source:{fileName:_jsxFileName,lineNumber:48}},
	React.createElement('div',{styles:'c-header',__source:{fileName:_jsxFileName,lineNumber:49}},
	React.createElement('div',{styles:'c-header__left',__source:{fileName:_jsxFileName,lineNumber:50}},
	React.createElement('h1',{styles:'c-header__logo',__source:{fileName:_jsxFileName,lineNumber:51}},
	React.createElement(_reactRouter.Link,{to:"/",styles:'c-header__title',__source:{fileName:_jsxFileName,lineNumber:52}},
	site.title))),



	React.createElement('div',{styles:'c-header__right',__source:{fileName:_jsxFileName,lineNumber:57}},
	React.createElement('ul',{styles:'c-nav',__source:{fileName:_jsxFileName,lineNumber:58}},
	React.createElement('li',{styles:'c-nav__item',__source:{fileName:_jsxFileName,lineNumber:59}},
	React.createElement(_reactRouter.Link,{to:"/about",styles:'c-nav__link',__source:{fileName:_jsxFileName,lineNumber:60}},'OUR STORY'),
	React.createElement(_reactRouter.Link,{to:"/careers",styles:'c-nav__link',__source:{fileName:_jsxFileName,lineNumber:61}},'CAREERS'),
	React.createElement(_reactRouter.Link,{to:"/games",styles:'c-nav__link',__source:{fileName:_jsxFileName,lineNumber:62}},'GAMES'),
	React.createElement(_reactRouter.Link,{to:"/news",styles:'c-nav__link',__source:{fileName:_jsxFileName,lineNumber:63}},'NEWS'))))),





	typeof breadcrumb==='string'&&React.createElement('div',{dangerouslySetInnerHTML:{__html:breadcrumb},__source:{fileName:_jsxFileName,lineNumber:69}}),
	(typeof breadcrumb==='undefined'?'undefined':_typeof(breadcrumb))==='object'&&breadcrumb,
	!breadcrumb&&
	React.createElement('ul',{className:'breadcrumb',__source:{fileName:_jsxFileName,lineNumber:72}},
	React.createElement('li',{className:'active',__source:{fileName:_jsxFileName,lineNumber:73}},
	React.createElement(_reactRouter.Link,{to:"/",__source:{fileName:_jsxFileName,lineNumber:74}},React.createElement('i',{className:'icon-home',__source:{fileName:_jsxFileName,lineNumber:74}}),' ',site.title))),




	React.createElement('nav',{id:'secondary',className:'main-nav black-box tex',__source:{fileName:_jsxFileName,lineNumber:79}},
	React.createElement('div',{className:'nav-menu box',__source:{fileName:_jsxFileName,lineNumber:80}},
	React.createElement('ul',{className:'nav nav-list',__source:{fileName:_jsxFileName,lineNumber:81}},
	React.createElement('li',{className:'active',__source:{fileName:_jsxFileName,lineNumber:82}},
	React.createElement(_reactRouter.Link,{to:"/",__source:{fileName:_jsxFileName,lineNumber:83}},
	React.createElement('i',{className:'icon-home',__source:{fileName:_jsxFileName,lineNumber:84}}),' Home')),


	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:87}},
	React.createElement(_reactRouter.Link,{to:"/about",__source:{fileName:_jsxFileName,lineNumber:88}},'About')),



	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:92}},
	React.createElement(_reactRouter.Link,{to:"/contact",__source:{fileName:_jsxFileName,lineNumber:93}},'Contact')),



	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:97}},
	React.createElement(_reactRouter.Link,{to:"/games",__source:{fileName:_jsxFileName,lineNumber:98}},
	React.createElement('i',{className:'icon-book',__source:{fileName:_jsxFileName,lineNumber:99}}),' Games',
	React.createElement('span',{className:'pull-right badge',__source:{fileName:_jsxFileName,lineNumber:100}},games.list.length))),


	games.list.map(function(item){
	return (
	React.createElement('li',{key:item.code,__source:{fileName:_jsxFileName,lineNumber:105}},
	React.createElement(_reactRouter.Link,{to:"/games/"+item.code,__source:{fileName:_jsxFileName,lineNumber:106}},item.title)));})))),







	React.createElement('section',{id:'main',__source:{fileName:_jsxFileName,lineNumber:114}},
	React.createElement('div',{className:'container-fluid',__source:{fileName:_jsxFileName,lineNumber:115}},
	React.createElement('div',{className:'row-fluid',__source:{fileName:_jsxFileName,lineNumber:116}},
	React.createElement('div',{className:'span12',__source:{fileName:_jsxFileName,lineNumber:117}},
	children))),



	React.createElement('div',{className:'row-fluid',__source:{fileName:_jsxFileName,lineNumber:122}},
	React.createElement('div',{className:'span12',__source:{fileName:_jsxFileName,lineNumber:123}},
	React.createElement('div',{className:'footer',__source:{fileName:_jsxFileName,lineNumber:124}},
	React.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:125}},'Copyright ',site.copyright.date,' © ',React.createElement(_reactRouter.Link,{to:"/",__source:{fileName:_jsxFileName,lineNumber:125}},site.copyright.company),'. All rights reserved.'))))))));}}]);return Layout;}(Component);Layout.propTypes={breadcrumb:PropTypes.element,games:PropTypes.object.isRequired,site:PropTypes.object.isRequired};Layout.defaultProps={breadcrumb:null,games:[],site:{}};










	function mapStateToProps(state){var 
	games=state.games;var site=state.site;

	return {
	games:games,
	site:site};}exports.default=



	(0,_reactRedux.connect)(mapStateToProps)(Layout);
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },

/***/ 1206:
/***/ function(module, exports) {

	module.exports = "$mobile-width: 320px;\n$tablet-width: 768px;\n$desktop-width: 1024px;\n\n@mixin mobile {\n  @media (min-width: #{$mobile-width}) {\n    @content;\n  }\n}\n\n@mixin tablet {\n  @media (min-width: #{$tablet-width}) {\n    @content;\n  }\n}\n\n@mixin desktop {\n  @media (min-width: #{$desktop-width}) {\n    @content;\n  }\n}\n\n.c-header {\n    position: fixed;\n    top: 0;\n    left: 0%;\n    width: 100%;\n    opacity: 0.95;\n    border-radius: 0 0 5px 5px;\n    background: #2a2a30;\n    background-size: 100%;\n    background-image: linear-gradient(top, #494852, #2a2a30);\n    border-bottom: 1px solid #1d1e21;\n    border-right: 1px solid #1d1e21;\n    border-left: 1px solid #1d1e21;\n    margin-bottom: 20px;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n    padding-right: 20px;\n    padding-left: 20px;\n    display: flex;\n    flex-wrap: wrap;\n\n    @include tablet {\n        left: 7%;\n        width: 86%;\n    }\n}\n\n.c-header__left {\n    flex: 1;\n    margin-left: 0;\n\n    @include tablet {\n    }\n}\n\n.c-header__right {\n    flex: 1;\n\n    @include tablet {\n    }\n}\n\n.c-header__logo {\n    margin: 0;\n    background: transparent url(/Apps/Site/Projects/Esgaroth/Assets/Other/images/logo.png) no-repeat 0 7px;\n    background-size: auto 70%;\n    padding-left: 43px;\n}\n\n.c-header__title {\n    font-size: 22px;\n    color: #fff;\n}\n\n\n.c-nav {\n  \n}\n\n.c-nav__item {\n    padding: 12px 0;\n    text-align: right;\n}\n\n.c-nav__link {\n    text-transform: uppercase;\n    padding: 10px 7px;\n    font-weight: bold;\n    color: #949494;\n    font-size: 14px;\n}\n\n.c-nav__link:hover {\n    color: #fff;\n}\n"

/***/ },

/***/ 1207:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Screen=__webpack_require__(1208);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Screen).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1208:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Projects/Erech/UI/Screens/Games/Screen.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


	var _Stoke=__webpack_require__(1204);var _Stoke2=_interopRequireDefault(_Stoke);
	var _Markdown=__webpack_require__(1092);var _Markdown2=_interopRequireDefault(_Markdown);

	var _reactRouter=__webpack_require__(22);
	var _reactRedux=__webpack_require__(239);
	var _Actions=__webpack_require__(1201);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var React=Framework.React;var PropTypes=Framework.PropTypes;var ReactDOM=Framework.ReactDOM;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var 

	Screen=function(_Component){_inherits(Screen,_Component);function Screen(){_classCallCheck(this,Screen);return _possibleConstructorReturn(this,Object.getPrototypeOf(Screen).apply(this,arguments));}_createClass(Screen,[{key:'render',value:function render()




	{var _props=
	this.props;var site=_props.site;var games=_props.games;

	var breadcrumb=
	React.createElement('ul',{className:'breadcrumb',__source:{fileName:_jsxFileName,lineNumber:20}},
	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:21}},React.createElement('a',{href:'/',__source:{fileName:_jsxFileName,lineNumber:21}},React.createElement('i',{className:'icon-home',__source:{fileName:_jsxFileName,lineNumber:21}}),' ',site.title)),
	React.createElement('li',{className:'active',__source:{fileName:_jsxFileName,lineNumber:22}},React.createElement('a',{href:'/games',__source:{fileName:_jsxFileName,lineNumber:22}},'Games')));



	return (
	React.createElement(_Stoke2.default,{breadcrumb:breadcrumb,__source:{fileName:_jsxFileName,lineNumber:27}},
	React.createElement('div',{style:{padding:"20px"},__source:{fileName:_jsxFileName,lineNumber:28}},
	React.createElement('ul',{className:'games',__source:{fileName:_jsxFileName,lineNumber:29}},
	games.list.map(function(item,i){
	var posList=[
	'0% 40%',
	'100% 40%',
	'20% 40%',
	'0% 40%',
	'20% 40%'];

	var pos=posList[i];
	return (
	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:40}},
	React.createElement(_reactRouter.Link,{to:"/games/"+item.code,className:'button large',style:{background:"url(http://wallpapercave.com/wp/oE14KTB.jpg) no-repeat "+pos,color:"#fff",boxShadow:"0 1px 32px rgba(0, 0, 0, 0.7), inset 0 1px 18px rgba(255, 255, 255, 0.5)",border:"1px solid #444"},__source:{fileName:_jsxFileName,lineNumber:41}},
	React.createElement('i',{className:"icon-"+item.icon,__source:{fileName:_jsxFileName,lineNumber:42}}),
	React.createElement('span',{__source:{fileName:_jsxFileName,lineNumber:43}},item.title))));})))));}}]);return Screen;}(Component);Screen.propTypes={games:PropTypes.object.isRequired};











	function mapStateToProps(state){var 
	site=state.site;var games=state.games;

	return {
	site:site,
	games:games};}exports.default=



	(0,_reactRedux.connect)(mapStateToProps)(Screen);

/***/ },

/***/ 1209:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Screen=__webpack_require__(1210);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Screen).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1210:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof (typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Projects/Erech/UI/Screens/GameDetails/Screen.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


	var _Stoke=__webpack_require__(1204);var _Stoke2=_interopRequireDefault(_Stoke);
	var _Markdown=__webpack_require__(1092);var _Markdown2=_interopRequireDefault(_Markdown);
	var _Timeline=__webpack_require__(1184);var _Timeline2=_interopRequireDefault(_Timeline);

	var _reactRedux=__webpack_require__(239);
	var _Actions=__webpack_require__(1201);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var React=Framework.React;var PropTypes=Framework.PropTypes;var ReactDOM=Framework.ReactDOM;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var 

	Screen=function(_Component){_inherits(Screen,_Component);



	function Screen(){_classCallCheck(this,Screen);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Screen).call(this));


	_this.state={
	page:{
	title:'',
	slim:false}};return _this;}_createClass(Screen,[{key:'componentWillMount',value:function componentWillMount()




	{var _this2=this;
	Framework.getStyles(Framework.Platform.Env.isServer?__webpack_require__(420).readFileSync(__dirname+'/Screen.css').toString():__webpack_require__(1211),'stokelayout-',function(styles){
	_this2.setState({
	styles:styles});});}},{key:'onPageChange',value:function onPageChange(




	state){
	this.setState({
	page:state});}},{key:'render',value:function render()



	{var _this3=this;var _props=
	this.props;var site=_props.site;var location=_props.location;var game=_props.game;

	if(!this.state.styles){return React.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:43}});}

	var content=
	React.createElement(_Markdown2.default,{src:"/Apps/Site/Projects/Esgaroth/Pages/"+(location||'home')+".md",onChange:function onChange(state){return _this3.onPageChange(state);},__source:{fileName:_jsxFileName,lineNumber:46}});


	var page=this.state.page;

	var breadcrumb=
	React.createElement('ul',{className:'breadcrumb',__source:{fileName:_jsxFileName,lineNumber:52}},
	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:53}},React.createElement('a',{href:'/',__source:{fileName:_jsxFileName,lineNumber:53}},React.createElement('i',{className:'icon-home',__source:{fileName:_jsxFileName,lineNumber:53}}),' ',site.title)),
	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:54}},React.createElement('a',{href:'/games',__source:{fileName:_jsxFileName,lineNumber:54}},'Games')),
	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:55}},React.createElement('a',{href:location,__source:{fileName:_jsxFileName,lineNumber:55}},page.title)));



	return Framework.wrapStyles(this.state.styles,
	React.createElement(_Stoke2.default,{breadcrumb:breadcrumb,__source:{fileName:_jsxFileName,lineNumber:60}},
	!page.slim&&
	React.createElement('div',{className:'box',__source:{fileName:_jsxFileName,lineNumber:62}},
	React.createElement('div',{className:'tab-header',__source:{fileName:_jsxFileName,lineNumber:63}},
	page.title),

	React.createElement('div',{className:'padded',__source:{fileName:_jsxFileName,lineNumber:66}},
	game.timeline&&React.createElement(_Timeline2.default,{stages:game.timeline,__source:{fileName:_jsxFileName,lineNumber:67}}),
	content)),



	page.slim&&
	content));}}]);return Screen;}(Component);Screen.propTypes={};






	function mapStateToProps(state){var 
	site=state.site;var games=state.games;var routing=state.routing;


	var location=null;
	if(typeof routing.locationBeforeTransitions==='string'){
	location=routing.locationBeforeTransitions.replace('/','');}else 
	if(_typeof(routing.locationBeforeTransitions)==='object'&&routing.locationBeforeTransitions){
	location=routing.locationBeforeTransitions.pathname;}else 
	if(typeof window!=='undefined'){
	location=window.location.pathname.replace('/','');}


	var code=location.replace('/games/','');
	var game=games.list.reduce(function(prev,current){return prev.code===code&&prev||current.code===code&&current;});

	return {
	site:site,
	game:game,
	location:location};}exports.default=



	(0,_reactRedux.connect)(mapStateToProps)(Screen);
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },

/***/ 1211:
/***/ function(module, exports) {

	module.exports = ".t-game {\n    display: block;\n}"

/***/ },

/***/ 1212:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _PageOne=__webpack_require__(1213);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_PageOne).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1213:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Projects/Erech/UI/Screens/Categories/PageOne.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


	var _Stoke=__webpack_require__(1204);var _Stoke2=_interopRequireDefault(_Stoke);
	var _Markdown=__webpack_require__(1092);var _Markdown2=_interopRequireDefault(_Markdown);

	var _reactRedux=__webpack_require__(239);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var React=Framework.React;var ReactDOM=Framework.ReactDOM;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var 

	Screen=function(_Component){_inherits(Screen,_Component);function Screen(){_classCallCheck(this,Screen);return _possibleConstructorReturn(this,Object.getPrototypeOf(Screen).apply(this,arguments));}_createClass(Screen,[{key:'render',value:function render()

	{

	return (
	React.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:14}},'PageOne'));}}]);return Screen;}(Component);




	Screen.propTypes={};


	function mapStateToProps(state){
	return {};}exports.default=



	(0,_reactRedux.connect)(mapStateToProps)(Screen);

/***/ },

/***/ 1214:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _PageTwo=__webpack_require__(1215);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_PageTwo).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1215:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Projects/Erech/UI/Screens/CategoryDetails/PageTwo.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


	var _Stoke=__webpack_require__(1204);var _Stoke2=_interopRequireDefault(_Stoke);
	var _Markdown=__webpack_require__(1092);var _Markdown2=_interopRequireDefault(_Markdown);

	var _reactRedux=__webpack_require__(239);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var React=Framework.React;var ReactDOM=Framework.ReactDOM;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var 

	Screen=function(_Component){_inherits(Screen,_Component);function Screen(){_classCallCheck(this,Screen);return _possibleConstructorReturn(this,Object.getPrototypeOf(Screen).apply(this,arguments));}_createClass(Screen,[{key:'render',value:function render()

	{

	return (
	React.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:14}},'PageTwo'));}}]);return Screen;}(Component);




	Screen.propTypes={};


	function mapStateToProps(state){
	return {};}exports.default=



	(0,_reactRedux.connect)(mapStateToProps)(Screen);

/***/ },

/***/ 1216:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Landing=__webpack_require__(1217);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Landing).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1217:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Projects/Erech/UI/Screens/News/Landing.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


	var _Stoke=__webpack_require__(1204);var _Stoke2=_interopRequireDefault(_Stoke);
	var _Markdown=__webpack_require__(1092);var _Markdown2=_interopRequireDefault(_Markdown);

	var _reactRedux=__webpack_require__(239);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var React=Framework.React;var ReactDOM=Framework.ReactDOM;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var 

	Screen=function(_Component){_inherits(Screen,_Component);function Screen(){_classCallCheck(this,Screen);return _possibleConstructorReturn(this,Object.getPrototypeOf(Screen).apply(this,arguments));}_createClass(Screen,[{key:'render',value:function render()

	{

	return (
	React.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:14}},'Landing'));}}]);return Screen;}(Component);




	Screen.propTypes={};


	function mapStateToProps(state){
	return {};}exports.default=



	(0,_reactRedux.connect)(mapStateToProps)(Screen);

/***/ },

/***/ 1218:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Login=__webpack_require__(1219);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Login).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1219:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Projects/Erech/UI/Screens/NewsDetails/Login.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


	var _Stoke=__webpack_require__(1204);var _Stoke2=_interopRequireDefault(_Stoke);
	var _Markdown=__webpack_require__(1092);var _Markdown2=_interopRequireDefault(_Markdown);

	var _reactRedux=__webpack_require__(239);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var React=Framework.React;var ReactDOM=Framework.ReactDOM;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var 

	Screen=function(_Component){_inherits(Screen,_Component);function Screen(){_classCallCheck(this,Screen);return _possibleConstructorReturn(this,Object.getPrototypeOf(Screen).apply(this,arguments));}_createClass(Screen,[{key:'render',value:function render()
	{

	return (
	React.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:13}},'Login'));}}]);return Screen;}(Component);




	Screen.propTypes={};


	function mapStateToProps(state){
	return {};}exports.default=



	(0,_reactRedux.connect)(mapStateToProps)(Screen);

/***/ },

/***/ 1220:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Screen=__webpack_require__(1221);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Screen).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1221:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof (typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Projects/Erech/UI/Screens/Default/Screen.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


	var _Stoke=__webpack_require__(1204);var _Stoke2=_interopRequireDefault(_Stoke);
	var _Markdown=__webpack_require__(1092);var _Markdown2=_interopRequireDefault(_Markdown);

	var _reactRedux=__webpack_require__(239);
	var _Actions=__webpack_require__(1201);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var React=Framework.React;var PropTypes=Framework.PropTypes;var ReactDOM=Framework.ReactDOM;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var 

	Screen=function(_Component){_inherits(Screen,_Component);



	function Screen(){_classCallCheck(this,Screen);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Screen).call(this));


	_this.state={
	page:{
	title:'',
	slim:false}};return _this;}_createClass(Screen,[{key:'onPageChange',value:function onPageChange(




	state){
	this.setState({
	page:state});}},{key:'render',value:function render()



	{var _this2=this;var _props=
	this.props;var site=_props.site;var location=_props.location;

	var content=
	React.createElement(_Markdown2.default,{src:"/Apps/Site/Projects/Esgaroth/Pages/"+(location||'home')+".md",onChange:function onChange(state){return _this2.onPageChange(state);},__source:{fileName:_jsxFileName,lineNumber:35}});


	var page=this.state.page;

	var breadcrumb=
	React.createElement('ul',{className:'breadcrumb',__source:{fileName:_jsxFileName,lineNumber:41}},
	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:42}},React.createElement('a',{href:'/',__source:{fileName:_jsxFileName,lineNumber:42}},React.createElement('i',{className:'icon-home',__source:{fileName:_jsxFileName,lineNumber:42}}),' ',site.title)),
	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:43}},React.createElement('a',{href:location,__source:{fileName:_jsxFileName,lineNumber:43}},page.title)));



	return (
	React.createElement(_Stoke2.default,{breadcrumb:breadcrumb,__source:{fileName:_jsxFileName,lineNumber:48}},
	!page.slim&&
	React.createElement('div',{className:'box',__source:{fileName:_jsxFileName,lineNumber:50}},
	React.createElement('div',{className:'tab-header',__source:{fileName:_jsxFileName,lineNumber:51}},
	page.title),

	React.createElement('div',{className:'padded',__source:{fileName:_jsxFileName,lineNumber:54}},
	content)),



	page.slim&&
	content));}}]);return Screen;}(Component);Screen.propTypes={};






	function mapStateToProps(state){var 
	site=state.site;var routing=state.routing;


	var location=null;
	if(typeof routing.locationBeforeTransitions==='string'){
	location=routing.locationBeforeTransitions.replace('/','');}else 
	if(_typeof(routing.locationBeforeTransitions)==='object'&&routing.locationBeforeTransitions){
	location=routing.locationBeforeTransitions.pathname;}else 
	if(typeof window!=='undefined'){
	location=window.location.pathname.replace('/','');}



	return {
	site:site,
	location:location};}exports.default=



	(0,_reactRedux.connect)(mapStateToProps)(Screen);

/***/ },

/***/ 1246:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Screen=__webpack_require__(1247);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Screen).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1247:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Projects/Moria/UI/Screens/Home/Screen.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



	var _Default=__webpack_require__(1248);var _Default2=_interopRequireDefault(_Default);
	var _Markdown=__webpack_require__(1092);var _Markdown2=_interopRequireDefault(_Markdown);




























































	var _auth=__webpack_require__(1243);var authActions=_interopRequireWildcard(_auth);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else {var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var React=Framework.React;var ReactDOM=Framework.ReactDOM;var ReactNative=Framework.ReactNative;var bindActionCreators=Framework.bindActionCreators;var asyncConnect=Framework.asyncConnect;var PropTypes=Framework.PropTypes;var T=Framework.T;var connect=Framework.connect;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var Animated=Framework.Animated;var Dimensions=Framework.Dimensions;var Router=Framework.Router;var Route=Framework.Route;var Link=Framework.Link;var createStore=Framework.createStore;var browserHistory=Framework.browserHistory;var compose=Framework.compose;var applyMiddleware=Framework.applyMiddleware;var thunkMiddleware=Framework.thunkMiddleware;var Provider=Framework.Provider;var syncHistoryWithStore=Framework.syncHistoryWithStore;var routerReducer=Framework.routerReducer;var combineReducers=Framework.combineReducers;var createLogger=Framework.createLogger;var renderToString=Framework.renderToString;var _require=__webpack_require__(1251);var Code=_require.Code;var CodeBlock=_require.CodeBlock;var Screen=function(_Component){_inherits(Screen,_Component);function Screen(){_classCallCheck(this,Screen);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Screen).call(this));_this.state={page:{title:'',body:'',items:[],options:{}}};return _this;}_createClass(Screen,[{key:'onPageChange',value:function onPageChange(state){if(JSON.stringify(this.state.page)===JSON.stringify(state)){return;}this.setState({page:state});}},{key:'componentWillMount',value:function componentWillMount(){var _this2=this;Framework.getStyles(Framework.Platform.Env.isServer?__webpack_require__(420).readFileSync(__dirname+'/Screen.css').toString():__webpack_require__(1255),'stokelayout-',function(styles){_this2.setState({styles:styles});});}},{key:'render',value:function render(){var _this3=this;var news=this.props.news;var page=this.props.location.pathname.replace('/','');if(!page){page='home';}return Framework.wrapStyles(this.state.styles,React.createElement(_Default2.default,{__source:{fileName:_jsxFileName,lineNumber:40}},React.createElement('p',{__source:{fileName:_jsxFileName,lineNumber:41}},'Look at this ',React.createElement(Code,{__source:{fileName:_jsxFileName,lineNumber:41}},'inline code'),'!'),React.createElement(CodeBlock,{__source:{fileName:_jsxFileName,lineNumber:42}},'And this code block!'),React.createElement(View,{__source:{fileName:_jsxFileName,lineNumber:43}},'Amazing ',React.createElement(Link,{to:'/set/10179-1/mf',__source:{fileName:_jsxFileName,lineNumber:43}},'10179')),news&&news.rows.map(function(row){return React.createElement(View,{__source:{fileName:_jsxFileName,lineNumber:46}},row.items.map(function(item){return React.createElement(View,{__source:{fileName:_jsxFileName,lineNumber:49}},item.title,item.author,item.category,item.image,item.date);}));}),React.createElement(_Markdown2.default,{src:"/Apps/Site/Projects/Moria/Pages/"+page+".md",onChange:function onChange(state){return _this3.onPageChange(state);},__source:{fileName:_jsxFileName,lineNumber:61}})));}}]);return Screen;}(Component);

	function mapStateToProps(state){
	return {
	news:state.news.data};}



	function mapDispatchToProps(dispatch){
	return {
	actions:bindActionCreators(authActions,dispatch)};}




	var info=__webpack_require__(1244);
	var auth=__webpack_require__(1243);
	var news=__webpack_require__(1245);

	var asyncItems=[{
	key:'page',
	promise:function promise(_ref){var _ref$store=_ref.store;var dispatch=_ref$store.dispatch;var getState=_ref$store.getState;var client=_ref.helpers.client;
	var promises=[];

	if(!info.isLoaded(getState())){
	promises.push(dispatch(info.load()));}

	if(!auth.isLoaded(getState())){
	promises.push(dispatch(auth.load()));}

	if(!news.isLoaded(getState())){
	promises.push(dispatch(news.load()));}


	return Promise.all(promises);}}];exports.default=



	asyncConnect(asyncItems,mapStateToProps,mapDispatchToProps)(Screen);
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },

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

/***/ 1251:
/***/ function(module, exports, __webpack_require__) {

	'use strict';module.exports={
	Code:__webpack_require__(1252),
	CodeBlock:__webpack_require__(1254)};

/***/ },

/***/ 1252:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Shared/UI/Components/Code/Code.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var 
	React=Framework.React;var ReactDOM=Framework.ReactDOM;var ReactNative=Framework.ReactNative;var PropTypes=Framework.PropTypes;var T=Framework.T;var connect=Framework.connect;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var Animated=Framework.Animated;var Dimensions=Framework.Dimensions;var Router=Framework.Router;var Route=Framework.Route;var Link=Framework.Link;var createStore=Framework.createStore;var browserHistory=Framework.browserHistory;var compose=Framework.compose;var applyMiddleware=Framework.applyMiddleware;var thunkMiddleware=Framework.thunkMiddleware;var Provider=Framework.Provider;var syncHistoryWithStore=Framework.syncHistoryWithStore;var routerReducer=Framework.routerReducer;var combineReducers=Framework.combineReducers;var createLogger=Framework.createLogger;var renderToString=Framework.renderToString;var 

	Code=function(_Component){_inherits(Code,_Component);
	function Code(){_classCallCheck(this,Code);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Code).call(this));


	_this.state={};return _this;}_createClass(Code,[{key:'componentWillMount',value:function componentWillMount()


	{var _this2=this;
	Framework.getStyles(Framework.Platform.Env.isServer?__webpack_require__(420).readFileSync(__dirname+'/Code.css').toString():__webpack_require__(1253),'shared-',function(styles){_this2.setState({styles:styles});});}},{key:'render',value:function render()


	{
	return Framework.wrapStyles(this.state.styles,
	React.createElement('code',{className:'cf-code',__source:{fileName:_jsxFileName,lineNumber:17}},
	this.props.children));}}]);return Code;}(Component);





	module.exports=Code;
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },

/***/ 1253:
/***/ function(module, exports) {

	module.exports = ".c-code {\n    display: inline-block;\n    font-family: monaco, Consolas, \"Lucida Console\", monospace;\n    font-size: 0.9em;\n    background: #ddd;\n    color: #434148;\n    border-radius: 2px;\n    padding: 0.05em 0.3em;\n}\n\n.c-code__block {\n    border: 1px solid #bbb;\n    background: #ddd;\n    padding: 0.5em 1em;\n    border-radius: 2px;\n}\n\n.c-code__block .c-code {\n    background: none;\n    border: none;\n    color: inherit;\n    padding: 0;\n    border-radius: 0;\n}\n"

/***/ },

/***/ 1254:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Shared/UI/Components/Code/CodeBlock.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var React=__webpack_require__(24);
	var Code=__webpack_require__(1252);var 

	CodeBlock=function(_React$Component){_inherits(CodeBlock,_React$Component);function CodeBlock(){_classCallCheck(this,CodeBlock);return _possibleConstructorReturn(this,Object.getPrototypeOf(CodeBlock).apply(this,arguments));}_createClass(CodeBlock,[{key:'render',value:function render()
	{
	return (
	React.createElement('pre',{className:'cf-code__block',__source:{fileName:_jsxFileName,lineNumber:7}},
	React.createElement(Code,{__source:{fileName:_jsxFileName,lineNumber:8}},
	this.props.children)));}}]);return CodeBlock;}(React.Component);






	module.exports=CodeBlock;

/***/ },

/***/ 1255:
/***/ function(module, exports) {

	module.exports = ".test {\n    display: block;\n}\n"

/***/ },

/***/ 1258:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Screen=__webpack_require__(1259);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Screen).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1259:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof (typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Projects/Moria/UI/Screens/SetDetails/Screen.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


	var _Default=__webpack_require__(1248);var _Default2=_interopRequireDefault(_Default);















































	var _auth=__webpack_require__(1243);var authActions=_interopRequireWildcard(_auth);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else {var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var React=Framework.React;var ReactDOM=Framework.ReactDOM;var ReactNative=Framework.ReactNative;var bindActionCreators=Framework.bindActionCreators;var asyncConnect=Framework.asyncConnect;var PropTypes=Framework.PropTypes;var T=Framework.T;var connect=Framework.connect;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var Animated=Framework.Animated;var Dimensions=Framework.Dimensions;var Router=Framework.Router;var Route=Framework.Route;var Link=Framework.Link;var createStore=Framework.createStore;var browserHistory=Framework.browserHistory;var compose=Framework.compose;var applyMiddleware=Framework.applyMiddleware;var thunkMiddleware=Framework.thunkMiddleware;var Provider=Framework.Provider;var syncHistoryWithStore=Framework.syncHistoryWithStore;var routerReducer=Framework.routerReducer;var combineReducers=Framework.combineReducers;var createLogger=Framework.createLogger;var renderToString=Framework.renderToString;var Screen=function(_Component){_inherits(Screen,_Component);function Screen(){_classCallCheck(this,Screen);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Screen).call(this));_this.state={};return _this;}_createClass(Screen,[{key:'render',value:function render(){var setData=this.props.setData;var id=setData.id;var title=setData.title;var setNumber=setData.setNumber;var setNumberVariant=setData.setNumberVariant;var data=setData.data;return React.createElement(_Default2.default,{__source:{fileName:_jsxFileName,lineNumber:18}},React.createElement('h1',{__source:{fileName:_jsxFileName,lineNumber:19}},title,' (',setNumber,'-',setNumberVariant,')'),React.createElement(Link,{href:"/sets/"+id+"/edit",__source:{fileName:_jsxFileName,lineNumber:20}},'Edit'),React.createElement(View,{__source:{fileName:_jsxFileName,lineNumber:22}},'ID: ',id,React.createElement('br',{__source:{fileName:_jsxFileName,lineNumber:23}}),'Title: ',title,React.createElement('br',{__source:{fileName:_jsxFileName,lineNumber:24}}),Object.keys(data).map(function(key){var item1=data[key];if((typeof item1==='undefined'?'undefined':_typeof(item1))==='object'){return Object.keys(item1).map(function(key2){var item2=item1[key2];if((typeof item2==='undefined'?'undefined':_typeof(item2))==='object'){return Object.keys(item2).map(function(key3){var item3=item2[key3];if(key3==='link'){return React.createElement(View,{__source:{fileName:_jsxFileName,lineNumber:34}},React.createElement('a',{href:item3,__source:{fileName:_jsxFileName,lineNumber:34}},'GO TO BUY PAGE'));}return React.createElement(View,{__source:{fileName:_jsxFileName,lineNumber:36}},key3,': ',item3);});}else {return React.createElement(View,{__source:{fileName:_jsxFileName,lineNumber:39}},key2,': ',item2);}});}else {return React.createElement(View,{__source:{fileName:_jsxFileName,lineNumber:43}},key,': ',item1);}})));}}]);return Screen;}(Component);

	function mapStateToProps(state){
	return {
	setData:state.set.data};}



	function mapDispatchToProps(dispatch){
	return {
	actions:bindActionCreators(authActions,dispatch)};}




	var info=__webpack_require__(1244);
	var auth=__webpack_require__(1243);
	var set=__webpack_require__(1260);

	var asyncItems=[{
	key:'page',
	promise:function promise(_ref){var _ref$store=_ref.store;var dispatch=_ref$store.dispatch;var getState=_ref$store.getState;var client=_ref.helpers.client;
	var promises=[];

	if(!info.isLoaded(getState())){
	promises.push(dispatch(info.load()));}

	if(!auth.isLoaded(getState())){
	promises.push(dispatch(auth.load()));}

	if(!set.isLoaded(getState())){
	promises.push(dispatch(set.load()));}


	return Promise.all(promises);}}];exports.default=



	asyncConnect(asyncItems,mapStateToProps,mapDispatchToProps)(Screen);

/***/ },

/***/ 1260:
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.







	reducer=reducer;exports.

























	isLoaded=isLoaded;exports.



	load=load;var LOAD='app/news/LOAD';var LOAD_SUCCESS='app/news/LOAD_SUCCESS';var LOAD_FAIL='app/news/LOAD_FAIL';var initialState={loaded:false};function reducer(){var state=arguments.length<=0||arguments[0]===undefined?initialState:arguments[0];var action=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];switch(action.type){case LOAD:return _extends({},state,{loading:true});case LOAD_SUCCESS:return _extends({},state,{loading:false,loaded:true,data:action.result});case LOAD_FAIL:return _extends({},state,{loading:false,loaded:false,error:action.error});default:return state;}}function isLoaded(globalState){return globalState.news&&globalState.news.loaded;}function load(){
	return {
	types:[LOAD,LOAD_SUCCESS,LOAD_FAIL],
	promise:function promise(client){return client.get('/news');}};}

/***/ },

/***/ 1261:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Screen=__webpack_require__(1262);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Screen).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1262:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof (typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Projects/Moria/UI/Screens/Document/Screen.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


	var _Default=__webpack_require__(1248);var _Default2=_interopRequireDefault(_Default);
	var _Markdown=__webpack_require__(1092);var _Markdown2=_interopRequireDefault(_Markdown);

	var _Actions=__webpack_require__(1242);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var React=Framework.React;var ReactDOM=Framework.ReactDOM;var ReactNative=Framework.ReactNative;var PropTypes=Framework.PropTypes;var T=Framework.T;var connect=Framework.connect;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var Animated=Framework.Animated;var Dimensions=Framework.Dimensions;var Router=Framework.Router;var Route=Framework.Route;var Link=Framework.Link;var createStore=Framework.createStore;var browserHistory=Framework.browserHistory;var compose=Framework.compose;var applyMiddleware=Framework.applyMiddleware;var thunkMiddleware=Framework.thunkMiddleware;var Provider=Framework.Provider;var syncHistoryWithStore=Framework.syncHistoryWithStore;var routerReducer=Framework.routerReducer;var combineReducers=Framework.combineReducers;var createLogger=Framework.createLogger;var renderToString=Framework.renderToString;var 

	Screen=function(_Component){_inherits(Screen,_Component);



	function Screen(){_classCallCheck(this,Screen);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Screen).call(this));


	_this.state={
	page:{
	title:'',
	slim:false}};return _this;}_createClass(Screen,[{key:'onPageChange',value:function onPageChange(




	state){
	this.setState({
	page:state});}},{key:'render',value:function render()



	{var _this2=this;var _props=
	this.props;var site=_props.site;var location=_props.location;

	var content=
	React.createElement(_Markdown2.default,{src:"/Apps/Site/Projects/Esgaroth/Pages/"+(location||'home')+".md",onChange:function onChange(state){return _this2.onPageChange(state);},__source:{fileName:_jsxFileName,lineNumber:34}});


	var page=this.state.page;

	var breadcrumb=
	React.createElement('ul',{className:'breadcrumb',__source:{fileName:_jsxFileName,lineNumber:40}},
	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:41}},React.createElement('a',{href:'/',__source:{fileName:_jsxFileName,lineNumber:41}},React.createElement('i',{className:'icon-home',__source:{fileName:_jsxFileName,lineNumber:41}}),' ',site.title)),
	React.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:42}},React.createElement('a',{href:location,__source:{fileName:_jsxFileName,lineNumber:42}},page.title)));



	return (
	React.createElement(_Default2.default,{breadcrumb:breadcrumb,__source:{fileName:_jsxFileName,lineNumber:47}},
	!page.slim&&
	React.createElement(View,{className:'box',__source:{fileName:_jsxFileName,lineNumber:49}},
	React.createElement(View,{className:'tab-header',__source:{fileName:_jsxFileName,lineNumber:50}},
	page.title),

	React.createElement(View,{className:'padded',__source:{fileName:_jsxFileName,lineNumber:53}},
	content)),



	page.slim&&
	content));}}]);return Screen;}(Component);Screen.propTypes={};






	function mapStateToProps(state){var 
	site=state.site;var routing=state.routing;


	var location=null;
	if(typeof routing.locationBeforeTransitions==='string'){
	location=routing.locationBeforeTransitions.replace('/','');}else 
	if(_typeof(routing.locationBeforeTransitions)==='object'&&routing.locationBeforeTransitions){
	location=routing.locationBeforeTransitions.pathname;}else 
	if(typeof window!=='undefined'){
	location=window.location.pathname.replace('/','');}



	return {
	site:site,
	location:location};}exports.default=



	connect(mapStateToProps)(Screen);

/***/ },

/***/ 1263:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Screen=__webpack_require__(1264);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Screen).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1264:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.Screen=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _class,_temp,_jsxFileName='/ude/pc/projects/horadric/Apps/Site/Projects/Moria/UI/Screens/Login/Screen.js';


	var _Default=__webpack_require__(1248);var _Default2=_interopRequireDefault(_Default);





























	var _info=__webpack_require__(1244);
	var _auth=__webpack_require__(1243);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var React=Framework.React;var ReactDOM=Framework.ReactDOM;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var bindActionCreators=Framework.bindActionCreators;var asyncConnect=Framework.asyncConnect;var Platform=Framework.Platform;var T=Framework.T;var connect=Framework.connect;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var Screen=exports.Screen=(_temp=_class=function(_Component){_inherits(Screen,_Component);function Screen(){_classCallCheck(this,Screen);return _possibleConstructorReturn(this,Object.getPrototypeOf(Screen).apply(this,arguments));}_createClass(Screen,[{key:'render',value:function render(){return React.createElement(_Default2.default,{__source:{fileName:_jsxFileName,lineNumber:15}},'Logged in as: ',this.props.user);}}]);return Screen;}(Component),_class.propTypes={user:T.object,login:T.func,logout:T.func},_temp);function mapStateToProps(state){return {user:state.auth.user};}function mapDispatchToProps(dispatch){return {actions:bindActionCreators(authActions,dispatch)};}

	var asyncItems=[{
	key:'login',
	promise:function promise(_ref){var _ref$store=_ref.store;var dispatch=_ref$store.dispatch;var getState=_ref$store.getState;var client=_ref.helpers.client;
	var promises=[];

	if(!(0,_info.isLoaded)(getState())){
	promises.push(dispatch((0,_info.load)(client)));}

	if(!(0,_auth.isLoaded)(getState())){
	promises.push(dispatch((0,_auth.load)()));}


	return Promise.all(promises);}}];exports.default=



	asyncConnect(asyncItems,mapStateToProps,mapDispatchToProps)(Screen);

/***/ }

});