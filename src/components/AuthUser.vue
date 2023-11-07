<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <div v-if="login">
              <p class="h3 fw-bold text-success">Welcome Shehryar!</p>
              <p class="fst-italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                ex eveniet beatae, praesentium, molestiae nisi ad est impedit
                rerum delectus facere, deserunt expedita esse sit. Officiis
                repudiandae nesciunt eos ipsam.
              </p>
            </div>
            <div v-if="!login">
              <p class="h3 fw-bold text-primary">Thank you!!</p>
              <p class="fst-italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                ex eveniet beatae, praesentium, molestiae nisi ad est impedit
                rerum delectus facere, deserunt expedita esse sit.
              </p>
            </div>
            <div>
              <button
                v-if="!login"
                class="btn btn-success m-2"
                @click="loginHandler()"
              >
                Login
              </button>
              <button
                v-if="login"
                class="btn btn-danger m-2"
                @click="logOutHandler()"
              >
                LogOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthUser",
  data: function () {
    return {
      login: true,
    };
  },
  methods: {
    loginHandler: function () {
      this.login = true;
    },
    logOutHandler: function () {
      this.login = false;
    },
  },
};
</script>

<style></style>
