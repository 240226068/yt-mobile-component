
<template>
  <yt-page scroll @search-change="searchChange" :search="search" :origin="origin" :title="title" :more.sync="more" :leftData="leftData" :rightData="rightData" :input="input" :flex="flex">
    <yt-button-tab @change="tabChange" v-model="barActive" v-if="showBar" slot="bar" :list="list"></yt-button-tab>
    <div class="yt-scroll wrap">
      <yt-cell @click="handlerSetTitle" title="设置title" :isLink="true"/>
      <yt-cell @click="handlerSetTitleBar" title="设置titlebar" :isLink="true"/>
      <yt-cell @click="handlerSetData" title="设置单个图片" :isLink="true"/>
      <yt-cell @click="handlerSetData2" title="设置单个图标" value="搜索可打开input" :isLink="true"/>
      <yt-cell @click="handlerSetData3" title="设置多个图标" value="加号可打开遮罩层" :isLink="true"/>
      <yt-cell @click="handlerSetData4" title="设置多个文字" :isLink="true"/>
      <yt-cell @click="handlerSetFlex" :title="flex ? '关闭' : '开启' + 'flex'" :isLink="true"/>
      <yt-split></yt-split>
      <yt-cell border="none" title="测试内容" v-for="i in 10" :key="i"></yt-cell>
    </div>
    <ul class="ul" slot="more">
      <li @click="handlerClickMoreItem(tab)" v-for="tab in TABS" :key="tab">{{tab}}</li>
    </ul>
    <yt-btn type="primary" size="block">测试page-flex属性</yt-btn>
  </yt-page>
</template>

<script type="text/ecmascript-6">
  const TABS = {
    manage: '知识库管理',
    video: '视频学习库',
    statics: '知识库统计'
  }
  export default {
    name: 'page-example',
    data () {
      return {
        TABS,
        origin: 'left',
        search: '搜索啊啊',
        title: 'page',
        rightData: [],
        leftData: [],
        input: false,
        more: false,
        flex: false,
        list: ['推荐', '关注'],
        active: 1,
        barActive: 1,
        showBar: false
      }
    },
    methods: {
      handlerSetTitleBar() {
        this.showBar = !this.showBar
      },
      tabChange(page) {
        console.log(page, 'change事件收到的barActive值')
      },
      searchChange(key) {
        console.log(key)
      },
      handlerSetFlex() {
        this.flex = !this.flex
      },
      handlerClickMoreItem(tab) {
        console.log('点击了', tab)
        this.more = false
      },
      handlerSetTitle() {
        this.title = 'page(这里是新标题)'
      },
      handlerSetData() {
        this.rightData = [{
          src: require('../img/live.png'),
          click: () => {
            console.log('报警')
          }
        }]
      },
      handlerSetData2() {
        this.leftData = [{
          font: 'iconfont icon-search',
          click: () => {
            this.input = !this.input
            console.log('search')
          }
        }]
      },
      handlerSetData3() {
        this.rightData = [{
          font: 'iconfont icon-more',
          click: () => {
            this.more = true
            console.log('more, 点击了more', this.more)
          }
        }]
      },
      handlerSetData4() {
        this.rightData = [{
          text: '完成',
          click: () => {
            console.log('完成')
          }
        }, {
          text: '取消',
          click: () => {
            console.log('取消')
          }
        }]
      }
    }
  }
</script>

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
