<template>
  <div class="yt-tabs">
    <div class="yt-tabs-header" ref="header">
      <tab-item @click="active = index" v-for="(panel, index) in panels" :key="index" :panel="panel" :active="active === index"></tab-item>
      <div class="yt-tabs-line" ref="line"></div>
    </div>
    <yt-tab-panles class="yt-tabs-container" @move="_moveLine" @reset="_resetLine" v-model="active" :panels="panels" :slider="slider" listen>
      <!-- @slot 包裹yt-tab-panel组件-->
      <slot></slot>
    </yt-tab-panles>
  </div>
</template>

<script type="text/ecmascript-6">
  import tabItem from './tabItem'
  import { requestAnimationFrame } from '../../utils'

  export default {
    name: 'yt-tabs',
    provide() {
      return {
        ytTabs: this
      }
    },
    components: { tabItem },
    props: {
      /**
       * 当前tab的索引
       */
      value: {
        type: Number,
        default: 0
      },
      /**
       * 是否禁用slider
       */
      slider: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      active: {
        get(val) {
          return this.value
        },
        set(val) {
          this.$emit('input', val)
        }
      }
    },
    data() {
      return {
        panels: [],
        tabItems: []
      }
    },
    methods: {
      _resetLine() {
        let line = this.$refs.line
        if (!line) return
        let el = this.tabItems[this.active].$el
        let left = el.offsetLeft
        let width = el.offsetWidth
        line.setAttribute('style', `left: ${left}px; width: ${width}px;`)
      },

      _moveLine(percent) {
        let line = this.$refs.line
        let len = this.tabItems.length
        if (!line || len === 0 || this.active < 0 || this.active >= this.panels.length) return
        let el = this.tabItems[this.active].$el
        let nextIndex = percent < 0 ? Math.min(this.active + 1, this.tabItems.length - 1) : Math.max(this.active - 1, 0)
        if (nextIndex === this.active) return
        let nextEl = this.tabItems[nextIndex].$el
        let left = el.offsetLeft
        let width = el.offsetWidth
        let nextLeft = nextEl.offsetLeft
        let nextWidth = nextEl.offsetWidth
        let deltaLeft = (nextLeft - left) * percent / 100
        let deltaWidth = (nextWidth - width) * percent / 100
        left = percent < 0 ? left - deltaLeft : left + deltaLeft
        width = percent < 0 ? width - deltaWidth : width + deltaWidth
        line.setAttribute('style', `left: ${left}px;width: ${width}px;`)
      },

      _handler(val = this.active) {
        let len = this.tabItems.length
        if (len === 0) return
        val = val < 0 ? 0 : val
        val = val >= len ? len - 1 : val
        let el = this.tabItems[val].$el
        if (val !== len - 1) {
          this._scrollHeader(el)
        }
        this._scrollLine(el)
      },

      _scrollLine(el) {
        let line = this.$refs.line
        let left = el.offsetLeft
        let width = el.offsetWidth
        if (line) {
          line.style = `left: ${left}px; width: ${width}px;`
        }
      },

      _scrollHeader(el) {
        let header = this.$refs.header
        let rect = el.getBoundingClientRect()
        let move = window.innerWidth / 2 - (rect.x + rect.width / 2)
        if (header) {
          this._setScroll(header, header.scrollLeft, -move, 'scrollLeft')
        }
      },

      /**
       * 设置滚动样式
       * @private
       */
      _setScroll(el, start, move, direction = 'scrollLeft') {
        let count = 0
        const step = () => {
          const scrollDuration = 15
          el[direction] += move / scrollDuration
          if (++count < scrollDuration) {
            requestAnimationFrame(step)
          }
        }
        requestAnimationFrame(step)
      },

      /**
       * 新增tab
       * @param child  tabbar-panel组件的this
       * @return {void}
       * @public
       */
      appendPanel(child) {
        const index = this.$slots.default.indexOf(child.$vnode)
        this.panels.splice(index, 1, child)
      },

      /**
       * 移除tab
       * @param child tabbar-panel组件的this
       * @return {void} 返回空
       * @public
       */
      removePanel(child) {
        const index = this.panels.indexOf(child)
        if (index > -1) {
          this.panels.splice(index, 1)
        }
      },

      appendTab(child) {
        this.tabItems.push(child)
      },

      removeTab(child) {
        const index = this.tabItems.indexOf(child)
        if (index > -1) {
          this.tabItems.splice(index, 1)
        }
      }
    },
    watch: {
      active(val, oldVal) {
        this._handler()
      },
      tabItems() {
        this._handler()
      }
    }
  }
</script>
