<template>
  <yt-page title="Radio" :leftData="[]">
    <yt-split></yt-split>
    <div style="padding-left: 10px; font-size: 14px; display: flex; align-items: center; justify-content: space-between">
      <span>隐患等级</span>
      <span>
        <yt-radio label="北京" name="北京" v-model="select"></yt-radio>
        <yt-radio label="上海" name="上海" v-model="select"></yt-radio>
      </span>
    </div>
    <yt-split></yt-split>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'Radio-example',
    data() {
      return {
        select: '山西'
      }
    }
  }
</script>
<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .radio
    display flex
</style>
