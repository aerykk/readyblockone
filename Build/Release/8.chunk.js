webpackJsonp([8],{

/***/ 1322:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Launch=__webpack_require__(1323);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Launch).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1323:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


	var _Basic=__webpack_require__(1324);var _Basic2=_interopRequireDefault(_Basic);
	var _Markdown=__webpack_require__(1207);var _Markdown2=_interopRequireDefault(_Markdown);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(4);var React=Framework.React;var ReactDOM=Framework.ReactDOM;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var 

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
	React.createElement(_Basic2.default,{breadcrumb:breadcrumb},
	!this.state.page.options.slim&&
	React.createElement('div',{className:'box'},
	React.createElement('div',{className:'tab-header'},
	this.state.page.title),

	React.createElement('div',{className:'padded'},
	React.createElement(_Markdown2.default,{src:"/App/Game/Sites/Edoras/Pages/"+page+".md",onChange:function onChange(state){return _this2.onPageChange(state);}}))),



	this.state.page.options.slim&&
	React.createElement(_Markdown2.default,{src:"/App/Game/Sites/Edoras/Pages/"+page+".md",onChange:function onChange(state){return _this2.onPageChange(state);}})));}}]);return Screen;}(Component);exports.default=






	Screen;

/***/ },

/***/ 1324:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _Basic=__webpack_require__(1325);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_Basic).default;}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ },

