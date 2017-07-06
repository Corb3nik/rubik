<template>
  <div class="row">
    <div class="col-md-4">
      <h1>CTFs</h1>
      <CTFList></CTFList>
    </div>
    <CTFForm></CTFForm>
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
