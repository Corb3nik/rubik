<template>
  <div>
    <loading v-if="has_status('fetching')" />
    <errors v-else-if="has_status('failed')" :errors="errors"/>
    <b-list-group>
      <b-list-group-item
        v-for="project in projects"
        :to="projectToLink(project)"
        :key="project.id">
        {{ project.name }}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import * as api from '../../api/projects.js'
import Errors from '../shared/errors.vue'
import Loading from '../shared/loading.vue'

export default {
  components: {
    Errors,
    Loading
  },
  data () {
    return {
      projects: [],
      errors: null,
      status: 'idle' // idle, fetching, succeeded, failed
    }
  },
  computed: {
    has_status: function (status) {
      return (status) => {
        return this.status === status
      }
    }
  },
  methods: {
    projectToLink: function (project) {
      return `projects/${project.id}`
    },
    fetchData () {
      this.status = 'fetching'
      api.fetch_projects()
        .then(response => {
          this.status = 'succeeded'
          this.projects = response.data
        })
        .catch((error) => {
          this.status = 'failed'
          if (error.response) {
            let contentType = error.response.headers['content-type']
            if (contentType.indexOf('application/json') != -1) {
              this.errors = error.response.data
            }
          }
        })
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    // Call again the method if the route changes.
    '$route': 'fetchData'
  }
}
</script>

<style>
</style>
