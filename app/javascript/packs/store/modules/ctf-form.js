import { set, pick, isEmpty } from 'lodash'
import * as api from '../../api/ctfs'

const attribute_properties = [
  'name'
]

const default_state = {
  id: null,
  name: '',
  status: 'idle',
  errors: null
}

export default {
  namespaced: true,
  state: {
    ...default_state
  },
  mutations: {
    setup (state, payload) {
      state = Object.assign(state, payload)
    },
    change (state, { name, value }) {
      set(state, name, value)
    },
    reset (state) {
      state = Object.assign(state, default_state)
    }
  },
  actions: {
    save ({ getters, dispatch }) {
      return dispatch(getters.action)
    },
    create ({ commit, getters }) {
      commit('setup', { status: 'creating' })
      return api.create_ctf(getters.attributes)
      .then(response => {
        const ctf = response.data
        commit('setup', { status: 'succeeded' })
        commit('ctf/setup', { ctf }, { root: true })
        return ctf
      })
      .catch((error) => {
        commit('setup', { status: 'failed' })
        if (error.response) {
          let contentType = error.response.headers['content-type']
          if (contentType.indexOf('application/json') != -1) {
            commit('setup', { errors: error.response.data })
          }
        }
      })
    },
    update () {
      throw 'Not implemented yet'
    }
  },
  getters: {
    action (state) {
      return isEmpty(state.id) ? 'create' : 'update'
    },
    attributes (state) {
      return pick(state, attribute_properties)
    },
    hasStatus: (state) => (status) => {
      return state.status === status
    }
  }
}
