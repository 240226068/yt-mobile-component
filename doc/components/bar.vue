<template>
  <div class="bar">
    <div class="title">YT.MOBILE.DOC</div>
    <div class="version">v.{{version}}</div>
    <div class="search">
      <input class="input" v-model="key" placeholder="搜索..." type="text">
    </div>
    <ul class="list">
      <template v-for="section in _sections">
        <li class="tag" v-if="section.tag">{{section.tag}}</li>
        <li @click="handler(section)" :class="{ 'is-active': section.name === current.name }">
          <a class="item" :href="'#/' + section.name">{{section.name}}</a>
        </li>
      </template>
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
      },
      version: {
        type: String
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
    background-color: #292929;
  }

  .title {
    text-align: center;
    color: #ffffff;
    margin: 30px 5px 10px 5px;
    font-size: 25px;
    font-weight: bold;
  }

  .version {
    text-align: center;
    color: #eee;
    font-size: 16px;
    margin: 10px 0 15px 0;
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
    padding-left: 0;
    li {
      font-size: 14px;
      padding-left: 20px;
      line-height: 40px;
      list-style: none;
      &.is-active {
        background-color: #ffffff;
        .item {
          font-size: 1.1em;
          color: #666666;
        }
      }
    }
    .tag {
      font-size: 18px;
      font-weight: bold;
      color: #fff;
    }
  }

  .list::-webkit-scrollbar {
    display: none;
  }

  .item {
    color: #999999;
    text-decoration: none;
    &:hover {
      color: #ffffff;
      text-decoration: underline;
    }
  }
</style>
