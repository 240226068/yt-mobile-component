# input输入框
###### 常用于表单输入
###
#### 基础使用
```html
  <yt-input v-model="name"></yt-input>
```
###
#### 显示border-bottom
```html
  <yt-input v-model="name" border></yt-input>
```
###
#### 组件风格theme
```html
  <yt-input v-model="name" theme="light"></yt-input>
```
###
#### 监听变化请求接口
####
> 默认情况下  值改变时延迟500ms执行函数，期间内再次触发将充值。 2000ms必触发一次change
###
```html
  <yt-input @change="change" v-model="name" throttle></yt-input>
```
