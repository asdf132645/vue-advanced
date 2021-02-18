//api 폴더에 들어있는 api 함수들을 사용하는 액션js
import {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
    fetchCommentItem,
    fetchList
} from '../api/index.js';

export default {
    // async
    async FETCH_NEWS(context) {
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response;
    },
    async FETCH_JOBS({ commit }) {
        try{
            const response = await fetchJobsList();
            commit('SET_JOBS', response.data);
            return response;
        } catch(err){
            console.log(err);
        }
    },
    async FETCH_ASK({ commit }) {
        const response = await fetchAskList;
        commit('SET_ASK', response.data); 
        return response;
    },
    FETCH_USER({ commit }, username) {
        //api폴더에 index.js 함수 호출
        return fetchUserInfo(username)
            .then(({ data }) => {
                //뮤스테이션 함수 호출 하고 인자 넘기기
                commit('SET_USER', data);
            })
            .catch(err => {
                console.log(err);
            })
    },
    FETCH_ITEM({ commit }, id) {
        //아이템뷰에서 넘겨 받은 id 를 인수로 넘김
        //api폴더에 index.js 함수 호출
        return fetchCommentItem(id)
            // response.data 이거를 es6 문법으로 축약 가능 아래와같이 {data}로 작성가능
            .then(({ data }) => {
                //뮤스테이션에서만 스테이트 값을 변경이 가능하기떄문에 아래와같이 뮤스테이션 함수 호출 후 비동기로 받아온 값 을 넘기기
                commit('SET_ITEM', data);
            })
            .catch(err => {
                console.log(err);
            })
    },
    async FETCH_LIST({ commit }, pageName) {
        const response = await fetchList(pageName);
        console.log(4);
        commit('SET_LIST', response.data);
        return response;
    }
}