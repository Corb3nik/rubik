<template>
  <b-list-group>
    <b-list-group-item
      v-for="project in projects"
      :to="projectToLink(project)"
      :key="project.id">
        {{ project.name }}
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'projects-list',
  props: {
    projects: {
      type: Array
    }
  },
  methods: {
    projectToLink: function (project) {
      return "projects/" + project.id
    }
  }
}
</script>

<style>
</style>
