<template>
  <yt-icon @click="startRecognize" font="iconfont icon-speech"></yt-icon>
</template>

<script type="text/ecmascript-6">
  import { SpeechToText } from '../../plus'

  export default {
    name: 'yt-speech',
    props: {
      /**
       * 值
       * @modle
       */
      value: {
        type: String,
        default: ''
      },
      /**
       * 新值是否追加在旧值后面
       */
      additional: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      startRecognize() {
        SpeechToText((str) => {
          let res = str
          if (this.additional) {
            res = this.value + str
          }
          this.$emit('input', res)
          this.$emit('change', res)
        })
      }
    }
  }
</script>
