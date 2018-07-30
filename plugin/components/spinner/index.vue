<template>
  <div class="yt-spinner">
    <span>
      <img class="yt-spinner-img" :src="src" alt="loading">
      <p class="yt-spinner-text">{{text}}</p>
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-spinner',
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
        default: require('./spinner.gif')
      }
    }
  }
</script>
