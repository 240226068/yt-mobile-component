<template>
  <div class="yt-inlineSelect" :class="`yt-inlineSelect__${Theme}`">
    <div class="yt-inlineSelect-title">{{title}}</div>
    <div class="yt-inlineSelect-wrap">
      <div class="yt-inlineSelect-box" @click="handlerClick( val ? item[val] : item )" v-for="item in list">
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
        type: String
      },
      val: {
        type: String
      },
      multiple: {
        type: Boolean,
        default: false
      },
      value: {
        type: [ String, Number, Object, Array ]
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
<style lang="css" type="text/postcss">
  @name yt {
    @b inlineSelect {
      padding: 0 5px;
      @e title {
        line-height: 40px;
        font-size: 14px;
        color: #333333;
        &::before {
          content: " ";
          display: inline-block;
          width: 4px;
          height: 16px;
          border-radius: 2px;
          margin: 0 8px 0 3px;
          vertical-align: middle;
        }
      }
      @e wrap {
        font-size: 0;
        padding: 0 5px;
      }
      @e box {
        display: inline-block;
        width: 50%;
        text-align: center;
        font-size: 12px;
        color: #666;
      }
      @e item {
        display: block;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 12px;
        color: #666;
        background-color: #f2f2f2;
        border-radius: 5px;
        margin: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: #eeeeee;
        transition: all .3s cubic-bezier(.645, .045, .355, 1);
      }
    }
  }
</style>
