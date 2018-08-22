# confirm
###### 弹出确认框
###
#### 通过import方式调用
###
```js
import { Confirm } from 'yt-mobile'
Confirm({
 confirmText: '确认无误',
 cancelText: '容我想想', 
 title: '温馨提示', 
 desc: '提交后不可修改！您确定要提交吗？' 
}).then(() => {
    console.log('点击了确认')
  })
  .catch(() => {
    console.log('点击了取消')
  })
```
###
#### 通过this调用
###
```js
this
  .$Confirm({
    confirmText: '确认无误', 
    cancelText: '容我想想', 
    title: '温馨提示', 
    desc: '提交后不可修改！您确定要提交吗？' 
  })
  .then(() => {
    console.log('点击了确认')
  })  
  .catch(() => {
    console.log('点击了取消')
  })
```
