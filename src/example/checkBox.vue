<template>
  <yt-page title="checkbox" scroll>
    <yt-cell label="基础用法"></yt-cell>
    <yt-checkBox v-model="select" name="北京" label="北京" disabled></yt-checkBox>
    <yt-checkBox v-model="select" name="天津" label="天津"></yt-checkBox>
    <yt-checkBox v-model="select" name="山西" label="山西"></yt-checkBox>
    <yt-cell label="按钮为简单样式"></yt-cell>
    <yt-checkBox v-model="select" name="北京" label="北京" pos="right" simple></yt-checkBox>
    <yt-checkBox v-model="select" name="天津" label="天津" pos="right" simple></yt-checkBox>
    <yt-checkBox v-model="select" name="山西" label="山西" pos="right" simple></yt-checkBox>
    <yt-cell label="inline状态"></yt-cell>
    <yt-checkBox inline v-model="select" name="北京" label="北京"></yt-checkBox>
    <yt-checkBox inline v-model="select" name="天津" label="天津"></yt-checkBox>
    <yt-checkBox inline v-model="select" name="山西" label="山西"></yt-checkBox>
    <yt-cell label="check在右侧"></yt-cell>
    <yt-checkBox v-model="select" name="北京" label="北京" pos="right"></yt-checkBox>
    <yt-checkBox v-model="select" name="天津" label="天津" pos="right"></yt-checkBox>
    <yt-checkBox v-model="select" name="山西" label="山西" pos="right"></yt-checkBox>
  </yt-page>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        select: [],
        select2: []
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>
</style>
