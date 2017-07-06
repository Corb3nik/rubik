import Vue from 'vue'
import VueRouter from 'vue-router'
import CTFShow from './components/ctfs/show.vue'
import CTFIndex from './components/ctfs/index.vue'
import ChallengeShow from './components/challenges/show.vue'
import ChallengeIndex from './components/challenges/index.vue'
import Dashboard from './components/modules/dashboard.vue'
import Dirb from './components/modules/dirb.vue'
import Spider from './components/modules/spider.vue'
import Wappalyzer from './components/modules/wappalyzer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'ctfs' }
  },
  {
    path: '/ctfs',
    name: 'ctfs',
    component: CTFIndex
  },
  {
    path: '/challenges',
    name: 'challenges',
    component: ChallengeIndex
  },
  {
    path: '/challenges/:id/',
    name: 'challenge',
    component: ChallengeShow,
    props: true,
    redirect: { name: 'dashboard' },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        props: { default: true },
        component: Dashboard
      },
      {
        path: 'dirb',
        name: 'dirb',
        props: { default: true },
        component: Dirb
      },
      {
        path: 'spider',
        name: 'spider',
        props: { default: true },
        component: Spider
      },
      {
        path: 'wappalyzer',
        name: 'wappalyzer',
        props: { default: true },
        component: Wappalyzer
      }
    ]
  },
  {
    path: '*',
    redirect: '/ctfs'
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
