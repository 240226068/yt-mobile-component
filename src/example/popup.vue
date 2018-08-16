<template>
  <yt-page :title="title" :leftData="[]" :rightData="[]">
    <yt-cell label="从上面出来" @click="handlerClick('top')" isLink></yt-cell>
    <yt-cell label="从下面出来" @click="handlerClick('bottom')" isLink></yt-cell>
    <yt-cell label="从左面出来" @click="handlerClick('left')" isLink></yt-cell>
    <yt-cell label="从右面出来" @click="handlerClick('right')" isLink></yt-cell>
    <yt-cell label="从中间出来" @click="handlerClick('center')" isLink></yt-cell>
    <yt-popup pos="top" v-model="top">
      <yt-checkList v-model="select" :max="1" val="id" label="label" :list="list"></yt-checkList>
    </yt-popup>
    <yt-popup pos="bottom" v-model="bottom" fixed>
      <yt-checkList v-model="select" :max="1" val="id" label="label" :list="list"></yt-checkList>
    </yt-popup>
    <yt-popup pos="left" v-model="left" slot="alert">
      <yt-page class="page" :flex="true" :leftData="[]" title="选择分区">
        <yt-checkList style="flex: 1;" v-model="select" :max="1" val="id" label="label" :list="list"></yt-checkList>
      </yt-page>
    </yt-popup>
    <yt-popup pos="right" v-model="right" :mask="false" slot="alert">
      <yt-page class="page" :flex="true" :leftData="[]" title="选择分区">
        <yt-checkList style="flex: 1;" v-model="select" :max="1" val="id" label="label" :list="list"></yt-checkList>
        <yt-btn @click="right = false" edge>关闭</yt-btn>
      </yt-page>
    </yt-popup>
    <yt-popup pos="center" v-model="center" fixed>
      <yt-checkList v-model="select" :max="1" val="id" label="label" :list="list"></yt-checkList>
    </yt-popup>
  </yt-page>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'popup-example',
    data() {
      return {
        top: false,
        bottom: false,
        left: false,
        right: false,
        center: false,
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
