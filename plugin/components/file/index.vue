<template>
  <div class="yt-file">
    <div class="yt-file-item" @click="handlerTap(file)" v-for="(file, index) in fileList" :key="index">
      <img class="yt-file-img" :src="file.url">
      <span class="yt-file-remove" @click="handlerRemove(index)" v-if="!disabled"><i
        class="iconfont icon-close"></i></span>
    </div>
    <div class="yt-file-upload" v-if="!disabled">
      <input class="yt-file-input" type="file" @change="handlerChange" v-if="fileList.length < max" ref="input">
      <div class="yt-file-btn" @click="handlerToast">
        <i class="yt-file-camera iconfont icon-camera"></i>
        <p class="yt-file-text">{{btnText}}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { isImg, isVideo } from '../../utils'
  import { Toast, PreviewImg, PreviewVideo } from '../../service/index'
  import { PreviewFile } from '../../plus'

  export default {
    name: 'yt-file',
    inject: {
      ytForm: {
        default: () => ({})
      }
    },
    props: {
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
       *  函数返回的结果 如果成功 必须返回如下格式 如 { success: true, result: { _url: '', _name: ''} }
       *  函数返回的结果 如果失败 必须返回如下格式 如 { success: false, result}
       */
      uploadFile: Function
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
          Toast({ msg: '文件不存在' })
        } else if (isImg(file.name)) {
          PreviewImg({ current: 0, list: [file.url] })
        } else if (isVideo(file.name)) {
          PreviewVideo({ current: 0, list: [{ title: file.name, url: file.url }] })
        } else {
          PreviewFile({ title: file.name, url: file.url })
        }
      },
      handlerToast() {
        if (this.fileList.length >= this.max) {
          Toast({ msg: `最多添加${this.max}个!`, type: 'error' })
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
            let { name, url } = await this.uploadFile(file[0])
            this.fileList.push({ name, url })
          } catch (e) {
            Toast({ msg: '上传文件失败！', type: 'error' })
          }
        }
        e.target.value = null
      }
    }
  }
</script>
