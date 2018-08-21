<template>
  <yt-page title="shopCart" flex>
    <yt-screen>
      <yt-screen-panel label="区域">
        区域
      </yt-screen-panel>
      <yt-screen-panel label="类型">
        类型
      </yt-screen-panel>
    </yt-screen>
    <yt-pull>
      <yt-cell label="锚杆">
        <yt-count v-model="use" @add="doAdd"></yt-count>
      </yt-cell>
    </yt-pull>
    <yt-shopCart ref="cart">
      <div class="icon"
           :class="getClass"
           :style="`background-image: url(${url})`"
           @click="doShow"
           @animationend.self="doEnd"
           @mozAnimationend.self="doEnd"
           @msAnimationend.self="doEnd"
           @oAnimationend.self="doEnd"
           @webkitAnimationend.self="doEnd">
        <yt-badge class="badge" :class="{'badge-scale': play}" v-if="use" :value="use"></yt-badge>
      </div>
      <div class="info"></div>
    </yt-shopCart>
    <yt-popup v-model="show" slot="alert">
      popup
    </yt-popup>
  </yt-page>
</template>

<script>
  export default {
    name: 'shopCart',
    data() {
      return {
        use: 0,
        url: require('../img/box.png'),
        play: false,
        show: false
      }
    },
    computed: {
      active() {
        return !!this.use
      },
      getClass() {
        return this.play ? 'is-play' : this.active ? 'is-active' : 'is-default'
      }
    },
    methods: {
      doShow() {
        this.show = true
      },
      doEnd() {
        this.play = false
      },
      doAdd(e) {
        this.play = true
        this.$refs.cart.start(e.target)
      }
    }
  }
</script>

<style scoped>
  .icon {
    position: absolute;
    bottom: 5px;
    left: 5px;
    width: 100px;
    height: 96px;
    background-repeat: no-repeat;
    &.is-default {
      background-position: 0 0;
    }

    &.is-active {
      background-position: 0 -96px;
    }

    &.is-play {
      animation: cart-play 0.6s steps(1);
    }
  }

  .num {
    position: absolute;
    bottom: 50px;
    right: 15px;
  }

  .info {
    margin-left: 100px;
    flex: 1;
  }

  .badge {
    position: absolute;
    top: 35px;
    left: 75px;
    transform: translate3d(0, 0, 0);
    &-scale {
      animation: yt-shake 0.3s ease 0.3s;
    }
  }

  @keyframes cart-play {
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
</style>
