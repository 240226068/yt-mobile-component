<template>
  <div class="yt-tabbar-panel">
    <slot></slot>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'yt-tabbar-panel',
    inject: {
      ytTab: {
        default: () => {
          return {}
        }
      }
    },
    props: {
      option: {
        type: Object,
        default() {
          return {}
        }
      },
      label: {
        type: String,
        default: ''
      },
      font: {
        type: String,
        default: ''
      },
      src: {
        type: String,
        default: ''
      },
      activeSrc: {
        type: String,
        default: ''
      },
      badge: {
        type: Object
      }
    },
    computed: {
      options() {
        let label = this.label || this.option.label
        let src = this.src || this.option.src
        let activeSrc = this.activeSrc || this.option.activeSrc
        let font = this.font || this.option.font
        let badge = this.badge || this.option.badge
        return {src, activeSrc, font, badge, label}
      }
    },
    mounted() {
      this.ytTab && this.ytTab.appendPanel(this)
    },
    destroyed() {
      this.ytTab && this.ytTab.removePanel(this)
    }
  }
</script>
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .yt-tabbar-panel
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    overflow-x hidden
    overflow-y auto
    &::-webkit-scrollbar
      display none
</style>
