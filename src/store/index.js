import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userMobile: '',
    password: '',
    isShowMoney:true,
    isWeChat:false,
    token: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI0OGVkMDgyZWU4ZWY2MmNlNDgxNzhiNzYwNTg4NzEzYzQ4ZTg3ZDJmOTU0MGQ0NDJhZGNhMjliOWIyMzA3NGU5NGVjMTAwZjZiOGIwZGUyIn0.eyJhdWQiOiIxIiwianRpIjoiYjQ4ZWQwODJlZThlZjYyY2U0ODE3OGI3NjA1ODg3MTNjNDhlODdkMmY5NTQwZDQ0MmFkY2EyOWI5YjIzMDc0ZTk0ZWMxMDBmNmI4YjBkZTIiLCJpYXQiOjE1MzY5OTI2MDcsIm5iZiI6MTUzNjk5MjYwNywiZXhwIjoxNTY4NTI4NjA3LCJzdWIiOiIxNTk5Iiwic2NvcGVzIjpbXX0.1R5pR72nGv2wDMV6GdFLJf9XlI8-92_ius0Ls-qlqAbtUckSry3-LWvMnXues_NrP5Ny9wFd6kg74uxzXE-O3jx-G24v2Vx4xx7C46Fa4w8m1blBQQCupmRBhQPoHgx-MmuLQdvN9sfx4hN9l_nLlHV3SShLOulWRldt-2w43HN6N4eYoSbdMJqyPIf3Xdx0NO-YXuXM-JkTiFUysrA_Gz2Ssw6BBsfKrPg9Po1bmppzRCwY4lMgglh-seUZ-D7eCb46slHHVhBIq6LiZSWxRynYWDjtwbL5YwbkQqoE_rCthpohxWBC2hsdmk7TLHh4IbUycqad2tzvfPq93vSWqHNpo1p_WHu02NfX03boTJwmQ1j9tIcGRxa372w9gMnwQ2vJT5TD4uTxa1Zd_8c2sX7xOSxdPDHdr1PRytsuMlqwMetEUI0hK9eNy6SJWVI0N0lOBs90btVqXpq3ASCPMHUudmOuc0noLLKRgKhhaiKR5lqRelbiZNX0gdA8l-2WT8-TQa7U7PNkufeKJUUOVOidlQEoFBGB8XZWwh1lP6eqToRMQ1d-2nLUcJVU-4Ifh8bPOhUeRG4zgVRyxs51jUKQcnNjUhIny1zEpP8AedmHCJPLO0SJF3OsB1MB_Um0iF-L5FtbjNNB4F2V6KuEv2LoSQg1WC5T23ooFe8uad8',
  },
  mutations: {
    isWeChat (state, isweixin) {
      state.isWeChat = isweixin;
    },
    isShowMoney (state, isshow) {
      state.isShowMoney = isshow;
    },
    getLoginToken (state, token) {
      state.token = token
    }
  },
  getters:{},
  actions:{}
})

export default store;
