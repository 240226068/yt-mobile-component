<template>
  <div class="yt-tabbar">
    <yt-tab-panles class="yt-tabbar-container" v-model="active" :panels="panels" :slider="slider">
      <!-- @slot 包裹tabbar-panel组件-->
      <slot></slot>
    </yt-tab-panles>
    <div class="yt-tabbar-header">
      <component :is="getOptions(i).name" :active="getOptions(i).active" :tabIndex="getOptions(i).tabIndex" :panel="getOptions(i).panel" v-for="i in len" :key="i"></component>
    </div>
  </div>
</template>

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
        type: Number,
        default: 0
      },
      /**
       * 使用含有快捷键
       */
      quick: {
        type: Number,
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
      len() {
        if (this.quick === null) return this.panels.length
        return this.panels.length + 1
      },
      active: {
        get() {
          return this.value
        },
        set(val) {
          this.$emit('input', val)
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
    methods: {
      getOptions(index) {
        index = index - 1
        if (this.quick === null) {
          return {
            name: 'tabbar-item',
            panel: this.panels[index]
          }
        } else {
          let panel = null
          let name = 'tabbar-quick'
          let tabIndex = null
          if (this.quick > index) {
            name = 'tabbar-item'
            panel = this.panels[index]
            tabIndex = index
          } else if (this.quick < index) {
            name = 'tabbar-item'
            panel = this.panels[index - 1]
            tabIndex = index - 1
          }
          return { name, panel, tabIndex, active: tabIndex === this.active }
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
    }
  }
</script>
