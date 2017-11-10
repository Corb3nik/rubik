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
    fetchChallengeIfNeeded ({ dispatch, state }, { ctfId, challengeId }) {
      if (challengeId == get(state, 'challenge.id')) return
      return dispatch('fetchChallenge', { ctfId, challengeId })
    },
    fetchChallenge ({ commit }, { ctfId, challengeId }) {
      commit('setup', { status: 'fetching' })
      return api.fetchChallenge(ctfId, challengeId)
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
