<template>
    <!-- 질문 상세 영역 -->
    <div class="user-container">
        <div class="user">
            User
        </div>
        <div>
            <div>username: {{ info.id }}</div>
            <slot name="username">
                <!-- 상위컴포넌트에서 정의할 영역 -->
            </slot>
            <!-- user 페이지 이동 -->
            <!-- <router-link :to="`/userview/${userInfo.user}`"> {{ userInfo.id }}
            </router-link> -->
            <div class="time">
                <!-- ...mapGetters(['userInfo']) 에서 userInfo 에담겨있는 값 불러오기 -->
                <!-- time: {{ info.created }} -->
                <slot name="time">
                    <!-- 상위컴포넌트에서 정의할 영역 -->
                </slot>
            </div>
            <slot name="karma"></slot>
        </div>
        <!-- <h2>{{ info.title }}</h2> -->
    </div>
</template>

<script>
    export default {
        props: {
            info: Object
        }
    }
</script>

<style scoped="scoped">
    .user-container {
        display: flex;
        align-items: center;
    }
    .user {
        color: #222;
        font-size: 2rem;
    }
</style>