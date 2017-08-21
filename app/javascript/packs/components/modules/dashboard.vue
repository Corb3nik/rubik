<template>
  <div class="dashboard">
    We're in the dashboard!
  </div>
</template>

<script>
export default {
  props: {
    ctf_id: { type: [String, Number], require: true },
    challenge_id: { type: [String, Number], require: true }
  }
}
</script>

<style>
</style>
