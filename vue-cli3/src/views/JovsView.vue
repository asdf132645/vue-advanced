<template>
    <div>
        <!-- <div v-for="job in this.$store.state.jobs" :key="job.title">
            {{ job.title }}
        </div> -->
        <p v-for="job in this.$store.state.jobs" :key="job.title">
            <a :href="job.url"> 
                {{ job.title }}
            </a>
            <small>{{ job.time_ago }} by {{ job.domain }}</small>
        </p>
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

</style>