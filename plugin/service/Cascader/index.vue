<template>
  <yt-popover :visible="showFlag" @update:visible="hide" pos="bottom">
    <div v-if="!list.length" class="yt-cascader">
      <yt-loading class="yt-cascader"></yt-loading>
    </div>
    <div v-else class="yt-cascader" :class="`yt-cascader__${Theme}`">
      <div class="yt-cascader-title">
        {{title}}
        <yt-btn v-if="changeOnSelect" @click="handlerConfirm" class="yt-cascader-btn"
                size="small" :disabled="!selectList.length" :plain="!selectList.length">
          确认
        </yt-btn>
      </div>
      <div class="yt-cascader-select">
        <span class="yt-cascader-item" :class="{ 'is-active': lineIndex === index }"
              @click="handlerClickItem(index)" v-for="(item, index) in selectList" ref="tab">{{item[label]}}</span>
        <span class="yt-cascader-item" :class="{ 'is-active': lineIndex === -1 }"
              @click="handlerClickTool(-1)" v-if="showTool" ref="tool">请选择</span>
        <span class="yt-cascader-line" ref="line"></span>
      </div>
      <div class="yt-cascader-panel yt-scroll" v-if="active === -1">
        <p class="yt-cascader-row" :class="{'is-select': selectList.indexOf(child) > -1}"
           @click="handlerSelect(child, -1)" v-for="(child, index) in list" :key="index">{{child[label]}}</p>
      </div>
      <div class="yt-cascader-panel yt-scroll" v-if="active === index" v-for="(item, index) in selectList"
           :key="index">
        <p class="yt-cascader-row" :class="{'is-select': selectList.indexOf(child) > -1}"
           @click="handlerSelect(child, index)" v-for="(child, index2) in item[children]" :key="index2">
          {{child[label]}}</p>
      </div>
    </div>
  </yt-popover>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'yt-cascader',
    computed: {
      showTool() {
        if (this.selectList.length === 0) return true
        let last = this.selectList[this.selectList.length - 1]
        return last && last[this.children] && last[this.children].length
      }
    },
    methods: {
      show({ list, selectList, title, label, children, confirm, cancel, changeOnSelect }) {
        this.showFlag = true
        this.list = [].concat(list)
        this.selectList = [].concat(selectList)
        this.title = title
        this.label = label
        this.children = children
        this.changeOnSelect = changeOnSelect
        this.lineIndex = selectList.length - 1
        this.active = Math.max(this.lineIndex - 1, -1)
        this.confirm = confirm
        this.cancel = cancel
        this.setLine(this.lineIndex)
      },
      hide() {
        this.cancel && this.cancel()
        this.showFlag = false
      },
      handlerConfirm() {
        this.confirm && this.confirm(this.selectList)
        this.showFlag = false
      },
      handlerSelect(item, panelIndex) {
        let len = this.selectList.length
        if (len) {
          if (panelIndex === -1) {
            if (item && item[this.children] && item[this.children].length) {
              if (this.selectList[0] === item) {
                this.active = 0
                this.lineIndex = this.selectList[1] ? 1 : -1
                this.setLine(this.lineIndex)
              } else {
                this.selectList = [item]
                this.active = panelIndex + 1
                this.lineIndex = -1
                this.setLine(this.lineIndex)
              }
            } else {
              if (this.selectList[0] === item) {
              } else {
                this.selectList = [item]
              }
              this.doClose()
            }
          } else {
            if (item && item[this.children] && item[this.children].length) {
              if (this.selectList[panelIndex + 1] === item) {
                this.active = panelIndex + 1
                this.lineIndex = (panelIndex + 2 >= len) ? -1 : panelIndex + 2
                this.setLine(this.lineIndex)
              } else {
                this.selectList = [].concat(this.selectList.slice(0, panelIndex + 1))
                this.selectList.push(item)
                this.active = panelIndex + 1
                this.lineIndex = -1
                this.setLine(this.lineIndex)
              }
            } else {
              if (this.selectList[panelIndex + 1] === item) {
              } else {
                this.selectList = [].concat(this.selectList.slice(0, panelIndex + 1))
                this.selectList.push(item)
              }
              this.doClose()
            }
          }
        } else {
          this.selectList.push(item)
          if (item && item[this.children] && item[this.children].length) {
            this.active = panelIndex + 1
            this.lineIndex = -1
            this.setLine(this.lineIndex)
          } else {
            this.doClose()
          }
        }
      },
      handlerClickItem(index) {
        this.active = index - 1
        this.lineIndex = index
        this.setLine(this.lineIndex)
      },
      handlerClickTool(index) {
        this.active = this.selectList.length - 1
        this.lineIndex = index
        this.setLine(this.lineIndex)
      },
      doClose() {
        this.lineIndex = this.selectList.length - 1
        this.setLine(this.lineIndex)
        this.handlerConfirm()
      },
      setLine(index) {
        this.$nextTick(() => {
          let line = this.$refs.line
          if (!line) return
          let tool = this.$refs.tool
          if (index === -1) {
            if (!tool) return
            line.style = `
            left: ${ tool.offsetLeft }px;
            width: ${ tool.offsetWidth }px;
           `
          } else {
            let tab = this.$refs.tab[index]
            if (!tab) return
            line.style = `
            left: ${tab.offsetLeft}px;
            width: ${ tab.offsetWidth }px;
           `
          }
        })
      }
    },
    data() {
      return {
        showFlag: false,
        list: [],
        selectList: [],
        title: '',
        label: '',
        children: '',
        lineIndex: -1,
        active: -1,
        confirm: null,
        cancel: null,
        changeOnSelect: false
      }
    }
  }
</script>
