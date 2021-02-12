<template>
  <div id="app">
    <!-- 케밥표시법 사용 -->
    <tool-bar></tool-bar>
    <!-- 트랜지션은 페이지이동 효과임 사이트 -> https://vuejs.org/v2/guide/transitions.html#Transitioning-Single-Elements-Components name 은 클래스 -->
    <transition name="fage">
      <!-- url 주소에 따라 화면 전환 라우터 뷰  페이지 컴포넌트 views 폴더안에 있는 vue 파일-->
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
//스크립트에서는 파스칼 표기법 첫글자 대문자
import ToolBar from './components/ToolBar.vue'
export default {
  components:{
    ToolBar,
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
