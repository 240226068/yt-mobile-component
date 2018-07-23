<template>
  <label :class="[`yt-border-${border}`, `yt-switch__${Theme}`, `${right ? 'is-right' : ''}`]" class="yt-switch">
    <!-- @slot switch描述文字-->
    <span class="yt-switch-label"><slot>{{label}}</slot></span>
    <input class="yt-switch-input" :disabled="_disabled" @change="$emit('change',currentValue)" type="checkbox"
           v-model="currentValue">
    <span class="yt-switch-core"></span>
  </label>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-switch',
    inject: {
      ytForm: {
        default: () => ({})
      }
    },
    props: {
      /**
       * 该switch是否打开
       */
      value: {
        type: Boolean,
        default: false
      },
      /**
       * 该switch描述文字
       */
      label: String,
      /**
       * border取值    可取值为  'all' || 'half' || 'none'
       */
      border: {
        type: String,
        default: 'half'
      },
      /**
       * 是否在右侧
       */
      right: {
        type: Boolean,
        default: true
      },
      /**
       * 禁用输入框
       */
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      _disabled() {
        return this.disabled || (this.ytForm || {}).disabled
      },
      currentValue: {
        get() {
          return this.value
        },
        set(val) {
          this.$emit('input', val)
        }
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import '../../style/var'
  .yt-switch
    display flex
    align-items center
    position relative
    padding 7px 15px
    font-size 14px
    color #303133
    background-color #fff
    &.is-right
      justify-content space-between
    &-label
      margin-right 8px
    &-input
      display none
      &:checked
        + .yt-switch-core
          &::before
            transform scale(0)
          &::after
            transform translateX(switch_core_circle_transformX)
    &-core
      display inline-block
      position relative
      border-width 1px
      border-style solid
      box-sizing border-box
      width switch_core_width
      height switch_core_height
      border-radius switch_core_borderRadius
      &::after, &::before
        content: " "
        position: absolute
        top 0
        left 0
        transition md_transition, fill_transition
        border-radius switch_core_circle_borderRadius
      &::after
        width switch_core_circle_size
        height switch_core_circle_size
        box-shadow: 0 1px 3px rgba(0, 0, 0, .4)
      &::before
        width switch_core_before_width
        height switch_core_before_height

</style>
