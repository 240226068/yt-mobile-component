<template>
  <div class="yt-header" :class="[type ? `yt-header__${type}` : '',{ 'is-shadow': shadow }]">
    <transition name="yt-fade">
      <div class="yt-header-text" v-if="!input && !$slots.default" v-text="title"></div>
    </transition>
    <div class="yt-header-wrapper">
      <div v-if="(leftData && leftData.length) || $slots.left">
        <!--@slot head-left-->
        <slot name="left"></slot>
        <header-btn v-for="(item, index) in leftData" v-bind="item" :key="index"></header-btn>
      </div>
      <div class="yt-header-center">
        <transition name="yt-fade">
          <div class="yt-header-bar" v-show="!input && $slots.default">
            <!-- @slot titlebar -->
            <slot></slot>
          </div>
        </transition>
        <transition name="yt-headerInput">
          <div v-if="input" class="yt-headerInput" :class="`is-origin-${origin}`">
            <input v-model="key" placeholder="搜索" type="text" ref="input">
            <i class="yt-headerInput-clear iconfont icon-input-close" @click="key = ''" v-if="key"></i>
          </div>
        </transition>
      </div>
      <div v-if="(rightData && rightData.length) || $slots.right">
        <!--@slot head-right-->
        <slot name="right"></slot>
        <header-btn v-for="(item, index) in rightData" v-bind="item" :key="index"></header-btn>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import { throttle } from '../../utils'
  import headerBtn from './headerBtn'

  export default {
    name: 'yt-header',
    components: {
      headerBtn
    },
    data() {
      return {
        key: this.search
      }
    },
    props: {
      /**
       * 导航左侧的按钮
       * 例如 [{ font: 'iconfont icon-back', text: '返回',  click: () => {}}]
       */
      leftData: {
        type: Array,
        default() {
          return [{
            font: 'iconfont icon-back',
            click: () => {
              this.$router.$back()
            }
          }]
        }
      },
      /**
       * 导航左侧的按钮
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
       * 导航中间显示的文字
       */
      title: {
        type: String
      },
      /**
       * 导航中input的缩放原点位置  默认缩放原点在右侧
       */
      origin: {
        type: String,
        default: 'right'
      },
      /**
       *  导航中搜索框默认文字
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
       * 是否开启截流
       */
      throttle: {
        type: Boolean,
        default: true
      },
      /**
       * 风格
       */
      type: {
        type: String,
        default: null
      }
    },
    watch: {
      'input'() {
        if (this.input) {
          this.$nextTick(() => {
            this.$refs.input.focus()
          })
        }
      },
      'search'(val) {
        this.key = val
      },
      'key'(val) {
        const fn = (val) => {
          /**
           * 搜索文字变化事件
           * @event search-change
           */
          this.$emit('search-change', val)
        }
        if (!this.throttle) {
          fn(val)
        } else {
          if (!this._throttleInstance) {
            this._throttleInstance = throttle(fn, 500, 2000)
          }
          this._throttleInstance(val)
        }
      }
    }
  }
</script>
