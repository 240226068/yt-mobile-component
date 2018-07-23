<template>
  <div :style="splitStyle"></div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'yt-split',
    props: {
      /**
       * 背景色  默认为#f3f4f6
       */
      color: {
        type: String,
        default: '#f3f4f6'
      },
      /**
       * 高度  默认为15
       */
      size: {
        type: [ String, Number ],
        default: '15'
      }
    },
    computed: {
      splitStyle() {
        return {
          backgroundColor: this.color,
          height: this.size + 'px'
        }
      }
    }
  }
</script>
