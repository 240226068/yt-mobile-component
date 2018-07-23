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
      avatar: {
        type: String
      },
      font: {
        type: String
      },
      src: {
        type: String
      },
      text: {
        type: String
      },
      click: {},
      badge: {}
    },
    methods: {
      handlerClick(e) {
        !this.click || this.click(e)
      }
    }
  }
</script>
