
import axios from 'axios'
import store from './store'

export default () => {
  return axios.create({
    baseURL: 'https://api.test.phoodsolutions.com/',
    data: {},
    headers: {
      Authorization: `${store.state.userSession}`,
      'content-Type': `application/json; charset=utf-8`
    }
  })
}
