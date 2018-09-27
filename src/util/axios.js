import Vue from 'vue'
import instance from './config'

import store from '../store/index'


let xhr = {
  get(url,params){
    return new Promise((resolve,reject) => {
      let token = `${store.state.token}`;
      // console.log(token);
      instance.defaults.headers.Authorization = token;
      instance.get(url,params).then(res => {
        resolve(res.data)
      }).catch(err => {
        console.log(err)
        reject(err)
      })
    })
  },
  post(url,params){
    return new Promise((resolve,reject) => {
      let token = `${store.state.token}`
      // console.log(token);
      instance.defaults.headers.Authorization = token
      instance.post(url,params).then(res => {
        resolve(res.data)
      }).catch((err) => {
        console.log(err)
        reject(err)
      })
    })
  },
}
export default xhr
Vue.prototype.$axios = xhr;
