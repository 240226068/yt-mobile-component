<template>
  <div>
    <yt-mask :fixed="true" bgc="rgba(0, 0, 0, 0.5)" :visible.sync="showFlag"/>
    <transition name="yt-alert-zoom">
      <div v-if="showFlag" class="yt-alert-content">
        <p class="yt-alert-title">{{title}}</p>
        <p class="yt-alert-desc">{{desc}}</p>
        <div class="yt-alert-btn">
          <span @click="handlerConfirm">确认</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-alert',
    data () {
      return {
        showFlag: false,
        title: '',
        desc: '',
        confirm: null
      }
    },
    methods: {
      show ( { title = '温馨提示', desc = '您确定要提交吗？', confirm } ) {
        this.title = title
        this.desc = desc
        this.confirm = confirm
        this.showFlag = true
      },
      hide() {
        this.showFlag = false
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
