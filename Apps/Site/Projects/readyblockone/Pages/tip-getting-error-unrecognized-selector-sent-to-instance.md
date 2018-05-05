<div class="post-825 post type-post status-publish format-standard hentry category-programming tag-bug tag-cocoa tag-titanium row-fluid blog-post" id="post-825">
    <div class="nav span2">
        <ul class="well nav-list">
            <li class="author">
                <i class="icon-user icon-black"></i> By: <a href="/author/eric/" title="Posts by Eric Muyser" rel="author" address="true">Eric Muyser</a> </li>
            <li class="published">
                <i class="icon-time icon-black"></i> On: <strong>June 21, 2011</strong>
            </li>
            <li class="categories">
                <i class="icon-book icon-black"></i> In: <a href="/category/programming/" title="View all posts in Programming" rel="category tag" address="true">Programming</a> </li>
            <li class="comments">
                <i class="icon-comment icon-black"></i> With <a href="/tip-getting-error-unrecognized-selector-sent-to-instance/#respond" title="Comment on Tip: Getting error “unrecognized selector sent to instance”?" address="true">no comments</a> </li>
            <li class="tags">
                <i class="icon-tags icon-black"></i> Tags: <a href="/tag/bug/" rel="tag" address="true">Bug</a>, <a href="/tag/cocoa/" rel="tag" address="true">Cocoa</a>, <a href="/tag/titanium/" rel="tag" address="true">Titanium</a> </li>
        </ul>
    </div>
    <div class="post-thumb">
        <a title="Permanent Link to Tip: Getting error “unrecognized selector sent to instance”?" href="/tip-getting-error-unrecognized-selector-sent-to-instance/" address="true"></a>
    </div>
    <div class="span9 content">
        <p><span id="more-825"></span>
        </p>
        <p>So you are developing an Titanium&nbsp;app, and you’ve across this mysterious error. At least, that’s what I’m assuming as you’ve come across this post. From what I can tell, it tends to be predominant on iPhone/iPod. I’m not sure if my solution relates to that, being that I’m developing for the desktop.</p>
        <p>&nbsp;</p>
        <p>Basically, this error will occur when something has gone horribly wrong on the Cocoa side, which in the case of Titanium is out of our control. We can however stop it from showing its ugly face. For me, the major cause has been Flash related content. If I try to load a JS library such as SWFobject into my page, it will crash my app. Why? Well, let’s just say I’m running Snow Leopard without hardware accelerated graphics right now, which means Flash Player 10 instantly falls on its face. I can&nbsp;<strong>kind of</strong>&nbsp;understand that from the error pointing me to OpenGL, but&nbsp;<strong>not really</strong>.</p>
        <p>&nbsp;</p>
        <p>For Google, the exact error I’ve received (which varies):</p>
        <p><strong>2011-06-21 21:01:38.373 utelevision[79434:b07] *** WebKit discarding exception: &lt;NSInvalidArgumentException&gt; -[FP_FPCAOpenGLLayer setBuffer:]: unrecognized selector sent to instance 0x2c8fd0</strong>
        </p>
    </div>
</div>
<ul class="pager">
    <li class="previous">
        <a href="/screen-tearing-in-vindictus/" rel="prev" address="true">← Tip: Fix Screen Tearing in Vindictus</a> </li>
    <li class="next">
        <a href="/jquery-ui-theme-cocoa/" rel="next" address="true">New Theme: Cocoa for jQuery UI →</a> </li>
</ul>
