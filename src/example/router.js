/**
 * Created by mas on 2018/5/1.
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [
  {
    name: 'index',
    path: '/',
    redirect: 'main'
  },
  {
    name: '首页',
    path: '/main',
    component: () => import('./index')
  },
  {
    name: 'cell',
    path: '/cell',
    component: () => import('./cell')
  },
  {
    name: 'cellSwipe',
    path: '/cellSwipe',
    component: () => import('./cellSwipe')
  },
  {
    name: 'badge',
    path: '/badge',
    component: () => import('./badge')
  },
  {
    name: 'split',
    path: '/split',
    component: () => import('./split')
  },
  {
    name: 'card',
    path: '/card',
    component: () => import('./card')
  },
  {
    name: 'popup',
    path: '/popup',
    component: () => import('./popup')
  },
  {
    name: 'grid',
    path: '/grid',
    component: () => import('./grid')
  },
  {
    name: 'checkBox',
    path: '/checkBox',
    component: () => import('./checkBox')
  },
  {
    name: 'radio',
    path: '/radio',
    component: () => import('./radio')
  },
  {
    name: 'switch',
    path: '/switch',
    component: () => import('./switch')
  },
  {
    name: 'input',
    path: '/input',
    component: () => import('./input')
  },
  {
    name: 'count',
    path: '/count',
    component: () => import('./count')
  },
  {
    name: 'rate',
    path: '/rate',
    component: () => import('./rate')
  },
  {
    name: 'page',
    path: '/page',
    component: () => import('./page')
  },
  {
    name: 'tabbar',
    path: '/tabbar',
    component: () => import('./tabbar')
  },
  {
    name: 'tabs',
    path: '/tabs',
    component: () => import('./tabs')
  },
  {
    name: 'view',
    path: '/view',
    component: () => import('./view')
  },
  {
    name: 'timeline',
    path: '/timeline',
    component: () => import('./timeLine')
  },
  {
    name: 'form',
    path: '/form',
    component: () => import('./form')
  },
  {
    name: 'collapse',
    path: '/collapse',
    component: () => import('./collapse')
  },
  {
    name: 'sticky',
    path: '/sticky',
    component: () => import('./sticky')
  },
  {
    name: 'screen',
    path: '/screen',
    component: () => import('./screen')
  },
  {
    name: 'checkList',
    path: '/checkList',
    component: () => import('./checkList')
  },
  {
    name: 'radioList',
    path: '/radioList',
    component: () => import('./radioList')
  },
  {
    name: 'btn',
    path: '/btn',
    component: () => import('./btn')
  },
  {
    name: 'btnGroup',
    path: '/btnGroup',
    component: () => import('./btnGroup')
  },
  {
    name: 'tag',
    path: '/tag',
    component: () => import('./tag')
  },
  {
    name: 'pull',
    path: '/pull',
    component: () => import('./pull')
  },
  {
    name: 'group',
    path: '/group',
    component: () => import('./group')
  },
  {
    name: 'spinner',
    path: '/spinner',
    component: () => import('./spinner')
  },
  {
    name: 'buttonTab',
    path: '/buttonTab',
    component: () => import('./buttonTab.vue')
  },
  {
    name: 'slider',
    path: '/slider',
    component: () => import('./slider.vue')
  },
  {
    name: 'inlineSelect',
    path: '/inlineSelect',
    component: () => import('./inlineSelect.vue')
  },
  {
    name: 'buttonTab',
    path: '/buttonTab',
    component: () => import('./buttonTab.vue')
  },
  {
    name: 'textarea',
    path: '/textarea',
    component: () => import('./textarea.vue')
  },
  {
    name: 'progress',
    path: '/progress',
    component: () => import('./progress.vue')
  },
  {
    name: 'file',
    path: '/file',
    component: () => import('./file.vue')
  },
  {
    name: 'toast',
    path: '/toast',
    component: () => import('./toast.vue')
  },
  {
    name: 'confirm',
    path: '/confirm',
    component: () => import('./confirm.vue')
  },
  {
    name: 'actionSheet',
    path: '/actionSheet',
    component: () => import('./actionSheet.vue')
  },
  {
    name: 'cellSelect',
    path: '/cellSelect',
    component: () => import('./cellSelect.vue')
  },
  {
    name: 'cellCascader',
    path: '/cellCascader',
    component: () => import('./cellCascader.vue')
  },
  {
    name: 'cellTime',
    path: '/cellTime',
    component: () => import('./cellTime.vue')
  },
  {
    name: 'loading',
    path: '/loading',
    component: () => import('./loading.vue')
  },
  {
    name: 'preview',
    path: '/preview',
    component: () => import('./preview.vue')
  },
  {
    name: 'shopCart',
    path: '/shopCart',
    component: () => import('./shopCart.vue')
  },
  {
    name: 'cellRadio',
    path: '/cellRadio',
    component: () => import('./cellRadio.vue')
  },
  {
    name: 'cellCall',
    path: '/cellCall',
    component: () => import('./cellCall.vue')
  }
]

export default new Router({ routes })
