<div class="post-800 post type-post status-publish format-standard hentry category-gaming category-programming tag-diablo tag-javascript tag-web-application row-fluid blog-post" id="post-800">
    <div class="nav span2">
        <ul class="well nav-list">
            <li class="author">
                <i class="icon-user icon-black"></i> By: <a href="/author/eric/" title="Posts by Eric Muyser" rel="author" address="true">Eric Muyser</a> </li>
            <li class="published">
                <i class="icon-time icon-black"></i> On: <strong>February 18, 2008</strong>
            </li>
            <li class="categories">
                <i class="icon-book icon-black"></i> In: <a href="/category/gaming/" title="View all posts in Gaming" rel="category tag" address="true">Gaming</a>, <a href="/category/programming/" title="View all posts in Programming" rel="category tag" address="true">Programming</a> </li>
            <li class="comments">
                <i class="icon-comment icon-black"></i> With <a href="/bnetdb/#respond" title="Comment on New Website: Battle.net Database" address="true">no comments</a> </li>
            <li class="tags">
                <i class="icon-tags icon-black"></i> Tags: <a href="/tag/diablo/" rel="tag" address="true">Diablo</a>, <a href="/tag/javascript/" rel="tag" address="true">JavaScript</a>, <a href="/tag/web-application/" rel="tag" address="true">Web Application</a> </li>
        </ul>
    </div>
    <div class="post-thumb">
        <a title="Permanent Link to New Website: Battle.net Database" href="/bnetdb/" address="true"></a>
    </div>
    <div class="span9 content">
        <p><span id="more-800"></span>
        </p>
        <p>As I’ve grown tired of&nbsp;<a title="Battle.net" href="http://battle.net/" target="_blank">Battle.net</a>‘s game list feature, I’ve developed a web-based replacement. It only shows a fraction of the current games (at least, if there’s more than 10 or so). It’s very limited, and game’s which you know exist either will not show up or will disappear from the list within a few seconds. To my surprise no one had come up with an improved game search. The project idea came to me when I was doing similar web development work in 2008. I wasn’t aware at the time, but there did exist d2loader and&nbsp;<a title="Redvex" href="http://redvex.d2help.com/" target="_blank">Redvex</a>&nbsp;plugins that allowed game filtering. This is very similar, but it keeps track of past and present games via an online interface.&nbsp;<a title="Battle.net Database" href="http://bnetdb.com/" target="_blank">BNDB</a>&nbsp;is a fancy name for a few very simple scripts.</p>
        <p>&nbsp;</p>
        <address><img src="http://dl.dropbox.com/u/18343209/Screenshots/y29x.png" alt="" width="800" height="621"></address>
        <p>&nbsp;</p>
        <p>I started with a Python proxy script that monitored packets from my&nbsp;<a href="http://www.blizzard.com/diablo2/" target="_blank">Diablo 2</a>&nbsp;client. Unfortunately, that made it difficult to have D2 up and running 24/7, let alone multiple instances for each realm, difficulty, etc. I have since moved over to a slightly modified version of the clientless library, heroin glands. Now I can have my *nix server run a very low resource application that updates all the game lists.</p>
        <p>In total there are 144 different game lists for&nbsp;<a title="Diablo 2" href="http://www.blizzard.com/diablo2/" target="_blank">Diablo 2</a>. Each realm, difficulty, ladder/non-ladder, softcore/hardcore has it’s own list of games. In order for each one to work, I need a character which can access the chosen list. Normal difficulty characters are easy, but I don’t have time to get rushed to Nightmare/Hell on 100 different settings. For this reason, plugins and desktop applications seem a more logical solution than&nbsp;<a href="http://bnetdb.com/" target="_blank">BNDB</a>, however this was an interesting project none-the-less.</p>
        <p><strong>Enabled Lists:</strong>
            <br> D2 LoD USWSCL Normal</p>
        <p><strong>143 Disabled Lists</strong>
        </p>
        <p>If you want a list enabled, please leave a comment. If you want to donate a character for a certain game list, please send me the account name and password to eric.muyser@gmail.com and I will see about enabling that game list.</p>
        <p><strong>Example Searches:</strong>
        </p>
        <ul>
            <li>baal</li>
            <li>free</li>
            <li>pk</li>
            <li>bring ist</li>
            <li>brg</li>
            <li>duel</li>
            <li>d u e l</li>
            <li>scr</li>
            <li>shako</li>
            <li>mal</li>
        </ul>
        <p>Anyone that wants to use it, hope it’s helpful. <img src="/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley"> A modern browser such as&nbsp;<a href="http://www.mozilla.com/firefox/" target="_blank">Firefox</a>&nbsp;is recommended.</p>
        <p>Feedback, bugs, requests, etc. appreciated.</p>
        <p>I may or may not create a&nbsp;<a href="http://redvex.d2help.com/" target="_blank">Redvex</a>&nbsp;plugin that works together with a&nbsp;<a href="http://qt.nokia.com/" target="_blank">Qt</a>&nbsp;application to filter the game list using the&nbsp;<a title="Battle.net Database" href="http://bnetdb.com/" target="_blank">BNDB</a>&nbsp;API, so it would come up as shown on the website. It really depends.</p>
        <p>The images are copyright&nbsp;<a title="Blizzard Entertainment" href="http://www.blizzard.com/" target="_blank">Blizzard Entertainment</a>, modified from&nbsp;<a href="http://www.blizzard.com/diablo2/" target="_blank">Diablo 2</a>&nbsp;screenshots.</p>
        <p>&nbsp;</p>
        <p><strong>Links:</strong>
            <br>
            <a href="http://bnetdb.com/" target="_blank">Battle.net Database Website</a>
            <br>
            <a href="http://github.com/ericmuyser/bnetdb/" target="_blank">Battle.net Database Source</a>
        </p>
        <p>&nbsp;</p>
        <p><strong>Todo:</strong>
            <br> - Enable more game lists. I have to convert some heroin to my own asynchronous library before-hand.
            <br> - Improve the site JS and add features such as dates and player lists.
            <br> - Cookies to save UI positions.</p>
    </div>
</div>
<ul class="pager">
    <li class="previous">
        <a href="/jquery-plugin-jdrawer/" rel="prev" address="true">← New Script: jDrawer</a> </li>
    <li class="next">
        <a href="/php-class-curl/" rel="next" address="true">New Class: cURL →</a> </li>
</ul>
