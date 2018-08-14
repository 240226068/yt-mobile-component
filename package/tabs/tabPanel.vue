<template>
  <div class="yt-tabs-panel">
    <!-- @slot 包裹具体的内容 -->
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-tab-panel',
    inject: {
      ytTabs: {
        default: () => {
          return {}
        }
      }
    },
    props: {
      /**
       * tabItem的文字
       */
      text: {
        type: String,
        default: ''
      },
      /**
       * tabItem中的角标
       */
      badge: {
        type: Object,
        default: null
      }
    },
    mounted() {
      this.ytTabs && this.ytTabs.appendPanel(this)
    },
    destroyed() {
      this.ytTabs && this.ytTabs.removePanel(this)
    }
  }
</script>
