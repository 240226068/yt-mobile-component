### 附件组件
<img src="/docs/assets/file-demo.gif" width = "360" height = "602" alt="图片名称" align=center />

```html
<template>
  <yt-page :leftData="[]" title="cellSwipe示例">
    <yt-cell label="无默认值"></yt-cell>
    <yt-file :uploadFile="UploadFile" v-model="fileList"></yt-file>
    <yt-cell label="有默认值"></yt-cell>
    <yt-file :uploadFile="UploadFile" v-model="fileList2"></yt-file>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  import {UploadFile} from '@/api'
  export default {
    name: 'cell-swipe-example',
    data() {
      return {
        UploadFile,
        fileList: [],
        fileList2: [
          {
            name: '03c0459e1c1ae019c71ca7026aeabce1_{9FBAD19D-4543-33DA-6446-F18D9D48C214}.png',
            url: 'http://localhost:3080/mmbs/files/YTAPP/03c0459e1c1ae019c71ca7026aeabce1_%7B9FBAD19D-4543-33DA-6446-F18D9D48C214%7D.png'
          },
          {
            name: '3b61ae9ce935635c8d7ad4a31495df58_1.txt',
            url: 'http://localhost:3080/mmbs/files/YTAPP/3b61ae9ce935635c8d7ad4a31495df58_1.txt'
          }
        ]
      }
    }
  }
</script>
<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
</style>

```
