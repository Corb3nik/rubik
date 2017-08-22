import Vue from 'vue'
import Vuex from 'vuex'
import ctfs from './modules/ctfs'
import ctfForm from './modules/ctf-form'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ctfs,
    ctfForm
  }
})
