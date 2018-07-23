<template>
  <div class="page">
    <yt-card title="隐患内容" shadow btn="查看更多内容">
      <span slot="more">更多</span>
      <ul>
        <li style="padding-left: 10px;line-height: 40px;" v-for="i in 5" :key="i">这是一段内容</li>
      </ul>
    </yt-card>
    <yt-card title="隐患内容" shadow btn="查看更多内容">
      <ul>
        <li style="padding-left: 10px;line-height: 40px;" v-for="i in 5" :key="i">这是一段内容</li>
      </ul>
    </yt-card>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .page
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: #f3f4f6;
    overflow: auto;
    &::-webkit-scrollbar
      display none
</style>
