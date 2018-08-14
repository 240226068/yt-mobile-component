<template>
  <div class="yt-view" @click="handlerClick"
       @mousedown="handleMouseDown" @mouseup="end()" @mouseleave="end()"
       @touchstart="handleTouchStart" @touchend="end()" @touchcancel="end()">
    <div v-show="ripple" class="yt-view-ripple" ref="holder">
      <ripple :key="item.key" :color="item.color" :opacity="item.opacity" :merge-style="item.style" v-for="item in ripples"/>
    </div>
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import ripple from './ripple'
  import { getOffset } from '../utils'

  export default {
    name: 'yt-view',
    props: {
      /**
       * 圆型
       */
      centerRipple: {
        type: Boolean
      },
      /**
       * 颜色
       */
      color: {
        type: String
      },
      /**
       * 透明度
       */
      opacity: {
        type: Number
      },
      /**
       * 是否显示波纹
       */
      ripple: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        nextKey: 0,
        ripples: []
      }
    },
    mounted() {
      this.ignoreNextMouseDown = false
    },
    methods: {
      start(event, isRippleTouchGenerated) {
        if (this.ignoreNextMouseDown && !isRippleTouchGenerated) {
          this.ignoreNextMouseDown = false
          return
        }
        this.ripples.push({
          key: this.nextKey++,
          color: this.color,
          opacity: this.opacity,
          style: this.centerRipple ? {} : this.getRippleStyle(event)
        })
        this.ignoreNextMouseDown = isRippleTouchGenerated
      },
      end() {
        if (!this.ripples || this.ripples.length === 0) return
        this.ripples.splice(0, 1)
        this.stopListeningForScrollAbort()
      },
      stopListeningForScrollAbort() {
        if (!this.handleMove) this.handleMove = this.handleTouchMove.bind(this)
        document.body.removeEventListener('touchmove', this.handleMove, false)
      },
      startListeningForScrollAbort(event) {
        this.firstTouchY = event.touches[ 0 ].clientY
        this.firstTouchX = event.touches[ 0 ].clientX
        document.body.addEventListener('touchmove', this.handleMove, false)
      },
      handleMouseDown(event) {
        if (event.button === 0) {
          this.start(event, false)
        }
      },
      handleTouchStart(event) {
        if (event && event.touches) {
          this.startListeningForScrollAbort(event)
          this.startTime = Date.now()
        }
        this.start(event.touches[ 0 ], true)
      },
      handleTouchMove(event) {
        const deltaY = Math.abs(event.touches[ 0 ].clientY - this.firstTouchY)
        const deltaX = Math.abs(event.touches[ 0 ].clientX - this.firstTouchX)
        // 判断滚动 6px
        if (deltaY > 6 || deltaX > 6) this.end()
        // const timeSinceStart = Math.abs(Date.now() - this.startTime)
        // if (timeSinceStart > 300) {
        //   this.stopListeningForScrollAbort()
        //   return
        // }
      },
      handlerClick(e) {
        this.$emit('click', e)
      },
      getRippleStyle(event) {
        const el = this.$refs.holder
        const elHeight = el.offsetHeight
        const elWidth = el.offsetWidth
        const offset = getOffset(el)
        const isTouchEvent = event.touches && event.touches.length
        const pageX = isTouchEvent ? event.touches[ 0 ].pageX : event.pageX
        const pageY = isTouchEvent ? event.touches[ 0 ].pageY : event.pageY
        const pointerX = pageX - offset.left
        const pointerY = pageY - offset.top
        const topLeftDiag = this.calcDiag(pointerX, pointerY)
        const topRightDiag = this.calcDiag(elWidth - pointerX, pointerY)
        const botRightDiag = this.calcDiag(elWidth - pointerX, elHeight - pointerY)
        const botLeftDiag = this.calcDiag(pointerX, elHeight - pointerY)
        const rippleRadius = Math.max(
          topLeftDiag, topRightDiag, botRightDiag, botLeftDiag
        )
        const rippleSize = rippleRadius * 2
        const left = pointerX - rippleRadius
        const top = pointerY - rippleRadius
        return {
          directionInvariant: true,
          height: rippleSize + 'px',
          width: rippleSize + 'px',
          top: top + 'px',
          left: left + 'px'
        }
      },
      calcDiag(a, b) {
        return Math.sqrt((a * a) + (b * b))
      }
    },
    components: { ripple }
  }
</script>
