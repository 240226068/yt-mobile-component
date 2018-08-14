# checkBox组件
###### 多选框 常用于表单多选
###
#### 基础用法
```html
  <yt-checkBox v-model="select" name="北京" label="北京" disabled></yt-checkBox>
  <yt-checkBox v-model="select" name="天津" label="天津"></yt-checkBox>
  <yt-checkBox v-model="select" name="山西" label="山西"></yt-checkBox>
```
###
#### 按钮风格为简单模式
```html
  <yt-checkBox v-model="select" name="北京" label="北京" pos="right" simple></yt-checkBox>
  <yt-checkBox v-model="select" name="天津" label="天津" pos="right" simple></yt-checkBox>
  <yt-checkBox v-model="select" name="山西" label="山西" pos="right" simple></yt-checkBox>
```
###
#### inline状态的
```html
  <yt-checkBox inline v-model="select" name="北京" label="北京"></yt-checkBox>
  <yt-checkBox inline v-model="select" name="天津" label="天津"></yt-checkBox>
  <yt-checkBox inline v-model="select" name="山西" label="山西"></yt-checkBox>
```
###
#### checkbox在右侧
```html
  <yt-checkBox v-model="select" name="北京" label="北京" pos="right"></yt-checkBox>
  <yt-checkBox v-model="select" name="天津" label="天津" pos="right"></yt-checkBox>
  <yt-checkBox v-model="select" name="山西" label="山西" pos="right"></yt-checkBox>
```
