<template>
  <div class="projects-list-item">
    <h3>{{project.name}}</h3>
    <div>
      Root: <a :href="project.root">{{project.root}}</a>
    </div>
    <router-link :to="{ name: 'project', params: { id: 123 }}">View project</router-link>
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
