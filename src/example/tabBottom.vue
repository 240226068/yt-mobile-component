<template>
  <div class="wrapper">
    <yt-btn @click="handlerToggle">切换tab样式</yt-btn>
    <yt-tabs :tabbarType="tabbarType" pos="bottom">
      <yt-tab-panel v-for="(item, index) in list" :option="item" :key="index">
        <div class="panel">
          {{item.label}}
        </div>
      </yt-tab-panel>
    </yt-tabs>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'tabs-example',
    data() {
      return {
        tabbarType: '',
        list: [
          {
            label: '巡检工单',
            src: require('../img/inspect.png'),
            activeSrc: require('../img/inspect_blue.png'),
            badge: {num: 20}
          },
          {
            label: '维修工单',
            src: require('../img/repair.png'),
            activeSrc: require('../img/repair_blue.png'),
            badge: {num: 20}
          },
          {
            label: '综合查询',
            src: require('../img/inspect.png'),
            activeSrc: require('../img/inspect_blue.png'),
            badge: {isDot: true}
          }
        ]
      }
    },
    methods: {
      handlerToggle() {
        this.tabbarType = this.tabbarType ? '' : 'scale'
      }
    }
  }
</script>
<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .wrapper
    display flex
    flex-direction column
    width 100%
    height 100%
</style>
