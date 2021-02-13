<template>
    <div>
        <ul class="news-list">
            <li v-for="job in this.$store.state.jobs" :key="job.title" class="post">
                <!-- 포인트 영역 -->
                <div class="points">
                    <!-- 값이 null 일경우 0값 집어넣기 -->
                    포인트: {{ job.points || 0 }}
                </div>
                <!-- 기타 정보 영역 -->
                <div>
                     <a :href="job.url"> 
                        <span class="title">제목</span>: {{ job.title }} 
                    </a>
                    <small>
                        <span>시간 </span>{{ job.time_ago }} by
                        <!-- <p>상세페이지 <router-link v-bind:to="`/user/${job.url}`"> {{ job.domain }} </router-link> </p>  -->
                        <a :href="job.url">
                            {{ job.domain }}
                        </a>
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
        <!-- <div v-for="job in this.$store.state.jobs" :key="job.title">
            {{ job.title }}
        </div> -->
        <!-- <p v-for="job in this.$store.state.jobs" :key="job.title">
            <a :href="job.url"> 
                {{ job.title }}
            </a>
            <small>{{ job.time_ago }} by {{ job.domain }}</small>
        </p> -->
    </div>
</template>
<script>


export default {
    created(){
       this.$store.dispatch('FETCH_JOBS');
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