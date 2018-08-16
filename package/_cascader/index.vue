<template>
  <div class="yt-cellCascader">
    <span class="yt-cellCascader-desc">{{desc}}</span>
    <span class="yt-cellCascader-wrap" @click="handlerSelect">
      <span v-if="text && !selectList.length">{{text}}<i class="yt-cellCascader-right iconfont icon-right"></i></span>
      <span class="yt-cellCascader-tags" v-else>
        <!-- @slot 自定义slot的内容 -->
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
      /**
       * cell左侧的内容
       */
      desc: {
        type: String,
        default: ''
      },
      /**
       * cell右侧没有选中时候的文字
       */
      text: {
        type: String,
        default: '请选择'
      },
      /**
       * 弹出框的标题
       */
      title: {
        type: String,
        default: '请选择'
      },
      /**
       * 弹出框列表中显示值所对应对象的字段
       */
      label: {
        type: String,
        default: 'label'
      },
      /**
       * 弹出框列表中value值所对应对象的字段
       */
      val: {
        type: String,
        default: 'value'
      },
      /**
       * 弹出框列表中children所对应对象的字段
       */
      children: {
        type: String,
        default: 'children'
      },
      /**
       * 弹出框的数据
       */
      list: {
        type: Array,
        require: true,
        default() {
          return []
        }
      },
      /**
       * 当前选中的值
       */
      value: {
        type: Array,
        require: true,
        default() {
          return []
        }
      },
      /**
       * 默认为false,必须选择到叶子节点才能关闭。为true时，选择一个即可关闭
       */
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
      /**
       * 选择完毕以后，显示的内容是否只显示最后一级。默认显示全部
       */
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
