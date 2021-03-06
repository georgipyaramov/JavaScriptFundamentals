




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>TelerikAcademy/JavaScript I/Homework Assignments/7. Using Objects/7. Using Objects/scripts/sprintf-0.7-beta1.js at master · vic-alexiev/TelerikAcademy · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="vic-alexiev/TelerikAcademy" name="twitter:title" /><meta content="TelerikAcademy - Assignments and exams given at Telerik Academy 2012/2013" name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/3578679?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/3578679?s=400" property="og:image" /><meta content="vic-alexiev/TelerikAcademy" property="og:title" /><meta content="https://github.com/vic-alexiev/TelerikAcademy" property="og:url" /><meta content="TelerikAcademy - Assignments and exams given at Telerik Academy 2012/2013" property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="4E5ABAF8:159B:401A379:5377C8EB" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="Sslx0ojCrDdgfu6o48629/CnX3yh7qXcUH/xKxFU/DsUREzTQOZWosaksBKhMuca6mug/pwexqorchi8gI+IaQ==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-e9790f4e8dbda985fa4e949a425cedb800912b29.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-55a7101476b5ad4eff9a878235d7a51b53aedf31.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="ac8e9519da859b1779ccff61641e8be6">

      
  <meta name="description" content="TelerikAcademy - Assignments and exams given at Telerik Academy 2012/2013" />

  <meta content="3578679" name="octolytics-dimension-user_id" /><meta content="vic-alexiev" name="octolytics-dimension-user_login" /><meta content="8196546" name="octolytics-dimension-repository_id" /><meta content="vic-alexiev/TelerikAcademy" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="8196546" name="octolytics-dimension-repository_network_root_id" /><meta content="vic-alexiev/TelerikAcademy" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/vic-alexiev/TelerikAcademy/commits/master.atom" rel="alternate" title="Recent Commits to TelerikAcademy:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fvic-alexiev%2FTelerikAcademy%2Fblob%2Fmaster%2FJavaScript%2520I%2FHomework%2520Assignments%2F7.%2520Using%2520Objects%2F7.%2520Using%2520Objects%2Fscripts%2Fsprintf-0.7-beta1.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="vic-alexiev/TelerikAcademy"
      data-branch="master"
      data-sha="4a44f344dec3da10102ea13523257e6cbc2e0f9f"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="vic-alexiev/TelerikAcademy" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
    <a href="/login?return_to=%2Fvic-alexiev%2FTelerikAcademy"
    class="minibutton with-count star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>Star
  </a>

    <a class="social-count js-social-count" href="/vic-alexiev/TelerikAcademy/stargazers">
      4
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fvic-alexiev%2FTelerikAcademy"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/vic-alexiev/TelerikAcademy/network" class="social-count">
        31
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/vic-alexiev" class="url fn" itemprop="url" rel="author"><span itemprop="title">vic-alexiev</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/vic-alexiev/TelerikAcademy" class="js-current-repository js-repo-home-link">TelerikAcademy</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/vic-alexiev/TelerikAcademy" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /vic-alexiev/TelerikAcademy">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/vic-alexiev/TelerikAcademy/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues /vic-alexiev/TelerikAcademy/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/vic-alexiev/TelerikAcademy/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /vic-alexiev/TelerikAcademy/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/vic-alexiev/TelerikAcademy/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /vic-alexiev/TelerikAcademy/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/vic-alexiev/TelerikAcademy/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /vic-alexiev/TelerikAcademy/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/vic-alexiev/TelerikAcademy/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /vic-alexiev/TelerikAcademy/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/vic-alexiev/TelerikAcademy.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/vic-alexiev/TelerikAcademy.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/vic-alexiev/TelerikAcademy" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/vic-alexiev/TelerikAcademy" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button" title="Save vic-alexiev/TelerikAcademy to your computer and use it in GitHub Desktop." aria-label="Save vic-alexiev/TelerikAcademy to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/vic-alexiev/TelerikAcademy/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download vic-alexiev/TelerikAcademy as a zip file"
                   title="Download vic-alexiev/TelerikAcademy as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/vic-alexiev/TelerikAcademy/blob/d3a284b29dff311f0d9f9fbdaed8ddbea286625b/JavaScript%20I/Homework%20Assignments/7.%20Using%20Objects/7.%20Using%20Objects/scripts/sprintf-0.7-beta1.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:063fee16d928601309fe15baa1635d00 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/vic-alexiev/TelerikAcademy/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/vic-alexiev/TelerikAcademy/blob/master/JavaScript%20I/Homework%20Assignments/7.%20Using%20Objects/7.%20Using%20Objects/scripts/sprintf-0.7-beta1.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/vic-alexiev/TelerikAcademy" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">TelerikAcademy</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/vic-alexiev/TelerikAcademy/tree/master/JavaScript%20I" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">JavaScript I</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/vic-alexiev/TelerikAcademy/tree/master/JavaScript%20I/Homework%20Assignments" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">Homework Assignments</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/vic-alexiev/TelerikAcademy/tree/master/JavaScript%20I/Homework%20Assignments/7.%20Using%20Objects" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">7. Using Objects</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/vic-alexiev/TelerikAcademy/tree/master/JavaScript%20I/Homework%20Assignments/7.%20Using%20Objects/7.%20Using%20Objects" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">7. Using Objects</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/vic-alexiev/TelerikAcademy/tree/master/JavaScript%20I/Homework%20Assignments/7.%20Using%20Objects/7.%20Using%20Objects/scripts" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">scripts</span></a></span><span class="separator"> / </span><strong class="final-path">sprintf-0.7-beta1.js</strong> <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="JavaScript I/Homework Assignments/7. Using Objects/7. Using Objects/scripts/sprintf-0.7-beta1.js" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>
