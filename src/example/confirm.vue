<template>
  <yt-page title="confirm">
    <yt-btn @click="doConfirm">import引用调用</yt-btn>
    <yt-btn @click="doConfirm2">this调用</yt-btn>
  </yt-page>
</template>

<script>
  import { Confirm } from '../../package'

  export default {
    name: 'confirm',
    methods: {
      doConfirm() {
        Confirm({ confirmText: '确认无误', cancelText: '容我想想', title: '温馨提示', desc: '提交后不可修改！您确定要提交吗？' })
          .then(() => {
            console.log('点击了确认')
          })
          .catch(() => {
            console.log('点击了取消')
          })
      },
      doConfirm2() {
        this.$Confirm({ confirmText: '确认无误', cancelText: '容我想想', title: '温馨提示', desc: '提交后不可修改！您确定要提交吗？' })
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
