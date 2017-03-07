<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Rubik!'
    }
  }
}
</script>

<style scoped>
</style>
