formatTime。格式化时间。具体使用如下
```vue
<template>
  <span>{{time | formatTime}}</span>
  <span>{{time | formatTime('YYYY-MM-DD')}}</span>
  <span>{{time | formatTime('YYYY-MM-DD HH:mm')}}</span>
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
