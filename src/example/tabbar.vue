<template>
  <yt-page title="首页">
    <yt-tabbar :slider="false" @quick-click="handler" v-model="page" :quick="2">
      <yt-tabbar-panel text="首页" font="iconfont icon-main">
        <yt-tabs v-model="page2">
          <yt-tab-panel text="待签收" :badge="{value: 15}">
            <yt-noInfo></yt-noInfo>
          </yt-tab-panel>
          <yt-tab-panel text="巡检中">巡检中</yt-tab-panel>
          <yt-tab-panel text="已巡检" :badge="{isDot: true}">已巡检</yt-tab-panel>
        </yt-tabs>
      </yt-tabbar-panel>
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
        page2: 0
      }
    },
    methods: {
      handler() {
        console.log('点击了快捷键')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
