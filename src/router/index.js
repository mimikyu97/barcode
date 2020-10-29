import Vue from "vue";
import VueRouter from "vue-router";
import Category from "../views/Category.vue";
import Record from "../views/Record.vue";
import Show from "../views/Show.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Record",
    component: Record
  },
  {
    path: "/category",
    name: "Category",
    component: Category
  },
  {
    path: "/show",
    name: "Show",
    component: Show
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
