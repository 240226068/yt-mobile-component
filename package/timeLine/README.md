# timeLine
#### 基础使用
```html
<template>
  <yt-page title="工单历史">
    <yt-timeLine :list="list"></yt-timeLine>
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
          }
          ...
        ]
      }
    }
  }
</script>
```
