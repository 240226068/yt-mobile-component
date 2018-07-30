<template>
  <div class="yt-slider" ref="scroll">
    <div class="yt-slider-container" :style="wrapStyle">
      <div class="yt-slider-item" v-for="(item, index) in data" :key="index">
        <!-- @slot 定制具体内容-->
        <slot :data="item" :index="index"></slot>
      </div>
    </div>
    <!-- @slot 定制dot-->
    <slot name="dot">
      <div v-if="showDot" class="yt-slider-dots" :class="`yt-slider-dots__${Theme}`">
        <span class="yt-slider-dot" :class="{ 'is-active': index === value}" :key="index" v-for="(item, index) in data"></span>
      </div>
    </slot>
  </div>
</template>
<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'

  export default {
    name: 'yt-slider',
    props: {
      /**
       * 列表
       */
      data: {
        type: Array,
        default() {
          return []
        }
      },
      /**
       * 是否显示下面的小圆点
       */
      showDot: {
        type: Boolean,
        default: false
      },
      /**
       * 默认在第一页
       */
      value: {
        type: Number,
        default: 0
      },
      preventDefault: {
        type: Boolean,
        default: true
      }
    },
    mounted() {
      this.initScroll()
    },
    computed: {
      wrapStyle() {
        return `width: ${100 * this.data.length}%;`
      }
    },
    methods: {
      /**
       * 刷新scroll
       * @public
       */
      initScroll() {
        if (this.scroll) {
          this.scroll.refresh()
        } else {
          this.scroll = new BScroll(this.$refs.scroll, {
            scrollX: true,
            snap: true,
            click: true,
            deceleration: 0.01,
            preventDefault: this.preventDefault
          })
          this.scroll.on('scrollEnd', () => {
            let page = this.scroll.getCurrentPage().pageX
            this.$emit('input', page)
          })
        }
        try {
          this.scroll.goToPage(this.value, 0, 0)
        } catch (e) {
        }
      }
    },
    watch: {
      'data'() {
        this.$nextTick(() => {
          this.initScroll()
        })
      }
    }
  }
</script>
