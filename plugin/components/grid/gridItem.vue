<template>
  <yt-view class="yt-gridItem" @click="handlerClick">
    <span class="yt-gridItem-wrapper">
      <slot></slot>
      <yt-badge v-if="data.badge" v-bind="data.badge"></yt-badge>
      <i class="yt-gridItem-icon" v-if="data.font" :class="data.font"></i>
      <img class="yt-gridItem-img" v-if="data.img" :src="data.img">
      <p class="yt-gridItem-desc">{{data.text}}</p>
    </span>
  </yt-view>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'yt-gridItem',
    props: {
      data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      handlerClick() {
        this.$emit('click', this.data)
      }
    }
  }
</script>
