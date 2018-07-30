actionsheet一般从底部弹出，显示一系列可供用户选择的操作按钮； actionsheet是从popover控件基础上演变而来，实际上就是一个固定从底部弹出的popover

<img src="/docs/assets/actionsheet-service.gif" width = "360" height = "602" alt="图片名称" align=center />

```vue
   <template>
     <yt-page title="actionsheet" :leftData="[]">
       <yt-btn @click="callPhone">弹出</yt-btn>
     </yt-page>
   </template>
   <script type="text/ecmascript-6">
     import {Actionsheet} from 'yt'
     import {CallPhone} from 'yt/plus'
     export default {
       methods: {
         callPhone () {
           Actionsheet({
             list: [{
               text: '拨打电话',
               click: () => CallPhone(this.tel + '')
             }],
             cancel: true  // 是否带取消按钮
           })
         }
       }
     }
   </script>
   <style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
   </style>
```
