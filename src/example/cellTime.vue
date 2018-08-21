<template>
  <yt-page title="time">
    <yt-cell label="年月日">
      <yt-cell-time v-model="time"></yt-cell-time>
    </yt-cell>
    <yt-split></yt-split>
    <yt-cell label-width="100px" label="年月日时分秒">
      <yt-cell-time format="YYYY-MM-DD hh:mm" v-model="time"></yt-cell-time>
    </yt-cell>
    <yt-split></yt-split>
    <yt-cell label-width="100px" label="年月日带文字">
      <yt-cell-time v-model="time" showTemplate></yt-cell-time>
    </yt-cell>
    <yt-split></yt-split>
    <yt-cell label-width="150px" label="年月日时分秒带文字">
      <yt-cell-time format="YYYY-MM-DD hh:mm" v-model="time" showTemplate></yt-cell-time>
    </yt-cell>
    <yt-split></yt-split>
    <yt-cell label-width="100px" label="年月">
      <yt-cell-time format="YYYY-MM" v-model="time"></yt-cell-time>
    </yt-cell>
    <yt-split></yt-split>
    <yt-cell label-width="100px" label="时分">
      <yt-cell-time format="hh:mm" v-model="time"></yt-cell-time>
    </yt-cell>
  </yt-page>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        time: ''
      }
    }
  }
</script>
