<template>
  <div>
    <h3 v-if="canShow(data.props)">props属性</h3>
    <table v-if="canShow(data.props)">
      <thead>
      <tr>
        <th>字段名</th>
        <th>类型</th>
        <th>必须</th>
        <th>描述</th>
        <th>默认值</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(prop, key) in data.props" :key="key">
        <td>{{key}}</td>
        <td align="center">{{prop.type && prop.type.name}}</td>
        <td width="40px" align="center">{{prop.required ? '是' : '否'}}</td>
        <td>{{prop.description}}</td>
        <td>{{prop.defaultValue ? prop.defaultValue.value : prop.defaultValue}}</td>
      </tr>
      </tbody>
    </table>
    <h3 v-if="canShow(data.methods)">methods方法</h3>
    <table v-if="canShow(data.methods)">
      <thead>
      <tr>
        <th>函数名</th>
        <th>描述</th>
        <th>参数</th>
        <th>返回</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(method, key) in data.methods" :key="key">
        <td>{{method.name}}</td>
        <td>{{method.description}}</td>
        <td>
          <p v-for="param in method.params">({{param.name}})<span>{{param.description}}</span></p>
        </td>
        <td>({{method.returns && method.returns.type.name}}) {{method.returns && method.returns.description}}</td>
      </tr>
      </tbody>
    </table>
    <h3 v-if="canShow(data.slots)">slots插槽</h3>
    <table v-if="canShow(data.slots)">
      <thead>
      <tr>
        <th>插槽名</th>
        <th>描述</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(slot, key) in data.slots" :key="key">
        <td>{{key}}</td>
        <td>{{slot.description}}</td>
      </tr>
      </tbody>
    </table>
    <h3 v-if="canShow(data.events)">events事件</h3>
    <table v-if="canShow(data.events)">
      <thead>
      <tr>
        <th>事件名</th>
        <th>描述</th>
        <th>类型</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(event, key) in data.events" :key="key">
        <td>{{key}}</td>
        <td>{{event.description}}</td>
        <td>{{event.type ? event.type.names.join('|') : ''}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'v-option',
    props: {
      data: Object
    },
    methods: {
      canShow(obj) {
        return Object.keys(obj).length
      }
    }
  }
</script>
<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
</style>
