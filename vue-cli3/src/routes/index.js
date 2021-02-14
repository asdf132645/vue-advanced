import Vue from 'vue';
//라우터 불러오기
import VueRouter from 'vue-router';
//각 화면 연결
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JovsView from '../views/JovsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'

Vue.use(VueRouter);

//라우터는 페이지
export const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            //redirect 뷰라우터에서 제공하는기본적인 기능
            redirect: '/news',
        },
        {
            //path 는 url주소
            path: '/news',
            name: 'news',
            //component url 주소로 갔을떄 표시될 컴포넌트
            component: NewsView,
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JovsView,
        },
        {
            //동적 라우팅 여기서 백단에서 쿼리를 날릴수도 있는 부분 (다이나믹 라우팅)
            path: '/userview/:id',
            component: UserView,
        },
        {
            path: '/item/:id',
            component: ItemView,
        }
    ]
})