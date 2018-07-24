<template>
  <div>
    <slot></slot>
  </div>
</template>
<script type="text/ecmascript-6">
  import { PackingEvent } from '../../utils'

  const TRANSITION = 'transition: transform .3s ease;'
  const POS_LEFT = 'transform: translate3d(-100%, 0, 0);'
  const POS_CENTER = 'transform: translate3d(0, 0, 0);'
  const POS_RIGHT = 'transform: translate3d(100%, 0, 0);'
  export default {
    props: {
      slider: {
        type: Boolean,
        default: true
      },
      value: {},
      panels: {
        type: Array,
        default() {
          return []
        }
      },
      listen: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      active: {
        get() {
          return this.value
        },
        set(val) {
          this.$emit('input', val)
        }
      }
    },
    mounted() {
      this.packingEvent = new PackingEvent({
        el: this.$el,
        disabled: !this.slider,
        direction: PackingEvent.HORIZONTAL(),
        move: this._move,
        end: this._end
      })
      this._setPanelPos(this.active, null)
    },
    methods: {
      _end(e) {
        if (Math.abs(e.moveX) > 70) {
          this.active = e.moveX > 0 ? Math.max(this.active - 1, 0) : Math.min(this.active + 1, this.panels.length - 1)
        } else {
          this._resetPos(e.moveX)
          this.$emit('reset')
        }
      },
      _move(e) {
        let x = e.deltaX
        if (this.panels.length === 0 || this.active < 0 || this.active >= this.panels.length) return
        let nextIndex = x < 0 ? Math.min(this.active + 1, this.panels.length - 1) : Math.max(this.active - 1, 0)
        if (nextIndex === this.active) return
        let panel = this.panels[this.active].$el
        let nextPanel = this.panels[nextIndex].$el
        let percent = this._movePercent(this.active, x)
        let nextPercent = this._movePercent(nextIndex, x) + (x < 0 ? 100 : -100)
        panel.style = `transform: translate3d(${percent}%, 0, 0)`
        nextPanel.style = `transform: translate3d(${nextPercent}%, 0, 0)`
        if (this.listen) {
          this.$emit('move', percent)
        }
      },
      _resetPos(delta) {
        if (delta === 0) return
        let _moveIndex = delta < 0 ? Math.min(this.active + 1, this.panels.length - 1) : Math.max(this.active - 1, 0)
        if (_moveIndex === this.active) return
        let panel = this.panels[this.active].$el
        let nextPanel = this.panels[_moveIndex].$el
        panel.style = `transform: translate3d(0, 0, 0); ${TRANSITION}`
        nextPanel.style = `transform: translate3d(${_moveIndex > this.active ? 100 : -100}%, 0, 0); ${TRANSITION}`
      },
      _movePercent(page, delta) {
        return delta * 100 / this.panels[page].$el.offsetWidth
      },
      _setPanelPos(val, oldVal) {
        if (this.panels.length === 0) return
        if (val < 0 || val >= this.panels.length) {
          val = 0
        }
        this.panels.forEach((panel, index) => {
          let style = ''
          if (index === val) {
            style = POS_CENTER + TRANSITION
          } else if (index === oldVal) {
            style = TRANSITION + ((val - oldVal) > 0 ? POS_LEFT : POS_RIGHT)
          } else {
            style = (index - val) > 0 ? POS_RIGHT : POS_LEFT
          }
          panel.$el.setAttribute('style', style)
        })
      }
    },
    watch: {
      'active'(val, oldVal) {
        this._setPanelPos(val, oldVal)
      },
      'panels'(val) {
        this.active = Math.min(val.length - 1, this.active)
        this._setPanelPos(this.active, null)
      },
      'slider'(val) {
        this.packingEvent.setDisabled(!val)
      }
    }
  }
</script>
