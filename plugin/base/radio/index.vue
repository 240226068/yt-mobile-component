<template>
  <div @change="$emit('change', currentValue)" class="yt-radioList">
    <yt-tag v-if="_disabled">{{currentLabel}}</yt-tag>
    <label v-if="title && !_disabled" class="yt-radioList-title" v-text="title"></label>
    <div v-if="!_disabled" :class="rowClass" class="yt-radioList-row" v-for="(option, index) in list" :key="index">
      <label class="yt-radioList-label">
        <span class="yt-radio" :class="`yt-radio__${Theme}`" v-if="align === 'left'">
          <input class="yt-radio-input" type="radio" v-model="currentValue" :disabled="option.disabled"
                 :value="val ? option[val] : option">
          <span class="yt-radio-core"></span>
        </span>
        <span class="yt-radio-label"><slot :data="option">{{option[label] || option}}</slot></span>
        <span class="yt-radio" :class="`yt-radio__${Theme}`" v-if="align === 'right'">
          <input class="yt-radio-input" type="radio" v-model="currentValue" :disabled="option.disabled"
                 :value="val ? option[val] : option">
          <span class="yt-radio-core"></span>
        </span>
      </label>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'yt-radio',
    inject: {
      ytForm: {
        default: () => ({})
      }
    },
    props: {
      /**
       *  radio 的小标题
       */
      title: String,
      /**
       *  radio每行的样式
       */
      rowClass: String,
      /**
       *  radio在左侧还是右侧
       */
      align: {
        type: String,
        default: 'left'
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
       *  选中项
       */
      value: [ String, Number, Object ],
      /**
       * 禁用
       */
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      _disabled() {
        return this.disabled || (this.ytForm || {}).disabled
      },
      currentLabel() {
        let item = this.list.find(item => item[ this.val ] === this.currentValue)
        return item ? item[ this.label ] : ''
      },
      currentValue: {
        get() {
          return this.value
        },
        set( value ) {
          this.$emit('input', value)
        }
      }
    }
  }
</script>
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  @import '../../style/var'
  .yt-radioList
    &-title
      display block
      color radioList_title_color
      font-size radioList_title_fontSize
      margin radioList_title_margin
    &-row
      display flex
      align-items center
      box-sizing border-box
      line-height 2
      font-size radioList_row_fontSize
      padding radioList_row_paddingVertical radioList_row_paddingHorizontal
    &-label
      display flex
      align-items center
      flex 1

  .yt-radio
    margin-right radio_marginRight
    &-input
      display none
    &-core
      position relative
      display inline-block
      box-sizing border-box
      vertical-align middle
      border-width 1px
      border-style solid
      border-radius radio_core_borderRadius
      width radio_core_size
      height radio_core_size
      &::after
        content " "
        border-radius radio_core_borderRadius
        position absolute
        top radio_core_circle_top
        left radio_core_circle_left
        width radio_core_circle_size
        height radio_core_circle_size
        transition md_transition
        transform scale(0)
    &-label
      flex 1
      vertical-align middle
</style>
