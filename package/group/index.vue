<template>
  <yt-pull class="yt-group" :top-load-method="down ? pullDown : null" :bottom-load-method="up ? pullUp : null"
           ref="pull">
    <!-- @slot 自定义header内容-->
    <slot name="header"></slot>
    <template v-for="(val, key) in data">
      <yt-sticky class="yt-group-category" top="0px" :key="key">{{key | calendarTime}}</yt-sticky>
      <!-- @slot 模块内容-->
      <slot v-for="(item, index) in val" :_index="index" v-bind="item"></slot>
    </template>
    <!-- @slot 自定义footer内容-->
    <slot name="footer"></slot>
  </yt-pull>
</template>

<script type="text/ecmascript-6">
  import { groupDataByTime } from '../utils'

  export default {
    name: 'yt-group',

    props: {
      /**
       *  初始化+下拉+上拉加载时候调用的函数
       *  回传参数 { skip, limit, name}
       */
      searchApi: {
        required: true,
        type: [Function]
      },
      /**
       * 作为标识   在searchApi回调函数中会进行回传
       */
      name: {
        type: [String, Number, Object]
      },
      /**
       * 分组的字段
       */
      field: {
        type: String,
        default: 'createdAt'
      },
      /**
       * 每次刷新加载限制20条
       */
      limit: {
        type: Number,
        default: 20
      },
      /**
       * 是否启用下拉
       */
      down: {
        type: Boolean,
        default: true
      },
      /**
       * 是否启用上拉
       */
      up: {
        type: Boolean,
        default: true
      }
    },

    data() {
      return {
        data: {}
      }
    },

    computed: {
      list() {
        let results = []
        Object.values(this.data).forEach(v => (results = results.concat(v)))
        return results
      }
    },

    methods: {
      pullDown(loaded) {
        this.fetchData({ loaded })
      },

      pullUp(loaded) {
        this.fetchData({ skip: this.list.length, loaded })
      },

      async fetchData(option = {}) {
        let { skip = 0, limit = this.limit, loaded } = option
        if (!this.searchApi) return
        let array = await this.searchApi({ skip, limit }, this.name)
        !loaded || loaded()
        if (skip === 0) this.data = {}
        this.data = groupDataByTime(array, this.data, this.field)
      }
    },

    activated() {
      this.$refs.pull.startPull()
    }
  }
</script>
