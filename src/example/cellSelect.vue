<template>
  <yt-page title="弹出多选">
    <yt-cell label="单选">
      <yt-cell-select v-model="select" :list="list" label="label" val="value"></yt-cell-select>
    </yt-cell>
    <yt-split></yt-split>
    <yt-cell label="多选">
      <yt-cell-select v-model="select2" :max="2" :list="list" label="label" val="value"></yt-cell-select>
    </yt-cell>
  </yt-page>
</template>

<script>
  export default {
    name: 'demo-select',
    data() {
      return {
        select: '',
        select2: [],
        list: [
          {
            label: '巷道一',
            value: 'hd-1'
          },
          {
            label: '巷道二',
            value: 'hd-2'
          },
          {
            label: '巷道三',
            value: 'hd-3'
          },
          {
            label: '巷道四',
            value: 'hd-4'
          },
          {
            label: '巷道五',
            value: 'hd-5'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
