# inlineSelect
###### 多选、单选列表
###
#### 单选列表
###
```html
<yt-inlineSelect title="单选列表" v-model="select" :list="list"></yt-inlineSelect>
```
###
#### 多选列表
###
```html
<yt-inlineSelect title="多选列表" v-model="select2" :list="list" multiple></yt-inlineSelect>
```
###
#### 一行放四个
###
```html
<yt-inlineSelect title="一行放4个" v-model="select2" :list="list" :x="4"></yt-inlineSelect>
```
###
#### 多选、限制选两个
###
```html
<yt-inlineSelect title="最多选2个" v-model="select3" :list="list" :max="2" multiple></yt-inlineSelect>
```
