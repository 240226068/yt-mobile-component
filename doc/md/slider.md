<img src="/docs/assets/slider-demo.gif" width = "360" height = "602" alt="图片名称" align=center />

```
<template>
  <yt-page title="Cell">
    <yt-slider v-model="active" :showDot="true" :data="list">
      <div class="item" slot-scope="scope">
        <div class="item-text">{{scope.data.text}}</div>
        <img class="item-img" :src="scope.data.src"/>
      </div>
    </yt-slider>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  import {delayed} from 'yt'
  export default {
    name: 'Cell-example',
    data() {
      return {
        active: 0,
        list: [
          {
            text: '这是一张美女图片',
            src: 'http://b.zol-img.com.cn/sjbizhi/images/2/320x510/1352891767829.jpg'
          },
          {
            text: '这是一张美女图片',
            src: 'http://b.zol-img.com.cn/sjbizhi/images/5/320x510/1372924333667.jpg'
          },
          {
            text: '这是一张美女图片',
            src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1158198203,3421596937&fm=27&gp=0.jpg'
          },
          {
            text: '这是一张美女图片',
            src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3896905731,113100193&fm=27&gp=0.jpg'
          }
        ]
      }
    },
    async activated() {
      await delayed(5000)
      this.list = this.list.concat(this.list)
    }
  }
</script>
<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .item
    position relative
    width 100%
    height 100%
    &-text
      position absolute
      bottom 0
      left 0
      height 100px
      line-height 45px
      padding 0 10px
      font-size 16px
      background-color rgba(0, 0, 0, 0.5)
      color #ffffff
      z-index 100
      width 100%
    &-img
      position absolute
      width 100%
      top 50%
      transform translate3d(0, -50%, 0)
</style>

```
