<template>
  <yt-page title="textarea">
    <yt-cell border="all" title="风格一"></yt-cell>
    <yt-textarea title="补充说明" type="column" v-model="taskDesc"></yt-textarea>
    <yt-split></yt-split>
    <yt-cell border="all" title="风格二"></yt-cell>
    <yt-textarea title="补充说明" type="row" v-model="taskDesc2"></yt-textarea>
    <yt-split></yt-split>
    <yt-cell border="all" title="禁止输入"></yt-cell>
    <yt-textarea :disabled="true" title="补充说明" type="row" v-model="taskDesc2"></yt-textarea>
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
