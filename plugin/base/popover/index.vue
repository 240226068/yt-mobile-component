<template>
  <div class="yt-popover">
    <yt-mask bgc="rgba(7, 17, 27, 0.3)" v-if="!hideMask" :fixed="fixed" :visible.sync="_visible"/>
    <transition :name="transitionName">
      <div class="yt-popover-body" :class="[`is-${pos}`, fixed ? 'is-fixed' : '']" v-if="_visible">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'yt-popover',
    props: {
      /**
       * 控制弹出的显示   例如 :visible="XXX"    如果需要点击 遮罩层自动关闭弹出层的话  采用 :visible.sync="XXX"
       */
      visible: {
        type: Boolean,
        default: false
      },
      /**
       * 弹出层的位置   具体的取值有 'top' || 'bottom' || 'left' : 'right'
       */
      pos: {
        type: String,
        default: 'bottom'
      },
      /**
       * 是否为fixed定位
       */
      fixed: {
        type: Boolean,
        default: false
      },
      /**
       * 异常mask
       */
      hideMask: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      _visible: {
        get() {
          return this.visible
        },
        set(visible) {
          this.$emit('update:visible', visible)
        }
      },
      transitionName() {
        return `yt-pop-slider-${this.pos}`
      }
    }
  }
</script>
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  @import '../../style/var';
  .yt-popover-body
    position absolute
    overflow hidden
    z-index popover_index
    background popover_fill
    transition all_transition
    box-shadow 0px 1px 20px rgba(0,0,0,0.2)
    &.is-fixed
      position fixed
    &.is-bottom
      bottom 0
      left 0
      right 0
    &.is-top
      top 0
      left 0
      right 0
    &.is-right
      top 0
      bottom 0
      right 0
      width popover_horizontal_width
    &.is-left
      top 0
      bottom 0
      left 0
      width popover_horizontal_width
</style>
