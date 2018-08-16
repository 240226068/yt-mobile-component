<template>
  <yt-page title="Toast组件">
    <yt-card title="import引入调用">
      <yt-btn @click="doTool">提醒</yt-btn>
      <yt-btn @click="doSuccess" theme="green">成功</yt-btn>
      <yt-btn @click="doError" theme="red">错误</yt-btn>
    </yt-card>
    <yt-card title="this调用">
      <yt-btn @click="doTool2">提醒</yt-btn>
      <yt-btn @click="doSuccess2" theme="green">成功</yt-btn>
      <yt-btn @click="doError2" theme="red">错误</yt-btn>
    </yt-card>
  </yt-page>
</template>

<script>
  import { Toast } from '../../package/index.js'

  export default {
    name: 'Toast-service',
    methods: {
      doTool() {
        Toast('这是一条提醒信息', 'tool')
      },
      doSuccess() {
        Toast('这是一条成功信息', 'success')
      },
      doError() {
        Toast('这是一条错误信息', 'error')
      },
      doTool2() {
        this.$Toast('这是一条提醒信息', 'tool')
      },
      doSuccess2() {
        this.$Toast('这是一条成功信息', 'success')
      },
      doError2() {
        this.$Toast('这是一条错误信息', 'error')
      }
    }
  }
</script>

<style scoped>

</style>
