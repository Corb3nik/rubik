<template>
  <div>
    <loading v-if="has_status('fetching')" />
    <errors v-else-if="has_status('failed')" :errors="errors"/>
    <b-list-group>
      <b-list-group-item
        v-for="ctf in ctfs"
        :to="ctfToLink(ctf)"
        :key="ctf.id">
        {{ ctf.name }}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import * as api from '../../api/ctfs.js'
import Errors from '../shared/errors.vue'
import Loading from '../shared/loading.vue'

export default {
  components: {
    Errors,
    Loading
  },
  data () {
    return {
      ctfs: [],
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
    ctfToLink: function (ctf) {
      return `ctfs/${ctf.id}`
    },
    fetchData () {
      this.status = 'fetching'
      api.fetch_ctfs()
        .then(response => {
          this.status = 'succeeded'
          this.ctfs = response.data
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
