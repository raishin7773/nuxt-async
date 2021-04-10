export const state = () => ({
  message: 'hello'
})

export const mutations = {
  updateMessage: function (state, payload) {
    state.message = payload
  }
}

export const actions = {
  updateMessageAction(context, payload) {
    context.commit('updateMessage', payload)
  }
}
