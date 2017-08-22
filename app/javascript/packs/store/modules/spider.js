import { get } from 'lodash'
import * as api from '../../api/spider.js'

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
    fetch ({ commit }, { ctfId, challengeId }) {
      commit('setup', { status: 'fetching' })
      return api.fetch(ctfId, challengeId)
        .then(response => {
          const collection = response.data
          commit('setup', { status: 'succeeded', collection })
          return collection
        })
        .catch((error) => {
          commit('setup', { status: 'failed' })
        })
    },
    run ({ commit }, { ctfId, challengeId }) {
      commit('setup', { collection: [] })
      commit('setup', { status: 'running' })
      return api.run(ctfId, challengeId)
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
    links: state => state.collection,
    jsLinks (state, { links }) {
      return links.filter(link => link.content_type.includes('javascript'))
    },
    cssLinks (state, { links }) {
      return links.filter(link => link.content_type.includes('css'))
    },
    htmlLinks (state, { links }) {
      return links.filter(link => link.content_type.includes('html'))
    },
    miscLinks (state, { links }) {
      return links.filter(link => {
        return ['javascript', 'css', 'html'].every(contentType => {
          return !link.content_type.includes(contentType)
        })
      })
    }
  }
}
