# Fix: Missing Phusion Passenger Dependencies

## Content

<div class="post-1316 post type-post status-publish format-standard hentry category-programming tag-apache tag-phusion-passenger tag-ruby row-fluid blog-post" id="post-1316">
    <div class="nav span2">
        <ul class="well nav-list">
            <li class="author">
                <i class="icon-user icon-black"></i> By: <a href="/author/eric/" title="Posts by Eric Muyser" rel="author">Eric Muyser</a>
            </li>
            <li class="published">
                <i class="icon-time icon-black"></i> On: <strong>January 23, 2013</strong>
            </li>
            <li class="categories">
                <i class="icon-book icon-black"></i> In: <a href="/category/programming/" title="View all posts in Programming" rel="category tag">Programming</a>
            </li>
            <li class="comments">
                <i class="icon-comment icon-black"></i> With <a href="/fix-missing-phusion-passenger-dependencies/#respond" title="Comment on Fix: Missing Phusion Passenger Dependencies">no comments</a>
            </li>
            <li class="tags">
                <i class="icon-tags icon-black"></i> Tags: <a href="/tag/apache/" rel="tag">Apache</a>, <a href="/tag/phusion-passenger/" rel="tag">Phusion Passenger</a>, <a href="/tag/ruby/" rel="tag">Ruby</a>
            </li>
        </ul>
    </div>
    <div class="post-thumb">
        <a title="Permanent Link to Fix: Missing Phusion Passenger Dependencies" href="/fix-missing-phusion-passenger-dependencies/"></a>
    </div>
    <div class="span9 content">
        <p>If you are trying to install Phusion Passenger on Ubuntu and `passenger-install-apache2-module` is reporting</p>
        <div class="well">
            <p>Apache 2 development headers&#8230; not found</p>
            <p>Apache Portable Runtime (APR) development headers&#8230; not found</p>
            <p>Apache Portable Runtime Utility (APU) development headers&#8230; not found</p>
        </div>
        <p>You need to run this:</p>
        <pre class="prettyprint linenums">
            sudo apt-get install apache2-dev
        </pre>
        <p>If it&#8217;s reporting this:</p>
        <div class="well">
            Curl development headers with SSL support&#8230; not found
        </div>
        <p>Run this:</p>
        <pre class="prettyprint linenums">
            sudo apt-get install libcurl4-openssl-dev
        </pre>
    </div>
</div>
<ul class="pager">
    <li class="previous">
        <a href="/citrus-engine-tips-and-tricks/" rel="prev">&larr; Citrus Engine: Tips and Tricks</a>
    </li>
    <li class="next">
        <a href="/in-japan/" rel="next">In Japan &rarr;</a>
    </li>
</ul>
