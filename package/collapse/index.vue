<template>
  <div class="yt-collapse">
    <div class="yt-collapse-item" :class="{'is-active': isActive(item, index)}" v-for="(item, index) in list" :key="index">
      <div class="yt-collapse-title yt-border-all" @click="handlerClickToggle(item, index)">
        <i class="yt-collapse-icon yt-icon icon-right" :class="`is-${align}`"></i>
        <div class="yt-collapse-text">
          <!-- @slot 自定义title -->
          <slot name="title" v-bind="item">{{item[label]}}</slot>
        </div>
      </div>
      <yt-collapse-transition @transition="$emit('transition', $event)" v-show="isActive(item, index)">
        <div class="yt-collapse-content">
          <!-- @slot 自定义content -->
          <slot v-bind="item"></slot>
        </div>
      </yt-collapse-transition>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-collapse',
    props: {
      /**
       * 折叠面板箭头位置   可取值  'left' || 'right'
       */
      align: {
        type: String,
        default: 'right'
      },
      /**
       * 折叠面板是否开启手风琴模式
       */
      accordion: {
        type: Boolean,
        default: true
      },
      /**
       * 折叠面板title所对应对象中的文字
       */
      label: {
        type: String,
        default: 'title'
      },
      /**
       * 折叠面板id所对应对象中的字段
       */
      name: String,
      /**
       *  遍历的数组
       */
      list: {
        type: Array,
        require: true
      },
      /**
       *  打开的面板   为Array时 对应多个折叠面板  为boolean时  对应单个折叠面板
       */
      value: [Array, Boolean]
    },
    computed: {
      _active: {
        get() {
          return this.value
        },
        set(active) {
          this.$emit('input', active)
        }
      }
    },
    methods: {
      handlerClickToggle(item, index) {
        if (typeof this._active === 'boolean') {
          this._active = !this._active
        } else if (this._active instanceof Array) {
          let key = this.name ? item[this.name] : index
          let keyIndex = this._active.indexOf(key)
          let res = keyIndex >= 0
          if (this.accordion && res) {
            this._active = []
          } else if (this.accordion && !res) {
            this._active = [key]
          } else if (!this.accordion && res) {
            this._active.splice(keyIndex, 1)
          } else {
            this._active.push(key)
          }
        }
      },
      isActive(item, index) {
        let res = false
        if (typeof this._active === 'boolean') {
          res = this._active
        } else if (this._active instanceof Array) {
          res = this._active.indexOf(this.name ? item[this.name] : index) >= 0
        }
        return res
      }
    }
  }
</script>
