<template>
  <yt-page title="tabs">
    <yt-tabs v-model="page">
      <yt-tab-panel text="待巡检" :badge="{value: 10}">待巡检</yt-tab-panel>
      <yt-tab-panel text="巡检中" :badge="{isDot: true}">巡检中</yt-tab-panel>
      <yt-tab-panel text="已巡检">已巡检</yt-tab-panel>
      <yt-tab-panel text="待维修">待维修</yt-tab-panel>
      <yt-tab-panel text="维修中">维修中</yt-tab-panel>
      <yt-tab-panel text="已维修">已维修</yt-tab-panel>
    </yt-tabs>
  </yt-page>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        page: 0
      }
    }
  }
</script>

<style scoped>
</style>
