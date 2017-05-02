import Vue from 'vue'
import VueRouter from 'vue-router'
import ProjectShow from './components/projects/show.vue'
import ProjectIndex from './components/projects/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'projects',
    component: ProjectIndex
  },
  {
    path: '/projects/:id/',
    name: 'project',
    component: ProjectShow,
    props: true
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
