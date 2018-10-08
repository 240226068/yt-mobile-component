<template>
  <yt-page title="组件列表" :leftData="[]" scroll>
    <yt-cell @click="handler(item)" v-for="(item, index) in list" :border="index + 1 === list.length ? 'none' : 'half'" :label="item.name" :key="index" isLink ripple></yt-cell>
  </yt-page>
</template>

<script type="text/ecmascript-6">
  import { routes } from './router'

  export default {
    name: 'example',
    data() {
      return {
        list: routes
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
