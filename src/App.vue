<template>
  <transition :name="transitionName">
    <keep-alive>
      <router-view class="page"></router-view>
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
    data() {
      return {
        transitionName: 'yt-slider-left'
      }
    },
    watch: {
      '$route'(to, from) {
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
    position relative
    width 100%
    height 100%
    overflow hidden
</style>

<style scoped>
  .page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    overflow: hidden;
  }
</style>
