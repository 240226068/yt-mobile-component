# radioList
###### 单选列表 基于radio进行封装
###
#### 简单使用
```html
  <yt-cell label="隐患等级">
    <yt-radioList :list="list4" label="label" val="id" v-model="selectList4"/>
  </yt-cell>
```
###
#### 选择按钮左边
###
```html
  <yt-radioList class="list" title="选择按钮左边" :list="list" label="label" val="id" v-model="selectList" :inline="false"/>
```
###
#### 选择按钮右边
###
```html
  <yt-radioList class="list" title="" :list="list2" label="label" val="id" v-model="selectList2" pos="right" simple :inline="false"/>
```
###
#### 自定义label内容
###
```html
  <yt-radioList class="list" title="" :list="list3" label="label" val="id" v-model="selectList3" pos="right" :inline="false">
    <div slot-scope="data">
      <p>名称: {{data.label}}</p>
      <p>id: {{data.id}}</p>
    </div>
  </yt-radioList>
```
