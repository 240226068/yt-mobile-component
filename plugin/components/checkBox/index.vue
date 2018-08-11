<template>
  <label class="yt-checkBox" :class="inline ? 'is-inline' : 'is-block'">
    <span class="yt-checkBox-label" v-if="pos === 'right'">
      <slot>{{label}}</slot>
    </span>
    <span class="yt-checkBox-wrapper" :class="`is-${pos}`">
      <input class="yt-checkBox-input" type="checkbox" v-model="currentValue" :value="name" :disabled="disabled">
      <span class="yt-checkBox-core" :class="simple ? 'is-simple' : ''"></span>
    </span>
    <span class="yt-checkBox-label" v-if="pos === 'left'">
      <!-- @slot 自定义label-->
      <slot>{{label}}</slot>
    </span>
  </label>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'checkBox',
    props: {
      /**
       * 是否为简单样式
       */
      simple: {
        type: Boolean,
        default: false
      },
      /**
       * 按钮的位置  取值 left || right
       */
      pos: {
        type: String,
        default: 'left'
      },
      /**
       * 是否为inline
       */
      inline: {
        type: Boolean,
        default: false
      },
      /**
       * 是否禁用
       */
      disabled: Boolean,
      /**
       * checkbox的value
       */
      name: {
        type: [String, Number, Object],
        required: true
      },
      /**
       * @model
       * @description checkbox绑定的值
       */
      value: {
        type: Array
      },
      /**
       * checkbox的显示值
       */
      label: {
        type: String
      }
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
