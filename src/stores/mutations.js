
export default {
  setUserSession (state, userSession) {
    state.userSession = userSession
  },
  setUserLocationId (state, userLocationId) {
    state.userLocationId = userLocationId
  },
  setToken (state, token) {
    state.token = token
    state.isUserLoggedIn = !!(token)
  },
  setUser (state, user) {
    state.user = user
  },
  mountedPost (state, mtdPost) {
    state.mtdPost = mtdPost
  },
  foodMountedPost (state, foodPost) {
    state.foodPost = foodPost
  },
  updateFoodLogs (state, update) {
    state.update = update
  },
  addMenuPost (state, addPost) {
    state.addPost = addPost
  },
  addFoodLogPost (state, addFoodLog) {
    state.addFoodLog = addFoodLog
  },
  updateAccessToken: (state, token) => {
    state.token = token
  },
  logout: (state) => {
    state.token = null
  }
}
