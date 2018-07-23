<template>
  <ul>
    <li style="line-height: 45px; font-size: 14px;" v-for="i in 5" :key="i">这是一段测试内容</li>
    <yt-strcky top="20px">
      这个是标题
    </yt-strcky>
    <li style="line-height: 45px; font-size: 14px;" v-for="i in 20" :key="i">这是一段测试内容</li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
