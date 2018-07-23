<template>
  <span class="yt-checkBox">
    <input class="yt-checkBox-input" type="checkbox" v-model="currentValue" :value="name" :disabled="disabled">
    <span class="yt-checkBox-core"></span>
  </span>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'checkBox',
    props: {
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
      value: {}
    },
    computed: {
      currentValue: {
        get() {
          return this.value
        },
        set(val) {
          this.$emit('input', val)
        }
      }
    }
  }
</script>
