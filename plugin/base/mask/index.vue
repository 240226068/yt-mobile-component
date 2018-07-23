<template>
  <transition name="yt-fade">
    <div @click.self.stop="handlerClick" class="yt-mask" :class="{'is-fixed': fixed}" v-if="visible" :style="style">
      <slot></slot>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'yt-mask',
    props: {
      /**
       * mask背景色
       */
      bgc: {
        type: String,
        default: 'rgba(7, 17, 27, 0.1)'
      },
      /**
       * mask层级
       */
      index: {
        type: Number,
        default: 1000
      },
      /**
       * mask是否显示
       */
      visible: Boolean,
      /**
       * mask是否为fixed定位
       */
      fixed: Boolean
    },
    computed: {
      style() {
        return {
          backgroundColor: this.bgc,
          zIndex: this.index
        }
      }
    },
    methods: {
      handlerClick() {
        this.$emit('update:visible', !this.visible)
      }
    }
  }
</script>
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .yt-mask
    position absolute
    top 0
    left 0
    bottom 0
    right 0
    transition opacity 300ms cubic-bezier(0.23, 1, 0.32, 1)
    backdrop-filter: blur(10px)
    &.is-fixed
      position fixed
</style>
