<template>
  <div class="dashboard">
    We're in the dashboard!
  </div>
</template>

<script>
export default {
  props: {
    ctfId: { type: [String, Number], require: true },
    challengeId: { type: [String, Number], require: true }
  }
}
</script>

<style>
</style>
