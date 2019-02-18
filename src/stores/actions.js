import router from '../router'

export default {
  setUserSession ({commit}, userSession) {
    commit('setUserSession', userSession)
  },
  setUserLocationId ({commit}, userLocationId) {
    commit('setUserLocationId', userLocationId)
  },
  setToken ({commit}, token) {
    commit('setToken', token)
  },
  setUser ({commit}, user) {
    commit('setUser', user)
    router.push('/home')
  },
  mountedPost ({commit}, mtdPost) {
    // debugger
    commit('mountedPost', mtdPost)
    router.push('/menu')
  },
  foodMountedPost ({commit}, foodPost) {
    // debugger
    commit('foodMountedPost', foodPost)
    router.push('/foodlogs')
  },
  updateFoodLogs ({commit}, update) {
    // debugger
    commit('updateFoodLogs', update)
    router.push('/menuform')
  },
  addMenuPost ({commit}, addPost) {
    commit('addMenuPost', addPost)
    router.push('/menu')
  },
  addFoodLogPost ({commit}, addFoodLog) {
    commit('addFoodLogPost', addFoodLog)
    router.push('/foodlogs')
  },
  fetchAccessToken ({commit}) {
    commit('updateAccessToken', localStorage.getItem('token'))
  },
  logout ({commit}) {
    localStorage.removeItem('token')
    commit('logout')
    router.push('/')
  }
}
