<template>
    <div>
        <div v-for="item in ask" :key="item.title">
            {{ item.title }}
        </div>
    </div>
</template>
<script>
import { fetchAskList } from '../api/index.js'
import axios from 'axios';

export default {
    data(){
        return {
            ask: []
        }
    },
    //라이프사이클 훅
    //속성 함수인경우 펑션 생략가능
    created() {
        var vm = this;
        fetchAskList()
        .then(function(response){
            vm.ask = response.data;
        })
        .catch(function(err){
            console.log(err);
        })
        
    },
    beforeMount(){

    }
}
</script>

<style scoped>

</style>