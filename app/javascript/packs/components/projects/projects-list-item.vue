<template>
  <div class="project">
    <router-link :to="{ name: 'project', params: { id: project.id }}">{{project.name}}</router-link>
  </div>
</template>

<script>
  export default {
    name: 'projects-list-item',
    props: {
      project: { type: Object, default: () => {} }
    }
  }
</script>

<style scoped>
</style>
