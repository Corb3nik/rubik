<template>
  <div class="project">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <project-sidebar></project-sidebar>
        </div>
        <div class="col-md-9">
          Main page
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectSidebar from './project-sidebar.vue'
export default {
  name: 'project',
  props: {
    id: { type: Number, require: true }
  },
  components: {
    ProjectSidebar
  }
}
</script>

<style>
</style>
