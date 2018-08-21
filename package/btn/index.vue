<template>
  <yt-view
    class="yt-button" @click="handlerClick" :ripple="ripple" :style="btnStyle"
    :class="[
      theme ? 'yt-button__' + theme : '',
      size ? 'yt-button__' + size : '',
      {
        'is-plain': plain,
        'is-edge': edge,
        'is-disabled': disabled,
        'is-loading': loading && InLoading,
        'is-circle': circle,
        'is-round': round
      }
    ]">
    <i v-if="icon" class="yt-button-icon" :class="icon"></i>
    <yt-spinner class="yt-button-loading" color="#fff" size="20px" type="ios-small" v-if="loading && InLoading"></yt-spinner>
    <!-- @slot 自定义 -->
    <span class="yt-button-text" v-if="$slots.default"><slot></slot></span>
  </yt-view>
</template>

<script type="text/ecmascript-6">
  import { validator } from '../utils'

  export default {
    name: 'yt-btn',
    inject: {
      ytForm: {
        default: null
      },
      ytBtnGroup: {
        default: null
      }
    },
    props: {
      /**
       * btn风格类型  white || blue || red || green || black
       */
      theme: {
        type: String,
        default: 'blue'
      },
      /**
       * 按钮尺寸 block || medium || small || mini
       */
      size: {
        type: String,
        default: 'block'
      },
      /**
       * 是否禁用btn
       */
      disabled: {
        type: Boolean,
        default: false
      },
      /**
       * loading时执行的函数
       */
      loading: {
        type: Function,
        default: null
      },
      /**
       * 是否贴边  （没有margin border）
       */
      edge: {
        type: Boolean,
        default: false
      },
      /**
       * 是否为朴素状态
       */
      plain: {
        type: Boolean,
        default: false
      },
      /**
       * 是否圆角按钮
       */
      round: {
        type: Boolean,
        default: false
      },
      /**
       * 是否圆形按钮
       */
      circle: {
        type: Boolean,
        default: false
      },
      /**
       * 图标类名
       */
      icon: {
        type: String
      },
      /**
       * 是否进行表单校验 与form组件结合使用 具体参考form组件
       */
      validator: {
        type: Boolean,
        default: false
      },
      /**
       * 水波效果
       */
      ripple: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      btnStyle() {
        return {
          borderColor: (this.ytBtnGroup && this.ytBtnGroup.edge) ? this.ytBtnGroup.edgeBorderColor : ''
        }
      }
    },
    data() {
      return {
        InLoading: false
      }
    },
    methods: {
      async handlerClick(e) {
        if (!this.loading) {
          /**
           * @description 点击事件
           * @event click
           * @type {event}
           */
          this.$emit('click', e)
          return
        }
        if (!this.InLoading) {
          this.InLoading = true
          const fn = () => { this.InLoading = false }
          if (this.validator && this.ytForm) {
            let { model, rules } = this.ytForm
            let res = await validator(model, rules)
            res.success ? this.loading(fn) : fn()
          } else {
            this.loading(fn)
          }
        }
      }
    }
  }
</script>
