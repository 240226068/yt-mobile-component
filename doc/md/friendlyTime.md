friendlyTime。友好的时间格式化。具体使用如下
```vue
<template>
  <span>{{time | friendlyTime}}</span>
</template>
<script>
  export default {
    data() {
      return {
        time: Date.now()
      }
    }
  }
</script>
```
