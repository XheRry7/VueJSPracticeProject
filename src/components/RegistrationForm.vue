<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-3">
        <div class="card shadow-lg">
          <div class="card-header bg-success text-white">
            <p class="h3">Register here</p>
          </div>
          <div class="card-body bg-light">
            <form @submit.prevent="submitHandler()">
              <div class="mb-2">
                <input v-model="user.name" class="form-control" placeholder="Name" type="text" />
              </div>
              <div class="mb-2">
                <input v-model="user.Age" class="form-control" placeholder="Age" type="text" />
              </div>
              <div class="mb-2">
                <input v-model="user.Email" class="form-control" placeholder="Email" type="text" />
              </div>
              <div class="mb-2">
                <input class="btn btn-success" value="Register" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistrationForm",
  data: function() {
    return {
        user:{
    name: '',
    Age: '',
    Email: ''
        }
    }
  },
  methods: {
    submitHandler: function(){
      console.log("sa", this.user.name)
    }
  }
};
</script>

<style></style>
