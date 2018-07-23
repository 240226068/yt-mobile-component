<template>
  <yt-page :leftData="[]" title="cellSwipe示例">
    <yt-tabs pos="top">
      <yt-tab-panel label="定制">
        <yt-group split="none" :group="false" :list="list">
          <yt-cell-swipe slot-scope="props" class="row">
            这里是定制内容
            <div @click="handlerClickCustom" class="custom" slot="left">
              定制btn
            </div>
            <div @click="handlerClickCustom" class="custom" slot="right">
              定制btn
            </div>
          </yt-cell-swipe>
        </yt-group>
      </yt-tab-panel>
      <yt-tab-panel label="默认">
        <yt-cell-swipe class="row" :items="item.items" v-for="(item, index) in list" :key="index">
          {{item.content}}
        </yt-cell-swipe>
      </yt-tab-panel>
    </yt-tabs>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'cell-swipe-example',
    data() {
      return {
        list: [
          {
            content: '这里是主要内容',
            items: [
              {
                text: '删除',
                type: 'danger',
                click: () => {
                  console.log('删除')
                }
              },
              {
                text: '取消',
                type: 'warning',
                click: () => {
                  console.log('取消')
                }
              },
              {
                text: '断线',
                type: 'info',
                click: () => {
                  console.log('断线')
                }
              }
            ]
          },
          {
            content: '这里是主要内容',
            items: [
              {
                text: '取消',
                type: 'warning',
                click: () => {
                  console.log('取消')
                }
              }
            ]
          },
          {
            content: '这里是主要内容',
            items: [
              {
                text: '断线',
                type: 'info',
                click: () => {
                  console.log('断线')
                }
              }
            ]
          },
          {
            content: '这里是主要内容',
            items: [
              {
                text: '一般',
                type: 'primary',
                click: () => {
                  console.log('一般')
                }
              }
            ]
          },
          {
            content: '这里是主要内容',
            items: [
              {
                text: '正常',
                type: 'success',
                click: () => {
                  console.log('正常')
                }
              }
            ]
          }
        ]
      }
    },
    methods: {
      handlerClickCustom() {
        console.log('点击了定制btn')
      }
    }
  }
</script>
<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .row
    line-height 50px
  .custom
    color #ffffff
    padding 0 30px
    background-color #ff9c00
</style>
