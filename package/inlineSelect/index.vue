<template>
  <div class="yt-inlineSelect">
    <div class="yt-inlineSelect-title" v-if="title">{{title}}</div>
    <div class="yt-inlineSelect-wrap">
      <div class="yt-inlineSelect-box" :style="`width: ${100 / x}%;`" @click="handlerClick( val ? item[val] : item )"
           v-for="(item, index) in list" :key="index">
        <span class="yt-inlineSelect-item"
              :class="{ 'is-active': IsActive(val ? item[val] : item), 'is-disabled': IsDisabled(val ? item[val] : item) }">{{item[label]}}</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'inline-select',
    props: {
      /**
       * 小标题
       */
      title: {
        type: String,
        default: ''
      },
      /**
       * 选择的列表
       */
      list: {
        type: Array,
        default() {
          return []
        }
      },
      /**
       * label所对象的字段
       */
      label: {
        type: String,
        default: 'label'
      },
      /**
       * value所对象的字段
       */
      val: {
        type: String,
        default: 'value'
      },
      /**
       * 是否多选 默认false
       */
      multiple: {
        type: Boolean,
        default: false
      },
      /**
       * 多选时，最多选几个
       */
      max: {
        type: Number,
        default: null
      },
      /**
       * @model
       * 当前选中的值
       */
      value: {
        type: [String, Number, Object, Array]
      },
      /**
       * 一行默认放3个
       */
      x: {
        type: Number,
        default: 3
      }
    },
    computed: {
      currentValue: {
        get() {
          return this.value || []
        },
        set(val) {
          this.$emit('input', val)
        }
      }
    },
    methods: {
      IsDisabled(val) {
        if (this.multiple && this.value.length === this.max) {
          return this.currentValue.indexOf(val) === -1
        }
        return false
      },
      IsActive(val) {
        if (this.multiple) {
          return this.currentValue.indexOf(val) > -1
        } else {
          return val === this.currentValue
        }
      },
      handlerClick(val) {
        if (this.multiple) {
          let list = [].concat(this.currentValue)
          let index = list.indexOf(val)
          if (index > -1) {
            list.splice(index, 1)
          } else if (!this.max || (this.max && list.length < this.max)) {
            list.push(val)
          }
          this.currentValue = list
        } else {
          this.currentValue = val
        }
      }
    }
  }
</script>
