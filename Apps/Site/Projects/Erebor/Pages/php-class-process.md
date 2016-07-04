<div class="post-811 post type-post status-publish format-standard hentry category-programming tag-asio tag-php row-fluid blog-post" id="post-811">
    <div class="nav span2">
        <ul class="well nav-list">
            <li class="author">
                <i class="icon-user icon-black"></i> By: <a href="/author/eric/" title="Posts by Eric Muyser" rel="author" address="true">Eric Muyser</a> </li>
            <li class="published">
                <i class="icon-time icon-black"></i> On: <strong>August 2, 2010</strong>
            </li>
            <li class="categories">
                <i class="icon-book icon-black"></i> In: <a href="/category/programming/" title="View all posts in Programming" rel="category tag" address="true">Programming</a> </li>
            <li class="comments">
                <i class="icon-comment icon-black"></i> With <a href="/php-class-process/#respond" title="Comment on New Class: Process" address="true">no comments</a> </li>
            <li class="tags">
                <i class="icon-tags icon-black"></i> Tags: <a href="/tag/asio/" rel="tag" address="true">ASIO</a>, <a href="/tag/php/" rel="tag" address="true">PHP</a> </li>
        </ul>
    </div>
    <div class="post-thumb">
        <a title="Permanent Link to New Class: Process" href="/php-class-process/" address="true"></a>
    </div>
    <div class="span9 content">
        <p><span id="more-811"></span>
        </p>
        <p>Here’s another quick release. I remember working on this a few years ago. The idea is instead of forking processes, or calling blocking processes (with system, exec, passthru), we spawn children processes. Originally I would communicate with the actual process object, but I found a service with a process pool to be more effective (this way it can handle creation, handling, re-use, destruction, etc) – but a wrapper class could possibly be implemented.&nbsp;<strong>Disclaimer:</strong>&nbsp;I’m releasing it somewhat unfinished since I’m mostly using Python for my services these days. Feel free to fork it.</p>
        <p>&nbsp;</p>
        <p>Some examples would be handling DNS (since it’s blocking) or encoding video/audio (which can take minutes) or some other command that isn’t non-blocking.</p>
        <p>&nbsp;</p>
        <p>Here’s a quick example that “asynchronously” downloads and prints HTML from list of URLs. Keeping your main process non-blocking and free to do other stuff.</p>
        <pre class="prettyprint linenums"><ol class="linenums"><li class="L0"><span class="pln">&nbsp;</span></li><li class="L1"><span class="pln">&nbsp;</span></li><li class="L2"><span class="pun">&lt;?</span><span class="pln">php</span><p></p></li><li class="L3"><p><span class="pln">	require_once</span><span class="pun">(</span><span class="str">"../src/process.php"</span><span class="pun">);</span></p></li><li class="L4"><p><span class="pln">	$process_service </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> process_service</span><span class="pun">();</span></p></li><li class="L5"><p><span class="pln">	$url_list </span><span class="pun">=</span><span class="pln"> array</span><span class="pun">(</span></p></li><li class="L6"><p></p></li><li class="L7"><p><span class="pln">		</span><span class="str">"http://google.com/"</span><span class="pun">,</span></p></li><li class="L8"><p></p></li><li class="L9"><p><span class="pln">		</span><span class="str">"http://facebook.com/"</span><span class="pun">,</span></p></li><li class="L0"><p></p></li><li class="L1"><p><span class="pln">		</span><span class="str">"http://twitter.com/"</span></p></li><li class="L2"><p></p></li><li class="L3"><p><span class="pln">	</span><span class="pun">);</span></p></li><li class="L4"><p><span class="pln">	</span><span class="kwd">foreach</span><span class="pun">(</span><span class="pln">$url_list </span><span class="kwd">as</span><span class="pln"> $url</span><span class="pun">)</span></p></li><li class="L5"><p></p></li><li class="L6"><p><span class="pln">		$process_service</span><span class="pun">-&gt;</span><span class="pln">run</span><span class="pun">(</span></p></li><li class="L7"><p></p></li><li class="L8"><p><span class="pln">		</span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="kwd">use</span><span class="pun">(</span><span class="pln">$url</span><span class="pun">)</span></p></li><li class="L9"><p></p></li><li class="L0"><p><span class="pln">		</span><span class="pun">{</span></p></li><li class="L1"><p></p></li><li class="L2"><p><span class="pln">			$html </span><span class="pun">=</span><span class="pln"> file_get_contents</span><span class="pun">(</span><span class="pln">$url</span><span class="pun">);</span></p></li><li class="L3"><p><span class="pln">			</span><span class="kwd">return</span><span class="pln"> $html</span><span class="pun">;</span></p></li><li class="L4"><p></p></li><li class="L5"><p><span class="pln">		</span><span class="pun">},</span></p></li><li class="L6"><p></p></li><li class="L7"><p><span class="pln">		</span><span class="kwd">function</span><span class="pun">(</span><span class="pln">$html</span><span class="pun">)</span></p></li><li class="L8"><p></p></li><li class="L9"><p><span class="pln">		</span><span class="pun">{</span></p></li><li class="L0"><p></p></li><li class="L1"><p><span class="pln">			var_dump</span><span class="pun">(</span><span class="pln">$html</span><span class="pun">);</span></p></li><li class="L2"><p></p></li><li class="L3"><p><span class="pln">		</span><span class="pun">});</span></p></li><li class="L4"><p><span class="pln">	</span><span class="kwd">while</span><span class="pun">(</span><span class="kwd">true</span><span class="pun">)</span></p></li><li class="L5"><p></p></li><li class="L6"><p><span class="pln">	</span><span class="pun">{</span></p></li><li class="L7"><p></p></li><li class="L8"><p><span class="pln">		$process_service</span><span class="pun">-&gt;</span><span class="pln">update</span><span class="pun">();</span></p></li><li class="L9"><p><span class="pln">		echo </span><span class="str">"."</span><span class="pun">;</span><span class="pln"> </span><span class="com">// testing</span></p></li><li class="L0"><p></p></li><li class="L1"><p><span class="pln">		usleep</span><span class="pun">(</span><span class="lit">10000</span><span class="pun">);</span></p></li><li class="L2"><p></p></li><li class="L3"><p><span class="pln">	</span><span class="pun">}</span></p></li><li class="L4"><p></p></li><li class="L5"><p><span class="pun">?&gt;</span></p></li><li class="L6"><p></p></li></ol></pre>
        <p>&nbsp;</p>
        <p>1) We instantiate our&nbsp;<em>process_service</em>
            <br> 2) We have a standard array of URL’s
            <br> 3) We loop over those URL’s, and call&nbsp;<em>run()</em>&nbsp;with 2 arguments: what you want to run in the process (anything you want from the current process in the child process must be passed with the&nbsp;<em>use</em>&nbsp;feature from&nbsp;<a href="http://php.net/" target="_blank">PHP</a>&nbsp;5.3, and this works thanks to lambda serialization – credits to<a href="http://github.com/jeremeamia/super_closure" target="_blank">&nbsp;Jeremy Lindblom’s super_closure</a>), and the callback for when it’s finished (arguments are whatever you returned in the first function).
            <br> 4) Lastly we have a main loop which calls&nbsp;<em>process_service</em>‘s update function, which handles IO from the children processes, and such.</p>
        <p>&nbsp;</p>
        <p><strong>Links:</strong>
        </p>
        <ul>
            <li><a href="http://github.com/ericmuyser/php-class-process/" target="_blank"><em>PHP Process Class</em>&nbsp;Source</a>
            </li>
            <li><a href="http://github.com/downloads/ericmuyser/php-class-process/php-class-process-2010-08-02.zip" target="_blank"><em>PHP Process Class</em>&nbsp;Download</a>
            </li>
        </ul>
        <p>&nbsp;</p>
        <p>More found on the&nbsp;<a href="/work/" address="true">work</a>&nbsp;page, and more to come!</p>
    </div>
</div>
<ul class="pager">
    <li class="previous">
        <a href="/php-class-lambda/" rel="prev" address="true">← New Class: Lambda</a> </li>
    <li class="next">
        <a href="/fix-ajaxqueue-jquery-plugin/" rel="next" address="true">Tip: Fix AjaxQueue (jQuery Plugin) →</a> </li>
</ul>
