<template>
  <div class="yt-button-group" :class="{
    'is-edge': edge,
    'is-simple': simple
  }">
    <slot></slot>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'yt-btnGroup',
    props: {
      edge: {
        type: Boolean,
        default: false
      },
      simple: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .yt-button-group
    position relative
    display flex
    padding 10px 5px
    z-index 10
    &.is-simple
      box-shadow 0 0 20px rgba(0, 0, 0, 0.1)
      .yt-button
        border-left 1px solid currentColor
        border-right 1px solid currentColor
        &:first-child
          border-left 0
        &:last-child
          border-right 0
    &.is-edge
      padding 0
      .yt-button
        flex 1
        margin 0
        border-radius 0
    .yt-button
      flex 1
      margin 0 5px
</style>
