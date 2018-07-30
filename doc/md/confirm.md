从中间弹出一个确认框，有个放大效果，具体参数如下例。该UI参考的QQ。

<img src="/docs/assets/confirm-service.gif" width = "360" height = "602" alt="图片名称" align=center />

```vue
   <template>
     <yt-page title="Confirm" :leftData="[]">
       <yt-btn @click="handlerSubmit">提交</yt-btn>
     </yt-page>
   </template>
   <script type="text/ecmascript-6">
     import {Confirm} from 'yt'
     export default {
       methods: {
         handlerSubmit () {
           Confirm({
             desc: '您确定要提交吗？',
             title: '温馨提示',
             confirm: () => { console.log('点击了确定') },
             cancel: () => { console.log('点击了取消') }
           })
         }
       }
     }
   </script>
   <style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
   </style>

```
