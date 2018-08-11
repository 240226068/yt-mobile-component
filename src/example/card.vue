<template>
  <yt-page title="card卡片" scroll>
    <yt-card title="隐患内容" :edge="false">
      <ul><li style="padding-left: 10px;line-height: 40px;" v-for="i in 5" :key="i">这是一段内容</li></ul>
    </yt-card>
    <yt-card title="隐患内容">
      <ul><li style="padding-left: 10px;line-height: 40px;" v-for="i in 5" :key="i">这是一段内容</li></ul>
    </yt-card>
    <yt-card title="隐患内容" :tag="false">
      <ul><li style="padding-left: 10px;line-height: 40px;" v-for="i in 5" :key="i">这是一段内容</li></ul>
    </yt-card>
    <yt-card @btn-click="handler" title="隐患内容" btn="查看更多内容">
      <span slot="more">更多</span>
      <ul><li style="padding-left: 10px;line-height: 40px;" v-for="i in 5" :key="i">这是一段内容</li></ul>
    </yt-card>
  </yt-page>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      handler() {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
