<script type="text/ecmascript-6">
  import tabbarItem from './tabbarItem'

  const TabbarQuick = 'yt-tabbar-quick'
  const TabbarPanel = 'yt-tabbar-panel'
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
      }
    },
    components: { tabbarItem },
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
      getNodesByTag(tag) {
        if (!this.$slots.default) return []
        return this.$slots.default.filter(item => item.componentOptions && item.componentOptions.tag === tag)
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
        }, this.getNodesByTag(TabbarPanel))
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
            on: {
              click: () => {
                this.active = index
                /**
                 * @event tab-click
                 * @description tab的点击事件
                 * @type {active}
                 */
                this.$emit('tab-click', index)
              }
            }
          })
        })
        let quick = this.getNodesByTag(TabbarQuick)
        if (quick && quick.length) {
          quick = quick[0]
          let index = quick.componentOptions.propsData.index || Math.floor(children.length / 2)
          children.splice(index, 0, quick)
        }
        return h('div', { attrs: { class: 'yt-tabbar-header' } }, children)
      }
    },
    watch: {
      'active'(val, oldVal) {
        /**
         * @event change
         * @description tab页改变时
         * @type {val}
         */
        this.$emit('change', val, oldVal)
      }
    }
  }
</script>
