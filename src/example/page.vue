<template>
  <yt-page :input="input" :leftData="leftData" :rightData="rightData">
    <yt-buttonTab :list="list" slot="title"></yt-buttonTab>
    <yt-form>
      <yt-btn slot="btn">提交</yt-btn>
    </yt-form>
  </yt-page>
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
