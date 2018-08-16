<template>
  <yt-page title="tabbar">
    <yt-tabbar v-model="page">
      <yt-tabbar-panel text="首页" font="iconfont icon-main"></yt-tabbar-panel>
      <yt-tabbar-panel text="个人" font="iconfont icon-person">这里是个人</yt-tabbar-panel>
      <yt-tabbar-panel text="好友" font="iconfont icon-main">这里是好友</yt-tabbar-panel>
      <yt-tabbar-panel text="功能菜单" font="iconfont icon-menu">这里是功能菜单</yt-tabbar-panel>
    </yt-tabbar>
  </yt-page>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        page: 0,
        page2: 0,
        center: false
      }
    },
    methods: {
      handler() {
        console.log('点击了快捷键')
      }
    }
  }
</script>
