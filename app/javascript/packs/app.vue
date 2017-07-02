<template>
  <div class="app">
    <nav-bar></nav-bar>
    <div class="container app-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import NavBar from './components/shared/nav-bar.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
// import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Globally register components
Vue.use(BootstrapVue);

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
.app-content {
  margin-top: 1em;
  margin-bottom: 1em;
}
</style>
