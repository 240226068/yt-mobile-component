<template>
  <div class="docs">
    <div class="docs-bar">
      <div class="docs-title">YT.MOBILE.DOC</div>
      <input class="docs-search" placeholder="Filter by name" type="text">
      <div class="docs-tree">
        <p @click="handlerClickNode(section)" v-for="(section, key) in sections" :key="key">{{section.name}}</p>
      </div>
    </div>
    <div class="docs-content">
      <div class="docs-content-md">
        <div v-for="(md, index) in current.contents" :key="index" v-html="md"></div>
      </div>
      <div class="docs-content-option">
        <div v-for="(option, index) in current.options" :key="index">
          <h2>{{option.displayName}}</h2>
          <h3>{{option.description}}</h3>
          <v-option :data="option"></v-option>
        </div>
      </div>
      <div class="docs-content-example">
        <h2>demo源码</h2>
        <v-example v-for="(example, index3) in current.examples" :data="example" :key="index3"></v-example>
      </div>
    </div>
    <div class="docs-right">
      <div class="docs-phone">
        <iframe class="docs-example" :src="src" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import config from '!!./loader/config-loader!./guide.js'
  import "highlight.js/styles/ocean.css"
  import vExample from './components/example.vue'
  import vOption from './components/option.vue'
  export default {
    name: 'App',
    components: {
      vExample,
      vOption
    },
    provide() {
      return {
        App: this
      }
    },
    data () {
      return {
        sections: [],
        current: {},
        Theme: 'LightBlue',
        src: './example.html'
      }
    },
    created() {
      let {sections} = config
      this.sections = sections
    },
    methods: {
      handlerClickNode(node) {
        this.current = node
        this.src = './example.html#' + node.path
        this.$router.push({path: node.path})
      }
    }
  }
</script>

<style rel="stylesheet/stylus" type="text/stylus" lang="stylus">
  @import "./css/markdown.css";
  .docs
    height 100%
    display flex
    overflow hidden

    &-bar
      width 230px
      height 100%
      overflow-y auto
      border-right 1px solid #f1f1f1
      background-color #292929

    &-title
      color #ffffff
      margin 30px 5px
      font-size 25px
      font-weight bold

    &-search
      display block
      width 100%
      background-color #212121
      color #ffffff
      font-size 15px
      box-sizing border-box
      padding 1em .5em
      margin-bottom 1.5em
      border 1px solid #ccc
      border-radius 0
      outline none
      &:focus
        border 1px solid #ccc
        outline none

    &-tree
      color #cccccc
      padding-left 16px

    &-content
      flex 1
      padding 0 20px
      overflow-y auto

    &-right
      margin 0 50px
      position relative
      width 400px

    &-phone
      position absolute
      top 50%
      left 50%
      transform translate3d(-50%, -50%, 0)
      width 375px
      height 667px
      padding 105px 25px
      border-radius 55px
      background-color #111111
      &::before
        content ' '
        width 60px
        height 10px
        border-radius 10px
        position absolute
        left 50%
        margin-left -30px
        background-color #333333
        top 50px
      &::after
        content ' '
        width 60px
        height 60px
        border-radius 100%
        position absolute
        left 50%
        margin-left -30px
        bottom 20px
        box-sizing border-box
        border 5px solid #333

    &-example
      width 100%
      height 100%
      background-color #ffffff
</style>
