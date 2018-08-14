<template>
  <yt-page title="textarea">
    <yt-textarea title="风格一" type="column" v-model="taskDesc" showCount></yt-textarea>
    <yt-split></yt-split>
    <yt-textarea title="风格二" type="row" v-model="taskDesc2" showCount></yt-textarea>
    <yt-split></yt-split>
    <yt-textarea disabled title="禁止输入" type="row" v-model="taskDesc2"></yt-textarea>
  </yt-page>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'textarea-example',
    data() {
      return {
        taskDesc: '',
        taskDesc2: '注意安全'
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .title
    padding 0 10px
    font-size 14px
    line-height 30px
</style>
