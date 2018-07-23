<template>
  <transition name="yt-slider-top">
    <div class="yt-toast" v-if="showToast">
      <div class="yt-toast-opacity"></div>
      <yt-icon class="yt-toast-icon" :class="`is-${type}`" :font="font"></yt-icon>
      <span class="yt-toast-text">{{msg}}</span>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  const TYPE = {
    SUCCESS: 'success',
    ERROR: 'error',
    TOOL: 'tool'
  }
  export default {
    name: 'yt-toast',
    computed: {
      font() {
        switch (this.type) {
          case TYPE.SUCCESS:
            return 'iconfont icon-success'
          case TYPE.ERROR:
            return 'iconfont icon-error'
          case TYPE.TOOL:
            return 'iconfont icon-tool'
          default:
            return 'iconfont icon-tool'
        }
      }
    },
    data () {
      return {
        showToast: false,
        msg: 'hello world',
        type: TYPE.TOOL
      }
    },
    methods: {
      show (options) {
        let {msg, type, time = 1000} = options
        if (!msg) return
        this.msg = msg
        this.type = type || TYPE.TOOL
        this.showToast = true
        if (this.timeout) {
          clearTimeout(this.timeout)
        }
        this.timeout = setTimeout(() => {
          this.showToast = false
        }, time)
      }
    }
  }
</script>
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .yt-toast
    position fixed
    top 0
    left 0
    width 100%
    height 44px
    line-height 44px
    display flex
    align-items center
    white-space nowrap
    z-index 1000
    padding-top 22px
    font-size 15px
    background-color #ffffff
    box-shadow 1px 0px 3px #eee
    transition transform .2s ease
    &-icon
      height 44px
      &.is-success
        color rgba(41, 240, 144, 1)
      &.is-error
        color rgba(216, 30, 6, 1)
      &.is-tool
        color rgba(18, 183, 245, 1)
    &-text
      flex 1
    &-opacity
      position absolute
      top 0
      left 0
      right 0
      height 22px
      background-color rgba(0, 0, 0, 0.2)
</style>
