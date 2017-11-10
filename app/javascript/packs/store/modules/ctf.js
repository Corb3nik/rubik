import { get } from 'lodash'
import * as api from '../../api/ctfs'

export default {
  namespaced: true,
  state: {
    ctf: null,
    status: 'idle'
  },
  mutations: {
    setup (state, payload) {
      state = Object.assign(state, payload)
    }
  },
  actions: {
    fetchCtf ({ commit }, ctfId) {
      commit('setup', { status: 'fetching' })
      return api.fetchCtf(ctfId)
        .then(response => {
          const ctf = response.data
          commit('setup', { status: 'succeeded', ctf })
          return ctf
        })
        .catch((error) => {
          commit('setup', { status: 'failed' })
        })
    }
  },
  getters: {
    hasStatus: (state) => (status) => {
      return state.status === status
    },
    challenges (state) {
      return get(state, 'ctf.challenges', [])
    }
  }
}
