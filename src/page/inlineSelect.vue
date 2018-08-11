<template>
  <yt-page title="inlineSelect">
    <yt-inlineSelect title="隐患内容" v-model="select" :list="list"></yt-inlineSelect>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        select: null,
        list: [
          {
            label: "选项一",
            value: "1"
          },
          {
            label: "选项二",
            value: "2"
          },
          {
            label: "选项三",
            value: "3"
          },
          {
            label: "选项四",
            value: "4"
          }
        ]
      }
    }
  }
</script>
<style scoped>
</style>
