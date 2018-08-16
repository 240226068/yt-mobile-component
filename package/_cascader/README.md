# cellCascader
###### 级联选择器逐级查看并选择
####
> 数据
####
```js
const list = [
 {
   label: '曹家滩矿井',
   value: 'kj-1',
   children: [
     {
       label: '一水平',
       value: 'sp-1',
       children: [
         {
           label: '一巷道',
           value: 'hd-1'
         },
         {
           label: '二巷道',
           value: 'hd-2'
         }
       ]
     },
     {
       label: '二水平',
       value: 'sp-2',
       children: [
         {
           label: '三巷道',
           value: 'hd-3'
         }
       ]
     }
   ]
 }
]
```
###
#### 基础使用
###
```html
<yt-cell-cascader desc="选择巷道" v-model="select" :list="list"></yt-cell-cascader>
```
###
#### 未选择到叶子节点，也可以进行关闭
###
```html
<yt-cell-cascader desc="选择巷道" v-model="select" :list="list" changeOnSelect></yt-cell-cascader>
```
###
#### 显示选中内容的最后一级的文字
###
```html
<yt-cell-cascader desc="选择巷道" v-model="select" :list="list" showLast></yt-cell-cascader>
```
