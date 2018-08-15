<template>
  <yt-page title="cellRadio">
    <yt-form>
      <yt-cell label="整改完成">
        <yt-cell-radio :list="list" label="label" val="id" v-model="select"/>
      </yt-cell>
    </yt-form>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        select: null,
        list: [
          {
            label: '北京',
            id: 1
          },
          {
            label: '上海',
            id: 2
          }
        ]
      }
    }
  }
</script>
<style scoped>
</style>
