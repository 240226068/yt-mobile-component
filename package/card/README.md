# card卡片
###### 通常用于分组展示表单
###
#### 凸起的卡片
```html
<yt-card title="隐患内容" :edge="false">
  <ul><li style="padding-left: 10px;line-height: 40px;" v-for="i in 5" :key="i">这是一段内容</li></ul>
</yt-card>
```
###
#### 贴边的卡片
> 不想要header的话  不传title即可
####
```html
<yt-card title="隐患内容">
  <ul><li style="padding-left: 10px;line-height: 40px;" v-for="i in 5" :key="i">这是一段内容</li></ul>
</yt-card>
```
###
#### 隐藏title坐标的小标
```html
<yt-card title="隐患内容" :tag="false">
  <ul><li style="padding-left: 10px;line-height: 40px;" v-for="i in 5" :key="i">这是一段内容</li></ul>
</yt-card>
```
###
#### 显示底部btn以及自定义header右侧
```
  <yt-card @btn-click="handler" title="隐患内容" btn="查看更多内容">
    <span slot="more">更多</span>
    <ul>
      <li style="padding-left: 10px;line-height: 40px;" v-for="i in 5" :key="i">这是一段内容</li>
    </ul>
  </yt-card>
```
