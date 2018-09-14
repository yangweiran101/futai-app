import Vue from 'vue'
import api from './api'
import instance from './config'

let xhr = {
  get(url,params){
    return new Promise((resolve,reject) => {
      instance.get(api[url],params).then(res => {
        resolve(res.data)
      }).catch(err => {
        console.log(err)
        reject(err)
      })
    })
  },
  post(url,params){
    return new Promise((resolve,reject) => {
      instance.post(api[url],params).then(res => {
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
