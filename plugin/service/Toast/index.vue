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
