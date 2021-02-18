import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ChartPlugin from './plugins/ChartPlugin.js';

Vue.config.productionTip = false

//install() 이라는 이벤트 실행
Vue.use(ChartPlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