/***/ 1325:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


	var _reactRouter=__webpack_require__(21);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Framework=__webpack_require__(4);var React=Framework.React;var ReactDOM=Framework.ReactDOM;var AppWrapper=Framework.AppWrapper;var AppConfig=Framework.AppConfig;var Platform=Framework.Platform;var Component=Framework.Component;var AppRegistry=Framework.AppRegistry;var Navigator=Framework.Navigator;var StyleSheet=Framework.StyleSheet;var Text=Framework.Text;var View=Framework.View;var TouchableHighlight=Framework.TouchableHighlight;var WebView=Framework.WebView;var 

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
	var $option=$('<a class="c-filters__listing-item c--shown" href="javascript:;"></a>');

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
	url:'/App/Game/Sites/Edoras/Assets/Lang/en/messages.json',
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
	url:'/App/Game/Sites/Edoras/Assets/Lang/jp/messages.json',
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



	{var _this2=this;
	return (
	React.createElement(View,null,
	React.createElement('style',null,'\n                    body {\n                        font: normal 12px sans-serif;\n                    }\n\n                    table {\n                        border: 0;\n                    }\n\n                    .c-intro {\n                        display: none;\n\n                        text-align: center;\n                    }\n\n                        .c-intro.c--shown {\n                            display: block;\n                        }\n\n                    .c-game-panel {\n                        display: none;\n                    }\n\n                        .c-game-panel.c--shown {\n                            display: block;\n                        }\n\n                    .sectionTemplate {\n                        display: none;\n                    }\n\n                    #en-messages, #jp-messages {\n                        display: none;\n                    }\n\n                    .c-filters__listing {\n                        clear: both;\n\n                        width: 100px;\n                        height: 400px;\n\n                        overflow: auto;\n\n                    }\n\n                        .c-filters__listing > a {\n                            display: none;\n\n                            padding: 5px;\n                            margin: 2px;\n\n                            font-size: 14px;\n                            text-decoration: none;\n\n                            color: #000;\n                            background-color: #eee;\n                        }\n\n                            .c-filters__listing > a.c--shown {\n                                display: block;\n                                background-color: #eee;\n                            }\n\n                            .c-filters__listing > a.c--active {\n                                background-color: #5e92ff;\n                                color: #fff;\n                            }\n                        \n                        .c-filters__listing-item {\n                            display: block;\n                        }\n\n                    .c-filters {\n                    }\n\n                        .c-filters__navigation {\n                            display: block;\n                        }\n\n                            .c-filters__navigation-control {\n                                padding: 10px;\n                                display: block;\n                                color: #000;\n                                background: #eee;\n                                margin: 1px 0 1px 0;\n                                text-decoration: none;\n                                text-align: center;\n                                font-size: 12px;\n                                font-weight: bold;\n                            }\n\n                        .c-filters__status {\n                            display: none;\n\n                            padding: 10px;\n                            margin: 1px 0;\n\n                            background: #eee;\n                            text-align: center;\n                        }\n\n                            .c-filters__status.c--active {\n                                display: block;\n                            }\n\n                        .c-filters__search {\n                            padding: 10px;\n                            text-align: center;\n\n                            background: #eee;\n                        }\n\n                            .c-filters__search-input {\n                                padding: 5px;\n                            }\n\n                            .c-filters__search-submit {\n                                padding: 5px;\n                            }\n\n                    #sections {\n                        padding-bottom: 100px;\n                    }\n\n                        #sections .it {\n                            display: none;\n                        }\n\n                        #sections table {\n                            width: 100%;\n                        }\n\n                        #sections th {\n                            width: 50%;\n\n                            font-weight: bold;\n                            font-size: 20px;\n                            line-height: 20px;\n\n                            border-bottom: 3px solid #aaa;\n                        }\n\n                        #sections td {\n                            padding-bottom: 10px;\n\n                            vertical-align: top;\n                        }\n\n\n                    #tts {\n                        visibility: hidden;\n                    }\n\n                    .c-message {\n                    }\n\n                        .c-message__key {\n                            margin-bottom: 10px;\n                            padding: 5px;\n\n                            background: #eee;\n                            text-align: center;\n                        }\n\n                            .c-message__key.c--active {\n                                background: #ffffb5;\n                            }\n\n                        .c-message__value {\n                        }\n\n                            .c-message__group {\n                                width: 400px;\n                            }\n\n                            .c-message__group span {\n                                margin: 0 2px;\n\n                                font-size: 1px;\n                            }\n\n                            .c-message__group .c-message__text {\n                                padding: 0 5px;\n                                margin: 0;\n\n                                background: #eee;\n                                font-size: 16px;\n                                line-height: 20px;\n                            }\n\n                                .c-message__text.c--active {\n                                    background: #ffffb5;\n                                }\n\n                        .c-message__group-play {\n                            display: inline-block;\n\n                            padding: 0 5px;\n\n                            font-weight: bold;\n                        }\n\n                        .c-message__group.c--active {\n                            background-color: #ddd;\n                        }\n\n                    .c-primary-sidebar, .c-main, .c-secondary-sidebar {\n                        float: left;\n                    }\n\n                    .c-primary-sidebar {\n                        position: fixed;\n\n                        top: 10px;\n                        left: 10px;\n\n                        width: 20%;\n                    }\n\n                    .c-secondary-sidebar {\n                        position: fixed;\n\n                        top: 0;\n                        right: 0;\n\n                        width: 20%;\n\n                        padding: 10px;\n\n                        background: #fff;\n                    }\n\n                    .c-main {\n                        margin-left: 20%;\n                        margin-right: 20%;\n\n                        padding: 0 20px 20px 20px;\n                    }\n\n                    .c-alert {\n                        padding: 15px;\n                        margin-bottom: 20px;\n                        border: 1px solid transparent;\n                        border-radius: 4px;\n                        display: none;\n                        background-color: #fcf8e3;\n                        border-color: #faebcc;\n                        color: #8a6d3b;\n                    }\n\n                        .c-alert.c--shown {\n                            display: inline-block;\n                        }\n\n                    .c-menu {\n                        display: none;\n                    }\n\n                        .c-menu.c--shown {\n                            display: block;\n                        }\n\n                    .c-footer {\n                        position: fixed;\n                        width: 100%;\n                        bottom: 0;\n                        left: 0;\n                        text-align: center;\n\n                        background: #fff;\n                    }'),
















































































































































































































































































	React.createElement('div',{className:'c-intro c--shown'},
	React.createElement('p',null,'Your grand adventure in language translation is about to begin...'),
	React.createElement('div',{className:'c-menu c--shown'},
	React.createElement('h2',null,'Choose your adventure:'),
	React.createElement('button',{className:'js-load-game button large black','data-id':'platinum'},'Pokemon Platinum')),

	React.createElement('div',{className:'c-alert'},React.createElement('strong',null,'Loading...'),' Please wait, this may take a while (10MB).')),


	React.createElement('div',{className:'c-game-panel c--pokemon-platinum'},
	React.createElement('div',{className:'c-primary-sidebar'},
	React.createElement('form',{id:'filters',className:'c-filters'},
	React.createElement('div',{className:'c-filters__search'},
	React.createElement('input',{className:'c-filters__search-input',type:'text',name:'search',defaultValue:this.state.searchText,placeholder:'Search',onchange:function onchange(e){return _this2.onChangeSearchText(e);}}),
	React.createElement('input',{className:'c-filters__search-submit',type:'submit',name:'submit',defaultValue:'Submit'})),


	React.createElement('div',{className:'c-filters__status'}),

	React.createElement('div',{className:'c-filters__navigation'},
	React.createElement('a',{href:'javascript:;',className:'c-filters__navigation-control c--back'},'BACK'),
	React.createElement('a',{href:'javascript:;',className:'c-filters__navigation-control c--prev'},'PREV'),
	React.createElement('a',{href:'javascript:;',className:'c-filters__navigation-control c--next'},'NEXT')),


	React.createElement('div',{className:'c-filters__listing'}))),



	React.createElement('div',{className:'c-main'},
	React.createElement('h1',{className:'c-title'}),
	React.createElement('div',{id:'sections'})),


	React.createElement('div',{className:'c-secondary-sidebar'},
	React.createElement('div',{className:'c-translation'},
	React.createElement('div',{className:'c-translation__original'},
	React.createElement('h2',null,'Original:'),
	React.createElement('div',{className:'c-translation__original-result'},'None yet')),

	React.createElement('div',{className:'c-translation__translated'},
	React.createElement('h2',null,'Translated:'),
	React.createElement('div',{className:'c-translation__translated-result'},'None yet'))))),





	React.createElement('div',{id:'tts'}),

	React.createElement('table',{className:'sectionTemplate'},
	React.createElement('thead',null,
	React.createElement('tr',null,
	React.createElement('th',null,'English'),
	React.createElement('th',null,'Japanese'),
	React.createElement('th',{className:'it'},'Italian'))),


	React.createElement('tbody',null,
	React.createElement('tr',null,
	React.createElement('td',{className:'c-message en','data-lang':'en'}),
	React.createElement('td',{className:'c-message jp','data-lang':'jp'}),
	React.createElement('td',{className:'c-message it','data-lang':'it'})))),




	React.createElement('div',{className:'c-footer'},
	React.createElement('div',null,
	React.createElement('a',{href:'https://twitter.com/share',className:'twitter-share-button','data-url':'http://pokelingo.com','data-text':'Pokelingo searches, translates, and speaks text in Pokemon games','data-hashtags':''},'Tweet'),
	React.createElement('div',{className:'fb-like','data-href':'http://pokelingo.com','data-layout':'button_count','data-action':'like','data-show-faces':'false','data-share':'true','data-width':'50','data-font':'arial'})))));}}]);return Layout;}(Component);exports.default=








	Layout;

/***/ }

});