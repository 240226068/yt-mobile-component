<template>
  <transition name="yt-ripple">
    <div class="yt-circle-ripple" :style="styles"></div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {merge} from '../../utils'
  export default {
    name: 'yt-ripple',
    props: {
      mergeStyle: {
        type: Object,
        default () {
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
      styles () {
        return merge({}, {color: this.color, opacity: this.opacity}, this.mergeStyle)
      }
    }
  }
</script>

<style type="text/stylus" rel="stylesheet/stylus" lang="stylus">
  .yt-circle-ripple
    position absolute
    width 100%
    height 100%
    left 0
    top 0
    pointer-events none
    user-select none
    border-radius 50%
    background-color rgba(0, 0, 0, 0.75)
    background-clip padding-box
    opacity 0.1

  .yt-ripple-enter-active, .yt-ripple-leave-active
    transition opacity .8s ease, transform .3s ease

  .yt-ripple-enter
    transform scale(0)

  .yt-ripple-leave-active
    opacity 0 !important
</style>
