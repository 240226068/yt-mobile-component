<template>
  <div class="content">
    <div>
      <div v-for="(md, index) in current.contents" :key="index" v-html="md"></div>
    </div>
    <div>
      <div v-for="(option, index) in current.options" :key="index">
        <h1 class="name">{{option.displayName}}</h1>
        <h4 v-if="option.description">{{option.description}}</h4>
        <v-option :data="option"></v-option>
      </div>
    </div>
    <div v-if="current.examples && current.examples.length">
      <h1 class="name">示例源码</h1>
      <v-example v-for="(example, index) in current.examples" :data="example" :key="index"></v-example>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import vExample from './example.vue'
  import vOption from './option.vue'

  export default {
    props: {
      current: {}
    },
    components: {
      vExample,
      vOption
    }
  }
</script>

<style scoped>
  .content {
    flex: 1;
    padding: 0 30px;
    overflow-y: auto;
    border-right: 1px solid #f1f1f1;
  }
  .name {
    margin: 50px 0 10px 0;
  }
</style>
