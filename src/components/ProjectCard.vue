<script>
export default {
  name: "PostCard",
  props: {
    project: Object,
  },
  data() {
    return {
      collapsedTextLenght: 100,
      apiUrl: import.meta.env.VITE_API_URL,
    };
  },
  computed: {
    getCollapseText() {
      if (
        this.project.description &&
        this.project.description.length > this.collapsedTextLenght
      ) {
        return (
          this.project.description.substr(0, this.collapsedTextLenght) + "..."
        );
      } else {
        return this.project.description;
      }
    },
  },
};
</script>

<template>
  <div class="card mb-3">
    <div class="card-body">
      <div class="row justify-content-between">
        <div class="col-4">
          <img
            v-if="project.image_cover"
            class="w-100"
            :src="`${apiUrl}/storage/${project.image_cover}`"
            alt=""
          />
          <div v-else>Nessuna immagine</div>
        </div>
        <div class="col-7">
          <h3 class="card-title">{{ project.title }}</h3>
          <div class="d-flex justify-content-between flex-wrap">
            <p>
              <span v-for="tech in project.technologies" :key="tech.id"
                >#{{ tech.name }}</span
              >
            </p>
            <p class="text-end text-success">
              {{ project.type ? project.type.name : "Nessuna tipologia" }}
            </p>
          </div>
          <p class="card-text">
            {{ getCollapseText }}
          </p>
          <router-link
            class="btn btn-primary"
            :to="{ name: 'single-project', params: { slug: project.slug } }"
            >Leggi</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
