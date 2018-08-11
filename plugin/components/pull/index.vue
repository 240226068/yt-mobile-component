<template>
  <div class="yt-pull" :style="{ height: wrapperHeight, transform: `translate3d(0, ${diff}px, 0)` }">
    <div v-if="topLoadMethod" class="yt-pull-action" :style="{ height: `${topBlockHeight}px`, marginTop: `${-topBlockHeight}px` }">
      <!--@slot 自定义下拉刷新的内容-->
      <slot name="top-block" :state="state" :state-text="topText">
        <p class="yt-pull-text"><img :class="{'is-down': state === 'pull', 'is-up': state === 'trigger'}" class="yt-pull-icon" :src="stateSrc">{{ topText }}</p>
      </slot>
    </div>
    <div class="yt-pull-scroll" ref="scroll">
      <!-- @slot 中间的内容 -->
      <slot></slot>
    </div>
    <div v-if="bottomLoadMethod" class="yt-pull-action" :style="{ height: `${bottomBlockHeight}px`, marginBottom: `${-bottomBlockHeight}px` }">
      <!--@slot 自定义上啦加载的内容-->
      <slot name="bottom-block" :state="state" :state-text="bottomText">
        <p class="yt-pull-text"><img :class="{'is-down': state === 'trigger', 'is-up': state === 'pull'}" class="yt-pull-icon" :src="stateSrc">{{ bottomText }}</p>
      </slot>
    </div>
  </div>
</template>

