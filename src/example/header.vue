<template>
  <div class="page">
    <yt-header :input="input" title="首页" :leftData="leftData" :rightData="rightData">
      <yt-buttonTab :list="list"></yt-buttonTab>
    </yt-header>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        list: [
          {
            text: '推荐'
          },
          {
            text: '分享',
            badge: { value: 20 }
          },
          {
            text: '推荐',
            badge: { value: 20 }
          }
        ],
        input: false,
        leftData: [
          {
            avatar: require('../img/avatar.jpg'),
            click: () => {
              console.log('点击了头像')
            }
          }
        ],
        rightData: [
          {
            font: 'iconfont icon-search',
            click: () => {
              this.input = !this.input
            }
          }
        ]
      }
    }
  }
</script>
<style scoped>
  .page {
    width: 100%;
    height: 100%;
  }
</style>
