<template>
  <div class="project-sidebar">
    <b-list-group>
      <b-list-group-item
        v-for="module in modules"
        :module="module"
        :to="{ name: 'project', params: { id: module.slug } }" class="list-group-item-info">
        {{ module.name }}
      </b-list-group-item>
    </b-list-group>
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
    }
  }
}
</script>

<style>
</style>
