<script type="text/ecmascript-6">
  import Vue from 'vue'
  import { groupDataByTime } from '../../utils'
  export default {
    name: 'yt-recycler',
    render(h) {
      this.itemRender = this.$scopedSlots.default
      return h('yt-pull', {
        props: {
          name: this.name,
          topLoadMethod: this.topLoadMethod ? this.pullDown : null,
          bottomLoadMethod: this.bottomLoadMethod ? this.pullUp : null
        },
        ref: 'pull'
      })
    },
    props: {
      /**
       * 外部调用时传进来的name   在topLoadMethod和bottomLoadMethod函数中  会回传出去，用于用户判断是哪个pull,此情形在多tab中常见
       */
      name: {
        type: [Object, String, Number]
      },
      /**
       * item项目之间的分割线 具体取值有   'normal' || 'bold' || 'none'
       */
      split: {
        type: String,
        default: 'normal'
      },
      /**
       * 是否分组
       */
      group: {
        type: Boolean,
        default: true
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
       * 数据源
       */
      list: Array,
      /**
       * 渲染item组件时候超出一屏之后 上下继续渲染item组件的个数
       */
      preload: {
        type: Number,
        default: 5
      }
    },
    data() {
      return {
        itemRender: null,
        dataList: [],
        _firstIndex: 0,
        _lastIndex: 0,
        _nextLastPreloadIndex: 0,
        _nextFirstPreloadIndex: 0,
        scrollEl: null
      }
    },
    methods: {
      pullDown(loaded, name) {
        if (typeof this.topLoadMethod !== 'function') return
        const callback = (list) => {
          loaded()
          list = this.group ? groupDataByTime(list) : list
          this.ReplaceList(list)
        }
        this.topLoadMethod(callback, name, 0)
      },
      pullUp(loaded, name) {
        if (typeof this.bottomLoadMethod !== 'function') return
        const callback = (list) => {
          loaded()
          list = this.group ? groupDataByTime(list) : list
          this.AddList(list)
        }
        this.bottomLoadMethod(callback, name, this.dataList.length)
      },
      handleScroll() {
        if (this._inPull) return
        let scrollTop = this.scrollEl.scrollTop
        let delta = scrollTop - this.scrollTop
        this.scrollTop = scrollTop
        if (delta > 0) {
          let lastData = this.dataList[this._lastIndex]
          if (this.scrollEl.clientHeight + scrollTop - lastData.top >= 0) {
            this._inPull = true
            this._attachItem(true)
          }
        } else {
          if (scrollTop < this.dataList[this._firstIndex].top) {
            this._inPull = true
            this._attachItem(false)
          }
        }
        this._inPull = false
      },
      _getItemVm(data) {
        let vm = new Vue({
          el: document.createElement('div'),
          render: h => h('div', {
            attrs: {
              class: `yt-recyclerview-item split-is-${this.split}`
            }
          }, [
            !data._tag || h('div', {
              attrs: {
                class: `yt-recyclerview-item_title`
              },
              domProps: {
                innerHTML: data._tag
              }
            }),
            this.itemRender({ data: data })
          ])
        })
        return vm
      },
      _getFirstItemIndex() {
        for (let i = this._firstIndex; i < this.dataList.length; i++) {
          if (this.scrollEl.scrollTop < this.dataList[i].top) {
            return i
          }
        }
      },
      _getLastItemIndex() {
        for (let i = this._lastIndex; i < this.dataList.length; i++) {
          if (this.dataList[i].vm) {
            if (this.scrollEl.scrollTop + this.scrollEl.clientHeight < this.dataList[i].top) {
              return i
            }
          } else {
            return i - 1
          }
        }
        return this._lastIndex
      },
      _getFirstItemIndexTop() {
        for (let i = this._firstIndex; i >= 0; i--) {
          if (this.scrollEl.scrollTop > this.dataList[i].top) {
            return i + 1
          }
        }
        return 0
      },
      _getLastItemIndexTop() {
        for (let i = this._lastIndex; i >= 0; i--) {
          if (this.scrollEl.scrollTop + this.scrollEl.clientHeight >= this.dataList[i].top) {
            return i + 1
          }
        }
      },
      _attachItem(isBottom) {
        if (isBottom) {
          let _firstIndex = this._getFirstItemIndex()
          let _lastIndex = this._getLastItemIndex()
          let nextFirstPreloadIndex = _firstIndex - this.preload
          let nextLastPreloadIndex = _lastIndex + this.preload
          if (nextLastPreloadIndex < this.dataList.length) {
            for (let i = this._nextLastPreloadIndex; i <= nextLastPreloadIndex; i++) {
              let item = this.dataList[i]
              if (!item.vm) {
                let preItem = this.dataList[i - 1]
                let vm = this._getItemVm(item)
                vm.$el.style = `position: absolute; transform: translate3d(0, ${preItem.top}px, 0)`
                this.scrollEl.appendChild(vm.$el)
                item.top = preItem.top + vm.$el.clientHeight
                item.vm = vm
              } else {
                this.scrollEl.appendChild(item.vm.$el)
              }
            }
            this._nextLastPreloadIndex = nextLastPreloadIndex
          }
          if (nextFirstPreloadIndex > 0) {
            for (let i = nextFirstPreloadIndex - 1; i >= this._nextFirstPreloadIndex; i--) {
              this.scrollEl.removeChild(this.dataList[i].vm.$el)
            }
            this._nextFirstPreloadIndex = nextFirstPreloadIndex
          }
          this._firstIndex = _firstIndex
          this._lastIndex = _lastIndex
        } else {
          let _firstIndex = this._getFirstItemIndexTop()
          let _lastIndex = this._getLastItemIndexTop()
          let nextFirstPreloadIndex = _firstIndex - this.preload
          let nextLastPreloadIndex = _lastIndex + this.preload
          if (nextFirstPreloadIndex > 0) {
            for (let i = this._nextFirstPreloadIndex; i >= nextFirstPreloadIndex; i--) {
              this.scrollEl.insertBefore(this.dataList[i - 1].vm.$el, this.dataList[i].vm.$el)
            }
            this._nextFirstPreloadIndex = nextFirstPreloadIndex
          }
          if (nextLastPreloadIndex < this.dataList.length - 1) {
            for (let i = nextLastPreloadIndex; i < this._nextLastPreloadIndex; i++) {
              this.scrollEl.removeChild(this.dataList[i + 1].vm.$el)
            }
            this._nextLastPreloadIndex = nextLastPreloadIndex
          }
          this._firstIndex = _firstIndex
          this._lastIndex = _lastIndex
        }
      },
      _initList(list, top = 0) {
        let results = []
        let preloadCount = 0
        let nextLastPreloadIndex = 0
        for (let i = 0; i < list.length; i++) {
          let item = list[i]
          if (top >= this.scrollEl.clientHeight) {
            if (preloadCount < this.preload) {
              let vm = this._getItemVm(item)
              vm.$el.style = `position: absolute; transform: translate3d(0, ${top}px, 0)`
              this.scrollEl.appendChild(vm.$el)
              top += vm.$el.offsetHeight
              results.push(Object.assign({}, item, { vm, top }))
              preloadCount++
              nextLastPreloadIndex = i
            } else {
              results.push(Object.assign({}, item, { vm: null, top: 0 }))
            }
          } else {
            let vm = this._getItemVm(item)
            vm.$el.style = `position: absolute; transform: translate3d(0, ${top}px, 0)`
            this.scrollEl.appendChild(vm.$el)
            top += vm.$el.offsetHeight
            results.push(Object.assign({}, item, { vm, top }))
            this._lastIndex = i
          }
        }
        return {
          list: results,
          nextLastPreloadIndex: nextLastPreloadIndex
        }
      },
      /**
       * 初始化数据
       * @param list 初始化的数据
       * @public
       * @constructor
       */
      init(list = this.list) {
        this.scrollEl.innerHTML = ''
        this.scrollTop = 0
        this._firstIndex = 0
        this._nextFirstPreloadIndex = 0
        let result = this._initList(list)
        this.dataList = result.list
        this._nextLastPreloadIndex = result.nextLastPreloadIndex
      },
      /**
       * 下拉刷新 将新数据替换掉旧数据
       * @param list 下拉刷新获取的数据
       * @public
       * @constructor
       */
      ReplaceList(list = []) {
        if (!list || !list.length) return
        this.scrollEl.innerHTML = ''
        this.scrollTop = 0
        this._firstIndex = 0
        this._nextFirstPreloadIndex = 0
        let result = this._initList(list)
        this.dataList = result.list
        this._nextLastPreloadIndex = result.nextLastPreloadIndex
      },
      /**
       * 上拉加载  将新数据追加到旧数据后面
       * @param list 上拉加载的数据
       * @public
       * @constructor
       */
      AddList(list = []) {
        if (!list || !list.length) return
        if (this.dataList.length === 0) {
          this.ReplaceList(list)
        } else {
          let lastData = this.dataList[this.dataList.length - 1]
          if (lastData && lastData.top > 0) {
            let result = this._initList(list, lastData.top)
            this._nextLastPreloadIndex = this._nextLastPreloadIndex + result.nextLastPreloadIndex + 1
            this.dataList = this.dataList.concat(result.list)
          }
        }
      }
    },
    mounted() {
      this.scrollEl = this.$refs.pull.scrollEl
      this.scrollEl.addEventListener('scroll', this.handleScroll)
      let list = this.group ? groupDataByTime(this.list) : this.list
      this.init(list)
    },
    watch: {
      list() {
        let list = this.group ? groupDataByTime(this.list) : this.list
        this.init(list)
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .yt-recyclerview-item
    width 100%
    &::after
      content " "
      display block
      width 100%
    &.split-is-normal
      &::after
        height 1px
        background-color #e5e5e5
        transform scaleY(0.5)
    &.split-is-bold
      &::after
        height 10px
        background-color #f5f5f5
    &split-is-none
      &::after
        display none
    &_title
      font-size 14px
      color #666666
      height 30px
      line-height 30px
      padding 0 10px
      background-color #fafafa

</style>
