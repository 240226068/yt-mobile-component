/**
 * Created by mas on 2018/5/1.
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: () => import('./index')
  },
  {
    path: '/cell',
    component: () => import('./cell')
  },
  {
    path: '/cellSwipe',
    component: () => import('./cellSwipe')
  },
  {
    path: '/badge',
    component: () => import('./badge')
  },
  {
    path: '/split',
    component: () => import('./split')
  },
  {
    path: '/card',
    component: () => import('./card')
  },
  {
    path: '/popup',
    component: () => import('./popup')
  },
  {
    path: '/grid',
    component: () => import('./grid')
  },
  {
    path: '/checkBox',
    component: () => import('./checkBox')
  },
  {
    path: '/radio',
    component: () => import('./radio')
  },
  {
    path: '/switch',
    component: () => import('./switch')
  },
  {
    path: '/input',
    component: () => import('./input')
  },
  {
    path: '/count',
    component: () => import('./count')
  },
  {
    path: '/rate',
    component: () => import('./rate')
  },
  {
    path: '/page',
    component: () => import('./page')
  },
  {
    path: '/tabbar',
    component: () => import('./tabbar')
  },
  {
    path: '/tabs',
    component: () => import('./tabs')
  },
  {
    path: '/view',
    component: () => import('./view')
  },
  {
    path: '/timeline',
    component: () => import('./timeLine')
  },
  {
    path: '/form',
    component: () => import('./form')
  },
  {
    path: '/collapse',
    component: () => import('./collapse')
  },
  {
    path: '/sticky',
    component: () => import('./sticky')
  },
  {
    path: '/screen',
    component: () => import('./screen')
  },
  {
    path: '/checkList',
    component: () => import('./checkList')
  },
  {
    path: '/radioList',
    component: () => import('./radioList')
  },
  {
    path: '/btn',
    component: () => import('./btn')
  },
  {
    path: '/tag',
    component: () => import('./tag')
  },
  {
    path: '/pull',
    component: () => import('./pull')
  },
  {
    path: '/group',
    component: () => import('./group')
  },
  {
    path: '/spinner',
    component: () => import('./spinner')
  },
  {
    path: '/buttonTab',
    component: () => import('./buttonTab.vue')
  },
  {
    path: '/slider',
    component: () => import('./slider.vue')
  },
  {
    path: '/inlineSelect',
    component: () => import('./inlineSelect.vue')
  },
  {
    path: '/buttonTab',
    component: () => import('./buttonTab.vue')
  },
  {
    path: '/textarea',
    component: () => import('./textarea.vue')
  },
  {
    path: '/progress',
    component: () => import('./progress.vue')
  },
  {
    path: '/file',
    component: () => import('./file.vue')
  },
  {
    path: '/toast',
    component: () => import('./toast.vue')
  },
  {
    path: '/confirm',
    component: () => import('./confirm.vue')
  },
  {
    path: '/actionSheet',
    component: () => import('./actionSheet.vue')
  },
  {
    path: '/select',
    component: () => import('./select.vue')
  },
  {
    path: '/cascader',
    component: () => import('./cascader.vue')
  },
  {
    path: '/time',
    component: () => import('./time.vue')
  },
  {
    path: '/loading',
    component: () => import('./loading.vue')
  },
  {
    path: '/preview',
    component: () => import('./preview.vue')
  },
  {
    path: '/shopCart',
    component: () => import('./shopCart.vue')
  }
]

export default new Router({ routes })
