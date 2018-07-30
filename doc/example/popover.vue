<template>
  <yt-page :title="title" :leftData="[]" :rightData="[]">
    <yt-cell @click="handlerClick('top')" title="从上面弹出" :ripple="true" :isLink="true"/>
    <yt-cell @click="handlerClick('bottom')" title="从下面弹出" :ripple="true" :isLink="true"/>
    <yt-cell @click="handlerClick('left')" title="从左面弹出" :ripple="true" :isLink="true"/>
    <yt-cell @click="handlerClick('right')" title="从右面弹出" :ripple="true" :isLink="true"/>
    <yt-popover pos="top" :visible.sync="top" slot="alert">
      <yt-checkList v-model="select" :max="1" val="id" label="label" :list="list"></yt-checkList>
      <yt-btn :disabled="!select.length">选择分区</yt-btn>
    </yt-popover>
    <yt-popover pos="bottom" :visible.sync="bottom" slot="alert">
      <yt-checkList v-model="select" :max="1" val="id" label="label" :list="list"></yt-checkList>
      <yt-btn :disabled="!select.length">选择分区</yt-btn>
    </yt-popover>
    <yt-popover pos="left" :visible.sync="left" slot="alert">
      <yt-page class="page" :flex="true" :leftData="[]" title="选择分区">
        <yt-checkList style="flex: 1;" v-model="select" :max="1" val="id" label="label" :list="list"></yt-checkList>
        <yt-btn :disabled="!select.length">确认</yt-btn>
      </yt-page>
    </yt-popover>
    <yt-popover pos="right" :visible.sync="right" slot="alert">
      <yt-page class="page" :flex="true" :leftData="[]" title="选择分区">
        <yt-checkList style="flex: 1;" v-model="select" :max="1" val="id" label="label" :list="list"></yt-checkList>
        <yt-btn :disabled="!select.length">确认</yt-btn>
      </yt-page>
    </yt-popover>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'popover-example',
    data () {
      return {
        top: false,
        bottom: false,
        left: false,
        right: false,
        select: [],
        list: [
          {
            label: '101分区',
            id: 1
          },
          {
            label: '102分区',
            id: 2
          },
          {
            label: '103分区',
            id: 3
          },
          {
            label: '104分区',
            id: 4
          },
          {
            label: '105分区',
            id: 5
          },
          {
            label: '106分区',
            id: 6
          }
        ],
        title: 'popover组件'
      }
    },
    methods: {
      handlerClick(key) {
        this[key] = true
      }
    }
  }
</script>
<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .page
    width 100%
    height 100%
    display flex
    flex-direction column
</style>
