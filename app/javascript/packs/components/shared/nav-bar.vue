<template>
  <b-navbar
    toggleable
    variant="inverse"
    type="inverse">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-link class="navbar-brand" to="/">
      <span>Rubik</span>
    </b-link>

    <b-collapse is-nav id="nav_collapse">
      <b-nav is-nav-bar>
        <b-nav-item>
          <!-- TODO find the bug why it trigger a render error when passing the `to` props to <b-nav-item> -->
          <router-link :to="{ name: 'challenges' }">
            Projects
          </router-link>
        </b-nav-item>
      </b-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


export default {
  name: 'nav-bar'
}
</script>

<style lang="scss">

</style>
