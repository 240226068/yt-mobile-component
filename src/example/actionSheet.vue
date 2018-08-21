<template>
  <yt-page title="actionSheet">
    <yt-btn @click="doImport">import引入调用</yt-btn>
    <yt-btn @click="doThis">this调用</yt-btn>
  </yt-page>
</template>

<script>
  import { ActionSheet } from '../../package/index'

  export default {
    name: 'actionSheet',
    methods: {
      doImport() {
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
      doThis() {
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
