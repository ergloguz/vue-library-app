import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bookList:[],
  },
  mutations: {
    addNewBook(state, payload) {
      payload.index = state.bookList.length;
      state.bookList.push(payload);
    },
    deleteBook(state, payload) {
      state.bookList.splice(payload.index, 1, payload);
    }
  },
  getters: {
    getBookList: (state) => state.bookList
  },
  actions: {
  },
  modules: {
  }
})
