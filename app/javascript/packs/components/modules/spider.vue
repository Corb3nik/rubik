<template>
  <div class="spider">
    <div class="row">
      <div class="col-md-12">
        <template v-for="(links, category) in linksByCategory">
          <div class="card spider-category">
            <div class="card-header">
              {{ category }}
            </div>
            <div class="card-block">
              <ul>
                <li v-for="link in links">
                  <a target="_blank" :href="link.url">{{ urlToPath(link.url) }}</a>
                </li>
              </ul>
            </div>
          </div>
        </template>
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
        <div class="col-md-12">
          <loading v-if="loading"/>
          <errors v-if="hasStatus('failed')"/>
        </div>
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
    ...mapState('spider', [
      'errors'
    ]),
    ...mapGetters('spider', [
      'hasStatus',
      'loading',
      'jsLinks',
      'cssLinks',
      'htmlLinks',
      'miscLinks'
    ]),
    linksByCategory () {
      return {
        'HTML': this.htmlLinks,
        'JavaScript': this.jsLinks,
        'CSS': this.cssLinks,
        'Misc': this.miscLinks
      }
    }
  },
  methods: {
    ...mapActions('spider', [
      'fetch',
      'run'
    ]),
    urlToPath (url) {
      return (new URL(url)).pathname
    },
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
.spider-category {
  margin-bottom: 15px;
}
</style>
