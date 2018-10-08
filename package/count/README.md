# count计数器
###### 用于表单，数字的增减
###
#### 基础用法
```html
  <yt-count v-model="count"></yt-count>
```
###
#### 设置最大值
```html
<yt-count :max="8" v-model="count"></yt-count>
```
###
#### 设置步长
```html
<yt-count :max="10" :step="3" v-model="count"></yt-count>
```
###
#### 总是显示数字和减号
###
> 默认情况下达到最小值时候，文字和减号按钮会消失掉
###
```html
<yt-count alwaysShowNum alwaysShowReduce :min="1" v-model="use"></yt-count>
```
