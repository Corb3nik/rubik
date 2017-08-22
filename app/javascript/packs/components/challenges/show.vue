<template>
  <div class="challenge">
    <div class="row">
      <div class="col-md-12">
        <loading v-if="hasStatus('fetching')"/>
        <errors v-if="hasStatus('failed')"/>
        <template v-if="hasStatus('succeeded')">
          <h1>{{ challenge.name }}</h1>
        </template>
        </div>
    </div>

    <div class="row">
      <div class="col-md-3">
        <div class="module-list" v-for="module in modules">
          <router-link
            tag="button"
            class="module-btn btn btn-secondary btn-md"
            active-class="active"
            :to="moduleLink(module)">
            {{ module.name }}
          </router-link>
        </div>
      </div>

      <div class="col-md-9">
        <div class="current-module">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import Dashboard from '../modules/dashboard.vue'
import Dirb from '../modules/dirb.vue'
import Spider from '../modules/spider.vue'
import Wappalyzer from '../modules/wappalyzer.vue'
import Errors from '../shared/errors.vue'
import Loading from '../shared/loading.vue'
import * as api from '../../api/modules.js'

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
  data () {
    return {
      modules: [
        { name: "Dashboard", slug: "dashboard" },
        { name: "Directory Buster", slug: "dirb" },
        { name: "Spider", slug: "spider" },
        { name: "Wappalyzer", slug: "wappalyzer" },
      ]
    }
  },
  computed: {
    ...mapState('challenge', [
      'challenge'
    ]),
    ...mapGetters('challenge', [
      'hasStatus'
    ])
  },
  methods: {
    ...mapActions('challenge', [
      'fetchChallengeIfNeeded'
    ]),
    moduleLink (module) {
      return {
        name: module.slug,
        params: {
          ctfId: this.ctfId,
          challengeId: this.challengeId
        }
      }
    },
    fetchData () {
      const { ctfId, challengeId } = this
      this.fetchChallengeIfNeeded({ ctfId, challengeId })
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
