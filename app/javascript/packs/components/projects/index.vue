<template>
  <div class="row">
    <div class="col-md-4">
      <h1>Projects</h1>
      <project-list></project-list>
    </div>
    <ProjectForm></ProjectForm>
  </div>
</template>

<script>
import ProjectList from './_list.vue'
import ProjectForm from './_form.vue'

export default {
  components: {
    ProjectList,
    ProjectForm
  }
}
</script>

<style>
</style>
