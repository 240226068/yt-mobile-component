<template>
  <yt-page title="progress">
    <yt-cell label="圆型"></yt-cell>
    <yt-progress class="circle" percent="20">20</yt-progress>
    <yt-cell label="线型"></yt-cell>
    <yt-progress class="line" type="line" percent="80">80</yt-progress>
  </yt-page>
</template>
<script>
  export default {
    name: 'progress'
  }
</script>

<style scoped>
  .circle {
    width: 100px;
  }
  .line {
    margin: 10px;
  }
</style>
