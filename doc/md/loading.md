### loading组件的一般使用
<img src="/docs/assets/loading-demo.gif" width = "360" height = "602" alt="图片名称" align=center />

```
<template>
  <yt-page title="mask">
    <yt-loading v-if="!num"></yt-loading>
    <ul class="yt-scroll" v-if="num">
      <li class="row" v-for="i in num" :key="i">这是第{{i}}条数据</li>
    </ul>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  import {delayed} from 'yt'
  export default {
    name: 'mask-example',
    data() {
      return {
        num: 0
      }
    },
    async activated() {
      await delayed(3000)
      this.num = 20
    }
  }
</script>
<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .row
    line-height 50px
    font-size 14px
    padding 0 10px
</style>

```
