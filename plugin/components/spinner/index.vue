<template>
  <span class="yt-spinner" :class="[`yt-spinner__${type}`]" :style="styles"></span>
</template>

<script>
  import Spinner from './spinner'

  export default {
    name: 'yt-spinner',
    mounted() {
      Spinner(this.$el, this.type, this.size)
    },
    props: {
      /**
       * spinner的类型  取值有 'android', 'ios', 'ios-small', 'bubbles', 'circles', 'crescent', 'dots', 'lines', 'ripple', 'spiral'
       */
      type: {
        type: String,
        default: 'ios'
      },
      /**
       * spinner的大小
       */
      size: {
        type: String,
        default: '28px'
      }
    },
    computed: {
      styles() {
        return {
          width: this.size,
          height: this.size
        }
      }
    }
  }
</script>
