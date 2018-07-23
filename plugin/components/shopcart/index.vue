<template>
  <div class="yt-shopCart" :class="{'is-active': show}">
    <slot name="custom">
      <div class="yt-shopCart-content">
        <div @click="doToggle"
             @animationend.self="doEnd"
             @mozAnimationend.self="doEnd"
             @msAnimationend.self="doEnd"
             @oAnimationend.self="doEnd"
             @webkitAnimationend.self="doEnd"
             class="yt-shopCart-icon"
             :class="getClass"
             :style="`background-image: url(${require('./box.png')})`">
          <span class="yt-shopCart-num">
            <yt-badge class="yt-shopCart-badge" :class="{'is-play': play}" v-if="count" :value="count"></yt-badge>
          </span>
        </div>
        <div class="yt-shopCart-info">
          <slot></slot>
        </div>
      </div>
    </slot>
    <div>
      <ball :color="ballColor" :ball="ball" v-for="(ball, index) in balls" :key="index"></ball>
    </div>
    <transition name="yt-fade">
      <div @click="doHide" class="yt-shopCart-mask" v-if="show"></div>
    </transition>
    <transition name="yt-slider-bottom">
      <div class="yt-shopCart-wrap" v-if="show">
        <slot name="title"></slot>
        <div class="yt-shopCart-list yt-scroll">
          <slot name="list"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import ball from './ball'

  export default {
    props: {
      active: {
        type: Boolean,
        default: false
      },
      count: {
        type: Number,
        default: 0
      },
      ballColor: {
        type: String,
        default: 'rgb(0, 160, 220)'
      }
    },

    components: { ball },

    computed: {
      getClass() {
        return this.play ? 'is-play' : this.active ? 'is-active' : ''
      }
    },

    data() {
      return {
        balls: [
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          }
        ],
        show: false,
        play: false
      }
    },
    methods: {
      doToggle() {
        if (!this.active) return
        this.show = !this.show
      },

      doHide() {
        this.show = false
      },

      doEnd() {
        this.play = false
      },

      start(el) {
        for (let i = 0; i < this.balls.length; i++) {
          let ball = this.balls[ i ]
          if (!ball.show) {
            ball.show = true
            ball.el = el
            this.play = true
            return
          }
        }
      }
    }
  }
</script>
