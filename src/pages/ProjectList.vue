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
    };
  },
  methods: {
    getProjects(page) {
      this.loading = true;

      const params = {
        page,
      };

      axios
        .get(this.apiUrl + "/api/projects", { params })
        .then((resp) => {
          const result = resp.data.response;
          this.projects = result.data;
          this.currentPage = result.current_page;
          this.lastPage = result.last_page;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getProjects(this.currentPage);
  },
};
</script>

<template>
  <div class="container">
    <h2 class="text-center my-3">Tutti i nostri post</h2>
    <AppLoader v-if="loading" />
    <div v-else class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8">
        <ProjectCard
          :project="project"
          v-for="project in projects"
          :key="project.id"
        />
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
</template>

<style lang="scss" scoped></style>
