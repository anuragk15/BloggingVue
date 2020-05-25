import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/add",
    name: "Add",
    component: () => import("../views/Add.vue"),
    //lazy loads route when visited
    children: [
      {
        path: ":id",
        component: () => import("../views/Add.vue")
      }
    ]
  },
  {
    path: "/edit",
    name: "Edit",
    component: () => import("../views/Edit.vue")
  },
  {
    path: "/article/:id",
    name: "Article",
    component: () => import("../views/FullArticle.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
