# cellSelect弹出选择组件
###### 通常用于表单单选、多选
####
> 数据
####
```js
export default {
    data() {
      return {
        select: '',
        list: [
          {
            label: '巷道一',
            value: 'hd-1'
          },
          {
            label: '巷道二',
            value: 'hd-2'
          },
          {
            label: '巷道三',
            value: 'hd-3'
          },
          {
            label: '巷道四',
            value: 'hd-4'
          },
          {
            label: '巷道五',
            value: 'hd-5'
          }
        ]
      }
    }
  }
```
###
#### 单选使用
###
```html
<yt-cell label="单选">
  <yt-cell-select v-model="select" :list="list" label="label" val="value"></yt-cell-select>
</yt-cell>
```
###
#### 最多选两个
###
```html
<yt-cell label="多选">
  <yt-cell-select v-model="select" :max="2" :list="list" label="label" val="value"></yt-cell-select>
</yt-cell>
```
