<template>
  <yt-page title="宫格">
    <yt-grid :x="3" :y="5" :list="menuList">
      <yt-grid-item slot-scope="data" v-bind="data"></yt-grid-item>
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
            badge: { isDot: true },
            text: '待办事项'
          },
          {
            img: require('../img/map.png'),
            badge: { value: 22, max: 10 },
            text: '查看地图'
          },
          {
            img: require('../img/baojing.png'),
            badge: { value: 122 },
            text: '设备报警'
          },
          {
            img: require('../img/glaq.png'),
            badge: { value: '更多' },
            text: '管廊安全'
          },
          {
            img: require('../img/glyw.png'),
            badge: { value: '紧急' },
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
          },
          {
            img: require('../img/map.png'),
            text: '查看地图'
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
</style>
