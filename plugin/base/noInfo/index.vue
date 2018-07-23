<template>
  <div class="yt-noInfo" :class="`yt-noInfo__${size}`">
    <img class="yt-noInfo-img" :src="require('./no-info.png')">
    <p class="yt-noInfo-text">{{text}}</p>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'yt-noInfo',
    props: {
      text: {
        type: String,
        default: '暂无内容'
      },
      /**
       * large || medium || small
       */
      size: {
        type: String,
        default: 'large'
      }
    }
  }
</script>
<style lang="css" type="text/postcss">
  @name yt {
    @b noInfo {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 100%;
      height: 100%;
      @m large {
        .yt-noInfo-img {
          width: 180px;
        }
        .yt-noInfo-text {
          letter-spacing: 3px;
          font-size: 18px;
        }
      }
      @m medium {
        .yt-noInfo-img {
          width: 120px;
        }
        .yt-noInfo-text {
          letter-spacing: 2px;
          font-size: 16px;
        }
      }
      @m small {
        .yt-noInfo-img {
          width: 70px;
        }
        .yt-noInfo-text {
          letter-spacing: 1px;
          font-size: 14px;
        }
      }
      @e text {
        margin: 10px;
        color: #aaa;
        text-align: center;
      }
    }
  }
</style>
