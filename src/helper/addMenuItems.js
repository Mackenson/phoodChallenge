import Api from '../api'

export default {
  index (post) {
    return Api().get('menuItems/getLocationMenu', {
      params: post
    })
  },
  addMenuPost (post) {
    return Api().post('menuItems/addMenuItems', post)
  },
  delete (postId) {
    return Api().delete(`menuItems/deleteMenuItem?id=${postId}`)
  },
  put (post) {
    return Api().put('menuItems/updateMenuItems', post)
  }
}
