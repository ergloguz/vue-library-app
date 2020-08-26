import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: 'library-app'
})


export default new Vuex.Store({
  state: {
    bookList:[],
    userList:[],
    availableBooks:[],
  },
  mutations: {
    addNewBook(state, payload) {
      payload.index = state.bookList.length;
      state.bookList.push(payload);
    },
    setNewUser(state, payload) {
      payload.index = state.userList.length;
      state.userList.push(payload);
    },
  },
  getters: {
    getBookList: (state) => state.bookList,
    getUserList: (state) => state.userList,

  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
