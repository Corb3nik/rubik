<template>
  <div class="challenge">
    <router-view></router-view>
  </div>
</template>

<script>
import ChallengeIndex from '../challenges/index.vue'

export default {
  props: {
    ctf_id: { type: [String, Number], require: true }
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
