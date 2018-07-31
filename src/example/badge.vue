<template>
  <yt-page title="badge">
    <yt-cell v-for="(item, index) in list" :key="index" :label="item.label">
      <span style="position: relative;margin-right: 20px;">
        测试<yt-badge :value="item.value" :max="item.max" :isDot="item.isDot"/>
      </span>
    </yt-cell>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'badge-example',
    data() {
      return {
        list: [
          {
            label: '为小圆点',
            value: 20,
            isDot: true
          },
          {
            label: '值为文字',
            value: '更多'
          },
          {
            label: 'max为10',
            value: 22,
            max: 10
          },
          {
            label: '值为数字122 max默认为99',
            value: 122
          },
          {
            label: '值为数字22',
            value: 22
          },
          {
            label: '设置背景色',
            value: 99
          }
        ]
      }
    }
  }
</script>
<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .row
    display flex
    align-items center
    justify-content space-between
    line-height 40px
    padding 0 10px
    font-size 14px
</style>
