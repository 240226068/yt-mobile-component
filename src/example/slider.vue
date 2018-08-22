<template>
  <yt-page title="slider">
    <yt-slider class="list" v-model="page" :list="list" dots>
      <div class="item" slot-scope="item">{{item.data.text}}</div>
    </yt-slider>
  </yt-page>
</template>

<script>
  export default {
    name: 'slider',
    data() {
      return {
        page: 2,
        list: [
          {
            text: '第一页'
          },
          {
            text: '第二页'
          },
          {
            text: '第三页'
          },
          {
            text: '第四页'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .list {
    height: 200px;
    background-color: black;
  }

  .item {
    color: #fff;
    margin: 10px;
    font-size: 16px;
  }
</style>
