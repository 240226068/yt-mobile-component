<template>
  <div class="yt-input" :class="[`yt-input__${theme}`, {'is-noBorder': !border}]" :style="inputStyle">
    <input :placeholder="placeholder" :disabled="disabled" v-model="key" ref="input"/>
    <i class="yt-input-clear iconfont icon-input-close" v-if="key" @click="key = ''"></i>
  </div>
</template>
<script type="text/ecmascript-6">
  import { throttle } from '../../utils'

  export default {
    name: 'yt-input',
    props: {
      /**
       *  placeholder的文字
       */
      placeholder: {
        type: String,
        default: '请输入...'
      },
      /**
       *  当前值
       *  @model
       */
      value: {
        type: [String, Number],
        default: ''
      },
      /**
       *  是否禁用输入
       */
      disabled: {
        type: Boolean,
        default: false
      },
      /**
       *  背景色
       */
      fillColor: {
        type: String,
        default: '#FFFFFF'
      },
      /**
       *  风格  dark  light
       */
      theme: {
        type: String,
        default: 'dark'
      },
      /**
       *  是否显示border
       */
      border: {
        type: Boolean,
        default: false
      },
      /**
       * 是否开启截流
       */
      throttle: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        key: this.value
      }
    },
    computed: {
      inputStyle() {
        return {
          backgroundColor: this.fillColor
        }
      }
    },
    methods: {
      /**
       * @public
       * @description 使input失去焦点
       * @return {void}
       */
      blur() {
        this.$refs.input.blur()
      },
      /**
       * @public
       * @description 使input获取焦点
       * @return {void}
       */
      focus() {
        this.$refs.input.focus()
      }
    },
    watch: {
      'key'(val) {
        /**
         * 双向绑定 值改变实时派发
         * @event input
         * @type {string}
         */
        this.$emit('input', val)
        const fn = (val) => {
          /**
           * 值改变时，如果开启截流事件会截流派发
           * @event change
           * @type {string}
           */
          this.$emit('change', val)
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
