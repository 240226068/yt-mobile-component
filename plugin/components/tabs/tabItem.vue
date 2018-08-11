<template>
  <yt-view @click="handlerClick" class="yt-tabs-item" :class="{'is-active': active}">
    <p v-if="panel && panel.text" class="yt-tabs-text">
      {{panel.text}}
      <yt-badge v-if="panel && panel.badge" class="yt-tabs-badge" v-bind="panel.badge"></yt-badge>
    </p>
  </yt-view>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'yt-tab-item',
    inject: {
      ytTabs: {
        default: () => {
          return {}
        }
      }
    },
    props: {
      panel: {},
      /**
       * 当前item是否选中
       */
      active: {
        type: Boolean
      }
    },
    methods: {
      handlerClick(e) {
        /**
         * @event click
         * @description 点击事件
         * @type {event}
         */
        this.$emit('click', e)
      }
    },
    mounted() {
      this.ytTabs && this.ytTabs.appendTab(this)
    },
    destroyed() {
      this.ytTabs && this.ytTabs.removeTab(this)
    }
  }
</script>
