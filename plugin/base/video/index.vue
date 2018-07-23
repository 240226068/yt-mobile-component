<template>
  <div class="video-wrap" @click="handlerToggleControl">
    <video class="video"
           poster="./black.jpg"
           @loadedmetadata="handlerDuration"
           @timeupdate="handlerTimeUpdate"
           @pause="handlerPause"
           @play="handlerPlay"
           width="100%" :src="data.url" ref="video"></video>
    <transition name="yt-slider-top">
      <div v-show="showControl" class="video-title">
        {{data.title}}
      </div>
    </transition>
    <div v-show="!play" class="video-icon-big" @click.stop="handlerClickPlay">
      <img src="./play.png">
    </div>
    <transition name="yt-slider-bottom">
      <div class="video-bottom" v-show="showControl">
        <span class="video-text-wrap">
          <img @click.stop="handlerTogglePlay" class="video-icon" :src="src">{{currentTime | parseTimeToString}} / {{duration | parseTimeToString}}
        </span>
        <img class="video-full" src="./full.png">
      </div>
    </transition>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'yt-video',
    props: {
      data: {},
      name: {
        type: [String, Number]
      }
    },
    computed: {
      src () {
        return this.play ? require('./pause.png') : require('./play.png')
      },
      isActive () {
        let active = false
        try {
          let componentName = 'yt-video-group'
          let parent = this.$parent || this.$root
          let name = parent.$options.componentName

          while (parent && (!name || name !== componentName)) {
            parent = parent.$parent

            if (parent) {
              name = parent.$options.componentName
            }
          }
          active = parent.value === this.name
        } catch (error) {
          active = false
        }
        return active
      }
    },
    data() {
      return {
        currentTime: '',
        duration: '',
        showControl: false,
        play: false
      }
    },
    methods: {
      dispatch(componentName, eventName) {
        let parent = this.$parent || this.$root
        let name = parent.$options.componentName

        while (parent && (!name || name !== componentName)) {
          parent = parent.$parent

          if (parent) {
            name = parent.$options.componentName
          }
        }
        let params = [].slice.call(arguments, 2)
        if (parent) {
          parent.$emit.apply(parent, [eventName].concat(params))
        }
      },
      handlerTogglePlay () {
        if (this.play) {
          this.$refs.video.pause()
        } else {
          this.$refs.video.play()
        }
      },
      handlerToggleControl () {
        this.showControl = !this.showControl
        if (this.timeout) {
          clearTimeout(this.timeout)
        }
        if (this.showControl) {
          this.timeout = setTimeout(() => {
            this.showControl = false
          }, 5000)
        }
      },
      handlerClickPlay () {
        this.$refs.video.play()
        this.showControl = false
      },
      handlerPlay () {
        this.play = true
      },
      handlerPause () {
        this.play = false
      },
      handlerDuration () {
        this.duration = this.$refs.video.duration
      },
      handlerTimeUpdate () {
        this.currentTime = this.$refs.video.currentTime
      }
    },
    watch: {
      'data' () {
        this.$refs.video.load()
        this.$nextTick(() => {
          if (this.isActive) {
            this.$refs.video.play()
          } else {
            this.$refs.video.pause()
          }
        })
      },

      'play' () {
        if (this.play) {
          this.dispatch('yt-video-group', 'video-play', this.name)
        }
      },
      'isActive' () {
        if (this.play === this.isActive) return
        if (this.isActive) {
          this.$refs.video.play()
        } else {
          this.$refs.video.pause()
        }
      }
    }
  }
</script>
<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .video
    object-fit cover
    object-position center center

  .video-wrap
    position absolute
    top 50%
    left 0
    width 100%
    transform translate3d(0, -50%, 0)
    overflow hidden

  .video-title
    position absolute
    left 0
    top 0
    width 100%
    height 35px
    padding 0 10px
    line-height 35px
    font-size 14px
    color #ffffff
    transition all .3s ease

  .video-bottom
    display flex
    align-items center
    justify-content space-between
    position absolute
    color #ffffff
    font-size 14px
    bottom 0
    left 0
    width 100%
    height 40px
    background rgba(0, 0, 0, 0.6)
    transition all .3s ease

  .video-icon
    margin 0 10px
    width 22px

  .video-full
    margin-right 12px
    width 24px

  .video-text-wrap
    display flex
    align-items center

  .video-icon-big
    position absolute
    top 50%
    left 50%
    width 30px
    height 30px
    padding 15px
    border-radius 50%
    background rgba(0, 0, 0, 0.5)
    border 1px solid #ffffff
    transform translate3d(-50%, -50%, 0)
    img
      width 100%
      height 100%
</style>
