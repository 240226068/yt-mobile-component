<script type="text/ecmascript-6">
  import tabItem from './tabItem'
  import tabCustomItem from './tabCustomItem'
  import tabItemHorizontal from './tabItemHorizontal'

  export default {
    name: 'yt-tabs-header',
    components: {
      tabItem,
      tabCustomItem,
      tabItemHorizontal
    },
    inject: {
      ytTab: {
        default: () => {
          return {}
        }
      }
    },
    props: {
      panels: {
        type: Array
      }
    },
    computed: {
      pos() {
        return this.ytTab.pos
      },
      active() {
        return this.ytTab.active
      },
      autoClearBadge() {
        return this.ytTab.autoClearBadge
      },
      btnIndex() {
        return this.ytTab.btnIndex
      }
    },
    render(h) {
      let { pos, tabs, handlerTabClick } = this
      let nodes = []
      tabs.forEach((item, index) => {
        let node = null
        if (item.slot) {
          node = h('div', {
            attrs: { class: 'yt-tabs-tab' }
          }, [ item.slot ])
          nodes.push(node)
        } else {
          let { options } = item
          node = h(pos === 'bottom' ? 'tabItem' : 'tabItemHorizontal', {
            props: { options, tabIndex: index, active: this.getActive(index) },
            on: {
              click: (tabIndex, e) => { this.$emit('tab-click', tabIndex, e) }
            }
          })
          nodes.push(node)
        }
        if (index === this.btnIndex) {
          nodes.push(h('tabCustomItem'))
        }
      })
      return h('div', {
        attrs: { class: `yt-tabs-header is-${pos}` }
      }, nodes.concat(this.$slots.default))
    },
    data() {
      return {
        tabs: []
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      clearBadge() {
        if (this.autoClearBadge && this.active >= 0 && this.active < this.tabs.length) {
          let item = this.tabs[ this.active ]
          item.options.badge = {}
          this.tabs.splice(this.active, 1, item)
        }
      },
      getActive(index) {
        return this.ytTab.active === index
      },
      getData() {
        this.tabs = [].concat(this.panels.map(panel => {
          return {
            slot: panel.$slots.tab,
            options: panel.options || {},
            panel: panel
          }
        }))
        this.clearBadge()
      }
    },
    watch: {
      'panels'() {
        this.getData()
      },
      'active'() {
        this.clearBadge()
      }
    }
  }
</script>
