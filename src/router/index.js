import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import BasketPage from "../views/BasketPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    meta: {
      header: {
        basket: true,
      },
    },
  },
  {
    path: "/basket",
    name: "BasketPage",
    component: BasketPage,
    meta: {
      header: {
        basket: false,
      },
    },
  },
  {
    path: "*",
    name: "NotFound",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
