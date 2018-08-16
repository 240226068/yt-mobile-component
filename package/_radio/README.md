# cellRadio
###### cell与radio的结合使用，通常用于form表单。该组件的禁用状态会随form禁用状态同步
####
> 数据
####
```js
export default {
  data() {
    return {
      select: null,
      list: [
        {
          label: '北京',
          id: 1
        },
        {
          label: '上海',
          id: 2
        }
      ]
    }
  }
}
```
###
#### 基础使用
###
```html
<yt-cell label="整改完成">
  <yt-cell-radio :list="list" label="label" val="id" v-model="select"/>
</yt-cell>
```
###
#### 禁用状态
###
```html
<yt-cell label="禁用状态">
  <yt-cell-radio disabled :list="list" label="label" val="id" v-model="select"/>
</yt-cell>
```
