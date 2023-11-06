<template>
  <div class="container">
    <div class="grid">
      <div class="row">
        <div class="col">
          <h1>Home</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            ipsam! Unde voluptas temporibus distinctio excepturi non, ipsam
            molestias! Mollitia reprehenderit accusantium vero ut. Accusantium
            saepe laboriosam asperiores debitis, optio molestiae?
          </p>
          <i class="fa fa-home text-success fa-2x" aria-hidden="true"></i>
          <button class="btn btn-primary">My btn</button>
        </div>
      </div>
    </div>
    <AppCustomers name="Shehryar" Age="22" Description="New buyer" />
    <EmployeeRecords />
    <CounterApp />
    <GreetingsVue />
    <RegistrationForm />
  </div>
</template>

<script>
import AppCustomers from "@/components/AppCustomers";
import EmployeeRecords from "@/components/EmployeeRecords";
import CounterApp from "@/components/CounterApp";
import GreetingsVue from "./GreetingsVue";
import RegistrationForm from "@/components/RegistrationForm";

export default {
  name: "HelloWorld",
  components: {
    CounterApp,
    GreetingsVue,
    AppCustomers,
    EmployeeRecords,
    RegistrationForm,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
