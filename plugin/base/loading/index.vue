<template>
  <div class="yt-loading-wrap">
    <span>
      <img class="yt-loading-img" :src="src" alt="loading">
      <p class="yt-loading-text">{{text}}</p>
    </span>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'yt-loading',
    props: {
      /**
       * loading显示的文字
       */
      text: {
        type: String,
        default: '正在加载'
      },
      /**
       * loading的gif图片
       */
      src: {
        type: String,
        default: require('./loading.gif')
      }
    }
  }
</script>
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .yt-loading-wrap
    position relative
    width 100%
    height 100%
    display flex
    align-items center
    justify-content center
    text-align center
    background-color #ffffff

  .yt-loading-img
    width 30px
    height 30px

  .yt-loading-text
    margin-top 10px
    font-size 14px
    color #101010
</style>
