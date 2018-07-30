<template>
  <yt-page title="组件列表" :leftData="[]">
    <yt-card title="基础组件">
      <yt-cell @click="handler(item)" v-for="(item, index) in list" :label="item.label" :key="index" isLink ripple></yt-cell>
    </yt-card>
  </yt-page>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'example',
    data() {
      return {
        list: [
          {
            label: 'cell',
            path: './cell'
          }
        ]
      }
    },
    methods: {
      handler(item) {
        this.$router.$push(item.path)
      }
    }
  }
</script>

<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
</style>
