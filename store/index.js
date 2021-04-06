import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: function () {
      return {
        message: 'hello vuex'
      }
    }
  })
}

export default createStore
