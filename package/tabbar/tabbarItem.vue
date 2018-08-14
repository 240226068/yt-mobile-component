<template>
  <yt-view @click="handlerClick" class="yt-tabbar-item" :class="{'is-active': active}">
    <span class="yt-tabbar-core">
      <i v-if="panel && panel.font" class="yt-tabbar-icon" :class="panel.font"></i>
      <img v-if="panel && panel.src" class="yt-tabbar-img" :src="panel.src"/>
      <p v-if="panel && panel.text" class="yt-tabbar-text">{{panel.text}}</p>
      <yt-badge v-if="panel && panel.badge" class="yt-tabbar-badge" v-bind="panel.badge"></yt-badge>
    </span>
  </yt-view>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-tabbar-item',
    inject: {
      ytTabbar: {
        default: () => {
          return {}
        }
      }
    },
    props: {
      panel: {},
      /**
       * 是否激活
       */
      active: {
        type: Boolean
      },
      /**
       * 当前tab的索引
       */
      tabIndex: {
        type: Number
      }
    },
    methods: {
      handlerClick(e) {
        !this.ytTabbar || (this.ytTabbar.active = this.tabIndex)
      }
    }
  }
</script>
