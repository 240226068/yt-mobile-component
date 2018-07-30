<img src="/docs/assets/time-demo.gif" width = "360" height = "602" alt="图片名称" align=center />

```
<template>
   <yt-page title="desc">
     <yt-cell label="选择时间">
       <yt-time v-model="time" type="date"></yt-time>
     </yt-cell>
     <yt-cell label="选择时间">
       <yt-time v-model="time2" type="time"></yt-time>
     </yt-cell>
     <yt-cell label="选择时间">
       <yt-time v-model="time3" type="year"></yt-time>
     </yt-cell>
     <yt-cell label="选择时间">
       <yt-time v-model="time4" type="month"></yt-time>
     </yt-cell>
     <yt-cell label="选择时间">
       <yt-time v-model="time5" type="day"></yt-time>
     </yt-cell>
   </yt-page>
 </template>
 <script type="text/ecmascript-6">
   export default {
     name: 'time-example',
     data() {
       return {
         time: '',
         time2: '',
         time3: '',
         time4: '',
         time5: '',
         time6: ''
       }
     }
   }
 </script>
 <style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
 </style>
```
