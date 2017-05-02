<template>
  <div class="project">
      <div class="row">
        <div class="col-md-3">
          <b-button class="module-btn" @click="currentView = 'dashboard'">
            Dashboard
          </b-button>
          <div class="module-list" v-for="module in modules">
            <b-button class="module-btn" @click="currentView = module.slug">
              {{module.name}}
            </b-button>
          </div>
        </div>

        <div class="col-md-9">
          <div class="current-module">
            <component :is="currentView"></component>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Dashboard from '../modules/dashboard.vue'
import Dirb from '../modules/dirb.vue'
import Spider from '../modules/spider.vue'
import * as api from '../../api/modules.js'

export default {
  props: {
    id: { type: String, require: true },
  },

  components: {
    Dashboard,
    Dirb,
    Spider
  },

  data () {
    return {
      modules: [],
      currentView: "dashboard"
    }
  },

  created () {
    api.fetch_modules()
      .then(response => {
        this.modules = response.data.modules
      })
  }
}
</script>

<style>
  .module-btn { margin-bottom: 2%; width: 100%; }
</style>
