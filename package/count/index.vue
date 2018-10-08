<template>
  <div class="yt-count">
    <transition name="yt-count-anim">
      <span class="yt-count-reduce" @click="doReduce" v-if="alwaysShowReduce || num !== min">
        <yt-view class="yt-count-icon" :class="{'is-disabled': num === min}" :ripple="num !== min" centerRipple>
          <i class="iconfont icon-reduce"></i>
        </yt-view>
      </span>
    </transition>
    <span class="yt-count-num">{{alwaysShowNum ? num : num === min ? '' : num}}</span>
    <span class="yt-count-add" @click="doAdd">
      <yt-view class="yt-count-icon" :class="{'is-disabled': num === max}" :ripple="num !== max" centerRipple>
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
      },
      /**
       * 总是显示数字
       */
      alwaysShowNum: {
        type: Boolean,
        default: false
      },
      /**
       * 总是显示减号
       */
      alwaysShowReduce: {
        type: Boolean,
        default: false
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
        /**
         * @event add
         * @description 数据增加时
         * @type {event}
         */
        this.$emit('add', e)
        /**
         * @event change
         * @description 数据改变时
         * @type {event}
         */
        this.$emit('change', e)
      },

      doReduce(e) {
        if (this.num === this.min) return
        this.num = this.num - this.step
        /**
         * @event reduce
         * @description 数据减少时
         * @type {event}
         */
        this.$emit('reduce', e)
        this.$emit('change', e)
      }
    }
  }
</script>
