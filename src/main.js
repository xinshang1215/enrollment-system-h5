/*
 * @Author: M.M
 * @Date:   2020-08-31 14:27:34
 * @Last Modified by:   M.M
 * @Last Modified time: 2020-08-31 14:27:34
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios,Axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  data(){
    return{
      eh:new Vue()
    }
  },
  render: h => h(App)
}).$mount('#app')
