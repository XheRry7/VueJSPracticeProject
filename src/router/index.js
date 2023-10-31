import { createRouter, createWebHashHistory } from "vue-router";
import MyComponent from "@/components/MyComponent";
import HelloWorld from "@/components/HelloWorld";

const routes = [
  { path: "/", name: "HelloWorld", component: HelloWorld },
  { path: "/about", name: "MyComponent", component: MyComponent },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
