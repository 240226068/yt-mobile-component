<template>
  <div class="yt-tabbar">
    <div class="yt-tabbar-container" ref="tabWrapper">
      <slot></slot>
    </div>
    <div class="yt-tabbar-header">
      <component :is="getOptions(i).name" :tabIndex="getOptions(i).tabIndex" :panel="getOptions(i).panel" v-for="i in len" :key="i"></component>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import tabbarItem from './tabbarItem'
  import tabbarQuick from './tabbarQuick'
  import { PackingEvent } from '../../utils'

  const TRANSITION = 'transition: transform .3s ease;'
  const POS_LEFT = 'transform: translate3d(-100%, 0, 0);'
  const POS_CENTER = 'transform: translate3d(0, 0, 0);'
  const POS_RIGHT = 'transform: translate3d(100%, 0, 0);'
  export default {
    props: {
      /**
       * 当前tab的索引
       */
      value: {
        type: Number,
        default: 0
      },
      quick: {
        type: Number,
        default: null
      },
      /**
       * 是否禁用slider
       */
      disableSlider: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      len() {
        if (this.quick === null) return this.panels.length
        return this.panels.length + 1
      }
    },
    mounted() {
      this._setPanelPos(this.active, null)
      this.packingEvent = new PackingEvent({
        el: this.$refs.tabWrapper,
        disabled: this.disableSlider,
        direction: PackingEvent.HORIZONTAL(),
        move: this._move,
        end: this._end
      })
    },
    components: { tabbarItem, tabbarQuick },
    provide() {
      return {
        ytTabbar: this
      }
    },
    data() {
      return {
        panels: [],
        active: this.value
      }
    },
    methods: {
      _end(e) {
        if (this.pos === 'left') return
        if (Math.abs(e.moveX) > 70) {
          this.active = e.moveX > 0 ? Math.max(this.active - 1, 0) : Math.min(this.active + 1, this.panels.length - 1)
        } else {
          this._resetPos(e.moveX)
        }
      },
      _move(e) {
        if (this.pos === 'left') return
        this._movePanel(e.deltaX)
      },
      _resetPos(delta) {
        if (delta === 0) return
        let _moveIndex = delta < 0 ? Math.min(this.active + 1, this.panels.length - 1) : Math.max(this.active - 1, 0)
        if (_moveIndex === this.active) return
        let panel = this.panels[ this.active ].$el
        let nextPanel = this.panels[ _moveIndex ].$el
        panel.style = `transform: translate3d(0, 0, 0); ${TRANSITION}`
        nextPanel.style = `transform: translate3d(${_moveIndex > this.active ? 100 : -100}%, 0, 0); ${TRANSITION}`
        let line = this.$refs.tabLine
        if (!line || this.pos !== 'top') return
        let el = this.tabItems[ this.active ].$el
        let left = el.offsetLeft
        let width = el.offsetWidth
        line.setAttribute('style', `left: ${left}px; width: ${width}px;`)
      },
      _movePercent(page, delta) {
        return delta * 100 / this.panels[ page ].$el.offsetWidth
      },
      _movePanel(x) {
        if (this.panels.length === 0 || this.active < 0 || this.active >= this.panels.length) return
        let nextIndex = x < 0 ? Math.min(this.active + 1, this.panels.length - 1) : Math.max(this.active - 1, 0)
        if (nextIndex === this.active) return
        let panel = this.panels[ this.active ].$el
        let nextPanel = this.panels[ nextIndex ].$el
        let percent = this._movePercent(this.active, x)
        let nextPercent = this._movePercent(nextIndex, x) + (x < 0 ? 100 : -100)
        panel.style = `transform: translate3d(${percent}%, 0, 0)`
        nextPanel.style = `transform: translate3d(${nextPercent}%, 0, 0)`
      },
      _setPanelPos(val, oldVal) {
        if (this.panels.length === 0) return
        if (val < 0 || val >= this.panels.length) {
          val = 0
        }
        this.panels.forEach((panel, index) => {
          let style = ''
          if (index === val) {
            style = POS_CENTER + (this.pos === 'left' ? '' : TRANSITION)
          } else if (index === oldVal) {
            style = (this.pos === 'left' ? '' : TRANSITION) + ((val - oldVal) > 0 ? POS_LEFT : POS_RIGHT)
          } else {
            style = (index - val) > 0 ? POS_RIGHT : POS_LEFT
          }
          panel.$el.setAttribute('style', style)
        })
      },
      getOptions(index) {
        index = index - 1
        if (this.quick === null) {
          return {
            name: 'tabbar-item',
            panel: this.panels[ index ]
          }
        } else {
          let panel = null
          let name = 'tabbar-quick'
          let tabIndex = null
          if (this.quick > index) {
            name = 'tabbar-item'
            panel = this.panels[ index ]
            tabIndex = index
          } else if (this.quick < index) {
            name = 'tabbar-item'
            panel = this.panels[ index - 1 ]
            tabIndex = index - 1
          }
          return { name, panel, tabIndex }
        }
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
      }
    },
    watch: {
      'value'(val) {
        this.active = val
      },
      'active'(val, oldVal) {
        this._setPanelPos(val, oldVal)
      },
      'panels'(val) {
        this.active = Math.min(val.length - 1, this.active)
        this._setPanelPos(this.active, null)
      },
      'disableSlider'(val) {
        this.packingEvent.setDisabled(val)
      }
    }
  }
</script>
