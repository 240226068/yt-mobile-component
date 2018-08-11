<template>
  <div class="bar">
    <div class="title">YT.MOBILE.DOC</div>
    <div class="search">
      <input class="input" v-model="key" placeholder="搜索..." type="text">
    </div>
    <ul class="list">
      <li @click="handler(section)" v-for="(section, key) in _sections" :key="key">
        <a class="item" :class="{ 'is-active': section.name === current.name }" :href="'#/' + section.name">{{section.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      sections: {
        type: Array
      },
      current: {
        type: Object
      }
    },
    computed: {
      _sections() {
        if (!this.key) return this.sections
        return this.sections.filter(v => v && v.name.match(this.key))
      }
    },
    data() {
      return {
        key: ''
      }
    },
    methods: {
      handler(section) {
        this.$emit('click', section)
      }
    }
  }
</script>

<style scoped>
  .bar {
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 100%;
    overflow-y: auto;
    border-right: 1px solid #f1f1f1;
    background-color: #292929;
  }

  .title {
    text-align: center;
    color: #ffffff;
    margin: 30px 5px;
    font-size: 25px;
    font-weight: bold;
  }

  .search {
    display: flex;
    width: 100%;
    padding: 0;
  }

  .input {
    flex: 1;
    padding: 1em .5em;
    background-color: #212121;
    color: #cccccc;
    font-size: 15px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    border: none;
    border-radius: 0;
    outline: none;
  }

  .input[type=text]:focus{
    color: #ffffff;
    border: none;
    outline: none;
    box-shadow: none;
  }

  .list {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    padding-left: 30px;
    li {
      line-height: 40px;
      list-style: none;
    }
  }

  .list::-webkit-scrollbar {
    display: none;
  }

  .item {
    color: #cccccc;
    &:hover {
      color: #ffffff;
    }
    &.is-active {
      font-weight: bold;
      color: #ffffff;
    }
  }
</style>
