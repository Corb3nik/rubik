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
    fetch_ctf ({ commit }, ctf_id) {
      commit('setup', { status: 'fetching' })
      return api.fetch_ctf(ctf_id)
        .then(response => {
          commit('setup', { status: 'succeeded', ctf: response.data })
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
