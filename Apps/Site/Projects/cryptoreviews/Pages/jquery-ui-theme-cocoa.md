<div class="post-824 post type-post status-publish format-standard hentry category-programming tag-javascript tag-jquery-ui tag-less tag-theme tag-ui row-fluid blog-post" id="post-824">
    <div class="nav span2">
        <ul class="well nav-list">
            <li class="author">
                <i class="icon-user icon-black"></i> By: <a href="/author/eric/" title="Posts by Eric Muyser" rel="author" address="true">Eric Muyser</a> </li>
            <li class="published">
                <i class="icon-time icon-black"></i> On: <strong>October 9, 2011</strong>
            </li>
            <li class="categories">
                <i class="icon-book icon-black"></i> In: <a href="/category/programming/" title="View all posts in Programming" rel="category tag" address="true">Programming</a> </li>
            <li class="comments">
                <i class="icon-comment icon-black"></i> With <a href="/jquery-ui-theme-cocoa/#respond" title="Comment on New Theme: Cocoa for jQuery UI" address="true">no comments</a> </li>
            <li class="tags">
                <i class="icon-tags icon-black"></i> Tags: <a href="/tag/javascript/" rel="tag" address="true">JavaScript</a>, <a href="/tag/jquery-ui/" rel="tag" address="true">jQuery UI</a>, <a href="/tag/less/" rel="tag" address="true">LESS</a>, <a href="/tag/theme/" rel="tag" address="true">Theme</a>, <a href="/tag/ui/" rel="tag" address="true">UI</a> </li>
            <li></li>
            <li style="display: none">
                <a href="http://twitter.com/share" class="twitter-share-button" data-url="
Notice: Undefined variable: url in /ude/em/sites/ericmuyser.com/www/wp-content/themes/persona/content-post.php on line 50
" data-count="horizontal" data-via="ericmuyser" target="_blank">Tweet</a>
            </li>
            <li style="display: none">
                <g:plusone size="medium" href="
Notice: Undefined variable: url in /ude/em/sites/ericmuyser.com/www/wp-content/themes/persona/content-post.php on line 53
"></g:plusone>
            </li>
            <li style="display: none">
                <div class="fb-like" data-href="
Notice: Undefined variable: url in /ude/em/sites/ericmuyser.com/www/wp-content/themes/persona/content-post.php on line 56
" data-send="false" data-layout="button_count" data-width="100" data-show-faces="false" data-font="verdana"></div>
            </li>
        </ul>
    </div>
    <div class="post-thumb">
        <a title="Permanent Link to New Theme: Cocoa for jQuery UI" href="/jquery-ui-theme-cocoa/" address="true"></a>
    </div>
    <div class="span9 content">
        <p><span id="more-824"></span>
        </p>
        <p>Cocoa-style theme for jQuery UI.</p>
        <p><strong>Links</strong>
        </p>
        <ul>
            <li><a href="http://ericmuyser.github.com/jquery-ui-theme-cocoa/demo/" target="_blank">Demo</a>
            </li>
            <li><a href="https://github.com/ericmuyser/jquery-ui-theme-cocoa/zipball/master" target="_blank">Download</a>
            </li>
            <li><a href="https://github.com/ericmuyser/jquery-ui-theme-cocoa" target="_blank">Source &amp; Documentation</a>
            </li>
            <li><a href="https://github.com/ericmuyser/jquery-ui-theme-cocoa/issues" target="_blank">Having issues?</a>
            </li>
        </ul>
        <p>&nbsp;</p>
        <address><img src="https://a248.e.akamai.net/assets.github.com/img/a66f773d9e83250628d8a26483bcb3c230f7a315/687474703a2f2f646c2e64726f70626f782e636f6d2f752f31383334333230392f62616b65722e6a7067" alt="" width="959" height="642"></address>
        <p>A little backstory to how this project came about. When I began development for some Titanium&nbsp;apps a few months back, I weighed the possible UI options. If you’re not familiar, Appcelerator&nbsp;is an cross-platform application which runs your web coding as a native app on your operating system. You create Appcelerator apps using Titanium Studio. In my case, it’s essentially running my HTML/CSS/JavaScript in a WebKit frame. That meant I would need to choose 1) a CSS framework (I created my own LESS framework:&nbsp;<a href="https://github.com/ericmuyser/moar" target="_blank">moar</a>), a JavaScript framework (I created my own Node.js framework of sorts:&nbsp;<a href="https://github.com/ericmuyser/node-std" target="_blank">node-std</a>&nbsp;that’s cross-compatible both on the server and client side, thanks to&nbsp;<a href="https://github.com/substack/node-browserify" target="_blank">node-browserify</a>), and a JavaScript UI framework to lay on top of it. Being that I was using my own JS framework, I wanted something I could simply drop in and&nbsp;<strong>just work</strong>.</p>
        <p>I explored Sproutcore, Cappuccino, and the like, but personally found them to be too much overhead for what I needed. I was fairly familiar with jQuery UI, but found creating the theme to be slightly tedious due to the raw unstructured CSS. I immediately converted the core CSS to LESS (<a href="https://github.com/ericmuyser/jquery-ui-less-theme" target="_blank">jquery-ui-less-theme</a>&nbsp;on GitHub), clearing up some of the bloat. Although it is developed in LESS, it is compiled down into raw CSS and perfectly usable in that state.</p>
        <p>Having used Mac OS X for a year now, I’ve become quite fond of the native Cocoa UI. If you go through the official jQuery UI themes, almost none of them would be suitable as a base for a Mac-style theme, but I remembered having seen&nbsp;<a href="https://github.com/taitems/Aristo-jQuery-UI-Theme" target="_blank">Aristo</a>&nbsp;by Tait Brown, which was an excellent theme to start with.</p>
        <p>&nbsp;</p>
        <p>For those that have been paying attention, you’ll notice the breakdown:</p>
        <ul>
            <li>Titanium app that uses jquery-ui-theme-cocoa</li>
            <li>jquery-ui-theme-cocoa uses jquery-ui-less-theme and moar</li>
        </ul>
        <p>&nbsp;</p>
        <p>I’m continuing to use this theme in some currently unreleased apps, and so expect to continue to see improvements as time goes on. If you have any comments, suggestions, please let me know below. Thank you.</p>
        <p>&nbsp;</p>
        <p>More of my jQuery work can be&nbsp;<a href="/work/jquery" address="true">found here</a>.</p>
    </div>
</div>
<ul class="pager">
    <li class="previous">
        <a href="/tip-getting-error-unrecognized-selector-sent-to-instance/" rel="prev" address="true">← Tip: Getting error “unrecognized selector sent to instance”?</a> </li>
    <li class="next">
        <a href="/less-is-moar/" rel="next" address="true">New Library: Moar for LESS (CSS) →</a> </li>
</ul>
