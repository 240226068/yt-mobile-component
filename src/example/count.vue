<template>
  <yt-page title="count计数器">
    <yt-cell labelWidth="100px" v-for="(item, index) in list" border="none" :key="index" :label="`${item.label}(剩余${item.count})`">
      <yt-count :max="item.count" v-model="item.useCount"></yt-count>
    </yt-cell>
  </yt-page>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'count-example',
    data() {
      return {
        list: [
          {
            label: '润滑油',
            useCount: 0,
            count: 8
          },
          {
            label: '灯泡',
            useCount: 2,
            count: 10
          },
          {
            label: '螺丝',
            useCount: 0,
            count: 15
          }
        ]
      }
    }
  }
</script>

<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .row
    display flex
    padding 0 10px
    justify-content space-between
    align-items center
    height 50px
</style>
