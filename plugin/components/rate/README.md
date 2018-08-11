# 评分组件
###### 通常用于等级评价
###
#### 基础用法
```html
  <yt-rate v-model="grade"></yt-rate>
```
###
#### 区分颜色
```html
  <yt-rate v-model="grade" :allow-half="true" :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></yt-rate>
```
###
#### 辅助文字
```html
  <yt-rate v-model="grade" show-text></yt-rate>
```
###
#### 只读+半星
```html
  <yt-rate v-model="grade4" disabled show-score text-color="#ff9900" score-template="{value}">
```
