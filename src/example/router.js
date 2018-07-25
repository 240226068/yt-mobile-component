/**
 * Created by mas on 2018/5/1.
 */
import Vue from 'vue'
import { Router } from 'yt'
Vue.use(Router)

const routes = [
  {
    path: '/',
    component: () => import('./index')
  },
  {
    path: '/page',
    component: () => import('./page')
  },
  {
    path: '/tabs',
    component: () => import('./tabs'),
    children: [
      {
        path: '/tabs/bottom',
        component: () => import('./tabBottom')
      },
      {
        path: '/tabs/top',
        component: () => import('./tabTop')
      },
      {
        path: '/tabs/left',
        component: () => import('./tabLeft')
      }
    ]
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
    path: '/cell',
    component: () => import('./cell')
  },
  {
    path: '/cellSwipe',
    component: () => import('./cellSwipe')
  },
  {
    path: '/btn',
    component: () => import('./btn')
  },
  {
    path: '/collapse',
    component: () => import('./collapse')
  },
  {
    path: '/checkList',
    component: () => import('./checkList')
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
    path: '/badge',
    component: () => import('./badge')
  },
  {
    path: '/timeline',
    component: () => import('./timeline')
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
    path: '/input',
    component: () => import('./input')
  },
  {
    path: '/textarea',
    component: () => import('./textarea')
  },
  {
    path: '/popover',
    component: () => import('./popover')
  },
  {
    path: '/grid',
    component: () => import('./grid')
  },
  {
    path: '/replaceTheme',
    component: () => import('./replaceTheme')
  },
  {
    path: '/checkBox',
    component: () => import('./checkBox')
  },
  {
    path: '/strcky',
    component: () => import('./strcky')
  },
  {
    path: '/card',
    component: () => import('./card')
  },
  {
    path: '/screen',
    component: () => import('./screen')
  },
  {
    path: '/inlineSelect',
    component: () => import('./inlineSelect')
  },
  {
    path: '/swipeCell',
    component: () => import('./swipeCell')
  },
  {
    path: '/tabbar',
    component: () => import('./tabbar')
  },
  {
    path: '/file',
    component: () => import('./file')
  },
  {
    path: '/radioList',
    component: () => import('./radioList')
  }
]
export default new Router({ routes })
