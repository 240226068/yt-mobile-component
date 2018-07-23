<template>
  <yt-pull :top-load-method="topLoadMethod ? pullDown : null" :bottom-load-method="bottomLoadMethod ? pullUp : null"
           :name="name" class="yt-group">
    <!-- @slot header-->
    <slot name="header"></slot>
    <p class="yt-group-title" v-if="title">{{title}}</p>
    <yt-noInfo :size="noInfoSize" :text="noInfoText" v-if="!list || !list.length"></yt-noInfo>
    <div class="yt-group-item" :split="split" v-for="(item, index) in groupList" :key="index">
      <p class="yt-group-item_title" v-if="item._tag">{{item._tag}}</p>
      <slot :data="item" :index="index"></slot>
    </div>
    <!-- @slot footer-->
    <slot name="footer"></slot>
  </yt-pull>
</template>
<script type="text/ecmascript-6">
  import { groupDataByTime } from '../../utils'

  export default {
    name: 'yt-group',
    props: {
      /**
       * 需要分组的数组
       */
      list: {
        type: Array,
        default() {
          return []
        }
      },
      /**
       * 小标题
       */
      title: {
        type: String,
        default: ''
      },
      /**
       * 外部调用时传进来的name   在topLoadMethod和bottomLoadMethod函数中  会回传出去，用于用户判断是哪个group,此情形在多tab中常见
       */
      name: [ Object, String, Number ],
      /**
       * item项目之间的分割线 具体取值有   'normal' || 'bold' || 'none'
       */
      split: {
        type: String,
        default: 'normal'
      },
      /**
       * 是否分组
       */
      group: {
        type: Boolean,
        default: true
      },
      /**
       *  下拉刷新函数
       */
      topLoadMethod: {
        type: Function
      },
      /**
       *  上拉加载函数
       */
      bottomLoadMethod: {
        type: Function
      },
      noInfoText: {
        type: String,
        default: '暂无内容'
      },
      noInfoSize: {
        type: String,
        default: 'large'
      }
    },
    data() {
      return {
        groupList: []
      }
    },
    methods: {
      pullDown(loaded, name) {
        if (typeof this.topLoadMethod !== 'function') return
        this.topLoadMethod((list) => {
          loaded()
          this.groupList = this.group ? groupDataByTime(list) : list
        }, name, 0)
      },
      pullUp(loaded, name) {
        if (typeof this.bottomLoadMethod !== 'function') return
        this.bottomLoadMethod((list) => {
          loaded()
          this.groupList = this.groupList.concat(list)
          this.groupList = this.group ? groupDataByTime(this.groupList) : this.groupList
        }, name, this.groupList.length)
      }
    },
    mounted() {
      this.groupList = this.group ? groupDataByTime(this.list) : this.list
    },
    watch: {
      'list'(val) {
        this.groupList = this.group ? groupDataByTime(this.list) : this.list
      }
    }
  }
</script>
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .yt-group
    background transparent
    &-title
      font-size 14px
      color #666666
      height 30px
      line-height 30px
      padding 0 10px
      background-color #f9f9fb

    &-item
      &::after
        content " "
        display block
        width 100%
      &[split=normal]
        &::after
          height 1px
          background-color #e5e5e5
          transform scaleY(0.5)
      &[split=bold]
        &::after
          height 10px
          background-color #f5f5f5
      &[split=none]
        &::after
          display none
      &_title
        font-size 14px
        color #666666
        height 30px
        line-height 30px
        padding 0 10px
        background-color #fafafa
</style>
