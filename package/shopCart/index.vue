<template>
  <div class="yt-shopCart">
    <div class="yt-shopCart-content">
      <!-- @slot 自定义内容层-->
      <slot></slot>
    </div>
    <div>
      <ball :color="ballColor" :ball="ball" v-for="(ball, index) in balls" :key="index"></ball>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import ball from './ball'

  export default {
    name: 'yt-shopCart',

    props: {
      /**
       * 小球的颜色
       */
      ballColor: {
        type: String,
        default: 'rgb(0, 160, 220)'
      }
    },

    components: { ball },

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
        ]
      }
    },

    methods: {
      /**
       * @public
       * @description 开始小球动画
       * @param {el} dom节点
       * @return {void}
       */
      start(el) {
        for (let i = 0; i < this.balls.length; i++) {
          let ball = this.balls[i]
          if (!ball.show) {
            ball.show = true
            ball.el = el
            return
          }
        }
      }
    }
  }
</script>
