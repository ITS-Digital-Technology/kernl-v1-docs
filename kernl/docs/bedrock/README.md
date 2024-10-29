---
pageClass: landing-page
---

# kernl(bedrock)

A modern, configurable WordPress stack.

Based on [Roots Bedrock](https://roots.io/bedrock/) and [The 12-Factor App](https://12factor.net) &mdash; kernl(bedrock) comes with an opinionated set of "must use" and optional plugins. Environements variables can be configured using .env files.

## Dependencies

WordPress itself is a dependency in kernl(bedrock), along with Plugins. Versioning is controlled in the composer.json using [semantic versioning](https://semver.org).

Below are the optional and "must-use" plugins shipped with the default install.

### Must Use
* [advanced-custom-fields-pro](https://www.advancedcustomfields.com/pro/)
* [soil](https://roots.io/plugins/soil)
* [wp-password-bcrypt](https://roots.io/plugins/wp-password-bcrypt)
* [wp-config](https://roots.io/plugins/wp-config)
* [pods-bedrock-multisite-url-fix](https://bitbucket.org/nupods/pods-bedrock-multisite-url-fix)
* [autodescription](https://wordpress.org/plugins/autodescription)
* [duplicate-post](https://wordpress.org/plugins/duplicate-post)
* [enable-media-replace](https://wordpress.org/plugins/enable-media-replace)
* [ewww-image-optimizer](https://wordpress.org/plugins/ewww-image-optimizer)
* [mce-table-buttons](https://wordpress.org/plugins/mce-table-buttons)
* [safe-redirect-manager](https://wordpress.org/plugins/safe-redirect-manager)
* [shibboleth](https://wordpress.org/plugins/shibboleth)
* [simple-page-ordering](https://wordpress.org/plugins/simple-page-ordering)
* [wp-optimize](https://wordpress.org/plugins/wp-optimize)
* [wp-term-order](https://wordpress.org/plugins/wp-term-order)

### Plugins
* [acf-to-rest-api](https://wordpress.org/plugins/acf-to-rest-api)
* [akamai](https://wordpress.org/plugins/akamai)
* [authorizer](https://wordpress.org/plugins/authorizer)
* [codepress-admin-columns](https://wordpress.org/plugins/codepress-admin-columns)
* [disable-comments](https://wordpress.org/plugins/disable-comments)
* [members](https://wordpress.org/plugins/members)
* [minify-html-markup](https://wordpress.org/plugins/minify-html-markup)
* [really-simple-csv-importer](https://wordpress.org/plugins/really-simple-csv-importer)
* [the-events-calendar](https://wordpress.org/plugins/the-events-calendar)
* [relevanssi-premium](https://www.relevanssi.com)
* [wp-all-import-pro](http://www.wpallimport.com)
* [wp-migrate-db-pro](https://deliciousbrains.com/wp-migrate-db-pro/)
* [wp-migrate-db-pro-media-files](https://deliciousbrains.com/wp-migrate-db-pro-media-files/)


## Structure

``` json
├── composer.json
├── config
│   ├── application.php
│   └── environments
│       ├── development.php
│       ├── staging.php
│       └── production.php
├── vendor
└── web
    ├── app
    │   ├── mu-plugins
    │   ├── plugins
    │   ├── themes
    │   └── uploads
    ├── wp-config.php
    ├── index.php
    └── wp
```

## Installation

``` json
git clone git@bitbucket.org:nupods/kernl-bedrock.git sitename
cd sitename
composer install -o --prefer-dist --no-interaction
```

## Local Development
There are many ways to set up a local environment, but for general usage, [Laravel Valet](https://laravel.com/docs/5.7/valet) is a great option.
