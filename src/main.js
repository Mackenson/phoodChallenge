// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import BootstrapVue from 'bootstrap-vue'
import store from '@/store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Datetime from 'vue-datetime'
import {ClientTable} from 'vue-tables-2'

// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
// import 'vuetify/dist/vuetify.min.css'

Vue.use(Datetime)

library.add(faUserSecret)

Vue.config.productionTip = false
Vue.use(ClientTable)

Vue.use(require('vue-moment'))
Vue.use(BootstrapVue)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
