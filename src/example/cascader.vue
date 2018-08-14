<template>
  <yt-page title="cascader">
    <yt-cell-cascader desc="选择巷道" v-model="select" :list="list"></yt-cell-cascader>
  </yt-page>
</template>

<script>
  export default {
    name: 'cascader',
    data() {
      return {
        select: [],
        list: [
          {
            label: '曹家滩矿井',
            value: 'kj-1',
            children: [
              {
                label: '一水平',
                value: 'sp-1',
                children: [
                  {
                    label: '一巷道',
                    value: 'hd-1'
                  },
                  {
                    label: '二巷道',
                    value: 'hd-2'
                  }
                ]
              },
              {
                label: '二水平',
                value: 'sp-2',
                children: [
                  {
                    label: '三巷道',
                    value: 'hd-3'
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
