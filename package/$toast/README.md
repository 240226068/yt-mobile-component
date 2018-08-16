# toast
###### 消息提示组件
###
### import引用调用
###
> import
####
```js
import { Toast } from 'yt-mobile'
```
####
> 提示
####
```js
Toast('这是一条提醒信息', 'tool')
```
####
> 成功
####
```js
Toast('这是一条成功信息', 'success')
```
####
> 错误
####
```js
Toast('这是一条错误信息', 'error')
```
###
### this引用调用
###
> 提示
####
```js
this.$Toast('这是一条提醒信息', 'tool')
```
####
> 成功
####
```js
this.$Toast('这是一条成功信息', 'success')
```
####
> 错误
####
```js
this.$Toast('这是一条错误信息', 'error')
```
###
### 设置展示时间
###
```js
this.$Toast('这是一条成功信息', 'success', 3000)
```
