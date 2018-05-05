<div class="post-818 post type-post status-publish format-standard hentry category-general category-programming tag-lamp tag-lemonstand tag-mysql tag-nginx tag-php tag-sysadmin row-fluid blog-post" id="post-818">
    <div class="nav span2">
        <ul class="well nav-list">
            <li class="author">
                <i class="icon-user icon-black"></i> By: <a href="/author/eric/" title="Posts by Eric Muyser" rel="author" address="true">Eric Muyser</a> </li>
            <li class="published">
                <i class="icon-time icon-black"></i> On: <strong>February 22, 2011</strong>
            </li>
            <li class="categories">
                <i class="icon-book icon-black"></i> In: <a href="/category/general/" title="View all posts in General" rel="category tag" address="true">General</a>, <a href="/category/programming/" title="View all posts in Programming" rel="category tag" address="true">Programming</a> </li>
            <li class="comments">
                <i class="icon-comment icon-black"></i> With <a href="/getting-started-with-nginx-php5-and-mysql/#respond" title="Comment on Getting started with Nginx, PHP5, and MySQL" address="true">no comments</a> </li>
            <li class="tags">
                <i class="icon-tags icon-black"></i> Tags: <a href="/tag/lamp/" rel="tag" address="true">LAMP</a>, <a href="/tag/lemonstand/" rel="tag" address="true">LemonStand</a>, <a href="/tag/mysql/" rel="tag" address="true">MySQL</a></li>
        </ul>
    </div>
    <div class="post-thumb">
        <a title="Permanent Link to Getting started with Nginx, PHP5, and MySQL" href="/getting-started-with-nginx-php5-and-mysql/" address="true"></a>
    </div>
    <div class="span9 content">
        <p><span id="more-818"></span>
        </p>
        <p>Today I’m going to do a quick run down from start to finish successfully installing and running PHP applications on LAMP. We’ll be using Nginx, PHP5, and MySQL.&nbsp;My OS of choice is a Debian VPS; your experience may be differ on other distros.&nbsp;My host of choice is Rackspace Cloud Servers. By the end, we should be able to run web apps such as WordPress, LemonStand, Joomla, etc.</p>
        <p>&nbsp;</p>
        <p>First, we need to create our VPS. That is extremely easy on Rackspace, Linode, etc. Simply log into your backend UI and create a new server. You should be given or mailed credentials.</p>
        <p>&nbsp;</p>
        <p>You will need to point a DNS&nbsp;<strong>A record</strong>&nbsp;to the provided IP address.</p>
        <p>&nbsp;</p>
        <p>Next, we need to SSH into our box (or use a provided backend console). So we open up our command-line Console. I will assume you are using root, if not, you will need to&nbsp;<strong>sudo</strong>&nbsp;or&nbsp;<strong>su</strong>&nbsp;before each command.</p>
        <p>&nbsp;</p>
        <p>Run this command:&nbsp;<strong>ssh myusername@mydomain.com</strong>&nbsp;and login.</p>
        <p>&nbsp;</p>
        <p>Currently, the offered Debian version is Lenny (with Squeeze coming soon I imagine). So, in order to simplify things, we’re actually going to upgrade to Squeeze.</p>
        <p>&nbsp;</p>
        <p>When I mention to edit a file, you can do so simply like this in command-line:&nbsp;<strong>nano /path/to/file/name.ext</strong>
        </p>
        <p>If you use&nbsp;<strong>nano</strong>, then simply use&nbsp;<strong>ctrl+o</strong>&nbsp;to save and&nbsp;<strong>ctrl+x</strong>&nbsp;to exit.</p>
        <p>&nbsp;</p>
        <p>First, open<strong>&nbsp;nano&nbsp;/etc/apt/sources.list</strong>&nbsp;in your favorite editor (vi, nano, etc), change instances of&nbsp;<em>lenny</em>&nbsp;to&nbsp;<em>squeeze</em>, and add dotdeb’s repositories, like this:</p>
        <p>&nbsp;</p>
        <pre class="prettyprint linenums"><ol class="linenums"><li class="L0"><span class="pln">deb http</span><span class="pun">:</span><span class="com">//http.us.debian.org/debian/ squeeze main contrib non-free</span></li><li class="L1"><span class="pln">&nbsp;</span></li><li class="L2"><span class="pln">deb</span><span class="pun">-</span><span class="pln">src http</span><span class="pun">:</span><span class="com">//http.us.debian.org/debian/ squeeze main contrib non-free</span></li><li class="L3"><span class="pln">&nbsp;</span></li><li class="L4"><span class="pln">deb http</span><span class="pun">:</span><span class="com">//security.debian.org/ squeeze/updates main contrib</span></li><li class="L5"><span class="pln">&nbsp;</span></li><li class="L6"><span class="pln">deb</span><span class="pun">-</span><span class="pln">src http</span><span class="pun">:</span><span class="com">//security.debian.org/ squeeze/updates main contrib</span></li><li class="L7"><span class="pln">&nbsp;</span></li><li class="L8"><span class="pln">deb http</span><span class="pun">:</span><span class="com">//php53.dotdeb.org stable all</span></li><li class="L9"><span class="pln">&nbsp;</span></li><li class="L0"><span class="pln">deb http</span><span class="pun">:</span><span class="com">//packages.dotdeb.org stable all</span></li><li class="L1"><span class="pln">&nbsp;</span></li><li class="L2"><span class="pln">deb</span><span class="pun">-</span><span class="pln">src http</span><span class="pun">:</span><span class="com">//php53.dotdeb.org stable all</span></li><li class="L3"><span class="pln">&nbsp;</span></li><li class="L4"><span class="pln">deb</span><span class="pun">-</span><span class="pln">src http</span><span class="pun">:</span><span class="com">//packages.dotdeb.org stable all</span></li></ol></pre>
        <p>&nbsp;</p>
        <p>Then run this command:&nbsp;<strong>apt-get update</strong>
        </p>
        <p>&nbsp;</p>
        <p>Did you get a GPG error? Check the key after the&nbsp;NO_PUBKEY and run this command:</p>
        <p><strong>gpg –keyserver keys.gnupg.net –recv-key PASTE_HERE_KEY</strong>
        </p>
        <p><strong>gpg -a –export&nbsp;<strong>PASTE_HERE_KEY&nbsp;</strong>| sudo apt-key add -</strong>
        </p>
        <p><strong><br>
