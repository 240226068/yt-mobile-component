<template>
  <div class="yt-form">
    <div class="yt-form-wrapper yt-scroll">
      <slot></slot>
    </div>
    <slot v-if="$slots.btn" name="btn"></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-form',
    provide() {
      return {
        ytForm: this
      }
    },
    props: {
      /**
       * 铺满父级
       */
      full: {
        type: Boolean,
        default: true
      },
      /**
       * 是否禁用form  可使下面的 btn input textarea组件处于禁用状态
       */
      disabled: {
        type: Boolean,
        default: false
      },
      /**
       *  表单数据对象
       */
      model: {
        type: Object,
        default() {
          return {}
        }
      },
      /**
       * 表单验证规则
       */
      rules: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>
