import Vue from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css';
import router from './router'
import { Button } from 'vant';
Vue.config.productionTip = false
Vue.use(Button)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
