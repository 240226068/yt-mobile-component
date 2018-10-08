<template>
  <div></div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'

  export default {
    created() {
      console.log(this)
      /* eslint-disable no-new */
      let vm = new Vue({
        el: document.createElement('div'),
        render: (h) => {
          return h('div', { attrs: { class: 'test' } }, this.$slots.default)
        }
      })
      document.body.appendChild(vm.$el)
      console.log(vm)
    },
    destroyed() {
      document.body
    }
  }
</script>

<style lang="stylus">
  .test
    position fixed
    top 50%
    left 50%
    width 200px
    height 400px
    z-index 1000
    background-color #fff
    transform translate3d(-50%, -50%, 0)
</style>
