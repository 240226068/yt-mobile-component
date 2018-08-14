<template>
  <yt-view @click="doClick" class="yt-tabbar-quick">
    <i class="yt-tabbar-quickAdd iconfont icon-increase"></i>
  </yt-view>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-tabbar-quick',
    inject: {
      ytTabbar: {
        default: () => {
          return {}
        }
      }
    },
    methods: {
      doClick(e) {
        /**
         * @event quick-click
         * @description 点击快捷按钮的事件
         * @type {event}
         */
        !this.ytTabbar || this.ytTabbar.$emit('quick-click', e)
      }
    }
  }
</script>
