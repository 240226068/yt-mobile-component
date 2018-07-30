```html
<template>
  <yt-page title="Cell">
    <div class="yt-scroll">
      <yt-cell border="half" title="有border-bottom(非全)" :isLink="true"/>
      <yt-cell border="all" title="有border-bottom" :isLink="true"/>
      <yt-cell border="none" title="没有border-bottom" :isLink="true"/>
      <p class="title">左右文字</p>
      <yt-cell border="none" title="巡检时间">
        <yt-time v-model="time"></yt-time>
      </yt-cell>
      <p class="title">左文字+右自定义</p>
      <yt-cell border="none" title="巡检任务" value="管廊日常巡检任务"/>
      <p class="title">左右文字+描述文字</p>
      <yt-cell border="none" title="巡检任务" inline="李四,王五，张三，巡检员" value="管廊日常巡检任务"/>
      <p class="title">左右文字+左图标+右角标+点击阴影</p>
      <yt-cell border="none" :ripple="true" :icon="icon" title="专家列表" value="更多" :isLink="true"/>
      <p class="title">左标题自定义</p>
      <yt-cell border="none" :isLink="true">
        <span slot="title" style="position: relative;padding-right: 10px;">待办事项<yt-badge slot="title" :num="3"/></span>
      </yt-cell>
      <p class="title">左图标自定义</p>
      <yt-cell border="none" title="检查通风扇是否打开" :isLink="true">
        <span class="icon" success slot="icon"></span>
      </yt-cell>
      <yt-cell border="none" title="检查防火窗是否关闭" :isLink="true">
        <span class="icon" error slot="icon"></span>
      </yt-cell>
      <yt-cell border="none" title="检查舱内是否漏水" :isLink="true">
        <span class="icon" slot="icon"></span>
      </yt-cell>
    </div>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'Cell-example',
    data() {
      return {
        icon: './img/expert.png',
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

```
