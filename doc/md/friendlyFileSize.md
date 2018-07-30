friendlyFileSize。友好的文件大小格式化。具体使用如下
```vue
<template>
  <span>{{fileSize | friendlyFileSize}}</span>
</template>
<script>
  export default {
    data() {
      return {
        fileSize: 29303930
      }
    }
  }
</script>
```
