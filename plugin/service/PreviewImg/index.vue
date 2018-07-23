<template>
  <transition name="yt-module">
    <div class="yt-module-page" v-show="showFlag">
      <yt-header class="yt-previewImg-nav" :leftData="leftData" :title="title"/>
      <yt-slider class="yt-previewImg-body" v-model="current" :data="list">
        <img slot-scope="props" class="yt-previewImg-body_img" v-lazy="props.data">
      </yt-slider>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {PreviewImg} from '../../plus'
  import {listenModule} from '../../mixins/listenModule'
  export default {
    name: 'previewImg-module',
    mixins: [listenModule],
    computed: {
      title () {
        return `${this.current + 1} / ${this.list.length}`
      }
    },
    data () {
      return {
        list: [],
        leftData: [{
          font: 'iconfont icon-back',
          click: () => {
            this.hide()
          }
        }],
        current: 0,
        showFlag: false
      }
    },
    methods: {
      show ({list = [], current = 0}) {
        if (process.env.NODE_ENV !== 'production') {
          this.showFlag = true
          this.current = current
          this.list = [].concat(list)
        } else {
          PreviewImg(current, list)
        }
      },
      hide () {
        this.showFlag = false
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .yt-module-page
    .yt-previewImg
      &-nav
        position absolute
        top 0
        left 0
        right 0
        background transparent
        z-index 100

      &-body
        background #000000
        &_img
          position absolute
          top 50%
          left 0
          width 100%
          transform translate3d(0, -50%, 0)
</style>
