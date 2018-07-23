<template>
  <div :class="`yt-input yt-border-${border} ${!label ? 'no-label' : ''}`">
    <label class="yt-input-label" v-if="label">{{label}}</label>
    <span class="yt-input-value" :class="{'is-edit': !_disabled}">
      <div v-if="_disabled">{{key}}</div>
      <input v-if="!_disabled" class="yt-input-value__input" :placeholder="placeholder" :holder="holder" :type="type"
             v-model="key" ref="input"/>
      <i v-if="!_disabled && key && clear" class="yt-input-value__clear iconfont icon-input-close"
         @click="key = ''"></i>
    </span>
    <!-- @slot 定制右侧的内容 -->
    <slot>
      <span v-if="!_disabled" class="yt-input-right">
        <yt-speech v-if="speech" class="yt-input-speech" v-model="key"></yt-speech>
      </span>
    </slot>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'yt-input',
    inject: {
      ytForm: {
        default: () => ({})
      }
    },
    props: {
      /**
       * 输入框的label值
       */
      label: {
        type: String,
        default: ''
      },
      /**
       * border  取值 none | half | normal
       */
      border: {
        type: String,
        default: 'half'
      },
      /**
       *  placeholder的文字
       */
      placeholder: {
        type: String,
        default: '请输入...'
      },
      /**
       *  当前值
       *  @model
       */
      value: {
        type: [ String, Number ],
        default: ''
      },
      /**
       *  输入框的类型 text || password || number 等
       */
      type: {
        type: String,
        default: 'text'
      },
      /**
       *  是否禁用输入
       */
      disabled: {
        type: Boolean,
        default: false
      },
      /**
       *  placeholder的 text-align  取值 left || center || right
       */
      holder: {
        type: String,
        default: 'left'
      },
      /**
       * 是否显示speech按钮
       */
      speech: {
        type: Boolean,
        default: true
      },
      /**
       * 是否显示clear按钮
       */
      clear: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      _disabled() {
        return this.disabled || (this.ytForm || {}).disabled
      },
      key: {
        get() {
          return this.value
        },
        set( val ) {
          this.$emit('input', val)
        }
      }
    },
    methods: {
      /**
       * input失去焦点
       */
      blur() {
        this.$refs.input.blur()
      },
      /**
       * input获取焦点
       */
      focus() {
        this.$refs.input.focus()
      }
    }
  }
</script>
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .yt-input
    display flex
    align-items center
    justify-content space-between
    padding-left 15px
    min-height 44px
    background-color #ffffff
    &.no-label
      padding-left 0
    &-label
      padding 8px 0
      line-height 30px
      font-size 15px
      color #333333
      min-width 5em
    &-value
      flex 1
      padding 5px 10px
      line-height 24px
      font-size 14px
      text-align right
      color #808080
    &-speech
      margin-right 10px
    &-right
      display inline-block
      min-width 10px

  .yt-input-value
    &.is-edit
      position relative
      display flex
      align-items center
      padding-right 15px
      overflow hidden
    &__input
      flex 1
      overflow hidden
      border 0
      outline 0
      resize none
      text-align left
      font-size 14px
      padding 0 5px
      box-sizing border-box
      color #808080
      &:focus
        border 0
        outline 0
      &:disabled
        text-align right
        background-color transparent
      &[holder=right]
        text-align right
        &::-webkit-input-placeholder
          text-align right
      &[holder=center]
        text-align center
        &::-webkit-input-placeholder
          text-align center
      &[holder=left]
        text-align left
        &::-webkit-input-placeholder
          text-align left

    &__clear
      position absolute
      right -5px
      top 50%
      font-size 14px
      padding 5px
      color #bbbbbb
      transform translate3d(0, -50%, 0)
</style>