<script type="text/babel">
  import { throttle, delayed, PackingEvent } from '../../utils'

  const TOP_DEFAULT_CONFIG = {
    pullText: '下拉刷新',
    triggerText: '释放更新',
    loadingText: '加载中...',
    doneText: '加载完成',
    failText: '加载失败',
    loadedStayTime: 400,
    stayDistance: 50,
    triggerDistance: 70
  }
  const BOTTOM_DEFAULT_CONFIG = {
    pullText: '上拉加载',
    triggerText: '释放更新',
    loadingText: '加载中...',
    doneText: '加载完成',
    failText: '加载失败',
    loadedStayTime: 400,
    stayDistance: 50,
    triggerDistance: 70
  }
  export default {
    name: 'yt-pull',
    props: {
      /**
       * 外部调用时传进来的name   在topLoadMethod和bottomLoadMethod函数中  会回传出去，用于用户判断是哪个pull,此情形在多tab中常见
       */
      name: {
        type: [Object, String, Number]
      },
      distanceIndex: {
        type: Number,
        default: 2
      },
      /**
       * 下拉刷新包裹层的高度
       */
      topBlockHeight: {
        type: Number,
        default: 50
      },
      /**
       * 上啦加载包裹层的高度
       */
      bottomBlockHeight: {
        type: Number,
        default: 50
      },
      /**
       * pull的高度
       */
      wrapperHeight: {
        type: String,
        default: '100%'
      },
      /**
       *  下拉刷新函数
       */
      topLoadMethod: {
        type: Function
      },
      /**
       *  上拉加载函数
       */
      bottomLoadMethod: {
        type: Function
      },
      /**
       *  下拉刷新使用截流
       */
      isThrottleTopPull: {
        type: Boolean,
        default: true
      },
      /**
       *  上拉加载使用截流
       */
      isThrottleBottomPull: {
        type: Boolean,
        default: true
      },
      /**
       * 默认是 { pullText: '上拉加载', triggerText: '释放更新', loadingText: '加载中...', doneText: '加载完成', failText: '加载失败', loadedStayTime: 400, stayDistance: 50, triggerDistance: 70}
       */
      topConfig: {
        type: Object,
        default: () => {
          return {}
        }
      },
      /**
       * 默认是 { pullText: '上拉加载', triggerText: '释放更新', loadingText: '加载中...', doneText: '加载完成', failText: '加载失败', loadedStayTime: 400, stayDistance: 50, triggerDistance: 70}
       */
      bottomConfig: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    data() {
      return {
        scrollEl: null,
        startScrollTop: 0,
        distance: 0,
        direction: 0,
        diff: 0,
        beforeDiff: 0,
        topText: '',
        bottomText: '',
        state: '',
        bottomReached: false,
        throttleEmitTopPull: null,
        throttleEmitBottomPull: null
      }
    },
    computed: {
      stateSrc() {
        if (this.state === 'pull' || this.state === 'trigger') {
          return require('./arrow.png')
        } else if (this.state === 'loading') {
          return require('./loading.gif')
        } else if (this.state === 'loaded-done') {
          return require('./success.png')
        }
      },
      _topConfig() {
        return { ...TOP_DEFAULT_CONFIG, ...this.topConfig }
      },
      _bottomConfig() {
        return { ...BOTTOM_DEFAULT_CONFIG, ...this.bottomConfig }
      }
    },
    watch: {
      state(val) {
        if (this.direction === 'down') {
          /**
           * @event top-state-change
           * @description 下拉刷新的状态改变
           * @type {string}
           */
          this.$emit('top-state-change', val)
        } else {
          /**
           * @event bottom-state-change
           * @description 上拉加载的状态改变
           * @type {string}
           */
          this.$emit('bottom-state-change', val)
        }
      }
    },
    methods: {
      actionPull() {
        this.state = 'pull'
        this.direction === 'down'
          ? this.topText = this._topConfig.pullText
          : this.bottomText = this._bottomConfig.pullText
      },
      actionTrigger() {
        this.state = 'trigger'
        this.direction === 'down'
          ? this.topText = this._topConfig.triggerText
          : this.bottomText = this._bottomConfig.triggerText
      },
      async actionLoading() {
        if (this.state === 'loading' || this._inLoading) return
        this.state = 'loading'
        this._inLoading = true
        if (this.direction === 'down') {
          this.topText = this._topConfig.loadingText
          this.scrollTo(this._topConfig.stayDistance)
          this.topLoadMethod(this.actionLoaded, this.name)
        } else {
          this.bottomText = this._bottomConfig.loadingText
          this.scrollTo(-this._bottomConfig.stayDistance)
          this.bottomLoadMethod(this.actionLoaded, this.name)
        }
      },
      async actionLoaded(loadState = 'done') {
        this.state = `loaded-${loadState}`
        let loadedStayTime
        if (this.direction === 'down') {
          this.topText = loadState === 'done'
            ? this._topConfig.doneText
            : this._topConfig.failText
          loadedStayTime = this._topConfig.loadedStayTime
        } else {
          this.bottomText = loadState === 'done'
            ? this._bottomConfig.doneText
            : this._bottomConfig.failText
          loadedStayTime = this._bottomConfig.loadedStayTime
        }
        await delayed(loadedStayTime)
        this.scrollTo(0)
        await delayed(300)
        this.state = ''
        await delayed(200)
        this._inLoading = false
      },
      async scrollTo(y, duration = 200) {
        this.$el.style.transition = `${duration}ms`
        this.diff = y
        await delayed(200)
        this.$el.style.transition = ''
      },
      checkBottomReached() {
        return this.scrollEl.scrollTop + this.scrollEl.offsetHeight + 1 >= this.scrollEl.scrollHeight
      },
      handleTouchStart(e) {
        this.beforeDiff = this.diff
        this.startScrollTop = this.scrollEl.scrollTop
        this.bottomReached = this.checkBottomReached()
      },
      handleTouchMove(e) {
        this.distance = e.deltaY / this.distanceIndex + this.beforeDiff
        this.direction = this.distance > 0 ? 'down' : 'up'
        if (this.startScrollTop === 0 && this.direction === 'down') {
          this.diff = this.distance
          this.isThrottleTopPull ? this.throttleEmitTopPull(this.diff) : this.$emit('top-pull', this.diff)
          if (typeof this.topLoadMethod !== 'function') return
          if (this.distance < this._topConfig.triggerDistance &&
            this.state !== 'pull' && this.state !== 'loading') {
            this.actionPull()
          } else if (this.distance >= this._topConfig.triggerDistance &&
            this.state !== 'trigger' && this.state !== 'loading') {
            this.actionTrigger()
          }
        } else if (this.bottomReached && this.direction === 'up') {
          this.diff = this.distance
          this.isThrottleBottomPull ? this.throttleEmitBottomPull(this.diff) : this.$emit('bottom-pull', this.diff)
          if (typeof this.bottomLoadMethod !== 'function') return
          if (Math.abs(this.distance) < this._bottomConfig.triggerDistance &&
            this.state !== 'pull' && this.state !== 'loading') {
            this.actionPull()
          } else if (Math.abs(this.distance) >= this._bottomConfig.triggerDistance &&
            this.state !== 'trigger' && this.state !== 'loading') {
            this.actionTrigger()
          }
        }
      },
      handleTouchEnd() {
        if (this.diff !== 0) {
          if (this.state === 'trigger') {
            this.actionLoading()
            return
          }
          this.scrollTo(0)
        }
      },
      throttleEmit(delay, mustRunDelay = 0, eventName) {
        const throttleMethod = function () {
          const args = [...arguments]
          args.unshift(eventName)
          this.$emit.apply(this, args)
        }
        return throttle(throttleMethod, delay, mustRunDelay)
      },
      init() {
        /**
         * @event top-pull
         * @description 下拉刷新事件
         * @type {Number}
         */
        this.throttleEmitTopPull = this.throttleEmit(200, 300, 'top-pull')
        /**
         * @event bottom-pull
         * @description 上拉加载事件
         * @type {Number}
         */
        this.throttleEmitBottomPull = this.throttleEmit(200, 300, 'bottom-pull')
        this.scrollEl = this.$refs.scroll
        this.packingEvent = new PackingEvent({
          el: this.scrollEl,
          prevent: false,
          stop: false,
          direction: PackingEvent.VERTICAL(),
          start: this.handleTouchStart,
          move: this.handleTouchMove,
          end: this.handleTouchEnd
        })
      }
    },
    mounted() {
      this.init()
    }
  }
</script>
