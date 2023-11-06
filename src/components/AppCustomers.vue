<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="grid">
          <h1>Name: {{ name }}</h1>
          <h4>Age: {{ Age }}</h4>
          <h4>Description: {{ Description }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppCustomers",
  props: {
    name: String,
    Age: Number,
    Description: String,
  },
};
</script>

<style></style>
