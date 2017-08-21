import Vue from 'vue'
import Vuex from 'vuex'
import ctfs from './modules/ctfs'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ctfs
  }
})
