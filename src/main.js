import Vue from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css';
import router from './router'
import { Button } from 'vant';
import vhCheck from "vh-check"; //移动端浏览器100vh高度不一致
import { Lazyload,Loading } from 'vant';
Vue.use(Lazyload, {
  lazyComponent: true,
});
Vue.use(Loading);
vhCheck();
Vue.config.productionTip = false
Vue.use(Button)
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
