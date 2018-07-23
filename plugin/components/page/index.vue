<template>
  <div class="yt-page" :style="pageStyle">
    <!-- @slot page 的 header-->
    <slot name="header">
      <yt-header @search-change="searchChange" v-bind="$attrs">
        <!-- @slot header title -->
        <slot name="title" v-if="$slots.title"></slot>
        <!-- @slot header right -->
        <slot name="right" v-if="$slots.right" slot="right"></slot>
        <!-- @slot header left -->
        <slot name="left" v-if="$slots.left" slot="left"></slot>
      </yt-header>
    </slot>
    <div class="yt-page-container" :class="{ 'is-scroll': scroll, 'is-flex': flex }">
      <!-- @slot 页面的内容层-->
      <slot></slot>
    </div>
    <!-- @slot 页面中弹出层层 -->
    <slot name="alert"></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-page',
    props: {
      /**
       * 背景色
       */
      fillColor: {
        type: String,
        default: '#f3f4f6'
      },
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
      }
    },
    computed: {
      pageStyle() {
        return {
          backgroundColor: this.fillColor
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
