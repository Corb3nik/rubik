<template>
  <div class="project-sidebar">
    <div class="module-list" v-for="module in modules">
      <b-button class="module-btn"
        :to="{ name: 'project', params: { id: projectId, module: module.slug } }">
        {{ module.name }}
      </b-button>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'project-sidebar',
  props: {
    modules: {
      type: Array
    },
    projectId: {
      type: Number
    }
  }
}
</script>

<style>
.module-btn { margin-bottom: 2%; width: 100%; }
</style>
