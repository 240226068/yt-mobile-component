<template>
  <div>
    <yt-mask :fixed="true" bgc="rgba(0, 0, 0, 0.5)" :visible.sync="showFlag"/>
    <transition name="yt-alert-zoom">
      <div v-if="showFlag" class="yt-alert-content">
        <p class="yt-alert-title">{{title}}</p>
        <p class="yt-alert-desc">{{desc}}</p>
        <div class="yt-alert-btn">
          <span @click="handlerConfirm">确认</span>
        </div>
      </div>
    </transition>
  </div>
</template>
<script type="text/ecmascript-6">
  import { listenModule } from '../../mixins/listenModule'
  export default {
    name: 'yt-alert-module',
    mixins: [ listenModule ],
    data () {
      return {
        showFlag: false,
        title: '',
        desc: '',
        confirm: null
      }
    },
    methods: {
      show ( { title = '温馨提示', desc = '您确定要提交吗？', confirm } ) {
        this.title = title
        this.desc = desc
        this.confirm = confirm
        this.showFlag = true
      },
      hide() {
        this.showFlag = false
      },
      handlerConfirm() {
        this.showFlag = false
        if (this.confirm) {
          this.confirm()
        }
      }
    }
  }
</script>
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .yt-alert
    &-content
      display flex
      flex-direction column
      position fixed
      left 50%
      top 50%
      width 82%
      height 180px
      border-radius 5px
      color #101010
      z-index 2000
      background-color #ffffff
      border-top 5px solid #0086e5
      transform translate3d(-50%, -50%, 0)
      transition all .3s cubic-bezier(.11, 1.27, .44, 1.06)
    &-desc
      flex 1
      overflow-x hidden
      overflow-y auto
      margin 0 20px
      font-size 15px
      line-height 22px
      &::-webkit-scrollbar
        width 0
        height 0
    &-title
      text-align center
      line-height 50px
      letter-spacing 1px
      font-size 18px
    &-btn
      display flex
      text-align center
      width 100%
      height 40px
      line-height 40px
      border-top 1px solid #f5f5f5
      overflow hidden
      span
        flex 1
        height 100%
        border-right 1px solid #f5f5f5
        box-sizing border-box
        &:active
          background-color #f5f5f5

  .yt-alert-zoom-enter
    opacity 0
    transform translate3d(-50%, -50%, 0) scale(0.1)

  .yt-alert-zoom-leave-active
    opacity 0
    transform translate3d(-50%, -50%, 0)
</style>
