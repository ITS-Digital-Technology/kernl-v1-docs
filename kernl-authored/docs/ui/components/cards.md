# Cards

`kernl-ui/src/styles/04.components/card.scss`

<div class="w--1/2@d mb--2">
  <article class="card">
    <a href="#" class="__link">
      <div class="__graphic --16x9"><img class="__graphic__img" src="https://assets.provost.northeastern.edu/kernl-ui/docs/images/random/221226.jpg" alt=""></div>
      <div class="__body">
        <h2 class="__title">Card With Image and Footer</h2>
        <p>This example has an excerpt of 93 characters. Etiam porta sem malesuada magna mollis euismod.</p>
      </div>
      <div class="__footer">
        Footer Text
      </div>
    </a>
  </article>
</div>

``` html
<article class="card">
  <a href="#" class="__link">
    <div class="__graphic --16x9">
      <img class="__graphic__img" src="..." alt="...">
    </div>
    <div class="__body">
      <h2 class="__title">...</h2>
      <p>...</p>
    </div>
    <div class="__footer">
      ...
    </div>
  </a>
</article>
```

<UiDemo href="cards"/>
