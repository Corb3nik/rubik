import Vue from 'vue'
import VueRouter from 'vue-router'
import Project from './components/projects/project.vue'
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
    component: Project,
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
