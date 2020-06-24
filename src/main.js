import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  {
    path: "/",
    name: "list",
    component: require("./components/Lesson1")
  },
  {
    path: "/data/generation",
    name: "generation-data",
    component: require("./components/HelloWorld")
  },
  {
    path: "/data/fuel-consumption",
    name: "fuel-consumption-data",
    component: require("./components/HelloWorld")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
