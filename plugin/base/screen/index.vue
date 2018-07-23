<template>
  <div class="yt-screen" :class="{'is-active': active > -1}">
    <div class="yt-screen-header">
      <div @click="doScreen(index)" class="yt-screen-item" :class="{'is-active': active === index}"
           v-for="(panel, index) in panels" :key="index">
        {{panel.label}}<i class="yt-screen-icon iconfont icon-down" :class="{'is-active': active === index}"></i>
      </div>
    </div>
    <div @click="doClose" class="yt-screen-mask" v-show="active > -1"></div>
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
      }
    }
  }
</script>

<style lang="css" type="text/postcss">
  @name yt {
    @b screen {
      z-index: 100;
      height: 40px;
      @when active {
        z-index: 7000;
      }
      @e header {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        display: flex;
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        background: #ffffff;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      }

      @e panels {
        position: absolute;
        top: 40px;
        left: 0;
        right: 0;
        height: 240px;
        background: #ffffff;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
        transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1)
      }

      @e mask {
        position: absolute;
        top: 40px;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.5)
      }

      @e item {
        flex: 1;
        color: #333333;
        @when active {
          color: #000000;
        }
      }

      @e icon {
        display: inline-block;
        margin-left: 5px;
        font-size: 12px;
        transition: transform .3s cubic-bezier(0.23, 1, 0.32, 1);
        @when active {
          position: relative;
          top: -2px;
          transform: rotate(180deg);
        }
      }
    }
  }
</style>
