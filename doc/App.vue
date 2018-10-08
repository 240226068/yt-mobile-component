<template>
  <div class="page">
    <v-bar @click="handler" :version="version" :current="current" :sections="sections"></v-bar>
    <v-section :current="current"></v-section>
    <v-phone :src="src" v-if="src"></v-phone>
  </div>
</template>

<script type="text/ecmascript-6">
  import config from '!!!!./loader/config-loader!./doc.config.js'
  import 'highlight.js/styles/ocean.css'
  import vBar from './components/bar'
  import vSection from './components/section'
  import vPhone from './components/phone'

  const PACKAGE = require('../package.json')

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
        src: './example.html',
        version: PACKAGE.version
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
        this.src = section.path ? ('./example.html#' + section.path) : null
      }
    }
  }
</script>

<style type="text/css" lang="css">
  @import "css/markdown.css";

  .page {
    height: 100%;
    display: flex;
    overflow: hidden;
  }
</style>
