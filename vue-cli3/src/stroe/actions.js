//api 폴더에 들어있는 api 함수들을 사용하는 액션js
import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index.js';

export default {
    //액션에서 뮤스테이션으로 state값을 넘길수있는 구조임
    //액션은 state 값을 변경을 못함 뮤스테이션으로 값을 넘겨야함  context.commit() 이런식으로 뮤스테이션 호출
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => {
                console.log(response.data);
                context.commit('SET_NEWS', response.data);
            })
            .catch(err => {
                console.log(err);
            })
    },
    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then(({ data }) => {
                commit('SET_JOBS', data);
            })
            .catch(err => {
                console.log(err);
            })
    },
    FETCH_ASK({ commit }) {
        fetchAskList()
            .then(({ data }) => {
                commit('SET_ASK', data);
            })
            .catch(err => {
                console.log(err);
            })
    }
}