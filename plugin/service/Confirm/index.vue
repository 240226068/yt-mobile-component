<template>
  <div>
    <yt-mask :fixed="true" bgc="rgba(0, 0, 0, 0.5)" @update:visible="hide" :visible="showFlag"/>
    <transition name="yt-confirm-zoom">
      <div v-if="showFlag" class="yt-confirm" :class="`yt-confirm__${Theme}`">
        <p class="yt-confirm-title">{{title}}</p>
        <p class="yt-confirm-desc yt-scroll">{{desc}}</p>
        <div class="yt-confirm-btn">
          <span class="yt-confirm-cancel" @click="hide">{{cancelText}}</span>
          <span class="yt-confirm-confirm" @click="handlerConfirm">{{confirmText}}</span>
        </div>
      </div>
    </transition>
  </div>
</template>
<script type="text/ecmascript-6">
  import { listenModule } from '../../mixins/listenModule'

  export default {
    name: 'yt-confirm-module',
    mixins: [listenModule],
    data() {
      return {
        showFlag: false,
        title: '',
        desc: '',
        confirm: null,
        cancel: null,
        confirmText: '',
        cancelText: ''
      }
    },
    methods: {
      show({ confirmText = '确认', cancelText = '取消', title = '温馨提示', desc = '您确定要提交吗？' }) {
        this.confirmText = confirmText
        this.cancelText = cancelText
        this.title = title
        this.desc = desc
        this.showFlag = true
        return new Promise((resolve, reject) => {
          this.confirm = resolve
          this.cancel = reject
        })
      },
      hide() {
        this.showFlag = false
        if (this.cancel) {
          this.cancel()
        }
      },
      handlerConfirm() {
        this.showFlag = false
        if (this.confirm) {
          this.confirm()
        }
      }
    }
  }
</script>
<style lang="css" type="text/postcss">
  @name yt {
    @b confirm {
      display: flex;
      flex-direction: column;
      position: fixed;
      left: 50%;
      top: 50%;
      width: 82%;
      height: 180px;
      border-radius: 8px;
      color: #101010;
      z-index: 2000;
      border-style: solid;
      border-width: 5px 0 0 0;
      transform: translate3d(-50%, -50%, 0);
      transition: transform .3s ease;
      @e title {
        text-align: center;
        line-height: 50px;
        letter-spacing: 1px;
        font-size: 18px;
        background-color: #ffffff;
      }
      @e desc {
        flex: 1;
        text-indent: 10px;
        padding: 0 20px;
        font-size: 15px;
        line-height: 22px;
        background-color: #ffffff;
      }
      @e btn {
        display: flex;
        text-align: center;
        font-size: 0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-top: 1px solid #f5f5f5;
        box-sizing: border-box;
        overflow: hidden;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        background-color: #ffffff;
        span {
          position: relative;
          font-size: 14px;
          flex: 1;

          &:active {

            &::after {
              content: " ";
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: #ffffff;
              opacity: 0.2;
            }
          }
        }
      }
    }
  }

  .yt-confirm-zoom-enter {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(1.185);
  }

  .yt-confirm-zoom-leave-active {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0);
  }
</style>
