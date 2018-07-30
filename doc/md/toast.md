从上面弹出一个提示框，该UI参考的QQ。具体类型有 success, error, tool

<img src="/docs/assets/toast-service.gif" width = "360" height = "602" alt="图片名称" align=center />

```vue
<template>
  <yt-page title="Toast" :leftData="[]">
    <yt-btn @click="handlerSubmit('success')">成功</yt-btn>
    <yt-btn @click="handlerSubmit('error')">错误</yt-btn>
    <yt-btn @click="handlerSubmit('tool')">超时</yt-btn>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  import {Toast} from 'yt'
  export default {
    methods: {
      handlerSubmit(type) {
        Toast({msg: '提交成功！！', type})
      }
    }
  }
</script>
<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
</style>
```
