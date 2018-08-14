<template>
  <yt-page title="loading">
    <yt-btn @click="doLoading">打开loading</yt-btn>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  import { Loading, delayed } from '../../package'

  export default {
    methods: {
      doLoading() {
        Loading(delayed(2000), delayed(4000))
      }
    }
  }
</script>
<style scoped>
</style>
