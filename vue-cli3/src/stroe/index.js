import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList } from '../api/index.js'

Vue.use(Vuex);

//데이터속성 관리 
export const store = new Vuex.Store({
    state: {
        news: []
    },
    mutations: {
        SET_NEWS() {

        }
    },
    //액션에서 뮤스테이션으로 state값을 넘길수있는 구조임
    //액션은 state 값을 변경을 못함 뮤스테이션으로 값을 넘겨야함  context.commit() 이런식으로 뮤스테이션 호출
    actions: {
        FETCH_NEWS(context) {
            fetchNewsList()
                .then(response => {
                    console.log(response.data);
                    context.commit('SET_NEWS', response.data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
});