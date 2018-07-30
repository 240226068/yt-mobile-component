<template>
  <span class="yt-phone" @click.stop.prevent="callPhone">{{tel}}</span>
</template>

<script type="text/ecmascript-6">
  import { Actionsheet } from '../../service/index'
  import { CallPhone } from '../../plus'

  export default {
    name: 'yt-call',
    props: {
      /**
       * 电话号码
       */
      tel: [String, Number]
    },
    methods: {
      callPhone() {
        Actionsheet({
          list: [{
            text: '拨打电话',
            click: () => CallPhone(this.tel + '')
          }]
        })
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .yt-phone
    font-size: 13px
    color: #20a0ff !important
    text-align: right
</style>
