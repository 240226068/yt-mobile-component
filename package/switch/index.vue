<template>
  <label class="yt-switch" :class="{ 'is-closely': closely }">
    <span class="yt-switch-label">
      <!-- @slot switch描述文字-->
      <slot>{{label}}</slot>
    </span>
    <span class="yt-switch-wrapper">
      <input class="yt-switch-input" :disabled="_disabled" type="checkbox" v-model="currentValue">
      <span class="yt-switch-core"></span>
    </span>
  </label>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-switch',
    inject: {
      ytForm: {
        default: () => ({})
      }
    },
    props: {
      /**
       * 是否紧挨着文字
       */
      closely: {
        type: Boolean,
        default: false
      },
      /**
       * 该switch是否打开
       */
      value: {
        type: Boolean,
        default: false
      },
      /**
       * 该switch描述文字
       */
      label: String,
      /**
       * 禁用输入框
       */
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      _disabled() {
        return this.disabled || (this.ytForm || {}).disabled
      },
      currentValue: {
        get() {
          return this.value
        },
        set(val) {
          this.$emit('input', val)
          /**
           * @event change
           * @description switch值改变的事件
           * @type {Boolean}
           */
          this.$emit('change', val)
        }
      }
    }
  }
</script>
