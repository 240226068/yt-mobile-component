<template>
  <yt-view class="yt-grid-item" @click="handlerClick">
    <span class="yt-grid-item-wrapper">
      <slot></slot>
      <yt-badge v-if="data.badge" :type="data.badge.type" :num="data.badge.num" :text="data.badge.text" :max="data.badge.max" :color="data.badge.color" :isDot="data.badge.isDot"></yt-badge>
      <i class="yt-grid-item-icon" v-if="data.font" :class="`${data.font} yt-icon__${Theme}`"></i>
      <img class="yt-grid-item-img" v-if="data.img" :src="data.img">
      <p class="yt-grid-item-desc">{{data.text}}</p>
    </span>
  </yt-view>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'yt-gridItem',
    props: {
      data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      handlerClick() {
        this.$emit('click', this.data)
      }
    }
  }
</script>
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  @import '../../style/var'
  .yt-grid-item
    width 100%
    height 100%
    display flex
    align-items center
    justify-content center
    text-align center
    overflow hidden
    background #ffffff
    &-wrapper
      position relative
      z-index 100
    &-icon
      font-size 30px
    &-img
      width 30px
      height 30px
    &-desc
      margin-top 5px
      font-size 14px
      color #808080

</style>
