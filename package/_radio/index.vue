<template>
  <div>
    <yt-tag style="font-size: 12px;" v-if="_disabled">{{currentLabel}}</yt-tag>
    <yt-radio-list v-else v-bind="$attrs" :list="list" :label="label" :val="val" v-model="currentValue"></yt-radio-list>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-cell-radio',
    inject: {
      ytForm: {
        default: null
      }
    },
    props: {
      value: {},
      /**
       * 是否禁用
       */
      disabled: {
        type: Boolean,
        default: false
      },
      /**
       *  用于绑定input中的value   例如每一项为item  则item[val] 即为我们选中的值
       */
      val: {
        type: String,
        default: 'value'
      },
      /**
       *  用于显示的文字  例如每一项为item  则item[label] 即为显示的文字
       */
      label: {
        type: String,
        default: 'label'
      },
      /**
       *  数据列表
       */
      list: {
        type: Array,
        required: true
      },
      /**
       *  在禁用状态下，没有选中时候的默认文字
       */
      defaultText: {
        type: String,
        default: 'N/A'
      }
    },
    computed: {
      currentValue: {
        get() {
          return this.value
        },
        set(val) {
          this.$emit('input', val)
        }
      },
      _disabled() {
        return this.disabled || (this.ytForm && this.ytForm.disabled)
      },
      currentLabel() {
        let obj = this.list.find(v => v[this.val] === this.currentValue)
        return obj ? obj[this.label] : this.defaultText
      }
    }
  }
</script>
