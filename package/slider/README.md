# slider
###### 图片、自定义轮播
###
#### 简单使用
###
```html
<yt-slider class="list" v-model="page" :list="list" dots>
  <div class="item" slot-scope="item">{{item.text}}</div>
</yt-slider>
```
