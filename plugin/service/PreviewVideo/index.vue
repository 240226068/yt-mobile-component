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
  export default {
    name: 'previewVideo',
    computed: {
      barTitle() {
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
      show({ list, current }) {
        this.showFlag = true
        this.list = [].concat(list)
        this.current = current
      },
      hide() {
        this.showFlag = false
      }
    }
  }
</script>

