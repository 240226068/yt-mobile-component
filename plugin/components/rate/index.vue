<template>
  <div class="yt-rate">
    <span
      v-for="(item, index) in max"
      class="yt-rate__item"
      @mousemove="setCurrentValue(item, $event)"
      @mouseleave="resetCurrentValue"
      @click="selectValue(item)"
      :style="{ cursor: _disabled ? 'auto' : 'pointer' }"
      :key="index">
      <i
        :class="[classes[item - 1], { 'hover': hoverIndex === item }]"
        class="iconfont yt-rate__icon"
        :style="getIconStyle(item)">
        <i
          v-if="showDecimalIcon(item)"
          :class="decimalIconClass"
          :style="decimalStyle"
          class="iconfont yt-rate__decimal">
        </i>
      </i>
    </span>
    <span v-if="showText" class="yt-rate__text" :style="{ color: textColor }">{{ text }}</span>
  </div>
</template>

<script type="text/ecmascript-6">
  import { hasClass } from '../../utils'

  export default {
    name: 'yt-rate',
    data() {
      return {
        classMap: {},
        colorMap: {},
        pointerAtLeftHalf: true,
        currentValue: this.value,
        hoverIndex: -1
      }
    },

    inject: {
      ytForm: {
        default: () => ({})
      }
    },

    props: {
      /**
       * 当前值
       * @model
       */
      value: {
        type: Number,
        default: 0
      },
      /**
       * 低分和中等分数的界限值，值本身被划分在低分中
       */
      lowThreshold: {
        type: Number,
        default: 2
      },
      /**
       * 高分和中等分数的界限值，值本身被划分在高分中
       */
      highThreshold: {
        type: Number,
        default: 4
      },
      /**
       * 最大分值
       */
      max: {
        type: Number,
        default: 5
      },
      /**
       * icon 的颜色数组，共有 3 个元素，为 3 个分段所对应的颜色
       */
      colors: {
        type: Array,
        default() {
          return ['#99A9BF', '#F7BA2A', '#FF9900']
        }
      },
      /**
       * 未选中 icon 的颜色
       */
      voidColor: {
        type: String,
        default: '#C6D1DE'
      },
      /**
       * 只读时未选中 icon 的颜色
       */
      disabledVoidColor: {
        type: String,
        default: '#EFF2F7'
      },
      /**
       * icon 的类名数组，共有 3 个元素，为 3 个分段所对应的类名
       */
      iconClasses: {
        type: Array,
        default() {
          return ['icon-star-on', 'icon-star-on', 'icon-star-on']
        }
      },
      /**
       * 未选中 icon 的类名
       */
      voidIconClass: {
        type: String,
        default: 'icon-star-off'
      },
      /**
       * 只读时未选中 icon 的类名
       */
      disabledVoidIconClass: {
        type: String,
        default: 'icon-star-on'
      },
      /**
       *  是否为只读
       */
      disabled: {
        type: Boolean,
        default: false
      },
      /**
       * 是否允许半选
       */
      allowHalf: {
        type: Boolean,
        default: false
      },
      /**
       * 是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容
       */
      showText: {
        type: Boolean,
        default: false
      },
      /**
       * 辅助文字的颜色
       */
      textColor: {
        type: String,
        default: '#1f2d3d'
      },
      /**
       * 辅助文字数组
       */
      texts: {
        type: Array,
        default() {
          return ['极差', '失望', '一般', '满意', '惊喜']
        }
      },
      /**
       * 分数显示模板
       */
      scoreTemplate: {
        type: String,
        default: '{value}'
      }
    },

    computed: {
      _disabled() {
        return this.disabled || (this.ytForm || {}).disabled
      },

      text() {
        let result = ''
        if (this._disabled) {
          result = this.textTemplate.replace(/\{\s*value\s*\}/, this.value)
        } else {
          result = this.texts[Math.ceil(this.currentValue) - 1]
        }
        return result
      },

      decimalStyle() {
        let width = ''
        if (this._disabled) {
          width = `${this.valueDecimal < 50 ? 0 : 50}%`
        }
        if (this.allowHalf) {
          width = '50%'
        }
        return {
          color: this.activeColor,
          width
        }
      },

      valueDecimal() {
        return this.value * 100 - Math.floor(this.value) * 100
      },

      decimalIconClass() {
        return this.getValueFromMap(this.value, this.classMap)
      },

      voidClass() {
        return this._disabled ? this.classMap.disabledVoidClass : this.classMap.voidClass
      },

      activeClass() {
        return this.getValueFromMap(this.currentValue, this.classMap)
      },

      activeColor() {
        return this.getValueFromMap(this.currentValue, this.colorMap)
      },

      classes() {
        let result = []
        let i = 0
        let threshold = this.currentValue
        if (this.allowHalf && this.currentValue !== Math.floor(this.currentValue)) {
          threshold--
        }
        for (; i < threshold; i++) {
          result.push(this.activeClass)
        }
        for (; i < this.max; i++) {
          result.push(this.voidClass)
        }
        return result
      }
    },

    watch: {
      value(val) {
        /**
         * 分值改变时触发
         * @event change
         */
        this.$emit('change', val)
        this.currentValue = val
        this.pointerAtLeftHalf = this.value !== Math.floor(this.value)
      }
    },

    methods: {
      getValueFromMap(value, map) {
        let result = ''
        if (value <= this.lowThreshold) {
          result = map.lowColor || map.lowClass
        } else if (value >= this.highThreshold) {
          result = map.highColor || map.highClass
        } else {
          result = map.mediumColor || map.mediumClass
        }
        return result
      },

      showDecimalIcon(item) {
        let showWhenDisabled = this._disabled && this.valueDecimal > 0 && item - 1 < this.value && item > this.value
        /* istanbul ignore next */
        let showWhenAllowHalf = this.allowHalf &&
          this.pointerAtLeftHalf &&
          item - 0.5 <= this.currentValue &&
          item > this.currentValue
        return showWhenDisabled || showWhenAllowHalf
      },

      getIconStyle(item) {
        const voidColor = this._disabled ? this.colorMap.disabledVoidColor : this.colorMap.voidColor
        return {
          color: item <= this.currentValue ? this.activeColor : voidColor
        }
      },

      selectValue(value) {
        if (this._disabled) {
          return
        }
        if (this.allowHalf && this.pointerAtLeftHalf) {
          this.$emit('input', this.currentValue)
        } else {
          this.$emit('input', value)
        }
      },

      setCurrentValue(value, event) {
        if (this._disabled) {
          return
        }
        /* istanbul ignore if */
        if (this.allowHalf) {
          let target = event.target
          if (hasClass(target, 'yt-rate__item')) {
            target = target.querySelector('.yt-rate__icon')
          }
          if (hasClass(target, 'yt-rate__decimal')) {
            target = target.parentNode
          }
          this.pointerAtLeftHalf = event.offsetX * 2 <= target.clientWidth
          this.currentValue = this.pointerAtLeftHalf ? value - 0.5 : value
        } else {
          this.currentValue = value
        }
        this.hoverIndex = value
      },

      resetCurrentValue() {
        if (this._disabled) {
          return
        }
        if (this.allowHalf) {
          this.pointerAtLeftHalf = this.value !== Math.floor(this.value)
        }
        this.currentValue = this.value
        this.hoverIndex = -1
      }
    },

    created() {
      if (!this.value) {
        this.$emit('input', 0)
      }
      this.classMap = {
        lowClass: this.iconClasses[0],
        mediumClass: this.iconClasses[1],
        highClass: this.iconClasses[2],
        voidClass: this.voidIconClass,
        disabledVoidClass: this.disabledVoidIconClass
      }
      this.colorMap = {
        lowColor: this.colors[0],
        mediumColor: this.colors[1],
        highColor: this.colors[2],
        voidColor: this.voidColor,
        disabledVoidColor: this.disabledVoidColor
      }
    }
  }
</script>
