/**
 * Created by mas on 2018/3/9.
 */
import Vue from 'vue'
import select from './index.vue'
let selectPool = []
let getAnInstance = () => {
  if (selectPool.length > 0) {
    return selectPool[0]
  }
  const SelectConstructor = Vue.extend(select)
  let instance = new SelectConstructor({
    el: document.createElement('div')
  })
  selectPool.push(instance)
  return instance
}

export function Select(options) {
  let instance = getAnInstance()
  document.body.appendChild(instance.$el)
  Vue.nextTick(function () {
    instance.show(options)
  })
  return instance
}
