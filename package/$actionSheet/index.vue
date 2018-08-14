<template>
  <yt-popup :value="showFlag" @input="hide" pos="bottom">
    <yt-view @click="handlerClick(item)" class="yt-actionSheet-item" v-for="(item, index) in list" :key="index">{{item.text}}</yt-view>
    <yt-split v-if="showCancel"/>
    <yt-view @click="hide" v-if="showCancel" class="yt-actionSheet-item">取消</yt-view>
  </yt-popup>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-actionSheet',
    data() {
      return {
        showFlag: false,
        showCancel: true,
        cancel: null,
        list: []
      }
    },
    methods: {
      show(list = [], cancel = null, showCancel = true) {
        this.list = list
        this.cancel = cancel
        this.showCancel = showCancel
        this.showFlag = true
      },
      hide() {
        this.showFlag = false
        this.cancel && this.cancel()
      },
      handlerClick(item) {
        this.showFlag = false
        if (item && item.click) {
          item.click()
        }
      }
    }
  }
</script>
