<template>
  <yt-popover :visible="showFlag" @update:visible="hide" pos="bottom">
    <yt-view @click="handlerClick(item)" class="yt-actionsheet_item" v-for="(item, index) in list" :key="index">
      {{item.text}}
    </yt-view>
    <yt-split v-if="cancel"/>
    <yt-view @click="hide" v-if="cancel" class="yt-actionsheet_item">取消</yt-view>
  </yt-popover>
</template>
<script type="text/ecmascript-6">
  import { listenModule } from '../../mixins/listenModule'

  export default {
    name: 'yt-actionsheet',
    mixins: [listenModule],
    data() {
      return {
        showFlag: false,
        showCancel: true,
        cancel: null,
        list: []
      }
    },
    methods: {
      show({ list = [], cancel = null, showCancel = true }) {
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
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .yt-actionsheet
    &_item
      text-align center
      line-height 50px
</style>
