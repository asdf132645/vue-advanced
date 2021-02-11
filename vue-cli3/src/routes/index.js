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
            //component url 주소로 갔을떄 표시될 컴포넌트
            component: NewsView,
        },
        {
            path: '/ask',
            component: AskView,
        },
        {
            path: '/jobs',
            component: JovsView,
        },
        {
            path: '/user',
            component: UserView,
        },
        {
            path: '/item',
            component: ItemView,
        }
    ]
})