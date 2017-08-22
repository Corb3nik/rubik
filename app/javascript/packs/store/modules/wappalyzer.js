import { get } from 'lodash'
import * as api from '../../api/wappalyzer.js'

export default {
  namespaced: true,
  state: {
    collection: [],
    status: 'idle'
  },
  mutations: {
    setup (state, payload) {
      state = Object.assign(state, payload)
    }
  },
  actions: {
    fetch ({ commit }, { ctf_id, challenge_id }) {
      commit('setup', { status: 'fetching' })
      return api.fetch(ctf_id, challenge_id)
        .then(response => {
          const collection = response.data
          commit('setup', { status: 'succeeded', collection })
          return collection
        })
        .catch((error) => {
          commit('setup', { status: 'failed' })
        })
    },
    run ({ commit }, { ctf_id, challenge_id }) {
      commit('setup', { collection: [] })
      commit('setup', { status: 'running' })
      return api.run(ctf_id, challenge_id)
        .then(response => {
          const collection = response.data
          commit('setup', { status: 'succeeded', collection })
          return collection
        })
        .catch((error) => {
          commit('setup', { status: 'failed' })
        })
    }
  },
  getters: {
    loading (state) {
      return ['fetching', 'running'].includes(state.status)
    },
    hasStatus: (state) => (status) => {
      return state.status === status
    },
    results: state => state.collection
  }
}
