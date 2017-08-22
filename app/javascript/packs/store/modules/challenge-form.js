import { set, pick, isEmpty } from 'lodash'
import * as api from '../../api/challenges'

const attribute_properties = [
  'name', 'root'
]

const default_state = {
  id: null,
  name: '',
  root: '',
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
    save ({ getters, dispatch }, ctfId) {
      return dispatch(getters.action, ctfId)
    },
    create ({ commit, getters }, ctfId) {
      commit('setup', { status: 'creating' })
      return api.create_challenge(ctfId, getters.attributes)
      .then(response => {
        const challenge = response.data
        commit('setup', { status: 'succeeded' })
        commit('challenge/setup', { challenge }, { root: true })
        return challenge
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
    update ({ getters }, ctfId) {
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
