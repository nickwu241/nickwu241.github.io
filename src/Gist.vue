<template>
  <div id="gist85232786" class="gist">
    <div class="gist-file">
      <div class="gist-data">
        <div class="js-gist-file-update-container js-task-list-container file-box">
          <div id="file-development-tips-and-tricks-md" class="file">
            <div id="readme" class="readme blob instapaper_body">
              <article class="markdown-body entry-content" itemprop="text">
                <h2>
                  <a id="user-content-setting-up-a-new-development-machine" class="anchor" aria-hidden="true" href="#setting-up-a-new-development-machine">
                    <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                      <path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
                    </svg>
                  </a>Setting up a new development machine</h2>
                <p>See my setup and dotfiles at
                  <a href="https://github.com/nickwu241/devkit">nickwu241/devkit</a>.</p>
                <h2>
                  <a id="user-content-workflow" class="anchor" aria-hidden="true" href="#workflow">
                    <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                      <path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
                    </svg>
                  </a>Workflow</h2>
                <h3>
                  <a id="user-content-shortcuts" class="anchor" aria-hidden="true" href="#shortcuts">
                    <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                      <path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
                    </svg>
                  </a>Shortcuts</h3>
                <p>General:</p>
                <ul>
                  <li>
                    <code>shift+cmd + g</code>: on file select to navigate</li>
                  <li>
                    <code>shift+cmd + 3/4</code>: screenshot whole screen / selected area</li>
                  <li>
                    <code>shift+ctrl+cmd + 3/4</code>: screenshot whole screen / selected area to clipboard</li>
                </ul>
                <p>Chrome:</p>
                <ul>
                  <li>
                    <code>cmd + number</code>: change tabs</li>
                  <li>
                    <code>opt+cmd + arrow</code>: change tabs</li>
                  <li>
                    <code>opt+cmd + j</code>: open console</li>
                </ul>
                <p>Terminal:</p>
                <ul>
                  <li>
                    <code>ctrl + a/e</code>: start/end of line</li>
                  <li>
                    <code>ctrl + u/k</code>: delete all before/after cursor</li>
                  <li>
                    <code>ctrl + w</code>: delete word before cursor</li>
                  <li>
                    <code>opt+click</code>: move cursor to clicked</li>
                  <li>
                    <a href="https://www.skorks.com/2009/09/bash-shortcuts-for-maximum-productivity/" rel="nofollow">https://www.skorks.com/2009/09/bash-shortcuts-for-maximum-productivity/</a>
                  </li>
                </ul>
                <p>Vim:</p>
                <ul>
                  <li>
                    <code>d/&lt;search_string&gt;</code>: delete up to the &lt;search_string&gt; exclusive</li>
                </ul>
                <p>VSCode:</p>
                <ul>
                  <li>
                    <code>cmd + p</code>: file select</li>
                  <li>
                    <code>shift+cmd + p</code>: command palette</li>
                  <li>
                    <code>shift+cmd + b</code>: toggle explorer</li>
                  <li>
                    <a href="https://github.com/Microsoft/vscode-tips-and-tricks">https://github.com/Microsoft/vscode-tips-and-tricks</a>
                  </li>
                </ul>
                <h3>
                  <a id="user-content-cli-essentials" class="anchor" aria-hidden="true" href="#cli-essentials">
                    <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                      <path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
                    </svg>
                  </a>CLI Essentials</h3>
                <ul>
                  <li>Basic Navigation:
                    <code>pwd</code>,
                    <code>cd</code>,
                    <code>ls</code>
                  </li>
                  <li>Basic File:
                    <code>mv</code>,
                    <code>cp</code>,
                    <code>rm</code>,
                    <code>mkdir</code>
                  </li>
                  <li>
                    <code>grep</code>,
                    <code>find</code>,
                    <code>history</code>,
                    <code>which</code>
                  </li>
                  <li>
                    <code>|</code> (pipes)</li>
                  <li>
                    <code>&gt;</code> (redirects)</li>
                  <li>
                    <code>&lt;</code> (process substituion)</li>
                  <li>
                    <code>$(&lt;SHELL_CMD&gt;)</code> (command substituion)</li>
                  <li>
                    <code>curl</code>
                  </li>
                  <li>macOS:
                    <code>pbcopy</code>,
                    <code>pbpaste</code>
                  </li>
                </ul>
                <h3>
                  <a id="user-content-git" class="anchor" aria-hidden="true" href="#git">
                    <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                      <path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
                    </svg>
                  </a>Git</h3>
                <p>Know these commands:</p>
                <ul>
                  <li>add, commit, push</li>
                  <li>branch, checkout, fetch/pull</li>
                  <li>reset, rebase</li>
                </ul>
                <p>Git Issue Comments (including Pull Requsts) can be styled by using markdown, so make use of</p>
                <ul>
                  <li>
                    <p>#: for headings (1-6)</p>
                  </li>
                  <li>
                    <p>`&lt;code&gt;`: wrap code / short commands, e.g.
                      <code>echo 'nick is so cool &lt;3'</code>
                    </p>
                  </li>
                  <li>
                    <p>```&lt;language&gt;</p>
                    <p>&lt;code&gt;</p>
                    <p>```: wrap logs or codeblocks with a specified language, e.g.</p>
                    <div class="highlight highlight-source-python">
                      <pre><span class="pl-k">def</span> <span class="pl-en">hello</span>():    <span class="pl-c1">print</span>(<span class="pl-s"><span class="pl-pds">'</span>Hello Nick<span class="pl-pds">'</span></span>)</pre>
                    </div>
                  </li>
                  <li>
                    <p>
                      <code>&lt;details&gt;</code> +
                      <code>&lt;summary&gt;</code> HTML tag, e.g.</p>
                    <details>
                      <summary>A collapsed section</summary>Hello, this is the expanded part</details>
                  </li>
                  <li>
                    <p>
                      <a href="https://guides.github.com/features/mastering-markdown/">https://guides.github.com/features/mastering-markdown/</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="https://help.github.com/articles/closing-issues-using-keywords/">https://help.github.com/articles/closing-issues-using-keywords/</a>
                    </p>
                  </li>
                </ul>
                <h3>
                  <a id="user-content-other" class="anchor" aria-hidden="true" href="#other">
                    <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                      <path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
                    </svg>
                  </a>Other</h3>
                <ul>
                  <li>
                    <code>About this Mac</code> and manage storage or
                    <code>du -sh *</code> at places such as
                    <code>~/</code>
                  </li>
                  <li>Filter emails in gmail</li>
                </ul>
                <h2>
                  <a id="user-content-bookmarks" class="anchor" aria-hidden="true" href="#bookmarks">
                    <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                      <path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
                    </svg>
                  </a>Bookmarks</h2>
                <h3>
                  <a id="user-content-machine-setup" class="anchor" aria-hidden="true" href="#machine-setup">
                    <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                      <path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
                    </svg>
                  </a>Machine Setup</h3>
                <ul>
                  <li>
                    <a href="https://github.com/nicolashery/mac-dev-setup">https://github.com/nicolashery/mac-dev-setup</a>
                  </li>
                  <li>
                    <a href="https://github.com/mathiasbynens/dotfiles">https://github.com/mathiasbynens/dotfiles</a>
                  </li>
                </ul>
                <h3>
                  <a id="user-content-development" class="anchor" aria-hidden="true" href="#development">
                    <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                      <path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
                    </svg>
                  </a>Development</h3>
                <ul>
                  <li>
                    <a href="https://opensource.com/article/17/5/30-best-practices-software-development-and-testing" rel="nofollow">https://opensource.com/article/17/5/30-best-practices-software-development-and-testing</a>
                  </li>
                  <li>
                    <a href="https://hackernoon.com/configuration-management-is-an-antipattern-e677e34be64c" rel="nofollow">https://hackernoon.com/configuration-management-is-an-antipattern-e677e34be64c</a>
                  </li>
                  <li>
                    <a href="http://redsymbol.net/articles/unofficial-bash-strict-mode" rel="nofollow">http://redsymbol.net/articles/unofficial-bash-strict-mode</a>
                  </li>
                  <li>
                    <a href="https://regex101.com" rel="nofollow">https://regex101.com</a>
                  </li>
                  <li>
                    <a href="http://json-schema.org/" rel="nofollow">http://json-schema.org/</a>
                  </li>
                  <li>
                    <a href="https://semver.org/" rel="nofollow">https://semver.org/</a>
                  </li>
                  <li>
                    <a href="https://jsonplaceholder.typicode.com/" rel="nofollow">https://jsonplaceholder.typicode.com/</a>
                  </li>
                </ul>
                <h4>
                  <a id="user-content-docker" class="anchor" aria-hidden="true" href="#docker">
                    <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                      <path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
                    </svg>
                  </a>Docker</h4>
                <ul>
                  <li>
                    <a href="https://stackoverflow.com/questions/21553353/what-is-the-difference-between-cmd-and-entrypoint-in-a-dockerfile" rel="nofollow">https://stackoverflow.com/questions/21553353/what-is-the-difference-between-cmd-and-entrypoint-in-a-dockerfile</a>
                  </li>
                  <li>
                    <a href="https://medium.com/travis-on-docker/how-to-run-dockerized-apps-on-heroku-and-its-pretty-great-76e07e610e22" rel="nofollow">https://medium.com/travis-on-docker/how-to-run-dockerized-apps-on-heroku-and-its-pretty-great-76e07e610e22</a>
                  </li>
                  <li>
                    <a href="https://medium.com/@kelseyhightower/optimizing-docker-images-for-static-binaries-b5696e26eb07" rel="nofollow">https://medium.com/@kelseyhightower/optimizing-docker-images-for-static-binaries-b5696e26eb07</a>
                  </li>
                  <li>
                    <a href="https://dantehranian.wordpress.com/2015/03/25/how-should-i-get-application-configuration-into-my-docker-containers" rel="nofollow">https://dantehranian.wordpress.com/2015/03/25/how-should-i-get-application-configuration-into-my-docker-containers</a>
                  </li>
                  <li>
                    <a href="https://runnable.com/blog/9-common-dockerfile-mistakes" rel="nofollow">https://runnable.com/blog/9-common-dockerfile-mistakes</a>
                  </li>
                </ul>
                <h4>
                  <a id="user-content-git-1" class="anchor" aria-hidden="true" href="#git-1">
                    <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                      <path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
                    </svg>
                  </a>Git</h4>
                <ul>
                  <li>
                    <a href="https://chris.beams.io/posts/git-commit" rel="nofollow">https://chris.beams.io/posts/git-commit</a>
                  </li>
                  <li>
                    <a href="https://git-scm.com/book/en/v1/Git-Basics-Tips-and-Tricks" rel="nofollow">https://git-scm.com/book/en/v1/Git-Basics-Tips-and-Tricks</a>
                  </li>
                  <li>
                    <a href="https://medium.com/@mwolfhoffman/deploying-to-github-pages-with-vue-webpack-cli-5b2ba17f14a0" rel="nofollow">https://medium.com/@mwolfhoffman/deploying-to-github-pages-with-vue-webpack-cli-5b2ba17f14a0</a>
                  </li>
                  <li>
                    <a href="https://github.com/DevProgress/onboarding/wiki/Using-Circle-CI-with-Github-Pages-for-Continuous-Delivery">https://github.com/DevProgress/onboarding/wiki/Using-Circle-CI-with-Github-Pages-for-Continuous-Delivery</a>
                  </li>
                  <li>
                    <a href="https://gist.github.com/ericclemmons/b146fe5da72ca1f706b2ef72a20ac39d">https://gist.github.com/ericclemmons/b146fe5da72ca1f706b2ef72a20ac39d</a>
                  </li>
                </ul>
                <h4>
                  <a id="user-content-styling-websites" class="anchor" aria-hidden="true" href="#styling-websites">
                    <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                      <path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
                    </svg>
                  </a>Styling Websites</h4>
                <ul>
                  <li>
                    <a href="https://www.creative-tim.com" rel="nofollow">https://www.creative-tim.com</a>
                  </li>
                  <li>
                    <a href="https://www.creative-tim.com/product/paper-kit-2" rel="nofollow">https://www.creative-tim.com/product/paper-kit-2</a>
                  </li>
                  <li>
                    <a href="https://www.creative-tim.com/product/now-ui-kit" rel="nofollow">https://www.creative-tim.com/product/now-ui-kit</a>
                  </li>
                  <li>
                    <a href="https://www.creative-tim.com/product/material-kit" rel="nofollow">https://www.creative-tim.com/product/material-kit</a>
                  </li>
                  <li>
                    <a href="https://material-ui-next.com" rel="nofollow">https://material-ui-next.com</a>
                  </li>
                </ul>
                <h4>
                  <a id="user-content-golang" class="anchor" aria-hidden="true" href="#golang">
                    <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                      <path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
                    </svg>
                  </a>Golang</h4>
                <ul>
                  <li>
                    <a href="https://stackoverflow.com/questions/30182538/why-can-not-i-duplicate-a-slice-with-copy-in-golang" rel="nofollow">https://stackoverflow.com/questions/30182538/why-can-not-i-duplicate-a-slice-with-copy-in-golang</a>
                  </li>
                  <li>
                    <a href="https://danott.co/posts/json-marshalling-empty-slices-to-empty-arrays-in-go.html" rel="nofollow">https://danott.co/posts/json-marshalling-empty-slices-to-empty-arrays-in-go.html</a>
                  </li>
                  <li>
                    <a href="http://blog.questionable.services/article/testing-http-handlers-go/" rel="nofollow">http://blog.questionable.services/article/testing-http-handlers-go/</a>
                  </li>
                  <li>
                    <a href="https://medium.com/@matryer/golang-advent-calendar-day-seventeen-io-reader-in-depth-6f744bb4320b" rel="nofollow">https://medium.com/@matryer/golang-advent-calendar-day-seventeen-io-reader-in-depth-6f744bb4320b</a>
                  </li>
                  <li>
                    <a href="https://medium.com/@jcox250/password-hash-salt-using-golang-b041dc94cb72" rel="nofollow">https://medium.com/@jcox250/password-hash-salt-using-golang-b041dc94cb72</a>
                  </li>
                </ul>
                <h4>
                  <a id="user-content-company-reviews" class="anchor" aria-hidden="true" href="#company-reviews">
                    <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                      <path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
                    </svg>
                  </a>Company Reviews</h4>
                <ul>
                  <li>
                    <a href="https://www.glassdoor.ca" rel="nofollow">https://www.glassdoor.ca</a>
                  </li>
                  <li>
                    <a href="https://www.interncompass.io" rel="nofollow">https://www.interncompass.io</a>
                  </li>
                  <li>
                    <a href="https://www.jobfairr.com" rel="nofollow">https://www.jobfairr.com</a>
                  </li>
                </ul>
                <h4>
                  <a id="user-content-other-1" class="anchor" aria-hidden="true" href="#other-1">
                    <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                      <path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
                    </svg>
                  </a>Other</h4>
                <ul>
                  <li>
                    <a href="http://www.documentsnap.com/find-fonts-pdf" rel="nofollow">http://www.documentsnap.com/find-fonts-pdf</a>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </div>
      <div class="gist-meta">
        <a href="https://gist.github.com/nickwu241/1abc77d7352c6252127f16a1af6ceb45/raw/0ac303328d4001c6f34bf4a8704f3a9a028a8f26/development-tips-and-tricks.md" style="float:right">view raw</a>
        <a href="https://gist.github.com/nickwu241/1abc77d7352c6252127f16a1af6ceb45#file-development-tips-and-tricks-md">development-tips-and-tricks.md</a> hosted with &#10084; by
        <a href="https://github.com">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gist'
}
</script>

