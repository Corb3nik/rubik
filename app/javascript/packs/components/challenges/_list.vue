<template>
  <div>
    <loading v-if="has_status('fetching')" />
    <errors v-else-if="has_status('failed')" :errors="errors"/>
    <b-list-group>
      <b-list-group-item
        v-for="challenge in challenges"
        :to="challengeToLink(ctf_id, challenge)"
        :key="challenge.id">
        {{ challenge.name }}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import * as api from '../../api/challenges.js'
import Errors from '../shared/errors.vue'
import Loading from '../shared/loading.vue'

export default {
  props: {
      ctf_id: { type: [String, Number], require: true }
  },
  components: {
    Errors,
    Loading
  },
  data () {
    return {
      challenges: [],
      errors: null,
      status: 'idle' // idle, fetching, succeeded, failed
    }
  },
  computed: {
    has_status: function (status) {
      return (status) => {
        return this.status === status
      }
    }
  },
  methods: {
    challengeToLink: function (ctf_id, challenge) {
      return `${ctf_id}/challenges/${challenge.id}`
    },
    fetchData () {
      this.status = 'fetching'
      api.fetch_challenges(this.ctf_id)
        .then(response => {
          this.status = 'succeeded'
          this.challenges = response.data
        })
        .catch((error) => {
          this.status = 'failed'
          if (error.response) {
            let contentType = error.response.headers['content-type']
            if (contentType.indexOf('application/json') != -1) {
              this.errors = error.response.data
            }
          }
        })
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    // Call again the method if the route changes.
    '$route': 'fetchData'
  }
}
</script>

<style>
</style>
