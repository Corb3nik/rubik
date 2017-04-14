<template>
  <b-list-group>
    <b-list-group-item
      v-for="project in projects"
      :project="project"
      :to="{ name: 'project', params: { id: project.id } }"
      :key="project.key">
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
  }
}
</script>

<style>
</style>
