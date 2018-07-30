```
<template>
  <yt-page title="进度条组件" :leftData="[]" :rightData="[]">
    <yt-progress type="circle" :percent="percent" style="width: 200px; height: 200px;">
      {{percent}}
    </yt-progress>
    <yt-progress type="line" lineContentPos="center" :percent="percent" class="line">
      {{percent}}
    </yt-progress>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'rate-example',
    data () {
      return {
        percent: 0
      }
    },
    mounted() {
      this.time = setInterval(() => {
        this.percent += 1
        if (this.percent === 100) {
          clearInterval(this.time)
        }
      }, 200)
    }
  }
</script>
```
