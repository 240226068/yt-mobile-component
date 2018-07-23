<template>
  <yt-view
    class="yt-button" @click="handlerClick" :ripple="ripple"
    :class="[
      type ? '' : `yt-button__${Theme}`,
      type ? 'yt-button__' + type : '',
      size ? 'yt-button__' + size : '',
      {
        'is-simple': simple,
        'is-edge': edge,
        'is-disabled': disabled,
        'is-loading': loading && InLoading,
        'is-plain': plain,
        'is-circle': circle,
        'is-round': round
      }
    ]">
    <i v-if="icon" class="yt-button-icon" :class="icon"></i>
    <i v-if="loading && InLoading" class="yt-button-loading iconfont icon-loader"></i>
    <!-- @slot 自定义 -->
    <span v-if="$slots.default"><slot></slot></span>
  </yt-view>
</template>

<script type="text/ecmascript-6">
  import { validator } from '../../utils'

  export default {
    name: 'yt-btn',
    inject: {
      ytForm: {
        default: null
      }
    },
    props: {
      /**
       * 简单按钮
       */
      simple: {
        type: Boolean,
        default: false
      },
      /**
       * 是否贴边  （没有margin border）
       */
      edge: {
        type: Boolean,
        default: false
      },
      /**
       * btn类型 // default || primary || success || warning || danger || info \\ simple
       */
      type: {
        type: String,
        default: ''
      },
      /**
       * 按钮尺寸 block || medium || small || mini
       */
      size: {
        type: String,
        default: 'block'
      },
      /**
       * 是否禁用btn
       */
      disabled: Boolean,
      /**
       * loading时执行的函数
       */
      loading: {
        type: Function,
        default: null
      },
      /**
       * 是否为朴素状态
       */
      plain: {
        type: Boolean,
        default: false
      },
      /**
       * 是否圆角按钮
       */
      round: {
        type: Boolean,
        default: false
      },
      /**
       * 是否圆形按钮
       */
      circle: {
        type: Boolean,
        default: false
      },
      /**
       * 图标类名
       */
      icon: {
        type: String
      },
      /**
       * 是否进行表单校验
       */
      validator: {
        type: Boolean,
        default: false
      },
      /**
       * 水波效果
       */
      ripple: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        InLoading: false
      }
    },
    methods: {
      async handlerClick(e) {
        if (!this.loading) {
          /**
           * 点击事件
           * @event click
           */
          this.$emit('click', e)
          return
        }
        if (!this.InLoading) {
          this.InLoading = true
          const fn = () => { this.InLoading = false }
          if (this.validator && this.ytForm) {
            let { model, rules } = this.ytForm
            let res = await validator(model, rules)
            res.success ? this.loading(fn) : fn()
          } else {
            this.loading(fn)
          }
        }
      }
    }
  }
</script>
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  @import '../../style/var'
  @import '../../style/mixins/button'
  button_size(block, button_block_paddingVertical, button_block_paddingHorizontal, button_block_fontSize, button_block_borderRadius)
  button_size(normal, button_paddingVertical, button_paddingHorizontal, button_fontSize, button_borderRadius)
  button_size(medium, button_medium_paddingVertical, button_medium_paddingHorizontal, button_medium_fontSize, button_medium_borderRadius)
  button_size(small, button_small_paddingVertical, button_small_paddingHorizontal, button_small_fontSize, button_small_borderRadius)
  button_size(mini, button_mini_paddingVertical, button_mini_paddingHorizontal, button_mini_fontSize, button_mini_borderRadius)
  button_variant(default, button_default_color, button_default_fill, button_default_border)
  button_variant(primary, button_primary_color, button_primary_fill, button_primary_border)
  button_variant(success, button_success_color, button_success_fill, button_success_border)
  button_variant(warning, button_warning_color, button_warning_fill, button_warning_border)
  button_variant(danger, button_danger_color, button_danger_fill, button_danger_border)
  button_variant(info, button_info_color, button_info_fill, button_info_border)

  .yt-button
    position relative
    display inline-block
    vertical-align middle
    line-height 1.4em
    white-space nowrap
    cursor pointer
    -webkit-appearance: none
    text-align center
    box-sizing border-box
    outline none
    margin 0
    transition .1s
    user-select none
    overflow hidden
    border-width 1px
    border-style solid
    font-weight button_fontWeight
    &__block
      display block
      margin button_block_margin
    &.is-edge
      margin 0
      border-radius 0
    &.is-circle
      line-height 1em
      font-size button_circle_fontSize
      border-radius button_circle_borderRadius
      padding button_circle_padding
    &.is-loading
    &.is-disabled
      pointer-events none
      &:before
        pointer-events none
        content ''
        position absolute
        left -1px
        top -1px
        right -1px
        bottom -1px
        border-radius inherit
        background-color rgba(255, 255, 255, .35)
    &-loading
      display inline-block
      font-size button_circle_fontSize
      animation rotation 2s linear infinite
    &-icon
      display inline-block
      vertical-align middle

  @keyframes rotation
    from
      transform rotate(0deg)
    to
      transform rotate(360deg)
</style>
