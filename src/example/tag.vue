<template>
  <yt-page title="button" scroll>
    <yt-split></yt-split>
    <yt-cell label="偏大尺寸">
      <yt-tag size="medium">medium</yt-tag>
    </yt-cell>
    <yt-cell label="正常尺寸">
      <yt-tag size="normal">normal</yt-tag>
    </yt-cell>
    <yt-cell label="偏小尺寸">
      <yt-tag size="small">small</yt-tag>
    </yt-cell>
    <yt-cell label="小尺寸">
      <yt-tag size="mini">mini</yt-tag>
    </yt-cell>
    <yt-cell labelWidth="200px" label="可关闭的标签">
      <yt-tag size="mini" closable>喜欢</yt-tag>
    </yt-cell>
  </yt-page>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {}
    },
    methods: {
      handler(tab) {
        console.log('点击了', tab)
        this.more = false
      }
    }
  }
</script>

<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
</style>
