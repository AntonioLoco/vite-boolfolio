<script>
export default{
    name: "AppHeader",
    data() {
        return {
            navigation: [
                {
                    label: "Home",
                    routeName: "home"
                },
                {
                    label: "About Us",
                    routeName: "about-us"
                },
                {
                    label: "Projects",
                    routeName: "projects"
                }
            ]
        }
    }
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg shadow">
            <div class="container-fluid ">
                <a class="navbar-brand">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse text-light" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item" v-for="(route,index) in navigation" :key="index">
                            <router-link :to="{name: route.routeName}" class="nav-link" :class="{ 'active' : this.$route.name == route.routeName }" aria-current="page">{{ route.label }}</router-link>
                        </li>
                    </ul>
                    <a class="navbar-text ms-auto" href="http://127.0.0.1:8000/admin">
                        Area di amministrazione
                    </a>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>

</style>