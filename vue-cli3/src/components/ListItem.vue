<template>
    <div>
        <ul class="news-list">
            <li v-for="item in listItems" :key="item.title" class="post">
                <!-- 포인트 영역 -->
                <div class="points">
                    포인트: {{ item.points || "없음" }}
                </div>
                <!-- 기타 정보 영역 -->
                <div>
                    <template v-if="item.domain">
                    <a v-bind:href="item.url">
                        <span class="title">제목</span>: {{ item.title }} 
                    </a>
                    </template>
                    <template v-else>
                        <router-link v-bind:to="`item/${item.id}`">
                            <span class="title">제목</span>: {{ item.title }} 
                        </router-link>
                    </template>
                    <small>
                        <span>시간 </span>{{ item.time_ago }} by
                        <p> 
                            <!-- item.user가 있는 경우 -->
                            <router-link 
                            v-if="item.user"
                            v-bind:to="`/userview/${item.user}`"> {{ item.user }} 
                            </router-link>

                            <a :href="item.url" v-else>
                                {{ item.domain }}
                            </a>
                            
                        </p> 
                        <span class="title">유저이름</span> {{ item.user }}

                        
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    //믹스인 사용 안할시에 아래코드 사용 (재사용을 높이기위해서 믹스인 쓰는것을 추천함)

    // created(){
    //     // this.$store.dispatch('FETCH_NEWS');
    //     //분기처리
    //     console.log(this.$route.name);
    //     const name = this.$route.name;
    //     if(name === 'news'){
    //         this.$store.dispatch('FETCH_NEWS');
    //     } else if(name === 'ask'){
    //         this.$store.dispatch('FETCH_ASK');
    //     }else if(name === 'jobs'){
    //         this.$store.dispatch('FETCH_JOBS');
    //     }

    // },
    computed: {
        listItems(){
            const name = this.$route.name;
            if(name === 'news'){
                return this.$store.state.news;
            } else if(name === 'ask'){
                return this.$store.state.ask;
            }else if(name === 'jobs'){
                return this.$store.state.jobs;
            }
        }
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