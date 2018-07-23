<template>
  <div class="yt-search">
    <input @input="change" :value="key" class="yt-search-input" type="text" :placeholder="placeholder" ref="input"/>
    <i class="yt-search-icon iconfont icon-input-search"></i>
    <i v-show="key && key.length" @click="clear" class="yt-search-close iconfont icon-input-close"></i>
  </div>
</template>
<script type="text/ecmascript-6">
  import {throttle} from '../../utils'
  export default {
    name: 'yt-search',
    props: {
      /**
       * 搜索框的默认值
       */
      search: {
        type: String,
        default: ''
      },
      /**
       * 输入框placeholder
       */
      placeholder: {
        type: String,
        default: '搜索'
      },
      /**
       * 是否开启截流
       */
      throttle: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        key: this.search
      }
    },
    methods: {
      change (e) {
        this.key = e.target.value
      },
      clear () {
        this.key = ''
      },
      focus() {
        this.$refs.input.focus()
      }
    },
    watch: {
      'search'(val) {
        this.key = val
      },
      'key'(val) {
        if (!this.throttle) {
          /**
           * 搜索文字变化事件
           * @event change
           */
          this.$emit('change', val)
          return
        }
        if (!this._throttleInstance) {
          const fn = (val) => {
            /**
             * 搜索文字变化事件
             * @event change
             */
            this.$emit('change', val)
          }
          this._throttleInstance = throttle(fn, 500, 2000)
        }
        this._throttleInstance(val)
      }
    }
  }
</script>
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .yt-search
    position relative
    display flex
    align-items center
    height 44px
    width 100%
    background-color #ffffff
    border-bottom 1px solid #f1f1f1

    &-icon
      position absolute
      top 12px
      left 16px
      width 20px
      height 20px
      font-size 14px
      color #808080
      line-height 20px
      text-align center

    &-input
      flex 1
      padding 0 30px
      margin 2px 10px
      height 30px
      border-radius 5px
      background-color #f3f3f3
      border 0
      outline 0
      &:focus
        border 0
        outline 0

    &-close
      position absolute
      top 12px
      right 15px
      width 20px
      height 20px
      color #808080
      line-height 20px
      text-align center

</style>
