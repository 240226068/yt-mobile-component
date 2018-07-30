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
  export default {
    name: 'yt-confirm',
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
