<template>
    <div>
        <!-- userInfo 속성을 내려주기 props -->
        <user-profile :info="userInfo">
            <div slot="username">{{ userInfo.id }}</div>
            <!-- 실제로 넣을때 태그없이 텍스트만 넣고싶을떄 템플릿 사용 -->
            <template slot="time">{{ "가입날짜"+ userInfo.created }}</template>
            <span slot="karma">{{ userInfo.karma }}</span>
        </user-profile>
        <!-- <p> id: {{ userInfo.id }}</p>
        <p>karma: {{ userInfo.karma }}</p>
        <p>created: {{ userInfo.created }}</p> -->
    </div>
</template>
<script>
import UserProfile from '../components/UserProfile.vue';

export default {
   
    components:{
        UserProfile,
    },
    computed: {
        //<p>created: {{ this.$store.state.user.created }}</p> 
        //위에처럼 지저분하게 태그안에 코드를 쓰는게아니라 아래함수 생성 한 후
        //호출 하는게 깔끔한 코드를 생성가능
        //<p>created: {{ userInfo.created }}</p> 이런것처럼 쓸 수 있음
        userInfo() {
            return this.$store.state.user;
        }
    },
    created(){
        //값 확인
        // console.log(this.$route);
        // $route.params 는 routes 에서 설정한 path: '/user/:id' 값을 가져오는부분임

        const userName = this.$route.params.id;
        // axios.get(`http://api.hnpwa.com/v0/user/${userName}.json`);

        //액션함수 호출 dispatch 인자로 userName 넘기기 페이로드로 인자값을 하나가짐 여러개인경우는 객체로 만들어서 전달
        //새로운 스테이트값을 주기위해 액션으로 새로운값 받아와서 뮤스테이션에 넘기기
        this.$store.dispatch('FETCH_USER', userName);
    }
}
</script>

<style scoped>

</style>