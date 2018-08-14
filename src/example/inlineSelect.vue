<template>
  <yt-page title="inlineSelect">
    <yt-inlineSelect title="单选列表" v-model="select" :list="list"></yt-inlineSelect>
    <yt-split></yt-split>
    <yt-inlineSelect title="多选列表" v-model="select2" :list="list" multiple></yt-inlineSelect>
    <yt-split></yt-split>
    <yt-inlineSelect title="一行放4个" v-model="select2" :list="list" :x="4"></yt-inlineSelect>
    <yt-split></yt-split>
    <yt-inlineSelect title="最多选2个" v-model="select3" :list="list" :max="2" multiple></yt-inlineSelect>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        select: null,
        select2: [],
        select3: [],
        list: [
          {
            label: '选项一',
            value: '1'
          },
          {
            label: '选项二',
            value: '2'
          },
          {
            label: '选项三',
            value: '3'
          },
          {
            label: '选项四',
            value: '4'
          }
        ]
      }
    }
  }
</script>
<style scoped>
</style>
