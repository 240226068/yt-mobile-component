<template>
  <yt-page title="评分组件">
    <yt-cell labelWidth="200px" label="默认不区分颜色">
      <yt-rate v-model="grade"></yt-rate>
    </yt-cell>
    <yt-cell label="区分颜色">
      <yt-rate v-model="grade2" :allow-half="true" :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></yt-rate>
    </yt-cell>
    <yt-cell label="辅助文字">
      <yt-rate v-model="grade3" show-text></yt-rate>
    </yt-cell>
    <yt-cell label="只读+半星">
      <yt-rate v-model="grade4" disabled show-score text-color="#ff9900" score-template="{value}">
      </yt-rate>
    </yt-cell>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'rate-example',
    data () {
      return {
        grade: null,
        grade2: null,
        grade3: 2,
        grade4: 2.7
      }
    }
  }
</script>
<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
</style>
