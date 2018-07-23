<template>
  <yt-view @click="handlerClick" class="yt-tabs-tab" :class="[
    `yt-tabs-tab__${pos}`,
    {
      'is-active': active
    }]">
    <span class="yt-tabs-tab-box">
      <i class="yt-tabs-tab-font" v-if="options && options.font" :class="options.font"></i>
      <img class="yt-tabs-tab-img" v-if="options && (!options.font && options.src && options.activeSrc)"
           :src="active ? options.activeSrc : options.src">
      <span class="yt-tabs-tab-label">{{options.label}}</span>
      <yt-badge class="yt-tabs-tab-badge" v-if="options && options.badge" :num="options.badge.num"
                :isDot="options.badge.isDot"></yt-badge>
    </span>
  </yt-view>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-tabs-tab',
    inject: {
      ytTab: {
        default: () => {
          return {}
        }
      }
    },
    props: {
      options: {
        type: Object,
        default: {}
      },
      tabIndex: {
        type: Number
      },
      active: {
        type: Boolean
      }
    },
    methods: {
      handlerClick( e ) {
        this.$emit('click', this.tabIndex, e)
      }
    },
    mounted() {
      this.ytTab && this.ytTab.appendTabItem(this)
    },
    destroyed() {
      this.ytTab && this.ytTab.removeTabItem(this)
    },
    computed: {
      pos() {
        return this.ytTab.pos
      }
    }
  }
</script>
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .yt-tabs-tab
    color #aaaaaa
    text-align center
    &__left
      display flex
      align-items center
      height 70px
      width 100%
      padding 0 20px
      box-sizing border-box
      &.is-active
        background-color #f9f9f9
        font-weight bold
      .yt-tabs-tab
        &-box
          position relative
          display flex
          align-items center
        &-font
          font-size 24px
        &-img
          display inline-block
          vertical-align middle
          margin-right 5px
          width 22px
          height 22px
        &-label
          display inline-block
          vertical-align middle
          font-size 14px
          transition all .3s ease
        &-badge
          top 0
          transform translateX(-30%) translateY(-100%)
    &__top
      flex 1
      display flex
      align-items center
      justify-content center
      white-space nowrap
      height 100%
      &.is-active
        font-weight bold
      .yt-tabs-tab
        &-box
          margin 0 20px
          position relative
        &-font
          display inline-block
          vertical-align middle
          font-size 24px
        &-img
          display inline-block
          vertical-align middle
          margin-right 4px
          width 22px
          height 22px
        &-label
          display inline-block
          vertical-align middle
          font-size 14px
          transition all .3s ease
        &-badge
          top 0
          transform translateX(0) translateY(-50%)
</style>
