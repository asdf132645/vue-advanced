<template>
<div>
    <div v-for="user in this.$store.state.news" :key="user.title">
        {{ user.title }}
    </div>
</div>
</template>
<script>
//공통된 axios 를 함수로 만들어서 뿌리기위한 import
//import { fetchNewsList } from '../api/index.js'

export default {
    created(){
        this.$store.dispatch('FETCH_NEWS');

        //this 만쓰면 현재 뷰 data 컴포넌트를 바라보고 있지 않기 떄문에 아래와같이 변수로 this 잡아주기
        // var vm = this;
        // //프로미스기반 axiox 
        // fetchNewsList()
        // .then(function(response){
        //     console.log(response);
        //     vm.users = response.data
        // })
        // .catch(function(err){
        //     console.log(err);
        // });
    }
}
</script>

<style scoped>

</style>