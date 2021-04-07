import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: function () {
      return {
        message: 'hello vuex'
      }
    },
    mutations: {
      updateMessage: function (state) {
        state.message = "update!"
      }
    }
  })
}

export default createStore
