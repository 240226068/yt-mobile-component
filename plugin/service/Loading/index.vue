<template>
  <div>
    <yt-mask :visible="showFlag" bgc="rgba(0, 0, 0, 0.4)" :fixed="true">
      <div class="yt-loading">
        <svg class="yt-loading-wrapper" viewBox="25 25 50 50">
          <circle class="yt-loading-circle" cx="50" cy="50" r="20" fill="none"></circle>
        </svg>
        <span class="yt-loading-text">{{text}}</span>
      </div>
    </yt-mask>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-loading',
    data() {
      return {
        showFlag: false,
        text: '请稍后...'
      }
    },
    methods: {
      show() {
        this.timeout = setTimeout(() => {
          this.showFlag = true
        }, 500)
      },
      hide() {
        if (this.timeout) {
          clearTimeout(this.timeout)
        }
        this.showFlag = false
      },
      load(options) {
        this.show()
        const success = results => {
          this.hide()
          return Promise.resolve(results)
        }
        const error = error => {
          this.hide()
          return Promise.reject(error)
        }
        if (options instanceof Array) {
          return Promise.all(options).then(success, error)
        } else {
          return options.then(success, error)
        }
      }
    }
  }
</script>
