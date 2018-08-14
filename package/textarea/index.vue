<template>
  <div class="yt-textArea" :class="[`is-${type}`, type === 'row' ? `yt-border-${border}` : '']">
    <div class="yt-textArea-title"><slot>{{title}}</slot></div>
    <div class="yt-textArea-body">
      <textarea v-model="currentValue" :placeholder="_disabled ? disabledPlaceholder : placeholder"
                class="yt-textArea-input" @click="doScrollParent" :disabled="_disabled" ref="input">
      </textarea>
      <div class="yt-textArea-count" v-if="showCount && !_disabled" @click="focus">
        <span>{{currentValue.length}} / {{max}}</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { requestAnimationFrame, getParentAndOffsetByNode } from '../utils'
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
            this.$refs.input.value = val
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
        Autosize.update(this.$refs.input)
      },
      bindAutosize() {
        Autosize(this.$refs.input)
      },
      unbindAutosize() {
        Autosize.destroy(this.$refs.input)
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
