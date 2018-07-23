<template>
  <sup :class="['yt-badge', `yt-badge__${Theme}`, _type ? `yt-badge__${_type}` : '', {'is-dot': _isDot}]" v-if="_show">
    {{val}}
  </sup>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'yt-badge',
    props: {
      /**
       * badge 对象{type, num, text, max, isDot}
       */
      badge: {
        type: Object,
        default: null
      },
      /**
       * 角标风格类型 取值有  primary || success || warning || danger || info
       */
      type: {
        type: String,
        default: ''
      },
      /**
       * 角标数值
       */
      num: {
        type: Number,
        default: 0
      },
      /**
       * 角标文字
       */
      text: {
        type: String,
        default: ''
      },
      /**
       * 角标最大值，超过最大值一律为max+
       */
      max: {
        type: Number,
        default: 99
      },
      /**
       * 是否为原点
       */
      isDot: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      _type() {
        return (this.badge && this.badge.type) || this.type
      },
      _isDot() {
        return (this.badge && this.badge.isDot) || this.isDot
      },
      _show() {
        return (this.badge && (this.badge.isDot || this.badge.text || this.badge.num)) || (this.isDot || this.text || this.num)
      },
      val() {
        if (this.isDot || (this.badge && this.badge.isDot)) return ''
        if (this.text || (this.badge && this.badge.text)) return this.text
        let num = (this.badge && this.badge.num) || this.num
        let max = (this.badge && this.badge.max) || this.max
        if (num < max) {
          return num
        } else {
          return max + '+'
        }
      }
    }
  }
</script>
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  @import "../../style/var"
  @import '../../style/mixins/badge'
  .yt-badge
    position absolute
    top badge_top
    left badge_left
    display inline-block
    vertical-align super
    text-align center
    white-space nowrap
    font-weight normal
    line-height badge_height
    height badge_height
    font-size badge_fontSize
    border-radius badge_borderRadius
    padding 0 badge_paddingHorizontal
    transform translateX(-50%) translateY(-50%)
    badge_variant(primary, badge_primary_color, badge_primary_fill)
    badge_variant(success, badge_success_color, badge_success_fill)
    badge_variant(warning, badge_warning_color, badge_warning_fill)
    badge_variant(danger, badge_danger_color, badge_danger_fill)
    badge_variant(info, badge_info_color, badge_info_fill)
    &.is-dot
      padding 0
      border 0
      top badge_dot_top
      left badge_dot_left
      width badge_dot_size
      height badge_dot_size
      border-radius badge_dot_borderRadius
</style>
