<template>
  <div>
    <hr>
    <p>
      <a class="btn --sm bc--red br--pill" :href="`/kernl-ui/?part=` + href" target="_blank" referrer="noreferrer">
        <slot>See more examples</slot>
       →</a>
    </p>
  </div>
</template>

<script>
export default {
  props: ['href']
}
</script>
