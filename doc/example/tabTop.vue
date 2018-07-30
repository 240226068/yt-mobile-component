<template>
  <div class="wrapper">
    <yt-tabs pos="top">
      <yt-tab-panel v-for="(item, index) in list" :option="item" :key="index">
        <div class="panel">
          {{item.label}}
        </div>
      </yt-tab-panel>
    </yt-tabs>
    <yt-btn-group>
      <yt-btn @click="hanlderClickRemove" plain type="danger">移除</yt-btn>
      <yt-btn @click="hanlderClickAdd" plain>增加</yt-btn>
    </yt-btn-group>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'tabs-example',
    data() {
      return {
        list: this.getData()
      }
    },
    methods: {
      getData() {
        return [
          {
            label: '巡检工单',
            badge: {num: 20}
          },
          {
            label: '维修工单',
            badge: {num: 20}
          },
          {
            label: '综合查询',
            badge: {isDot: true}
          }
        ]
      },
      hanlderClickRemove() {
        this.list.splice(0, 1)
      },
      hanlderClickAdd() {
        let list = this.getData()
        let item = list[Math.floor(Math.random() * list.length)]
        this.list.push(item)
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