</strong>
        </p>
        <p>If there are two keys you may need to add two. Then run this command again:&nbsp;<strong>apt-get update</strong>&nbsp;(to manually update keys:&nbsp;<strong>apt-key update</strong>)</p>
        <p><strong><strong><br>
</strong></strong>
        </p>
        <p>We need to create a file that will let the system know we want it to upgrade next startup:&nbsp;<strong>touch /etc/udev/kernel-upgrade</strong>
        </p>
        <p>&nbsp;</p>
        <p>Then type&nbsp;<strong>reboot</strong>, and let the system shutdown. Give it a minute, and reconnect via SSH.</p>
        <p>&nbsp;</p>
        <p>Now, run this command:&nbsp;<strong>aptitude full-upgrade</strong>
        </p>
        <p>&nbsp;</p>
        <p>To install Nginx we run this command:&nbsp;<strong>aptitude install nginx</strong>
        </p>
        <p>To setup MySQL we run this command:&nbsp;<strong>aptitude install mysql-server mysql-client</strong>
        </p>
        <p>To install PHP we run this command:&nbsp;<strong>aptitude install&nbsp;php5-fpm&nbsp;php5-cgi php5-dev php5-curl php5-gd php5-idn php-pear php5-imagick php5-imap php5-mcrypt php5-memcache php5-ps php5-pspell php5-recode php5-snmp php5-tidy php5-xmlrpc php5-xsl php5-common php5-mysql</strong>
        </p>
        <p><strong><br>
