<template>
  <yt-view @click="doClick" class="yt-tab-custom-btn" :class="`yt-bg__${Theme}`">
    <i class="yt-tab-custom-btn-add iconfont icon-increase"></i>
  </yt-view>
</template>

<script type="text/ecmascript-6">
  export default {
    inject: {
      ytTab: {
        default: () => {
          return {}
        }
      }
    },
    methods: {
      doClick(e) {
        if (this.ytTab) {
          this.ytTab.$emit('custom-click', e)
        }
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .yt-tab-custom-btn
    width 75px
    height 55px
    line-height 55px
    text-align center
    &-add
      font-size 24px
      color #ffffff
</style>
