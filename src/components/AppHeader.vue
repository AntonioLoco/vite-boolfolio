<script>
export default{
    name: "AppHeader"
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-dark text-light">
            <div class="container-fluid ">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <!-- <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                    </ul> -->
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