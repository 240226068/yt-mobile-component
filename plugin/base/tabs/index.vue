<script type="text/ecmascript-6">
  import tabHeader from './tabHeader'
  import { PackingEvent, requestAnimationFrame } from '../../utils'

  const TRANSITION = 'transition: transform .3s ease;'
  const POS_LEFT = 'transform: translate3d(-100%, 0, 0);'
  const POS_CENTER = 'transform: translate3d(0, 0, 0);'
  const POS_RIGHT = 'transform: translate3d(100%, 0, 0);'
  export default {
    name: 'yt-tabs',
    provide() {
      return {
        ytTab: this
      }
    },
    props: {
      btnIndex: {
        type: Number,
        default: -1
      },
      /**
       * tab所在的位置  取值有 top || bottom ||left
       */
      pos: {
        type: String,
        default: 'bottom'
      },
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
      disableSlider: {
        type: Boolean,
        default: false
      },
      /**
       * 当前页面激活时候 自动清理当前tab的角标
       */
      autoClearBadge: {
        type: Boolean,
        default: false
      },
      /**
       * tab pos="bottom"时 tab突出效果  取值'' || 'scale'
       */
      tabbarType: {
        type: String,
        default: ''
      },
      /**
       * 当panel数量为一 并且 pos=top时，隐藏headed
       */
      hideHead: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        panels: [],
        tabItems: [],
        active: this.value
      }
    },
    render(h) {
      let { Theme, pos, panels, handlerTabClick } = this
      const body = h('div', {
        attrs: { class: 'yt-tabs-container' },
        ref: 'tabWrapper'
      }, [this.$slots.default])
      let header = h('tabHeader', {
        props: { panels: [].concat(panels) },
        on: { 'tab-click': handlerTabClick },
        ref: 'tabHeader'
      }, pos === 'top' ? [
        h('div', {
          attrs: { class: `yt-tabs-line` },
          ref: 'tabLine'
        })
      ] : [])
      if (pos === 'top' && panels.length <= 1 && this.hideHead) header = []
      return h('div', {
        attrs: { class: `yt-tabs  yt-tabs__${Theme} is-${pos}` }
      }, (pos === 'top' || pos === 'left') ? [header, body] : [body, header])
    },
    components: {
      tabHeader
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
        this._moveLine(e.deltaX)
      },
      _resetPos(delta) {
        if (delta === 0) return
        let _moveIndex = delta < 0 ? Math.min(this.active + 1, this.panels.length - 1) : Math.max(this.active - 1, 0)
        if (_moveIndex === this.active) return
        let panel = this.panels[this.active].$el
        let nextPanel = this.panels[_moveIndex].$el
        panel.style = `transform: translate3d(0, 0, 0); ${TRANSITION}`
        nextPanel.style = `transform: translate3d(${_moveIndex > this.active ? 100 : -100}%, 0, 0); ${TRANSITION}`
        let line = this.$refs.tabLine
        if (!line || this.pos !== 'top') return
        let el = this.tabItems[this.active].$el
        let left = el.offsetLeft
        let width = el.offsetWidth
        line.setAttribute('style', `left: ${left}px; width: ${width}px;`)
      },
      _movePercent(page, delta) {
        return delta * 100 / this.panels[page].$el.offsetWidth
      },
      _movePanel(x) {
        if (this.panels.length === 0 || this.active < 0 || this.active >= this.panels.length) return
        let nextIndex = x < 0 ? Math.min(this.active + 1, this.panels.length - 1) : Math.max(this.active - 1, 0)
        if (nextIndex === this.active) return
        let panel = this.panels[this.active].$el
        let nextPanel = this.panels[nextIndex].$el
        let percent = this._movePercent(this.active, x)
        let nextPercent = this._movePercent(nextIndex, x) + (x < 0 ? 100 : -100)
        panel.style = `transform: translate3d(${percent}%, 0, 0)`
        nextPanel.style = `transform: translate3d(${nextPercent}%, 0, 0)`
      },
      _moveLine(x) {
        let line = this.$refs.tabLine
        let len = this.tabItems.length
        if (!line || this.pos !== 'top' || len === 0 || this.active < 0 || this.active >= this.panels.length) return
        let el = this.tabItems[this.active].$el
        let nextIndex = x < 0 ? Math.min(this.active + 1, this.tabItems.length - 1) : Math.max(this.active - 1, 0)
        if (nextIndex === this.active) return
        let nextEl = this.tabItems[nextIndex].$el
        let left = el.offsetLeft
        let width = el.offsetWidth
        let nextLeft = nextEl.offsetLeft
        let nextWidth = nextEl.offsetWidth
        let deltaLeft = (nextLeft - left) * this._movePercent(this.active, x) / 100
        let deltaWidth = (nextWidth - width) * this._movePercent(this.active, x) / 100
        left = x < 0 ? left - deltaLeft : left + deltaLeft
        width = x < 0 ? width - deltaWidth : width + deltaWidth
        line.setAttribute('style', `left: ${left}px;width: ${width}px;`)
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
      /**
       * 设置高亮线的样式
       * @param val
       * @private
       */
      _setLineStyle(val) {
        let line = this.$refs.tabLine
        let len = this.tabItems.length
        let header = this.$refs.tabHeader
        if (!header) return
        let wrapper = header.$el
        if (len === 0) return
        val = val < 0 ? 0 : val
        val = val >= len ? len - 1 : val
        let el = this.tabItems[val].$el
        let left = el.offsetLeft
        let rect = el.getBoundingClientRect()
        let width = el.offsetWidth
        let move = 0
        if (this.pos === 'top' && line) {
          line.style = `left: ${left}px; width: ${width}px;`
          move = window.innerWidth / 2 - (rect.x + rect.width / 2)
          if (val === len - 1) return
          this._setScroll(wrapper, wrapper.scrollLeft, -move, 'scrollLeft')
        }
        if (this.pos === 'left') {
          move = window.innerHeight / 2 - (rect.y + rect.height / 2)
          if (val === len - 1) return
          this._setScroll(wrapper, wrapper.scrollTop, -move, 'scrollTop')
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
            window.requestAnimationFrame(step)
          }
        }
        requestAnimationFrame(step)
      },
      handlerTabClick(index) {
        this.active = index
      },
      /**
       * 新增tab
       * @param child  tab-panel组件的this
       * @return {void}
       * @public
       */
      appendPanel(child) {
        const index = this.$slots.default.indexOf(child.$vnode)
        this.panels.splice(index, 1, child)
      },
      /**
       * 移除tab
       * @param child tab-panel组件的this
       * @return {void} 返回空
       * @public
       */
      removePanel(child) {
        const index = this.panels.indexOf(child)
        if (index > -1) {
          this.panels.splice(index, 1)
        }
      },
      appendTabItem(child) {
        this.tabItems.push(child)
      },
      removeTabItem(child) {
        const index = this.tabItems.indexOf(child)
        if (index > -1) {
          this.tabItems.splice(index, 1)
        }
      }
    },
    watch: {
      'value'(val) {
        this.active = val
      },
      'active'(val, oldVal) {
        this._setPanelPos(val, oldVal)
        this._setLineStyle(val)
      },
      'panels'(val) {
        this.active = Math.min(val.length - 1, this.active)
        this._setPanelPos(this.active, null)
      },
      'tabItems'(val) {
        this._setLineStyle(this.active)
      },
      'disableSlider'(val) {
        this.packingEvent.setDisabled(val)
      }
    }
  }
</script>
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  @import '../../style/var'
  .yt-tabs
    flex 1
    overflow hidden
    position relative
    display flex
    flex-direction column
    width 100%
    height 100%
    &.is-left
      flex-direction row
    &-container
      position relative
      flex 1
      overflow hidden
      background-color transparent
    &-line
      position absolute
      bottom 0
      z-index 10
      height tabs_line_size
      border-radius tabs_line_borderRadius
      transition all_transition
      backface-visibility hidden
    &-header
      position relative
      display flex
      align-items center
      &.is-top
        background-color #ffffff
        overflow-x auto
        height tabs_top_height
        &::-webkit-scrollbar
          display none
      &.is-bottom
        flex-direction row
        height tabs_bottom_height
        background-color tabs_header_fill
        box-shadow 0 0 20px rgba(0, 0, 0, 0.1)
      &.is-left
        z-index 100
        height 100%
        display block
        background-color tabs_header_fill
        overflow-y scroll
        &::-webkit-scrollbar
          display none
</style>
