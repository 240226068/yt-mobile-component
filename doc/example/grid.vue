<template>
  <yt-page title="宫格" :flex="true">
    <yt-cell title="x为3, y为5"></yt-cell>
    <yt-grid class="flex" :x="3" :y="5" :list="menuList">
      <yt-grid-item slot-scope="{data}" :data="data"></yt-grid-item>
    </yt-grid>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'Grid-example',
    data() {
      return {
        menuList: [
          {
            font: 'iconfont icon-message',
            badge: { type: 'danger', isDot: true },
            text: '待办事项'
          },
          {
            img: require('../img/map.png'),
            badge: { type: 'primary', num: 22, max: 10 },
            text: '查看地图'
          },
          {
            img: require('../img/baojing.png'),
            badge: { type: 'danger', num: 122 },
            text: '设备报警'
          },
          {
            img: require('../img/glaq.png'),
            badge: { num: 50, color: '#508cfe' },
            text: '管廊安全'
          },
          {
            img: require('../img/glyw.png'),
            text: '管廊运维'
          },
          {
            img: require('../img/gljy.png'),
            text: '管廊经营'
          },
          {
            img: require('../img/yjjy.png'),
            text: '应急抢险'
          },
          {
            img: require('../img/zsk.png'),
            text: '知识库'
          },
          {
            img: require('../img/zjk.png'),
            text: '专家库'
          },
          {
            img: require('../img/daiban.png'),
            text: '待办事项'
          },
          {
            img: require('../img/map.png'),
            text: '查看地图'
          }
        ]
      }
    }
  }
</script>
<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .flex
    flex 1
</style>
