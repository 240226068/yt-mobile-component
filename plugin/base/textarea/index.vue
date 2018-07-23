<template>
  <div class="yt-textarea" :class="[`is-${type}`, type === 'row' ? `yt-border-${border}` : '']">
    <div v-if="title" class="yt-textarea-hd" :class="type === 'column' ? `yt-border-${border}` : ''">
      <span class="yt-textarea-hd__title"><slot>{{title}}</slot></span>
      <yt-speech v-if="type === 'column' && speech && !_disabled" v-model="currentValue"></yt-speech>
    </div>
    <div class="yt-textarea-bd">
      <textarea class="yt-textarea-bd__input" v-model="currentValue" :placeholder="_disabled ? disabledPlaceholder : placeholder"
                @click="doScrollParent" :disabled="_disabled" ref="textarea"></textarea>
      <yt-speech class="yt-textarea-speech" v-if="type === 'row' && speech && !_disabled" v-model="currentValue"></yt-speech>
      <div class="yt-textarea-bd__count" v-if="showCount && max && !_disabled" @click="focus">
        <span>{{currentValue.length}} / {{max}}</span>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import { requestAnimationFrame, getParentAndOffsetByNode } from 'yt/utils'
  import Autosize from 'autosize'

  export default {
    name: 'yt-textarea',
    inject: {
      ytForm: {
        default: () => ({})
      }
    },
    props: {
      /**
       * 类型  取值有column || row
       */
      type: {
        type: String,
        default: 'column'
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
      disabledPlaceholder: {
        type: String,
        default: '暂无内容'
      },
      /**
       * 标题
       */
      title: {
        type: String,
        default: ''
      },
      /**
       * 输入框自适应
       */
      autosize: {
        type: Boolean,
        default: true
      },
      /**
       * 输入框的值
       * @model
       */
      value: {
        type: String,
        default: ''
      },
      /**
       * 显示计数
       */
      showCount: {
        type: Boolean,
        default: false
      },
      /**
       * 输入框最多输入多个字
       */
      max: {
        type: Number,
        default: 1000
      },
      /**
       * 显示speech
       */
      speech: {
        type: Boolean,
        default: true
      },
      /**
       * 禁用输入框
       */
      disabled: {
        type: Boolean,
        default: false
      },
      offset: {
        type: Number,
        default: 40
      }
    },
    computed: {
      _disabled() {
        return this.disabled || (this.ytForm || {}).disabled
      },
      currentValue: {
        get() {
          return this.value
        },
        set(val) {
          if (val.length > this.max) {
            val = val.slice(0, this.max)
            this.$refs.textarea.value = val
          }
          this.$emit('input', val)
        }
      }
    },
    mounted() {
      !this.autosize || this.bindAutosize()
    },
    methods: {
      updateAutosize() {
        Autosize.update(this.$refs.textarea)
      },
      bindAutosize() {
        Autosize(this.$refs.textarea)
      },
      unbindAutosize() {
        Autosize.destroy(this.$refs.textarea)
      },
      focus() {
        this.$refs.textarea.focus()
      },
      _setScroll(el, start, move, direction = 'scrollLeft') {
        let count = 0
        const step = () => {
          const scrollDuration = 15
          el[direction] += move / scrollDuration
          if (++count < scrollDuration) {
            window.requestAnimationFrame(step)
          }
        }
        requestAnimationFrame(step)
      },
      doScrollParent() {
        let options = getParentAndOffsetByNode(this.$el)
        if (options.parent) {
          let el = options.parent
          let start = el.scrollTop
          let end = options.offset - this.offset
          this._setScroll(el, start, end - start, 'scrollTop')
        }
      }
    },
    beforeDestroy() {
      this.unbindAutosize()
    },
    watch: {
      'autosize'(val) {
        this.unbindAutosize()
        !val || this.bindAutosize()
      }
    }
  }
</script>
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .yt-textarea
    display flex
    background-color #ffffff
    &.is-column
      flex-direction column
      .yt-textarea-bd
        padding-bottom 0
    &.is-row
      flex-direction row
      .yt-textarea-speech
        position absolute
        right 0
        bottom 0
      .yt-textarea-bd__count
        text-align left

  .yt-textarea-hd
    display flex
    padding 0 10px 0 15px
    line-height 30px
    font-size 14px
    color #333333
    &__title
      padding 8px 0
      flex 1

  .yt-textarea-bd
    flex 1
    position relative
    padding 10px
    display flex
    flex-direction column
    &__count
      color #B2B2B2
      text-align right
      height 20px
    &__input
      width 100%
      min-height 80px
      resize none
      border none
      outline none
      color #808080
      &:focus
        border none
        outline none
      &:disabled
        background-color transparent
</style>
