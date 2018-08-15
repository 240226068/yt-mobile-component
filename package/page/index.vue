<template>
  <div class="yt-page" :style="pageStyle">
    <yt-header v-if="header" class="yt-page-header" :class="{'is-absolute': absolute}" @change="change" v-bind="$attrs" v-model="key">
      <!-- @slot 自定义header标题位置的内容 -->
      <slot name="title" v-if="$slots.title"></slot>
      <!-- @slot 自定义header右侧的内容 -->
      <slot name="right" v-if="$slots.right" slot="right"></slot>
      <!-- @slot 自定义header左侧的内容 -->
      <slot name="left" v-if="$slots.left" slot="left"></slot>
    </yt-header>
    <div class="yt-page-container" :class="{ 'is-scroll': scroll, 'is-flex': flex }">
      <!-- @slot 页面的内容层-->
      <slot></slot>
    </div>
    <!-- @slot 页面中弹出层层 -->
    <slot name="alert"></slot>
    <transition name="yt-fade">
      <div class="yt-page-mask" @click="_more = false" v-if="_more"></div>
    </transition>
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
      },
      /**
       * 控制弹出层页面的使用   该属性配合 slot=more一起使用
       */
      more: {
        type: Boolean,
        default: false
      },
      /**
       * @model
       * @description 搜索框的值
       */
      value: {
        type: [String, Number],
        default: ''
      },
      /**
       * 是否为absolute
       */
      absolute: {
        type: Boolean,
        default: false
      },
      /**
       * 是否显示header
       */
      header: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      pageStyle() {
        return {
          backgroundColor: this.fillColor
        }
      },
      key: {
        get() {
          return this.value
        },
        set(val) {
          /**
           * 搜索文字变化事件
           *
           * @event input
           * @type {string} 关键字
           */
          this.$emit('input', val)
        }
      },
      _more: {
        get() {
          return this.more
        },
        set(val) {
          /**
           * 关闭more层
           *
           * @event update:more
           * @type {string} 关键字
           */
          this.$emit('update:more', val)
        }
      }
    },
    methods: {
      change(key) {
        /**
         * 搜索文字变化事件 当截流开启时，该事件将截流派发
         *
         * @event change
         * @type {string} 关键字
         */
        this.$emit('change', key)
      }
    }
  }
</script>
