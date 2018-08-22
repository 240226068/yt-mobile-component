<template>
  <span class="yt-call" @click.stop.prevent="callPhone">{{tel}}</span>
</template>

<script type="text/ecmascript-6">
  import { ActionSheet } from '../service'
  import { bridge } from '../utils'

  export default {
    name: 'yt-call',
    props: {
      /**
       * 电话号码
       */
      tel: {
        type: [String, Number],
        required: true
      }
    },
    methods: {
      callPhone() {
        ActionSheet([{
          text: '拨打电话',
          click: () => bridge.CallPhone(this.tel + '')
        }])
      }
    }
  }
</script>
