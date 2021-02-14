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

export default {
    components:{
        UserProfile
    },
    computed: {
       ...mapGetters(['fechedItem'])
    },
    created(){
        const itemId = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM', itemId);
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