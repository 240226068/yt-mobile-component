<template>
  <yt-page :title="title">
    <yt-group name="待巡检" :group="false" :searchApi="searchApi">
      <div class="row" slot-scope="scope">{{scope.name}}</div>
    </yt-group>
  </yt-page>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'group-example',
    data() {
      return {
        title: '列表+按时间分组'
      }
    },
    methods: {
      searchApi({ skip, limit, name }) {
        if (skip === 0) this.date = Date.now()
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(this.mock(this.date, limit))
          }, 1000)
        })
      },
      mock(lastTime, limit) {
        const onday = 1000 * 60 * 60 * 24
        let results = []
        for (let i = 0; i < limit; i++) {
          results.push({
            createdAt: lastTime,
            name: '这是一条测试数据'
          })
        }
        this.date = this.date - Math.ceil(onday * 2 * Math.random())
        return results
      }
    }
  }
</script>

<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .row
    background-color #fff
    padding 0 10px
    line-height 50px
    font-size 15px
</style>
