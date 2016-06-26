const Framework = require('../../../../../../Framework');
const {React, ReactDOM, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView} = Framework;

import { Link } from 'react-router';

class Layout extends Component {
    componentDidMount() {
        $script([
            'https://code.jquery.com/jquery-2.1.1.js',
            '/App/Vendor/ZeroClipboard.min.js'
        ], 'bundle');

        $script.ready('bundle', () => {
            var lang = {
                en: {
                    messages: []
                },
                jp: {
                    messages: []
                },
                it: {
                    messages: []
                },
                all: {

                }
            };

            function getSelectionHTML() {
                var userSelection;
                if (window.getSelection) {
                    // W3C Ranges
                    userSelection = window.getSelection ();
                    var range = document.createRange ();

                    if(!userSelection.anchorNode) {
                        return;
                    }

                    var clonedSelection;

                    if(userSelection.anchorNode == userSelection.focusNode) {
                        clonedSelection = userSelection.anchorNode.cloneNode(true);
                    }
                    else {
                        // Use the element with the lower offset as the start node
                        // Because sometimes we select text backwards
                        if(userSelection.anchorOffset < userSelection.focusOffset) {
                            range.setStart(userSelection.anchorNode, userSelection.anchorOffset);
                            range.setEnd(userSelection.focusNode, userSelection.focusOffset);
                        }
                        else {
                            range.setStart(userSelection.focusNode, userSelection.focusOffset);
                            range.setEnd(userSelection.anchorNode, userSelection.anchorOffset);
                        }

                        clonedSelection = range.cloneContents();
                    }

                    var div = document.createElement('div');

                    div.appendChild (clonedSelection);

                    return div.innerHTML;
                } else if (document.selection) {
                    // Explorer selection, return the HTML
                    userSelection = document.selection.createRange ();
                    return userSelection.htmlText;
                } else {
                    return '';
                }
            }


            jQuery(function($) {
                var $sections = $('#sections');
                var $listing = $('.c-filters__listing');

                var listingIndex = 0;
                var resultIndex = 0;

                function convertMessageText(text) {
                    text = text.replace(/\\n/gi, ' 　<br>');
                    text = text.replace(/\\r/gi, ' 　<br><br>');
                    text = text.replace(/\\f/gi, ' 　<br>');

                    text = text.replace(/VAR\(259, 1, 0\)/gi, 'PLAYER');
                    text = text.replace(/VAR\(259, 1\)/gi, 'PLAYER');
                    text = text.replace(/VAR\(260, 0, 0\)/gi, 'FRIEND');
                    text = text.replace(/VAR\(260, 0\)/gi, 'FRIEND');
                    text = text.replace(/VAR\(257, 0, 0\)/gi, 'POKEMON');
                    text = text.replace(/VAR\(257, 0\)/gi, 'POKEMON');
                    text = text.replace(/VAR\(262, 0, 0\)/gi, 'SKILL');
                    text = text.replace(/VAR\(262, 0\)/gi, 'SKILL');
                    text = text.replace(/VAR\(256, 0\)/gi, 'POKEMON');
                    text = text.replace(/VAR\(256, 0, 0\)/gi, 'POKEMON');

                    // Replace all the rest of the VAR instances with X
                    text = text.replace(/VAR\([0-9]+, [0-9]+\)/gi, ' X ');
                    text = text.replace(/VAR\([0-9]+, [0-9]+, [0-9]+\)/gi, ' X ');

                    text = text.replace(/『/gi, '　『');

                    text = unescape(text.replace(/\\x/gi, "%"));

                    return text;
                }

                function bindFilters() {
                    var $form = $('.c-filters');
                    var $search = $('.c-filters__search-input');
                    var $status = $('.c-filters__status');

                    $form.on('submit', function() {
                        var value = $search.val();

                        var foundList = [];
                        var regex = new RegExp(value, 'gi');

                        $.each([lang.en.messages, lang.jp.messages], function(i, messageList) {
                            $.each(messageList, function(j, messages) {
                                $.each(messages, function(k, message) {
                                    var res = regex.exec(message.value);

                                    if(res) {
                                        foundList.push(j);

                                        // we don't need to keep searching the parent loop
                                        return false;
                                    }
                                });
                            });
                        });

                        $listing.children().removeClass('c--shown');

                        if(foundList.length) {
                            $status.html("Found " + foundList.length + " results").addClass('c--active');

                            for(var i = 0, l = foundList.length; i < l; ++i) {
                                var id = foundList[i];

                                $listing.children().eq(id).addClass('c--shown');
                            }
                        }
                        else {
                            $status.html('No results').addClass('c--active');
                        }

                        // Clear the active text groups (if any)
                        $('.c-message__group').removeClass('c--active');

                        $('.c-filters__navigation-control.c--next').trigger('click');

                        return false;
                    });
                }

                function updateListing() {
                    var $listing = $('.c-filters__listing');

                    $listing.empty();

                    for(var i = 0, l = lang.en.messages.length; i < l; ++i) {
                        var enMessages = lang.en.messages[i];
                        var $option = $('<a class="c-filters__listing-item c--shown" href="javascript:;"></a>');

                        $option.data('id', i).html('#' + i + ' (' + enMessages.length + ')');

                        $option.appendTo($listing);
                    }

                    $listing.find('.c-filters__listing-item').on('click', function() {
                        var $item = $(this);

                        // Clear all item active states
                        $listing.find('.c-filters__listing-item').removeClass('c--active');

                        $item.addClass('c--active');

                        // Reset the result index to 0 so it shows the first result in the list
                        resultIndex = 0;

                        updateSection($item.data('id'));
                    });
                }

                window.injectTTS = function(ttsURL) {
                    var $object = $('<OBJECT \
                    type="application/x-shockwave-flash"\
                    CLASSID="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"\
                    type="application/x-shockwave-flash"\
                    WIDTH="113"\
                    HEIGHT="100"\
                    CODEBASE="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8"\
            ID=flash1>\
                    <PARAM ID="MOVIE" NAME="MOVIE" VALUE="' + ttsURL + '">\
                    <PARAM NAME="PLAY" VALUE="true">\
                    <PARAM NAME="LOOP" VALUE="false">\
                    <PARAM NAME="QUALITY" VALUE="high">\
                    <PARAM NAME="SCALE" VALUE="SHOWALL">\
                \
                    <EMBED\
                        type="application/x-shockwave-flash"\
                        NAME="flash1"\
                        ID="flash1"\
                        SRC="' + ttsURL + '"\
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

                    $('#tts').prepend($object);
                };

                function updateSection(sectionId) {
                    var $title = $('.c-title');

                    $title.html('Section #' + sectionId);

                    var $table = $('.sectionTemplate').clone().removeClass('sectionTemplate');
                    var $tr = $table.find('tbody tr').remove();

                    var enMessages = lang.en.messages[sectionId];
                    var jpMessages = lang.jp.messages[sectionId];

                    for(var j = 0, k = enMessages.length; j < k; ++j) {
                        var enMessage = enMessages[j];

                        var $row = $tr.clone();

                        var messageText = convertMessageText(enMessage.value);

                        var $message = $('<div>');

                        //var sentences = messageText.replace(/([.?!])\s*(?=[A-Z])/, "$1|").split("|");

                        $.each(messageText.split('<br><br>'), function(i, groupText) {
                            if(!groupText.replace(/ /gi, '').length) {
                                return;
                            }

                            var $group = $('<div class="c-message__group"><div class="c-message__group-play">&gt;</div></div>');

                            $.each(groupText.replace('<br>', ' <br>').split(' '), function(j, text) {
                                if(!text.length) {
                                    return;
                                }

                                $group.append('<span class="c-message__text">' + text + '</span>' + '<span>　</span>');
                            });

                            $message.append($group);
                        });

                        $row.find('.en').html('<div class="c-message__key">#' + sectionId + '_' + enMessage.key + ' <a href="javascript:;" class="js-speak-message">Speak</a> | <a href="javascript:;" class="js-copy-text" data-clipboard-text="' + messageText.replace(/<br>/gi, "\n") + '">Copy</a></div> <div class="c-message__value">' + $message.html() + '</div>');

                        if(jpMessages) {
                            var jpMessage = jpMessages.filter(function(item) {
                                return item.key == enMessage.key;
                            })[0];

                            if(jpMessage) {
                                var messageText = convertMessageText(jpMessage.value);

                                var $message = $('<div>');

                                //var sentences = messageText.replace(/([.?！⋯])\s*(?=[A-Z])/, "$1|").split("|");

                                $.each(messageText.split('<br><br>'), function(i, groupText) {
                                    if(!groupText.replace(/　/gi, '').length) {
                                        return;
                                    }

                                    var $group = $('<div class="c-message__group"><div class="c-message__group-play">&gt;</div></div>');

                                    $.each(groupText.replace('<br>', '　<br>').split('　'), function(j, text) {
                                        if(!text.length) {
                                            return;
                                        }

                                        $group.append('<span class="c-message__text">' + text + '</span>' + '<span>　</span>');
                                    });

                                    $message.append($group);
                                });

                                $row.find('.jp').html('<div class="c-message__key">#' + sectionId + '_' + jpMessage.key + ' <a href="javascript:;" class="js-speak-message">Speak</a> | <a href="javascript:;" class="js-copy-text" data-clipboard-text="' + messageText.replace(/<br>/gi, "\n") + '">Copy</a></div> <div class="c-message__value">' + $message.html() + '</div>');
                            }
                        }

                        $row.appendTo($table.find('tbody'));
                    }

                    $sections.empty();
                    $sections.append($table);

                    function bindCopyText() {

                        $sections.find('.js-copy-text').each(function() {
                            var clip = new ZeroClipboard(this);
                        });
                    }

                    bindCopyText();

                    // Now let's see if we can find some items that use the search term

                    var $search = $('.c-filters__search-input');

                    if($search.val()) {
                        $('.c-message__group').each(function() {
                            var $item = $(this);

                            var regex = new RegExp($search.val(), 'gi');
                            var res = regex.exec($item.text());

                            if(res) {
                                $item.addClass('c--active');
                            }
                        });

                        $(window).scrollTop($('.c-message__group.c--active').eq(0).offset().top);
                    }
                }

                function bindFilterResultNavigation() {
                    $('.c-filters__navigation-control.c--back').on('click', function() {
                        $(document).scrollTop(0);

                        return false;
                    });

                    $('.c-filters__navigation-control.c--prev').on('click', function() {
                        if(resultIndex === 0) {
                            // If we're on the first result of this listing,
                            // let's go to the prev listing (or to the last listing)
                            if(listingIndex <= 0) {
                                // We're on the first listing item
                                // So let's go to the end
                                listingIndex = $('.c-filters__listing .c-filters__listing-item.c--shown').length - 1;
                            }
                            else {
                                --listingIndex;
                            }

                            resultIndex = 0;

                            // Clear all item active states
                            $('.c-filters__listing .c-filters__listing-item').removeClass('c--active');
                        }
                        else {
                            --resultIndex;
                        }

                        if(!$('.c-filters__listing .c-filters__listing-item.c--active').length) {
                            // Activate the newly active listing
                            $('.c-filters__listing .c-filters__listing-item.c--shown').eq(listingIndex).addClass('c--active').trigger('click');
                        }

                        // We need a delay here to wait for rendering of the newly active listing
                        setTimeout(function() {
                            $(window).scrollTop($('.c-message__group.c--active').eq(resultIndex).offset().top);
                        });

                        return false;
                    });

                    $('.c-filters__navigation-control.c--next').on('click', function() {
                        if(resultIndex >= $('.c-message__group.c--active').length - 1) {
                            // If we're on the last result of this listing,
                            // let's go to the next listing (or back to the first listing)
                            if(listingIndex === $('.c-filters__listing .c-filters__listing-item.c--shown').length - 1) {
                                // We're on the last listing item
                                // So let's go back to the beginning
                                listingIndex = 0;
                            }
                            else {
                                ++listingIndex;
                            }

                            resultIndex = 0;

                            // Clear all item active states
                            $('.c-filters__listing .c-filters__listing-item').removeClass('c--active');
                        }
                        else {
                            ++resultIndex;
                        }

                        if(!$('.c-filters__listing .c-filters__listing-item.c--active').length) {
                            // Activate the newly active listing
                            $('.c-filters__listing .c-filters__listing-item.c--shown').eq(listingIndex).addClass('c--active').trigger('click');

                            if($('.c-message__group.c--active').length) {
                                $(window).scrollTop($('.c-message__group.c--active').eq(resultIndex).offset().top);
                            }
                        }

                        return false;
                    });
                }

                function bindVoiceTranslation() {
                    $(document).on('click', '.c-message__text', function() {
                        var $item = $(this);

                        $item.addClass('c--active');

                        setTimeout(function() {
                            $item.removeClass('c--active');
                        }, 3000);

                        var lang = $item.parents('.c-message').data('lang');

                        $('<script>').attr('src', '/api/1/tts/?lang=' + lang + '&callback=injectTTS&text=' + $item.text()).appendTo('head');
                    });

                    $(document).on('click', '.js-speak-message', function() {
                        var $item = $(this).parent().next();

                        $item.addClass('c--active');

                        setTimeout(function() {
                            $item.removeClass('c--active');
                        }, 3000);

                        var lang = $item.parents('.c-message').data('lang');

                        $('<script>').attr('src', '/api/1/tts/?lang=' + lang + '&callback=injectTTS&text=' + $item.text()).appendTo('head');
                    });


                    $(document).on('click', '.c-message__group-play', function() {
                        var $item = $(this).parent();

                        $item.addClass('c--active');

                        setTimeout(function() {
                            $item.removeClass('c--active');
                        }, 3000);

                        var lang = $item.parents('.c-message').data('lang');

                        $('<script>').attr('src', '/api/1/tts/?lang=' + lang + '&callback=injectTTS&text=' + $item.text()).appendTo('head');

                        return false;
                    });

                }

                function bindTextTranslation() {
                    window.babylonTranslator = {
                        callback: function(key, res, x1, x2, x3) {
                            if(!res || !res.translatedText) {
                                $('.c-translation__translated-result').html('Error translating');

                                return;
                            }

                            $('.c-translation__translated-result').html(res.translatedText);
                        }
                    };

                    $('.c-main').on('mouseup', function(e) {
                        if(!$(e.target).parents('.c-message.jp').length) {
                            // Don't bother continuing for non-Japanese message containers
                            return;
                        }

                        var html = getSelectionHTML();
                        var text = $('<div>' + html + '</div>').text();

                        $('.c-translation__original-result').html(text);

                        text = text.replace(/　/gi, '+');

                        var src = 'http://translation.babylon.com/translate/babylon.php?v=1.0&q=' + (text) + '&langpair=8%7C0&callback=babylonTranslator.callback&context=babylon.8.0._babylon_api_response';

                        var $script = $('<script>');

                        $script.attr('src', src);

                        $('head').append($script);
                    });
                }

                function initExternalMessages(callback) {
                    $.ajax({
                        url: '/App/Game/Sites/Edoras/Assets/Lang/en/messages.json',
                        success: function(messages) {
                            // Remove file not used in JP
                            messages.splice(13, 1);  // #13
                            messages.splice(386, 1); // #387
                            messages.splice(391, 1); // #391
                            messages.splice(391, 1); // #391
                            messages.splice(409, 1); // #391
                            messages.splice(409, 1); // #391
                            // what is 409? http://dl.dropbox.com/u/58484258/Screenshots/hrrq.png

                            // get 0-708
                            messages = messages.splice(0, 709);

                            lang.en.messages = messages;

                            $.ajax({
                                url: '/App/Game/Sites/Edoras/Assets/Lang/jp/messages.json',
                                success: function(messages) {
                                    lang.jp.messages = messages;

                                    updateListing();

                                    callback ? callback() : null;
                                }
                            });
                        }
                    });
                }

                function initInlineMessages() {
                    var messageRegex = /([0-9]+) (.*)\n/gi;

                    var enMessages = [];
                    var jpMessages = [];

                    var enMessageText = $('#en-messages')[0].innerHTML;
                    var jpMessageText = $('#jp-messages')[0].innerHTML;

                    enMessages = messageRegex.exec(enMessageText);
                    jpMessages = messageRegex.exec(jpMessageText);

                    while(enMessage = messageRegex.exec(enMessageText)) {
                        var id = enMessage[1];
                        var text = enMessage[2];

                        if(typeof lang.all[id] === 'undefined') {
                            lang.all[id] = [];
                        }

                        lang.all[id].push(text);
                    }

                    while(jpMessage = messageRegex.exec(jpMessageText)) {
                        var id = jpMessage[1];
                        var text = jpMessage[2];

                        if(typeof lang.all[id] === 'undefined') {
                            lang.all[id] = [];
                        }

                        lang.all[id].push(text);
                    }
                }

                function bindIntro() {
                    $('.js-load-game').on('click', function() {
                        $('.c-intro .c-menu').removeClass('c--shown');
                        $('.c-intro .c-alert').addClass('c--shown');

                        bindFilters();
                        bindFilterResultNavigation();
                        bindTextTranslation();
                        bindVoiceTranslation();

                        initExternalMessages(function() {
                            //
                            $('.c-intro').removeClass('c--shown');
                            $('.c-game-panel').addClass('c--shown');
                        });
                    });
                }

                //initInlineMessages();
                bindIntro();
            });
        });
    }

    constructor() {
        super();

        this.state = {
            searchText: 'Search here...'
        };
    }

    onChangeSearchText(e) {
        this.setState({
            searchText: e.target.value.substr(0, 140)
        });
    }

    render() {
        return (
            <View>
                <style>{`
                    body {
                        font: normal 12px sans-serif;
                    }

                    table {
                        border: 0;
                    }

                    .c-intro {
                        display: none;

                        text-align: center;
                    }

                        .c-intro.c--shown {
                            display: block;
                        }

                    .c-game-panel {
                        display: none;
                    }

                        .c-game-panel.c--shown {
                            display: block;
                        }

                    .sectionTemplate {
                        display: none;
                    }

                    #en-messages, #jp-messages {
                        display: none;
                    }

                    .c-filters__listing {
                        clear: both;

                        width: 100px;
                        height: 400px;

                        overflow: auto;

                    }

                        .c-filters__listing > a {
                            display: none;

                            padding: 5px;
                            margin: 2px;

                            font-size: 14px;
                            text-decoration: none;

                            color: #000;
                            background-color: #eee;
                        }

                            .c-filters__listing > a.c--shown {
                                display: block;
                                background-color: #eee;
                            }

                            .c-filters__listing > a.c--active {
                                background-color: #5e92ff;
                                color: #fff;
                            }
                        
                        .c-filters__listing-item {
                            display: block;
                        }

                    .c-filters {
                    }

                        .c-filters__navigation {
                            display: block;
                        }

                            .c-filters__navigation-control {
                                padding: 10px;
                                display: block;
                                color: #000;
                                background: #eee;
                                margin: 1px 0 1px 0;
                                text-decoration: none;
                                text-align: center;
                                font-size: 12px;
                                font-weight: bold;
                            }

                        .c-filters__status {
                            display: none;

                            padding: 10px;
                            margin: 1px 0;

                            background: #eee;
                            text-align: center;
                        }

                            .c-filters__status.c--active {
                                display: block;
                            }

                        .c-filters__search {
                            padding: 10px;
                            text-align: center;

                            background: #eee;
                        }

                            .c-filters__search-input {
                                padding: 5px;
                            }

                            .c-filters__search-submit {
                                padding: 5px;
                            }

                    #sections {
                        padding-bottom: 100px;
                    }

                        #sections .it {
                            display: none;
                        }

                        #sections table {
                            width: 100%;
                        }

                        #sections th {
                            width: 50%;

                            font-weight: bold;
                            font-size: 20px;
                            line-height: 20px;

                            border-bottom: 3px solid #aaa;
                        }

                        #sections td {
                            padding-bottom: 10px;

                            vertical-align: top;
                        }


                    #tts {
                        visibility: hidden;
                    }

                    .c-message {
                    }

                        .c-message__key {
                            margin-bottom: 10px;
                            padding: 5px;

                            background: #eee;
                            text-align: center;
                        }

                            .c-message__key.c--active {
                                background: #ffffb5;
                            }

                        .c-message__value {
                        }

                            .c-message__group {
                                width: 400px;
                            }

                            .c-message__group span {
                                margin: 0 2px;

                                font-size: 1px;
                            }

                            .c-message__group .c-message__text {
                                padding: 0 5px;
                                margin: 0;

                                background: #eee;
                                font-size: 16px;
                                line-height: 20px;
                            }

                                .c-message__text.c--active {
                                    background: #ffffb5;
                                }

                        .c-message__group-play {
                            display: inline-block;

                            padding: 0 5px;

                            font-weight: bold;
                        }

                        .c-message__group.c--active {
                            background-color: #ddd;
                        }

                    .c-primary-sidebar, .c-main, .c-secondary-sidebar {
                        float: left;
                    }

                    .c-primary-sidebar {
                        position: fixed;

                        top: 10px;
                        left: 10px;

                        width: 20%;
                    }

                    .c-secondary-sidebar {
                        position: fixed;

                        top: 0;
                        right: 0;

                        width: 20%;

                        padding: 10px;

                        background: #fff;
                    }

                    .c-main {
                        margin-left: 20%;
                        margin-right: 20%;

                        padding: 0 20px 20px 20px;
                    }

                    .c-alert {
                        padding: 15px;
                        margin-bottom: 20px;
                        border: 1px solid transparent;
                        border-radius: 4px;
                        display: none;
                        background-color: #fcf8e3;
                        border-color: #faebcc;
                        color: #8a6d3b;
                    }

                        .c-alert.c--shown {
                            display: inline-block;
                        }

                    .c-menu {
                        display: none;
                    }

                        .c-menu.c--shown {
                            display: block;
                        }

                    .c-footer {
                        position: fixed;
                        width: 100%;
                        bottom: 0;
                        left: 0;
                        text-align: center;

                        background: #fff;
                    }`}
                </style>

                <div className="c-intro c--shown">
                    <p>Your grand adventure in language translation is about to begin...</p>
                    <div className="c-menu c--shown">
                        <h2>Choose your adventure:</h2>
                        <button className="js-load-game button large black" data-id="platinum">Pokemon Platinum</button>
                    </div>
                    <div className="c-alert"><strong>Loading...</strong> Please wait, this may take a while (10MB).</div>
                </div>

                <div className="c-game-panel c--pokemon-platinum">
                    <div className="c-primary-sidebar">
                        <form id="filters" className="c-filters">
                            <div className="c-filters__search">
                                <input className="c-filters__search-input" type="text" name="search" defaultValue={this.state.searchText} placeholder="Search" onchange={(e)=>this.onChangeSearchText(e)} />
                                <input className="c-filters__search-submit" type="submit" name="submit" defaultValue="Submit" />
                            </div>

                            <div className="c-filters__status"></div>

                            <div className="c-filters__navigation">
                                <a href="javascript:;" className="c-filters__navigation-control c--back">BACK</a>
                                <a href="javascript:;" className="c-filters__navigation-control c--prev">PREV</a>
                                <a href="javascript:;" className="c-filters__navigation-control c--next">NEXT</a>
                            </div>

                            <div className="c-filters__listing"></div>
                        </form>
                    </div>

                    <div className="c-main">
                        <h1 className="c-title"></h1>
                        <div id="sections"></div>
                    </div>

                    <div className="c-secondary-sidebar">
                        <div className="c-translation">
                            <div className="c-translation__original">
                                <h2>Original:</h2>
                                <div className="c-translation__original-result">None yet</div>
                            </div>
                            <div className="c-translation__translated">
                                <h2>Translated:</h2>
                                <div className="c-translation__translated-result">None yet</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tts"></div>

                <table className="sectionTemplate">
                    <thead>
                        <tr>
                            <th>English</th>
                            <th>Japanese</th>
                            <th className="it">Italian</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="c-message en" data-lang="en"></td>
                            <td className="c-message jp" data-lang="jp"></td>
                            <td className="c-message it" data-lang="it"></td>
                        </tr>
                    </tbody>
                </table>

                <div className="c-footer">
                    <div>
                        <a href="https://twitter.com/share" className="twitter-share-button" data-url="http://pokelingo.com" data-text="Pokelingo searches, translates, and speaks text in Pokemon games" data-hashtags="">Tweet</a>
                        <div className="fb-like" data-href="http://pokelingo.com" data-layout="button_count" data-action="like" data-show-faces="false" data-share="true" data-width="50" data-font="arial"></div>
                    </div>
                </div>

            </View>
        );
    }
}

export default Layout;
