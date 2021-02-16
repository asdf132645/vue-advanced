export default {
    //뮤스테이션은 스테이트값으로 넘김 state를 첫인자로 무조건 받음
    //news에 액션에서 담아준(인자) 배열이 담김
    SET_NEWS(state, news) {
        state.news = news;
    },
    SET_JOBS(state, jobs) {
        state.jobs = jobs;
    },
    //액션에서 호출 하는 함수들 커밋으로 가능
    SET_ASK(state, ask) {
        state.ask = ask;
    },
    //액션에서 호출 하는 함수들 커밋으로 가능
    SET_USER(state, user) {
        state.user = user;
    },
    //액션에서 호출 하는 함수들 커밋으로 가능
    SET_ITEM(state, item) {
        state.item = item;
    },
    //액션에서 호출 하는 함수들 커밋으로 가능
    SET_LIST(state, list) {
        state.list = list;
    },
}