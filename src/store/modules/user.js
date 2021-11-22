
const state = {
  id: '',
  username: '',
  token: ''
}

const mutations = {
  login: (state, data) => {
    state.id = data.message.id
    state.username = data.message.username
    state.token = data.token
  }
}

const actions = {
  login: (context, products) => {
    context.commit('login', products)
  }
}

export default {
  state,
  mutations,
  actions
}
