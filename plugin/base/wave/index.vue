<template>
  <div class="yt-wave"></div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'yt-wave'
  }
</script>
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .yt-wave
    position relative
    width 200px
    height 200px
    background-color rgb(118, 218, 255)
    overflow hidden
    &::before, &::after
      content " "
      position absolute
      width 500px
      height 500px
      top 0
      left 50%
      background-color rgba(255, 255, 255, .4)
      border-radius 45%
      transform translate(-50%, -70%) rotate(0)
      animation rotate 6s linear infinite
      z-index 10
    &::after
      background-color rgba(255, 255, 255, .9)
      border-radius 47%
      transform translate(-50%, -70%) rotate(0)
      animation rotate 10s linear -5s infinite
      z-index 20

  @keyframes rotate
    50%
      transform translate(-50%, -73%) rotate(180deg)
    100%
      transform translate(-50%, -70%) rotate(360deg)
</style>
