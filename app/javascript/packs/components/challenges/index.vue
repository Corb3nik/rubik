<template>
  <div class="row">
    <div class="col-md-4">
      <h1>Challenges</h1>
      <challenge-list></challenge-list>
    </div>
    <ChallengeForm></ChallengeForm>
  </div>
</template>

<script>
import ChallengeList from './_list.vue'
import ChallengeForm from './_form.vue'

export default {
  components: {
    ChallengeList,
    ChallengeForm
  }
}
</script>

<style>
</style>
