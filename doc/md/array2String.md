array2String。将数组或者数组中每一项的key值以,分割拼接成字符串。具体使用如下
```vue
<template>
  <span>{{person | array2String}}</span>
  <span>{{person2 | array2String('name')}}</span>
</template>
<script>
  export default {
    data() {
      return {
        person: [
          '管理员',
          '巡检员',
          '维修员'
        ],
        person2: [
          {
            name: '管理员',
            id: 1
          },
          {
            name: '巡检员',
            id: 2
          },
          {
            name: '维修员',
            id: 3
          }
        ]
      }
    }
  }
</script>
```
