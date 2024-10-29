<template>
  <div class="bg--gray-500 pa--2 mb--2 br">
    <h3 class="fs--root">{{ title }}</h3>
    <p><img class="bs" :src="`/kernl/` + filename"></p>
    <p class="fs--sm mb--0" v-if="caption">{{ caption }}</p>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'filename',
    'caption'
  ]
};
</script>
