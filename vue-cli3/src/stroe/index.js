import Vue from 'vue';
import Vuex from 'vuex';

//모듈화
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex);

//데이터속성 관리 
export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        ask: []
    },
    getters: {
        mapAsk(state) {
            return state.ask;
        }
    },
    mutations,
    actions
});