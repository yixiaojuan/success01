import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../pages/LoginView.vue";
import RegitOff from '../pages/RegitView.vue'

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path:'/loginform',
    name:'loginform',
    component:RegitOff
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;