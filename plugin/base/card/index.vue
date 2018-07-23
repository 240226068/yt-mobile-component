<template>
  <div class="yt-card" :class="`yt-card__${Theme}`">
    <div class="yt-card-header" :class="`yt-border-${border}`"><span class="yt-card-title">{{title}}</span></div>
    <slot></slot>
    <div class="yt-card-btnWrapper" v-if="btn">
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'yt-card',
    props: {
      title: {
        type: String
      },
      btn: {
        type: String
      },
      size: {
        type: String,
        default: 'block'
      },
      border: {
        type: String,
        default: ''
      }
    }
  }
</script>
<style lang="css" type="text/postcss">
  @name yt {
    @b card {
      padding: 2px 0;
      background-color: #ffffff;
      & + .yt-card {
        margin-top: 20px;
      }

      @e header {
        color: #000;
        height: 50px;
        line-height: 50px;
        &::before {
          margin: 0 10px;
          display: inline-block;
          vertical-align: middle;
          content: " ";
          height: 16px;
          width: 6px;
          border-radius: 5px;
        }
      }
      @e title {
        display: inline-block;
        vertical-align: middle;
      }
      @e btnWrapper {
        text-align: center;
      }
      .yt-card-btn {
        margin: 20px 30px;
        line-height: 1.2em;
      }
    }
  }
</style>
