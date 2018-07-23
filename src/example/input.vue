<template>
  <yt-page title="输入框">
    <yt-cell title="禁用状态"></yt-cell>
    <yt-input label="任务名称" placeholder="请输入任务名称" :disabled="true" v-model="InspectionName"/>
    <yt-cell title="禁用状态+长文字"></yt-cell>
    <yt-input label="任务名称" placeholder="请输入任务名称" :disabled="true" v-model="InspectionName2"/>
    <yt-cell title="输入状态"></yt-cell>
    <yt-input label="任务名称" placeholder="请输入任务名称" :disabled="false" v-model="InspectionName3"/>
    <yt-cell title="输入状态+没有语音"></yt-cell>
    <yt-input label="任务名称" :speech="false" placeholder="请输入任务名称" :disabled="false" v-model="InspectionName4"/>
    <yt-cell title="输入状态+右侧自定义"></yt-cell>
    <yt-input label="任务名称" placeholder="请输入验证码" :disabled="false" v-model="InspectionName5">
      <yt-btn slot="right" type="primary">获取验证码</yt-btn>
    </yt-input>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'textarea-example',
    data() {
      return {
        InspectionName: '管廊日常巡检任务',
        InspectionName2: '管廊日常巡检任务管廊日常巡检任务管廊日常巡检任务管廊日常巡检任务',
        InspectionName3: '',
        InspectionName4: '',
        InspectionName5: ''
      }
    }
  }
</script>
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .title
    padding 0 10px
    font-size 14px
    line-height 30px
</style>
