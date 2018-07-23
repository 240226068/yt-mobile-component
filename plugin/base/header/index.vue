<template>
  <div class="yt-header" :class="[
    `yt-header__${type || Theme}`,
    {
      'is-shadow': shadow
    }
  ]">
    <transition name="yt-fade">
      <div class="yt-header-text" v-if="!input && !$slots.default" v-text="title"></div>
    </transition>
    <div class="yt-header-wrapper">
      <div>
        <!--@slot head-left-->
        <slot name="left"></slot>
        <header-btn v-for="(item, index) in leftData" :data="item" :key="index"></header-btn>
      </div>
      <div class="yt-header-center">
        <transition name="yt-fade">
          <div class="yt-header-bar" v-show="!input && $slots.default">
            <!-- @slot titlebar -->
            <slot></slot>
          </div>
        </transition>
        <transition name="yt-header-input-scale">
          <div v-if="input" class="yt-header-inputbox" :class="[
              `yt-header-inputbox__${origin}`,
              `yt-header-inputbox__${Theme}`
            ]">
            <input class="yt-header-inputbox-input" v-model="key" placeholder="搜索" type="text" ref="input">
            <i @click="key = ''" class="yt-header-inputbox-clear iconfont icon-input-close" v-if="key"></i>
          </div>
        </transition>
      </div>
      <div>
        <!--@slot head-right-->
        <slot name="right"></slot>
        <header-btn v-for="(item, index) in rightData" :data="item" :key="index"></header-btn>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import { throttle } from '../../utils'
  import headerBtn from './headerBtn'

  export default {
    name: 'yt-header',
    components: {
      headerBtn
    },
    data() {
      return {
        key: this.search
      }
    },
    props: {
      /**
       * 导航左侧的按钮
       * 例如 [{ font: 'iconfont icon-back', text: '返回',  click: () => {}}]
       */
      leftData: {
        type: Array,
        default() {
          return [ {
            font: 'iconfont icon-back',
            click: () => {
              this.$router.$back()
            }
          } ]
        }
      },
      /**
       * 导航左侧的按钮
       * 例如 [{ font: 'iconfont icon-search',  click: () => {}}]
       */
      rightData: {
        type: Array,
        default() {
          return []
        }
      },
      /**
       * 是否有阴影
       */
      shadow: {
        type: Boolean,
        default: true
      },
      /**
       * 导航中间显示的文字
       */
      title: String,
      /**
       * 导航中input的缩放原点位置  默认缩放原点在右侧
       */
      origin: {
        type: String,
        default: 'right'
      },
      /**
       *  导航中搜索框默认文字
       */
      search: {
        type: String,
        default: ''
      },
      /**
       *  控制导航中input的显示与否
       */
      input: {
        type: Boolean,
        default: false
      },
      /**
       * 是否开启截流
       */
      throttle: {
        type: Boolean,
        default: true
      },
      /**
       * 风格
       */
      type: {
        type: String,
        default: null
      }
    },
    watch: {
      'input'() {
        if (this.input) {
          this.$nextTick(() => {
            this.$refs.input.focus()
          })
        }
      },
      'search'(val) {
        this.key = val
      },
      'key'(val) {
        if (!this.throttle) {
          /**
           * 搜索文字变化事件
           * @event search-change
           */
          this.$emit('search-change', val)
          return
        }
        if (!this._throttleInstance) {
          const fn = (val) => {
            /**
             * 搜索文字变化事件
             * @event search-change
             */
            this.$emit('search-change', val)
          }
          this._throttleInstance = throttle(fn, 500, 2000)
        }
        this._throttleInstance(val)
      }
    }
  }
</script>
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  @import '../../style/var'
  @import '../../style/mixins/header'
  header_variant(siample, #333, #fff)
  header_variant(transparents, #fff, transparent)

  .yt-header
    position relative
    z-index 10
    height header_height
    padding-top header_status_height
    font-size 0
    &.is-shadow
      box-shadow 0px 1px 2px rgba(0, 0, 0, 0.1)
    &-text
      line-height header_height
      font-size header_text_fontSize
      text-align center
      overflow hidden
      padding 0 header_text_paddingHorizontal
      transition fade_transition

    &-wrapper
      display flex
      align-items center
      text-align center
      position absolute
      left 0
      right 0
      bottom 0
      height header_height

    &-center
      flex 1
      height 100%
      display flex
      align-items center
      justify-content center
      text-align center
      overflow hidden

    &-bar
      position absolute
      top 50%
      left 50%
      transform translate3d(-50%, -50%, 0)

  .yt-header-inputbox
    position relative
    flex 1
    display flex
    padding 0 header_input_paddingHorizontal
    height header_clear_height
    font-size header_input_size
    transition md_fade_transition
    &-input
      position relative
      flex 1
      outline none
      box-sizing border-box
      border-style solid
      border-radius 0
      color header_input_color
      background header_input_fill
      border-width header_input_borderWidth
      border-color header_input_borderColor
      height header_clear_height
      font-size header_input_size
      padding-right header_input_paddingRight
      transition md_fade_transition
      &::-webkit-input-placeholder
        font-size header_input_size
        color header_inputholder_color
      &:focus
        outline none
        border-width header_input_borderWidth
        border-color header_input_borderColor
    &-clear
      position absolute
      top header_clear_top
      right header_clear_right
      font-size header_clear_size
      color header_clear_fill
    &__right
      transform-origin right top
    &__left
      transform-origin left top
</style>
