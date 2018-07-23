<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .yt-file-noInfo
    min-height 100px

  .yt-file
    margin-top 10px
    font-size 0
    padding 0 5px
    .yt-file-item
      position relative
      display inline-block
      width 33.33%
      padding-bottom 33.33%
      height 0
      vertical-align middle
      overflow hidden
      &_img
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        padding 5px
        box-sizing border-box
      &_input
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        z-index 1000
        opacity 0
      &_btn
        position absolute
        top 5px
        left 5px
        right 5px
        bottom 5px
        box-sizing border-box
        display flex
        vertical-align middle
        flex-direction column
        align-items center
        justify-content center
        background-color #f9f9f9
      &_camera
        font-size 45px
        color #cccccc
      &_text
        margin-top 10px
        letter-spacing 2px
        color rgb(204, 204, 204)
        font-size 12px
</style>

<template>
  <div>
    <p class="yt-small-title" v-if="title">{{title}}</p>
    <div class="yt-file">
      <yt-touch @press="handlerPress(index)" @tap="handlerTap(file)" class="yt-file-item"
                v-for="(file, index) in fileList" :key="index">
        <img class="yt-file-item_img" v-lazy="getPreviewUrl(file)">
      </yt-touch>
      <div v-if="!_disabled" class="yt-file-item">
        <input class="yt-file-item_input" type="file" @change="change" ref="input">
        <div class="yt-file-item_btn">
          <i class="yt-file-item_camera iconfont icon-camera"></i>
          <p class="yt-file-item_text">拍摄/文件</p>
        </div>
      </div>
    </div>
    <yt-noInfo size="small" v-if="(!value || !value.length) && _disabled" text="暂无照片"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import { isImg, isVideo } from '../../utils'
  import { Toast, PreviewImg, PreviewVideo, Actionsheet } from '../../service/index'
  import { PreviewFile } from '../../plus'

  export default {
    name: 'yt-file',
    inject: {
      ytForm: {
        default: () => ({})
      }
    },
    props: {
      /**
       * 文件列表 例如 [{name, url}]
       */
      value: Array,
      /**
       *  是否禁用新增
       */
      disabled: Boolean,
      /**
       *  上传文件的函数   函数接受一个参数 为file对象 目前只能上传单个文件
       *  函数返回的结果 如果成功 必须返回如下格式 如 { success: true, result: { _url: '', _name: ''} }
       *  函数返回的结果 如果失败 必须返回如下格式 如 { success: false, result}
       */
      uploadFile: Function,
      /**
       * 标题
       */
      title: {
        type: String,
        default: '现场照片'
      }
    },
    computed: {
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
      handlerPress(index) {
        if (this._disabled) return
        Actionsheet({
          list: [{
            text: '删除',
            click: () => {
              this.fileList.splice(index, 1)
            }
          }]
        })
      },
      getPreviewUrl(file) {
        let src = ''
        if (isImg(file.name)) {
          src = file.url
        } else if (isVideo(file.name)) {
          src = require('./video.png')
        } else {
          src = require('./file.png')
        }
        return src
      },
      change(e) {
        let files = e.target.files
        const success = (res) => {
          this.fileList.push({
            name: res.name,
            url: res.url
          })
        }
        const error = (e) => Toast({ msg: '上传文件失败！', type: 'error' })
        const final = () => e.target.value = null
        if (files && files.length && this.uploadFile) {
          let file = files[0]
          this.uploadFile(file)
              .then(success)
              .catch(error)
              .then(final)
        }
      }
    }
  }
</script>
