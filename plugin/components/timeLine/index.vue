<template>
  <div class="yt-timeLine">
    <div class="yt-timeLine-wrapper" v-for="(item, index) in list" :key="index">
      <span class="yt-timeLine-core" :class="{'is-current': index === 0}"></span>
      <div class="yt-timeLine-row">
        <!-- @slot 定制左侧样式-->
        <slot v-bind="item">
          <p class="yt-timeLine-desc">{{item.desc}}</p>
          <p class="yt-timeLine-time">{{item.time | formatTime}}</p>
        </slot>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'yt-timeLine',
    props: {
      /**
       * 数据列表 [{time, desc}]
       */
      list: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>
