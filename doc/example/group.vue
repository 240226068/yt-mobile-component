<template>
  <yt-page :title="title" :leftData="[]">
    <yt-group :list="list" name="pull" :top-load-method="pullDown" :bottom-load-method="pullUp">
      <div class="row" slot-scope="scope">{{scope.data.name}}</div>
    </yt-group>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  import {delayed} from 'yt'
  export default {
    name: 'group-example',
    data () {
      return {
        title: '列表+按时间分组',
        list: this.mock(Date.now())
      }
    },
    methods: {
      mock(lastTime) {
        const onday = 1000 * 60 * 60 * 24
        let results = []
        for (let i = 0; i < 8; i++) {
          results.push({
            createdAt: lastTime - onday * (Math.random() > 0.5 ? i : i - 1),
            name: '这是一条测试数据'
          })
        }
        return results
      },
      pullDown(loaded, name) {
        console.log(`获得了pull的名称为:${name}`)
        delayed(1500)
          .then(() => {
            // resolve
            return this.list
          }, () => {
            // reject
            return []
          })
          .then(loaded)
      },
      pullUp(loaded, name) {
        console.log(`获得了pull的名称为:${name}`)
        delayed(1500)
          .then(() => {
            // resolve
            return this.mock(this.list[this.list.length - 1].createdAt)
          }, () => {
            // reject
            return []
          })
          .then(loaded)
      }
    }
  }
</script>
<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .row
    padding 0 10px
    line-height 50px
    font-size 15px
</style>
