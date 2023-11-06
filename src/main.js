import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

/*
Configure Font awesome
*/
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

/* 
Configure Bootstrap 
*/
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

createApp(App).use(router).mount("#app");
