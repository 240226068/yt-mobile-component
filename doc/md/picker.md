时间、日期、年月日选择器。

<img src="/docs/assets/picker-service.gif" width = "360" height = "602" alt="图片名称" align=center />

```vue
   <template>
     <yt-page title="picker" :leftData="[]">
       <yt-btn @click="handlerSelectTime">选择时间</yt-btn>
       {{result}}
     </yt-page>
   </template>
   <script type="text/ecmascript-6">
     import {Picker} from 'yt'
     export default {
       data() {
         return {
           result: ''
         }
       },
       methods: {
         handlerSelectTime () {
           Picker({
             title: '请选择时间',
             showTemplate: false,
             format: 'year-month-day',  // 时间格式 例如： 'year-month-day-hour-minute' 'year-month' 'year'等
             current: Date.now(),
             confirm: (str) => {
               this.result = str
               console.log('这里是选择的结果', str)
             }
           })
         }
       }
     }
   </script>
   <style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
   </style>

```
