<template>
  <yt-page :more.sync="more" :leftData="leftData" :rightData="rightData" flex>
    <ul class="ul" slot="more">
      <li @click="handler(tab)" v-for="tab in TABS" :key="tab">{{tab}}</li>
    </ul>
    <yt-buttonTab :list="list" slot="title"></yt-buttonTab>
    <div style="flex: 1;">
      这里是具体内容
    </div>
    <yt-btn>提交</yt-btn>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  const TABS = {
    manage: '知识库管理',
    video: '视频学习库',
    statics: '知识库统计'
  }

  export default {
    data() {
      return {
        TABS,
        list: [
          {
            text: '推荐'
          },
          {
            text: '分享',
            badge: { value: 20 }
          },
          {
            text: '推荐',
            badge: { value: 20 }
          }
        ],
        input: false,
        more: false,
        leftData: [
          {
            avatar: require('../img/avatar.jpg'),
            click: () => {
              console.log('点击了头像')
            }
          }
        ],
        rightData: [
          {
            font: 'iconfont icon-more',
            click: () => {
              this.more = !this.more
            }
          }
        ]
      }
    },
    methods: {
      handler(tab) {
        console.log('点击了', tab)
        this.more = false
      }
    }
  }
</script>
<style scoped>
  .page {
    width: 100%;
    height: 100%;
  }
</style>

<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .wrap
    flex 1
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
</style>
