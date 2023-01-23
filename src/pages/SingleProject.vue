<script>
import axios from "axios";

export default {
  name: "SingleProject",
  data() {
    return {
      project: {},
      loading: false,
      apiUrl: import.meta.env.VITE_API_URL,
    };
  },
  created() {
    this.loading = true;
    const slug = this.$route.params.slug;
    axios.get(`${this.apiUrl}/api/projects/${slug}`).then((resp) => {
      if (resp.data.success) {
        this.project = resp.data.response;
        this.loading = false;
      } else {
        this.$router.push({ name: "not-found" });
      }
      this.loading = false;
    });
  },
  computed: {
    getType() {
      return this.project.type ? this.project.type.name : "Nessuna tipologia";
    },
    getTechnologies() {
      return this.project.technologies.length > 0
        ? this.project.technologies
        : [{ name: "Nessuna tecnologia" }];
    },
    getDescription() {
      return this.project.description
        ? this.project.description
        : "Nessuna descrizione";
    },
    getImage() {
      return this.project.image_cover
        ? `${this.apiUrl}/storage/${this.project.image_cover}`
        : this.getImagePath("../assets/img/img-not-found.png");
    },
  },
  methods: {
    getImagePath(imgPath) {
      return new URL(imgPath, import.meta.url).href;
    },
  },
};
</script>

<template>
  <main class="container mt-4">
    <div v-if="loading" class="text-center">
      <h1>Loading...</h1>
    </div>
    <div v-else class="p-5">
      <h1 class="text-center mb-5">{{ project.title }}</h1>
      <div class="d-flex">
        <img :src="getImage" :alt="project.title" class="w-50 mx-auto" />
      </div>
      <h4 class="text-success mt-3">{{ getType }}</h4>
      <div class="mt-3 d-flex">
        <div
          v-for="tech in getTechnologies"
          class="me-1 bg-success text-light py-1 px-2 rounded-4 text-center"
        >
          {{ tech.name }}
        </div>
      </div>
      <p class="mt-3">
        {{ getDescription }}
      </p>
      <a v-if="project.link" :href="project.link" class="btn btn-primary mt-2"
        >Link Github Repository</a
      >
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
