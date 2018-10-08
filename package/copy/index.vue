<template>
  <div @click="doCopy">
    <input v-model='value' style='opacity: 0;position: absolute;z-index: -1;' type="text" ref="input">{{value}}
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'yt-copy',
    props: {
      value: {
        type: String
      }
    },
    methods: {
      doCopy() {
        this.$refs.input.select()
        document.execCommand('Copy')
        this.$message({ message: '复制成功!', type: 'success' })
      }
    }
  }
</script>
