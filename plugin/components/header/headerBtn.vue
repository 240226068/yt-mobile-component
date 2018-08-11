<template>
  <yt-view class="yt-headerBtn" :centerRipple="(font || src) && !text" :ripple="!avatar" @click="handlerClick">
    <i class="yt-headerBtn-icon" v-if="font" :class="font"></i>
    <img class="yt-headerBtn-img" v-if="src" :src="src">
    <img class="yt-headerBtn-avatar" v-if="avatar" :src="avatar">
    <span class="yt-headerBtn-text" v-if="text">{{text}}</span>
    <span class="yt-headerBtn-badge" v-if="badge"><yt-badge v-bind="badge"></yt-badge></span>
  </yt-view>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'yt-headerBtn',
    props: {
      /**
       * btn 头像时的路径
       */
      avatar: {
        type: String
      },
      /**
       * btn 为字体时候的class名称
       */
      font: {
        type: String
      },
      /**
       * btn 为图片时候的src路径
       */
      src: {
        type: String
      },
      /**
       * btn 的文字
       */
      text: {
        type: String
      },
      /**
       * btn的点击事件
       */
      click: {
        type: Function
      },
      /**
       * btn的角标属性
       */
      badge: {
        type: Object
      }
    },
    methods: {
      handlerClick(e) {
        !this.click || this.click(e)
      }
    }
  }
</script>
