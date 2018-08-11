<template>
  <yt-view :class="`yt-cell yt-border-${border}`" :ripple="ripple" @click="handlerClick">
    <!-- @slot 自定义cell的左侧icon内容-->
    <slot name="icon">
      <img v-if="icon" class="yt-cell-icon" :src="icon">
      <i v-if="font" class="yt-cell-font" :class="font"></i>
    </slot>
    <label class="yt-cell-label">
      <!-- @slot 自定义cell的左侧label内容-->
      <slot name="label">{{label}}</slot>
    </label>
    <span class="yt-cell-badge" v-if="badge"><yt-badge v-bind="badge"></yt-badge></span>
    <span class="yt-cell-value">
      <!-- @slot 自定义cell的右侧的内容-->
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
       * 左侧文字
       */
      label: {
        type: [String, Number],
        default: ''
      },
      /**
       * 右侧文字
       */
      value: {
        type: [String, Number],
        default: ''
      },
      /**
       * 左侧图片icon的src路径
       */
      icon: {
        type: String,
        default: ''
      },
      /**
       * 左侧icon字体的font类名
       */
      font: {
        type: String,
        default: ''
      },
      /**
       * 右侧是否出现向右箭头
       */
      isLink: {
        type: Boolean,
        default: false
      },
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
      },
      /**
       * 角标
       */
      badge: {
        type: Object,
        default: null
      }
    },
    methods: {
      handlerClick(e) {
        /**
         * @event click
         * @description  点击事件
         * @type {event}
         */
        this.$emit('click', e)
      }
    }
  }
</script>
