<template>
  <yt-view @click="doClick" class="yt-tabbar-quick">
    <!--@slot 自定义内容-->
    <slot>
      <i class="yt-tabbar-quickAdd iconfont icon-increase"></i>
    </slot>
  </yt-view>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-tabbar-quick',
    methods: {
      doClick(e) {
        this.$emit('click', e)
      }
    }
  }
</script>
