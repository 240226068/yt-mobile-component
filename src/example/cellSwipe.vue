<template>
  <yt-page title="Swipe">
    <yt-cell label="基础用法"></yt-cell>
    <yt-cellSwipe :data="1" :items="items">
      <p class="row">这是测试内容这是测试内容这是测试内容这是测试内容这是测试内容</p>
    </yt-cellSwipe>
    <yt-split></yt-split>
    <yt-cell label="禁用状态"></yt-cell>
    <yt-cellSwipe :data="2" :items="items" disabled>
      <p class="row">这是测试内容这是测试内容这是测试内容这是测试内容这是测试内容</p>
    </yt-cellSwipe>
    <yt-split></yt-split>
    <yt-cell label="点击确认"></yt-cell>
    <yt-cellSwipe :data="3" :items="items2">
      <p class="row">这是测试内容这是测试内容这是测试内容这是测试内容这是测试内容</p>
    </yt-cellSwipe>
    <yt-split></yt-split>
    <yt-cell label="自定义右侧内容"></yt-cell>
    <yt-cellSwipe>
      <p class="row">这是测试内容这是测试内容这是测试内容这是测试内容这是测试内容</p>
      <div class="custom" slot="right">
        <div class="item" @click="handler">自定义</div>
      </div>
    </yt-cellSwipe>
  </yt-page>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        items: [
          {
            type: 'gray',
            text: '关注',
            click: (data) => {
              console.log(data, '点击了关注')
            }
          },
          {
            type: 'red',
            text: '删除',
            click: (data) => {
              console.log(data, '点击了删除')
            }
          }
        ],
        items2: [
          {
            type: 'red',
            text: '删除',
            confirmText: '确定删除',
            confirm: (data) => {
              console.log(data, '点击了确定删除')
            }
          }
        ]
      }
    },
    methods: {
      handler() {
        console.log('点击了自定义')
      }
    }
  }
</script>

<style scoped>
  .row {
    padding: 5px;
    line-height: 22px;
    font-size: 14px;
  }

  .custom {
    display: flex;
    align-items: center;
    height: 100%;
    line-height: 100%;
    padding: 0 20px;
    color: #fff;
    font-size: 14px;
    background-color: red;
  }
</style>
