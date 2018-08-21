<template>
  <div class="yt-header" :class="[theme ? `yt-header__${theme}` : '',{ 'is-shadow': shadow }]">
    <transition name="yt-fade">
      <div class="yt-header-text" v-if="!input && !$slots.default" v-text="title"></div>
    </transition>
    <div class="yt-header-wrapper">
      <div v-if="(leftData && leftData.length) || $slots.left">
        <!--@slot head 左边-->
        <slot name="left"></slot>
        <header-btn v-for="(item, index) in leftData" v-bind="item" :key="index"></header-btn>
      </div>
      <div class="yt-header-center">
        <transition name="yt-fade">
          <div class="yt-header-bar" v-show="!input && $slots.default">
            <!-- @slot 中间 -->
            <slot></slot>
          </div>
        </transition>
        <transition name="yt-input-scale">
          <yt-input @change="change" class="yt-header-input" :class="`is-origin-${origin}`" v-if="input" v-model="key" ref="input"
                    :placeholder="placeholder" :fillColor="fillColor" :theme="inputTheme" :border="border" :throttle="throttle">
          </yt-input>
        </transition>
      </div>
      <div v-if="(rightData && rightData.length) || $slots.right">
        <!--@slot  head 右边-->
        <slot name="right"></slot>
        <header-btn v-for="(item, index) in rightData" v-bind="item" :key="index"></header-btn>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import headerBtn from './headerBtn'

  export default {
    name: 'yt-header',
    components: { headerBtn },
    props: {
      /**
       * 导航左侧的按钮 数据类型为headerBtn的参数
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
       * 导航左侧的按钮 数据类型为headerBtn的参数
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
       *  控制导航中input的显示与否
       */
      input: {
        type: Boolean,
        default: false
      },
      /**
       *  风格 取值 white || transparent
       */
      theme: {
        type: String,
        default: null
      },
      /**
       *  transform 的原点  取值  left || right
       */
      origin: {
        type: String,
        default: 'right'
      },
      /**
       *  placeholder的文字
       */
      placeholder: {
        type: String,
        default: '请输入...'
      },
      /**
       *  背景色
       */
      fillColor: {
        type: String,
        default: 'transparent'
      },
      /**
       *  输入框的风格  dark || light
       */
      inputTheme: {
        type: String,
        default: 'light'
      },
      /**
       *  是否x显示border
       */
      border: {
        type: Boolean,
        default: true
      },
      /**
       * 是否开启截流
       */
      throttle: {
        type: Boolean,
        default: true
      },
      /**
       * 搜索框的值
       */
      value: {
        type: [String, Number],
        default: ''
      }
    },
    computed: {
      key: {
        get() {
          return this.value
        },
        set(val) {
          this.$emit('input', val)
        }
      }
    },
    methods: {
      change(val) {
        this.$emit('change', val)
      }
    },
    watch: {
      'input'() {
        if (this.input) {
          this.$nextTick(() => {
            this.$refs.input.focus()
          })
        }
      }
    }
  }
</script>
