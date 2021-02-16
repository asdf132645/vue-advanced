<template>
    <div>
        <section>
            <!-- 사용자 정보 -->
            <user-profile :info="fechedItem">
                <!-- UserView.vue 에서 슬롯으로 정해준부분 쓰기 itemView.vue 가 상위 컴포넌트임  -->
                <!-- 컴포넌트로 등록한 유저프로필뷰에다가 데이터 넘기기 중요! -->
                <!-- <div slot="username">{{ fechedItem.user }}</div> -->
                <router-link slot="username" :to="`/userview/${fechedItem.user}`"> 
                    {{ fechedItem.user }}
                </router-link>
                <template slot="time">{{ "보낸날짜"+ fechedItem.time_ago }}</template>
            </user-profile>
            <!-- <div class="user-container">
                <div class="user">
                    User
                </div>
                <div>       
                    user 페이지 이동
                    <router-link :to="`/user/${fechedItem.user}`">
                        {{ fechedItem.user }}
                    </router-link>
                    <div>
                        ...mapGetters(['fechedItem']) 에서 fechedItem 에담겨있는 값 불러오기
                        {{ fechedItem.time_ago }}
                    </div>
                </div>
            </div> -->
        </section>
        <section>
            <h2>{{ fechedItem.title }}</h2>
        </section>
        <section>
            <!-- 질문 댓글 -->
            <!-- v-html은 태그를 구분해서 화면에 뿌려주는 디렉티브 -->
            <div v-html="fechedItem.content">
                <!-- {{ fechedItem.content }} -->
            </div>
            
        </section>


        <!-- {{ this.$store.state.item }} -->
        
        <!-- <p> -->
            <!-- 스토어 파일에 state에 item에 title 가져오기 -->
            <!-- {{ fechedItem.title }} -->
        <!-- </p> -->
        <!-- <div>
            {{ fechedItem.content }}
        </div> -->
    </div>
</template>
<script>
import UserProfile from '../components/UserProfile.vue'
import {mapGetters} from 'vuex';
import bus from '../utils/bus.js';

export default {
    components:{
        UserProfile
    },
    computed: {
       ...mapGetters(['fechedItem'])
    },
    created(){
        /* 이벤트 보내기 이벤트 버스 */
        /* 자식에서 부모로 데이터를 전송하는 방법 */
        bus.$emit('start:spinner');
        /* 
            프로미스 체이닝 가능 액션 js 에서 리턴값으로 리스폰스 넘기면 아래와같이 then catch 쓸 수있음
            연결연결해서 데이터값이 다 넘어온 후에 then으로 체이닝 걸어서 스피너를 끄는 방식임 
         */
        setTimeout(() => {
            const itemId = this.$route.params.id;
            this.$store.dispatch('FETCH_ITEM', itemId)
            // 데이터값을 다불러왔을때 덴으로 bus.$emit('endLspinner'); 적용
            .then(()=> {
                console.log('fetched');
                bus.$emit('end:spinner');
            })
            .catch((err) => {
                console.log(err);
            });
        }, 3000)
    }
}
</script>

<style scoped>
    .user-container{
        display: flex;
        align-items: center;
    }
    .user{
        color: #222;
        font-size: 2rem;
    }
</style>