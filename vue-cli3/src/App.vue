<template>
  <div id="app">
    <!-- 케밥표시법 사용 -->
    <tool-bar></tool-bar>
    <!-- 트랜지션은 페이지이동 효과임 사이트 -> https://vuejs.org/v2/guide/transitions.html#Transitioning-Single-Elements-Components name 은 클래스 -->
    <transition name="fage">
      <!-- url 주소에 따라 화면 전환 라우터 뷰  페이지 컴포넌트 views 폴더안에 있는 vue 파일-->
      <router-view></router-view>
    </transition>
    <spinner :loading="lodaingStatus"></spinner>

  </div>
</template>

<script>
//스크립트에서는 파스칼 표기법 첫글자 대문자
import ToolBar from './components/ToolBar.vue'
import spinner from './components/Spinner.vue'
import bus from './utils/bus.js'

export default {
  components:{
    ToolBar,
    spinner,
  },
  data(){
    return {
      lodaingStatus: false,
    }
  },
  methods:{
    startSpinner(){
      this.lodaingStatus = true;
    },
    endSpinner(){
      this.lodaingStatus = false
    }
  },
  created(){
    /* 이벤트 받아오기는 on */
    /* 
      자식에서 부모로 데이터를 받는 방법
      자식에서 보낸 이벤트 명 , 두번째 인수에는 콜백함수를 지정
     */
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  /* 
    이벤트버스 off 꼭해주기
    이벤트 객체가 계속 쌓이기때문에 꼭 off 를 써줘야함  
  */
  beforeDestroy(){
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}

/* 라우터 트랜지션 */
.fage-enter-active, .fage-leave-active {
  transition: opacity .5s;
}
.fage-enter, .fage-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
