import Vue from 'vue'
import VueRouter from 'vue-router'
import projects from './components/projects/projects.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'projects',
    component: projects
  },
  {
    path: '/projects/:id',
    name: 'project',
    component: projects,
    props: true
  }

]

export default new VueRouter({
  mode: 'history',
  routes
})
