# Citrus Engine: Tips and Tricks

## Content

<div class="post-1297 post type-post status-publish format-standard hentry category-programming tag-citrus-engine tag-gamedev tag-nape row-fluid blog-post" id="post-1297">
    <div class="nav span2">
        <ul class="well nav-list">
            <li class="author">
                <i class="icon-user icon-black"></i> By: <a href="/author/eric/" title="Posts by Eric Muyser" rel="author" address="true">Eric Muyser</a>
            </li>
            <li class="published">
                <i class="icon-time icon-black"></i> On: <strong>January 22, 2013</strong>
            </li>
            <li class="categories">
                <i class="icon-book icon-black"></i> In: <a href="/category/programming/" title="View all posts in Programming" rel="category tag" address="true">Programming</a>
            </li>
            <li class="comments">
                <i class="icon-comment icon-black"></i> With <a href="/citrus-engine-tips-and-tricks/#respond" title="Comment on Citrus Engine: Tips and Tricks" address="true">no comments</a>
            </li>
            <li class="tags">
                <i class="icon-tags icon-black"></i> Tags: <a href="/tag/citrus-engine/" rel="tag" address="true">Citrus Engine</a>, <a href="/tag/gamedev/" rel="tag" address="true">Gamedev</a>, <a href="/tag/nape/" rel="tag" address="true">Nape</a>
            </li>
        </ul>
    </div>
    <div class="post-thumb">
        <a title="Permanent Link to Citrus Engine: Tips and Tricks" href="/citrus-engine-tips-and-tricks/" address="true"></a>
    </div>
    <div class="span9 content">
        <p>I’ve begun using the <a href="http://www.google.ca/url?sa=t&amp;rct=j&amp;q=citrus%20engine&amp;source=web&amp;cd=1&amp;cad=rja&amp;ved=0CDIQFjAA&amp;url=http%3A%2F%2Fcitrusengine.com%2F&amp;ei=pWMFUeHyENCfkgWauoAY&amp;usg=AFQjCNErp0WFoiR77rY2L1F_3eiaVJakCg&amp;bvm=bv.41524429,d.dGI" target="_blank">Citrus Engine</a> with <a href="http://gamua.com/starling/" target="_blank">Starling</a>, <a href="http://feathersui.com/" target="_blank">Feathers UI</a> and <a href="http://napephys.com/" target="_blank">Nape Physics</a>. I will keep this up to date with tips I encounter.</p>
        <ol>
            <li><strong>01.22.2013</strong> – Making the camera follow the object responsively, with no delay. Set the fourth parameter, the easing, of the setupCamera call as `new Vector(1, 1)`. eg.view.setupCamera(this.player, new MathVector(stage.stageWidth / 2, stage.stageHeight / 2), new Rectangle(0, 0, 10000000, 10000000), new MathVector(1, 1));</li>
            <li><strong>01.27.2013</strong> – Scrolling a starling.controls.ScrollText to the bottom:myTextField.verticalScrollPosition = myTextField.maxVerticalScrollPosition;</li>
            <li>Coming soon…</li>
        </ol>
    </div>
</div>
<ul class="pager">
    <li class="previous">
        <a href="/my-first-hackathon-lessons-learned/" rel="prev" address="true">← My First Hackathon: Lessons Learned</a>
    </li>
    <li class="next">
        <a href="/fix-missing-phusion-passenger-dependencies/" rel="next" address="true">Fix: Missing Phusion Passenger Dependencies →</a>
    </li>
</ul>
