webpackJsonp([6],{

/***/ 1235:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Screen=__webpack_require__(1236);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Screen).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1236:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Projects/Edoras/UI/Screens/Home/Screen.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


	var _Basic=__webpack_require__(1237);var _Basic2=_interopRequireDefault(_Basic);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var React=Framework.React;var ReactDOM=Framework.ReactDOM;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var 

	Screen=function(_Component){_inherits(Screen,_Component);
	function Screen(){_classCallCheck(this,Screen);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Screen).call(this));

	_this.state={};return _this;}_createClass(Screen,[{key:'render',value:function render()


	{var _this2=this;
	return (
	React.createElement(_Basic2.default,{__source:{fileName:_jsxFileName,lineNumber:14}},
	React.createElement('div',{className:'c-intro c--shown',__source:{fileName:_jsxFileName,lineNumber:15}},
	React.createElement('p',{__source:{fileName:_jsxFileName,lineNumber:16}},'Your grand adventure in language translation is about to begin....'),
	React.createElement('div',{className:'c-menu c--shown',__source:{fileName:_jsxFileName,lineNumber:17}},
	React.createElement('h2',{__source:{fileName:_jsxFileName,lineNumber:18}},'Choose your adventure:'),
	React.createElement('button',{className:'js-load-game button large black','data-id':'platinum',__source:{fileName:_jsxFileName,lineNumber:19}},'Pokemon Platinum')),

	React.createElement('div',{className:'c-alert',__source:{fileName:_jsxFileName,lineNumber:21}},React.createElement('strong',{__source:{fileName:_jsxFileName,lineNumber:21}},'Loading...'),' Please wait, this may take a while (10MB).')),


	React.createElement('div',{className:'c-game-panel c--pokemon-platinum',__source:{fileName:_jsxFileName,lineNumber:24}},
	React.createElement('div',{className:'c-primary-sidebar',__source:{fileName:_jsxFileName,lineNumber:25}},
	React.createElement('form',{id:'filters',className:'c-filters',__source:{fileName:_jsxFileName,lineNumber:26}},
	React.createElement('div',{className:'c-filters__search',__source:{fileName:_jsxFileName,lineNumber:27}},
	React.createElement('input',{className:'c-filters__search-input',type:'text',name:'search',defaultValue:this.state.searchText,placeholder:'Search',onchange:function onchange(e){return _this2.onChangeSearchText(e);},__source:{fileName:_jsxFileName,lineNumber:28}}),
	React.createElement('input',{className:'c-filters__search-submit',type:'submit',name:'submit',defaultValue:'Submit',__source:{fileName:_jsxFileName,lineNumber:29}})),


	React.createElement('div',{className:'c-filters__status',__source:{fileName:_jsxFileName,lineNumber:32}}),

	React.createElement('div',{className:'c-filters__navigation',__source:{fileName:_jsxFileName,lineNumber:34}},
	React.createElement('a',{href:'javascript:;',className:'c-filters__navigation-control c--back',__source:{fileName:_jsxFileName,lineNumber:35}},'BACK'),
	React.createElement('a',{href:'javascript:;',className:'c-filters__navigation-control c--prev',__source:{fileName:_jsxFileName,lineNumber:36}},'PREV'),
	React.createElement('a',{href:'javascript:;',className:'c-filters__navigation-control c--next',__source:{fileName:_jsxFileName,lineNumber:37}},'NEXT')),


	React.createElement('div',{className:'c-filters__listing',__source:{fileName:_jsxFileName,lineNumber:40}}))),



	React.createElement('div',{className:'c-main',__source:{fileName:_jsxFileName,lineNumber:44}},
	React.createElement('h1',{className:'c-title',__source:{fileName:_jsxFileName,lineNumber:45}}),
	React.createElement('div',{id:'sections',__source:{fileName:_jsxFileName,lineNumber:46}})),


	React.createElement('div',{className:'c-secondary-sidebar',__source:{fileName:_jsxFileName,lineNumber:49}},
	React.createElement('div',{className:'c-translation',__source:{fileName:_jsxFileName,lineNumber:50}},
	React.createElement('div',{className:'c-translation__original',__source:{fileName:_jsxFileName,lineNumber:51}},
	React.createElement('h2',{__source:{fileName:_jsxFileName,lineNumber:52}},'Original:'),
	React.createElement('div',{className:'c-translation__original-result',__source:{fileName:_jsxFileName,lineNumber:53}},'None yet')),

	React.createElement('div',{className:'c-translation__translated',__source:{fileName:_jsxFileName,lineNumber:55}},
	React.createElement('h2',{__source:{fileName:_jsxFileName,lineNumber:56}},'Translated:'),
	React.createElement('div',{className:'c-translation__translated-result',__source:{fileName:_jsxFileName,lineNumber:57}},'None yet'))))),





	React.createElement('div',{id:'tts',__source:{fileName:_jsxFileName,lineNumber:63}}),

	React.createElement('table',{className:'sectionTemplate',__source:{fileName:_jsxFileName,lineNumber:65}},
	React.createElement('thead',{__source:{fileName:_jsxFileName,lineNumber:66}},
	React.createElement('tr',{__source:{fileName:_jsxFileName,lineNumber:67}},
	React.createElement('th',{__source:{fileName:_jsxFileName,lineNumber:68}},'English'),
	React.createElement('th',{__source:{fileName:_jsxFileName,lineNumber:69}},'Japanese'),
	React.createElement('th',{className:'it',__source:{fileName:_jsxFileName,lineNumber:70}},'Italian'))),


	React.createElement('tbody',{__source:{fileName:_jsxFileName,lineNumber:73}},
	React.createElement('tr',{__source:{fileName:_jsxFileName,lineNumber:74}},
	React.createElement('td',{className:'c-message en','data-lang':'en',__source:{fileName:_jsxFileName,lineNumber:75}}),
	React.createElement('td',{className:'c-message jp','data-lang':'jp',__source:{fileName:_jsxFileName,lineNumber:76}}),
	React.createElement('td',{className:'c-message it','data-lang':'it',__source:{fileName:_jsxFileName,lineNumber:77}}))))));}}]);return Screen;}(Component);exports.default=








	Screen;

