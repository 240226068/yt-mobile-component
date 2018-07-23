<template>
  <div class="yt-shop_cart">
    <slot name="custom">
      <div class="yt-shop_cart-content">
        <div @click="doToggle"
             @animationend.self="doEnd"
             @mozAnimationend.self="doEnd"
             @msAnimationend.self="doEnd"
             @oAnimationend.self="doEnd"
             @webkitAnimationend.self="doEnd"
             class="yt-shop_cart-icon"
             :class="getClass"
             :style="`background-image: url(${require('./box.png')})`">
          <span class="yt-shop_cart-num">
            <yt-badge class="yt-shop_cart-badge" :class="{'is-play': play}" :num="count"></yt-badge>
          </span>
        </div>
        <div class="yt-shop_cart-info">
          <slot></slot>
        </div>
      </div>
    </slot>
    <div>
      <ball :color="ballColor" :ball="ball" v-for="(ball, index) in balls" :key="index"></ball>
    </div>
    <transition name="yt-fade">
      <div @click="doHide" class="yt-shop_cart-mask" v-if="show"></div>
    </transition>
    <transition name="yt-slider-bottom">
      <div class="yt-shop_cart-wrap" v-if="show">
        <slot name="title"></slot>
        <div class="yt-shop_cart-list yt-scroll">
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

<style lang="css" type="text/postcss">
  @name yt {
    @b shop_cart {
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 5000;
      width: 100%;
      height: 48px;

      @e content {
        position: relative;
        z-index: 1000;
        display: flex;
        background-color: #141d27;
        font-size: 0;
        color: rgba(255, 255, 255, .4);
      }

      @e logo {
        display: inline-block;
        vertical-align: top;
        position: relative;
        box-sizing: border-box;
      }

      @e icon {
        position: absolute;
        bottom: 5px;
        left: 5px;
        width: 100px;
        height: 96px;
        background-repeat: no-repeat;
        background-position: 0 0;

        @when active {
          background-position: 0 -96px;
        }

        @when play {
          animation: play 0.6s steps(1);
        }
      }

      @e num {
        position: absolute;
        bottom: 50px;
        right: 15px;
      }

      @e badge {
        @when play {
          animation: scale 0.4s ease;
        }
      }

      @e info {
        margin-left: 100px;
        flex: 1;
      }

      @e mask {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 48px;
        z-index: 10;
        background-color: rgba(0, 0, 0, 0.5);
        transition: opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);
      }

      @e wrap {
        display: flex;
        flex-direction: column;
        position: absolute;
        z-index: 10;
        bottom: 100%;
        left: 0;
        right: 0;
        height: 250px;
        background-color: #ffffff;
        transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
      }

      @e list {
        flex: 1;
      }
    }
  }

  @keyframes play {
    0% {
      background-position: 0 -96px;
    }
    5% {
      background-position: 0 -192px;
    }
    10% {
      background-position: 0 -288px;
    }
    15% {
      background-position: 0 -385px;
    }
    20% {
      background-position: 0 -576px;
    }
    80% {
      background-position: 0 -576px;
    }
    85% {
      background-position: 0 -385px;
    }
    90% {
      background-position: 0 -288px;
    }
    95% {
      background-position: 0 -192px;
    }
    100% {
      background-position: 0 -96px;
    }
  }

  @keyframes scale {
    0% {
      transform: translateX(-50%) translateY(-50%) scale(1);
    }
    33% {
      transform: translateX(-50%) translateY(-50%) scale(1.2);
    }
    66% {
      transform: translateX(-50%) translateY(-50%) scale(0.9);
    }
    100% {
      transform: translateX(-50%) translateY(-50%) scale(1);
    }
  }
</style>
