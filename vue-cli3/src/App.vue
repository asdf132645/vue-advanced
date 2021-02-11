<template>
  <div id="app">
    <!-- 케밥표시법 사용 -->
    <tool-bar></tool-bar>
    <!-- url 주소에 따라 화면 전환 라우터 뷰 -->
    <router-view></router-view>
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
</style>
