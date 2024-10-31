# Profiles

_Profiles_ are a type of post that produces a directory of people.

## Create a profile

Fill in the empy fields, add a headshot and a Bio if needed. Select a Profile type and click update.

<ImageStage title="Admin View" filename="profile-admin.jpg" caption="Notice Profile Types in the side bar. Taxonomies can target sub groups." />


## Pulling profiles
Adding profiles to a page is the next step. Use the following shortcode to dynamically pull in your profiles categorized as 'Students.


```
[posts posts_per_page=8 post_type="profile" taxonomy="profile-type" tax_terms="students" orderby="menu_order" order="ASC" template="profile/card" column_class="w--20@t pb--1"]
```

::: tip
For more explanation and shortcode examples [read the documentation](/wp/features/shortcodes.html#posts-shortcode).
:::

<ImageStage title="Admin View" filename="profile-page-admin.jpg" caption="Tax_term will pull at the profiles tagged 'Students'. ASC order is for ascending alphabetically" />
<ImageStage title="Live View" filename="profile-live.jpg"caption="Clicking on View Profile will launch the pop up modal with the bio and contact information." />







