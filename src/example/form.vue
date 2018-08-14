<template>
  <yt-page title="form表单">
    <yt-form :model="user" :rules="rules">
      <yt-cell label="用户名">
        <yt-input v-model="user.username"></yt-input>
      </yt-cell>
      <yt-cell label="密码">
        <yt-input v-model="user.password"></yt-input>
      </yt-cell>
      <yt-btn validator :loading="doSubmit">提交</yt-btn>
    </yt-form>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        user: {
          username: '',
          password: ''
        },
        rules: {
          username: { type: 'string', required: true, message: '用户名不能为空!' },
          password: { type: 'string', required: true, message: '密码不能为空!' }
        }
      }
    },
    methods: {
      doSubmit(loaded) {
        setTimeout(() => {
          loaded()
        }, 1000)
      }
    }
  }
</script>
<style scoped>
</style>
