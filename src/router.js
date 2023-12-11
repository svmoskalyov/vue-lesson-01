import { createWebHistory } from "vue-router";

import { createRouter } from "vue-router";

import Home from "@/pages/Home";
import PostPage from "@/pages/PostPage";
import About from "@/pages/About";
import PostIdPage from "@/components/PostIdPage.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/posts",
    component: PostPage,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/posts/:id",
    component: PostIdPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
