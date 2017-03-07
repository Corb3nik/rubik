<template>
  <div class="projects-list">
    <h1>Projects</h1>
    <form v-on:submit.prevent="on_submit">
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="name" name="name" placeholder="Ex: CTF xyz">
      </div>
      <div>
        <label for="root">Root:</label>
        <input type="text" v-model="root" name="root" placeholder="Ex: http://ctf-xyz.com:3000/challenges-2">
      </div>
      <input type="submit" name="Create project">
    </form>
  </div>
</template>

<script>

import { create_project } from '../api/projects.js'

export default {
  name: 'projects',

  data () {
    return {
      projects: [
        {name: 'test name', root: 'test root'}
      ],
      name: '',
      root: ''
    }
  },

  computed: {},

  methods: {
    on_submit (event) {
      let {name, root} = this
      create_project({name, root})
    }
  }
}
</script>

<style scoped>
input[type=text] {
  width: 300px;
}

input{
  margin: 5px;
}
</style>
