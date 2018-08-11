<template>
  <yt-page title="sticky粘性" scroll fillColor="#ffffff">
    <yt-sticky class="row sticky-title" top="0px">今日</yt-sticky>
    <ul>
      <li class="row" v-for="i in 10" :key="i">这是一些辅助内容</li>
    </ul>
    <yt-sticky class="row sticky-title" top="0px">昨日</yt-sticky>
    <ul>
      <li class="row" v-for="i in 10" :key="i">这是一些辅助内容</li>
    </ul>
    <yt-sticky class="row sticky-title" top="0px">三天内</yt-sticky>
    <ul>
      <li class="row" v-for="i in 10" :key="i">这是一些辅助内容</li>
    </ul>
    <yt-sticky class="row sticky-title" top="0px">一周内</yt-sticky>
    <ul>
      <li class="row" v-for="i in 10" :key="i">这是一些辅助内容</li>
    </ul>
  </yt-page>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .row
    padding: 0 10px;
    line-height 45px;
    font-size: 14px;
    color: #666666;

  .sticky-title
    color: #000000;
    background-color #f2f3f6;
</style>
