<template>
  <yt-view @click="handlerClick" class="yt-tabbar-item" :class="{'is-active': active}">
    <span class="yt-tabbar-core">
      <i v-if="panel && panel.font" class="yt-tabbar-icon" :class="panel.font"></i>
      <img v-if="panel && panel.src" class="yt-tabbar-img" :src="panel.src"/>
      <p v-if="panel && panel.text" class="yt-tabbar-text">{{panel.text}}</p>
      <yt-badge v-if="panel && panel.badge" class="yt-tabbar-badge" v-bind="panel.badge"></yt-badge>
    </span>
  </yt-view>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-tabbar-item',
    props: {
      panel: {},
      active: {
        type: Boolean
      }
    },
    methods: {
      handlerClick(e) {
        this.$emit('click', e)
      }
    }
  }
</script>
