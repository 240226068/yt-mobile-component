<template>
  <yt-page title="confirm">
    <yt-btn @click="doImport">import引用调用</yt-btn>
    <yt-btn @click="doThis">this调用</yt-btn>
  </yt-page>
</template>

<script>
  import { Confirm } from '../../package/index'

  export default {
    name: 'confirm',
    methods: {
      doImport() {
        Confirm({ confirmText: '确认无误', cancelText: '容我想想', title: '温馨提示', desc: '提交后不可修改！您确定要提交吗？' })
          .then(() => {
            console.log('点击了确认')
          })
          .catch(() => {
            console.log('点击了取消')
          })
      },
      doThis() {
        this
          .$Confirm({ confirmText: '确认无误', cancelText: '容我想想', title: '温馨提示', desc: '提交后不可修改！您确定要提交吗？' })
          .then(() => {
            console.log('点击了确认')
          })
          .catch(() => {
            console.log('点击了取消')
          })
      }
    }
  }
</script>

<style scoped>

</style>
