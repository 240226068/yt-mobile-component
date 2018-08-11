<template>
  <div class="yt-tabbar-panel">
    <!-- @slot 包裹具体的内容 -->
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-tabbar-panel',
    inject: {
      ytTabbar: {
        default: () => {
          return {}
        }
      }
    },
    props: {
      /**
       * tabbar上item的文字
       */
      text: {
        type: String,
        default: ''
      },
      /**
       * tabbar上item的字体class
       */
      font: {
        type: String,
        default: ''
      },
      /**
       * tabbar上item的图片的路径
       */
      src: {
        type: String,
        default: ''
      },
      /**
       * tabbar上item选中时候的图片路径
       */
      activeSrc: {
        type: String,
        default: ''
      },
      /**
       * tabbar上item上的角标
       */
      badge: {
        type: Object
      }
    },
    mounted() {
      this.ytTabbar && this.ytTabbar.appendPanel(this)
    },
    destroyed() {
      this.ytTabbar && this.ytTabbar.removePanel(this)
    }
  }
</script>
