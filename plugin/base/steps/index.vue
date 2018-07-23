<template>
  <div class="yt-steps">
    <slot></slot>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'yt-steps',
    provide() {
      return {
        ytSteps: this
      }
    },
    props: {
      value: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        panels: []
      }
    },
    methods: {
      appendStep( child ) {
        const index = this.$slots.default.indexOf(child.$vnode)
        this.panels.splice(index, 1, child)
      },
      /**
       * 移除tab
       * @param child tab-panel组件的this
       * @return {void} 返回空
       * @public
       */
      removeStep( child ) {
        const index = this.panels.indexOf(child)
        if (index > -1) {
          this.panels.splice(index, 1)
        }
      }
    }
  }
</script>

<style type="text/postcss" lang="css">
  @name yt {
    @b steps {
      display: flex;
      padding: 20px 0;
      align-items: center;
      text-align: center;
      background-color: #fafafa;
      .yt-step {
        &:first-child::before {
          display: none;
        }
        &:last-child::after {
          display: none;
        }
      }
    }
  }
</style>
