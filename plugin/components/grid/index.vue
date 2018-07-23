<template>
  <div class="yt-grid">
    <div class="yt-grid-btn" :style="btnStyle" :key="index" v-for="(item, index) in list">
      <!-- @slot -->
      <slot :data="item"></slot>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'yt-grid',
    props: {
      /**
       * 数据列表
       */
      list: Array,
      /**
       * 默认情况下 x方向为 3
       */
      x: {
        type: Number,
        default: 3
      },
      /**
       * 默认情况下 y方向为 3
       */
      y: {
        type: Number,
        default: 3
      }
    },
    computed: {
      btnStyle() {
        return {
          width: 100 / this.x + '%',
          height: 100 / this.y + '%'
        }
      }
    }
  }
</script>
