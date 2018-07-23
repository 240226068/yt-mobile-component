<template>
  <div class="yt-slider-row" v-clickoutside:touchstart="close" ref="wrapper">
    <div class="yt-slider-row-center" ref="center">
      <!-- @slot 定制中间的内容 -->
      <slot></slot>
    </div>
    <div @click.prevent.stop="close" class="yt-slider-row-buttons" ref="right">
      <!-- @slot 定制侧滑右侧的内容 -->
      <slot name="right">
        <div class="yt-slider-row-button" v-for="(item, index) in items" :class="`is-${item.type}`" :key="index"
             @click="handlerClick(item)">{{item.text}}
        </div>
      </slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { clickoutside, PackingEvent } from '../../utils'
  const TRANSITION = 'transition: all .2s ease;'
  export default {
    name: 'yt-cellSwipe',
    directives: {clickoutside},
    props: {
      /**
       * 是否禁用
       */
      disabled: {
        type: Boolean,
        default: false
      },
      /**
       * 当前行的数据 点击事件会回传
       */
      data: [String, Number, Object],
      /**
       * 右侧的btn集合 [text, type, click]
       */
      items: Array
    },
    data () {
      return {
        X: 0
      }
    },
    methods: {
      _move(e) {
        this._setMoveCell(e.deltaMoveX)
      },
      _end(e) {
        if (e.direction === PackingEvent.LEFT()) {
          this._setMoveCell(-this.$refs.right.offsetWidth, true)
        } else {
          this._setMoveCell(this.$refs.right.offsetWidth, true)
        }
      },
      _setMoveCell(x, isTransition) {
        let right = this.$refs.right
        let center = this.$refs.center
        x = this.X + x
        if (x < -right.offsetWidth) {
          x = -right.offsetWidth
        } else if (x > 0) {
          x = 0
        }
        right.style = `right: ${-x}px;${isTransition ? TRANSITION : ''}`
        center.style = `transform: translate3d(${x}px, 0, 0);${isTransition ? TRANSITION : ''}`
        this.X = x
      },
      close() {
        this._setMoveCell(this.$refs.right.offsetWidth, true)
      },
      handlerClick(item) {
        if (item && item.click) {
          item.click(this.data)
        }
      }
    },
    mounted() {
      this.packingEvent = new PackingEvent({
        el: this.$refs.wrapper,
        disabled: this.disabled,
        direction: PackingEvent.HORIZONTAL(),
        move: this._move,
        end: this._end
      })
    },
    watch: {
      'disabled'(val) {
        this.packingEvent.setDisabled(val)
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  @import '../../style/var'
  .yt-slider-row
    position relative
    &-buttons
      display flex
      position absolute
      top 0
      right 0
      height 100%
      transform translate3d(100%, 0, 0)
    &-button
      flex 1
      display flex
      align-items center
      justify-content center
      text-align center
      height 100%
      font-size 14px
      min-width cellSwipe_minWidth
      padding 0 cellSwipe_paddingHorizontal
      color cellSwipe_color
      &.is-primary
        background-color cellSwipe_primary_fill
      &.is-success
        background-color cellSwipe_success_fill
      &.is-warning
        background-color cellSwipe_warning_fill
      &.is-danger
        background-color cellSwipe_danger_fill
      &.is-info
        background-color cellSwipe_info_fill
</style>
