import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
    auth_success (state, token) {
      state.token = token
    },
    auth_error (state) {
      state.token = ''
    },
    logout (state) {
      state.token = ''
    },
    unauthenticated (state) {
      state.token = ''
    }
  },
  actions: {
    LOGIN_USER (state, payload) {
      return new Promise((resolve, reject) => {
        axios.post('api/login', payload, { headers: { 'Content-Type': 'application/json' } })
          .then(resp => {
            const token = resp.data.access_token
            localStorage.setItem('token', token)
            Vue.prototype.$http.defaults.headers.common['Authorization'] = `Bearer ${token}`
            state.commit('auth_success', token)
            resolve(resp)
          })
          .catch(err => {
            localStorage.removeItem('token')
            state.commit('auth_error')
            reject(err)
          })
      })
    },
    LOGOUT_USER (state) {
      return new Promise((resolve, reject) => {
        axios.get('api/logout', { headers: { 'Content-Type': 'application/json' } })
          .then(resp => {
            state.commit('logout')
            localStorage.removeItem('token')
            delete Vue.prototype.$http.defaults.headers.common['Authorization']
            resolve(resp)
          })
      })
    },
    UNAUTHENTICATED_USER (state) {
      localStorage.removeItem('token')
      state.commit('unauthenticated')
      delete Vue.prototype.$http.defaults.headers.common['Authorization']
    }
  }
})
