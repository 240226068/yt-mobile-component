<template>
  <div class="yt-card" :class="{'is-edge': edge, 'is-shadow': shadow}">
    <div class="yt-card-header" :class="{'is-tag': tag}" v-if="title">
      <span class="yt-card-title">{{title}}</span>
      <span class="yt-card-more">
        <!-- @slot 自定义 header 右侧的内容-->
        <slot name="more"></slot>
      </span>
    </div>
    <!-- @slot 自定义 header 的内容-->
    <slot name="header"></slot>
    <div class="yt-card-body">
      <!-- @slot content内容-->
      <slot></slot>
      <div class="yt-card-btn" v-if="btn">
        <yt-btn @click="handler" size="small" plain round>{{btn}}</yt-btn>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-card',
    props: {
      /**
       * card title
       */
      title: {
        type: String
      },
      /**
       * btn名称
       */
      btn: {
        type: String
      },
      /**
       * 是否显示阴影
       */
      shadow: {
        type: Boolean,
        default: true
      },
      /**
       * 是否显示title中的小标签
       */
      tag: {
        type: Boolean,
        default: true
      },
      /**
       * 是否贴边
       */
      edge: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      handler(e) {
        /**
         * @event btn-click
         * @description 点击事件
         * @type {event}
         */
        this.$emit('btn-click', e)
      }
    }
  }
</script>
