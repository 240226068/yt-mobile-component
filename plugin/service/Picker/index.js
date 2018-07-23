/**
 * Created by mas on 2018/3/9.
 */
import Vue from 'vue'
import picker from './index.vue'
let pickerPool = []
let getAnInstance = () => {
  if (pickerPool.length > 0) {
    return pickerPool[0]
  }
  const PickerConstructor = Vue.extend(picker)
  let instance = new PickerConstructor({
    el: document.createElement('div')
  })
  pickerPool.push(instance)
  return instance
}

export function Picker(options) {
  let instance = getAnInstance()
  document.body.appendChild(instance.$el)
  Vue.nextTick(function () {
    instance.show(options)
  })
  return instance
}
