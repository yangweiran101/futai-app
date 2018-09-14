import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userMobile:'',
    password:'',
    isWeChat:false
  },
  mutations: {
    isWeChat(state,isweixin){
      state.isWeChat = isweixin;
    }
  },
  getters:{},
  actions:{}
})

export default store;
