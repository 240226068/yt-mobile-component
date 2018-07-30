<template>
  <transition name="yt-module">
    <div class="yt-module-page" v-show="showFlag">
      <yt-header class="yt-previewImg-nav" :leftData="leftData" :title="title"/>
      <yt-slider class="yt-previewImg-body" v-model="current" :data="list">
        <img slot-scope="props" class="yt-previewImg-img" v-lazy="props.data">
      </yt-slider>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {PreviewImg} from '../../plus'
  export default {
    name: 'previewImg',
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
