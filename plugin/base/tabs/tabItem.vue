<template>
  <div @click="handlerClick" class="yt-tabs-tab" :class="[
    pos === 'bottom' ? `yt-tabs-tab__${tabbarType}` : '',
    `yt-tabs-tab__${pos}`,
    {'is-active': active}
  ]">
    <div class="yt-tabs-tab-box">
      <i class="yt-tabs-tab-font" v-if="options && options.font" :class="options.font"></i>
      <img class="yt-tabs-tab-img" v-if="options && (!options.font && options.src && options.activeSrc)"
           :src="active ? options.activeSrc : options.src">
      <yt-badge class="yt-tabs-tab-badge" v-if="options && options.badge" :badge="options.badge"></yt-badge>
    </div>
    <p class="yt-tabs-tab-label">{{options.label}}</p>
  </div>
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
        default() {
          return {}
        }
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
    computed: {
      tabbarType() {
        return this.ytTab.tabbarType
      },
      pos() {
        return this.ytTab.pos
      }
    }
  }
</script>
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  @import '../../style/var'
  .yt-tabs-tab
    color #aaaaaa
    text-align center
    &__scale.is-active
      .yt-tabs-tab-box
        padding 10px
        box-shadow 0 -5px 12px 0 rgba(0, 0, 0, 0.1)
        transform translate3d(0, -10px, 0)
      .yt-tabs-tab-label
        font-size 16px
        transform translate3d(0, -10px, 0)
    &__bottom
      flex 1
      height 100%
      .yt-tabs-tab
        &-box
          position relative
          display inline-block
          padding 5px
          margin-top 2px
          border-radius 50%
          transition all .3s ease
          background-color #ffffff
        &-font
          font-size 24px
        &-img
          display inline-block
          width 24px
          height 24px
        &-label
          font-size 14px
          transition all .3s ease
        &-badge
          top 0
          transform translateX(0) translateY(0)
</style>
