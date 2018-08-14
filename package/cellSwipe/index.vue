<template>
  <div class="yt-swipeCell" :class="wrapClassName" v-clickoutside:touchstart="close" ref="wrapper">
    <div class="yt-swipeCell-center" ref="center">
      <!-- @slot 定制中间的内容 -->
      <slot></slot>
    </div>
    <div @click.prevent.stop="close" class="yt-swipeCell-buttons" ref="right">
      <!-- @slot 定制侧滑右侧的内容 -->
      <slot name="right">
        <div @click.prevent.stop="handler($event, item, index)" :class="getClassName(item, index)"
             v-for="(item, index) in items" :key="index">
          {{(item.confirm && currentIndex === index) ? item.confirmText : item.text}}
        </div>
      </slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { clickoutside, PackingEvent, delayed } from '../utils'

  const TRANSITION = 'transition: all .2s ease;'
  export default {
    name: 'yt-cellSwipe',
    directives: { clickoutside },
    props: {
      /**
       * 是否禁用
       */
      disabled: {
        type: Boolean,
        default: false
      },
      /**
       * 当前行的数据 点击事件会回传
       */
      data: {
        type: [String, Number, Object, Array]
      },
      /**
       * 右侧的btn集合
       *  [{ text, confirmText, type, click, confirm }]
       *  type 可取值为 red || blue || green || yellow || gray
       */
      items: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        X: 0,
        currentIndex: -1
      }
    },
    computed: {
      wrapClassName() {
        if (this.currentIndex === -1) return ''
        let item = this.items[this.currentIndex]
        return item.type ? `is-${ item.type }` : ''
      }
    },
    methods: {
      getClassName(item, index) {
        let type = item.type || 'red'
        let hide = this.currentIndex !== -1 && this.currentIndex !== index
        let show = item.confirm && this.currentIndex === index
        return [
          'yt-swipeCell-button',
          `is-${type}`,
          { 'is-hide': hide },
          { 'is-confirm': show }
        ]
      },
      _move(e) {
        this._setMoveCell(e.deltaMoveX)
      },
      _end(e) {
        if (e.direction === PackingEvent.LEFT()) {
          this._setMoveCell(-this.$refs.right.offsetWidth, true)
        } else {
          this._setMoveCell(this.$refs.right.offsetWidth, true)
        }
      },
      _setMoveCell(x, isTransition) {
        let right = this.$refs.right
        let center = this.$refs.center
        x = this.X + x
        if (x < -right.offsetWidth) {
          x = -right.offsetWidth
        } else if (x > 0) {
          x = 0
        }
        right.style = `right: ${-x}px;${isTransition ? TRANSITION : ''}`
        center.style = `transform: translate3d(${x}px, 0, 0);${isTransition ? TRANSITION : ''}`
        this.X = x
      },
      /**
       * @public
       * @description 手动关闭swipe
       * @return {Promise<void>}
       */
      async close() {
        this._setMoveCell(this.$refs.right.offsetWidth, true)
        await delayed(200)
        this.currentIndex = -1
      },
      async handler(e, item, index) {
        if (item.confirm) {
          if (this.currentIndex === index) {
            await this.close()
            item.confirm(this.data)
          } else {
            this.currentIndex = index
            let el = this.$refs.right
            let oldWidth = el.offsetWidth
            this.$nextTick(() => {
              this._setMoveCell(oldWidth - el.offsetWidth, true)
            })
          }
        } else {
          await this.close()
          if (item && item.click) {
            item.click(this.data)
          }
        }
      }
    },
    mounted() {
      this.packingEvent = new PackingEvent({
        el: this.$refs.wrapper,
        disabled: this.disabled,
        direction: PackingEvent.HORIZONTAL(),
        move: this._move,
        end: this._end
      })
    },
    watch: {
      'disabled'(val) {
        this.packingEvent.setDisabled(val)
      }
    }
  }
</script>
