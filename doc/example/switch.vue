<template>
  <yt-page title="switch">
    <yt-cell title="文字响应事件"></yt-cell>
    <yt-switch label="打开消息通知" v-model="open"/>
    <yt-cell title="文字不响应事件"></yt-cell>
    <yt-cell title="打开消息通知">
      <yt-switch style="padding: 0;" v-model="open2"></yt-switch>
    </yt-cell>
    <yt-cell title="紧挨文字"></yt-cell>
    <yt-switch border="all" label="自动登录" :right="false" v-model="open3"/>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'switch-example',
    data() {
      return {
        open: true,
        open2: false,
        open3: false,
        open4: true
      }
    }
  }
</script>
<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
</style>
