### pull组件的一般使用
```html
<template>
  <yt-page title="下拉刷新+上啦加载" :rightData="[]">
    <yt-pull name="pull" :top-load-method="pullDown" :bottom-load-method="pullUp">
      <div class="row" v-for="i in num" :key="i">这是第{{i}}条数据</div>
    </yt-pull>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  import {delayed} from 'yt'
  export default {
    name: 'page-example',
    data () {
      return {
        num: 5
      }
    },
    methods: {
      async pullDown(name) {
        await delayed(1500)
        this.num = 5
      },
      async pullUp(name) {
        await delayed(1500)
        this.num = this.num + 10
      }
    }
  }
</script>
<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .row
    padding 0 10px
    line-height 50px
    font-size 15px
</style>
```
