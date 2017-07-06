<template>
  <div class="challenge">
    <ChallengeIndex :ctf_id="id"></ChallengeIndex>
  </div>
</template>

<script>
import ChallengeIndex from '../challenges/index.vue'

export default {
  props: {
    id: { type: [String, Number], require: true },
  },

  components: {
    ChallengeIndex,
  }
}
</script>

<style>
.module-btn {
  margin-bottom: 2%;
  width: 100%;
}
</style>
