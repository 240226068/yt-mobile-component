<template>
  <div class="yt-buttonGroup" :class="{'is-shadow': shadow}">
    <slot></slot>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'yt-btnGroup',
    props: {
      shadow: {
        type: Boolean,
        default: true
      }
    }
  }
</script>
