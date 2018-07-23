<template>
  <div class="yt-grid">
    <div class="yt-grid-btn" :style="btnStyle" :key="index" v-for="(item, index) in list">
      <!-- @slot 结合slot-scope="scope" 使用scope.data获取对象-->
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
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  @import '../../style/var'
  .yt-grid
    width 100%
    height 100%
    font-size 0

    &-btn
      position relative
      display inline-block
      box-sizing border-box
      overflow hidden
      border-bottom 1px solid #f3f4f6
      border-right 1px solid #f3f4f6

</style>
