import Vue from 'vue'
import App from './App.vue'
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui'
import fastclick from 'fastclick'
import axios from 'axios'
import router from './router/router'
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
fastclick.attach(document.body);
Vue.use(Mint);

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
