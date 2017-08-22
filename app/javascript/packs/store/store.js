import Vue from 'vue'
import Vuex from 'vuex'
import ctf from './modules/ctf'
import ctfs from './modules/ctfs'
import ctfForm from './modules/ctf-form'
import challengeForm from './modules/challenge-form'
import dirb from './modules/dirb'
import spider from './modules/spider'
import wappalyzer from './modules/wappalyzer'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ctf,
    ctfs,
    ctfForm,
    challengeForm,
    dirb,
    spider,
    wappalyzer
  }
})
