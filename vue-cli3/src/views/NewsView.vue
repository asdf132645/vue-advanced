<template>
    <div>
        <!-- <div v-for="user in this.$store.state.news" :key="user.title">
            {{ user.title }}
        </div> -->
        <p v-for="item in this.$store.state.news" :key="item.title">
            <a v-bind:href="item.url"> 
                {{ item.title }} 
            </a>
            <small>
                {{ item.time_ago }} by
                <!-- <router-link v-bind:to="'/user'+ item.user"> {{ item.user }} </router-link>  -->
                <router-link v-bind:to="`/user/${item.user}`"> {{ item.user }} </router-link> 
                {{ item.user }}
            </small>
        </p>
    </div>
</template>
<script>
//공통된 axios 를 함수로 만들어서 뿌리기위한 import
//import { fetchNewsList } from '../api/index.js'

export default {
    created(){
        this.$store.dispatch('FETCH_NEWS');
        //this 만쓰면 현재 뷰 data 컴포넌트를 바라보고 있지 않기 떄문에 아래와같이 변수로 this 잡아주기
        //화살표 함수를 쓰면 아래와 같은 var 변수로 this 를 잡아 주지 않아도 됌
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