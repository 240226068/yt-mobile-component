<template>
  <div class="yt-buttonGroup" :class="{'is-shadow': shadow, 'is-edge': edge}">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-btnGroup',
    props: {
      /**
       * 是否使用阴影
       */
      shadow: {
        type: Boolean,
        default: true
      },
      /**
       * 包裹的btn组件是否紧挨展示 紧挨时候会有高亮的border
       */
      edge: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
