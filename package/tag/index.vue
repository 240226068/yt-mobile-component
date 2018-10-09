<template>
  <yt-btn @click="handlerClick" class="yt-tag" :ripple="false" :size="size" plain>
    <!--@slot 自定义标签内容-->
    <slot></slot>
    <i v-if="closable" @click.stop.prevent="handlerClickClose" class="yt-tag-close yt-icon icon-input-close"></i>
  </yt-btn>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-tag',
    props: {
      /**
       * 是否显示关闭按钮
       */
      closable: {
        type: Boolean,
        default: false
      },
      /**
       * tag大小 取值  medium || normal || small || mini
       */
      size: {
        type: String,
        default: 'mini'
      }
    },
    methods: {
      handlerClick(e) {
        /**
         * @event click
         * @description 点击了标签事件
         * @type {event}
         */
        this.$emit('click', e)
      },
      handlerClickClose(e) {
        /**
         * @event tag-close
         * @description 点击了表情关闭事件
         * @type {event}
         */
        this.$emit('tag-close', e)
      }
    }
  }
</script>
