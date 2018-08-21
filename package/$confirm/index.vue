<template>
  <yt-popup :value="showFlag" @input="hide" pos="center">
    <div class="yt-confirm">
      <p class="yt-confirm-title">{{title}}</p>
      <p class="yt-confirm-desc">{{desc}}</p>
      <yt-btnGroup edge border :shadow="false">
        <yt-btn theme="white" @click="hide">{{cancelText}}</yt-btn>
        <yt-btn @click="handlerConfirm">{{confirmText}}</yt-btn>
      </yt-btnGroup>
    </div>
  </yt-popup>
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
        this.cancel && this.cancel()
      },
      handlerConfirm() {
        this.showFlag = false
        this.confirm && this.confirm()
      }
    }
  }
</script>
