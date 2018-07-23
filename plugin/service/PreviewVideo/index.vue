<template>
  <transition name="yt-module">
    <div class="yt-module-page" v-show="showFlag">
      <yt-header class="yt-previewVideo-nav" :leftData="leftData" :title="barTitle"/>
      <yt-video-group class="yt-previewVideo-body" v-model="current">
        <yt-slider :data="list" v-model="current">
          <yt-video slot-scope="props" :name="props.index" :data="props.data"></yt-video>
        </yt-slider>
      </yt-video-group>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {PreviewImg} from '../../plus'
  import {listenModule} from '../../mixins/listenModule'
  export default {
    name: 'previewVideo',
    mixins: [listenModule],
    computed: {
      barTitle () {
        return `${this.current + 1} / ${this.list.length}`
      }
    },
    data() {
      return {
        list: [],
        leftData: [{
          font: 'iconfont icon-back',
          click: () => {
            this.hide()
          }
        }],
        current: null,
        showFlag: false
      }
    },
    methods: {
      show ({list, current}) {
        this.showFlag = true
        this.list = [].concat(list)
        this.current = current
      },
      hide () {
        this.showFlag = false
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .yt-module-page
    .yt-previewVideo
      &-nav
        position absolute
        top 0
        left 0
        right 0
        background transparent
        z-index 100

      &-body
        background #000000
</style>
