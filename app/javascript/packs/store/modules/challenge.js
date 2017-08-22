import { get } from 'lodash'
import * as api from '../../api/challenges'

export default {
  namespaced: true,
  state: {
    challenge: null,
    status: 'idle'
  },
  mutations: {
    setup (state, payload) {
      state = Object.assign(state, payload)
    }
  },
  actions: {
    fetchChallenge ({ commit }, { ctf_id, challenge_id }) {
      commit('setup', { status: 'fetching' })
      return api.fetch_challenge(ctf_id, challenge_id)
        .then(response => {
          const challenge = response.data
          commit('setup', { status: 'succeeded', challenge })
          return challenge
        })
        .catch((error) => {
          commit('setup', { status: 'failed' })
        })
    }
  },
  getters: {
    hasStatus: (state) => (status) => {
      return state.status === status
    }
  }
}
