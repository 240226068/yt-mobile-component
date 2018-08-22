# buttonTab
###
#### 与page组件结合使用
###
```html
<yt-page>
    <yt-buttonTab :list="list" slot="title"></yt-buttonTab>
</yt-page>
```
###
#### 自定义颜色
```html
<yt-buttonTab defaultFillColor="#fff" activeFillColor="#ffe26d"
              defaultColor="#666" activeColor="#333"
              borderColor="#e5e5e5" :list="list">
</yt-buttonTab>
```
###
#### 自定义大小
###
```html
<yt-buttonTab tabHeight="36px" tabWidth="90px" tabSize="16px"
              defaultFillColor="#fff" activeFillColor="#ffe26d"
              defaultColor="#666" activeColor="#000"
              borderColor="#e5e5e5" :list="list2">
</yt-buttonTab>
```
###
#### 数据
###
```js
const list = [
  {
   text: '推荐'
  },
  {
   text: '分享',
   badge: { isDot: true }
  },
  {
   text: '推荐',
   badge: { value: 20 }
  } 
]
```
