# pull 下拉刷新+上拉加载
###### 封装了下拉刷新和上拉加载的包裹容器
###
#### 简单使用
##### template
###
```html
<yt-pull name="pull" :top-load-method="pullDown" :bottom-load-method="pullUp">
  <div class="row" v-for="i in num" :key="i">这是第{{i}}条数据</div>
</yt-pull>
```
###
##### 组件内部会把 **loaded** 和 **name** 回传出来。**loaded**用于告诉组件异步执行完毕。**name**用于辨识pull组件
###
```html
<script type="text/ecmascript-6">
  export default {
    methods: {
      async pullDown(loaded, name) {
        // todo
        await delayed(1000)
        console.log(name)
        // 用于告知组件已经执行完毕
        loaded()
      },
      async pullUp(loaded, name) {
        // todo
        await delayed(1000)
        console.log(name)
        // 用于告知组件已经执行完毕
        loaded()
      }      
    }
  }
</script>
```
