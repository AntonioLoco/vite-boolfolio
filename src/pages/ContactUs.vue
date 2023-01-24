<script>
import axios from "axios";

export default {
  name: "ContactUs",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      apiUrl: import.meta.env.VITE_API_URL,
      success: false,
      errors: null,
      loading: false,
    };
  },
  methods: {
    sendForm() {
      this.loading = true;
      const params = {
        name: this.name,
        email: this.email,
        message: this.message,
      };

      axios.post(`${this.apiUrl}/api/leads`, params).then((resp) => {
        console.log(resp.data);
        this.success = resp.data.success;
        if (resp.data.success) {
          this.name = "";
          this.email = "";
          this.message = "";
        } else {
          this.errors = resp.data.errors;
        }
        this.loading = false;
      });
    },
  },
};
</script>

<template>
  <main>
    <div class="container mt-5">
      <h1 class="text-center">Contattaci</h1>
      <div class="row justify-content-center">
        <div class="col-7">
          <div class="alert alert-success" v-if="success">
            Messaggio inviato correttamente
          </div>
          <div class="alert alert-danger" v-if="errors">
            <ul>
              <li v-for="nameError in errors.name">{{ nameError }}</li>
              <li v-for="emailError in errors.email">{{ emailError }}</li>
              <li v-for="messageError in errors.message">{{ messageError }}</li>
            </ul>
          </div>
          <form @submit.prevent="sendForm()">
            <div class="mb-3">
              <input
                type="text"
                placeholder="Inserisci nome"
                class="form-control"
                v-model="name"
              />
            </div>
            <div class="mb-3">
              <input
                type="email"
                placeholder="Inserisci email"
                class="form-control"
                v-model="email"
              />
            </div>
            <div class="mb-3">
              <textarea
                type="text"
                placeholder="Inserisci il messaggio"
                rows="10"
                class="form-control"
                v-model="message"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-success">Contattaci</button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
