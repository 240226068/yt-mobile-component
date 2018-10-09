<template>
  <div class="yt-file">
    <div class="yt-file-item" @click="handlerTap(file)" v-for="(file, index) in fileList" :key="index">
      <img class="yt-file-img" :src="file.url">
      <span class="yt-file-remove" @click="handlerRemove(index)" v-if="!disabled"><i
        class="yt-icon icon-close"></i></span>
    </div>
    <div class="yt-file-upload" v-if="!disabled">
      <input class="yt-file-input" type="file" @change="handlerChange" v-if="fileList.length < max" ref="input">
      <div class="yt-file-btn" @click="handlerToast">
        <i class="yt-file-camera yt-icon icon-camera"></i>
        <p class="yt-file-text">{{btnText}}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { isImg, isVideo, bridge } from '../utils'
  import { Toast } from '../$toast'
  import { PreviewImg } from '../$previewImg'

  export default {
    name: 'yt-file',
    inject: {
      ytForm: {
        default: () => ({})
      }
    },
    props: {
      /**
       * 设置最大值
       */
      max: {
        type: Number,
        default: 5
      },
      /**
       * 文件列表 例如 [{name, url}]
       */
      value: Array,
      /**
       *  是否禁用新增
       */
      disabled: {
        type: Boolean,
        default: false
      },
      /**
       *  上传文件的函数   函数接受一个参数 为file对象 目前只能上传单个文件
       */
      uploadFile: {
        type: Function,
        required: true
      }
    },
    computed: {
      btnText() {
        if (!this.fileList || this.fileList.length === 0) return '拍摄/文件'
        return `${this.fileList.length} / ${this.max}`
      },
      _disabled() {
        return this.disabled || (this.ytForm || {}).disabled
      },
      fileList: {
        get() {
          return this.value
        },
        set(val) {
          this.$emit('input', val)
        }
      }
    },
    methods: {
      handlerTap(file) {
        if (!file.url) {
          Toast('文件不存在', 'tool')
        } else if (isImg(file.name)) {
          PreviewImg({ current: 0, list: [file.url] })
        } else if (isVideo(file.name)) {
          PreviewVideo({ current: 0, list: [{ title: file.name, url: file.url }] })
        } else {
          bridge.PreviewFile({ title: file.name, url: file.url })
        }
      },
      handlerToast() {
        if (this.fileList.length >= this.max) {
          Toast(`最多添加${this.max}个!`, 'error')
        }
      },
      handlerRemove(index) {
        if (this._disabled) return
        this.fileList.splice(index, 1)
      },
      async handlerChange(e) {
        let files = e.target.files
        if (files && files.length && this.uploadFile) {
          try {
            let { name, url } = await this.uploadFile(files[0])
            this.fileList.push({ name, url })
          } catch (e) {
            Toast('上传文件失败！', 'error')
          }
        }
        e.target.value = null
      }
    }
  }
</script>
