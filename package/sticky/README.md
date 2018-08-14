# sticky
###### 实现黏性布局
###
#### 基础使用
###
```html
<ul>
  <li style="padding: 0 10px; line-height 45px; font-size: 14px; color: #666666;" v-for="i in 10" :key="i">这是一些辅助内容</li>
</ul>
<yt-sticky class="row sticky-title" top="0px">昨日</yt-sticky>
<ul>
  <li style="padding: 0 10px; line-height 45px; font-size: 14px; color: #666666;" v-for="i in 20" :key="i">这是一些辅助内容</li>
</ul>
```
