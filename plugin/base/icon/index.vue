<template>
  <yt-view class="yt-icon-wrapper" @click="handlerClick" :centerRipple="true">
    <div class="yt-icon" :class="`yt-icon__${Theme}`">
      <i class="yt-icon_font" v-if="font" :style="color ? `color: ${color}` : ''" :class="[font,`is-${size}`]"></i>
      <img class="yt-icon_img" :class="`is-${size}`" v-if="src" :src="src"></div>
  </yt-view>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'yt-icon',
    props: {
      size: {
        type: String,
        default: 'normal'
      },
      color: String,
      src: String,
      font: String
    },
    methods: {
      handlerClick (e) {
        this.$emit('click', e)
      }
    }
  }
</script>
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .yt-icon-wrapper
    display inline-block
    vertical-align middle

  .yt-icon
    display flex
    width 44px
    height 44px
    align-items center
    justify-content center
    &_font
      &.is-normal
        font-size 24px
      &.is-small
        font-size 14px
    &_img
      &.is-normal
        margin 10px
        width 24px
        height 24px
      &.is-small
        width 14px
        height 14px
</style>
