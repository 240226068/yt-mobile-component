<template>
  <yt-btn @click="handlerClick" class="yt-tag" :ripple="false" :size="size" plain>
    <slot></slot>
    <i v-if="closable" @click.stop.prevent="handlerClickClose" class="yt-tag-close iconfont icon-input-close"></i>
  </yt-btn>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'yt-tag',
    props: {
      /**
       * 是否显示关闭按钮
       */
      closable: Boolean,
      /**
       * tag大小 取值  block || medium || small || mini
       */
      size: {
        type: String,
        default: 'mini'
      }
    },
    methods: {
      handlerClick(e) {
        this.$emit('click', e)
      },
      handlerClickClose(e) {
        this.$emit('tag-close', e)
      }
    }
  }
</script>
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .yt-tag-close
    font-size 14px
    margin-left 2px

  .yt-tag + .yt-tag
    margin-left 5px
</style>
