# Shortcodes

The following are available shortcodes to be used within a <span class="tt--caps">WYSIWYG</span> editor.

## Component Shortcode

Displays a single component in a layout.
```
[component type="card" title="Title is Here" class="bg--red"]
  Lorem ipsum is made of gypsum.
[/component]
```

##### Example Output:

<div class="w--1/2@d mb--2">
  <article class="card">
    <div class="__body">
      <h2 class="__title">Title is Here</h2>
      <p>Lorem Ipsum is made of gypsum.</p>
    </div>
  </article>
</div>

#### Arguments
+ type*
+ title
+ class
+ link
+ footer


## Icon Shortcode
Crafts a [feather icon](/ui/components/icon.md)

```
[icon id="calendar"]
```

#### Arguments

* id* - String of [icon](https://assets.provost.northeastern.edu/kernl-ui/?part=icons) to display
* class - CSS class to be added to icon


## Include Shortcode
Includes a custom file.

```
[include file="/path/to/file"]
```

#### Arguments

* file* - Path to file relative to theme root


## Mailchimp Shortcode
Creates a Mailchimp sign up form (email only at this time)

```
[mailchimp id="xyz" u="123" domain="northeastern.us1"]
```

#### Arguments

* id* - Mailchimp list ID
* u* - Mailchimp user ID
* domain* - Mailchimp domain (eg. bolded portion: https://_**northeastern.us1**_.list-manage.com/....)
* placeholder (default: Join our mailing list) - Input placeholder text
* btn (default: bg--black) - CSS class to be added to submit button
* cta (default: Subscribe) - Text for submit button


## Posts Shortcode
Runs a WP_Query with options to pass kernl(wp) templates and style

```
[posts posts_per_page=4 post_type="post" column_class="w--1/4@d w--1/2@t" template="single/card"]
```

#### Arguments

* All [WP_Query](https://codex.wordpress.org/Class_Reference/WP_Query) arguments
* template* - path to template file (eg. single/card or profile/card)
* column_class - CSS class on column
* component_class - CSS class on component
* wrapper_class (default: row) - class to wrap column/component
* hide_excerpt (default: false) - boolean for exceprt
* hide_badge (default: false) - boolean for badge
* hide_column (default: false) - boolean to remove column wrapper

## Video Shortcode
Embed an external video player

```
[vid id="zCN3M6XvJmw"]
```

#### Arguments

* id* - Video ID
* site (default: youtube) - Site to embed video player (options: youtube, vimeo)
* player (default: https://www.youtube.com/embed/) - Custom player url (youtube, vimeo options prewired)
* class (default: ar--16x9 mb--1) - CSS class to add to video wrapper


## Wufoo Shortcode
Embed an external video player

```
[wufoo id="zp0z7bx0ft717g"]
```

#### Arguments

* id* - Wufoo form ID
* u (default: provostweb) - Wufoo username
* header (default: hide) - Option to hide or show Wufoo form header
