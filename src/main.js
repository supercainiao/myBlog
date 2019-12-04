import Vue from 'vue'
import App from './App.vue'
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui'
import fastclick from 'fastclick'
import axios from 'axios'
import router from './router/router'
import Vuex from 'vuex'
import config from './vuex/store.js'
Vue.use(Vuex);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
fastclick.attach(document.body);
Vue.use(Mint);
console.log(config)
let store = new Vuex.Store(config);
router.afterEach((to, from) => {
    let names = ['login','register','detailpage'];
    if(names.includes(to.name))
      store.commit('changeHeader',false);
    else
      store.commit('changeHeader',true);
})
new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
