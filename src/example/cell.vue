<template>
  <yt-page title="Cell" scroll>
    <yt-cell border="half" label="有border-bottom(非全)" isLink/>
    <yt-cell border="all" label="有border-bottom" isLink/>
    <yt-cell border="none" label="没有border-bottom" isLink/>
    <p class="title">左右文字</p>
    <yt-cell border="none" label="任务名称">
      <yt-input></yt-input>
    </yt-cell>
    <p class="title">左文字+右自定义</p>
    <yt-cell border="none" label="巡检任务" value="管廊日常巡检任务"/>
    <p class="title">左右文字+描述文字</p>
    <yt-cell border="none" label="巡检任务" inline="李四,王五，张三，巡检员" value="管廊日常巡检任务"/>
    <p class="title">左右文字+左图标+右角标+点击阴影</p>
    <yt-cell border="none" :ripple="true" :icon="icon" label="专家列表" value="更多" isLink/>
    <p class="title">左图标自定义</p>
    <yt-cell border="none" label="检查通风扇是否打开" isLink>
      <span class="icon" success slot="icon"></span>
    </yt-cell>
    <yt-cell border="none" label="检查防火窗是否关闭" isLink>
      <span class="icon" error slot="icon"></span>
    </yt-cell>
    <yt-cell border="none" label="检查舱内是否漏水" isLink>
      <span class="icon" slot="icon"></span>
    </yt-cell>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'Cell-example',
    data() {
      return {
        icon: require('../img/avatar.jpg'),
        time: ''
      }
    }
  }
</script>
<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .title
    line-height 30px
    font-size 14px
    color #333333
    padding 0 10px
    background-color #f5f5f5

  .icon
    display inline-block
    vertical-align middle
    margin-right 8px
    width 12px
    height 12px
    background-color #cccccc
    border-radius 50%
    &[success]
      background-color #29F090
    &[error]
      background-color red
</style>
