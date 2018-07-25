<template>
  <yt-page title="Swipe">
    <yt-swipeCell :data="1" :items="items">
      <p style="padding: 5px; line-height: 22px; font-size: 14px;">这是测试内容这是测试内容这是测试内容这是测试内容这是测试内容</p>
    </yt-swipeCell>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  export default {
    data: () => ({
      items: [
        {
          type: "red",
          text: "删除",
          confirmText: '确定删除',
          confirm: (data) => {
            console.log(data, 'confirm')
          }
        }
      ]
    })
  }
</script>
<style scoped>
</style>
