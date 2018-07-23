<template>
  <div class="yt-tabbar-panel">
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
      text: {
        type: String,
        default: ''
      },
      font: {
        type: String,
        default: ''
      },
      src: {
        type: String,
        default: ''
      },
      activeSrc: {
        type: String,
        default: ''
      },
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
