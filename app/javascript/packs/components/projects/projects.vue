<template>
  <div class="row">

    <!-- Sidebar -->
    <div class="col-md-4">
      <sidebar :projects="projects"/>
    </div>

    <!-- Create project -->
    <div class="col-md-2"></div>
    <div class="col-md-4">
      <div class="projects-list">
        <h1>Projects</h1>
        <loading v-if="loading" />
        <errors v-if="has_errors" :errors="errors"/>
        <form v-on:submit.prevent="on_submit">
            <input class="form-control" type="text" v-model="name" name="name" placeholder="Project Name">
            <input class="form-control" type="text" v-model="root" name="root" placeholder="Root URL">
          <input class="btn btn-primary" type="submit" value="Create project">
        </form>
      </div>
    </div>
    <div class="col-md-2"></div>
  </div>

</template>

<script>
import VueRouter from 'vue-router'
import Sidebar from './sidebar.vue'
import * as api from '../../api/projects.js'
import Errors from '../shared/errors.vue'
import Loading from '../shared/loading.vue'

export default {
  name: 'projects',

  components: {
    Errors,
    Loading,
    Sidebar
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
          router.push({ name: 'projects', params: { id: project.id }})
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
