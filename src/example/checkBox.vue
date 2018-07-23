<template>
  <div class="page" title="checkbox">
    <yt-checkBox v-for="item in list" :key="item.name" v-model="select" :name="item.name">
      {{item.name}}
    </yt-checkBox>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data: () => ({
      select: [],
      list: [
        {
          name: '北京'
        },
        {
          name: '天津'
        },
        {
          name: '山西'
        },
        {
          name: '陕西'
        },
        {
          name: '重庆'
        }
      ]
    }),
    watch: {
      select(val) {
        console.log(val)
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>
  .page
    background #f1f2f3
</style>
