<template>
  <yt-page title="输入框" :input="input" theme="white" inputTheme="dark" @change="change" v-model="InspectionName" :rightData="rightData">
    <yt-split></yt-split>
    <yt-cell title="任务名称">
      <yt-input @change="change" :value="InspectionName"></yt-input>
    </yt-cell>
  </yt-page>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'textarea-example',
    data() {
      return {
        input: false,
        InspectionName: '管廊日常巡检任务',
        rightData: [
          {
            font: 'iconfont icon-search',
            click: () => {
              this.input = !this.input
            }
          }
        ]
      }
    },
    methods: {
      change(key) {
        console.log(key, 'change')
      }
    },
    watch: {
      'InspectionName'(val) {
        console.log(val, 'watch')
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .btn
    margin: 0 5px;
</style>
