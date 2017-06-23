<template>
  <div class="row">
    <div class="col-md-4">
      <h1>Projects</h1>
      <project-list :projects="projects"></project-list>
    </div>
    <ProjectForm></ProjectForm>
  </div>
</template>

<script>
import VueRouter from 'vue-router'
import * as api from '../../api/projects.js'
import ProjectList from './_list.vue'
import ProjectForm from './_form.vue'

export default {
  components: {
    ProjectList,
    ProjectForm
  },
  data () {
    return {
      projects: [],
      name: '',
      root: '',
      has_errors: false,
      errors: null,
      loading: false
    }
  },
  computed: {},
  methods: {},
  created () {
    this.loading = true
    api.fetch_projects()
      .then(response => {
        this.loading = false
        this.projects = response.data
      })
  }
}
</script>

<style>
</style>
