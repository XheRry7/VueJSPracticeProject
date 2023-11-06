<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <p>{{ this.count }}</p>
            <button @click="incr" class="btn btn-success m-1">Increment</button>
            <button @click="decr" class="btn btn-warning m-1">Decrement</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CounterApp",
  data: function () {
    return {
      count: 0,
    };
  },
  methods: {
    incr: function () {
      this.count = this.count + 1;
    },
    decr: function () {
      this.count = this.count - 1;
    },
  },
};
</script>

<style></style>
