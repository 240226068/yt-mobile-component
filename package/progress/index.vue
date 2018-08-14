<template>
  <div class="yt-progress">
    <div class="yt-progressCircle" v-if="type === 'circle'">
      <svg viewBox="0 0 100 100">
        <path :d="pathString" :stroke="trailColor" :stroke-width="trailWidth" :fill-opacity="0"/>
        <path :d="pathString" :stroke-linecap="strokeLinecap" :stroke="currentColor" :stroke-width="strokeWidth" fill-opacity="0" :style="pathStyle"/>
      </svg>
      <div v-if="$slots.default" class="yt-progressCircle-content" :style="`color: ${currentColor}`">
        <slot :color="currentColor"></slot>
      </div>
    </div>
    <div class="yt-progressLine" v-else-if="type === 'line'">
      <div class="yt-progressLine-wrapper">
        <div class="yt-progressLine-cur" :style="lineCurStyle"></div>
        <div class="yt-progressLine-trail" :style="lineTrailStyle"></div>
      </div>
      <div v-if="$slots.default" class="yt-progressLine-content" :class="`is-${lineContentPos}`">
        <slot :color="currentColor"></slot>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-progress',
    props: {
      /**
       *  progress的样式类型 取值有  circle || line
       */
      type: {
        type: String,
        default: 'circle'
      },
      /**
       *  type=circle时 线条宽度
       */
      strokeWidth: {
        type: Number,
        default: 5
      },
      /**
       * 线条颜色  默认为 [ '#FF6B6B', '#FF9800', '#39b8fd', '#00CC8F' ]
       */
      strokeColor: {
        type: Array,
        default() {
          return [
            '#FF6B6B',
            '#FF9800',
            '#39b8fd',
            '#00CC8F'
          ]
        }
      },
      /**
       * type=circle时 背景线条宽度
       */
      trailWidth: {
        type: Number,
        default: 1
      },
      /**
       * 背景线条颜色
       */
      trailColor: {
        type: String,
        default: '#D9D9D9'
      },
      /**
       * 进度百分比
       */
      percent: {
        type: Number,
        default: 0
      },
      /**
       * type=line时 线的高度
       */
      lineHeight: {
        type: Number,
        default: 10
      },
      /**
       * type=line时 content所在的为止  取值有   right || center
       */
      lineContentPos: {
        type: String,
        default: 'right'
      },
      strokeLinecap: {
        type: String,
        default: 'round'
      }
    },
    computed: {
      currentColor () {
        if (!this.strokeColor.length || this.percent === 0) return this.trailColor
        let len = this.strokeColor.length
        let color = this.strokeColor.find((color, index) => this.percent / 100 < (index + 1) / len)
        return color || this.strokeColor[len - 1]
      },
      radius () {
        return 50 - this.strokeWidth / 2
      },
      pathString () {
        return `M 50,50 m 0,-${this.radius}
      a ${this.radius},${this.radius} 0 1 1 0,${2 * this.radius}
      a ${this.radius},${this.radius} 0 1 1 0,-${2 * this.radius}`
      },
      len () {
        return Math.PI * 2 * this.radius
      },
      pathStyle () {
        return {
          'stroke-dasharray': `${this.len}px ${this.len}px`,
          'stroke-dashoffset': `${((100 - this.percent) / 100 * this.len)}px`,
          'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
        }
      },
      lineCurStyle () {
        return {
          width: `${Math.min(this.percent, 100)}%`,
          height: `${this.lineHeight}px`,
          borderRadius: `${this.lineHeight / 2}px`,
          backgroundColor: this.currentColor
        }
      },
      lineTrailStyle () {
        return {
          height: `${this.lineHeight}px`,
          borderRadius: `${this.lineHeight / 2}px`,
          backgroundColor: this.trailColor
        }
      }
    }
  }
</script>
