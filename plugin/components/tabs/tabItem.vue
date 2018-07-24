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
    inject: {
      ytTabs: {
        default: () => {
          return {}
        }
      }
    },
    props: {
      panel: {},
      active: {
        type: Boolean
      }
    },
    methods: {
      handlerClick(e) {
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
