<template>
    <div class="header">
        <!-- a 태그 로 전환 해주는 라우터 링크 네비게이션을 해주는 기능 -->
        <router-link to="/news">news</router-link> |
        <router-link to="/ask">ask</router-link> |
        <router-link to="/jobs">jobs</router-link>
    </div>
</template>

<!-- scoped -> 해당 컴포넌트에만 적용 -->
<style scoped>
    .header{
        color: #fff;
        background: #43b883;
        display: flex;
        padding: 8px;
    }
    .header a{
        color: #fff;
        margin-right: 10px;
        margin-left: 10px;
    }
    .header .router-link-exact-active{
        color: #35495e;
    }
</style>