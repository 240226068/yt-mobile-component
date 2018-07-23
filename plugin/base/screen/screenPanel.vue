<template>
  <div class="yt-full" v-show="show">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    inject: {
      ytScreen: {
        default: () => {
          return {}
        }
      }
    },
    props: {
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

