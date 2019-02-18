import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import actions from './stores/actions'
import mutations from './stores/mutations'
import getters from './stores/getters'
import state from './stores/state'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [
    createPersistedState()
  ],
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
})
