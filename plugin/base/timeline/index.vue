<template>
  <div class="yt-timeline">
    <div class="yt-timeline-wrapper" :class="`yt-timeline-wrapper__${Theme}`" v-for="(item, index) in list" :key="index">
      <span class="yt-timeline-core" :class="{'is-current': index === 0}"></span>
      <div class="yt-timeline-row yt-border-all">
        <!-- @slot 定制左侧样式-->
        <slot :data="item">
          <p class="yt-timeline-desc">{{item.desc}}</p>
          <p class="yt-timeline-time">{{item.time | formatTime}}</p>
        </slot>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'yt-timeline',
    props: {
      /**
       * 数据列表 [{time, desc}]
       */
      list: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  @import '../../style/var'
  .yt-timeline
    &-row
      padding 4px 0
    &-desc
      font-size font_size_large
      color timeline_desc_color
      line-height timeline_desc_lineHeight
    &-time
      margin-top 4px
      line-height timeline_time_lineHeight
      font-size timeline_time_fontSize
      color timeline_time_color

    .yt-timeline-wrapper:first-of-type
      &::before
        display none

    .yt-timeline-wrapper:last-of-type
      &::after
        display none

    &-wrapper
      position relative
      box-sizing border-box
      padding-left timeline_paddingLeft
      background-color timeline_fill
      &::before
        content ' '
        display inline-block
        position absolute
        top 0
        left timeline_line_left
        height timeline_line_node
        width timeline_line_width
      &::after
        content ' '
        display inline-block
        position absolute
        bottom 0
        top timeline_line_node
        left timeline_line_left
        width timeline_line_width

    &-core
      position absolute
      display inline-block
      top timeline_core_default_top
      left timeline_core_default_left
      border-radius timeline_core_default_borderRadius
      width timeline_core_default_size
      height timeline_core_default_size
      z-index 10
      &.is-current
        left timeline_core_active_left
        top timeline_core_active_top
        width timeline_core_active_size
        height timeline_core_active_size
        border-radius timeline_core_active_borderRadius
        border-width timeline_core_active_borderSize
        border-style solid
</style>
