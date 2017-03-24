<template>
  <div class="row">

    <div class="col-md-4">
      <h1>Projects</h1>
      <projects-list :projects="projects"></projects-list>
    </div>

    <div class="col-md-4 offset-md-2">
        <h2>New Project</h2>
        <loading v-if="loading" />
        <errors v-if="has_errors" :errors="errors"/>
        <form v-on:submit.prevent="on_submit">
          <b-form-input
            class="form-control"
            type="text"
            v-model="name"
            name="name"
            placeholder="Project Name">
          </b-form-input>
          <b-form-input
            class="form-control"
            type="text"
            v-model="root"
            name="root"
            placeholder="Root URL">
          </b-form-input>
          <!-- TODO find submit button -->
          <input
            class="btn btn-primary"
            type="submit"
            value="Create project">
        </form>
    </div>

  </div>
</template>

<script>
import VueRouter from 'vue-router'
import ProjectsList from './projects-list.vue'
import * as api from '../../api/projects.js'
import Errors from '../shared/errors.vue'
import Loading from '../shared/loading.vue'

export default {
  name: 'projects',

  components: {
    Errors,
    Loading,
    ProjectsList
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

  methods: {
    on_submit (event) {
      if (this.loading) return
      let {name, root} = this
      this.loading = true
      this.has_errors = false
      api.create_project({name, root})
        .then(response => response.data)
        .then(project => {
          router.push({ name: 'project', params: { id: project.id }})
        })
        .catch((error) => {
          this.has_errors = true
          if (error.response) {
            this.errors = error.response.data
          }
        })
        .then(() => this.loading = false)
    }
  },

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

<style scoped>
input[type=text] {
  width: 300px;
}

input{
  margin: 5px;
}
</style>
