<template>
  <yt-popover :visible.sync="showFlag" pos="bottom">
    <div class="yt-select-header yt-border-all">
      {{title}}
      <yt-btn class="yt-select-btn" size="small" v-if="list.length && max > 1" @click="handlerConfirm"
              :disabled="currentValue.length < min" :plain="currentValue.length < min">确认
      </yt-btn>
    </div>
    <yt-checkList class="yt-select-container" @input="handlerChange" :value="currentValue"
                  :max="max" :val="val" :label="label" :list="list"/>
  </yt-popover>
</template>
<script type="text/ecmascript-6">
  import { listenModule } from '../../mixins/listenModule'

  export default {
    name: 'yt-select-service',
    mixins: [listenModule],
    data() {
      return {
        showFlag: false,
        min: 1,
        list: [],
        currentValue: [],
        max: 100,
        label: '',
        val: '',
        title: ''
      }
    },
    methods: {
      show(options = {}) {
        let { _value, list, max, min, label, val, title, Confirm } = options
        this.currentValue = [].concat(_value)
        this.list = [].concat(list)
        this.max = max
        this.min = min
        this.label = label
        this.val = val
        this.title = title
        this.Confirm = Confirm
        this.showFlag = true
      },
      hide() {
        this.showFlag = false
      },
      handlerConfirm() {
        this.Confirm(this.currentValue)
        this.showFlag = false
      },
      handlerChange(val) {
        this.currentValue = val
        if (this.max === 1 && val.length) {
          this.handlerConfirm()
        }
      }
    }
  }
</script>

<style type="text/pcss" lang="postcss">
  @name yt {
    @b select {
      @e header {
        position: relative;
        text-align: center;
        line-height: 42px;
        font-size: 14px;
        color: #333333;
      }
      @e btn {
        position: absolute !important;
        right: 10px;
        top: 50%;
        transform: translate3d(0, -50%, 0);
      }
      @e container {
        text-align: left;
        height: 220px;
        box-sizing: border-box;
      }
    }
  }
</style>
