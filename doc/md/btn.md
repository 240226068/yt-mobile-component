### btn组件

```html
<template>
  <yt-page title="button">
    <div class="yt-full yt-scroll">
      <yt-cell title="默认"></yt-cell>
      <div>
        <yt-btn type="primary">提交</yt-btn>
        <yt-btn type="success">提交</yt-btn>
        <yt-btn type="warning">提交</yt-btn>
        <yt-btn type="danger">提交</yt-btn>
        <yt-btn type="info">提交</yt-btn>
      </div>
      <yt-cell title="基础用法"></yt-cell>

      <div>
        <yt-btn size="normal" class="btn" type="primary">提交</yt-btn>
        <yt-btn size="normal" class="btn" type="success">提交</yt-btn>
        <yt-btn size="normal" class="btn" type="warning">提交</yt-btn>
        <yt-btn size="normal" class="btn" type="danger">提交</yt-btn>
        <yt-btn size="normal" class="btn" type="info">提交</yt-btn>
      </div>
      <yt-split></yt-split>
      <yt-cell title="朴素样式"></yt-cell>
      <div>
        <yt-btn size="normal" class="btn" plain type="primary">提交</yt-btn>
        <yt-btn size="normal" class="btn" plain type="success">提交</yt-btn>
        <yt-btn size="normal" class="btn" plain type="warning">提交</yt-btn>
        <yt-btn size="normal" class="btn" plain type="danger">提交</yt-btn>
        <yt-btn size="normal" class="btn" plain type="info">提交</yt-btn>
      </div>
      <yt-split></yt-split>
      <yt-cell title="圆角样式"></yt-cell>
      <div>
        <yt-btn size="normal" class="btn" round type="primary">提交</yt-btn>
        <yt-btn size="normal" class="btn" round type="success">提交</yt-btn>
        <yt-btn size="normal" class="btn" round type="warning">提交</yt-btn>
        <yt-btn size="normal" class="btn" round type="danger">提交</yt-btn>
        <yt-btn size="normal" class="btn" round type="info">提交</yt-btn>
      </div>
      <yt-split></yt-split>
      <yt-cell title="禁用样式"></yt-cell>
      <div>
        <yt-btn size="normal" class="btn" disabled type="primary">提交</yt-btn>
        <yt-btn size="normal" class="btn" disabled type="success">提交</yt-btn>
        <yt-btn size="normal" class="btn" disabled type="warning">提交</yt-btn>
        <yt-btn size="normal" class="btn" disabled type="danger">提交</yt-btn>
        <yt-btn size="normal" class="btn" disabled type="info">提交</yt-btn>
        <yt-btn size="normal" class="btn" disabled plain type="primary">提交</yt-btn>
        <yt-btn size="normal" class="btn" disabled plain type="success">提交</yt-btn>
        <yt-btn size="normal" class="btn" disabled plain type="warning">提交</yt-btn>
        <yt-btn size="normal" class="btn" disabled plain type="danger">提交</yt-btn>
        <yt-btn size="normal" class="btn" disabled plain type="info">提交</yt-btn>
      </div>
      <yt-split></yt-split>
      <yt-cell title="按钮尺寸"></yt-cell>
      <div>
        <yt-btn class="btn" type="primary" size="normal">提交</yt-btn>
        <yt-btn class="btn" type="primary" size="medium">提交</yt-btn>
        <yt-btn class="btn" type="primary" size="small">提交</yt-btn>
        <yt-btn class="btn" type="primary" size="mini">提交</yt-btn>
        <yt-btn class="btn" type="primary" round size="normal">提交</yt-btn>
        <yt-btn class="btn" type="primary" round size="medium">提交</yt-btn>
        <yt-btn class="btn" type="primary" round size="small">提交</yt-btn>
        <yt-btn class="btn" type="primary" round size="mini">提交</yt-btn>
      </div>
      <yt-split></yt-split>
      <yt-cell title="圆型图标"></yt-cell>
      <div>
        <yt-btn size="normal" class="btn" circle icon="iconfont icon-search"></yt-btn>
        <yt-btn size="normal" class="btn" circle icon="iconfont icon-search" type="primary"></yt-btn>
        <yt-btn size="normal" class="btn" circle icon="iconfont icon-search" type="success"></yt-btn>
        <yt-btn size="normal" class="btn" circle icon="iconfont icon-search" type="warning"></yt-btn>
        <yt-btn size="normal" class="btn" circle icon="iconfont icon-search" type="danger"></yt-btn>
        <yt-btn size="normal" class="btn" circle icon="iconfont icon-search" type="info"></yt-btn>
      </div>
      <yt-split></yt-split>
      <yt-cell title="自定义"></yt-cell>
      <div>
        <yt-btn size="normal" class="btn" icon="iconfont icon-search" type="primary"></yt-btn>
        <yt-btn size="normal" class="btn" icon="iconfont icon-search" type="primary">搜索</yt-btn>
        <yt-btn size="normal" class="btn" type="primary">搜索 <i class="iconfont icon-search"></i></yt-btn>
      </div>
      <yt-split></yt-split>
      <yt-cell title="loading"></yt-cell>
      <div>
        <yt-btn size="normal" class="btn" type="primary" :loading="submit">提交</yt-btn>
        <yt-btn size="block" type="primary" :loading="submit">提交</yt-btn>
      </div>
      <yt-split></yt-split>
      <yt-btn-group>
        <yt-btn plain>取消</yt-btn>
        <yt-btn plain type="danger" >驳回</yt-btn>
        <yt-btn plain type="primary" >同意</yt-btn>
      </yt-btn-group>
       <yt-btn-group>
        <yt-btn type="danger">驳回</yt-btn>
        <yt-btn type="primary">同意</yt-btn>
      </yt-btn-group>
    </div>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  import {delayed} from 'yt'
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
  .btn
    margin 20px
</style>

```
