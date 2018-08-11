<template>
  <yt-page title="badge">
    <yt-cell v-for="(item, index) in list" :key="index" :label="item.label" isLink>
      <span style="position: relative; padding-right: 10px; margin-right: 20px;">
        测试<yt-badge v-bind="item"></yt-badge>
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
            label: '值为文字',
            value: '更多'
          },
          {
            label: '值为数字22',
            value: 22
          },
          {
            label: '为小圆点',
            isDot: true
          },
          {
            label: 'max为10',
            value: 22,
            max: 10
          }
        ]
      }
    }
  }
</script>

<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
</style>
