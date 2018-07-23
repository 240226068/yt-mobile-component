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
<style type="text/postcss" lang="postcss">
  @name yt {
    @b form {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      @e wrapper {
        flex: 1;
        background-color: transparent;
      }
    }
  }
</style>
