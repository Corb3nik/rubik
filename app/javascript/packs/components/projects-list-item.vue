<template>
  <div class="project">
    <h3 class="">{{project.name}}</h3>
    <div>
      Root: <a :href="project.root">{{project.root}}</a>
    </div>
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
