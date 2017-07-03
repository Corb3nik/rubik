import Vue from 'vue'
import VueRouter from 'vue-router'
import ProjectShow from './components/projects/show.vue'
import ProjectIndex from './components/projects/index.vue'
import Dashboard from './components/modules/dashboard.vue'
import Dirb from './components/modules/dirb.vue'
import Spider from './components/modules/spider.vue'
import Wappalyzer from './components/modules/wappalyzer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'projects' }
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectIndex
  },
  {
    path: '/projects/:id/',
    name: 'project',
    component: ProjectShow,
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
    redirect: '/projects'
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
