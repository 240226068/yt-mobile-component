<template>
  <yt-page title="button" scroll>
    <yt-cell label="基础使用"></yt-cell>
    <yt-btn-group :shadow="false">
      <yt-btn theme="white">重置</yt-btn>
      <yt-btn>确定</yt-btn>
    </yt-btn-group>
    <yt-split></yt-split>
    <yt-cell label="使用阴影"></yt-cell>
    <yt-btn-group shadow>
      <yt-btn theme="white">重置</yt-btn>
      <yt-btn>确定</yt-btn>
    </yt-btn-group>
    <yt-cell labelWidth="100px" label="使用border" border="none"></yt-cell>
    <yt-btn-group edge :shadow="false" border>
      <yt-btn theme="white">重置</yt-btn>
      <yt-btn theme="white">确定</yt-btn>
    </yt-btn-group>
    <yt-split></yt-split>
    <yt-cell label="btn紧挨"></yt-cell>
    <yt-split></yt-split>
    <yt-btn-group :shadow="false" edge>
      <yt-btn theme="white">取消</yt-btn>
      <yt-btn theme="white">重置</yt-btn>
      <yt-btn theme="white">确定</yt-btn>
    </yt-btn-group>
    <yt-split></yt-split>
    <yt-cell labelWidth="200px" label="自定义间隔颜色"></yt-cell>
    <yt-split></yt-split>
    <yt-btn-group :shadow="false" edge edgeBorderColor="#f2f4f6">
      <yt-btn theme="white">取消</yt-btn>
      <yt-btn theme="white">确定</yt-btn>
    </yt-btn-group>
  </yt-page>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'btn-example'
  }
</script>
