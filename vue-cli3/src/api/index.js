import axios from 'axios';

// 기본 http requset & response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}


// 2. api 함수들을 정리
function fetchNewsList() {
    //프로미스기반 axiox 
    // return axios.get(config.baseUrl + 'news/1.json');
    return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

//내보내기
export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList
}