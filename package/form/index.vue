<template>
  <div class="yt-form">
    <div class="yt-form-wrapper">
      <!--@slot 具体表单内容-->
      <slot></slot>
    </div>
    <!--@slot 自定义btn-->
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
       * 是否禁用form  可使下面的 btn input textarea等组件处于禁用状态
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
