<template>
  <div class="yt-page" :style="pageStyle">
    <slot name="header">
      <yt-header :class="['yt-page-header', { 'is-fixed': headerFixed }]"
                 @search-change="searchChange" :origin="origin" :title="title" :input="input" :type="type"
                 :throttle="throttle" :shadow="shadow" :search="search" :leftData="leftData" :rightData="rightData">
        <!-- @slot titlebar -->
        <slot name="bar" v-if="$slots.bar"></slot>
        <slot name="right" v-if="$slots.right" slot="right"></slot>
        <slot name="left" v-if="$slots.left" slot="left"></slot>
      </yt-header>
    </slot>
    <div class="yt-page-container" :class="[
        wrapClass,
        {
          'is-scroll': scroll,
          'is-flex': flex
        }
      ]">
      <!-- @slot 页面的内容层-->
      <slot></slot>
    </div>
    <!-- @slot 页面中弹出层层 -->
    <slot name="alert"></slot>
    <yt-mask :visible.sync="_more"/>
    <transition name="yt-page-more">
      <div class="yt-page-more" v-if="_more">
        <!-- @slot 页面中more层  与more属性配合使用-->
        <slot name="more"></slot>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-page',
    props: {
      /**
       * 导航左侧的按钮
       * 例如 [{ font: 'iconfont icon-back', text: '返回',  click: () => {}}]
       */
      leftData: {
        type: Array,
        default() {
          return [
            {
              font: 'iconfont icon-back',
              click: () => {
                this.$router.$back()
              }
            }
          ]
        }
      },
      /**
       * 导航右侧的按钮
       * 例如 [{ font: 'iconfont icon-search',  click: () => {}}]
       */
      rightData: {
        type: Array,
        default() {
          return []
        }
      },
      /**
       * 是否有阴影
       */
      shadow: {
        type: Boolean,
        default: true
      },
      /**
       * 导航中input的缩放原点位置  默认缩放原点在右侧
       */
      origin: {
        type: String,
        default: 'right'
      },
      type: {
        type: String,
        default: null
      },
      /**
       *  导航中搜索框的默认文字
       */
      search: {
        type: String,
        default: ''
      },
      /**
       *  控制导航中input的显示与否
       */
      input: {
        type: Boolean,
        default: false
      },
      /**
       * 控制弹出层页面的使用   该属性配合 slot=more一起使用
       */
      more: {
        type: Boolean,
        default: false
      },
      /**
       * 导航中间显示的文字
       */
      title: String,
      /**
       *  页面内容层的class
       */
      wrapClass: String,
      /**
       *  页面内容层是否采用flex布局 方向为column
       */
      flex: {
        type: Boolean,
        default: false
      },
      /**
       *  页面内容层是否可以滚动
       */
      scroll: {
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
       * 背景色
       */
      fillColor: {
        type: String,
        default: '#f3f4f6'
      },
      /**
       * header固定
       */
      headerFixed: {
        type: Boolean,
        default: false
      },
      /**
       * 是否有阴影
       */
      shadow: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      pageStyle() {
        return {
          background: this.fillColor
        }
      },
      _more: {
        get() {
          return this.more
        },
        set(val) {
          this.$emit('update:more', val)
        }
      }
    },
    methods: {
      searchChange(key) {
        /**
         * 搜索文字变化事件
         *
         * @event search-change
         * @type {string} 关键字
         */
        this.$emit('search-change', key)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  .yt-page
    display flex
    flex-direction column
    height 100%
    overflow hidden
    transition all .3s cubic-bezier(.645, .045, .355, 1)

    &-header
      &.is-fixed
        position absolute
        top 0
        left 0
        width 100%

    &-container
      position relative
      flex 1
      overflow hidden
      &::-webkit-scrollbar
        display none

      &.is-scroll
        overflow-x hidden
        overflow-y auto

      &.is-flex
        overflow hidden
        display flex
        flex-direction column

    &-more
      position absolute
      top 76px
      right 5px
      z-index 2000
      border-radius 4px
      background-color #ffffff
      transform-origin 100% 0 0
      transition all .3s cubic-bezier(.645, .045, .355, 1)

      &::before
        content ''
        position absolute
        right 0
        top 0
        width 0
        height 0
        border-width 0 10px 10px
        border-style solid
        border-color transparent transparent #ffffff
        transform translate3d(-50%, -100%, 0)
</style>
