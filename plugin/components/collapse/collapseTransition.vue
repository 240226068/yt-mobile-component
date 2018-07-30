<template>
  <transition name="yt-collapse-fade"
              @before-enter="beforeEnter"
              @enter="enter"
              @after-enter="afterEnter"
              @before-leave="beforeLeave"
              @leave="leave"
              @after-leave="afterLeave">
    <div style="transition: all .3s ease;"
         @transitionend="transitionEnd"
         @mozTransitionEnd="transitionEnd"
         @msTransitionEnd="transitionEnd"
         @oTransitionEnd="transitionEnd"
         @webkitTransitionEnd="transitionEnd">
      <slot></slot>
    </div>
  </transition>
</template>

<script type='text/ecmascript-6'>
  export default {
    methods: {
      beforeEnter (el) {
        if (!el.dataset) el.dataset = {}
        el.dataset.oldPaddingTop = el.style.paddingTop
        el.dataset.oldPaddingBottom = el.style.paddingBottom
        el.dataset.oldOverflow = el.style.overflow

        el.style.height = '0'
        el.style.paddingTop = 0
        el.style.paddingBottom = 0
      },
      enter (el) {
        el.style.height = el.scrollHeight + 'px'
        el.style.paddingTop = el.dataset.oldPaddingTop
        el.style.paddingBottom = el.dataset.oldPaddingBottom
        el.style.overflow = 'hidden'
      },
      afterEnter (el) {
        el.style.height = ''
        el.style.overflow = el.dataset.oldOverflow
      },
      beforeLeave (el) {
        if (!el.dataset) el.dataset = {}
        el.dataset.oldPaddingTop = el.style.paddingTop
        el.dataset.oldPaddingBottom = el.style.paddingBottom
        el.dataset.oldOverflow = el.style.overflow

        el.style.overflow = 'hidden'
        el.style.height = el.scrollHeight + 'px'
      },
      leave (el) {
        if (el.scrollHeight !== 0) {
          el.style.height = 0
          el.style.paddingTop = 0
          el.style.paddingBottom = 0
        }
      },
      afterLeave (el) {
        el.style.height = ''
        el.style.overflow = el.dataset.oldOverflow
        el.style.paddingTop = el.dataset.oldPaddingTop
        el.style.paddingBottom = el.dataset.oldPaddingBottom
      },
      transitionEnd (e) {
        this.$emit('transition', e)
      }
    }
  }
</script>
