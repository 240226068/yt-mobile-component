<template>
  <div class="page" title="switch">
    <yt-split></yt-split>
    <yt-switch label="打开消息通知" v-model="open"></yt-switch>
    <yt-split></yt-split>
    <yt-switch label="打开消息通知" v-model="open2" inline></yt-switch>
    <yt-split></yt-split>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'switch-example',
    data: () => ({
      open: true,
      open2: false
    })
  }
</script>
<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
</style>
