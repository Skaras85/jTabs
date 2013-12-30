<h1><a name="simple-and-lightweight-jquery-tabs-plugin-html5-friendly" class="anchor" href="#simple-and-lightweight-jquery-tabs-plugin-html5-friendly"><span class="octicon octicon-link"></span></a>Cool jQuery tabs plugin</h1>

<p>The Demo page: <a href="http://skaras85.webd.pl/jtabs/" target="_blank">http://skaras85.webd.pl/jtabs/</a></p>

<h2>
<a name="cool" class="anchor" href="#cool"><span class="octicon octicon-link"></span></a>Why this plugin is so cool?</h2>

<ul>
    <li>It's lightweight, minified js file is only 1048 b</li>
    <li>It's simple in usage</li>
    <li>It's written in HTML5</li>
    <li>You can nest one tab in another many times. It's like tab Inception, lol</li>
    <li>If you write a #id-of-some-tab on end of URL this tab will show opened</li>
</ul>

<h2>
<a name="instructions" class="anchor" href="#instructions"><span class="octicon octicon-link"></span></a>Instructions:</h2>

<ol>
<li>
<p>First, add the Javascript and CSS files to your project:
<pre>
<code>&lt;script src="http://code.jquery.com/jquery-1.10.1.min.js"&gt;&lt;/script&gt;
&lt;script src="jTabs.jquery.js"&gt;&lt;/script&gt;
&lt;link rel="stylesheet" href="jTabs.jquery.css"&gt;</code>
</pre>
</li>
<li><p>Create HTML code:
<pre>
<code>&lt;section class="tabs"&gt;
    &lt;nav&gt;
        &lt;ul&gt;
            &lt;li&gt;&lt;a href="#first" class="chosenTab"&gt;first&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#second"&gt;second&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/nav&gt;
    &lt;div&gt; 
        &lt;article id="first"&gt;
            Content 1
        &lt;/article&gt;
        &lt;article class="tabHidden" id="second"&gt;
            Content 2
        &lt;/article&gt;
    &lt;/div&gt;
&lt;/section&gt;</code></pre></p></li>
<li><p>Run plugin:
<pre><code>$('.tabs').jTabs();</code></pre></p></li>
<li><p>You can make vertical tabs by adding class .tabsVertical to section element:
<code>&lt;section class="tabs tabsVertical"&gt;</code></p></li>
<li><p>You can nest one jTabs in a content of another:
<pre><code>&lt;section class="tabs"&gt;
    &lt;nav&gt;
        &lt;ul&gt;
            &lt;li&gt;&lt;a href="#first" class="chosenTab"&gt;first&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#second"&gt;second&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/nav&gt;
    &lt;div&gt; 
        &lt;article id="first"&gt;
            Content 1
        &lt;/article&gt;
        &lt;article class="tabHidden" id="second"&gt;
            &lt;section class="tabs tabsVertical"&gt;
                &lt;nav&gt;
                    &lt;ul&gt;
                        &lt;li&gt;&lt;a href="#sub-first" class="chosenTab"&gt;Sub-first&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#sub-second"&gt;sub-second&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href="#sub-third"&gt;sub-third&lt;/a&gt;&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/nav&gt;
                &lt;div&gt; 
                    &lt;article id="sub-first"&gt;
                        Subcontent 1
                    &lt;/article&gt;
                    &lt;article class="tabHidden" id="sub-second"&gt;
                        Subcontent 2
                    &lt;/article&gt;
                    &lt;article class="tabHidden" id="sub-third"&gt;
                        Subcontent 3
                    &lt;/article&gt;
                &lt;/div&gt;
            &lt;/section&gt;
        &lt;/article&gt;
    &lt;/div&gt;
&lt;/section&gt;</code></pre></p></li>
</ol>
