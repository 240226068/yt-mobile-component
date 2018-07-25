<template>
  <yt-view :class="`yt-cell yt-border-${border}`" :ripple="ripple" @click="handlerClick">
    <div class="yt-cell-body">
      <slot name="icon">
        <img v-if="icon" class="yt-cell-icon" :src="icon">
        <i v-if="font" class="yt-cell-font" :class="font"></i>
      </slot>
      <label class="yt-cell-title">
        <p class="yt-cell-title-block">
          <!-- @slot title的自定义内容-->
          <slot name="title">{{title}}</slot>
        </p>
        <!-- @slot 自定义描述内容-->
        <slot name="inline">
          <span class="yt-cell-title-inline" v-if="inline">{{inline}}</span>
        </slot>
      </label>
      <span class="yt-cell-value">{{value}}</span>
    </div>
    <span class="yt-cell-value" v-if="$slots.default">
      <!-- @slot 自定义value内容-->
      <slot></slot>
    </span>
    <i v-if="isLink" class="yt-cell-link iconfont icon-right"></i>
  </yt-view>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'yt-cell',
    props: {
      /**
       * 左侧标题文字
       */
      title: [ String, Number ],
      /**
       * 标题下面文字，一般为说明文字
       */
      inline: [ String, Number ],
      /**
       * 输入框的值
       * @model
       */
      value: [ String, Number ],
      /**
       * 左侧icon的src
       */
      icon: String,
      /**
       * 左侧icon的font
       */
      font: String,
      /**
       * 右侧是否出现向右箭头
       */
      isLink: Boolean,
      /**
       * border  取值 none | half | normal
       */
      border: {
        type: String,
        default: 'half'
      },
      /**
       * 是否有水波效果
       */
      ripple: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handlerClick( e ) {
        this.$emit('click', e)
      }
    }
  }
</script>
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  @import '../../style/var'
  .yt-cell
    position relative
    display flex
    font-size cell_fontSize
    color cell_color
    padding 0 10px 0 15px
    align-items center
    box-sizing border-box
    background-color #ffffff
    &-body
      flex 1
      display flex
      box-sizing border-box
      align-items center
      padding cell_body_paddingVertical cell_body_paddingHorizontal
    &-icon
      margin cell_icon_margin
      width cell_icon_size
      height cell_icon_size
    &-font
      margin cell_icon_margin
      font-size cell_icon_size
    &-value
      text-align right
      font-size cell_value_fontSize
      color cell_value_color
    &-link
      margin 0 cell_link_marginLeft
      color cell_link_color
      font-size cell_link_fontSize

  .yt-cell-title
    flex 1
    min-width 5em
    &-block
      line-height cell_block_lineHeight
      font-size cell_block_fontSize
      color cell_block_color
    &-inline
      line-height cell_inline_lineHeight
      font-size cell_inline_fontSize
      color cell_inline_color
</style>
