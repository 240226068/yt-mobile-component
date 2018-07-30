从中间弹出一个弹出框，有个放大效果，具体参数如下例。该UI参考的QQ。

<img src="/docs/assets/alert-demo.gif" width = "360" height = "602" alt="图片名称" align=center />

```vue
   <template>
     <yt-page title="alert" :leftData="[]">
       <yt-btn @click="handlerAlert">弹出</yt-btn>
     </yt-page>
   </template>
   <script type="text/ecmascript-6">
     import {Alert} from 'yt'
     export default {
       methods: {
         handlerAlert () {
           Alert({
             desc: '对不起，您没有权限访问!',
             title: '温馨提示',
             confirm: () => { console.log('点击了确定') }
           })
         }
       }
     }
   </script>
   <style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
   </style>
```
