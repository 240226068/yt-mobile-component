<template>
  <div class="yt-buttonTab">
    <span @click="handlerClick(index)" v-for="(bar, index) in renderList" :key="index"
          :style="itemStyle(index)"
          class="yt-buttonTab-item" :class="{ 'is-active': active === index }">
      {{bar.text}}
      <span class="yt-buttonTab-badge"><yt-badge v-if="bar && bar.badge" v-bind="bar.badge"></yt-badge></span>
    </span>
    <span class="yt-buttonTab-mask" :style="maskStyle"></span>
    <span class="yt-buttonTab-fake" :style="fakeStyle"></span>
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
      },
      /**
       * border的颜色
       */
      borderColor: {
        type: String,
        default: '#fff'
      },
      /**
       * 默认的背景色
       */
      defaultFillColor: {
        type: String,
        default: null
      },
      /**
       * 选中的背景色
       */
      activeFillColor: {
        type: String,
        default: null
      },
      /**
       * 默认的color
       */
      defaultColor: {
        type: String,
        default: null
      },
      /**
       * 选中时候的color
       */
      activeColor: {
        type: String,
        default: null
      }
    },
    computed: {
      maskStyle() {
        return {
          backgroundColor: this.activeFillColor,
          transform: `translate3d(${this.active}00%, 0, 0)`
        }
      },
      fakeStyle() {
        return {
          borderColor: this.borderColor,
          backgroundColor: this.defaultFillColor
        }
      }
    },
    data() {
      return {
        active: this.value,
        renderList: this.getRenderList(this.list)
      }
    },
    created() {
      this.clearBadge(this.active)
    },
    methods: {
      itemStyle(index) {
        return {
          color: this.active === index ? this.activeColor : this.defaultColor
        }
      },
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
      'list'(val) {
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
         * @type {Number}
         */
        this.$emit('change', val)
      }
    }
  }
</script>
