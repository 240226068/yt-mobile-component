<template>
  <div class="yt-collapse">
    <div class="yt-collapse-item" v-for="(item, index) in list" :key="index"
         :class="{'is-active': isActive(item, index)}">
      <div class="yt-collapse-item_title yt-border-all" @click="handlerClickToggle(item, index)">
        <yt-icon class="yt-collapse-item_icon" v-if="align === 'left'" font="iconfont icon-right" size="small"/>
        <div class="yt-collapse-item_text">
          <slot name="title" :data="item">{{item[label]}}</slot>
        </div>
        <yt-icon class="yt-collapse-item_icon" v-if="align === 'right'" font="iconfont icon-right" size="small"/>
      </div>
      <yt-collapse-transition @transition="$emit('transition', $event)" v-show="isActive(item, index)">
        <div class="yt-collapse-item_content">
          <slot :data="item"></slot>
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
      active: [Array, Boolean]
    },
    computed: {
      _active: {
        get() {
          return this.active
        },
        set(active) {
          this.$emit('update:active', active)
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
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .yt-collapse
    &-item
      &_title
        position relative
        display flex
        align-items center
        justify-content center
        text-align left
        color #48576a
        cursor pointer
        font-size 14px
        text-indent 10px
        line-height 44px
        height 44px
        box-sizing border-box
        overflow hidden

      &_text
        flex 1
        display flex
        align-items center

      &_icon
        transition transform .3s ease

      &.is-active
        .yt-collapse-item_icon
          transform rotate(90deg)

      &_content
        background-color #fbfdff
        color #1f2d3d
        padding 10px 0
        font-size 14px
        line-height 35px

</style>
