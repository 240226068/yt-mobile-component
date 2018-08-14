<template>
  <yt-page title="actionSheet">
    <yt-cell label="打电话">
      <yt-cell-call tel="18334793224"></yt-cell-call>
    </yt-cell>
    <yt-btn @click="doActionSheet">import引入调用</yt-btn>
    <yt-btn @click="doActionSheet2">this调用</yt-btn>
  </yt-page>
</template>

<script>
  import { ActionSheet } from '../../package'

  export default {
    name: 'actionSheet',
    methods: {
      doActionSheet() {
        ActionSheet([
          {
            text: '摄像',
            click: () => {
              console.log('点击了摄像')
            }
          },
          {
            text: '相册',
            click: () => {
              console.log('点击了相册')
            }
          },
          {
            text: '拍照',
            click: () => {
              console.log('点击了拍照')
            }
          }
        ])
      },
      doActionSheet2() {
        this.$ActionSheet([
          {
            text: '摄像',
            click: () => {
              console.log('点击了摄像')
            }
          },
          {
            text: '相册',
            click: () => {
              console.log('点击了相册')
            }
          },
          {
            text: '拍照',
            click: () => {
              console.log('点击了拍照')
            }
          }
        ])
      }
    }
  }
</script>

<style scoped>
</style>
