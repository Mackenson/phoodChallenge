import Api from '../api'

export default {
  index (post) {
    return Api().get('foodLogs/getLocationFoodLogs', {
      params: post
    })
  },
  addFoodLogPost (post) {
    return Api().post('foodLogs/addFoodLog', post)
  },
  delete (postId) {
    return Api().delete(`foodLogs/deleteFoodLog?id=${postId}`)
  },
  put (post) {
    return Api().put(`foodLogs/updateFoodLog`, post)
  }
}
