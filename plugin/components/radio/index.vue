<template>
  <label class="yt-radio" :class="inline ? 'is-inline' : 'is-block'">
    <span class="yt-radio-label" v-if="pos === 'right'">
      <slot>{{label}}</slot>
    </span>
    <span class="yt-radio-wrapper" :class="`is-${pos}`">
      <input class="yt-radio-input" type="radio" v-model="currentValue" :disabled="_disabled" :value="name">
      <span class="yt-radio-core"></span>
    </span>
    <span class="yt-radio-label" v-if="pos === 'left'">
      <slot>{{label}}</slot>
    </span>
  </label>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'yt-radio',
    inject: {
      ytForm: {
        default: () => ({})
      }
    },
    props: {
      /**
       * left  or  right
       */
      pos: {
        type: String,
        default: 'right'
      },
      /**
       * 是否为inline
       */
      inline: {
        type: Boolean,
        default: true
      },
      /**
       * 是否禁用
       */
      disabled: Boolean,
      /**
       * checkbox的value
       */
      name: {},
      /**
       * checkbox绑定的值
       */
      value: {},
      /**
       * radio的显示值
       */
      label: {
        type: String
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
        set(value) {
          this.$emit('input', value)
        }
      }
    }
  }
</script>
