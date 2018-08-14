<template>
  <transition name="yt-fade">
    <div class="yt-loading" v-if="showFlag">
      <div class="yt-loading-wrap">
        <yt-spinner type="ios-small" color="#fff"></yt-spinner>
        <span class="yt-loading-text">{{text}}</span>
      </div>
    </div>
  </transition>
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
        if (this.timeout) clearTimeout(this.timeout)
        this.showFlag = false
      },
      load(options) {
        return new Promise((resolve, reject) => {
          if (!options || options.length === 0) {
            return reject(new Error('最少传入一个promise'))
          }
          this.show()
          return Promise
            .all(options)
            .then(results => {
              this.hide()
              return resolve(options.length === 1 ? results[0] : results)
            })
            .catch(error => {
              this.hide()
              return reject(error)
            })
        })
      }
    }
  }
</script>
