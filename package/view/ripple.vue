<template>
  <transition name="yt-ripple">
    <div class="yt-ripple" :style="styles"></div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { merge } from '../utils'

  export default {
    name: 'yt-ripple',
    props: {
      mergeStyle: {
        type: Object,
        default() {
          return {}
        }
      },
      color: {
        type: String,
        default: ''
      },
      opacity: {
        type: Number
      }
    },
    computed: {
      styles() {
        return merge({}, { color: this.color, opacity: this.opacity }, this.mergeStyle)
      }
    }
  }
</script>
