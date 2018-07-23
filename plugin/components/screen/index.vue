<template>
  <div class="yt-screen" :class="{'is-active': active > -1}">
    <div class="yt-screen-header">
      <div class="yt-screen-item" :class="{'is-active': active === index}"
           v-for="(panel, index) in panels" :key="index" @click="doScreen(index)">
        {{panel.label}}<i class="yt-screen-icon iconfont icon-down" :class="{'is-active': active === index}"></i>
      </div>
    </div>
    <transition name="yt-fade">
      <div @click="doClose" class="yt-screen-mask" v-show="active > -1"></div>
    </transition>
    <transition name="yt-slider-top">
      <div class="yt-screen-panels" v-show="active > -1">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    provide() {
      return {
        ytScreen: this
      }
    },

    data() {
      return {
        active: -1,
        panels: []
      }
    },

    methods: {
      appendPanel(child) {
        const index = this.$slots.default.indexOf(child.$vnode)
        this.panels.splice(index, 1, child)
      },

      removePanel(child) {
        const index = this.panels.indexOf(child)
        if (index > -1) {
          this.panels.splice(index, 1)
        }
      },

      doScreen(index) {
        this.active = index === this.active ? -1 : index
      },

      doClose() {
        this.active = -1
      }
    },
    watch: {
      'active'() {
        if (this.active === -1) {
          this.$emit('close')
        }
        this.panels.forEach((panel, index) => {
          if (index === this.active) {
            panel.show = true
          } else {
            panel.show = false
          }
        })
        this.$emit('change', this.active)
      }
    }
  }
</script>
