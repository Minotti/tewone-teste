import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import BlockUI from 'vue-blockui'
import VueSimpleAlert from 'vue-simple-alert'

const token = localStorage.getItem('token')

Vue.use(BlockUI)
Vue.use(VueSimpleAlert)

// axios.defaults.baseURL = 'http://178.128.177.134:8000/'
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://178.128.177.134:8000/' : 'http://127.0.0.1:8000/'
Vue.prototype.$http = axios

if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
