<template>
  <div class="project">
      <div class="row">
        <div class="col-md-3">
          <project-sidebar :projectId="id" :modules="modules"></project-sidebar>
        </div>
        <div class="col-md-9">
          <p>Dashboard</p>
        </div>
      </div>
  </div>
</template>

<script>
import ProjectSidebar from './project-sidebar.vue'
import * as api from '../../api/modules.js'

export default {
  name: 'project',
  props: {
    id: { type: String, require: true },
    module: { type: String, require: false }
  },

  components: {
    ProjectSidebar
  },

  data () {
    return {
      modules: []
    }
  },

  created () {
    api.fetch_modules()
      .then(response => {
        this.modules = response.data.modules
      })
  }
}
</script>

<style>
</style>
