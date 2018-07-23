<template>
  <div>
    <div class="yt-searchPage-nav yt-border-all">
      <yt-search @change="change" :search="search" :placeholder="placeholder" :throttle="throttle" class="yt-searchPage-nav_search" ref="search"></yt-search>
      <span @click="handlerClick" class="yt-searchPage-nav_btn">{{btn}}</span>
    </div>
    <div class="yt-searchPage-container" :flex="flex">
      <!-- @slot 主体内容 -->
      <slot></slot>
    </div>
    <!-- @slot 弹出内容 -->
    <slot name="alert"></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import {throttle} from '../../utils'
  export default {
    name: 'yt-pageSearch',
    props: {
      /**
       * 页面右侧的按钮文字
       */
      btn: {
        type: String,
        default: '返回'
      },
      /**
       * 搜索框的默认值
       */
      search: {
        type: String,
        default: ''
      },
      /**
       * 页面主体是否采用flex布局
       */
      flex: {
        type: Boolean,
        default: false
      },
      /**
       * 是否开启截流
       */
      throttle: {
        type: Boolean,
        default: true
      },
      /**
       * 输入框placeholder
       */
      placeholder: {
        type: String,
        default: '搜索'
      }
    },
    methods: {
      change(key) {
        /**
         * 搜索文字变化事件
         * @event change
         */
        this.$emit('change', key)
      },
      handlerClick() {
        /**
         * 点击右侧btn事件
         * @event click-btn
         */
        this.$emit('click-btn')
      }
    },
    activated() {
      this.$refs.search.focus()
    }
  }
</script>
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .yt-searchPage
    &-nav
      display flex
      align-items center
      background-color #ffffff
      padding-top 22px
      &_search
        flex 1
      &_btn
        color #0076FF
        margin 15px 15px 15px 5px
    &-container
      flex 1
      overflow hidden
      position relative
      &[flex=true]
        display flex
        flex-direction column
</style>
