<template>
  <yt-view @click="doClick" class="yt-tabbar-quick">
    <i class="yt-tabbar-quickAdd iconfont icon-increase"></i>
  </yt-view>
</template>

<script type="text/ecmascript-6">
  export default {
    inject: {
      ytTabbar: {
        default: () => {
          return {}
        }
      }
    },
    methods: {
      doClick(e) {
        !this.ytTabbar || this.ytTabbar.$emit('quick-click', e)
      }
    }
  }
</script>
