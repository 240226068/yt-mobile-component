<template>
  <div class="yt-popover">
    <transition name="yt-fade">
      <div :class="['yt-popover-mask', {'is-fixed': fixed}]" v-if="currentValue && mask" @click="currentValue = false"></div>
    </transition>
    <transition :name="transitionName">
      <div class="yt-popover-body" :class="[`is-${pos}`, {'is-fixed': fixed}]" v-if="currentValue">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-popover',
    props: {
      /**
       * 控制弹出的显示   例如 :visible="XXX"    如果需要点击 遮罩层自动关闭弹出层的话  采用 :visible.sync="XXX"
       */
      value: {
        type: Boolean,
        default: false
      },
      /**
       * 弹出层的位置   具体的取值有 'top' || 'bottom' || 'left' : 'right'
       */
      pos: {
        type: String,
        default: 'bottom'
      },
      /**
       * 是否为fixed定位
       */
      fixed: {
        type: Boolean,
        default: false
      },
      /**
       * 异常mask
       */
      mask: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      currentValue: {
        get() {
          return this.value
        },
        set(value) {
          this.$emit('input', value)
        }
      },
      transitionName() {
        return `yt-pop-slider-${this.pos}`
      }
    }
  }
</script>
