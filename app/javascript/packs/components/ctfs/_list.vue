<template>
  <div>
    <loading v-if="hasStatus('fetching')"/>
    <errors v-if="hasStatus('failed')"/>
    <b-list-group>
      <b-list-group-item
        v-for="ctf in ctfs"
        :to="ctf_link(ctf)"
        :key="ctf.id">
        {{ ctf.name }}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import Errors from '../shared/errors.vue'
import Loading from '../shared/loading.vue'

export default {
  components: {
    Errors,
    Loading
  },
  computed: {
    ...mapGetters('ctfs', [
      'ctfs',
      'hasStatus'
    ])
  },
  methods: {
    ...mapActions('ctfs', [
      'fetchCtfs'
    ]),
    ctf_link: function (ctf) {
      return `/ctfs/${ctf.id}`
    },
    fetch_data () {
      this.fetchCtfs()
    }
  },
  created () {
    this.fetch_data()
  },
  watch: {
    '$route': 'fetch_data'
  }
}
</script>

<style>
</style>
