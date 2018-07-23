/**
 * Created by mas on 2018/3/9.
 */
import Vue from 'vue'
import alert from './index.vue'
let alertPool = []
let getAnInstance = () => {
  if (alertPool.length > 0) {
    return alertPool[0]
  }
  const AlertConstructor = Vue.extend(alert)
  let instance = new AlertConstructor({
    el: document.createElement('div')
  })
  alertPool.push(instance)
  return instance
}

export function Alert(options) {
  let instance = getAnInstance()
  document.body.appendChild(instance.$el)
  Vue.nextTick(function () {
    instance.show(options)
  })
  return instance
}
