<template>
  <div class="yt-inlineSelect">
    <div class="yt-inlineSelect-title">{{title}}</div>
    <div class="yt-inlineSelect-wrap">
      <div class="yt-inlineSelect-box" :style="`width: ${100 / x}%;`" @click="handlerClick( val ? item[val] : item )" v-for="item in list">
        <span class="yt-inlineSelect-item" :class="{ 'is-active': IsActive(val ? item[val] : item) }">{{item[label]}}</span>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'inline-select',
    props: {
      title: {
        type: String,
        default: ''
      },
      list: {
        type: Array,
        default() {
          return []
        }
      },
      label: {
        type: String,
        default: "label"
      },
      val: {
        type: String,
        default: "value"
      },
      multiple: {
        type: Boolean,
        default: false
      },
      value: {
        type: [ String, Number, Object, Array ]
      },
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
        set( val ) {
          this.$emit('input', val)
        }
      }
    },
    methods: {
      IsActive( val ) {
        if (this.multiple) {
          return this.currentValue.indexOf(val) > -1
        } else {
          return val === this.currentValue
        }
      },
      handlerClick( val ) {
        if (this.multiple) {
          let list = [].concat(this.currentValue)
          let index = list.indexOf(val)
          if (index > -1) {
            list.splice(index, 1, val)
          } else {
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
