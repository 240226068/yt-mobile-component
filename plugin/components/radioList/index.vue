<template>
  <div class="yt-radioList" @change="$emit('change', currentValue)">
    <!-- @slot 标题插槽-->
    <slot name="title">
      <div class="yt-radioList-title" v-if="title">{{title}}</div>
    </slot>
    <div class="yt-radioList-wrapper">
      <yt-radio v-model="currentValue" v-for="(option, index) in list"
                :disabled="option.disabled" :name="option | securityGetVal(val) || option"
                :pos="pos" :inline="inline" :key="index">
        <!--@slot 自定义label的内容-->
        <slot v-bind="option">{{option | securityGetVal(label)}}</slot>
      </yt-radio>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-radioList',
    props: {
      /**
       *  radioList 的小标题
       */
      title: String,
      /**
       *  控制radio按钮在左侧还是在右侧   可取值 'left' || 'right'
       */
      pos: {
        type: String,
        default: 'left'
      },
      /**
       *  radio 是否为inline
       */
      inline: {
        type: Boolean,
        default: true
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
       *  选中的列表
       */
      value: {}
    },
    computed: {
      currentValue: {
        get() {
          return this.value
        },
        set(val) {
          this.$emit('input', val)
        }
      }
    }
  }
</script>
