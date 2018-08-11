<template>
  <yt-page title="Radio">
    <yt-cell label="基础用法">
      <yt-radio label="一般隐患" name="一般隐患" v-model="select"></yt-radio>
      <yt-radio label="重大隐患" name="重大隐患" v-model="select"></yt-radio>
    </yt-cell>
    <yt-cell label="块级用法"></yt-cell>
    <yt-radio label="北京" name="北京" v-model="select" :inline="false" disabled></yt-radio>
    <yt-radio label="山西" name="山西" v-model="select" :inline="false"></yt-radio>
    <yt-radio label="天津" name="天津" v-model="select" :inline="false"></yt-radio>
    <yt-cell label="按钮在左侧"></yt-cell>
    <yt-radio label="北京" name="北京" v-model="select" pos="left" :inline="false" disabled></yt-radio>
    <yt-radio label="山西" name="山西" v-model="select" pos="left" :inline="false"></yt-radio>
    <yt-radio label="天津" name="天津" v-model="select" pos="left" :inline="false"></yt-radio>
  </yt-page>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Radio-example',
    data() {
      return {
        select: ''
      }
    }
  }
</script>

<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
</style>
