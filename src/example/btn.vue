<template>
  <yt-page title="button">
    <div class="yt-full yt-scroll">
      <yt-btn type="white">white</yt-btn>
      <yt-btn type="blue">blue</yt-btn>
      <yt-btn type="black">black</yt-btn>
      <yt-btn type="red">red</yt-btn>
      <yt-btn type="green">green</yt-btn>
      <yt-split></yt-split>
      <yt-btn type="white" plain>plain-white</yt-btn>
      <yt-btn type="blue" plain>plain-blue</yt-btn>
      <yt-btn type="black" plain>plain-black</yt-btn>
      <yt-btn type="red" plain>plain-red</yt-btn>
      <yt-btn type="green" plain>plain-green</yt-btn>
      <yt-split></yt-split>
      <yt-btn class="btn" type="black" round>圆角</yt-btn>
      <yt-split></yt-split>
      <yt-split color="#fff"></yt-split>
      <yt-btn class="btn" type="blue" edge>贴边</yt-btn>
      <yt-split color="#fff"></yt-split>
      <yt-split></yt-split>
      <yt-split color="#fff"></yt-split>
      <yt-btn type="blue" size="normal">提交</yt-btn>
      <yt-btn type="blue" size="medium">提交</yt-btn>
      <yt-btn type="blue" size="small">提交</yt-btn>
      <yt-btn type="blue" size="mini">提交</yt-btn>
      <yt-split color="#fff"></yt-split>
      <yt-split></yt-split>
      <yt-split color="#fff"></yt-split>
      <yt-btn type="blue" size="normal" round>提交</yt-btn>
      <yt-btn type="blue" size="medium" round>提交</yt-btn>
      <yt-btn type="blue" size="small" round>提交</yt-btn>
      <yt-btn type="blue" size="mini" round>提交</yt-btn>
      <yt-split color="#fff"></yt-split>
      <yt-split></yt-split>
      <yt-btn disabled type="white">提交</yt-btn>
      <yt-btn disabled type="blue">提交</yt-btn>
      <yt-btn disabled type="red">提交</yt-btn>
      <yt-btn disabled type="black">提交</yt-btn>
      <yt-btn disabled type="green">提交</yt-btn>
      <yt-split></yt-split>
      <yt-split color="#fff"></yt-split>
      <yt-btn size="normal" circle icon="iconfont icon-search" type="blue"></yt-btn>
      <yt-btn size="normal" circle icon="iconfont icon-search" type="black"></yt-btn>
      <yt-btn size="normal" circle icon="iconfont icon-search" type="red"></yt-btn>
      <yt-btn size="normal" circle icon="iconfont icon-search" type="green"></yt-btn>
      <yt-btn size="normal" circle icon="iconfont icon-search" type="white"></yt-btn>
      <yt-split color="#fff"></yt-split>
      <yt-split></yt-split>
      <yt-split color="#fff"></yt-split>
      <yt-btn size="normal" icon="iconfont icon-search" type="blue"></yt-btn>
      <yt-btn size="normal" icon="iconfont icon-search" type="blue">搜索</yt-btn>
      <yt-btn size="normal" type="blue">搜索 <i class="iconfont icon-search"></i></yt-btn>
      <yt-split color="#fff"></yt-split>
      <yt-split></yt-split>
      <yt-split color="#fff"></yt-split>
      <yt-btn size="normal" type="blue" :loading="submit">提交</yt-btn>
      <yt-split color="#fff"></yt-split>
      <yt-split></yt-split>
      <yt-btn size="block" type="blue" :loading="submit">提交</yt-btn>
    </div>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  import { delayed } from 'yt'
  export default {
    name: 'btn-example',
    methods: {
      async submit() {
        await delayed(4000)
      }
    }
  }
</script>
<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
</style>
