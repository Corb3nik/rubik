<template>
  <div>
    <loading v-if="hasStatus('fetching')"/>
    <errors v-if="hasStatus('failed')"/>
    <template v-if="hasStatus('succeeded')">
      <div class="row">
        <div class="col-md-12">
          <h1>{{ ctf.name }}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <h2>Challenges</h2>
          <challenge-list></challenge-list>
        </div>
        <div class="col-md-4">
          <challenge-form></challenge-form>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex'
import { get } from 'lodash'
import Errors from '../shared/errors.vue'
import Loading from '../shared/loading.vue'
import ChallengeList from '../challenges/_list.vue'
import ChallengeForm from '../challenges/_form.vue'

export default {
  props: {
    ctf_id: { type: [String, Number], require: true }
  },
  components: {
    Errors,
    Loading,
    ChallengeList,
    ChallengeForm
  },
  computed: {
    ...mapState('ctf', [
      'ctf',
      'status'
    ]),
    ...mapGetters('ctf', [
      'hasStatus'
    ])
  },
  methods: {
    ...mapActions('ctf', [
      'fetch_ctf'
    ]),
    fetchData () {
      if (this.ctf_id === get(this, 'ctf.id')) return
      this.fetch_ctf(this.ctf_id)
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  }
}
</script>

<style>
.module-btn {
  margin-bottom: 2%;
  width: 100%;
}
</style>
