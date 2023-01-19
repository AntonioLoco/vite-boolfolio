<script>
export default{
    name: "PostCard",
    props: {
        project: Object,
        baseUrl: String,
    },
    data() {
        return{
            collapsedTextLenght: 100,
        }
    },
    computed: {
        getCollapseText(){
            if( this.project.description && this.project.description.length > this.collapsedTextLenght ){
                return this.project.description.substr(0, this.collapsedTextLenght) + "...";
            } else {
                return this.project.description;
            }
        }
    }
}
</script>

<template>
    <div class="card mb-3">
        <div class="card-body">
            <div class="row justify-content-between">
                <div class="col-4">
                    <img v-if="project.image_cover" class="w-100" :src="`${baseUrl}/storage/${project.image_cover}`" alt="">
                    <div v-else>
                        Nessuna immagine
                    </div>
                </div>
                <div class="col-7">
                    <h3 class="card-title">{{ project.title }}</h3>
                    <div class="d-flex justify-content-between">
                        <p>
                            <span v-for="tech in project.technologies" :key="tech.id">#{{ tech.name }} </span>
                        </p>
                        <p class="text-end text-success">{{ project.type ? project.type.name : 'Nessuna tipologia' }}
                        </p>
                    </div>
                    <p class="card-text">
                        {{ getCollapseText }}
                    </p>
                    <a class="btn btn-primary" href="">Leggi</a>
                </div>
            </div>
    
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>

