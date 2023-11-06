<template>
  <div class="container mt-2">
    <div class="row">
      <div class="col-md-5">
        <div class="card shadow-lg">
          <div class="card-body">
            <h3>Hello {{ this.greeting }}</h3>
            <button
              class="btn btn-success m-1"
              @click="greetings('Good Morning')"
            >
              Good Morning
            </button>
            <button
              @click="greetings('Good Afternoon')"
              class="btn btn-warning m-1"
            >
              Good Afternoon
            </button>
            <button @click="greetings('Good Night')" class="btn btn-danger m-1">
              Good Night
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GreetingsVue",
  data: function () {
    return {
      greeting: "Good Morning",
    };
  },
  methods: {
    greetings: function (text) {
      this.greeting = text;
    },
  },
};
</script>

<style></style>
