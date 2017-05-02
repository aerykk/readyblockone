<div class="post-815 post type-post status-publish format-standard hentry category-programming tag-ajaxqueue tag-bug tag-jquery row-fluid blog-post" id="post-815">
    <div class="nav span2">
        <ul class="well nav-list">
            <li class="author">
                <i class="icon-user icon-black"></i> By: <a href="/author/eric/" title="Posts by Eric Muyser" rel="author" address="true">Eric Muyser</a> </li>
            <li class="published">
                <i class="icon-time icon-black"></i> On: <strong>August 28, 2010</strong>
            </li>
            <li class="categories">
                <i class="icon-book icon-black"></i> In: <a href="/category/programming/" title="View all posts in Programming" rel="category tag" address="true">Programming</a> </li>
            <li class="comments">
                <i class="icon-comment icon-black"></i> With <a href="/fix-ajaxqueue-jquery-plugin/#respond" title="Comment on Tip: Fix AjaxQueue (jQuery Plugin)" address="true">no comments</a> </li>
            <li class="tags">
                <i class="icon-tags icon-black"></i> Tags: <a href="/tag/ajaxqueue/" rel="tag" address="true">AjaxQueue</a>, <a href="/tag/bug/" rel="tag" address="true">Bug</a>, <a href="/tag/jquery/" rel="tag" address="true">jQuery</a> </li>
        </ul>
    </div>
    <div class="post-thumb">
        <a title="Permanent Link to Tip: Fix AjaxQueue (jQuery Plugin)" href="/fix-ajaxqueue-jquery-plugin/" address="true"></a>
    </div>
    <div class="span9 content">
        <p><span id="more-815"></span>
        </p>
        <p>As noted by Mark Gibson in the&nbsp;<a href="http://api.jquery.com/queue/" target="_blank">.queue() docs</a>, and the&nbsp;<a href="http://plugins.jquery.com/project/ajaxqueue" target="_blank">AjaxQueue</a>&nbsp;tickets, the functionality of fn.queue changed and it&nbsp;is no longer working by default. In order to fix it, you need to manually call dequeue(). Simply add it after it sets up queue (line 47):</p>
        <p></p><pre class="prettyprint linenums"><ol class="linenums"><li class="L0"><span class="pln">&nbsp;</span></li><li class="L1"><span class="pln">&nbsp;</span></li><li class="L2"><span class="pln">jQuery</span><span class="pun">([</span><span class="pln"> jQuery</span><span class="pun">.</span><span class="pln">ajaxQueue </span><span class="pun">]).</span><span class="pln">queue</span><span class="pun">(</span><span class="str">"ajax"</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(){</span></li><li class="L3"><span class="pln">&nbsp;</span></li><li class="L4"><span class="pln">  jQuery</span><span class="pun">.</span><span class="pln">ajax</span><span class="pun">(</span><span class="pln"> o </span><span class="pun">);</span></li><li class="L5"><span class="pln">&nbsp;</span></li><li class="L6"><span class="pun">});</span></li><li class="L7"><span class="pln">&nbsp;</span></li></ol></pre>
        <br> to
        <p></p>
        <p></p><pre class="prettyprint linenums"><ol class="linenums"><li class="L0"><span class="pln">&nbsp;</span></li><li class="L1"><span class="pln">&nbsp;</span></li><li class="L2"><span class="pln">jQuery</span><span class="pun">([</span><span class="pln"> jQuery</span><span class="pun">.</span><span class="pln">ajaxQueue </span><span class="pun">]).</span><span class="pln">queue</span><span class="pun">(</span><span class="str">"ajax"</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(){</span></li><li class="L3"><span class="pln">&nbsp;</span></li><li class="L4"><span class="pln">  jQuery</span><span class="pun">.</span><span class="pln">ajax</span><span class="pun">(</span><span class="pln"> o </span><span class="pun">);</span></li><li class="L5"><span class="pln">&nbsp;</span></li><li class="L6"><span class="pun">}).</span><span class="pln">dequeue</span><span class="pun">(</span><span class="str">"ajax"</span><span class="pun">);</span></li><li class="L7"><span class="pln">&nbsp;</span></li></ol></pre>
        <br> That’s it! Great plugin.. simple and effective. I may try a more robust solution in the future.
        <p></p>
    </div>
</div>
<ul class="pager">
    <li class="previous">
        <a href="/php-class-process/" rel="prev" address="true">← New Class: Process</a> </li>
    <li class="next">
        <a href="/made-with-lemon-aid/" rel="next" address="true">Made with Lemon-Aid →</a> </li>
</ul>
