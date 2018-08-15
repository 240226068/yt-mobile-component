<template>
  <div class="yt-screen-panel">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-screenPanel',
    inject: {
      ytScreen: {
        default: () => ({})
      }
    },
    props: {
      /**
       * screenPanel的label值
       */
      label: {
        type: String
      }
    },
    data() {
      return {
        show: false
      }
    },
    mounted() {
      this.ytScreen && this.ytScreen.appendPanel(this)
    },
    destroyed() {
      this.ytScreen && this.ytScreen.removePanel(this)
    }
  }
</script>
