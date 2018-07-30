### mask组件
<img src="/docs/assets/mask-demo.gif" width = "360" height = "602" alt="图片名称" align=center />

```
<template>
  <yt-page title="mask">
    <yt-cell @click="handlerClick" label="普通定位" :isLink="true"/>
    <yt-cell @click="handlerClick2" label="fixed定位" :isLink="true"/>
    <yt-cell @click="handlerClick3" label="bgc为rgba(0, 0, 0, 0.8)" :isLink="true"/>
    <yt-mask :visible.sync="show"/>
    <yt-mask :visible.sync="show2" :fixed="true"/>
    <yt-mask :visible.sync="show3" bgc="rgba(0, 0, 0, 0.8)" :fixed="true"/>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'mask-example',
    data() {
      return {
        show: false,
        show2: false,
        show3: false
      }
    },
    methods: {
      handlerClick() {
        this.show = true
      },
      handlerClick2() {
        this.show2 = true
      },
      handlerClick3() {
        this.show3 = true
      }
    }
  }
</script>
<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
</style>

```
