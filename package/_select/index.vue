<template>
  <span @click="handlerSelect" class="yt-select">
    <span v-if="text && !selectList.length">
      {{text}}<i class="yt-select-right yt-icon icon-right"></i>
    </span>
    <span class="yt-select-tags" v-else>
      <!-- @slot 自定义tag的内容 -->
      <slot name="tag" :data="selectList">
        <yt-tag class="yt-select-tag" v-for="(tag, index) in selectList" :key="index">{{tag[label]}}</yt-tag>
      </slot>
    </span>
  </span>
</template>

<script type="text/ecmascript-6">
  import { Select } from '../$select'

  export default {
    name: 'yt-cellSelect',
    inject: {
      ytForm: {
        default: () => ({})
      }
    },
    props: {
      /**
       * 是否禁用
       */
      disabled: {
        type: Boolean,
        default: false
      },
      /**
       * 数据列表
       */
      list: {
        type: Array,
        default() {
          return []
        }
      },
      /**
       * 未选中时候显示的文字
       */
      text: {
        type: String,
        default: '请选择'
      },
      /**
       * 弹出框显示的标题
       */
      title: {
        type: String,
        default: '请选择'
      },
      /**
       * 最小选择多少个
       */
      min: {
        type: Number,
        default: 1
      },
      /**
       * 最大选择多少个
       */
      max: {
        type: Number,
        default: 1
      },
      /**
       * 列表显示的value所对应的字段
       */
      val: {
        type: String,
        default: 'D_code'
      },
      /**
       * 列表显示的label所对应的字段
       */
      label: {
        type: String,
        default: 'D_text'
      },
      /**
       * 当max大于1时， 当前值类型为Array； 当max为1  当前值可为String, Number, Array, Object
       */
      value: {
        type: [String, Number, Array, Object],
        default() {
          return []
        }
      }
    },
    computed: {
      _value: {
        get() {
          if (this.value instanceof Array) {
            return this.value
          } else {
            if (this.max === 1) {
              return this.value ? [this.value] : []
            }
            return this.value
          }
        },
        set(val) {
          if (this.max === 1) {
            val = (val && val.length) ? val[0] : null
          }
          this.$emit('input', val)
        }
      },
      _disabled() {
        return this.disabled || (this.ytForm || {}).disabled
      },
      selectList() {
        let results = []
        this._value.forEach(item => {
          let child = this.list.find(child => item === child[this.val])
          !child || results.push(child)
        })
        return results
      }
    },
    methods: {
      handlerSelect() {
        if (this._disabled) return
        Select(this)
      },
      Confirm(val) {
        if (this._disabled) return
        this._value = val
      }
    }
  }
</script>
