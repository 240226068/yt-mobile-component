<template>
  <sup class="yt-badge" :class="{ 'is-dot': isDot }">
    {{currentValue}}
  </sup>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-badge',
    props: {
      /**
       * 角标值
       */
      value: {
        type: [ String, Number ]
      },
      /**
       * 是否为原点
       */
      isDot: {
        type: Boolean,
        default: false
      },
      /**
       * 角标最大值，超过最大值一律为max+ ， 当value为number时生效
       */
      max: {
        type: Number,
        default: 99
      }
    },
    computed: {
      currentValue() {
        if (typeof this.value === 'string') {
          return this.value
        } else if (typeof this.value === 'number') {
          return this.value > this.max ? this.max + '+' : this.value
        }
        return ''
      }
    }
  }
</script>
