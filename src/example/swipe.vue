<template>
  <yt-page title="Swipe">
    <yt-swipe :data="1" :items="items">
      <p style="padding-left: 10px; line-height: 45px;">这是测试内容</p>
    </yt-swipe>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  export default {
    data: () => ({
      items: [
        {
          text: "置顶",
          type: "gray",
          click: (data) => {
            console.log(data)
          }
        },
        {
          text: "删除",
          type: "red",
          click: (data) => {
            console.log(data)
          }
        }
      ]
    })
  }
</script>
<style scoped>
</style>
