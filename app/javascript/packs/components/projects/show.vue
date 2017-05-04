<template>
  <div class="project">
      <div class="row">
        <div class="col-md-3">
          <div class="module-list" v-for="module in modules">
            <router-link
              tag="button"
              class="module-btn btn btn-secondary btn-md"
              active-class="active"
              :to="{ name: module, params: { id } }">
              {{ module }}
            </router-link>
          </div>
        </div>

        <div class="col-md-9">
          <div class="current-module">
            <router-view></router-view>
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
  data () {
    return {
      modules: [
        'dashboard',
        'dirb',
        'spider'
      ]
    }
  }
}
</script>

<style>
.module-btn {
  margin-bottom: 2%;
  width: 100%;
}
</style>
