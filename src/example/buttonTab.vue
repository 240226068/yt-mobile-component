<template>
  <yt-page>
    <yt-buttonTab :list="list" slot="title"></yt-buttonTab>
    <p class="title">自定义颜色</p>
    <div class="wrap">
      <yt-buttonTab defaultFillColor="#fff" activeFillColor="#ffe26d"
                    defaultColor="#666" activeColor="#000"
                    borderColor="#e5e5e5" :list="list">
      </yt-buttonTab>
    </div>
    <p class="title">自定义大小</p>
    <div class="wrap">
      <yt-buttonTab tabHeight="36px" tabWidth="90px" tabSize="16px"
                    defaultFillColor="#fff" activeFillColor="#ffe26d"
                    defaultColor="#666" activeColor="#000"
                    borderColor="#e5e5e5" :list="list2">
      </yt-buttonTab>
    </div>
  </yt-page>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'buttonTab',
    data() {
      return {
        list: [
          {
            text: '推荐'
          },
          {
            text: '分享',
            badge: { isDot: true }
          },
          {
            text: '推荐',
            badge: { value: 20 }
          }
        ],
        list2: [
          {
            text: '限制'
          },
          {
            text: '预约'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .title {
    line-height: 30px;
    padding: 0 10px;
    font-size: 14px;
  }

  .wrap {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    height: 50px;
  }
</style>
