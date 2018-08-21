<template>
  <div class="yt-buttonGroup" :class="{'is-shadow': shadow, 'is-border': border, 'is-edge': edge}">
    <!-- @slot 包括yt-btn组件-->
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-btnGroup',
    provide() {
      return {
        ytBtnGroup: this
      }
    },
    props: {
      /**
       * 是否使用阴影
       */
      shadow: {
        type: Boolean,
        default: true
      },
      /**
       * 是否使用border
       */
      border: {
        type: Boolean,
        default: false
      },
      /**
       * 包裹的btn组件是否紧挨展示 紧挨时候会有高亮的border
       */
      edge: {
        type: Boolean,
        default: false
      },
      /**
       * edge为true时， 多个btn紧挨时候的borderColor
       */
      edgeBorderColor: {
        type: String,
        default: null
      }
    }
  }
</script>
