<template>
  <div class="projects-list">
    <h1>Projects</h1>
    <loading v-if="loading" />
    <errors v-if="has_errors" :errors="errors"/>
    <form v-on:submit.prevent="on_submit">
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="name" name="name" placeholder="Ex: CTF xyz">
      </div>
      <div>
        <label for="root">Root:</label>
        <input type="text" v-model="root" name="root" placeholder="Ex: http://ctf-xyz.com:3000/challenges-2">
      </div>
      <input type="submit" name="Create project">
    </form>
    <projects-list-item
      v-for="project in projects"
      :project="project">
    </projects-list-item>
  </div>
</template>

<script>
import VueRouter from 'vue-router'
import * as api from '../api/projects.js'
import ProjectsListItem from './projects-list-item.vue'
import Errors from './errors.vue'
import Loading from './loading.vue'

export default {
  name: 'projects',

  components: {
    ProjectsListItem,
    Errors,
    Loading
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
