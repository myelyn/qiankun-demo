import { createStore } from 'vuex'

const tokenPlugin = (store) => {
  let token = localStorage.getItem('master-token')
  if (token) {
    store.commit('setToken', token)
  }
}

export default createStore({
  state: {
    token: ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem('master-token', token)
    },
    loginOut(state) {
      state.token = ''
      localStorage.removeItem('master-token')
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [tokenPlugin]
})