<script>
import axios from "axios";
import AppLoader from "../components/AppLoader.vue";
import ProjectCard from "../components/ProjectCard.vue";

export default {
  name: "ProjectList",
  components: {
    AppLoader,
    ProjectCard,
  },
  data() {
    return {
      apiUrl: import.meta.env.VITE_API_URL,
      projects: [],
      loading: false,
      currentPage: 1,
      lastPage: null,
      totalElements: null,
      types: [],
      filtersType: "",
    };
  },
  methods: {
    getProjects(page) {
      this.loading = true;

      const params = {
        page,
        ...(this.filtersType && { type_id: this.filtersType }),
      };

      axios
        .get(this.apiUrl + "/api/projects", { params })
        .then((resp) => {
          const result = resp.data.response;
          if (resp.data.success) {
            this.projects = result.data;
            this.currentPage = result.current_page;
            this.lastPage = result.last_page;
            this.totalElements = result.total;
          } else {
            this.projects = [];
            this.currentPage = 1;
            this.lastPage = 1;
            this.totalElements = 0;
          }
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getTypes() {
      this.loading = true;
      axios.get(`${this.apiUrl}/api/types`).then((resp) => {
        this.types = resp.data.response;
        this.loading = false;
      });
    },
  },
  created() {
    this.getProjects(this.currentPage);
    this.getTypes();
  },
};
</script>

<template>
  <main>
    <div class="container">
      <h2 class="text-center my-3">Tutti i nostri post</h2>
      <AppLoader v-if="loading" />
      <div v-else class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-8 mx-auto">
          <div class="d-flex align-items-center justify-content-between">
            <form @submit.prevent="getProjects(1)" class="w-50 mb-3 d-flex">
              <select class="form-select" v-model="filtersType">
                <option value="">Seleziona tipologia</option>
                <option v-for="tipo in types" :value="tipo.id">
                  {{ tipo.name }}
                </option>
              </select>
              <button type="submit" class="btn btn-success">Cerca</button>
            </form>
            <div class="text-secondary">
              {{
                totalElements == 1
                  ? "Trovato 1 elemento"
                  : `Trovati ${totalElements} elementi`
              }}
            </div>
          </div>
          <ProjectCard
            :project="project"
            v-for="project in projects"
            :key="project.id"
            v-if="projects.length > 0"
          />
          <h2 v-else class="text-center mt-5">Nessun progetto trovato</h2>
          <nav aria-label="Page navigation prjects">
            <ul class="pagination my-5">
              <li class="page-item">
                <a
                  class="page-link"
                  aria-label="Previous"
                  @click.prevent="getProjects(currentPage - 1)"
                  :class="{ disabled: currentPage === 1 }"
                >
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item" v-for="link in lastPage">
                <a
                  class="page-link"
                  @click.prevent="getProjects(link)"
                  :class="{ active: currentPage === link }"
                  >{{ link }}</a
                >
              </li>
              <li class="page-item">
                <a
                  class="page-link"
                  aria-label="Next"
                  @click.prevent="getProjects(currentPage + 1)"
                  :class="{ disabled: currentPage === lastPage }"
                >
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