<style>
.gist {
  font-size: 16px;
  color: #333;
  text-align: left; /*!
 * GitHub Light v0.4.1
 * Copyright (c) 2012 - 2017 GitHub, Inc.
 * Licensed under MIT (https://github.com/primer/github-syntax-theme-generator/blob/master/LICENSE)
 */
  direction: ltr;
}
.gist .markdown-body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
}
.gist .markdown-body::before {
  display: table;
  content: '';
}
.gist .markdown-body::after {
  display: table;
  clear: both;
  content: '';
}
.gist .markdown-body > *:first-child {
  margin-top: 0 !important;
}
.gist .markdown-body > *:last-child {
  margin-bottom: 0 !important;
}
.gist .markdown-body a:not([href]) {
  color: inherit;
  text-decoration: none;
}
.gist .markdown-body .absent {
  color: #cb2431;
}
.gist .markdown-body .anchor {
  float: left;
  padding-right: 4px;
  margin-left: -20px;
  line-height: 1;
}
.gist .markdown-body .anchor:focus {
  outline: none;
}
.gist .markdown-body p,
.gist .markdown-body blockquote,
.gist .markdown-body ul,
.gist .markdown-body ol,
.gist .markdown-body dl,
.gist .markdown-body table,
.gist .markdown-body pre {
  margin-top: 0;
  margin-bottom: 16px;
}
.gist .markdown-body hr {
  height: 0.25em;
  padding: 0;
  margin: 24px 0;
  background-color: #e1e4e8;
  border: 0;
}
.gist .markdown-body blockquote {
  padding: 0 1em;
  color: #6a737d;
  border-left: 0.25em solid #dfe2e5;
}
.gist .markdown-body blockquote > :first-child {
  margin-top: 0;
}
.gist .markdown-body blockquote > :last-child {
  margin-bottom: 0;
}
.gist .markdown-body kbd {
  display: inline-block;
  padding: 3px 5px;
  font-size: 11px;
  line-height: 10px;
  color: #444d56;
  vertical-align: middle;
  background-color: #fafbfc;
  border: solid 1px #c6cbd1;
  border-bottom-color: #959da5;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 #959da5;
}
.gist .markdown-body h1,
.gist .markdown-body h2,
.gist .markdown-body h3,
.gist .markdown-body h4,
.gist .markdown-body h5,
.gist .markdown-body h6 {
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25;
}
.gist .markdown-body h1 .octicon-link,
.gist .markdown-body h2 .octicon-link,
.gist .markdown-body h3 .octicon-link,
.gist .markdown-body h4 .octicon-link,
.gist .markdown-body h5 .octicon-link,
.gist .markdown-body h6 .octicon-link {
  color: #1b1f23;
  vertical-align: middle;
  visibility: hidden;
}
.gist .markdown-body h1:hover .anchor,
.gist .markdown-body h2:hover .anchor,
.gist .markdown-body h3:hover .anchor,
.gist .markdown-body h4:hover .anchor,
.gist .markdown-body h5:hover .anchor,
.gist .markdown-body h6:hover .anchor {
  text-decoration: none;
}
.gist .markdown-body h1:hover .anchor .octicon-link,
.gist .markdown-body h2:hover .anchor .octicon-link,
.gist .markdown-body h3:hover .anchor .octicon-link,
.gist .markdown-body h4:hover .anchor .octicon-link,
.gist .markdown-body h5:hover .anchor .octicon-link,
.gist .markdown-body h6:hover .anchor .octicon-link {
  visibility: visible;
}
.gist .markdown-body h1 tt,
.gist .markdown-body h1 code,
.gist .markdown-body h2 tt,
.gist .markdown-body h2 code,
.gist .markdown-body h3 tt,
.gist .markdown-body h3 code,
.gist .markdown-body h4 tt,
.gist .markdown-body h4 code,
.gist .markdown-body h5 tt,
.gist .markdown-body h5 code,
.gist .markdown-body h6 tt,
.gist .markdown-body h6 code {
  font-size: inherit;
}
.gist .markdown-body h1 {
  padding-bottom: 0.3em;
  font-size: 2em;
  border-bottom: 1px solid #eaecef;
}
.gist .markdown-body h2 {
  padding-bottom: 0.3em;
  font-size: 1.5em;
  border-bottom: 1px solid #eaecef;
}
.gist .markdown-body h3 {
  font-size: 1.25em;
}
.gist .markdown-body h4 {
  font-size: 1em;
}
.gist .markdown-body h5 {
  font-size: 0.875em;
}
.gist .markdown-body h6 {
  font-size: 0.85em;
  color: #6a737d;
}
.gist .markdown-body ul,
.gist .markdown-body ol {
  padding-left: 2em;
}
.gist .markdown-body ul.no-list,
.gist .markdown-body ol.no-list {
  padding: 0;
  list-style-type: none;
}
.gist .markdown-body ul ul,
.gist .markdown-body ul ol,
.gist .markdown-body ol ol,
.gist .markdown-body ol ul {
  margin-top: 0;
  margin-bottom: 0;
}
.gist .markdown-body li {
  word-wrap: break-all;
}
.gist .markdown-body li > p {
  margin-top: 16px;
}
.gist .markdown-body li + li {
  margin-top: 0.25em;
}
.gist .markdown-body dl {
  padding: 0;
}
.gist .markdown-body dl dt {
  padding: 0;
  margin-top: 16px;
  font-size: 1em;
  font-style: italic;
  font-weight: 600;
}
.gist .markdown-body dl dd {
  padding: 0 16px;
  margin-bottom: 16px;
}
.gist .markdown-body table {
  display: block;
  width: 100%;
  overflow: auto;
}
.gist .markdown-body table th {
  font-weight: 600;
}
.gist .markdown-body table th,
.gist .markdown-body table td {
  padding: 6px 13px;
  border: 1px solid #dfe2e5;
}
.gist .markdown-body table tr {
  background-color: #fff;
  border-top: 1px solid #c6cbd1;
}
.gist .markdown-body table tr:nth-child(2n) {
  background-color: #f6f8fa;
}
.gist .markdown-body table img {
  background-color: transparent;
}
.gist .markdown-body img {
  max-width: 100%;
  box-sizing: content-box;
  background-color: #fff;
}
.gist .markdown-body img[align='right'] {
  padding-left: 20px;
}
.gist .markdown-body img[align='left'] {
  padding-right: 20px;
}
.gist .markdown-body .emoji {
  max-width: none;
  vertical-align: text-top;
  background-color: transparent;
}
.gist .markdown-body span.frame {
  display: block;
  overflow: hidden;
}
.gist .markdown-body span.frame > span {
  display: block;
  float: left;
  width: auto;
  padding: 7px;
  margin: 13px 0 0;
  overflow: hidden;
  border: 1px solid #dfe2e5;
}
.gist .markdown-body span.frame span img {
  display: block;
  float: left;
}
.gist .markdown-body span.frame span span {
  display: block;
  padding: 5px 0 0;
  clear: both;
  color: #24292e;
}
.gist .markdown-body span.align-center {
  display: block;
  overflow: hidden;
  clear: both;
}
.gist .markdown-body span.align-center > span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: center;
}
.gist .markdown-body span.align-center span img {
  margin: 0 auto;
  text-align: center;
}
.gist .markdown-body span.align-right {
  display: block;
  overflow: hidden;
  clear: both;
}
.gist .markdown-body span.align-right > span {
  display: block;
  margin: 13px 0 0;
  overflow: hidden;
  text-align: right;
}
.gist .markdown-body span.align-right span img {
  margin: 0;
  text-align: right;
}
.gist .markdown-body span.float-left {
  display: block;
  float: left;
  margin-right: 13px;
  overflow: hidden;
}
.gist .markdown-body span.float-left span {
  margin: 13px 0 0;
}
.gist .markdown-body span.float-right {
  display: block;
  float: right;
  margin-left: 13px;
  overflow: hidden;
}
.gist .markdown-body span.float-right > span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: right;
}
.gist .markdown-body code,
.gist .markdown-body tt {
  padding: 0.2em 0.4em;
  margin: 0;
  font-size: 85%;
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
}
.gist .markdown-body code br,
.gist .markdown-body tt br {
  display: none;
}
.gist .markdown-body del code {
  text-decoration: inherit;
}
.gist .markdown-body pre {
  word-wrap: normal;
}
.gist .markdown-body pre > code {
  padding: 0;
  margin: 0;
  font-size: 100%;
  word-break: normal;
  white-space: pre;
  background: transparent;
  border: 0;
}
.gist .markdown-body .highlight {
  margin-bottom: 16px;
}
.gist .markdown-body .highlight pre {
  margin-bottom: 0;
  word-break: normal;
}
.gist .markdown-body .highlight pre,
.gist .markdown-body pre {
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: #f6f8fa;
  border-radius: 3px;
}
.gist .markdown-body pre code,
.gist .markdown-body pre tt {
  display: inline;
  max-width: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  line-height: inherit;
  word-wrap: normal;
  background-color: transparent;
  border: 0;
}
.gist .markdown-body .csv-data td,
.gist .markdown-body .csv-data th {
  padding: 5px;
  overflow: hidden;
  font-size: 12px;
  line-height: 1;
  text-align: left;
  white-space: nowrap;
}
.gist .markdown-body .csv-data .blob-num {
  padding: 10px 8px 9px;
  text-align: right;
  background: #fff;
  border: 0;
}
.gist .markdown-body .csv-data tr {
  border-top: 0;
}
.gist .markdown-body .csv-data th {
  font-weight: 600;
  background: #f6f8fa;
  border-top: 0;
}
.gist .pl-c {
  color: #6a737d;
}
.gist .pl-c1,
.gist .pl-s .pl-v {
  color: #005cc5;
}
.gist .pl-e,
.gist .pl-en {
  color: #6f42c1;
}
.gist .pl-smi,
.gist .pl-s .pl-s1 {
  color: #24292e;
}
.gist .pl-ent {
  color: #22863a;
}
.gist .pl-k {
  color: #d73a49;
}
.gist .pl-s,
.gist .pl-pds,
.gist .pl-s .pl-pse .pl-s1,
.gist .pl-sr,
.gist .pl-sr .pl-cce,
.gist .pl-sr .pl-sre,
.gist .pl-sr .pl-sra {
  color: #032f62;
}
.gist .pl-v,
.gist .pl-smw {
  color: #e36209;
}
.gist .pl-bu {
  color: #b31d28;
}
.gist .pl-ii {
  color: #fafbfc;
  background-color: #b31d28;
}
.gist .pl-c2 {
  color: #fafbfc;
  background-color: #d73a49;
}
.gist .pl-c2::before {
  content: '^M';
}
.gist .pl-sr .pl-cce {
  font-weight: bold;
  color: #22863a;
}
.gist .pl-ml {
  color: #735c0f;
}
.gist .pl-mh,
.gist .pl-mh .pl-en,
.gist .pl-ms {
  font-weight: bold;
  color: #005cc5;
}
.gist .pl-mi {
  font-style: italic;
  color: #24292e;
}
.gist .pl-mb {
  font-weight: bold;
  color: #24292e;
}
.gist .pl-md {
  color: #b31d28;
  background-color: #ffeef0;
}
.gist .pl-mi1 {
  color: #22863a;
  background-color: #f0fff4;
}
.gist .pl-mc {
  color: #e36209;
  background-color: #ffebda;
}
.gist .pl-mi2 {
  color: #f6f8fa;
  background-color: #005cc5;
}
.gist .pl-mdr {
  font-weight: bold;
  color: #6f42c1;
}
.gist .pl-ba {
  color: #586069;
}
.gist .pl-sg {
  color: #959da5;
}
.gist .pl-corl {
  text-decoration: underline;
  color: #032f62;
}
.gist .breadcrumb {
  margin-bottom: 10px;
  font-size: 18px;
  color: #586069;
}
.gist .breadcrumb .separator::before,
.gist .breadcrumb .separator::after {
  content: ' ';
}
.gist .breadcrumb strong.final-path {
  color: #24292e;
}
.gist .breadcrumb .zeroclipboard-button {
  display: inline-block;
  margin-left: 5px;
}
.gist .breadcrumb .repo-root {
  font-weight: 600;
}
.gist .breadcrumb .octicon {
  vertical-align: -2px;
}
.gist .editor-license-template,
.gist .editor-code-of-conduct-template,
.gist .editor-gitignore-template {
  position: relative;
  top: 3px;
  display: block;
  float: right;
  font-size: 14px;
}
.gist .editor-license-template .select-menu-git-ignore,
.gist .editor-code-of-conduct-template .select-menu-git-ignore,
.gist .editor-gitignore-template .select-menu-git-ignore {
  right: 0;
}
.gist .editor-abort {
  display: inline;
  font-size: 14px;
}
.gist .blob-interaction-bar {
  position: relative;
  background-color: #f2f2f2;
  border-bottom: 1px solid #e5e5e5;
}
.gist .blob-interaction-bar::before {
  display: table;
  content: '';
}
.gist .blob-interaction-bar::after {
  display: table;
  clear: both;
  content: '';
}
.gist .blob-interaction-bar .octicon-search {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 12px;
  color: #586069;
}
.gist .blob-filter {
  width: 100%;
  padding: 4px 20px 5px 30px;
  font-size: 12px;
  border: 0;
  border-radius: 0;
  outline: none;
}
.gist .blob-filter:focus {
  outline: none;
}
.gist .html-blob {
  margin-bottom: 15px;
}
.gist .TagsearchPopover-content {
  width: inherit;
  max-width: 600px;
}
.gist .license-summary-octicon {
  color: #959da5;
}
.gist .rule-type-permissions {
  color: #28a745;
}
.gist .rule-type-conditions {
  color: #0366d6;
}
.gist .rule-type-limitations {
  color: #d73a49;
}
.gist .blob-wrapper {
  overflow-x: auto;
  overflow-y: hidden;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.gist .blob-wrapper-embedded {
  max-height: 240px;
  overflow-y: auto;
}
.gist .diff-table {
  width: 100%;
  border-collapse: separate;
}
.gist .diff-table .line-comments {
  padding: 10px;
  vertical-align: top;
  border-top: 1px solid #e1e4e8;
}
.gist .diff-table .line-comments:first-child + .empty-cell {
  border-left-width: 1px;
}
.gist .diff-table tr:not(:last-child) .line-comments {
  border-top: 1px solid #e1e4e8;
  border-bottom: 1px solid #e1e4e8;
}
.gist .blob-num {
  width: 1%;
  min-width: 50px;
  padding-right: 10px;
  padding-left: 10px;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
    monospace;
  font-size: 12px;
  line-height: 20px;
  color: rgba(27, 31, 35, 0.3);
  text-align: right;
  white-space: nowrap;
  vertical-align: top;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.gist .blob-num:hover {
  color: rgba(27, 31, 35, 0.6);
}
.gist .blob-num::before {
  content: attr(data-line-number);
}
.gist .blob-num.non-expandable {
  cursor: default;
}
.gist .blob-num.non-expandable:hover {
  color: rgba(27, 31, 35, 0.3);
}
.gist .blob-code {
  position: relative;
  padding-right: 10px;
  padding-left: 10px;
  line-height: 20px;
  vertical-align: top;
}
.gist .blob-code-inner {
  overflow: visible;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
    monospace;
  font-size: 12px;
  color: #24292e;
  word-wrap: normal;
  white-space: pre;
}
.gist .blob-code-inner .x-first {
  border-top-left-radius: 0.2em;
  border-bottom-left-radius: 0.2em;
}
.gist .blob-code-inner .x-last {
  border-top-right-radius: 0.2em;
  border-bottom-right-radius: 0.2em;
}
.gist .blob-code-inner::before {
  content: '';
}
.gist .blob-code-inner.highlighted {
  background-color: #fffbdd;
}
.gist .soft-wrap .diff-table {
  table-layout: fixed;
}
.gist .soft-wrap .blob-code {
  padding-left: 18px;
  text-indent: -7px;
}
.gist .soft-wrap .blob-code-inner {
  word-wrap: break-word;
  white-space: pre-wrap;
}
.gist .soft-wrap .no-nl-marker {
  display: none;
}
.gist .soft-wrap .add-line-comment {
  margin-left: -28px;
}
.gist .blob-num-hunk,
.gist .blob-code-hunk,
.gist .blob-num-expandable,
.gist .blob-code-expandable {
  color: rgba(27, 31, 35, 0.5);
  vertical-align: middle;
}
.gist .blob-num-hunk,
.gist .blob-num-expandable {
  background-color: #dbedff;
}
.gist .blob-code-hunk,
.gist .blob-code-expandable {
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: #f1f8ff;
  border-width: 1px 0;
}
.gist .blob-expanded .blob-num,
.gist .blob-expanded .blob-code {
  background-color: #fafbfc;
}
.gist .blob-expanded + tr:not(.blob-expanded) .blob-num,
.gist .blob-expanded + tr:not(.blob-expanded) .blob-code {
  border-top: 1px solid #eaecef;
}
.gist .blob-expanded .blob-num-hunk {
  border-top: 1px solid #eaecef;
}
.gist tr:not(.blob-expanded) + .blob-expanded .blob-num,
.gist tr:not(.blob-expanded) + .blob-expanded .blob-code {
  border-top: 1px solid #eaecef;
}
.gist .blob-num-expandable {
  padding: 0;
  font-size: 12px;
  text-align: center;
}
.gist .blob-num-expandable .octicon {
  vertical-align: top;
}
.gist .blob-num-expandable .diff-expander {
  display: block;
  width: auto;
  height: auto;
  padding: 4px 11px 4px 10px;
  margin-right: -1px;
  color: #586069;
  cursor: pointer;
}
.gist .blob-num-expandable .diff-expander:hover {
  color: #fff;
  text-shadow: none;
  background-color: #0366d6;
  border-color: #0366d6;
}
.gist .blob-code-addition {
  background-color: #e6ffed;
}
.gist .blob-code-addition .x {
  color: #24292e;
  background-color: #acf2bd;
}
.gist .blob-num-addition {
  background-color: #cdffd8;
  border-color: #bef5cb;
}
.gist .blob-code-deletion {
  background-color: #ffeef0;
}
.gist .blob-code-deletion .x {
  color: #24292e;
  background-color: #fdb8c0;
}
.gist .blob-num-deletion {
  background-color: #ffdce0;
  border-color: #fdaeb7;
}
.gist .selected-line.blob-code {
  background-color: #fffbdd;
}
.gist .selected-line.blob-code .x {
  background-color: transparent;
}
.gist .selected-line.blob-num {
  background-color: #fff5b1;
  border-color: #ffea7f;
}
.gist .add-line-comment {
  position: relative;
  z-index: 5;
  float: left;
  width: 22px;
  height: 22px;
  margin: -2px -10px -2px -20px;
  line-height: 21px;
  color: #fff;
  text-align: center;
  text-indent: 0;
  cursor: pointer;
  background-color: #0366d6;
  background-image: linear-gradient(#0372ef, #0366d6);
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(27, 31, 35, 0.15);
  opacity: 0;
  transition: transform 0.1s ease-in-out;
  transform: scale(0.8, 0.8);
}
.gist .add-line-comment:hover {
  transform: scale(1, 1);
}
.is-hovered .gist .add-line-comment,
.gist .add-line-comment:focus {
  opacity: 1;
}
.gist .add-line-comment .octicon {
  vertical-align: text-top;
  pointer-events: none;
}
.gist .add-line-comment.octicon-check {
  background: #333;
  opacity: 1;
}
.gist .inline-comment-form {
  border: 1px solid #dfe2e5;
  border-radius: 3px;
}
.gist .inline-review-comment {
  margin-top: 0 !important;
  margin-bottom: 10px !important;
}
.gist .inline-review-comment .gc:first-child + tr .blob-num,
.gist .inline-review-comment .gc:first-child + tr .blob-code {
  padding-top: 5px;
}
.gist .inline-review-comment tr:last-child {
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;
}
.gist .inline-review-comment tr:last-child .blob-num,
.gist .inline-review-comment tr:last-child .blob-code {
  padding-bottom: 8px;
}
.gist .inline-review-comment tr:last-child .blob-num:first-child,
.gist .inline-review-comment tr:last-child .blob-code:first-child {
  border-bottom-left-radius: 2px;
}
.gist .inline-review-comment tr:last-child .blob-num:last-child,
.gist .inline-review-comment tr:last-child .blob-code:last-child {
  border-bottom-right-radius: 2px;
}
.gist .timeline-inline-comments {
  width: 100%;
  table-layout: fixed;
}
.gist .timeline-inline-comments .inline-comments,
.gist .show-inline-notes .inline-comments {
  display: table-row;
}
.gist .inline-comments {
  display: none;
}
.gist .inline-comments.is-collapsed {
  display: none;
}
.gist .inline-comments .line-comments.is-collapsed {
  visibility: hidden;
}
.gist .inline-comments .line-comments + .blob-num {
  border-left-width: 1px;
}
.gist .inline-comments .timeline-comment {
  margin-bottom: 10px;
}
.gist .inline-comments .inline-comment-form,
.gist .inline-comments .inline-comment-form-container {
  max-width: 780px;
}
.gist .comment-holder {
  max-width: 780px;
}
.gist .line-comments + .line-comments,
.gist .empty-cell + .line-comments {
  border-left: 1px solid #eaecef;
}
.gist .inline-comment-form-container .inline-comment-form,
.gist .inline-comment-form-container.open .inline-comment-form-actions {
  display: none;
}
.gist .inline-comment-form-container .inline-comment-form-actions,
.gist .inline-comment-form-container.open .inline-comment-form {
  display: block;
}
.gist body.split-diff .container,
.gist body.split-diff .container-lg,
.gist body.full-width .container,
.gist body.full-width .container-lg {
  width: 100%;
  max-width: none;
  padding-right: 20px;
  padding-left: 20px;
}
.gist body.split-diff .repository-content,
.gist body.full-width .repository-content {
  width: 100%;
}
.gist body.split-diff .new-pr-form,
.gist body.full-width .new-pr-form {
  max-width: 980px;
}
.gist body.split-diff .new-pr-form .discussion-sidebar,
.gist body.full-width .new-pr-form .discussion-sidebar {
  width: 200px;
}
.gist .file-diff-split {
  table-layout: fixed;
}
.gist .file-diff-split .blob-code + .blob-num {
  border-left: 1px solid #f6f8fa;
}
.gist .file-diff-split .blob-code-inner {
  word-wrap: break-word;
  white-space: pre-wrap;
}
.gist .file-diff-split .empty-cell {
  cursor: default;
  background-color: #fafbfc;
  border-right-color: #eaecef;
}
.gist .submodule-diff-stats .octicon-diff-removed {
  color: #cb2431;
}
.gist .submodule-diff-stats .octicon-diff-renamed {
  color: #677a85;
}
.gist .submodule-diff-stats .octicon-diff-modified {
  color: #d0b44c;
}
.gist .submodule-diff-stats .octicon-diff-added {
  color: #28a745;
}
.gist .BlobToolbar {
  left: -17px;
}
.gist .BlobToolbar-dropdown {
  margin-left: -2px;
}
.gist .task-list-item {
  list-style-type: none;
}
.gist .task-list-item label {
  font-weight: 400;
}
.gist .task-list-item.enabled label {
  cursor: pointer;
}
.gist .task-list-item + .task-list-item {
  margin-top: 3px;
}
.gist .task-list-item .handle {
  display: none;
}
.gist .task-list-item-checkbox {
  margin: 0 0.2em 0.25em -1.6em;
  vertical-align: middle;
}
.gist .reorderable-task-lists .markdown-body .contains-task-list {
  padding: 0;
}
.gist .reorderable-task-lists .markdown-body li:not(.task-list-item) {
  margin-left: 26px;
}
.gist .reorderable-task-lists .markdown-body ol:not(.contains-task-list) li,
.gist .reorderable-task-lists .markdown-body ul:not(.contains-task-list) li {
  margin-left: 0;
}
.gist .reorderable-task-lists .markdown-body li p {
  margin-top: 0;
}
.gist .reorderable-task-lists .markdown-body .task-list-item {
  padding-right: 15px;
  padding-left: 42px;
  margin-right: -15px;
  margin-left: -15px;
  border: 1px solid transparent;
}
.gist .reorderable-task-lists .markdown-body .task-list-item + .task-list-item {
  margin-top: 0;
}
.gist
  .reorderable-task-lists
  .markdown-body
  .task-list-item
  .contains-task-list {
  padding-top: 4px;
}
.gist .reorderable-task-lists .markdown-body .task-list-item .handle {
  display: block;
  float: left;
  width: 20px;
  padding: 2px 0 0 2px;
  margin-left: -43px;
  opacity: 0;
}
.gist .reorderable-task-lists .markdown-body .task-list-item .drag-handle {
  fill: #333;
}
.gist .reorderable-task-lists .markdown-body .task-list-item.hovered {
  background: #fafafa;
  border-top-color: #ededed;
  border-bottom-color: #ededed;
}
.gist .reorderable-task-lists .markdown-body .task-list-item.hovered > .handle {
  opacity: 1;
}
.gist .reorderable-task-lists .markdown-body .task-list-item.is-dragging {
  opacity: 0;
}
.gist .reorderable-task-lists .markdown-body .task-list-item.is-ghost {
  border-right-color: #ededed;
  border-left-color: #ededed;
}
.gist .review-comment-contents .markdown-body .task-list-item {
  padding-left: 42px;
  margin-right: -12px;
  margin-left: -12px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.gist .review-comment-contents .markdown-body .task-list-item.hovered {
  border-left-color: #ededed;
}
.gist .highlight {
  padding: 0;
  margin: 0;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
    monospace;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
  color: #333;
  background: #fff;
  border: 0;
}
.gist .render-viewer-error,
.gist .render-viewer-fatal,
.gist .render-viewer-invalid,
.gist .octospinner {
  display: none;
}
.gist iframe.render-viewer {
  width: 100%;
  height: 480px;
  overflow: hidden;
  border: 0;
}
.gist pre,
.gist code {
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
    monospace !important;
  white-space: pre;
}
.gist .gist-meta {
  padding: 10px;
  overflow: hidden;
  font: 12px -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  color: #586069;
  background-color: #f7f7f7;
  border-radius: 0 0 2px 2px;
}
.gist .gist-meta a {
  font-weight: 600;
  color: #666;
  text-decoration: none;
  border: 0;
}
.gist .gist-data {
  overflow: auto;
  word-wrap: normal;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  border-radius: 2px 2px 0 0;
}
.gist .gist-file {
  margin-bottom: 1em;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
    monospace;
  border: 1px solid #ddd;
  border-bottom: 1px solid #ccc;
  border-radius: 3px;
}
.gist .gist-file article {
  padding: 6px;
}
.gist .gist-file .scroll .gist-data {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 30px;
  left: 0;
  overflow: scroll;
}
.gist .gist-file .scroll .gist-meta {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
}
.gist .blob-num {
  min-width: inherit;
  padding: 1px 10px !important;
  background: rgba(0, 0, 0, 0);
}
.gist .blob-code {
  padding: 1px 10px !important;
  text-align: left;
  background: rgba(0, 0, 0, 0);
  border: 0;
}
.gist .blob-wrapper table {
  border-collapse: collapse;
}
.gist .blob-wrapper tr:first-child td {
  padding-top: 4px;
}
.gist .markdown-body .anchor {
  display: none;
}
/*# sourceMappingURL=gist-embed-09f15dd1b44ad019a830d2500f7f77d2.css.map */
</style>
