<template>
  <transition :name="transitionName">
    <keep-alive>
      <router-view class="yt-page"></router-view>
    </keep-alive>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'App',
    provide() {
      return {
        App: this
      }
    },
    data () {
      return {
        transitionName: 'yt-slider-left',
        Theme: 'LightBlue'
      }
    },
    watch: {
      '$route' (to, from) {
        if (to.meta.name) {
          this.transitionName = to.meta.name
        } else {
          this.transitionName = this.$router.$isBack ? 'yt-slider-left' : 'yt-slider-right'
        }
      }
    }
  }
</script>

<style rel="stylesheet/stylus" type="text/stylus" lang="stylus">
  @import "./css/reset.styl"
  html, body
    width 100%
    height 100%
</style>
