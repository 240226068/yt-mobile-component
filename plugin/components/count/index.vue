<template>
  <div class="yt-count">
    <transition name="yt-count-anim">
      <span class="yt-count-reduce" @click="doReduce" v-if="num !== min">
        <yt-view class="yt-count-icon" centerRipple>
          <i class="iconfont icon-reduce"></i>
        </yt-view>
      </span>
    </transition>
    <span class="yt-count-num">{{num === min ? '' : num}}</span>
    <span class="yt-count-add" @click="doAdd">
      <yt-view class="yt-count-icon" centerRipple>
        <i class="iconfont icon-plus"></i>
      </yt-view>
    </span>
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
