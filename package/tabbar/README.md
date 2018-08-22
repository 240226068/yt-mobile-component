# tabbar
###### 常用于首页，tab位置在下方
###
> 基础使用
###
```html
<yt-tabbar v-model="page">
  <yt-tabbar-panel text="首页" font="iconfont icon-main">这里是首页</yt-tabbar-panel>
  <yt-tabbar-panel text="个人" font="iconfont icon-person">这里是个人</yt-tabbar-panel>
  <yt-tabbar-panel text="好友" font="iconfont icon-main">这里是好友</yt-tabbar-panel>
  <yt-tabbar-panel text="功能菜单" font="iconfont icon-menu">这里是功能菜单</yt-tabbar-panel>
</yt-tabbar>
```
###
> 使用**quick**快捷键, 默认情况下快捷键的位置在中间, 可监听quick的点击事件**quick-click**
###
```html
<yt-tabbar v-model="page" quick @quick-click="handler">
  <yt-tabbar-panel text="首页" font="iconfont icon-main">这里是首页</yt-tabbar-panel>
  <yt-tabbar-panel text="个人" font="iconfont icon-person">这里是个人</yt-tabbar-panel>
  <yt-tabbar-panel text="好友" font="iconfont icon-main">这里是好友</yt-tabbar-panel>
  <yt-tabbar-panel text="功能菜单" font="iconfont icon-menu">这里是功能菜单</yt-tabbar-panel>
</yt-tabbar>
```
###
> 自定义快捷键的内容 结合slot="quick"
###
```html
<yt-tabbar v-model="page2" quick>
  <yt-tabbar-quick slot="quick" @click="handler">
    <i style="color: #fff;font-size: 22px;" class="iconfont icon-main"></i>
  </yt-tabbar-quick>
  <yt-tabbar-panel text="个人" font="iconfont icon-person">这里是个人</yt-tabbar-panel>
  <yt-tabbar-panel text="好友" font="iconfont icon-main">这里是好友</yt-tabbar-panel>
</yt-tabbar>
```
