# tabbar
###### 常用于首页，tab位置在下方
###
#### 基础使用
```html
  <yt-tabbar v-model="page">
    <yt-tabbar-panel text="首页" font="iconfont icon-main">这里是首页</yt-tabbar-panel>
    <yt-tabbar-panel text="个人" font="iconfont icon-person">这里是个人</yt-tabbar-panel>
    <yt-tabbar-panel text="好友" font="iconfont icon-main">这里是好友</yt-tabbar-panel>
    <yt-tabbar-panel text="功能菜单" font="iconfont icon-menu">这里是功能菜单</yt-tabbar-panel>
  </yt-tabbar>
```
###
#### 中间位置有个快捷按钮 使用quick来确定将快捷按钮插入到第几个按钮的后方
```html
  <yt-tabbar @quick-click="handler" v-model="page" :quick="2">
    <yt-tabbar-panel text="首页" font="iconfont icon-main">这里是首页</yt-tabbar-panel>
    <yt-tabbar-panel text="个人" font="iconfont icon-person">这里是个人</yt-tabbar-panel>
    <yt-tabbar-panel text="好友" font="iconfont icon-main">这里是好友</yt-tabbar-panel>
    <yt-tabbar-panel text="功能菜单" font="iconfont icon-menu">这里是功能菜单</yt-tabbar-panel>
  </yt-tabbar>
```
