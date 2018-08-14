<template>
  <div class="yt-cellCascader">
    <span class="yt-cellCascader-desc">{{desc}}</span>
    <span @click="handlerSelect" class="yt-cellCascader-wrap">
      <span v-if="text && !selectList.length">
        {{text}}<i class="yt-cellCascader-right iconfont icon-right"></i>
      </span>
      <span class="yt-cellCascader-tags" v-else>
        <slot name="tag" :data="selectList">
          <span class="yt-cellCascader-tag" v-if="!showLast || (index + 1 === selectList.length)"
                v-for="(tag, index) in selectList" :key="index">
            <yt-tag size="mini">{{tag[label]}}</yt-tag>
          </span>
        </slot>
      </span>
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Cascader } from '../service'
  import { findNodeFromTree } from '../utils'

  export default {
    name: 'yt-cellCascader',
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
