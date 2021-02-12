<template>
    <div>
        <p> id: {{ userInfo.id }}</p>
        <p>karma: {{ userInfo.karma }}</p>
        <p>created: {{ userInfo.created }}</p>
    </div>
</template>
<script>


export default {
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
        // console.log(this.$route.params.id);

        const userName = this.$route.params.id;
        // axios.get(`http://api.hnpwa.com/v0/user/${userName}.json`);

        //액션함수 호출 dispatch 인자로 userName 넘기기 페이로드로 인자값을 하나가짐 여러개인경우는 객체로 만들어서 전달
        this.$store.dispatch('FETCH_USER', userName);
    }
}
</script>

<style scoped>

</style>