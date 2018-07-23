<template>
  <div class="yt-step" :class="`yt-step__${Theme} ${active ? 'is-active': ''}`">
    <span class="yt-step-img">
      <i class="yt-step-icon" :class="font"></i>
    </span>
    <p class="yt-step-text" v-text="text"></p>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'yt-step',
    inject: {
      ytSteps: {
        default: () => ({})
      }
    },
    props: {
      font: {
        type: String
      },
      text: {
        type: String
      }
    },
    computed: {
      index() {
        return this.ytSteps && this.ytSteps.panels.indexOf(this)
      },
      active() {
        return this.index <= (this.ytSteps && this.ytSteps.value)
      }
    },
    mounted() {
      this.ytSteps && this.ytSteps.appendStep(this)
    },
    destroyed() {
      this.ytSteps && this.ytSteps.removeStep(this)
    }
  }
</script>

<style type="text/postcss" lang="css">
  @name yt {
    @b step {
      position: relative;
      flex: 1;
      color: #999999;
      &::before {
        content: ' ';
        position: absolute;
        left: 0;
        top: 12px;
        right: 65%;
        height: 2px;
        background-color: currentColor;
      }

      &::after {
        content: ' ';
        position: absolute;
        left: 65%;
        top: 12px;
        right: 0;
        height: 2px;
        background-color: currentColor;
      }

      @e icon {
        font-size: 22px;
      }
      @e text {
        font-size: 14px;
        margin-top: 10px;
      }
    }
  }
</style>
