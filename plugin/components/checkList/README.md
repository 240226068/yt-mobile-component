# checkList
###### 多选列表 基于checkBox进行封装
###
#### 选中按钮在左边
```html
<yt-checkList class="list" title="选择按钮左边" :list="list" label="label" val="id" v-model="selectList"/>
```
###
#### 选择按钮在右边
###
```html
<yt-checkList class="list" title="选择按钮右边" :list="list2" label="label" val="id" v-model="selectList2" pos="right" simple/>
```
###
#### 限制选一个
###
```html
<yt-checkList class="list" title="限制选一个" :list="list3" label="label" val="id" v-model="selectList3" :max="1"/>
```
###
#### 限制选多个
###
```html
<yt-checkList class="list" title="限制选多个" :list="list4" label="label" val="id" v-model="selectList4" :max="2"/>
```
###
#### 自定义label
###
```html
<yt-checkList class="list" :list="list5" v-model="selectList5" pos="right">
  <div slot-scope="data">
    <p>名称: {{data.label}}</p>
    <p>id: {{data.id}}</p>
  </div>
</yt-checkList>
```
