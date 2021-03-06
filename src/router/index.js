import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Home from '@/components/Home'
import Login from '@/components/Login'
import AddMenuItems from '@/components/addMenuItems'
import AddMenuItemForm from '@/components/addMenuItemForm'
import AddFoodLogForm from '@/components/FoodLogForm'
import FoodLog from '@/components/FoodLog'

import store from '../store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/menu',
      name: 'addMenuItems',
      component: AddMenuItems
    },
    {
      path: '/menuform',
      name: 'MenuItems',
      component: AddMenuItemForm
    },
    {
      path: '/foodlogform',
      name: 'foodLogs',
      component: AddFoodLogForm
    },
    {
      path: '/foodlogs',
      name: 'foodlogs',
      component: FoodLog
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('this is store from route', store.state.accessoken)
  store.dispatch('fetchAccessToken')
  if (to.path !== '/' && !store.state.token) {
    next('/')
  } else {
    next()
  }
})

export default router
