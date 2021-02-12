<template>
    <div>
        <!-- <div v-for="item in mapAsk" :key="item.title">
            {{ item.title }}
        </div> -->
        <p v-for="item in mapAsk" :key="item.title">
            <a :href="item.url"> 
                {{ item.title }}
            </a>
            <small>{{ item.time_ago }} by {{ item.domain }}</small>
        </p>
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

</style>