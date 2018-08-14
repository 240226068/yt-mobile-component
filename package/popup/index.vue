<template>
  <div class="yt-popup">
    <transition name="yt-fade">
      <div :class="['yt-popup-mask', {'is-fixed': fixed}]" v-if="currentValue && mask"
           @click="currentValue = false"></div>
    </transition>
    <transition :name="transitionName">
      <div class="yt-popup-body" :class="[`is-${pos}`, {'is-fixed': fixed}]" v-if="currentValue">
        <!-- @slot 弹出层的内容 -->
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-popup',
    props: {
      /**
       * @model
       * @description 控制弹出的显示 使用v-model进行双向绑定
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
       * 是否显示mask
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
        return `yt-popup-slider-${this.pos}`
      }
    }
  }
</script>
