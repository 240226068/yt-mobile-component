<script type="text/ecmascript-6">
  import tabbarItem from './tabbarItem'
  import tabbarQuick from './tabbarQuick'

  export default {
    name: 'yt-tabbar',
    provide() {
      return {
        ytTabbar: this
      }
    },
    props: {
      /**
       * 当前tab的索引
       */
      value: {
        required: true,
        type: Number,
        default: 0
      },
      /**
       * 使用含有快捷键
       */
      quick: {
        type: [Number, Boolean],
        default: null
      },
      /**
       * 是否可以左右滑动
       */
      slider: {
        type: Boolean,
        default: true
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
      },
      quickPos() {
        switch (this.quick) {
          case false:
          case null:
            return -1
          case true:
            let len = this.panels.length
            return len ? Math.floor(len / 2) : -1
          default:
            return this.quick
        }
      }
    },
    components: {
      tabbarItem,
      tabbarQuick
    },
    data() {
      return {
        panels: []
      }
    },
    render(h) {
      let panels = this.renderPanel(h)
      let header = this.renderHeader(h)
      return h('div', { attrs: { class: 'yt-tabbar' } }, [panels, header])
    },
    methods: {
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
        if (index > -1) this.panels.splice(index, 1)
      },
      /**
       * 获取panel的node
       * @param h
       * @return {vNode}
       */
      renderPanel(h) {
        return h('yt-tab-panles', {
          attrs: { class: 'yt-tabbar-container' },
          props: { value: this.active, panels: this.panels, slider: this.slider },
          on: { input: val => (this.active = val) }
        }, [this.$slots.default])
      },
      /**
       * 获取header的node
       * @param h
       * @return {vNode}
       */
      renderHeader(h) {
        let children = this.panels.map((panel, index) => {
          return h('tabbar-item', {
            props: { panel, active: index === this.active },
            on: { click: () => (this.active = index) }
          })
        })
        if (this.quickPos > -1) {
          let quick = this.$slots.quick || h('tabbar-quick', {
            on: {
              click: (e) => {
                /**
                 * @event quick-click
                 * @description 点击快捷按钮的事件
                 * @type {event}
                 */
                this.$emit('quick-click', e)
              }
            }
          })
          children.splice(this.quickPos, 0, quick)
        }
        return h('div', { attrs: { class: 'yt-tabbar-header' } }, children)
      }
    }
  }
</script>
