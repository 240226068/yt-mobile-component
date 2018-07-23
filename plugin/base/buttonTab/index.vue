<template>
  <div class="yt-buttonTab" :class="`yt-buttonTab__${Theme}`">
    <span @click="handlerClick(index)" class="yt-buttonTab-item" v-for="(bar, index) in renderList" :key="index" :class="{ 'is-active': active === index }">
      {{bar.text}}
      <yt-badge v-if="bar && bar.badge" :badge="bar.badge"></yt-badge>
    </span>
    <span class="yt-buttonTab-mask" :style="{transform: `translate3d(${this.active}00%, 0, 0)`}"></span>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'yt-buttonTab',
    props: {
      /**
       * btn集合 例如['推荐', '分享'] 或者 [{text: '推荐', badge}, {text: '分享', badge}]
       */
      list: {
        type: Array,
        default: () => {
          return []
        }
      },
      /**
       * 当前选中页面  按数组索引 默认0
       * @model
       */
      value: {
        type: Number,
        default: 0
      },
      /**
       * 当进入某一个tab页面, 如果角标存在, 自动清除掉
       */
      autoClearBadge: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        active: this.value,
        renderList: this.getRenderList(this.list)
      }
    },
    created() {
      this.clearBadge(this.active)
    },
    methods: {
      getRenderList(list) {
        return list.map(item => {
          if (typeof item === 'string') {
            return {
              text: item,
              badge: null
            }
          }
          return item
        })
      },
      handlerClick(index) {
        this.active = index
      },
      clearBadge(active) {
        if (this.autoClearBadge) {
          let tab = this.renderList[active]
          if (tab) {
            tab.badge = null
          }
          this.renderList.splice(active, 1, tab)
        }
      }
    },
    watch: {
      'list' (val) {
        this.renderList = [].concat(this.getRenderList(val))
        if (this.active >= this.renderList.length) {
          this.active = 0
        }
        this.clearBadge(this.active)
      },
      'value'(val) {
        this.active = val
      },
      'active'(val) {
        this.clearBadge(val)
        this.$emit('input', val)
        /**
         * button-tab发生变化事件
         * @event change
         */
        this.$emit('change', val)
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  @import '../../style/var'
  .yt-buttonTab
    position relative
    display inline-block
    text-align center
    white-space nowrap
    height button_tab_height
    border-radius button_tab_borderRadius
    box-sizing border-box
    border-width 1px
    border-style solid
    &-mask
      position absolute
      top 0
      left 0
      z-index -1
      content " "
      width button_tab_item_width
      height button_tab_item_height
      line-height button_tab_item_height
      border-radius button_tab_item_borderRadius
      transition md_transition

    &-item
      position relative
      display inline-block
      width button_tab_item_width
      height button_tab_item_height
      line-height button_tab_item_height
      border-radius button_tab_item_borderRadius
      font-size buttonTab_tab_item_fontSize
      transition color_transition
</style>
