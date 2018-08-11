# tabs
###### 常根据分类展示列表数据
###
#### 基础使用
```html
  <yt-tabs v-model="page">
    <yt-tab-panel text="待巡检" :badge="{value: 10}">待巡检</yt-tab-panel>
    <yt-tab-panel text="巡检中" :badge="{isDot: true}">巡检中</yt-tab-panel>
    <yt-tab-panel text="已巡检">已巡检</yt-tab-panel>
    <yt-tab-panel text="待维修">待维修</yt-tab-panel>
    <yt-tab-panel text="维修中">维修中</yt-tab-panel>
    <yt-tab-panel text="已维修">已维修</yt-tab-panel>
  </yt-tabs>
```
###
#### 禁止左右滑动
```html
  <yt-tabs v-model="page" :slider="false">
    <yt-tab-panel text="待维修">待维修</yt-tab-panel>
    <yt-tab-panel text="维修中">维修中</yt-tab-panel>
    <yt-tab-panel text="已维修">已维修</yt-tab-panel>
  </yt-tabs>
```
