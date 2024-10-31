---
pageClass: landing-page
---

# kernl(wp)

**kernl(wp)** is a highly customized Wordpress theme designed to rapidly create Northeastern University websites.

## Theme Basics
Built with <a href="/kernl/ui/">kernl(ui)</a> as its frontend, the kernl(wp) theme enhances Wordpress with a robust amount of functionality fit for making Northeastern websites.

<div class="row col--stretch">
  <div class="col w--1/3@t">
    <div class="card">
      <div class="__body">
        <h4 class="__title">Features</h4>
        <ul>
          <li><a href="features/accessibility.html">Accessbility</a></li>
          <li><a href="features/authentication.html">Authentication (SSO)</a></li>
          <li><a href="features/brand.html">Brand Chrome</a></li>
          <li><a href="features/import.html">Data Import</a></li>
          <li><a href="features/events.html">Events</a></li>
          <li><a href="features/knowledgebase.html">Knowledge base</a></li>
          <li><a href="features/profiles.html">Profiles</a></li>
          <li><a href="features/shortcodes.html">Shortcodes</a></li>
          <li><a href="features/search.html">Advanced Search</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col w--1/3@t">
    <div class="card">
      <div class="__body">
        <h4 class="__title">Layouts</h4>
        <ul>
          <li><a href="layouts/overview.html">Overview</a></li>
          <li><a href="layouts/customize.html">Customize</a></li>
          <li><a href="layouts/content.html">Content</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col w--1/3@t">
    <div class="card">
      <div class="__body">
        <h4 class="__title">Views</h4>
        <ul>
          <li><a href="views/homepage.html">Homepage</a></li>
          <li><a href="views/pages.html">Pages</a></li>
          <li><a href="views/posts.html">Posts</a></li>
          <li><a href="views/archives.html">Archives</a></li>
          <li><a href="views/404.html">404</a></li>
          <li><a href="views/search.html">Search</a></li>
          <li><a href="views/articles.html">Articles</a></li>
          <li><a href="views/events.html">Events</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

## Selected Examples
Here are a handful of Northeastern sites built and published using the kernl(wp) theme.

<div class="custom ta--c py--1">
  <div class="row">
    <div class="col w--50@t my--1">
      <a class="fs--sm tc--gray-500" href="https://registrar.northeastern.edu/" target="_blank" referrer="noreferrer">
        <img :src="$withBase('/mockup-registrar.jpg')">
        <b>University Registrar Website</b><br>
        <span class="fs--xs tc--gray-300">registrar.northeastern.edu</span>
      </a>
    </div>
    <div class="col w--50@t my--1">
      <a class="fs--sm tc--gray-500" href="https://sail.northeastern.edu/" target="_blank" referrer="noreferrer">
        <img :src="$withBase('/mockup-sail.jpg')">
        <b>Self-Authored Integrated Learning (SAIL) Website</b><br>
        <span class="fs--xs tc--gray-300">sail.northeastern.edu</span>
      </a>
    </div>
    <div class="col w--50@t my--1">
      <a class="fs--sm tc--gray-500" href="https://www.northeastern.edu/coop/" target="_blank" referrer="noreferrer">
        <img :src="$withBase('/mockup-coop.jpg')">
        <b>Cooperative Education Website</b><br>
        <span class="fs--xs tc--gray-300">www.northeastern.edu/coop</span>
      </a>
    </div>
    <div class="col w--50@t my--1">
      <a class="fs--sm tc--gray-500" href="https://learning.northeastern.edu/" target="_blank" referrer="noreferrer">
        <img :src="$withBase('/mockup-catlr.jpg')">
        <b>CATLR Website</b><br>
        <span class="fs--xs tc--gray-300">learning.northeastern.edu/</span>
      </a>
    </div>
    <div class="col my--1">
      <h3>More Examples:</h3>
      <ul class="ls--none">
        <li><a class="fs--sm tc--gray-500" href="https://facts.northeastern.edu/" target="_blank" referrer="noreferrer">facts.northeastern.edu</a></li>
        <li><a class="fs--sm tc--gray-500" href="https://undergraduate.northeastern.edu/explore" target="_blank" referrer="noreferrer">undergraduate.northeastern.edu/explore</a></li>
        <li><a class="fs--sm tc--gray-500" href="https://provost.northeastern.edu/uds/" target="_blank" referrer="noreferrer">provost.northeastern.edu/uds</a></li>
        <li><a class="fs--sm tc--gray-500" href="https://neche.northeastern.edu/" target="_blank" referrer="noreferrer">neche.northeastern.edu</a></li>
        <li><a class="fs--sm tc--gray-500" href="https://phd.northeastern.edu" target="_blank" referrer="noreferrer">phd.northeastern.edu</a></li>
        <li><a class="fs--sm tc--gray-500" href="https://globalresilience.northeastern.edu" target="_blank" referrer="noreferrer">globalresilience.northeastern.edu</a></li>
      </ul>
    </div>
  </div>
</div>

<ForDevelopers>
#### Installing kernl(wp)

##### Requirements

+ WordPress >= 4.7
+ PHP >= 7.1.3 (with php-mbstring enabled)
+ Composer
+ Node.js >= 6.9.x
+ Yarn

``` bash
# clone the repo to your theme directory
git clone https://bitbucket.org/nupods/kernl-wp.git

# install composer and npm dependencies
composer install
yarn install
```

#### Versioning Standards for the kernl() ecosystem

The kernl() ecosystem utilizes a versioning approach of `paradigm.major.minor`.

Example: `kernl-wp 1.3.0` (with a dev dependency of `kernl-lib ~1.3.0`)

Where kernl(ui) may be versioned with minor and majors out of sync of the rest of the ecosystem, kernl(wp) and kernl(lib) should be synchronized at all times.

When the kernl(wp) theme is extended for special projects, the version scheme follows the principle above, but is appended with a build suffix of `+major.minor`.

Example: `kernl-registrar 1.3.0+1.0`

</ForDevelopers>
