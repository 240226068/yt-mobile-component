<template>
  <div class="yt-loading">
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
