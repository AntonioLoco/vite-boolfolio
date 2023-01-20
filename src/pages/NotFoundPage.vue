<script>
export default {
    name: "NotFoundPage"
}
</script>

<template>
    <div class="container text-center mt-5">
        <h1>Error, Page Not Found</h1>
        <router-link :to="{ name: 'home' }" class="btn btn-primary mt-2">Torna alla Homepage</router-link>
    </div>
</template>

<style lang="scss" scoped>
    
</style>