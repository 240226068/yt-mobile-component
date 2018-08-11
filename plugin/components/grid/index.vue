<template>
  <div class="yt-grid">
    <div class="yt-grid-btn" :style="btnStyle" :key="index" v-for="(item, index) in list">
      <!-- @slot 自定义item的样式，也可以是gridItem组件-->
      <slot v-bind="item"></slot>
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
      list: {
        type: Array,
        default: () => ([])
      },
      /**
       * 默认情况下 x方向可以放3个item
       */
      x: {
        type: Number,
        default: 3
      },
      /**
       * 默认情况下 y方向可以放5行  超出5行时候进行滚动
       */
      y: {
        type: Number,
        default: 5
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
