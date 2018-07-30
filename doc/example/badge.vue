<template>
  <yt-page title="badge">
    <p class="row" v-for="(item, index) in list" :key="index">
      <label>{{item.label}}</label>
      <span style="position: relative;margin-right: 20px;">
        测试<yt-badge :type="item.type" :num="item.num" :text="item.text" :max="item.max" :color="item.color" :isDot="item.isDot"/>
      </span>
    </p>
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
            isDot: true
          },
          {
            label: '值为文字',
            text: '更多',
            type: 'primary'
          },
          {
            label: 'max为10',
            num: 22,
            max: 10
          },
          {
            label: '值为数字122 max默认为99',
            num: 122
          },
          {
            label: '值为数字22',
            num: 22
          },
          {
            label: '设置背景色',
            num: 99,
            color: '#508cfe'
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
