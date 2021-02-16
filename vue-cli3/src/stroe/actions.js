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
    //액션에서 뮤스테이션으로 state값을 넘길수있는 구조임
    //액션은 state 값을 변경을 못함 뮤스테이션으로 값을 넘겨야함  context.commit() 이런식으로 뮤스테이션 호출
    //액션,뮤스테이션 함수는 대문자로 지어주는게 국룰
    // FETCH_NEWS(context) {
    //     //api폴더에 index.js 함수 호출
    //     fetchNewsList()
    //         .then(response => {
    //             // console.log(response.data);
    //             context.commit('SET_NEWS', response.data);
    //             //response는 프로미스 객체를 반환하고있기때문에 반환한 객체를 뉴스뷰에서 then 으로 체이닝 가능함
    //             return response;
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // },
    // FETCH_JOBS({ commit }) {
    //     //api폴더에 index.js 함수 호출
    //     fetchJobsList()
    //         .then(({ data }) => {
    //             commit('SET_JOBS', data);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // },
    // FETCH_ASK({ commit }) {
    //     //api폴더에 index.js 함수 호출
    //     fetchAskList()
    //         .then(({ data }) => {
    //             commit('SET_ASK', data);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // },
    //하이오더로 컴포넌트 생성했기때문에 위에 코드 사용 안해도됌
    FETCH_USER({ commit }, username) {
        //api폴더에 index.js 함수 호출
        fetchUserInfo(username)
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
        fetchCommentItem(id)
            // response.data 이거를 es6 문법으로 축약 가능 아래와같이 {data}로 작성가능
            .then(({ data }) => {
                //뮤스테이션에서만 스테이트 값을 변경이 가능하기떄문에 아래와같이 뮤스테이션 함수 호출 후 비동기로 받아온 값 을 넘기기
                commit('SET_ITEM', data);
            })
            .catch(err => {
                console.log(err);
            })
    },
    FETCH_LIST({commit}, pageName){
        fetchList(pageName)
            .then(({data}) => commit('SET_LIST',data))
            .catch(error => console.log(error));
    }
}