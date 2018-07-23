<template>
  <yt-view class="yt-headerbtn" :centerRipple="(data.font || data.src) && !data.text" @click="handlerClick">
    <i class="yt-headerbtn-icon" v-if="data.font" :class="data.font"></i>
    <img class="yt-headerbtn-img" v-if="!data.font && data.src" :src="data.src">
    <span class="yt-headerbtn-text" v-if="data.text">{{data.text}}</span>
    <span class="yt-headerbtn-badge"><yt-badge :badge="data.badge"></yt-badge></span>
  </yt-view>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'yt-headerBtn',
    props: {
      data: Object
    },
    methods: {
      handlerClick() {
        if (this.data && this.data.click) {
          this.data.click()
        }
      }
    }
  }
</script>
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .yt-headerbtn
    display inline-block
    vertical-align middle
    &-icon
      display inline-block
      vertical-align middle
      font-size 24px
      padding 9px
    &-text
      display inline-block
      vertical-align middle
      font-size 16px
      padding 13px 10px
    &-img
      display inline-block
      vertical-align middle
      width 24px
      height 24px
      padding 9px
    &-badge
      position absolute
      right 6px
      top 5px
</style>
