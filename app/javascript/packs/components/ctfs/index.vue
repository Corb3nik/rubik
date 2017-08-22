<template>
  <div class="row">
    <div class="col-md-4">
      <h1>CTFs</h1>
      <ctf-list></ctf-list>
    </div>
    <ctf-form></ctf-form>
  </div>
</template>

<script>
import CTFList from './_list.vue'
import CTFForm from './_form.vue'

export default {
  components: {
    CTFList,
    CTFForm
  }
}
</script>

<style>
</style>
