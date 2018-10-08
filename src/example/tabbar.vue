<template>
  <yt-page title="tabbar" flex>
    <yt-tabbar v-model="page" @change="change" @tab-click="tabClick">
      <yt-tabbar-panel text="首页" font="iconfont icon-main">这里是首页</yt-tabbar-panel>
      <yt-tabbar-panel text="个人" font="iconfont icon-person">这里是个人</yt-tabbar-panel>
      <yt-tabbar-panel text="好友" font="iconfont icon-main">这里是好友</yt-tabbar-panel>
      <yt-tabbar-panel text="功能菜单" font="iconfont icon-menu">这里是功能菜单</yt-tabbar-panel>
    </yt-tabbar>
    <yt-tabbar v-model="page1">
      <yt-tabbar-quick @click="doQuick"></yt-tabbar-quick>
      <yt-tabbar-panel text="首页" font="iconfont icon-main">这里是首页</yt-tabbar-panel>
      <yt-tabbar-panel text="个人" font="iconfont icon-person">这里是个人</yt-tabbar-panel>
      <yt-tabbar-panel text="好友" font="iconfont icon-main">这里是好友</yt-tabbar-panel>
      <yt-tabbar-panel text="功能菜单" font="iconfont icon-menu">这里是功能菜单</yt-tabbar-panel>
    </yt-tabbar>
    <yt-tabbar v-model="page2">
      <yt-tabbar-quick @click="doQuick"><i style="color: #fff;font-size: 22px;" class="iconfont icon-main"></i></yt-tabbar-quick>
      <yt-tabbar-panel text="个人" font="iconfont icon-person">
        <yt-btn @click="show = !show">打开弹出</yt-btn>
        <yt-popup appendToBody pos="center" v-model="show">
          <yt-checkList v-model="select" :max="1" val="id" label="label" :list="list"></yt-checkList>
        </yt-popup>
      </yt-tabbar-panel>
      <yt-tabbar-panel text="好友" font="iconfont icon-main">这里是好友</yt-tabbar-panel>
    </yt-tabbar>
  </yt-page>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        page: 0,
        page1: 0,
        page2: 0,
        show: false,
        select: [],
        list: [
          {
            label: '101分区',
            id: 1
          },
          {
            label: '102分区',
            id: 2
          },
          {
            label: '103分区',
            id: 3
          },
          {
            label: '104分区',
            id: 4
          },
          {
            label: '105分区',
            id: 5
          },
          {
            label: '106分区',
            id: 6
          }
        ]
      }
    },
    methods: {
      tabClick(active) {
        console.log('tab-click', active)
      },
      change(val, oldVal) {
        console.log('change', val, oldVal)
      },
      doQuick() {
        console.log('点击了快捷键')
      }
    }
  }
</script>
