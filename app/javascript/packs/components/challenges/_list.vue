<template>
  <b-list-group>
    <b-list-group-item
      v-for="challenge in challenges"
      :to="challengeLink(challenge)"
      :key="challenge.id">
      {{ challenge.name }}
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState('ctf', [
      'ctf'
    ]),
    ...mapGetters('ctf', [
      'challenges'
    ])
  },
  methods: {
    challengeLink: function (challenge) {
      return `/ctfs/${this.ctf.id}/challenges/${challenge.id}`
    }
  }
}
</script>

<style>
</style>
