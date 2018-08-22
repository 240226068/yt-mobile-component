<template>
  <yt-page title="loading">
    <yt-btn @click="doImport">import调用</yt-btn>
    <yt-btn @click="doThis">this调用</yt-btn>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  import { Loading, delayed } from '../../package/index'

  export default {
    methods: {
      async mock(time) {
        await delayed(time)
        return time
      },
      async doImport() {
        let p = [this.mock(2000), this.mock(4000)]
        let [time1, time2] = await Loading(...p)
        console.log(time1, time2)
      },
      async doThis() {
        let p = [this.mock(2000), this.mock(4000)]
        let [time1, time2] = await this.$Loading(...p)
        console.log(time1, time2)
      }
    }
  }
</script>
<style scoped>
</style>
