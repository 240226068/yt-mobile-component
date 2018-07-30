
```html
<template>
  <yt-page title="工单历史">
    <yt-timeline :list="list"></yt-timeline>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'time-example',
    data() {
      return {
        list: [
          {
            time: '2018-03-26 9:25',
            desc: '管理员归档工单'
          },
          {
            time: '2018-03-25 18:25',
            desc: '巡检员提交工单'
          },
          {
            time: '2018-03-25 14:25',
            desc: '巡检员签收工单'
          },
          {
            time: '2018-03-25 09:45',
            desc: '管理员创建工单'
          }
        ]
      }
    }
  }
</script>
<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
</style>

```
