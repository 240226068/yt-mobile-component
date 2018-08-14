/**
 * Created by mas on 2018/3/9.
 */
import Vue from 'vue'
import actionSheet from './index.vue'

let actionSheetPool = []
let getAnInstance = () => {
  if (actionSheetPool.length > 0) {
    return actionSheetPool[0]
  }
  const ActionSheetConstructor = Vue.extend(actionSheet)
  let instance = new ActionSheetConstructor({
    el: document.createElement('div')
  })
  actionSheetPool.push(instance)
  return instance
}

export function ActionSheet() {
  let instance = getAnInstance()
  let options = arguments
  document.body.appendChild(instance.$el)
  Vue.nextTick(function () {
    instance.show(...options)
  })
  return instance
}
