<template>
  <span class="yt-time" @click="pickTime">
    <span v-if="!value">请选择 <i class="yt-time-right yt-icon icon-right"></i></span>
    <yt-tag class="yt-time-tag" v-else>{{value | formatTime(format)}}</yt-tag>
  </span>
</template>

<script type="text/ecmascript-6">
  import { Picker } from '../index'

  export default {
    name: 'yt-time',
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
       * 时间取值
       * @model
       */
      value: {
        type: [String, Date, Number],
        required: true
      },
      /**
       * 时间格式  YYYY-MM-DD hh:mm
       */
      format: {
        type: String,
        default: 'YYYY-MM-DD'
      },
      /**
       * 组件输出值的类型 默认为输入值的类型  输入date类型 返回date类型 输入string类型 返回string类型
       * 取值有  string | date | number
       */
      outType: {
        type: String
      },
      /**
       * 显示文字
       */
      showTemplate: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      _disabled() {
        return this.disabled || (this.ytForm || {}).disabled
      }
    },
    methods: {
      pickTime() {
        if (this._disabled) return
        Picker({
          title: '请选择时间',
          showTemplate: this.showTemplate,
          format: this.format,
          current: this.value,
          confirm: (res) => {
            if (this.outType) {
              res = this.outType === 'number' ? Date.parse(res) : this.outType === 'date' ? new Date(res) : res
            } else {
              res = typeof this.value === 'number' ? Date.parse(res) : this.value instanceof Date ? new Date(res) : res
            }
            this.$emit('input', res)
          }
        })
      }
    }
  }
</script>
