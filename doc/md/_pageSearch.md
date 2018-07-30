<img src="/docs/assets/pageSearch-demo.gif" width = "360" height = "602" alt="图片名称" align=center />

```
<template>
  <yt-page-search @click-btn="cancel" @change="change" btn="取消">
    <div>这里是内容</div>
  </yt-page-search>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'call-example',
    methods: {
      change(key) {
        console.log(key)
      },
      cancel() {
        console.log('点击了取消')
      }
    }
  }
</script>
<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
</style>
```
