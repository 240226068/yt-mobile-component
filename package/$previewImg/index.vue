<template>
  <transition name="yt-module">
    <yt-page class="yt-previewImg" v-if="showFlag">
      <yt-header class="yt-previewVideo-nav" :leftData="leftData" :title="title" slot="header"/>
      <yt-slider class="yt-previewImg-body" v-model="current" :list="list">
        <img class="yt-previewImg-img" slot-scope="scope" :src="scope.data">
      </yt-slider>
    </yt-page>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { bridge } from '../utils/bridge'

  export default {
    name: 'previewImg',
    computed: {
      title() {
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
        current: 0,
        showFlag: false
      }
    },
    methods: {
      show(list = [], current = 0) {
        if (process.env.NODE_ENV !== 'production') {
          this.showFlag = true
          this.current = current
          this.list = [].concat(list)
        } else {
          bridge.PreviewImg(current, list)
        }
      },
      hide() {
        this.showFlag = false
      }
    }
  }
</script>
