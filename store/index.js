import axios from 'axios'
import qs from 'qs';
import auth from './auth.js'
export const state = () => ({
  cToken: null
})

export const mutations = {
  SET_USER: (state, cToken) => {
    state.cToken = cToken
  },
  REFRES: (state) => {
    state.cToken = auth.isLoggedIn() ? auth.getToken() : null
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit }, { req }) {
    if (req.session && req.session.cToken) {
      commit('SET_USER', req.session.cToken)
    }
  },
  async login ({ commit }, { username, password }) {
    try {
      const { data } = await axios.post('/api/login/form', qs.stringify({ username, password }))
      auth.setToken(data.sessionId)
      commit('SET_USER', data.sessionId)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async logout ({ commit }) {
    auth.clearToken()
    commit('SET_USER', null)
  },

  async getSessionId ({ commit }) {
    return auth.getToken()
  }

}