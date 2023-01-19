<script>
import axios from 'axios';
import AppLoader from './AppLoader.vue';
import PostCard from './PostCard.vue';
export default{
    name: "AppMain",
    components: {
        AppLoader,
        PostCard
    },
    data(){
        return{
            baseUrl: "http://127.0.0.1:8000",
            projects: [],
            loading: false
        }
    },
    methods: {
        getProjects(){
            this.loading = true;
            axios
                .get(this.baseUrl + "/api/projects")
                .then( resp => {
                    console.log(resp);
                    this.projects = resp.data.response;
                    this.loading = false;
                }).catch( err => {
                    console.log(err);
                })
        }
    },
    created() {
        this.getProjects();
    }
}
</script>

<template>
<div class="container">
    <h2 class="text-center my-3">Tutti i nostri post</h2>
    <AppLoader v-if="loading" />
    <div v-else class="row justify-content-center">
        <div class="col-11 col-md-10 col-lg-8">
            <PostCard :project="project" v-for="project in projects" :key="project.id" :baseUrl="baseUrl"/>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
</style>