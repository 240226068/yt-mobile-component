<template>
  <yt-view class="yt-gridItem" @click="handlerClick">
    <span class="yt-gridItem-wrapper">
      <!--@slot 自定义内容-->
      <slot></slot>
      <yt-badge v-if="badge" v-bind="badge"></yt-badge>
      <i class="yt-gridItem-icon" v-if="font" :class="font"></i>
      <img class="yt-gridItem-img" v-if="img" :src="img">
      <p class="yt-gridItem-desc">{{text}}</p>
    </span>
  </yt-view>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-gridItem',
    props: {
      /**
       *  角标 { value, isDot, max}
       */
      badge: {
        type: Object,
        default: null
      },
      /**
       * 字体的class名称
       */
      font: {
        type: String,
        default: ''
      },
      /**
       * 图片的url路径
       */
      img: {
        type: String,
        default: ''
      },
      /**
       * 显示的文字
       */
      text: {
        type: String,
        default: ''
      }
    },
    methods: {
      handlerClick(e) {
        /**
         * @event click
         * @description 点击事件
         * @type {event}
         */
        this.$emit('click', e)
      }
    }
  }
</script>
