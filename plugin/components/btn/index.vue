<template>
  <yt-view
    class="yt-button" @click="handlerClick" :ripple="ripple"
    :class="[
      type ? 'yt-button__' + type : '',
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
    <i v-if="loading && InLoading" class="yt-button-loading iconfont icon-loader"></i>
    <!-- @slot 自定义 -->
    <span v-if="$slots.default"><slot></slot></span>
  </yt-view>
</template>

<script type="text/ecmascript-6">
  import { validator } from '../../utils'

  export default {
    name: 'yt-btn',
    inject: {
      ytForm: {
        default: null
      }
    },
    props: {
      /**
       * btn类型 // white || blue || red || green || black
       */
      type: {
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
      disabled: Boolean,
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
       * 是否进行表单校验
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
    data() {
      return {
        InLoading: false
      }
    },
    methods: {
      async handlerClick(e) {
        if (!this.loading) {
          /**
           * 点击事件
           * @event click
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
