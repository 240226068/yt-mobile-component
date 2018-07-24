<template>
  <yt-page title="tab" :flex="true" :leftData="[]" :rightData="rightData" :more.sync="more">
    <ul class="ul" slot="more">
      <li @click="handlerClickMoreItem(key)" v-for="(tab, key) in TABS" :key="key">{{tab}}</li>
    </ul>
    <router-view></router-view>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  const TABS = {
    bottom: 'tab在下面',
    top: 'tab在上面',
    left: 'tab在左侧'
  }
  export default {
    name: 'tab-example',
    data() {
      return {
        TABS,
        more: false,
        rightData: [{
          font: 'iconfont icon-more',
          click: () => {
            this.more = !this.more
          }
        }]
      }
    },
    methods: {
      handlerClickMoreItem(key) {
        this.$router.push({path: '/tabs/' + key})
        this.more = !this.more
      }
    }
  }
</script>
<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .ul
    min-width 120px
    li
      padding 0 15px
      color #333333
      font-size 14px
      height 40px
      line-height 40px
      text-align center
      box-sizing border-box
      border-bottom 1px solid #f1f1f1
      &:last-child
        border-bottom 0
      &:active
        background-color #f5f5f5

  .panel
    width 100%
    height 100%
    display flex
    align-items center
    justify-content center
    font-size 20px
</style>
