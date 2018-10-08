<template>
  <div class="yt-popup">
    <transition name="yt-fade">
      <div :class="['yt-popup-mask', {'is-fixed': fixed}]" v-if="currentValue && mask"
           @click="currentValue = false"></div>
    </transition>
    <transition :name="transitionName">
      <div class="yt-popup-body" :class="[`is-${pos}`, {'is-fixed': fixed}, {'is-scroll': scroll}]" v-if="currentValue" :style="bodyStyle">
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
       * 弹出层的位置   具体的取值有 'top' || 'bottom' || 'left' || 'right' || 'center'
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
      },
      /**
       * popup的宽度 当pos为left和right的时候生效
       */
      width: {
        type: String,
        default: '70%'
      },
      /**
       * popup的高度  当pos为top和bottom的时候生效
       */
      height: {
        type: String,
        default: null
      },
      /**
       * 是否滚动
       */
      scroll: {
        type: Boolean,
        default: false
      },
      /**
       * popup 自身是否插入至 body 元素上。嵌套的 popup 必须指定该属性并赋值为 true
       */
      appendToBody: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      bodyStyle() {
        return {
          width: (this.pos === 'left' || this.pos === 'right') ? this.width : null,
          height: (this.pos === 'top' || this.pos === 'bottom') ? this.height : null
        }
      },
      currentValue: {
        get() {
          return this.value
        },
        set(value) {
          this.$emit('input', value)
        }
      },
      transitionName() {
        return `yt-popup-${this.pos}`
      }
    },
    mounted() {
      if (this.appendToBody) {
        document.body.appendChild(this.$el)
      }
    },
    destroyed() {
      if (this.appendToBody && this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el)
      }
    }
  }
</script>
