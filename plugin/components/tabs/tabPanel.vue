<template>
  <div class="yt-tabs-panel">
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
      text: {
        type: String,
        default: ''
      },
      badge: {
        type: Object
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
