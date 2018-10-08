# group数据分组
###### 常用于展示列表数据 该组件封装了下拉刷新、上拉加载以及按时间分组展示的功能
###
#### 简单使用
> 组件在适当时机调用**searchApi**获取数据，该函数接受类型为{skip, limit, name}的对象
####
```html
<template>
  <yt-page>
    <yt-group :searchApi="searchApi">
      <div class="row" slot-scope="scope">{{scope.name}}</div>
    </yt-group>
  </yt-page>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      searchApi({ skip, limit, name }) {
        if (skip === 0) this.date = Date.now()
        return new Promise(resolve => {
          resolve(this.mock(this.date, limit))
        }, 1000)
      },
      mock(lastTime, limit) {
        const onday = 1000 * 60 * 60 * 24
        let results = []
        for (let i = 0; i < limit; i++) {
          results.push({
            createdAt: lastTime,
            name: '这是一条测试数据'
          })
        }
        this.date = this.date - Math.ceil(onday * 2 * Math.random())
        return results
      }
    }
  }
</script>
```
###
#### 默认情况下，在activated钩子函数进来自动调用searchApi函数获取数据。也可以选择禁用该选项
###
```html
<yt-group :autoRefresh="false" :searchApi="searchApi">
  <div class="row" slot-scope="scope">{{scope.name}}</div>
</yt-group>
```
