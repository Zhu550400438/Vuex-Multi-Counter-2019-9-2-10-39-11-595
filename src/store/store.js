import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: []
  },
  getters: {
    getCounterByIndex: function (state) {
      return function (index) {
        return state.count[index]
      }
    },
    getCounterSum: function (state) {
      return function () {
        let sum = 0
        for (let i of state.count) {
          sum += i
        }
        return sum
      }
    }
  },
  mutations: {
    add: function (state, index) {
      let oldCounter = state.count
      state.count = []
      oldCounter[index] += 1
      for (let i = 0; i < oldCounter.length; i++) {
        state.count.push(oldCounter[i])
      }
    },
    reduce: function (state, index) {
      let oldCounter = state.count
      state.count = []
      oldCounter[index] -= 1
      for (let i = 0; i < oldCounter.length; i++) {
        state.count.push(oldCounter[i])
      }
    },
    change: function (state, index) {
      let oldCounter = state.count
      state.count = []
      oldCounter[index] -= 1
      for (let i = 0; i < oldCounter.length; i++) {
        state.count.push(oldCounter[i])
      }
      state.count[index] = 0
    }
  }
})

export default store
