<template>
  <div class="container mt-2">
    <div class="col">
      <div class="row">
        <div class="card">
          <h3 class="text-success">User Lists</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            voluptatum, temporibus fugiat rem sapiente mollitia porro alias
            repellendus libero dolorum incidunt quo itaque quaerat assumenda
            laborum corporis tempora. Perspiciatis, iste.
          </p>
        </div>
        <div v-if="loading">
          <LoadingSpinner />
        </div>
        <div v-if="errorMessage" class="mt-3">
          <p class="fw-bold text-danger">{{ errorMessage }}</p>
        </div>
        <div v-if="!loading && users.length > 0" class="row">
          <div class="col">
            <table class="table table-hover table-center table-striped">
              <thead class="bg-primary text-white">
                <tr>
                  <th>Sno</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Company</th>
                  <th>Website</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.id">
                  <th>{{ user.id }}</th>
                  <th>{{ user.name }}</th>
                  <th>Email</th>
                  <th>Company</th>
                  <th>Website</th>
                  <th>Location</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserService } from "@/services/UserService";
import LoadingSpinner from "./LoadingSpinner";

export default {
  name: "UserList",
  components: {
    LoadingSpinner,
  },
  data: function () {
    return {
      loading: false,
      users: [],
      errorMessage: null,
    };
  },
  created: async function () {
    try {
      this.loading = true;
      const response = await UserService.getAllUsers();
      this.loading = false;
      this.users = response.data;
    } catch (error) {
      this.loading = false;
      this.errorMessage = error.message;
    }
  },
};
</script>

<style></style>
