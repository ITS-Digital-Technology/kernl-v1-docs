# Modules

_Modules_ are reusable content blocks you can include anywhere you add content.

## Create a module

Currently, there are three types of modules you can create: [Galleries](#gallery), [Carousels](#carousel) and [Code](#code)

After you have enabled the modules functionality (Customize > Extentions tab), simply create a new module as you would any other post type. Enter a unique and identifiable name (ie. Gallery - XYZ Event) then select the type of module. Fields specific to the module selected will then appear.

<ImageStage title="Admin View" filename="module-add.png" caption="Select a type of module to add." />

## Gallery

Galleries allow you to add multiple images from the media library and display them in a simple modal. For a working example, please see [kernl(ui)](https://assets.provost.northeastern.edu/kernl-ui/?part=gallery)

<ImageStage title="Admin View" filename="module-gallery.png" caption="Creating and editing a gallery." />

<ImageStage title="Live View" filename="module-gallery-live.png" caption="Example gallery included on a page." />

## Carousel

Carousels allow you to rotate between simple content. For a working example, please see [kernl(ui)](https://assets.provost.northeastern.edu/kernl-ui/?part=carousel)

<ImageStage title="Admin View" filename="module-carousel.png" caption="Creating a carousel." />

## Code

Code modules allow you to include PHP or JavaScript blocks of code.

::: tip
Use with caution. If you have any questions implementing a code block, please contact <a href="mailto:provost-digital@northeastern.edu">provost-digital@northeastern.edu</a>
:::

<ImageStage title="Admin View" filename="module-code.png" caption="Creating a code block." />


## Include a module

Using a shortcode, modules can be included anywhere content is added (ie. posts, pages, etc.).

#### Arguments

* id* - WordPress ID of module to include
* type* - Module type to include
* class - Optional CSS class to be added to the wrapper

```
[module id=1215 type="gallery" class="w--1/4@d"]
```