</div>


  <div class="commit file-history-tease">
      <img alt="Victor Alexiev " class="main-avatar js-avatar" data-user="3578679" height="24" src="https://avatars3.githubusercontent.com/u/3578679?s=140" width="24" />
      <span class="author"><a href="/vic-alexiev" rel="author">vic-alexiev</a></span>
      <time datetime="2013-03-24T21:46:23+02:00" is="relative-time" title-format="%Y-%m-%d %H:%M:%S %z" title="2013-03-24 21:46:23 +0200">March 24, 2013</time>
      <div class="commit-title">
          <a href="/vic-alexiev/TelerikAcademy/commit/757d4e4b3f2f6a86a495e6018327d79f534977e6" class="message" data-pjax="true" title="Functions &amp; Using Objects solutions added.">Functions &amp; Using Objects solutions added.</a>
      </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong>  contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Victor Alexiev " class=" js-avatar" data-user="3578679" height="24" src="https://avatars3.githubusercontent.com/u/3578679?s=140" width="24" />
            <a href="/vic-alexiev">vic-alexiev</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>184 lines (164 sloc)</span>
          <span class="meta-divider"></span>
        <span>6.736 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w"
               href="http://windows.github.com" aria-label="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
              <a class="minibutton disabled tooltipped tooltipped-w" href="#"
                 aria-label="You must be signed in to make or propose changes">Edit</a>
          <a href="/vic-alexiev/TelerikAcademy/raw/master/JavaScript%20I/Homework%20Assignments/7.%20Using%20Objects/7.%20Using%20Objects/scripts/sprintf-0.7-beta1.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/vic-alexiev/TelerikAcademy/blame/master/JavaScript%20I/Homework%20Assignments/7.%20Using%20Objects/7.%20Using%20Objects/scripts/sprintf-0.7-beta1.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/vic-alexiev/TelerikAcademy/commits/master/JavaScript%20I/Homework%20Assignments/7.%20Using%20Objects/7.%20Using%20Objects/scripts/sprintf-0.7-beta1.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger disabled empty-icon tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm">sprintf() for JavaScript 0.7-beta1</span></div><div class='line' id='LC3'><span class="cm">http://www.diveintojavascript.com/projects/javascript-sprintf</span></div><div class='line' id='LC4'><br/></div><div class='line' id='LC5'><span class="cm">Copyright (c) Alexandru Marasteanu &lt;alexaholic [at) gmail (dot] com&gt;</span></div><div class='line' id='LC6'><span class="cm">All rights reserved.</span></div><div class='line' id='LC7'><br/></div><div class='line' id='LC8'><span class="cm">Redistribution and use in source and binary forms, with or without</span></div><div class='line' id='LC9'><span class="cm">modification, are permitted provided that the following conditions are met:</span></div><div class='line' id='LC10'><span class="cm">    * Redistributions of source code must retain the above copyright</span></div><div class='line' id='LC11'><span class="cm">      notice, this list of conditions and the following disclaimer.</span></div><div class='line' id='LC12'><span class="cm">    * Redistributions in binary form must reproduce the above copyright</span></div><div class='line' id='LC13'><span class="cm">      notice, this list of conditions and the following disclaimer in the</span></div><div class='line' id='LC14'><span class="cm">      documentation and/or other materials provided with the distribution.</span></div><div class='line' id='LC15'><span class="cm">    * Neither the name of sprintf() for JavaScript nor the</span></div><div class='line' id='LC16'><span class="cm">      names of its contributors may be used to endorse or promote products</span></div><div class='line' id='LC17'><span class="cm">      derived from this software without specific prior written permission.</span></div><div class='line' id='LC18'><br/></div><div class='line' id='LC19'><span class="cm">THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS &quot;AS IS&quot; AND</span></div><div class='line' id='LC20'><span class="cm">ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED</span></div><div class='line' id='LC21'><span class="cm">WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE</span></div><div class='line' id='LC22'><span class="cm">DISCLAIMED. IN NO EVENT SHALL Alexandru Marasteanu BE LIABLE FOR ANY</span></div><div class='line' id='LC23'><span class="cm">DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES</span></div><div class='line' id='LC24'><span class="cm">(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;</span></div><div class='line' id='LC25'><span class="cm">LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND</span></div><div class='line' id='LC26'><span class="cm">ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT</span></div><div class='line' id='LC27'><span class="cm">(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS</span></div><div class='line' id='LC28'><span class="cm">SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</span></div><div class='line' id='LC29'><br/></div><div class='line' id='LC30'><br/></div><div class='line' id='LC31'><span class="cm">Changelog:</span></div><div class='line' id='LC32'><span class="cm">2010.09.06 - 0.7-beta1</span></div><div class='line' id='LC33'><span class="cm">  - features: vsprintf, support for named placeholders</span></div><div class='line' id='LC34'><span class="cm">  - enhancements: format cache, reduced global namespace pollution</span></div><div class='line' id='LC35'><br/></div><div class='line' id='LC36'><span class="cm">2010.05.22 - 0.6:</span></div><div class='line' id='LC37'><span class="cm"> - reverted to 0.4 and fixed the bug regarding the sign of the number 0</span></div><div class='line' id='LC38'><span class="cm"> Note:</span></div><div class='line' id='LC39'><span class="cm"> Thanks to Raphael Pigulla &lt;raph (at] n3rd [dot) org&gt; (http://www.n3rd.org/)</span></div><div class='line' id='LC40'><span class="cm"> who warned me about a bug in 0.5, I discovered that the last update was</span></div><div class='line' id='LC41'><span class="cm"> a regress. I appologize for that.</span></div><div class='line' id='LC42'><br/></div><div class='line' id='LC43'><span class="cm">2010.05.09 - 0.5:</span></div><div class='line' id='LC44'><span class="cm"> - bug fix: 0 is now preceeded with a + sign</span></div><div class='line' id='LC45'><span class="cm"> - bug fix: the sign was not at the right position on padded results (Kamal Abdali)</span></div><div class='line' id='LC46'><span class="cm"> - switched from GPL to BSD license</span></div><div class='line' id='LC47'><br/></div><div class='line' id='LC48'><span class="cm">2007.10.21 - 0.4:</span></div><div class='line' id='LC49'><span class="cm"> - unit test and patch (David Baird)</span></div><div class='line' id='LC50'><br/></div><div class='line' id='LC51'><span class="cm">2007.09.17 - 0.3:</span></div><div class='line' id='LC52'><span class="cm"> - bug fix: no longer throws exception on empty paramenters (Hans Pufal)</span></div><div class='line' id='LC53'><br/></div><div class='line' id='LC54'><span class="cm">2007.09.11 - 0.2:</span></div><div class='line' id='LC55'><span class="cm"> - feature: added argument swapping</span></div><div class='line' id='LC56'><br/></div><div class='line' id='LC57'><span class="cm">2007.04.03 - 0.1:</span></div><div class='line' id='LC58'><span class="cm"> - initial release</span></div><div class='line' id='LC59'><span class="cm">**/</span></div><div class='line' id='LC60'><br/></div><div class='line' id='LC61'><span class="kd">var</span> <span class="nx">sprintf</span> <span class="o">=</span> <span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC62'>	<span class="kd">function</span> <span class="nx">get_type</span><span class="p">(</span><span class="nx">variable</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC63'>		<span class="k">return</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">variable</span><span class="p">).</span><span class="nx">slice</span><span class="p">(</span><span class="mi">8</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">).</span><span class="nx">toLowerCase</span><span class="p">();</span></div><div class='line' id='LC64'>	<span class="p">}</span></div><div class='line' id='LC65'>	<span class="kd">function</span> <span class="nx">str_repeat</span><span class="p">(</span><span class="nx">input</span><span class="p">,</span> <span class="nx">multiplier</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC66'>		<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">output</span> <span class="o">=</span> <span class="p">[];</span> <span class="nx">multiplier</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">output</span><span class="p">[</span><span class="o">--</span><span class="nx">multiplier</span><span class="p">]</span> <span class="o">=</span> <span class="nx">input</span><span class="p">)</span> <span class="p">{</span><span class="cm">/* do nothing */</span><span class="p">}</span></div><div class='line' id='LC67'>		<span class="k">return</span> <span class="nx">output</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC68'>	<span class="p">}</span></div><div class='line' id='LC69'><br/></div><div class='line' id='LC70'>	<span class="kd">var</span> <span class="nx">str_format</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC71'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">str_format</span><span class="p">.</span><span class="nx">cache</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">arguments</span><span class="p">[</span><span class="mi">0</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC72'>			<span class="nx">str_format</span><span class="p">.</span><span class="nx">cache</span><span class="p">[</span><span class="nx">arguments</span><span class="p">[</span><span class="mi">0</span><span class="p">]]</span> <span class="o">=</span> <span class="nx">str_format</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">arguments</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span></div><div class='line' id='LC73'>		<span class="p">}</span></div><div class='line' id='LC74'>		<span class="k">return</span> <span class="nx">str_format</span><span class="p">.</span><span class="nx">format</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="nx">str_format</span><span class="p">.</span><span class="nx">cache</span><span class="p">[</span><span class="nx">arguments</span><span class="p">[</span><span class="mi">0</span><span class="p">]],</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC75'>	<span class="p">};</span></div><div class='line' id='LC76'><br/></div><div class='line' id='LC77'>	<span class="nx">str_format</span><span class="p">.</span><span class="nx">format</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">parse_tree</span><span class="p">,</span> <span class="nx">argv</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC78'>		<span class="kd">var</span> <span class="nx">cursor</span> <span class="o">=</span> <span class="mi">1</span><span class="p">,</span> <span class="nx">tree_length</span> <span class="o">=</span> <span class="nx">parse_tree</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span> <span class="nx">node_type</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">,</span> <span class="nx">arg</span><span class="p">,</span> <span class="nx">output</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">k</span><span class="p">,</span> <span class="nx">match</span><span class="p">,</span> <span class="nx">pad</span><span class="p">,</span> <span class="nx">pad_character</span><span class="p">,</span> <span class="nx">pad_length</span><span class="p">;</span></div><div class='line' id='LC79'>		<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">tree_length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC80'>			<span class="nx">node_type</span> <span class="o">=</span> <span class="nx">get_type</span><span class="p">(</span><span class="nx">parse_tree</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></div><div class='line' id='LC81'>			<span class="k">if</span> <span class="p">(</span><span class="nx">node_type</span> <span class="o">===</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC82'>				<span class="nx">output</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">parse_tree</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></div><div class='line' id='LC83'>			<span class="p">}</span></div><div class='line' id='LC84'>			<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">node_type</span> <span class="o">===</span> <span class="s1">&#39;array&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC85'>				<span class="nx">match</span> <span class="o">=</span> <span class="nx">parse_tree</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span> <span class="c1">// convenience purposes only</span></div><div class='line' id='LC86'>				<span class="k">if</span> <span class="p">(</span><span class="nx">match</span><span class="p">[</span><span class="mi">2</span><span class="p">])</span> <span class="p">{</span> <span class="c1">// keyword argument</span></div><div class='line' id='LC87'>					<span class="nx">arg</span> <span class="o">=</span> <span class="nx">argv</span><span class="p">[</span><span class="nx">cursor</span><span class="p">];</span></div><div class='line' id='LC88'>					<span class="k">for</span> <span class="p">(</span><span class="nx">k</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">k</span> <span class="o">&lt;</span> <span class="nx">match</span><span class="p">[</span><span class="mi">2</span><span class="p">].</span><span class="nx">length</span><span class="p">;</span> <span class="nx">k</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC89'>						<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">arg</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">match</span><span class="p">[</span><span class="mi">2</span><span class="p">][</span><span class="nx">k</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC90'>							<span class="k">throw</span><span class="p">(</span><span class="nx">sprintf</span><span class="p">(</span><span class="s1">&#39;[sprintf] property &quot;%s&quot; does not exist&#39;</span><span class="p">,</span> <span class="nx">match</span><span class="p">[</span><span class="mi">2</span><span class="p">][</span><span class="nx">k</span><span class="p">]));</span></div><div class='line' id='LC91'>						<span class="p">}</span></div><div class='line' id='LC92'>						<span class="nx">arg</span> <span class="o">=</span> <span class="nx">arg</span><span class="p">[</span><span class="nx">match</span><span class="p">[</span><span class="mi">2</span><span class="p">][</span><span class="nx">k</span><span class="p">]];</span></div><div class='line' id='LC93'>					<span class="p">}</span></div><div class='line' id='LC94'>				<span class="p">}</span></div><div class='line' id='LC95'>				<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">match</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span> <span class="p">{</span> <span class="c1">// positional argument (explicit)</span></div><div class='line' id='LC96'>					<span class="nx">arg</span> <span class="o">=</span> <span class="nx">argv</span><span class="p">[</span><span class="nx">match</span><span class="p">[</span><span class="mi">1</span><span class="p">]];</span></div><div class='line' id='LC97'>				<span class="p">}</span></div><div class='line' id='LC98'>				<span class="k">else</span> <span class="p">{</span> <span class="c1">// positional argument (implicit)</span></div><div class='line' id='LC99'>					<span class="nx">arg</span> <span class="o">=</span> <span class="nx">argv</span><span class="p">[</span><span class="nx">cursor</span><span class="o">++</span><span class="p">];</span></div><div class='line' id='LC100'>				<span class="p">}</span></div><div class='line' id='LC101'><br/></div><div class='line' id='LC102'>				<span class="k">if</span> <span class="p">(</span><span class="sr">/[^s]/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">match</span><span class="p">[</span><span class="mi">8</span><span class="p">])</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">get_type</span><span class="p">(</span><span class="nx">arg</span><span class="p">)</span> <span class="o">!=</span> <span class="s1">&#39;number&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC103'>					<span class="k">throw</span><span class="p">(</span><span class="nx">sprintf</span><span class="p">(</span><span class="s1">&#39;[sprintf] expecting number but found %s&#39;</span><span class="p">,</span> <span class="nx">get_type</span><span class="p">(</span><span class="nx">arg</span><span class="p">)));</span></div><div class='line' id='LC104'>				<span class="p">}</span></div><div class='line' id='LC105'>				<span class="k">switch</span> <span class="p">(</span><span class="nx">match</span><span class="p">[</span><span class="mi">8</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC106'>					<span class="k">case</span> <span class="s1">&#39;b&#39;</span><span class="o">:</span> <span class="nx">arg</span> <span class="o">=</span> <span class="nx">arg</span><span class="p">.</span><span class="nx">toString</span><span class="p">(</span><span class="mi">2</span><span class="p">);</span> <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC107'>					<span class="k">case</span> <span class="s1">&#39;c&#39;</span><span class="o">:</span> <span class="nx">arg</span> <span class="o">=</span> <span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="nx">arg</span><span class="p">);</span> <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC108'>					<span class="k">case</span> <span class="s1">&#39;d&#39;</span><span class="o">:</span> <span class="nx">arg</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">arg</span><span class="p">,</span> <span class="mi">10</span><span class="p">);</span> <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC109'>					<span class="k">case</span> <span class="s1">&#39;e&#39;</span><span class="o">:</span> <span class="nx">arg</span> <span class="o">=</span> <span class="nx">match</span><span class="p">[</span><span class="mi">7</span><span class="p">]</span> <span class="o">?</span> <span class="nx">arg</span><span class="p">.</span><span class="nx">toExponential</span><span class="p">(</span><span class="nx">match</span><span class="p">[</span><span class="mi">7</span><span class="p">])</span> <span class="o">:</span> <span class="nx">arg</span><span class="p">.</span><span class="nx">toExponential</span><span class="p">();</span> <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC110'>					<span class="k">case</span> <span class="s1">&#39;f&#39;</span><span class="o">:</span> <span class="nx">arg</span> <span class="o">=</span> <span class="nx">match</span><span class="p">[</span><span class="mi">7</span><span class="p">]</span> <span class="o">?</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">arg</span><span class="p">).</span><span class="nx">toFixed</span><span class="p">(</span><span class="nx">match</span><span class="p">[</span><span class="mi">7</span><span class="p">])</span> <span class="o">:</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">arg</span><span class="p">);</span> <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC111'>					<span class="k">case</span> <span class="s1">&#39;o&#39;</span><span class="o">:</span> <span class="nx">arg</span> <span class="o">=</span> <span class="nx">arg</span><span class="p">.</span><span class="nx">toString</span><span class="p">(</span><span class="mi">8</span><span class="p">);</span> <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC112'>					<span class="k">case</span> <span class="s1">&#39;s&#39;</span><span class="o">:</span> <span class="nx">arg</span> <span class="o">=</span> <span class="p">((</span><span class="nx">arg</span> <span class="o">=</span> <span class="nb">String</span><span class="p">(</span><span class="nx">arg</span><span class="p">))</span> <span class="o">&amp;&amp;</span> <span class="nx">match</span><span class="p">[</span><span class="mi">7</span><span class="p">]</span> <span class="o">?</span> <span class="nx">arg</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">match</span><span class="p">[</span><span class="mi">7</span><span class="p">])</span> <span class="o">:</span> <span class="nx">arg</span><span class="p">);</span> <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC113'>					<span class="k">case</span> <span class="s1">&#39;u&#39;</span><span class="o">:</span> <span class="nx">arg</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">arg</span><span class="p">);</span> <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC114'>					<span class="k">case</span> <span class="s1">&#39;x&#39;</span><span class="o">:</span> <span class="nx">arg</span> <span class="o">=</span> <span class="nx">arg</span><span class="p">.</span><span class="nx">toString</span><span class="p">(</span><span class="mi">16</span><span class="p">);</span> <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC115'>					<span class="k">case</span> <span class="s1">&#39;X&#39;</span><span class="o">:</span> <span class="nx">arg</span> <span class="o">=</span> <span class="nx">arg</span><span class="p">.</span><span class="nx">toString</span><span class="p">(</span><span class="mi">16</span><span class="p">).</span><span class="nx">toUpperCase</span><span class="p">();</span> <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC116'>				<span class="p">}</span></div><div class='line' id='LC117'>				<span class="nx">arg</span> <span class="o">=</span> <span class="p">(</span><span class="sr">/[def]/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">match</span><span class="p">[</span><span class="mi">8</span><span class="p">])</span> <span class="o">&amp;&amp;</span> <span class="nx">match</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">arg</span> <span class="o">&gt;=</span> <span class="mi">0</span> <span class="o">?</span> <span class="s1">&#39;+&#39;</span><span class="o">+</span> <span class="nx">arg</span> <span class="o">:</span> <span class="nx">arg</span><span class="p">);</span></div><div class='line' id='LC118'>				<span class="nx">pad_character</span> <span class="o">=</span> <span class="nx">match</span><span class="p">[</span><span class="mi">4</span><span class="p">]</span> <span class="o">?</span> <span class="nx">match</span><span class="p">[</span><span class="mi">4</span><span class="p">]</span> <span class="o">==</span> <span class="s1">&#39;0&#39;</span> <span class="o">?</span> <span class="s1">&#39;0&#39;</span> <span class="o">:</span> <span class="nx">match</span><span class="p">[</span><span class="mi">4</span><span class="p">].</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span> <span class="o">:</span> <span class="s1">&#39; &#39;</span><span class="p">;</span></div><div class='line' id='LC119'>				<span class="nx">pad_length</span> <span class="o">=</span> <span class="nx">match</span><span class="p">[</span><span class="mi">6</span><span class="p">]</span> <span class="o">-</span> <span class="nb">String</span><span class="p">(</span><span class="nx">arg</span><span class="p">).</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC120'>				<span class="nx">pad</span> <span class="o">=</span> <span class="nx">match</span><span class="p">[</span><span class="mi">6</span><span class="p">]</span> <span class="o">?</span> <span class="nx">str_repeat</span><span class="p">(</span><span class="nx">pad_character</span><span class="p">,</span> <span class="nx">pad_length</span><span class="p">)</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC121'>				<span class="nx">output</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">match</span><span class="p">[</span><span class="mi">5</span><span class="p">]</span> <span class="o">?</span> <span class="nx">arg</span> <span class="o">+</span> <span class="nx">pad</span> <span class="o">:</span> <span class="nx">pad</span> <span class="o">+</span> <span class="nx">arg</span><span class="p">);</span></div><div class='line' id='LC122'>			<span class="p">}</span></div><div class='line' id='LC123'>		<span class="p">}</span></div><div class='line' id='LC124'>		<span class="k">return</span> <span class="nx">output</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC125'>	<span class="p">};</span></div><div class='line' id='LC126'><br/></div><div class='line' id='LC127'>	<span class="nx">str_format</span><span class="p">.</span><span class="nx">cache</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC128'><br/></div><div class='line' id='LC129'>	<span class="nx">str_format</span><span class="p">.</span><span class="nx">parse</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fmt</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC130'>		<span class="kd">var</span> <span class="nx">_fmt</span> <span class="o">=</span> <span class="nx">fmt</span><span class="p">,</span> <span class="nx">match</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">parse_tree</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">arg_names</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC131'>		<span class="k">while</span> <span class="p">(</span><span class="nx">_fmt</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC132'>			<span class="k">if</span> <span class="p">((</span><span class="nx">match</span> <span class="o">=</span> <span class="sr">/^[^\x25]+/</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">_fmt</span><span class="p">))</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC133'>				<span class="nx">parse_tree</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">match</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span></div><div class='line' id='LC134'>			<span class="p">}</span></div><div class='line' id='LC135'>			<span class="k">else</span> <span class="k">if</span> <span class="p">((</span><span class="nx">match</span> <span class="o">=</span> <span class="sr">/^\x25{2}/</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">_fmt</span><span class="p">))</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC136'>				<span class="nx">parse_tree</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="s1">&#39;%&#39;</span><span class="p">);</span></div><div class='line' id='LC137'>			<span class="p">}</span></div><div class='line' id='LC138'>			<span class="k">else</span> <span class="k">if</span> <span class="p">((</span><span class="nx">match</span> <span class="o">=</span> <span class="sr">/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|&#39;[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">_fmt</span><span class="p">))</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC139'>				<span class="k">if</span> <span class="p">(</span><span class="nx">match</span><span class="p">[</span><span class="mi">2</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC140'>					<span class="nx">arg_names</span> <span class="o">|=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC141'>					<span class="kd">var</span> <span class="nx">field_list</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">replacement_field</span> <span class="o">=</span> <span class="nx">match</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span> <span class="nx">field_match</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC142'>					<span class="k">if</span> <span class="p">((</span><span class="nx">field_match</span> <span class="o">=</span> <span class="sr">/^([a-z_][a-z_\d]*)/i</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">replacement_field</span><span class="p">))</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC143'>						<span class="nx">field_list</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">field_match</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC144'>						<span class="k">while</span> <span class="p">((</span><span class="nx">replacement_field</span> <span class="o">=</span> <span class="nx">replacement_field</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">field_match</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">))</span> <span class="o">!==</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC145'>							<span class="k">if</span> <span class="p">((</span><span class="nx">field_match</span> <span class="o">=</span> <span class="sr">/^\.([a-z_][a-z_\d]*)/i</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">replacement_field</span><span class="p">))</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC146'>								<span class="nx">field_list</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">field_match</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC147'>							<span class="p">}</span></div><div class='line' id='LC148'>							<span class="k">else</span> <span class="k">if</span> <span class="p">((</span><span class="nx">field_match</span> <span class="o">=</span> <span class="sr">/^\[(\d+)\]/</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">replacement_field</span><span class="p">))</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC149'>								<span class="nx">field_list</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">field_match</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC150'>							<span class="p">}</span></div><div class='line' id='LC151'>							<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC152'>								<span class="k">throw</span><span class="p">(</span><span class="s1">&#39;[sprintf] huh?&#39;</span><span class="p">);</span></div><div class='line' id='LC153'>							<span class="p">}</span></div><div class='line' id='LC154'>						<span class="p">}</span></div><div class='line' id='LC155'>					<span class="p">}</span></div><div class='line' id='LC156'>					<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC157'>						<span class="k">throw</span><span class="p">(</span><span class="s1">&#39;[sprintf] huh?&#39;</span><span class="p">);</span></div><div class='line' id='LC158'>					<span class="p">}</span></div><div class='line' id='LC159'>					<span class="nx">match</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">=</span> <span class="nx">field_list</span><span class="p">;</span></div><div class='line' id='LC160'>				<span class="p">}</span></div><div class='line' id='LC161'>				<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC162'>					<span class="nx">arg_names</span> <span class="o">|=</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC163'>				<span class="p">}</span></div><div class='line' id='LC164'>				<span class="k">if</span> <span class="p">(</span><span class="nx">arg_names</span> <span class="o">===</span> <span class="mi">3</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC165'>					<span class="k">throw</span><span class="p">(</span><span class="s1">&#39;[sprintf] mixing positional and named placeholders is not (yet) supported&#39;</span><span class="p">);</span></div><div class='line' id='LC166'>				<span class="p">}</span></div><div class='line' id='LC167'>				<span class="nx">parse_tree</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">match</span><span class="p">);</span></div><div class='line' id='LC168'>			<span class="p">}</span></div><div class='line' id='LC169'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC170'>				<span class="k">throw</span><span class="p">(</span><span class="s1">&#39;[sprintf] huh?&#39;</span><span class="p">);</span></div><div class='line' id='LC171'>			<span class="p">}</span></div><div class='line' id='LC172'>			<span class="nx">_fmt</span> <span class="o">=</span> <span class="nx">_fmt</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">match</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC173'>		<span class="p">}</span></div><div class='line' id='LC174'>		<span class="k">return</span> <span class="nx">parse_tree</span><span class="p">;</span></div><div class='line' id='LC175'>	<span class="p">};</span></div><div class='line' id='LC176'><br/></div><div class='line' id='LC177'>	<span class="k">return</span> <span class="nx">str_format</span><span class="p">;</span></div><div class='line' id='LC178'><span class="p">})();</span></div><div class='line' id='LC179'><br/></div><div class='line' id='LC180'><span class="kd">var</span> <span class="nx">vsprintf</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fmt</span><span class="p">,</span> <span class="nx">argv</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC181'>	<span class="nx">argv</span><span class="p">.</span><span class="nx">unshift</span><span class="p">(</span><span class="nx">fmt</span><span class="p">);</span></div><div class='line' id='LC182'>	<span class="k">return</span> <span class="nx">sprintf</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="nx">argv</span><span class="p">);</span></div><div class='line' id='LC183'><span class="p">};</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.03369s from github-fe127-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-d556644b4638d7d08025b994fbb1b963da97b334.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-f8fc00b8934006933bc2391fd76f435ac85a7016.js" type="text/javascript"></script>
      
      
  </body>
</html>

