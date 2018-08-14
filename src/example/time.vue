<template>
  <yt-page title="time">
    <yt-cell label="选择时间">
      <yt-cell-time v-model="time"></yt-cell-time>
    </yt-cell>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        time: ''
      }
    }
  }
</script>
<style scoped>
</style>