</strong>
        </p>
        <p>We should enable PHP short tags, so edit&nbsp;<strong>/etc/php5/fpm/php.ini</strong>&nbsp;and change&nbsp;short_open_tag to On.</p>
        <p>&nbsp;</p>
        <p>Now, let’s try restarting Nginx and PHP FPM to test, run these commands:</p>
        <p><strong>/etc/init.d/php5-fpm restart</strong>
        </p>
        <p><strong>/etc/init.d/nginx restart</strong>
        </p>
        <p><strong><br>
</strong>
        </p>
        <p>Did yours throw a warning and 2 errors as well? If so,</p>
        <p>1) Remove the line that starts with # hash from this file:&nbsp;<strong>/etc/php5/fpm/conf.d/ps.ini</strong>
        </p>
        <p>2) Delete the extension mentioned in there error, idn.ini from the conf.d folder:&nbsp;<strong>/etc/php5/conf.d/idn.ini<br>
</strong>
        </p>
        <p>&nbsp;</p>
        <p>Retry restarting the services again.</p>
        <p>&nbsp;</p>
        <p>In order to get a site up and running we need to edit&nbsp;<strong>/etc/nginx/sites-available/default</strong>. When you’ve created your website directory, edit that file.</p>
        <p>&nbsp;</p>
        <p>In that file, duplicate the “server” definition, change the server_name to your host, like this (I’ve included rewrites which should work with some web software):</p>
        <p>&nbsp;</p>
        <pre class="prettyprint linenums"><ol class="linenums"><li class="L0"><span class="pln">server </span><span class="pun">{</span></li><li class="L1"><span class="pln">&nbsp;</span></li><li class="L2"><span class="pln">listen </span><span class="lit">80</span><span class="pun">;</span><span class="pln"> </span><span class="com">## listen for ipv4</span></li><li class="L3"><span class="pln">&nbsp;</span></li><li class="L4"><span class="pln">server_name mysite</span><span class="pun">.</span><span class="pln">com</span><span class="pun">;</span></li><li class="L5"><span class="pln">&nbsp;</span></li><li class="L6"><span class="pln">access_log </span><span class="pun">/</span><span class="kwd">var</span><span class="pun">/</span><span class="pln">log</span><span class="pun">/</span><span class="pln">nginx</span><span class="pun">/</span><span class="pln">localhost</span><span class="pun">.</span><span class="pln">access</span><span class="pun">.</span><span class="pln">log</span><span class="pun">;</span></li><li class="L7"><span class="pln">&nbsp;</span></li><li class="L8"><span class="pln">location </span><span class="pun">/</span><span class="pln"> </span><span class="pun">{</span></li><li class="L9"><span class="pln">&nbsp;</span></li><li class="L0"><span class="pln">root </span><span class="pun">/</span><span class="pln">home</span><span class="pun">/</span><span class="pln">myuser</span><span class="pun">/</span><span class="pln">mysite</span><span class="pun">/</span><span class="pln">www</span><span class="pun">;</span></li><li class="L1"><span class="pln">&nbsp;</span></li><li class="L2"><span class="pln">index index</span><span class="pun">.</span><span class="pln">php</span><span class="pun">;</span><p></p></li><li class="L3"><p><span class="kwd">if</span><span class="pln"> </span><span class="pun">(-</span><span class="pln">e $request_filename</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></p></li><li class="L4"><p></p></li><li class="L5"><p><span class="kwd">break</span><span class="pun">;</span></p></li><li class="L6"><p></p></li><li class="L7"><p><span class="pun">}</span></p></li><li class="L8"><p></p></li><li class="L9"><p><span class="kwd">set</span><span class="pln"> $test_var </span><span class="kwd">true</span><span class="pun">;</span></p></li><li class="L0"><p><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">$request_method </span><span class="pun">=</span><span class="pln"> POST</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="kwd">set</span><span class="pln"> $test_var </span><span class="kwd">false</span><span class="pun">;</span><span class="pln"> </span><span class="pun">}</span></p></li><li class="L1"><p></p></li><li class="L2"><p><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">$http_X_Requested_With </span><span class="pun">!~</span><span class="pln"> </span><span class="typ">XMLHttpRequest</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="kwd">set</span><span class="pln"> $test_var </span><span class="kwd">false</span><span class="pun">;</span><span class="pln"> </span><span class="pun">}</span></p></li><li class="L3"><p><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">$test_var </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></p></li><li class="L4"><p></p></li><li class="L5"><p><span class="pln">rewrite </span><span class="pun">^([^.|]*[^/])</span><span class="pln">$ $1</span><span class="pun">/</span><span class="pln"> permanent</span><span class="pun">;</span></p></li><li class="L6"><p></p></li><li class="L7"><p><span class="pun">}</span></p></li><li class="L8"><p><span class="pln">rewrite </span><span class="pun">^(.*)</span><span class="pln">$ </span><span class="pun">/</span><span class="pln">index</span><span class="pun">.</span><span class="pln">php</span><span class="pun">?</span><span class="pln">q</span><span class="pun">=</span><span class="pln">$1 </span><span class="kwd">last</span><span class="pun">;</span></p></li><li class="L9"><p></p></li><li class="L0"><p><span class="pun">}</span></p></li><li class="L1"><p><span class="pln">location </span><span class="pun">~</span><span class="pln"> \.php$ </span><span class="pun">{</span></p></li><li class="L2"><p></p></li><li class="L3"><p><span class="pln">fastcgi_pass </span><span class="lit">127.0</span><span class="pun">.</span><span class="lit">0.1</span><span class="pun">:</span><span class="lit">9000</span><span class="pun">;</span></p></li><li class="L4"><p></p></li><li class="L5"><p><span class="pln">fastcgi_index index</span><span class="pun">.</span><span class="pln">php</span><span class="pun">;</span></p></li><li class="L6"><p></p></li><li class="L7"><p><span class="pln">fastcgi_param SCRIPT_FILENAME </span><span class="pun">/</span><span class="pln">home</span><span class="pun">/</span><span class="pln">myuser</span><span class="pun">/</span><span class="pln">mysite</span><span class="pun">/</span><span class="pln">www$fastcgi_script_name</span><span class="pun">;</span></p></li><li class="L8"><p></p></li><li class="L9"><p><span class="pln">include fastcgi_params</span><span class="pun">;</span></p></li><li class="L0"><p></p></li><li class="L1"><p><span class="pun">}</span></p></li><li class="L2"><p></p></li><li class="L3"><p><span class="pun">}</span></p></li></ol></pre>
        <p>Now reboot Nginx.</p>
        <p>&nbsp;</p>
        <p><strong>Note:</strong>&nbsp;Nginx configuration files are touchy. Spaces are used as part of the syntax (the one between if and bracket for example). Use&nbsp;<strong>nginx -t</strong>&nbsp;to validate config syntax.
            <br>
            <strong>Note:</strong>&nbsp;A quick way to give full permissions when installing a web application (from within it’s directory):&nbsp;<strong>chmod -R 0777 ./<br>
</strong><strong>Note:</strong>&nbsp;As far as I can tell,&nbsp;minify has trouble converting relative URI’s to absolute URI’s, so you may have to hardcode the absolute path.
            <br>
            <strong>Note:</strong>&nbsp;You will likely want to take security precautions, run PHP under a different username, only give cache folders write permission, etc. That is out of the breadth of this guide; maybe in future posts or comments.</p>
        <p>&nbsp;</p>
        <p>Thanks for reading. Good luck and have fun!</p>
    </div>
</div>
<ul class="pager">
    <li class="previous">
        <a href="/made-with-lemon-aid/" rel="prev" address="true">← Made with Lemon-Aid</a> </li>
    <li class="next">
        <a href="/screen-tearing-in-vindictus/" rel="next" address="true">Tip: Fix Screen Tearing in Vindictus →</a> </li>
</ul>
