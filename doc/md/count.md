### 计数器

```html
<template>
  <yt-page title="备件使用情况">
    <div class="row" v-for="(item, index) in list" :key="index">
      <span>{{item.label}}(剩余{{item.count}})</span>
      <yt-count :max="item.count" v-model="item.useCount"></yt-count>
    </div>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'count-example',
    data() {
      return {
        list: [
          {
            label: '润滑油',
            useCount: 0,
            count: 8
          },
          {
            label: '灯泡',
            useCount: 2,
            count: 10
          },
          {
            label: '螺丝',
            useCount: 0,
            count: 15
          }
        ]
      }
    }
  }
</script>
<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .row
    display flex
    padding 0 10px
    justify-content space-between
    align-items center
    height 50px
</style>

```
