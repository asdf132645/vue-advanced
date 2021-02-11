import { from } from 'core-js/fn/array';
import Vue from 'vue'
//구조도가 전체적으로 눈에 보여야함 라우터,스토어 폴더등 쪼개줘야함
import App from './App.vue';
import { router } from './routes/index.js';
import { store } from './stroe/index.js'

Vue.config.productionTip = false

//전체 코드 확인 가능한 파일임



new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')