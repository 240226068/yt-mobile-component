<template>
  <div @click="handlerClick">
    <slot></slot>
  </div>
</template>
<script type="text/ecmascript-6">
  import { isImg, isVideo } from '../utils'
  import { Toast } from '../$toast'
  import { PreviewImg } from '../$previewImg'
  import { bridge } from '../utils/bridge'

  export default {
    name: 'yt-openFile',
    props: {
      /**
       * 文件的路径
       */
      url: String,
      /**
       * 文件的名称
       */
      title: String,
      /**
       * 文件不存在时提示文字
       */
      errorText: {
        type: String,
        default: '暂无附件!'
      }
    },
    methods: {
      handlerClick() {
        if (!this.url) {
          Toast(this.errorText)
        } else if (isImg(this.url)) {
          PreviewImg({ current: 0, list: [this.url] })
        } else if (isVideo(this.url)) {
          // PreviewVideo({ current: 0, list: [{ title: this.title, url: this.url }] })
        } else {
          bridge.PreviewFile({ title: this.title, url: this.url })
        }
      }
    }
  }
</script>
