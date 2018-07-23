/**
 * Created by mas on 2018/3/25.
 */
const clickoutsideContext = '@@clickoutsideContext';

export const clickoutside = {
  bind(el, binding, vnode) {
    const documentHandler = function (e) {
      if (vnode.context && !el.contains(e.target)) {
        vnode.context[el[clickoutsideContext].methodName]();
      }
    };
    el[clickoutsideContext] = {
      documentHandler,
      methodName: binding.expression,
      arg: binding.arg || 'click'
    };
    document.addEventListener(el[clickoutsideContext].arg, documentHandler);
  },

  update(el, binding) {
    el[clickoutsideContext].methodName = binding.expression;
  },

  unbind(el) {
    document.removeEventListener(
      el[clickoutsideContext].arg,
      el[clickoutsideContext].documentHandler);
  },

  install(Vue) {
    Vue.directive('clickoutside', {
      bind: this.bind,
      unbind: this.unbind
    });
  }
};
