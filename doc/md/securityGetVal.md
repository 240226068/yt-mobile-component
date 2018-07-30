securityGetVal我们称它为安全获取对象的val。例如我们要获取a.b.c.d的值， 假如b不存在的时候，就会报错。在vue组件也会出现绑定失败白屏。具体使用如下
```vue
<template>
  <span>{{order | securityGetVal('person.id')}}</span>
</template>
<script>
  export default {
    data() {
      return {
        order: {}
      }
    }
  }
</script>
```
