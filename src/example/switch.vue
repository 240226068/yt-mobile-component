<template>
  <yt-page title="switch">
    <yt-switch label="按钮在右侧" v-model="open"></yt-switch>
    <yt-split></yt-split>
    <yt-switch label="按钮紧挨文字" v-model="open2" closely></yt-switch>
  </yt-page>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'switch-example',
    data() {
      return {
        open: true,
        open2: false
      }
    }
  }
</script>

<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
</style>
