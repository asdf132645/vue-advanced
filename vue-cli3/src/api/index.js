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

async function fetchAskList() {
    try{
        const response = await axios.get(`${config.baseUrl}ask/1.json`);
        return response;
    } catch(error){
        console.log(error);
    }
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchCommentItem(id) {
    return axios.get(`${config.baseUrl}item/${id}.json`);
}

async function fetchList(pageName){
    try{
        const response = await axios.get(`${config.baseUrl}${pageName}/1.json`);
        return response;
    } catch(error){
        console.log(error);
    }
}

//내보내기
export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchCommentItem,
    fetchList
}