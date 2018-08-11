<template>
  <div class="page">
    <v-bar @click="handler" :current="current" :sections="sections"></v-bar>
    <v-section :current="current"></v-section>
    <v-phone :src="src"></v-phone>
  </div>
</template>

<script type="text/ecmascript-6">
  import config from '!!./loader/config-loader!./doc.config.js'
  import 'highlight.js/styles/ocean.css'
  import vBar from './components/bar'
  import vSection from './components/section'
  import vPhone from './components/phone'

  export default {
    name: 'App',
    components: {
      vBar,
      vSection,
      vPhone
    },
    data() {
      return {
        sections: [],
        current: {},
        src: './example.html'
      }
    },
    created() {
      let { sections } = config
      this.sections = sections
      let name = window.location.hash.replace('#/', '')
      let section = this.sections.find(v => v.name === name)
      !section || this.handler(section)
    },
    methods: {
      handler(section) {
        this.current = section
        this.src = './example.html#' + section.path
      }
    }
  }
</script>

<style type="text/css" lang="css">
  @import "./css/markdown.css";

  .page {
    height: 100%;
    display: flex;
    overflow: hidden;
  }
</style>
