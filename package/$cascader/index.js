/**
 * Created by mas on 2018/3/9.
 */
import Vue from 'vue'
import cascader from './index.vue'
let cascaderPool = []
let getAnInstance = () => {
  if (cascaderPool.length > 0) {
    return cascaderPool[0]
  }
  const CascaderConstructor = Vue.extend(cascader)
  let instance = new CascaderConstructor({
    el: document.createElement('div')
  })
  cascaderPool.push(instance)
  return instance
}

export function Cascader(options) {
  let instance = getAnInstance()
  document.body.appendChild(instance.$el)
  Vue.nextTick(function () {
    instance.show(options)
  })
  return instance
}
