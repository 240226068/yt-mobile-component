<template>
  <div class="yt-cascader">
    <span class="yt-cascader-desc">{{desc}}</span>
    <span @click="handlerSelect" class="yt-cascader-wrap" :class="`yt-cascader__${Theme}`">
      <span v-if="text && !selectList.length">
        {{text}}<i class="yt-cascader-right iconfont icon-right"></i>
      </span>
      <span class="yt-cascader-tags" v-else>
        <slot name="tag" :data="selectList">
          <span class="yt-cascader-tag" v-if="!showLast || (index + 1 === selectList.length)"
                v-for="(tag, index) in selectList" :key="index">
            <yt-tag size="mini">{{tag[label]}}</yt-tag>
          </span>
        </slot>
      </span>
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Cascader } from '../../service/index'
  import { findNodeFromTree } from 'yt'

  export default {
    name: 'yt-cascader',
    props: {
      desc: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: '请选择'
      },
      title: {
        type: String,
        default: '请选择'
      },
      label: {
        type: String,
        default: 'label'
      },
      val: {
        type: String,
        default: 'value'
      },
      children: {
        type: String,
        default: 'children'
      },
      list: {
        type: Array,
        require: true,
        default() {
          return []
        }
      },
      value: {
        type: Array,
        require: true,
        default() {
          return []
        }
      },
      changeOnSelect: {
        type: Boolean,
        default: false
      },
      /**
       * 是否禁用
       */
      disabled: {
        type: Boolean,
        default: false
      },
      showLast: {
        type: Boolean,
        default: false
      }
    },
    inject: {
      ytForm: {
        default: () => ({})
      }
    },
    computed: {
      _disabled() {
        return this.disabled || (this.ytForm || {}).disabled
      }
    },
    data() {
      return {
        isOpen: false,
        selectList: findNodeFromTree(this.list, this.value, this.val, this.children)
      }
    },
    methods: {
      handlerSelect() {
        if (this._disabled) return
        this.isOpen = true
        Cascader(this)
      },
      confirm(res) {
        if (this._disabled) return
        this.isOpen = false
        this.selectList = [].concat(res)
        this.$emit('input', res.map(item => item[this.val]))
      },
      cancel() {
        this.isOpen = false
      }
    },
    watch: {
      value() {
        this.selectList = findNodeFromTree(this.list, this.value, this.val, this.children)
      },
      list() {
        this.selectList = findNodeFromTree(this.list, this.value, this.val, this.children)
        if (this.isOpen) {
          this.handlerSelect()
        }
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .yt-cascader
    display flex
    align-items center
    padding 0 10px 0 15px
    font-size 14px
    color #606266
    box-sizing border-box
    background-color #ffffff

  .yt-cascader-desc
    margin-right 10px
    padding 8px 0
    color #333333
    line-height 30px

  .yt-cascader-wrap
    text-align right
    flex 1
    overflow hidden

  .yt-cascader-right
    margin 0 4px
    color #909399
    font-size 12px

  .yt-cascader-tags
    width 100%
    overflow auto
    white-space nowrap
    margin 5px 0
    display inline-block
    &::-webkit-scrollbar
      display none
    .yt-cascader-tag
      margin 3px 0
      display inline-block
      &:last-child
        &::after
          display none
      &::after
        content '/'
        display inline-block
        vertical-align middle
        margin 0 2px

</style>
