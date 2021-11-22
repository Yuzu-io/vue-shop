// import Cookie from 'js-cookie'
export function setLocalStorage (Tokenkey, token) {
  return window.localStorage.setItem(Tokenkey, token)
}

export function getLocalStorage (Tokenkey) {
  return window.localStorage.getItem(Tokenkey)
}

export function revomLocalStorage (Tokenkey) {
  return window.localStorage.removeItem(Tokenkey)
}
