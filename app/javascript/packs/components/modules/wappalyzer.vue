<template>
  <div class="wappalyzer">
    <div class="row wappalyzer-card">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            Technologies
          </div>
          <div class="card-block">
            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Reference</th>
                  <th>Category</th>
                  <th>Confidence</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="result in results">
                  <th scope="row">{{result.name}}</th>
                  <td><a target="_blank" :href="result.website">{{result.website}}</a></td>
                  <td>{{result.category}}</td>
                  <td>{{result.confidence}}%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <button
          class="btn btn-primary"
          :disabled="loading"
          @click="handleRunClick">
          Run
        </button>
      </div>
      <div class="col-md-12">
        <loading v-if="loading"/>
        <errors v-if="hasStatus('failed')"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex'
import Errors from '../shared/errors.vue'
import Loading from '../shared/loading.vue'

export default {
  props: {
    ctfId: {
      type: [String, Number],
      require: true
    },
    challengeId: {
      type: [String, Number],
      require: true
    }
  },
  components: {
    Errors,
    Loading
  },
  computed: {
    ...mapState('wappalyzer', [
      'errors'
    ]),
    ...mapGetters('wappalyzer', [
      'hasStatus',
      'loading',
      'results'
    ])
  },
  methods: {
    ...mapActions('wappalyzer', [
      'fetch',
      'run'
    ]),
    handleRunClick () {
      const { ctfId, challengeId } = this
      this.run({ ctfId, challengeId })
    },
    fetchData () {
      const { ctfId, challengeId } = this
      this.fetch({ ctfId, challengeId })
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
.wappalyzer-card {
  margin-bottom: 15px;
}
</style>
