<template>
  <transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
    <div class="yt-shopCartBall" v-show="ball.show">
      <div class="yt-shopCartBall-inner" :style="innerStyle" ref="inner"></div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      color: {
        type: String
      },
      ball: {
        type: Object
      }
    },
    computed: {
      innerStyle() {
        return { background: this.color }
      }
    },
    methods: {
      beforeDrop(el) {
        let rect = this.ball.el.getBoundingClientRect()
        let x = rect.left - 32
        let y = -(window.innerHeight - rect.top - 22)
        el.style.display = ''
        el.style.webkitTransform = `translate3d(0, ${y}px, 0)`
        el.style.transform = `translate3d(0, ${y}px, 0)`
        let inner = this.$refs.inner
        inner.style.webkitTransform = `translate3d(${x}px,0,0)`
        inner.style.transform = `translate3d(${x}px,0,0)`
      },
      dropping(el, done) {
        let rf = el.offsetHeight
        this.$nextTick(() => {
          el.style.webkitTransform = 'translate3d(0, 0, 0)'
          el.style.transform = 'translate3d(0, 0, 0)'
          let inner = this.$refs.inner
          inner.style.webkitTransform = 'translate3d(0, 0, 0)'
          inner.style.transform = 'translate3d(0, 0, 0)'
          el.addEventListener('transitionend', done)
        })
      },
      afterDrop(el) {
        this.ball.show = false
        el.style.display = 'none'
      }
    }
  }
</script>
