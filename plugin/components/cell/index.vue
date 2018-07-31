<template>
  <yt-view :class="`yt-cell yt-border-${border}`" :ripple="ripple" @click="handlerClick">
    <slot name="icon">
      <img v-if="icon" class="yt-cell-icon" :src="icon">
      <i v-if="font" class="yt-cell-font" :class="font"></i>
    </slot>
    <label class="yt-cell-label">
      <slot name="label">{{label}}</slot>
    </label>
    <span class="yt-cell-value">
      <slot>{{value}}</slot>
    </span>
    <i class="yt-cell-link iconfont icon-right" v-if="isLink"></i>
  </yt-view>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-cell',
    props: {
      /**
       * 左侧标题文字
       */
      label: [String, Number],
      /**
       * 输入框的值
       * @model
       */
      value: [String, Number],
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
       * border  取值 none | half | all
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
      handlerClick(e) {
        this.$emit('click', e)
      }
    }
  }
</script>
