import Vue from 'vue'
import VueRouter from 'vue-router'
import projects from './components/projects.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: projects
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