/***/ },

/***/ 1237:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Layout=__webpack_require__(1238);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Layout).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1238:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/ude/pc/projects/horadric/Apps/Site/Projects/Edoras/UI/Layouts/Basic/Layout.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(5);var 
	React=Framework.React;var ReactDOM=Framework.ReactDOM;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var Link=Framework.Link;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var 

	Layout=function(_Component){_inherits(Layout,_Component);_createClass(Layout,[{key:'componentDidMount',value:function componentDidMount()
	{
	$script([
	'https://code.jquery.com/jquery-2.1.1.js',
	'/App/Vendor/ZeroClipboard.min.js'],
	'bundle');

	$script.ready('bundle',function(){
	var lang={
	en:{
	messages:[]},

	jp:{
	messages:[]},

	it:{
	messages:[]},

	all:{}};




	function getSelectionHTML(){
	var userSelection;
	if(window.getSelection){

	userSelection=window.getSelection();
	var range=document.createRange();

	if(!userSelection.anchorNode){
	return;}


	var clonedSelection;

	if(userSelection.anchorNode==userSelection.focusNode){
	clonedSelection=userSelection.anchorNode.cloneNode(true);}else 

	{


	if(userSelection.anchorOffset<userSelection.focusOffset){
	range.setStart(userSelection.anchorNode,userSelection.anchorOffset);
	range.setEnd(userSelection.focusNode,userSelection.focusOffset);}else 

	{
	range.setStart(userSelection.focusNode,userSelection.focusOffset);
	range.setEnd(userSelection.anchorNode,userSelection.anchorOffset);}


	clonedSelection=range.cloneContents();}


	var div=document.createElement('div');

	div.appendChild(clonedSelection);

	return div.innerHTML;}else 
	if(document.selection){

	userSelection=document.selection.createRange();
	return userSelection.htmlText;}else 
	{
	return '';}}




	jQuery(function($){
	var $sections=$('#sections');
	var $listing=$('.c-filters__listing');

	var listingIndex=0;
	var resultIndex=0;

	function convertMessageText(text){
	text=text.replace(/\\n/gi,' 　<br>');
	text=text.replace(/\\r/gi,' 　<br><br>');
	text=text.replace(/\\f/gi,' 　<br>');

	text=text.replace(/VAR\(259, 1, 0\)/gi,'PLAYER');
	text=text.replace(/VAR\(259, 1\)/gi,'PLAYER');
	text=text.replace(/VAR\(260, 0, 0\)/gi,'FRIEND');
	text=text.replace(/VAR\(260, 0\)/gi,'FRIEND');
	text=text.replace(/VAR\(257, 0, 0\)/gi,'POKEMON');
	text=text.replace(/VAR\(257, 0\)/gi,'POKEMON');
	text=text.replace(/VAR\(262, 0, 0\)/gi,'SKILL');
	text=text.replace(/VAR\(262, 0\)/gi,'SKILL');
	text=text.replace(/VAR\(256, 0\)/gi,'POKEMON');
	text=text.replace(/VAR\(256, 0, 0\)/gi,'POKEMON');


	text=text.replace(/VAR\([0-9]+, [0-9]+\)/gi,' X ');
	text=text.replace(/VAR\([0-9]+, [0-9]+, [0-9]+\)/gi,' X ');

	text=text.replace(/『/gi,'　『');

	text=unescape(text.replace(/\\x/gi,"%"));

	return text;}


	function bindFilters(){
	var $form=$('.c-filters');
	var $search=$('.c-filters__search-input');
	var $status=$('.c-filters__status');

	$form.on('submit',function(){
	var value=$search.val();

	var foundList=[];
	var regex=new RegExp(value,'gi');

	$.each([lang.en.messages,lang.jp.messages],function(i,messageList){
	$.each(messageList,function(j,messages){
	$.each(messages,function(k,message){
	var res=regex.exec(message.value);

	if(res){
	foundList.push(j);


	return false;}});});});





	$listing.children().removeClass('c--shown');

	if(foundList.length){
	$status.html("Found "+foundList.length+" results").addClass('c--active');

	for(var i=0,l=foundList.length;i<l;++i){
	var id=foundList[i];

	$listing.children().eq(id).addClass('c--shown');}}else 


	{
	$status.html('No results').addClass('c--active');}



	$('.c-message__group').removeClass('c--active');

	$('.c-filters__navigation-control.c--next').trigger('click');

	return false;});}



	function updateListing(){
	var $listing=$('.c-filters__listing');

	$listing.empty();

	for(var i=0,l=lang.en.messages.length;i<l;++i){
	var enMessages=lang.en.messages[i];
	var $option=$('<a class="c-filters__listing-item c--shown" href="javascript:"></a>');

	$option.data('id',i).html('#'+i+' ('+enMessages.length+')');

	$option.appendTo($listing);}


	$listing.find('.c-filters__listing-item').on('click',function(){
	var $item=$(this);


	$listing.find('.c-filters__listing-item').removeClass('c--active');

	$item.addClass('c--active');


	resultIndex=0;

	updateSection($item.data('id'));});}



	window.injectTTS=function(ttsURL){
	var $object=$('<OBJECT \
	                    type="application/x-shockwave-flash"\
	                    CLASSID="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"\
	                    type="application/x-shockwave-flash"\
	                    WIDTH="113"\
	                    HEIGHT="100"\
	                    CODEBASE="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8"\
	            ID=flash1>\
	                    <PARAM ID="MOVIE" NAME="MOVIE" VALUE="'+ttsURL+'">\
	                    <PARAM NAME="PLAY" VALUE="true">\
	                    <PARAM NAME="LOOP" VALUE="false">\
	                    <PARAM NAME="QUALITY" VALUE="high">\
	                    <PARAM NAME="SCALE" VALUE="SHOWALL">\
	                \
	                    <EMBED\
	                        type="application/x-shockwave-flash"\
	                        NAME="flash1"\
	                        ID="flash1"\
	                        SRC="'+ttsURL+'"\
	                        WIDTH="113"\
	                        HEIGHT="100"\
	                        PLAY="true"\
	                        LOOP="false"\
	                        QUALITY="high"\
	                        SCALE="SHOWALL"\
	                        swLiveConnect="true"\
	                        PLUGINSPAGE="http://www.macromedia.com/go/flashplayer/"  style="height: 0; overflow: hidden">\
	                    </EMBED>\
	                </OBJECT>');

	$('#tts').prepend($object);};


	function updateSection(sectionId){
	var $title=$('.c-title');

	$title.html('Section #'+sectionId);

	var $table=$('.sectionTemplate').clone().removeClass('sectionTemplate');
	var $tr=$table.find('tbody tr').remove();

	var enMessages=lang.en.messages[sectionId];
	var jpMessages=lang.jp.messages[sectionId];

	for(var j=0,k=enMessages.length;j<k;++j){
	var enMessage=enMessages[j];

	var $row=$tr.clone();

	var messageText=convertMessageText(enMessage.value);

	var $message=$('<div>');



	$.each(messageText.split('<br><br>'),function(i,groupText){
	if(!groupText.replace(/ /gi,'').length){
	return;}


	var $group=$('<div class="c-message__group"><div class="c-message__group-play">&gt;</div></div>');

	$.each(groupText.replace('<br>',' <br>').split(' '),function(j,text){
	if(!text.length){
	return;}


	$group.append('<span class="c-message__text">'+text+'</span>'+'<span>　</span>');});


	$message.append($group);});


	$row.find('.en').html('<div class="c-message__key">#'+sectionId+'_'+enMessage.key+' <a href="javascript:;" class="js-speak-message">Speak</a> | <a href="javascript:;" class="js-copy-text" data-clipboard-text="'+messageText.replace(/<br>/gi,"\n")+'">Copy</a></div> <div class="c-message__value">'+$message.html()+'</div>');

	if(jpMessages){
	var jpMessage=jpMessages.filter(function(item){
	return item.key==enMessage.key;})[
	0];

	if(jpMessage){
	var messageText=convertMessageText(jpMessage.value);

	var $message=$('<div>');



	$.each(messageText.split('<br><br>'),function(i,groupText){
	if(!groupText.replace(/　/gi,'').length){
	return;}


	var $group=$('<div class="c-message__group"><div class="c-message__group-play">&gt;</div></div>');

	$.each(groupText.replace('<br>','　<br>').split('　'),function(j,text){
	if(!text.length){
	return;}


	$group.append('<span class="c-message__text">'+text+'</span>'+'<span>　</span>');});


	$message.append($group);});


	$row.find('.jp').html('<div class="c-message__key">#'+sectionId+'_'+jpMessage.key+' <a href="javascript:;" class="js-speak-message">Speak</a> | <a href="javascript:;" class="js-copy-text" data-clipboard-text="'+messageText.replace(/<br>/gi,"\n")+'">Copy</a></div> <div class="c-message__value">'+$message.html()+'</div>');}}



	$row.appendTo($table.find('tbody'));}


	$sections.empty();
	$sections.append($table);

	function bindCopyText(){

	$sections.find('.js-copy-text').each(function(){
	var clip=new ZeroClipboard(this);});}



	bindCopyText();



	var $search=$('.c-filters__search-input');

	if($search.val()){
	$('.c-message__group').each(function(){
	var $item=$(this);

	var regex=new RegExp($search.val(),'gi');
	var res=regex.exec($item.text());

	if(res){
	$item.addClass('c--active');}});



	$(window).scrollTop($('.c-message__group.c--active').eq(0).offset().top);}}



	function bindFilterResultNavigation(){
	$('.c-filters__navigation-control.c--back').on('click',function(){
	$(document).scrollTop(0);

	return false;});


	$('.c-filters__navigation-control.c--prev').on('click',function(){
	if(resultIndex===0){


	if(listingIndex<=0){


	listingIndex=$('.c-filters__listing .c-filters__listing-item.c--shown').length-1;}else 

	{
	--listingIndex;}


	resultIndex=0;


	$('.c-filters__listing .c-filters__listing-item').removeClass('c--active');}else 

	{
	--resultIndex;}


	if(!$('.c-filters__listing .c-filters__listing-item.c--active').length){

	$('.c-filters__listing .c-filters__listing-item.c--shown').eq(listingIndex).addClass('c--active').trigger('click');}



	setTimeout(function(){
	$(window).scrollTop($('.c-message__group.c--active').eq(resultIndex).offset().top);});


	return false;});


	$('.c-filters__navigation-control.c--next').on('click',function(){
	if(resultIndex>=$('.c-message__group.c--active').length-1){


	if(listingIndex===$('.c-filters__listing .c-filters__listing-item.c--shown').length-1){


	listingIndex=0;}else 

	{
	++listingIndex;}


	resultIndex=0;


	$('.c-filters__listing .c-filters__listing-item').removeClass('c--active');}else 

	{
	++resultIndex;}


	if(!$('.c-filters__listing .c-filters__listing-item.c--active').length){

	$('.c-filters__listing .c-filters__listing-item.c--shown').eq(listingIndex).addClass('c--active').trigger('click');

	if($('.c-message__group.c--active').length){
	$(window).scrollTop($('.c-message__group.c--active').eq(resultIndex).offset().top);}}



	return false;});}



	function bindVoiceTranslation(){
	$(document).on('click','.c-message__text',function(){
	var $item=$(this);

	$item.addClass('c--active');

	setTimeout(function(){
	$item.removeClass('c--active');},
	3000);

	var lang=$item.parents('.c-message').data('lang');

	$('<script>').attr('src','/api/1/tts/?lang='+lang+'&callback=injectTTS&text='+$item.text()).appendTo('head');});


	$(document).on('click','.js-speak-message',function(){
	var $item=$(this).parent().next();

	$item.addClass('c--active');

	setTimeout(function(){
	$item.removeClass('c--active');},
	3000);

	var lang=$item.parents('.c-message').data('lang');

	$('<script>').attr('src','/api/1/tts/?lang='+lang+'&callback=injectTTS&text='+$item.text()).appendTo('head');});



	$(document).on('click','.c-message__group-play',function(){
	var $item=$(this).parent();

	$item.addClass('c--active');

	setTimeout(function(){
	$item.removeClass('c--active');},
	3000);

	var lang=$item.parents('.c-message').data('lang');

	$('<script>').attr('src','/api/1/tts/?lang='+lang+'&callback=injectTTS&text='+$item.text()).appendTo('head');

	return false;});}




	function bindTextTranslation(){
	window.babylonTranslator={
	callback:function callback(key,res,x1,x2,x3){
	if(!res||!res.translatedText){
	$('.c-translation__translated-result').html('Error translating');

	return;}


	$('.c-translation__translated-result').html(res.translatedText);}};



	$('.c-main').on('mouseup',function(e){
	if(!$(e.target).parents('.c-message.jp').length){

	return;}


	var html=getSelectionHTML();
	var text=$('<div>'+html+'</div>').text();

	$('.c-translation__original-result').html(text);

	text=text.replace(/　/gi,'+');

	var src='http://translation.babylon.com/translate/babylon.php?v=1.0&q='+text+'&langpair=8%7C0&callback=babylonTranslator.callback&context=babylon.8.0._babylon_api_response';

	var $script=$('<script>');

	$script.attr('src',src);

	$('head').append($script);});}



	function initExternalMessages(callback){
	$.ajax({
	url:'/Apps/Site/Projects/Edoras/Assets/Lang/en/messages.json',
	success:function success(messages){

	messages.splice(13,1);
	messages.splice(386,1);
	messages.splice(391,1);
	messages.splice(391,1);
	messages.splice(409,1);
	messages.splice(409,1);



	messages=messages.splice(0,709);

	lang.en.messages=messages;

	$.ajax({
	url:'/Apps/Site/Projects/Edoras/Assets/Lang/jp/messages.json',
	success:function success(messages){
	lang.jp.messages=messages;

	updateListing();

	callback?callback():null;}});}});}






	function initInlineMessages(){
	var messageRegex=/([0-9]+) (.*)\n/gi;

	var enMessages=[];
	var jpMessages=[];

	var enMessageText=$('#en-messages')[0].innerHTML;
	var jpMessageText=$('#jp-messages')[0].innerHTML;

	enMessages=messageRegex.exec(enMessageText);
	jpMessages=messageRegex.exec(jpMessageText);

	while(enMessage=messageRegex.exec(enMessageText)){
	var id=enMessage[1];
	var text=enMessage[2];

	if(typeof lang.all[id]==='undefined'){
	lang.all[id]=[];}


	lang.all[id].push(text);}


	while(jpMessage=messageRegex.exec(jpMessageText)){
	var id=jpMessage[1];
	var text=jpMessage[2];

	if(typeof lang.all[id]==='undefined'){
	lang.all[id]=[];}


	lang.all[id].push(text);}}



	function bindIntro(){
	$('.js-load-game').on('click',function(){
	$('.c-intro .c-menu').removeClass('c--shown');
	$('.c-intro .c-alert').addClass('c--shown');

	bindFilters();
	bindFilterResultNavigation();
	bindTextTranslation();
	bindVoiceTranslation();

	initExternalMessages(function(){

	$('.c-intro').removeClass('c--shown');
	$('.c-game-panel').addClass('c--shown');});});}





	bindIntro();});});}}]);




	function Layout(){_classCallCheck(this,Layout);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Layout).call(this));


	_this.state={
	searchText:'Search here...'};return _this;}_createClass(Layout,[{key:'onChangeSearchText',value:function onChangeSearchText(



	e){
	this.setState({
	searchText:e.target.value.substr(0,140)});}},{key:'render',value:function render()



	{
	return (
	React.createElement(View,{__source:{fileName:_jsxFileName,lineNumber:599}},
	this.props.children,

	React.createElement('div',{className:'c-footer',__source:{fileName:_jsxFileName,lineNumber:602}})));}}]);return Layout;}(Component);exports.default=





	Layout;

/***/ }

});