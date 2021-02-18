<template>
  <div>
    <button @click="loginUser1">loginUser</button>
    <h1>list</h1>
    <ul>
      <li v-for="item in items" :key="item">{{items}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import {handleException} from './utils/handler.js';

export default {
data(){
  return {
    items: [],
  }
},
 methods: {
   loginUser(){
     axios.get('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        if(response.data.id === 1){
          console.log('사용자가 인증되었습니다.');
          axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
              this.items = response.data;
            })
            .catch();
        }
      })
      .catch(error => console.log(error));
   },
   async loginUser1(){
     try{
        var response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        if(response.data.id === 1){
          console.log('사용자가 인증되었습니다.');
          var list = await axios.get('https://jsonplaceholder.typicode.com/todos');
          //this.items 에 list.data 를 대입
          this.items = list.data
        }
     }catch (error){
       //handleException 에러처리 공통화 작업
       handleException(error);
       console.log(error);
     }
     
   }
 }
}
</script>

<style>

</style>
