<template>
  <div class="panel panel-default">
    <div class="panel-heading">Projects</div>
    <div class="panel-body">
        <projects-list-item v-for="project in projects" :project="project">
        </projects-list-item>
    </div>
  </div>
</template>

<script>
import ProjectsListItem from './projects-list-item.vue'

export default {
  name: 'sidebar',

  components: {
    ProjectsListItem
  },

  props: {
    projects: {
      type: Array
    }
  }
}

</script>

<style>
</style>
