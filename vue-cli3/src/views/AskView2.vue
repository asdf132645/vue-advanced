<template>
    <div>
        <ul class="news-list">
            <li v-for="item in this.$store.state.news" :key="item.title" class="post">
                <!-- 포인트 영역 -->
                <div class="points">
                    포인트: {{ item.points }}
                </div>
                <!-- 기타 정보 영역 -->
                <div>
                    <router-link v-bind:to="`item/${item.id}`">
                        <span class="title">제목</span>: {{ item.title }} 
                    </router-link>
                    <small>
                        <span>시간 </span>{{ item.time_ago }} by
                        <p>상세페이지 <router-link v-bind:to="`/user/${item.user}`"> {{ item.user }} </router-link> </p> 
                        <span class="title">유저이름</span> {{ item.user }}
                    </small>
                </div>
                <!-- <a v-bind:href="item.url"> 
                    <span class="title">제목</span>: {{ item.title }} 
                </a>
                <small>
                    <span>시간 </span>{{ item.time_ago }} by
                    <p>상세페이지 <router-link v-bind:to="`/user/${item.user}`"> {{ item.user }} </router-link> </p> 
                    <span class="title">유저이름</span> {{ item.user }}
                </small> -->
            </li>
        </ul>
        <!-- <div v-for="item in mapAsk" :key="item.title">
            {{ item.title }}
        </div> -->
        <!-- <p v-for="item in mapAsk" :key="item.title"> -->
            <!-- <a :href="item.url"> 
                {{ item.title }}
            </a> -->
            <!-- to에 그대로 넣으면 id 값 그대로 가져오기 url 이 아니라 조합해서 넘기면 됌 -->
            <!-- <router-link v-bind:to="`item/${item.id}`">
                {{ item.title }}
            </router-link>
            <small>{{ item.time_ago }} by {{ item.domain }}</small>
        </p> -->
    </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
import axios from 'axios';

export default {
    computed: {
        ...mapGetters({
            mapAsk : "mapAsk"
        })
        //연결두가지방법
        //1.
        // ask(){
        //     return this.$store.state.ask;
        // }
        //2.
        // ...mapState({
        //     mapAsk: (state) => state.ask
        // })
    },
    created() {
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style scoped>
.news-list{
        margin: 0;
        padding: 0;
    }
    .post{
        list-style: none;
        border-bottom: 1px solid #dedede;
        padding: 10px;
    }
    .post > a{ 
        display: block;
    }
    .title{
        color: #000;
    }
</style>