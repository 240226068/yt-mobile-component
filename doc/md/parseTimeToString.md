parseTimeToString主要用于视频播放中播放时间的格式化。具体如下：
```vue
  <template>
    <span>{{currentTime | parseTimeToString}} / {{duration | parseTimeToString}}</span>
  </template>
  <script>
    export default {
      data() {
        return {
          currentTime: 3,
          duration: 230
        }
      }
    }
  </script>
```
