export default {
  setToken: (token) => {
    window.localStorage.setItem('cToken', JSON.stringify(token))
  },
  getToken: () => {
    return JSON.parse(window.localStorage.getItem('cToken'))
  },
  clearToken: () => {
    window.localStorage.removeItem('cToken')
  },
  isLoggedIn: () => {
    return !!Window.localStorage.getItem('cToken')
  }
}