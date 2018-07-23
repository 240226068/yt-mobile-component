<template>
  <div class="yt-count" :class="`yt-count__${Theme}`">
    <transition name="yt-count-anim">
      <yt-icon v-if="num !== min" class="yt-count-reduce" @click="doReduce" font="iconfont icon-reduce"/>
    </transition>
    <span class="yt-count-num">{{num === min ? '' : num}}</span>
    <yt-icon class="yt-count-add" @click="doAdd" font="iconfont icon-plus"/>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'yt-count',
    props: {
      /**
       * 设置计数器允许的最大值
       */
      max: {
        type: Number,
        default: 100
      },
      /**
       * 设置计数器允许的最小值
       */
      min: {
        type: Number,
        default: 0
      },
      /**
       * 计数器当前值
       * @model
       */
      value: {
        type: Number,
        default: 0
      },
      /**
       * 计数器步长
       */
      step: {
        type: Number,
        default: 1
      }
    },
    computed: {
      num: {
        get() {
          return this.value
        },
        set(num) {
          if (num < this.min) {
            num = this.min
          }
          if (num > this.max) {
            num = this.max
          }
          this.$emit('input', num)
        }
      }
    },
    methods: {
      doAdd(e) {
        if (this.num === this.max) return
        this.num = this.num + this.step
        this.$emit('add', e)
        this.$emit('change', e)
      },

      doReduce(e) {
        if (this.num === this.min) return
        this.num = this.num - this.step
        this.$emit('reduce', e)
        this.$emit('change', e)
      }
    }
  }
</script>
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  @import '../../style/var'
  .yt-count
    font-size 0
    position relative
    display inline-block
    line-height 45px
    padding 0 44px
    &-reduce
      position absolute
      top 50%
      left 0
      transform translate3d(0, -50%, 0)
      transition all_transition
    &-add
      position absolute
      top 50%
      left 100%
      transform translate3d(-100%, -50%, 0)
    &-num
      display inline-block
      vertical-align middle
      text-align center
      min-width 15px
      font-size 14px
      color #606266

  .yt-count-anim-enter, .yt-count-anim-leave-active
    opacity 0.1
    left 100%
    transform translate3d(-100%, -50%, 0) rotate(180deg)

</style>
