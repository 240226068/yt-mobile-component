<template>
  <transition name="yt-slider-top">
    <div class="yt-toast" :class="`is-${type}`" v-if="showToast">
      <div class="yt-toast-opacity"></div>
      <i class="yt-toast-icon" :class="font"></i>
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
    data() {
      return {
        showToast: false,
        msg: 'hello world',
        type: TYPE.TOOL
      }
    },
    methods: {
      show(msg, type = TYPE.SUCCESS, time = 1000) {
        if (!msg) return
        this.msg = msg
        this.type = type
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
