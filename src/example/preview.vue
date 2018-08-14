<template>
  <yt-page title="预览">
    <yt-btn @click="doPreviewImg">预览图片</yt-btn>
  </yt-page>
</template>

<script>
  import { PreviewImg } from '../../package'

  export default {
    name: 'previewImg',
    methods: {
      doPreviewImg() {
        PreviewImg([
          'http://s14.sinaimg.cn/bmiddle/8ee3e0acxb0171b2a99fd&690',
          'http://pic.feizl.com/upload/allimg/180126/291186uuwuygmswlt.png',
          'http://s14.sinaimg.cn/bmiddle/8ee3e0acxb0171b2a99fd&690',
          'http://pic.feizl.com/upload/allimg/180126/291186uuwuygmswlt.png'
        ], 0)
      }
    }
  }
</script>

<style scoped>

</style>
