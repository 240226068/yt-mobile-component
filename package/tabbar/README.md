# tabbar
###### 常用于首页，tab位置在下方
###
> 基础使用
###
```html
<yt-tabbar v-model="page">
  <yt-tabbar-panel text="首页" font="yt-icon icon-main">这里是首页</yt-tabbar-panel>
  <yt-tabbar-panel text="个人" font="yt-icon icon-person">这里是个人</yt-tabbar-panel>
  <yt-tabbar-panel text="好友" font="yt-icon icon-main">这里是好友</yt-tabbar-panel>
  <yt-tabbar-panel text="功能菜单" font="yt-icon icon-menu">这里是功能菜单</yt-tabbar-panel>
</yt-tabbar>
```
###
> 使用**yt-tabbar-quick**组件插入快捷键, 默认情况下快捷键的位置在中间。
###
```html
<yt-tabbar v-model="page">
  <yt-tabbar-quick @click="handler"></yt-tabbar-quick>
  <yt-tabbar-panel text="首页" font="yt-icon icon-main">这里是首页</yt-tabbar-panel>
  <yt-tabbar-panel text="个人" font="yt-icon icon-person">这里是个人</yt-tabbar-panel>
  <yt-tabbar-panel text="好友" font="yt-icon icon-main">这里是好友</yt-tabbar-panel>
  <yt-tabbar-panel text="功能菜单" font="yt-icon icon-menu">这里是功能菜单</yt-tabbar-panel>
</yt-tabbar>
```
###
> 自定义快捷键的内容
###
```html
<yt-tabbar v-model="page2">
  <yt-tabbar-quick @click="handler">
    <i style="color: #fff;font-size: 22px;" class="yt-icon icon-main"></i>
  </yt-tabbar-quick>
  <yt-tabbar-panel text="个人" font="yt-icon icon-person">这里是个人</yt-tabbar-panel>
  <yt-tabbar-panel text="好友" font="yt-icon icon-main">这里是好友</yt-tabbar-panel>
</yt-tabbar>
```
