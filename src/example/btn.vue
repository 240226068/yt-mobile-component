<template>
  <yt-page title="button" scroll>
    <yt-btn theme="white">white</yt-btn>
    <yt-btn theme="blue">blue</yt-btn>
    <yt-btn theme="black">black</yt-btn>
    <yt-btn theme="red">red</yt-btn>
    <yt-btn theme="green">green</yt-btn>
    <yt-split></yt-split>
    <yt-btn theme="white" plain>plain-white</yt-btn>
    <yt-btn theme="blue" plain>plain-blue</yt-btn>
    <yt-btn theme="black" plain>plain-black</yt-btn>
    <yt-btn theme="red" plain>plain-red</yt-btn>
    <yt-btn theme="green" plain>plain-green</yt-btn>
    <yt-split></yt-split>
    <yt-btn class="btn" theme="black" round>圆角</yt-btn>
    <yt-split></yt-split>
    <yt-split color="#fff"></yt-split>
    <yt-btn class="btn" theme="blue" edge>贴边</yt-btn>
    <yt-split color="#fff"></yt-split>
    <yt-split></yt-split>
    <yt-split color="#fff"></yt-split>
    <yt-btn theme="blue" size="normal">提交</yt-btn>
    <yt-btn theme="blue" size="medium">提交</yt-btn>
    <yt-btn theme="blue" size="small">提交</yt-btn>
    <yt-btn theme="blue" size="mini">提交</yt-btn>
    <yt-split color="#fff"></yt-split>
    <yt-split></yt-split>
    <yt-split color="#fff"></yt-split>
    <yt-btn theme="blue" size="normal" round>提交</yt-btn>
    <yt-btn theme="blue" size="medium" round>提交</yt-btn>
    <yt-btn theme="blue" size="small" round>提交</yt-btn>
    <yt-btn theme="blue" size="mini" round>提交</yt-btn>
    <yt-split color="#fff"></yt-split>
    <yt-split></yt-split>
    <yt-btn disabled theme="white">提交</yt-btn>
    <yt-btn disabled theme="blue">提交</yt-btn>
    <yt-btn disabled theme="red">提交</yt-btn>
    <yt-btn disabled theme="black">提交</yt-btn>
    <yt-btn disabled theme="green">提交</yt-btn>
    <yt-split></yt-split>
    <yt-split color="#fff"></yt-split>
    <yt-btn size="normal" circle icon="yt-icon icon-search" theme="blue"></yt-btn>
    <yt-btn size="normal" circle icon="yt-icon icon-search" theme="black"></yt-btn>
    <yt-btn size="normal" circle icon="yt-icon icon-search" theme="red"></yt-btn>
    <yt-btn size="normal" circle icon="yt-icon icon-search" theme="green"></yt-btn>
    <yt-btn size="normal" circle icon="yt-icon icon-search" theme="white"></yt-btn>
    <yt-split color="#fff"></yt-split>
    <yt-split></yt-split>
    <yt-split color="#fff"></yt-split>
    <yt-btn size="normal" icon="yt-icon icon-search" theme="blue"></yt-btn>
    <yt-btn size="normal" icon="yt-icon icon-search" theme="blue">搜索</yt-btn>
    <yt-btn size="normal" theme="blue">搜索 <i class="yt-icon icon-search"></i></yt-btn>
    <yt-split color="#fff"></yt-split>
    <yt-split></yt-split>
    <yt-split color="#fff"></yt-split>
    <yt-btn size="normal" theme="blue" :loading="submit">提交</yt-btn>
    <yt-split color="#fff"></yt-split>
    <yt-split></yt-split>
    <yt-btn size="block" theme="blue" :loading="submit">提交</yt-btn>
  </yt-page>
</template>

<script type="text/ecmascript-6">
  import { delayed } from '../../package/index'

  export default {
    name: 'btn-example',
    methods: {
      async submit(loaded) {
        await delayed(4000)
        loaded()
      }
    }
  }
</script>

<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .box
    background-color #fff
</style>
