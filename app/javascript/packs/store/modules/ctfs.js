import * as api from '../../api/ctfs'

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
    fetch_ctfs ({ commit }, ) {
      commit('setup', { status: 'fetching' })
      return api.fetch_ctfs()
        .then(response => {
          commit('setup', { status: 'succeeded', collection: response.data })
        })
        .catch((error) => {
          commit('setup', { status: 'failed' })
        })
    }
  },
  getters: {
    has_status: (state) => (status) => {
      return state.status === status
    },
    ctfs: state => state.collection
  }
}