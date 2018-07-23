<template>
  <div>
    <yt-mask :visible="showFlag" bgc="rgba(0, 0, 0, 0.4)" :fixed="true">
      <div class="yt-loading">
        <svg class="yt-loading-wrapper" viewBox="25 25 50 50">
          <circle class="yt-loading-wrapper_circle" cx="50" cy="50" r="20" fill="none"></circle>
        </svg>
        <span class="yt-loading-text">{{text}}</span>
      </div>
    </yt-mask>
  </div>
</template>
<script type="text/ecmascript-6">
  import { listenModule } from '../../mixins/listenModule'
  export default {
    name: 'yt-loading-module',
    mixins: [ listenModule ],
    data () {
      return {
        showFlag: false,
        text: '请稍后...'
      }
    },
    methods: {
      show () {
        this.timeout = setTimeout(() => {
          this.showFlag = true
        }, 500)
      },
      hide () {
        if (this.timeout) {
          clearTimeout(this.timeout)
        }
        this.showFlag = false
      },
      load( options ) {
        this.show()
        const success = results => {
          this.hide()
          return Promise.resolve(results)
        }
        const error = error => {
          this.hide()
          return Promise.reject(error)
        }
        if (options instanceof Array) {
          return Promise.all(options).then(success, error)
        } else {
          return options.then(success, error)
        }
      }
    }
  }
</script>
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .yt-loading
    position absolute
    top 22%
    left 50%
    width 260px
    display flex
    align-items center
    justify-content center
    text-align center
    padding 8px 10px
    box-sizing border-box
    border-radius 5px
    background-color rgba(0, 0, 0, 0.5)
    transform translate3d(-50%, -50%, 0)
    z-index 9999
    &-wrapper
      width 20px
      height 20px
      animation yt-loader-rotate 1.5s linear 0s infinite
      &_circle
        stroke #f1f1f1
        stroke-width 0px
        stroke-linecap round
        animation yt-loader-dash 1.5s ease 0s infinite
    &-text
      margin-left 10px
      color #f1f1f1
      font-size 14px

  @keyframes yt-loader-dash
    0%
      stroke-width 4px
      stroke-dasharray 0 200
      stroke-dashoffset 0
    50%
      stroke-width 4px
      stroke-dasharray 90 150
      stroke-dashoffset -40px
    100%
      stroke-width 4px
      stroke-dasharray 90 150
      stroke-dashoffset -120px

  @keyframes yt-loader-rotate
    0%
      transform rotate(0deg)
    100%
      transform rotate(360deg)

</style>
