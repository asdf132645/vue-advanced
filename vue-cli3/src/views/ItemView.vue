<template>
    <div>
        <section>
            <!-- 질문 상세 영역 -->
            <div class="user-container">
                <div class="user">
                    User
                </div>
                <div>       
                    <!-- user 페이지 이동 -->
                    <router-link :to="`/user/${fechedItem.user}`">
                        {{ fechedItem.user }}
                    </router-link>
                    <div>
                        <!-- ...mapGetters(['fechedItem']) 에서 fechedItem 에담겨있는 값 불러오기 -->
                        {{ fechedItem.time_ago }}
                    </div>
                </div>
                <h2>{{ fechedItem.title }}</h2>
            </div>
        </section>
        <section>
            <!-- 질문 댓글 -->
            <!-- v-html은 태그를 구분해서 화면에 뿌려주는 디렉티브 -->
            <div v-html="fechedItem.content">
                <!-- {{ fechedItem.content }} -->
            </div>
            
        </section>


        <!-- {{ this.$store.state.item }} -->
        
        <!-- <p> -->
            <!-- 스토어 파일에 state에 item에 title 가져오기 -->
            <!-- {{ fechedItem.title }} -->
        <!-- </p> -->
        <!-- <div>
            {{ fechedItem.content }}
        </div> -->
    </div>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
    computed: {
       ...mapGetters(['fechedItem'])
    },
    created(){
        const itemId = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM', itemId);
    }
}
</script>

<style scoped>
    .user-container{
        display: flex;
        align-items: center;
    }
    .user{
        color: #222;
        font-size: 2rem;
    }
</style>