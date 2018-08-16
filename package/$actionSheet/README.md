# actionSheet
###### 弹出展示简单内容供用户选择
###
> 数据action
###
```js
const actions = [
  {
    text: '摄像',
    click: () => { console.log('点击了摄像') }
  },
  {
    text: '相册',
    click: () => { console.log('点击了相册') }
  },
  {
    text: '拍照',
    click: () => { console.log('点击了拍照') }
  }
]
```
###
#### import调用
###
```js
import { ActionSheet } from 'yt-mobile'
ActionSheet(actions)
```
###
#### this调用
###
```js
this.$ActionSheet(actions)
```
