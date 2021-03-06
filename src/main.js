// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './util/axios'
import store from './store/index'
import 'lib-flexible/flexible'
import vuePayKeyboard from '../node_modules/vue-pay-keyboard/dist/vue-pay-keyboard'

Vue.prototype.$axios = axios
Vue.use(vuePayKeyboard)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
