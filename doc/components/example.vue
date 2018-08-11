<template>
  <div class="wrapper" :class="{'is-open': show}">
    <div class="wrapper-text" :class="{'is-open': show}" v-text="data.text"></div>
    <div class="wrapper-btn" @click="toggle">{{ show ? '关闭' : '打开'}}</div>
    <div v-html="data.html"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'example',
    props: {
      data: {
        type: Object
      }
    },
    data() {
      return {
        show: false
      }
    },
    methods: {
      toggle() {
        this.show = !this.show
      }
    }
  }
</script>
<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .wrapper
    position relative
    margin 20px 20px 50px 20px;
    height 200px
    padding-bottom 45px
    overflow hidden
    border-radius 10px
    border 1px solid #EFEAEA
    box-shadow 1px 5px 5px #EFEAEA
    &.is-open
      height auto
      &::before
        display none

    &::before
      position absolute
      display block
      content " "
      top 0
      bottom 45px
      left 0
      right 0
      background-color #ffffff
      opacity 0.75

    &-text
      display inline-block
      position absolute
      top 50%
      left 50%
      margin-top -25px
      transform translate3d(-50%, -50%, 0)
      color #42b983
      font-size 30px
      &.is-open
        display none

    &-btn
      position absolute
      bottom 0
      left 0
      right 0
      color #333333
      font-size 16px
      height 45px
      line-height 45px
      text-align center
      border-top 1px solid #EFEAEA
      background-color #ffffff
      &:hover
        background-color #fafafa
</style>
