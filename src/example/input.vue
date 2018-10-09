<template>
  <yt-page title="输入框" :input="input" :rightData="rightData">
    <yt-split></yt-split>
    <yt-cell label="任务名称">
      <yt-input align="left" @change="change" v-model="Name"></yt-input>
    </yt-cell>
    <yt-split></yt-split>
    <yt-cell label="任务名称">
      <yt-input :clearable="false" @change="change" v-model="Name"></yt-input>
    </yt-cell>
    <yt-split></yt-split>
    <yt-cell label="任务名称">
      <yt-input @change="change" v-model="Name"></yt-input>
    </yt-cell>
  </yt-page>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'textarea-example',
    data() {
      return {
        input: false,
        Name: '管廊日常巡检任务',
        rightData: [{
          font: 'yt-icon icon-search',
          click: () => {
            this.input = !this.input
          }
        }]
      }
    },
    methods: {
      change(key) {
        console.log(key, 'change')
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
</style>
